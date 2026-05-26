"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, CheckCircle2, Mail } from "lucide-react"
import { cn } from "@/lib/utils"
import { site } from "@/lib/site"
import { mailtoLink, whatsappLink } from "@/lib/lead-links"

/* ─── Hummingbird mark (matches navbar logo) ───────────────────────────── */
function HummingbirdMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 88" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M50 30 L96 6 L80 50 Z" />
      <path d="M6 48 C1 38 2 26 14 26 C20 26 24 22 32 24 L50 30 L80 50 C68 44 58 50 55 62 C52 74 58 82 68 83 L60 90 C42 90 26 80 20 66 C14 54 16 46 22 44 C16 44 10 48 6 48 Z" />
      <circle cx="13" cy="31" r="4" fill="white" />
    </svg>
  )
}

/* ─── Conversation flow ────────────────────────────────────────────────── */

type Stage =
  | "greeting"
  | "visaInterest"
  | "age"
  | "qualification"
  | "english"
  | "experience"
  | "name"
  | "email"
  | "phone"
  | "submitting"
  | "done"

interface Chip { label: string; value: string }

interface BotStep {
  prompt: (data: Record<string, string>) => string
  chips?: Chip[]
  input?: { type: "text" | "email" | "tel"; placeholder: string; field: string }
  next: Stage
  field?: string
}

const FLOW: Record<Stage, BotStep> = {
  greeting: {
    prompt: () => "Hi 👋 I'm Maya, CMG's virtual assistant. I help connect you with our MARA-authorised migration specialists. Are you exploring Australia migration?",
    chips: [
      { label: "Yes, tell me more", value: "Yes" },
      { label: "Just curious", value: "Curious" },
    ],
    next: "visaInterest",
    field: "intent",
  },
  visaInterest: {
    prompt: () => "Great! Which Australian visa pathway interests you most?",
    chips: [
      { label: "Skilled Migration (189/190/491)", value: "Skilled Migration" },
      { label: "Family / Partner", value: "Family / Partner" },
      { label: "Student Visa", value: "Student" },
      { label: "Business / Investor", value: "Business / Investor" },
      { label: "Visit Visa", value: "Visit Visa" },
      { label: "Not sure yet", value: "Not sure yet" },
    ],
    next: "age",
    field: "visaType",
  },
  age: {
    prompt: () => "To give you accurate guidance, what's your age range?",
    chips: [
      { label: "18–24", value: "18-24" },
      { label: "25–32", value: "25-32" },
      { label: "33–39", value: "33-39" },
      { label: "40–44", value: "40-44" },
      { label: "45+", value: "45+" },
    ],
    next: "qualification",
    field: "age",
  },
  qualification: {
    prompt: () => "What's your highest qualification?",
    chips: [
      { label: "PhD / Doctorate", value: "PhD" },
      { label: "Master's degree", value: "Master's" },
      { label: "Bachelor's degree", value: "Bachelor's" },
      { label: "Trade / Diploma", value: "Trade / Diploma" },
      { label: "Other", value: "Other" },
    ],
    next: "english",
    field: "qualification",
  },
  english: {
    prompt: () => "Have you taken an English test (IELTS / PTE / OET)?",
    chips: [
      { label: "Superior (IELTS 8+)", value: "Superior English" },
      { label: "Proficient (IELTS 7+)", value: "Proficient English" },
      { label: "Competent (IELTS 6+)", value: "Competent English" },
      { label: "Not yet", value: "No English test yet" },
    ],
    next: "experience",
    field: "english",
  },
  experience: {
    prompt: () => "Total years of work experience in your field?",
    chips: [
      { label: "Less than 3 years", value: "<3 years" },
      { label: "3–5 years", value: "3-5 years" },
      { label: "5–8 years", value: "5-8 years" },
      { label: "8+ years", value: "8+ years" },
    ],
    next: "name",
    field: "experience",
  },
  name: {
    prompt: () => "Perfect. To send you a personalised assessment, may I have your full name?",
    input: { type: "text", placeholder: "Your full name", field: "name" },
    next: "email",
  },
  email: {
    prompt: (data) => `Thanks ${data.name?.split(" ")[0] ?? "there"}! What's your best email?`,
    input: { type: "email", placeholder: "you@example.com", field: "email" },
    next: "phone",
  },
  phone: {
    prompt: () => "Last one - your WhatsApp or phone number (with country code)?",
    input: { type: "tel", placeholder: "+971 50 491 6720", field: "phone" },
    next: "submitting",
  },
  submitting: {
    prompt: () => "Just a moment while I save your details…",
    next: "done",
  },
  done: {
    prompt: (data) => `Thanks ${data.name?.split(" ")[0] ?? ""}! 👇 Choose how you'd like to send your details to our team. Both arrive directly with CMG.`,
    chips: [
      { label: "📧 Send via Email", value: "email" },
      { label: "💬 Send via WhatsApp", value: "whatsapp" },
      { label: "Browse services", value: "services" },
    ],
    next: "done",
  },
}

interface Message {
  role: "bot" | "user"
  text: string
}

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [tease, setTease] = useState(false)
  const [stage, setStage] = useState<Stage>("greeting")
  const [data, setData] = useState<Record<string, string>>({})
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [unread, setUnread] = useState(0)
  const messagesRef = useRef<HTMLDivElement>(null)

  /* Show greeting tease after 4s on first load */
  useEffect(() => {
    const seen = typeof window !== "undefined" && sessionStorage.getItem("cmg-bot-seen")
    if (seen) return
    const t = setTimeout(() => {
      setTease(true)
      setUnread(1)
      sessionStorage.setItem("cmg-bot-seen", "1")
    }, 4000)
    return () => clearTimeout(t)
  }, [])

  /* Seed the conversation on open */
  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ role: "bot", text: FLOW.greeting.prompt({}) }])
    }
    if (open) {
      setTease(false)
      setUnread(0)
    }
  }, [open, messages.length])

  /* Auto-scroll to latest message */
  useEffect(() => {
    messagesRef.current?.scrollTo({ top: messagesRef.current.scrollHeight, behavior: "smooth" })
  }, [messages])

  function advance(value: string, label?: string) {
    const step = FLOW[stage]
    const displayed = label ?? value
    const newData = { ...data, [step.field ?? step.input?.field ?? stage]: value }
    setData(newData)
    setMessages((prev) => [...prev, { role: "user", text: displayed }])

    const next = step.next
    setStage(next)

    if (next === "submitting") {
      submitLead(newData)
    }

    setTimeout(() => {
      const nextStep = FLOW[next]
      setMessages((prev) => [...prev, { role: "bot", text: nextStep.prompt(newData) }])
    }, 500)
  }

  /**
   * No backend - the chatbot collects info then hands off to mailto: or WhatsApp
   * at the very end. The "submitting" stage just shows a brief "saving" animation
   * before showing the two send-option buttons.
   */
  function submitLead(payload: Record<string, string>) {
    setTimeout(() => {
      setSubmitted(true)
      setStage("done")
      setMessages((prev) => [...prev, { role: "bot", text: FLOW.done.prompt(payload) }])
    }, 600)
  }

  /* Build payload for the final mailto/WhatsApp handoff */
  function buildLeadPayload() {
    return {
      source: "Website chatbot (Maya)",
      name: data.name,
      email: data.email,
      phone: data.phone,
      visaType: data.visaType,
      extra: {
        Age: data.age,
        Qualification: data.qualification,
        English: data.english,
        Experience: data.experience,
      },
    }
  }

  function handleDoneChip(value: string) {
    const payload = buildLeadPayload()
    if (value === "whatsapp") {
      window.open(whatsappLink(payload), "_blank")
      setMessages((prev) => [
        ...prev,
        { role: "user", text: "Send via WhatsApp" },
        { role: "bot", text: "🚀 Opening WhatsApp - hit send to deliver your details. Speak soon!" },
      ])
    } else if (value === "email") {
      window.location.href = mailtoLink(payload)
      setMessages((prev) => [
        ...prev,
        { role: "user", text: "Send via Email" },
        { role: "bot", text: "📧 Opening your email - hit send to deliver your details. Speak soon!" },
      ])
    } else if (value === "services") {
      window.location.href = "/services"
    }
  }

  function submitInput(e: React.FormEvent) {
    e.preventDefault()
    if (!input.trim()) return
    advance(input.trim())
    setInput("")
  }

  const current = FLOW[stage]
  const showChips = current.chips && messages[messages.length - 1]?.role === "bot"
  const showInput = current.input && messages[messages.length - 1]?.role === "bot"

  return (
    <>
      {/* Tease bubble */}
      {tease && !open && (
        <div className="fixed bottom-32 right-5 z-40 max-w-[260px] bg-white border border-cmg-border rounded-2xl shadow-card-hover p-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            onClick={() => setTease(false)}
            className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-cmg-text text-white flex items-center justify-center text-xs"
            aria-label="Dismiss"
          >
            ×
          </button>
          <p className="text-sm text-cmg-text font-semibold leading-snug mb-2">
            👋 Hi! I&apos;m Maya - your CMG assistant.
          </p>
          <p className="text-xs text-cmg-slate leading-snug mb-3">
            Quick eligibility check? Takes under a minute.
          </p>
          <button
            onClick={() => setOpen(true)}
            className="text-xs font-bold text-cmg-red hover:text-red-700"
          >
            Start chat →
          </button>
        </div>
      )}

      {/* Floating button - side-by-side with WhatsApp, prominent with pulsing ring + label */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Open chat with Maya"
          className="group fixed bottom-5 right-[96px] z-50 flex flex-col items-center"
        >
          {/* Pulsing ring */}
          <span className="absolute top-0 right-0 w-16 h-16 rounded-full bg-cmg-blue opacity-50 animate-ping" aria-hidden />
          {/* Main button */}
          <span className="relative flex items-center justify-center bg-cmg-blue hover:bg-cmg-navy text-white rounded-full shadow-[0_10px_32px_rgba(0,48,135,0.55)] w-16 h-16 transition-all group-hover:scale-110">
            <MessageCircle className="h-7 w-7" />
            {unread > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-cmg-red text-white text-[10px] font-bold flex items-center justify-center border-2 border-white">
                {unread}
              </span>
            )}
          </span>
          {/* Label */}
          <span className="mt-1.5 text-[10px] font-bold text-cmg-text tracking-wider uppercase bg-white/95 backdrop-blur-sm rounded-full px-2.5 py-1 shadow-md whitespace-nowrap">
            Chat with Maya
          </span>
        </button>
      )}

      {/* Panel */}
      {open && (
        <div className="fixed bottom-4 right-4 left-4 sm:left-auto sm:right-5 z-50 sm:w-[400px] h-[600px] max-h-[calc(100vh-2rem)] bg-white shadow-[0_20px_60px_rgba(0,13,58,0.30)] rounded-2xl flex flex-col overflow-hidden border border-cmg-border animate-in fade-in slide-in-from-bottom-3 duration-300">
          {/* Header */}
          <header className="bg-cmg-blue text-white p-4 flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-xl bg-cmg-red flex items-center justify-center shadow-md shrink-0">
              <HummingbirdMark className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-[15px] leading-tight">Maya - CMG Assistant</p>
              <p className="text-xs text-white/70 flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Online · Replies instantly
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="text-white/70 hover:text-white p-1.5 rounded-md hover:bg-white/10 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </header>

          {/* Messages */}
          <div ref={messagesRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-section-alt">
            {messages.map((m, i) => (
              <div key={i} className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}>
                {m.role === "bot" && (
                  <div className="w-7 h-7 rounded-full bg-cmg-red flex items-center justify-center shrink-0 mr-2 mt-0.5">
                    <HummingbirdMark className="w-4 h-4 text-white" />
                  </div>
                )}
                <div
                  className={cn(
                    "max-w-[80%] rounded-2xl px-4 py-2.5 text-[14px] leading-relaxed",
                    m.role === "user"
                      ? "bg-cmg-blue text-white rounded-br-sm"
                      : "bg-white border border-cmg-border text-cmg-text rounded-bl-sm shadow-sm",
                  )}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {/* Quick reply chips */}
            {showChips && (
              <div className="flex flex-wrap gap-2 pl-9 pt-1">
                {current.chips!.map((c) => (
                  <button
                    key={c.value}
                    onClick={() => (stage === "done" ? handleDoneChip(c.value) : advance(c.value, c.label))}
                    className="px-3 py-1.5 rounded-full border border-cmg-blue/40 text-cmg-blue text-xs font-bold hover:bg-cmg-blue hover:text-white hover:border-cmg-blue transition-colors"
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            )}

            {/* Submitting indicator */}
            {stage === "submitting" && !submitted && (
              <div className="flex pl-9">
                <div className="bg-white border border-cmg-border rounded-2xl px-4 py-3 flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cmg-blue/50 animate-bounce" />
                  <span className="w-2 h-2 rounded-full bg-cmg-blue/50 animate-bounce" style={{ animationDelay: "0.15s" }} />
                  <span className="w-2 h-2 rounded-full bg-cmg-blue/50 animate-bounce" style={{ animationDelay: "0.3s" }} />
                </div>
              </div>
            )}
          </div>

          {/* Input bar (only for text questions) */}
          {showInput && stage !== "submitting" && stage !== "done" && (
            <form onSubmit={submitInput} className="border-t border-cmg-border p-3 flex gap-2 bg-white shrink-0">
              <input
                type={current.input!.type}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={current.input!.placeholder}
                required
                autoFocus
                className="flex-1 px-3.5 py-2.5 border border-cmg-border rounded-lg text-sm focus:outline-none focus:border-cmg-blue focus:ring-2 focus:ring-cmg-blue/10"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                aria-label="Send"
                className="bg-cmg-red text-white p-2.5 rounded-lg hover:bg-red-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          )}

          {/* Footer */}
          <div className="px-4 py-2 border-t border-cmg-border bg-white text-[10px] text-cmg-slate text-center shrink-0">
            Powered by Commonwealth Migration Group · MARA-Authorised
            {submitted && (
              <span className="ml-2 text-green-600 inline-flex items-center gap-1 font-semibold">
                <CheckCircle2 className="h-3 w-3" /> Details saved
              </span>
            )}
          </div>
        </div>
      )}
    </>
  )
}
