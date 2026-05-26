"use client"

import { useState } from "react"
import { AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const allTimes = [
  { subclass: "189", name: "Skilled Independent", category: "Skilled", p75: "12 months", p90: "24 months", p75m: 12, p90m: 24 },
  { subclass: "190", name: "Skilled Nominated", category: "Skilled", p75: "6 months", p90: "16 months", p75m: 6, p90m: 16 },
  { subclass: "491", name: "Skilled Work Regional", category: "Skilled", p75: "9 months", p90: "18 months", p75m: 9, p90m: 18 },
  { subclass: "482", name: "TSS - 2-year stream", category: "Employer", p75: "2 months", p90: "4 months", p75m: 2, p90m: 4 },
  { subclass: "482", name: "TSS - 4-year stream", category: "Employer", p75: "3 months", p90: "7 months", p75m: 3, p90m: 7 },
  { subclass: "186", name: "Employer Nomination (TRT)", category: "Employer", p75: "8 months", p90: "16 months", p75m: 8, p90m: 16 },
  { subclass: "820", name: "Partner (Onshore)", category: "Family", p75: "17 months", p90: "26 months", p75m: 17, p90m: 26 },
  { subclass: "309", name: "Partner (Offshore)", category: "Family", p75: "25 months", p90: "36 months", p75m: 25, p90m: 36 },
  { subclass: "300", name: "Prospective Marriage", category: "Family", p75: "15 months", p90: "22 months", p75m: 15, p90m: 22 },
  { subclass: "500", name: "Student Visa", category: "Student", p75: "1 month", p90: "2 months", p75m: 1, p90m: 2 },
  { subclass: "485", name: "Graduate (Post-Study Work)", category: "Student", p75: "4 months", p90: "9 months", p75m: 4, p90m: 9 },
  { subclass: "188A", name: "Business Innovation", category: "Business", p75: "19 months", p90: "34 months", p75m: 19, p90m: 34 },
  { subclass: "188C", name: "Significant Investor", category: "Business", p75: "16 months", p90: "29 months", p75m: 16, p90m: 29 },
]

const categories = ["All", "Skilled", "Employer", "Family", "Student", "Business"]
const MAX = 36

export default function ProcessingTimes() {
  const [active, setActive] = useState("All")
  const filtered = active === "All" ? allTimes : allTimes.filter((t) => t.category === active)

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button key={cat} onClick={() => setActive(cat)} className={cn("px-4 py-2 rounded-full text-sm font-medium border transition-all", active === cat ? "bg-cmg-blue text-white border-cmg-blue" : "bg-white text-cmg-text border-gray-200 hover:border-cmg-blue hover:text-cmg-blue")}>
            {cat}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filtered.map((t, i) => (
          <div key={`${t.subclass}-${i}`} className="bg-white rounded-2xl border border-gray-100 p-5 shadow-card">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-bold bg-cmg-blue text-white px-2 py-0.5 rounded-lg">{t.subclass}</span>
              <span className="text-xs font-medium text-cmg-slate uppercase tracking-wider">{t.category}</span>
              <span className="font-semibold text-cmg-text text-sm">{t.name}</span>
            </div>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-cmg-slate">75% of applications</span>
                  <span className="font-bold text-cmg-blue">{t.p75}</span>
                </div>
                <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-cmg-blue rounded-full transition-all" style={{ width: `${Math.min(100, (t.p75m / MAX) * 100)}%` }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-cmg-slate">90% of applications</span>
                  <span className="font-bold text-cmg-slate">{t.p90}</span>
                </div>
                <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-cmg-slate/40 rounded-full transition-all" style={{ width: `${Math.min(100, (t.p90m / MAX) * 100)}%` }} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-start gap-2 text-xs text-cmg-slate bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6">
        <AlertCircle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
        <p>Indicative estimates based on Department of Home Affairs data as at mid-2025. Actual times vary by application completeness, nationality, and caseload.</p>
      </div>
    </div>
  )
}
