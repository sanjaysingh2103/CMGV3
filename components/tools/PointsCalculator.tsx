"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, AlertCircle } from "lucide-react"
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

const thresholds = [
  { visa: "189 Skilled Independent", minScore: 85, note: "Typical invitation score 85–100+" },
  { visa: "190 Skilled Nominated", minScore: 75, note: "State nomination adds 5 pts" },
  { visa: "491 Skilled Work Regional", minScore: 65, note: "Nomination adds 15 pts" },
  { visa: "Minimum to submit EOI", minScore: 65, note: "65 pts required" },
]

export default function PointsCalculator() {
  const [selected, setSelected] = useState<Record<string, number>>({})
  const [openCategory, setOpenCategory] = useState<string>("age")

  const total = Object.values(selected).reduce((a, b) => a + b, 0)
  const completedCount = Object.keys(selected).length

  const scoreColor = total >= 85 ? "text-green-500" : total >= 65 ? "text-cmg-gold" : "text-cmg-red"
  const scoreLabel = total >= 85 ? "Competitive" : total >= 65 ? "Meets Minimum" : "Below Minimum"

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-3">
        {categories.map((cat, idx) => {
          const isOpen = openCategory === cat.id
          const catScore = selected[cat.id] ?? null
          return (
            <div key={cat.id} className={cn("rounded-2xl border transition-all", isOpen ? "border-cmg-blue shadow-card" : "border-gray-200 bg-white")}>
              <button onClick={() => setOpenCategory(isOpen ? "" : cat.id)} className="w-full flex items-center justify-between p-5 text-left">
                <div className="flex items-center gap-3">
                  <span className={cn("w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center shrink-0", catScore !== null ? "bg-green-100 text-green-700" : "bg-gray-100 text-cmg-slate")}>
                    {catScore !== null ? "✓" : idx + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-cmg-text text-sm">{cat.title}</p>
                    {catScore !== null && !isOpen && (
                      <p className="text-xs text-green-600 font-medium">{catScore} pts selected</p>
                    )}
                  </div>
                </div>
                {isOpen ? <ChevronUp className="h-4 w-4 text-cmg-slate shrink-0" /> : <ChevronDown className="h-4 w-4 text-cmg-slate shrink-0" />}
              </button>
              {isOpen && (
                <div className="px-5 pb-5">
                  <p className="text-xs text-cmg-slate mb-4">{cat.description}</p>
                  <div className="space-y-2">
                    {cat.options.map((opt) => (
                      <button
                        key={opt.label}
                        onClick={() => setSelected((prev) => ({ ...prev, [cat.id]: opt.points }))}
                        className={cn(
                          "w-full flex items-center justify-between px-4 py-3 rounded-xl border text-sm transition-all",
                          selected[cat.id] === opt.points
                            ? "border-cmg-blue bg-cmg-blue text-white"
                            : "border-gray-100 bg-white text-cmg-text hover:border-cmg-blue/30 hover:bg-cmg-light-blue"
                        )}
                      >
                        <span>{opt.label}</span>
                        <span className={cn("font-bold", selected[cat.id] === opt.points ? "text-cmg-gold" : "text-cmg-blue")}>
                          {opt.points > 0 ? `+${opt.points}` : "0"} pts
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div className="lg:sticky lg:top-24 self-start space-y-5">
        <div className="rounded-2xl bg-cmg-navy p-6 text-center">
          <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-2">Your Score</p>
          <div className={cn("font-heading text-7xl font-bold mb-1", scoreColor)}>{total}</div>
          <p className={cn("text-sm font-semibold mb-4", scoreColor)}>{scoreLabel}</p>
          <div className="w-full bg-white/10 rounded-full h-2 mb-2">
            <div className="bg-cmg-gold h-2 rounded-full transition-all duration-500" style={{ width: `${Math.min(100, total)}%` }} />
          </div>
          <p className="text-white/40 text-xs">{completedCount}/{categories.length} categories answered</p>
        </div>
        <div className="rounded-2xl border border-gray-100 bg-white p-5">
          <p className="font-semibold text-cmg-text text-sm mb-4">Visa Eligibility</p>
          <div className="space-y-3">
            {thresholds.map((t) => (
              <div key={t.visa} className="flex items-start gap-2">
                <span className={cn("text-xs font-bold mt-0.5", total >= t.minScore ? "text-green-600" : "text-cmg-slate")}>
                  {total >= t.minScore ? "✓" : "✗"}
                </span>
                <div>
                  <p className="text-xs font-semibold text-cmg-text">{t.visa}</p>
                  <p className="text-[10px] text-cmg-slate">{t.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-start gap-2 text-xs text-cmg-slate bg-amber-50 border border-amber-200 rounded-xl p-4">
          <AlertCircle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
          <p>Guidance only. Actual eligibility depends on occupation lists, skills assessment outcomes, and current invitation rounds.</p>
        </div>
      </div>
    </div>
  )
}
