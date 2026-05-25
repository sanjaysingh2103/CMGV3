"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion"
import {
  CheckCircle2,
  AlertCircle,
  RotateCcw,
  Target,
  TrendingUp,
  Award,
  Sparkles,
  ArrowRight,
} from "lucide-react"
import { cn } from "@/lib/utils"

const categories = [
  {
    id: "age",
    title: "Age",
    description: "Points awarded based on your age at time of invitation.",
    options: [
      { label: "18–24 years", points: 25 },
      { label: "25–32 years", points: 30 },
      { label: "33–39 years", points: 25 },
      { label: "40–44 years", points: 15 },
      { label: "45 years or over", points: 0 },
    ],
  },
  {
    id: "english",
    title: "English Language Ability",
    description: "Based on IELTS, PTE, TOEFL or other approved test results.",
    options: [
      { label: "Superior English (IELTS 8.0+ each band)", points: 20 },
      { label: "Proficient English (IELTS 7.0+ each band)", points: 10 },
      { label: "Competent English (IELTS 6.0+ each band)", points: 0 },
    ],
  },
  {
    id: "overseas",
    title: "Overseas Skilled Employment",
    description: "Paid skilled employment outside Australia in the past 10 years.",
    options: [
      { label: "8–10 years", points: 15 },
      { label: "5–7 years", points: 10 },
      { label: "3–4 years", points: 5 },
      { label: "Less than 3 years / None", points: 0 },
    ],
  },
  {
    id: "australian",
    title: "Australian Skilled Employment",
    description: "Paid skilled employment inside Australia in the past 10 years.",
    options: [
      { label: "8–10 years", points: 20 },
      { label: "5–7 years", points: 15 },
      { label: "3–4 years", points: 10 },
      { label: "1–2 years", points: 5 },
      { label: "None", points: 0 },
    ],
  },
  {
    id: "education",
    title: "Educational Qualifications",
    description: "Your highest relevant educational qualification.",
    options: [
      { label: "Doctorate (PhD) from Australian institution", points: 20 },
      { label: "Bachelor's, Master's or Doctorate degree", points: 15 },
      { label: "Diploma or trade qualification", points: 10 },
      { label: "Award recognised in Australia", points: 10 },
      { label: "None of the above", points: 0 },
    ],
  },
  {
    id: "australian_study",
    title: "Australian Study Requirement",
    description: "At least 1 academic year of study in Australia leading to a qualification.",
    options: [
      { label: "Yes — studied in Australia", points: 5 },
      { label: "No", points: 0 },
    ],
  },
  {
    id: "specialist",
    title: "Specialist Education Qualification",
    description: "Master's by research or Doctoral degree in STEM, ICT, finance or specific fields.",
    options: [
      { label: "Yes — qualifying specialist degree", points: 10 },
      { label: "No", points: 0 },
    ],
  },
  {
    id: "partner",
    title: "Partner Skills",
    description: "Points for your partner's skills and English if included in the application.",
    options: [
      { label: "Partner: competent English + skills assessment", points: 10 },
      { label: "Partner: competent English only", points: 5 },
      { label: "No partner / partner is Australian citizen or PR", points: 10 },
      { label: "None of the above", points: 0 },
    ],
  },
  {
    id: "community_language",
    title: "Community Language",
    description: "NAATI-accredited translator in a language relevant to Australia's needs.",
    options: [
      { label: "Yes — NAATI accredited translator", points: 5 },
      { label: "No", points: 0 },
    ],
  },
  {
    id: "regional",
    title: "Regional Study Bonus",
    description: "At least 2 academic years of study at a regional Australian institution.",
    options: [
      { label: "Yes — 2+ years regional study", points: 5 },
      { label: "No", points: 0 },
    ],
  },
  {
    id: "professional_year",
    title: "Professional Year in Australia",
    description: "Completed a professional year in accounting, computing, or engineering in Australia.",
    options: [
      { label: "Yes — completed professional year", points: 5 },
      { label: "No", points: 0 },
    ],
  },
]

const visaThresholds = [
  {
    code: "189",
    name: "Skilled Independent",
    minScore: 65,
    invitationCutoff: 95,
    note: "Permanent · Live & work anywhere in Australia",
  },
  {
    code: "190",
    name: "Skilled Nominated",
    minScore: 65,
    invitationCutoff: 80,
    note: "Permanent · State/territory nominates you (+5 pts)",
  },
  {
    code: "491",
    name: "Skilled Work Regional",
    minScore: 65,
    invitationCutoff: 75,
    note: "Provisional · 5 years in regional Australia (+15 pts)",
  },
]

const INVITATION_TARGET = 95

function AnimatedNumber({ value }: { value: number }) {
  const motionValue = useMotionValue(0)
  const rounded = useTransform(motionValue, (latest) => Math.round(latest))
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const controls = animate(motionValue, value, {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    })
    const unsub = rounded.on("change", (v) => setDisplay(v))
    return () => {
      controls.stop()
      unsub()
    }
  }, [value, motionValue, rounded])

  return <>{display}</>
}

export default function PointsCalculator() {
  const [selected, setSelected] = useState<Record<string, number>>({})
  const topRef = useRef<HTMLDivElement>(null)

  const total = Object.values(selected).reduce((a, b) => a + b, 0)
  const completedCount = Object.keys(selected).length
  const progressToInvite = Math.min(100, (total / INVITATION_TARGET) * 100)

  const status =
    total >= 85
      ? { label: "Competitive", tone: "green", chip: "bg-green-50 text-green-700 border-green-200", dot: "bg-green-500" }
      : total >= 65
      ? { label: "Meets Minimum", tone: "amber", chip: "bg-amber-50 text-amber-800 border-amber-200", dot: "bg-amber-500" }
      : { label: "Below Minimum", tone: "red", chip: "bg-red-50 text-red-700 border-red-200", dot: "bg-cmg-red" }

  const qualifyingVisas = visaThresholds.filter((v) => total >= v.minScore)

  const handleReset = () => {
    setSelected({})
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div ref={topRef} className="relative">
      {/* Hero / Intro */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cmg-light-blue border border-cmg-border mb-4">
          <Sparkles className="h-3.5 w-3.5 text-cmg-blue" />
          <span className="text-[11px] font-semibold uppercase tracking-widest text-cmg-blue">Skilled Migration · Points Test</span>
        </div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-cmg-text leading-tight mb-3">
          Calculate Your Points Score
        </h2>
        <p className="text-cmg-slate text-base md:text-lg max-w-2xl leading-relaxed mb-6">
          A minimum of <span className="font-semibold text-cmg-text">65 points</span> is required to lodge an Expression of Interest for subclass 189, 190 or 491. Higher scores receive invitations sooner — typical successful applicants score 85–105.
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-cmg-light-blue flex items-center justify-center">
              <Target className="h-4 w-4 text-cmg-blue" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-cmg-slate font-semibold">EOI Threshold</p>
              <p className="font-heading text-cmg-text font-bold">65 pts</p>
            </div>
          </div>
          <div className="hidden sm:block w-px h-10 bg-cmg-border" />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-cmg-light-blue flex items-center justify-center">
              <TrendingUp className="h-4 w-4 text-cmg-blue" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-cmg-slate font-semibold">Typical Invitation</p>
              <p className="font-heading text-cmg-text font-bold">85–105 pts</p>
            </div>
          </div>
          <div className="hidden sm:block w-px h-10 bg-cmg-border" />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-cmg-light-blue flex items-center justify-center">
              <Award className="h-4 w-4 text-cmg-blue" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-cmg-slate font-semibold">Maximum Possible</p>
              <p className="font-heading text-cmg-text font-bold">130+ pts</p>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar — top */}
      <div className="mb-8 p-4 rounded-2xl bg-white border border-cmg-border shadow-card">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-semibold text-cmg-text">
            <span className="font-heading text-cmg-blue">{completedCount}</span>
            <span className="text-cmg-slate"> of {categories.length} categories completed</span>
          </p>
          {completedCount > 0 && (
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-cmg-slate hover:text-cmg-red transition-colors"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Reset
            </button>
          )}
        </div>
        <div className="h-2 w-full bg-cmg-light-blue rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-cmg-blue to-cmg-blue-light rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${(completedCount / categories.length) * 100}%` }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8">
        {/* Category cards */}
        <div className="space-y-4 lg:pb-0 pb-32">
          {categories.map((cat, idx) => {
            const catScore = selected[cat.id]
            const isComplete = catScore !== undefined
            return (
              <motion.div
                key={cat.id}
                initial={false}
                animate={{
                  borderColor: isComplete ? "#003087" : "#D5DEF0",
                }}
                transition={{ duration: 0.3 }}
                className={cn(
                  "rounded-2xl border bg-white p-5 md:p-6 transition-shadow",
                  isComplete ? "shadow-card" : "shadow-none hover:shadow-card"
                )}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative shrink-0">
                    <div
                      className={cn(
                        "w-9 h-9 rounded-full flex items-center justify-center font-heading font-bold text-sm transition-colors",
                        isComplete ? "bg-cmg-blue text-white" : "bg-cmg-light-blue text-cmg-blue"
                      )}
                    >
                      {idx + 1}
                    </div>
                    <AnimatePresence>
                      {isComplete && (
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={{ type: "spring", stiffness: 400, damping: 20 }}
                          className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-500 ring-2 ring-white flex items-center justify-center"
                        >
                          <CheckCircle2 className="h-3 w-3 text-white" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <h3 className="font-heading text-lg md:text-xl font-bold text-cmg-text leading-snug">
                        {cat.title}
                      </h3>
                      <AnimatePresence mode="wait">
                        {isComplete && (
                          <motion.span
                            key={catScore}
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 4 }}
                            transition={{ duration: 0.2 }}
                            className="shrink-0 inline-flex items-center px-2.5 py-1 rounded-full bg-cmg-blue text-white text-xs font-bold font-heading"
                          >
                            +{catScore} pts
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>
                    <p className="text-sm text-cmg-slate leading-relaxed">{cat.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-0 md:pl-[52px]">
                  {cat.options.map((opt) => {
                    const isSelected = selected[cat.id] === opt.points
                    return (
                      <button
                        key={opt.label}
                        onClick={() =>
                          setSelected((prev) => ({ ...prev, [cat.id]: opt.points }))
                        }
                        className={cn(
                          "group/opt flex items-center justify-between gap-3 px-4 py-3 rounded-xl border text-left text-sm transition-all duration-200",
                          isSelected
                            ? "border-cmg-blue bg-cmg-blue text-white shadow-blue"
                            : "border-cmg-border bg-white text-cmg-text hover:border-cmg-blue hover:bg-cmg-cream"
                        )}
                      >
                        <span className="flex-1 leading-snug">{opt.label}</span>
                        <span
                          className={cn(
                            "shrink-0 font-heading font-bold text-sm tabular-nums",
                            isSelected ? "text-white" : "text-cmg-blue"
                          )}
                        >
                          {opt.points > 0 ? `+${opt.points}` : "0"}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </motion.div>
            )
          })}

          {/* CTA card at bottom — appears when score is meaningful */}
          <AnimatePresence>
            {total > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl bg-gradient-to-br from-cmg-navy to-cmg-blue p-6 md:p-8 text-white relative overflow-hidden"
              >
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 80% 70%, white 1px, transparent 1px)",
                    backgroundSize: "32px 32px, 48px 48px",
                  }}
                />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="h-4 w-4 text-cmg-gold-light" />
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-cmg-gold-light">
                      Next Steps
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold mb-2 leading-tight">
                    {qualifyingVisas.length > 0 ? (
                      <>
                        Your score of <span className="text-cmg-gold-light">{total}</span> qualifies you for{" "}
                        {qualifyingVisas.map((v, i) => (
                          <span key={v.code}>
                            subclass {v.code}
                            {i < qualifyingVisas.length - 1
                              ? i === qualifyingVisas.length - 2
                                ? " and "
                                : ", "
                              : ""}
                          </span>
                        ))}
                        .
                      </>
                    ) : (
                      <>
                        Your score of <span className="text-cmg-gold-light">{total}</span> is below the 65-point threshold.
                      </>
                    )}
                  </h3>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6 max-w-2xl">
                    {qualifyingVisas.length > 0
                      ? "A MARA-registered agent can verify your assessment, confirm occupation eligibility, and build a strategy to maximise your invitation chances."
                      : "There are still options — state nomination, regional pathways, and partner inclusion can boost your score significantly. Speak to an agent to map your route."}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-cmg-red hover:bg-cmg-red-light transition-colors text-white font-semibold text-sm shadow-blue"
                    >
                      Book Free Consultation
                      <ArrowRight className="h-4 w-4" />
                    </a>
                    <a
                      href="/services"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/15 border border-white/20 transition-colors text-white font-semibold text-sm"
                    >
                      View Skilled Migration Services
                    </a>
                  </div>
                  <p className="text-white/50 text-xs mt-5 max-w-2xl leading-relaxed">
                    This estimate is indicative only. Final eligibility depends on skills assessment outcomes, occupation list inclusion, and current invitation rounds. Always seek advice from a MARA-registered migration agent.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Sticky sidebar (desktop) */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-4">
            {/* Score card */}
            <div className="rounded-2xl bg-gradient-to-br from-cmg-navy via-cmg-blue to-cmg-navy p-6 text-white shadow-blue relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 30% 20%, white 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">
                    Your Score
                  </p>
                  <span
                    className={cn(
                      "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11px] font-semibold",
                      status.chip
                    )}
                  >
                    <span className={cn("w-1.5 h-1.5 rounded-full", status.dot)} />
                    {status.label}
                  </span>
                </div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-heading text-6xl font-bold tabular-nums tracking-tight">
                    <AnimatedNumber value={total} />
                  </span>
                  <span className="text-white/50 text-sm font-medium">/ 130+</span>
                </div>
                <p className="text-white/60 text-xs mb-5">
                  {completedCount === categories.length
                    ? "All categories answered"
                    : `${categories.length - completedCount} categor${
                        categories.length - completedCount === 1 ? "y" : "ies"
                      } remaining`}
                </p>

                {/* Progress to invitation */}
                <div className="mb-2">
                  <div className="flex items-center justify-between text-[11px] mb-1.5">
                    <span className="text-white/60">Progress to invitation</span>
                    <span className="font-heading font-bold text-cmg-gold-light tabular-nums">
                      {Math.round(progressToInvite)}%
                    </span>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cmg-gold to-cmg-gold-light rounded-full"
                      initial={false}
                      animate={{ width: `${progressToInvite}%` }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                  <p className="text-[10px] text-white/40 mt-1.5">
                    Typical 189 invitation: ~{INVITATION_TARGET} pts
                  </p>
                </div>
              </div>
            </div>

            {/* Visa eligibility list */}
            <div className="rounded-2xl bg-white border border-cmg-border p-5 shadow-card">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cmg-slate mb-4">
                Visa Pathways
              </p>
              <div className="space-y-3">
                {visaThresholds.map((v) => {
                  const qualifies = total >= v.minScore
                  const competitive = total >= v.invitationCutoff
                  return (
                    <div
                      key={v.code}
                      className={cn(
                        "rounded-xl p-3 border transition-colors",
                        qualifies
                          ? "border-cmg-border bg-cmg-cream"
                          : "border-cmg-border/50 bg-white"
                      )}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <span
                            className={cn(
                              "font-heading font-bold text-sm",
                              qualifies ? "text-cmg-blue" : "text-cmg-slate/60"
                            )}
                          >
                            {v.code}
                          </span>
                          <span
                            className={cn(
                              "text-xs font-semibold",
                              qualifies ? "text-cmg-text" : "text-cmg-slate/60"
                            )}
                          >
                            {v.name}
                          </span>
                        </div>
                        {qualifies ? (
                          <CheckCircle2
                            className={cn(
                              "h-4 w-4",
                              competitive ? "text-green-500" : "text-amber-500"
                            )}
                          />
                        ) : (
                          <span className="text-[10px] font-semibold text-cmg-slate/60 tabular-nums">
                            need {v.minScore - total}+
                          </span>
                        )}
                      </div>
                      <p
                        className={cn(
                          "text-[11px] leading-snug",
                          qualifies ? "text-cmg-slate" : "text-cmg-slate/60"
                        )}
                      >
                        {v.note}
                      </p>
                      {qualifies && !competitive && (
                        <p className="text-[10px] text-amber-700 mt-1.5 font-medium">
                          Below typical invitation cutoff ({v.invitationCutoff} pts)
                        </p>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Disclaimer */}
            <div className="flex items-start gap-2 text-[11px] text-cmg-slate bg-amber-50 border border-amber-200 rounded-xl p-3">
              <AlertCircle className="h-3.5 w-3.5 text-amber-600 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                Guidance only. Actual eligibility depends on occupation lists, skills assessment outcomes, and current invitation rounds.
              </p>
            </div>
          </div>
        </aside>
      </div>

      {/* Mobile sticky bottom bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-cmg-border shadow-[0_-8px_24px_rgba(0,48,135,0.08)]">
        <div className="px-4 py-3 flex items-center gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-baseline gap-2">
              <span className="font-heading text-3xl font-bold text-cmg-text tabular-nums leading-none">
                <AnimatedNumber value={total} />
              </span>
              <span className="text-cmg-slate text-xs font-medium">pts</span>
              <span
                className={cn(
                  "inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-[10px] font-semibold",
                  status.chip
                )}
              >
                <span className={cn("w-1 h-1 rounded-full", status.dot)} />
                {status.label}
              </span>
            </div>
            <div className="mt-1.5 h-1 w-full bg-cmg-light-blue rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-cmg-blue to-cmg-gold rounded-full"
                initial={false}
                animate={{ width: `${progressToInvite}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
          <div className="text-right shrink-0">
            <p className="text-[10px] text-cmg-slate font-semibold uppercase tracking-wider">Qualifies</p>
            <p className="font-heading font-bold text-cmg-blue text-sm">
              {qualifyingVisas.length > 0
                ? qualifyingVisas.map((v) => v.code).join(", ")
                : "—"}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
