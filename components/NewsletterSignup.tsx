"use client"

import { useState } from "react"
import { Mail, CheckCircle2, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface Props {
  variant?: "inline" | "boxed" | "footer"
  className?: string
}

export default function NewsletterSignup({ variant = "boxed", className }: Props) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.includes("@")) {
      setStatus("error")
      return
    }
    setStatus("loading")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Newsletter signup",
          email,
          visaType: "Newsletter",
          message: `New newsletter signup from website: ${email}`,
        }),
      })
      if (!res.ok) throw new Error()
      setStatus("success")
      setEmail("")
    } catch {
      setStatus("error")
    }
  }

  if (variant === "footer") {
    return (
      <form onSubmit={handleSubmit} className={cn("space-y-2", className)}>
        <p className="text-xs text-white/60 mb-2">Weekly Australia migration updates · No spam</p>
        <div className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            disabled={status === "loading" || status === "success"}
            className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-white/40 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-white/60"
          />
          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="bg-cmg-red text-white font-bold px-4 py-2.5 rounded-lg text-sm hover:bg-red-700 disabled:opacity-60 transition-colors"
          >
            {status === "loading" ? "..." : status === "success" ? "✓" : "Subscribe"}
          </button>
        </div>
        {status === "success" && (
          <p className="text-xs text-green-400 flex items-center gap-1 mt-2">
            <CheckCircle2 className="h-3 w-3" /> Subscribed — check your inbox
          </p>
        )}
        {status === "error" && (
          <p className="text-xs text-red-400 flex items-center gap-1 mt-2">
            <AlertCircle className="h-3 w-3" /> Something went wrong, please try again
          </p>
        )}
      </form>
    )
  }

  if (variant === "inline") {
    return (
      <div className={cn("bg-cmg-light-blue border border-cmg-border rounded-xl p-6 my-10", className)}>
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-cmg-blue flex items-center justify-center shrink-0">
            <Mail className="h-5 w-5 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-heading text-lg font-bold text-cmg-text mb-1">Get weekly migration updates</p>
            <p className="text-sm text-cmg-slate mb-4">
              SkillSelect round results, occupation list changes, policy updates — straight to your inbox.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2 flex-col sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                disabled={status === "loading" || status === "success"}
                className="flex-1 bg-white border border-cmg-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-cmg-blue focus:ring-2 focus:ring-cmg-blue/10"
              />
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="bg-cmg-red text-white font-bold px-5 py-2.5 rounded-lg text-sm hover:bg-red-700 disabled:opacity-60 transition-colors whitespace-nowrap"
              >
                {status === "loading" ? "Subscribing..." : status === "success" ? "Subscribed ✓" : "Get Updates"}
              </button>
            </form>
            {status === "error" && (
              <p className="text-xs text-cmg-red flex items-center gap-1 mt-2">
                <AlertCircle className="h-3 w-3" /> Please enter a valid email
              </p>
            )}
          </div>
        </div>
      </div>
    )
  }

  /* boxed (default) */
  return (
    <div className={cn("bg-white border border-cmg-border border-t-[3px] border-t-cmg-blue rounded-xl p-7 shadow-card", className)}>
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-cmg-light-blue mb-4">
          <Mail className="h-6 w-6 text-cmg-blue" />
        </div>
        <p className="eyebrow text-cmg-red mb-2">Stay informed</p>
        <h3 className="font-heading text-xl font-bold text-cmg-text mb-2">
          Australia Migration Weekly
        </h3>
        <p className="text-sm text-cmg-slate mb-5 max-w-md mx-auto">
          Visa policy changes, SkillSelect round results, occupation list updates — every Sunday. No spam, unsubscribe anytime.
        </p>
        <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto flex-col sm:flex-row">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            disabled={status === "loading" || status === "success"}
            className="flex-1 bg-white border border-cmg-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-cmg-blue focus:ring-2 focus:ring-cmg-blue/10"
          />
          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="bg-cmg-red text-white font-bold px-5 py-2.5 rounded-lg text-sm hover:bg-red-700 disabled:opacity-60 transition-colors"
          >
            {status === "loading" ? "..." : status === "success" ? "Subscribed ✓" : "Subscribe"}
          </button>
        </form>
        {status === "success" && (
          <p className="text-xs text-green-600 flex items-center justify-center gap-1 mt-3">
            <CheckCircle2 className="h-3 w-3" /> You&apos;re in! Check your inbox for confirmation.
          </p>
        )}
        {status === "error" && (
          <p className="text-xs text-cmg-red flex items-center justify-center gap-1 mt-3">
            <AlertCircle className="h-3 w-3" /> Please enter a valid email
          </p>
        )}
      </div>
    </div>
  )
}
