"use client"

import { useState } from "react"
import { Plus, Minus, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const visaTypes = [
  { id: "189", label: "Skilled Independent", subclass: "189", primaryFee: 4770, adultFee: 2385, childFee: 1195, extras: [{ item: "Skills Assessment", min: 300, max: 800 }, { item: "English Test", min: 300, max: 400 }, { item: "Health Exam", min: 300, max: 500 }, { item: "Police Clearances", min: 50, max: 200 }] },
  { id: "190", label: "Skilled Nominated", subclass: "190", primaryFee: 4770, adultFee: 2385, childFee: 1195, extras: [{ item: "Skills Assessment", min: 300, max: 800 }, { item: "English Test", min: 300, max: 400 }, { item: "Health Exam", min: 300, max: 500 }, { item: "Police Clearances", min: 50, max: 200 }] },
  { id: "482", label: "Temp Skill Shortage", subclass: "482", primaryFee: 3115, adultFee: 1560, childFee: 780, extras: [{ item: "Health Exam", min: 300, max: 500 }, { item: "Police Clearances", min: 50, max: 200 }] },
  { id: "186", label: "Employer Nomination", subclass: "186", primaryFee: 4770, adultFee: 2385, childFee: 1195, extras: [{ item: "Health Exam", min: 300, max: 500 }, { item: "Police Clearances", min: 50, max: 200 }] },
  { id: "820", label: "Partner Visa (Onshore)", subclass: "820/801", primaryFee: 8850, adultFee: 4430, childFee: 2215, extras: [{ item: "Health Exam", min: 300, max: 500 }, { item: "Police Clearances", min: 50, max: 200 }] },
  { id: "500", label: "Student Visa", subclass: "500", primaryFee: 1680, adultFee: 1680, childFee: 420, extras: [{ item: "OSHC Insurance (per year)", min: 500, max: 800 }, { item: "English Test", min: 300, max: 400 }] },
]

function Counter({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  return (
    <div className="flex items-center gap-3">
      <button onClick={() => onChange(Math.max(0, value - 1))} className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:border-cmg-blue transition-colors">
        <Minus className="h-3 w-3" />
      </button>
      <span className="w-6 text-center font-bold text-cmg-text">{value}</span>
      <button onClick={() => onChange(Math.min(10, value + 1))} className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:border-cmg-blue transition-colors">
        <Plus className="h-3 w-3" />
      </button>
    </div>
  )
}

export default function FeeEstimator() {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [adults, setAdults] = useState(0)
  const [children, setChildren] = useState(0)

  const visa = visaTypes.find((v) => v.id === selectedId)
  const govFees = visa ? visa.primaryFee + adults * visa.adultFee + children * visa.childFee : 0
  const extrasMin = visa ? visa.extras.reduce((s, e) => s + e.min, 0) : 0
  const extrasMax = visa ? visa.extras.reduce((s, e) => s + e.max, 0) : 0

  return (
    <div className="space-y-8">
      <div>
        <p className="font-semibold text-cmg-text mb-1">Step 1 - Select visa type</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3">
          {visaTypes.map((v) => (
            <button key={v.id} onClick={() => setSelectedId(v.id)} className={cn("p-4 rounded-xl border text-left transition-all", selectedId === v.id ? "border-cmg-blue bg-cmg-blue text-white shadow-card" : "border-gray-100 bg-white hover:border-cmg-blue/30 hover:bg-cmg-light-blue")}>
              <span className={cn("text-xs font-bold block mb-1", selectedId === v.id ? "text-cmg-gold" : "text-cmg-blue")}>{v.subclass}</span>
              <span className={cn("text-sm font-semibold leading-tight block", selectedId === v.id ? "text-white" : "text-cmg-text")}>{v.label}</span>
            </button>
          ))}
        </div>
      </div>

      {visa && (
        <>
          <div>
            <p className="font-semibold text-cmg-text mb-3">Step 2 - Family members</p>
            <div className="bg-cmg-light-blue rounded-2xl p-5 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-cmg-text text-sm">Adult dependants (18+)</p>
                  <p className="text-xs text-cmg-slate">AUD ${visa.adultFee.toLocaleString()} each</p>
                </div>
                <Counter value={adults} onChange={setAdults} />
              </div>
              <div className="flex items-center justify-between border-t border-cmg-blue/10 pt-4">
                <div>
                  <p className="font-medium text-cmg-text text-sm">Child dependants (under 18)</p>
                  <p className="text-xs text-cmg-slate">AUD ${visa.childFee.toLocaleString()} each</p>
                </div>
                <Counter value={children} onChange={setChildren} />
              </div>
            </div>
          </div>

          <div>
            <p className="font-semibold text-cmg-text mb-4">Step 3 - Cost breakdown</p>
            <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-card">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-cmg-blue text-white">
                    <th className="text-left px-5 py-3.5 font-semibold">Item</th>
                    <th className="text-right px-5 py-3.5 font-semibold">AUD</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-t border-gray-100">
                    <td className="px-5 py-3 font-medium text-cmg-text">Subclass {visa.subclass} - Primary</td>
                    <td className="px-5 py-3 text-right text-cmg-blue font-semibold">${visa.primaryFee.toLocaleString()}</td>
                  </tr>
                  {adults > 0 && (
                    <tr className="bg-cmg-light-blue/40 border-t border-gray-100">
                      <td className="px-5 py-3 text-cmg-text">{adults} Adult Dependant{adults > 1 ? "s" : ""}</td>
                      <td className="px-5 py-3 text-right text-cmg-blue font-semibold">${(adults * visa.adultFee).toLocaleString()}</td>
                    </tr>
                  )}
                  {children > 0 && (
                    <tr className="bg-white border-t border-gray-100">
                      <td className="px-5 py-3 text-cmg-text">{children} Child{children > 1 ? "ren" : ""}</td>
                      <td className="px-5 py-3 text-right text-cmg-blue font-semibold">${(children * visa.childFee).toLocaleString()}</td>
                    </tr>
                  )}
                  <tr className="bg-cmg-light-blue/40 border-t border-gray-100">
                    <td className="px-5 py-3 font-semibold text-cmg-text">Govt Fees Subtotal</td>
                    <td className="px-5 py-3 text-right font-bold text-cmg-blue">${govFees.toLocaleString()}</td>
                  </tr>
                  {visa.extras.map((e, i) => (
                    <tr key={e.item} className={cn("border-t border-gray-100", i % 2 === 0 ? "bg-white" : "bg-cmg-light-blue/20")}>
                      <td className="px-5 py-3 text-cmg-slate">{e.item}</td>
                      <td className="px-5 py-3 text-right text-cmg-slate">${e.min.toLocaleString()}–${e.max.toLocaleString()}</td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-cmg-blue/20 bg-cmg-light-blue">
                    <td className="px-5 py-4 font-bold text-cmg-text">Estimated Total Range</td>
                    <td className="px-5 py-4 text-right font-bold text-cmg-navy text-base">${(govFees + extrasMin).toLocaleString()} – ${(govFees + extrasMax).toLocaleString()}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex items-start gap-2 text-xs text-cmg-slate bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4">
              <AlertCircle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
              <p>Government fees are indexed each July. Professional/agent fees quoted separately. For indicative purposes only.</p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
