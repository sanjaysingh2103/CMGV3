"use client"

import { useState } from "react"
import { visaFees, additionalCosts } from "@/lib/visa-data"

export default function FeeEstimator() {
  const [selectedVisa, setSelectedVisa] = useState("")
  const [additionalApplicants, setAdditionalApplicants] = useState(0)
  const [children, setChildren] = useState(0)
  const [includeAdditional, setIncludeAdditional] = useState<Record<string, boolean>>({})

  const fee = visaFees.find((f) => f.subclass === selectedVisa)

  const visaTotal = fee
    ? fee.primaryApplicant +
      (fee.secondApplicant ? additionalApplicants * fee.secondApplicant : 0) +
      (fee.child ? children * fee.child : 0)
    : 0

  const additionalTotal = additionalCosts
    .filter((c) => includeAdditional[c.label])
    .reduce((acc, c) => {
      const people = 1 + additionalApplicants + children
      return acc + c.low * people
    }, 0)

  const grandTotal = visaTotal + additionalTotal

  return (
    <div className="space-y-6">
      {/* Visa selector */}
      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-card">
        <h3 className="font-heading text-lg font-semibold text-cmg-text mb-4">Select Visa Type</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {visaFees.map((f) => (
            <button
              key={f.subclass}
              type="button"
              onClick={() => setSelectedVisa(f.subclass)}
              className={`text-left px-4 py-3 rounded-xl border text-sm transition-all ${
                selectedVisa === f.subclass
                  ? "bg-cmg-blue text-white border-cmg-blue"
                  : "bg-cmg-light-blue border-transparent hover:border-cmg-blue/30 text-cmg-text"
              }`}
            >
              <span className="font-semibold block">Subclass {f.subclass}</span>
              <span className={selectedVisa === f.subclass ? "text-white/80" : "text-cmg-slate"}>
                {f.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {fee && (
        <>
          {/* Applicant counts */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-card">
            <h3 className="font-heading text-lg font-semibold text-cmg-text mb-4">Family Members</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {fee.secondApplicant !== null && (
                <div>
                  <label className="block text-sm font-medium text-cmg-text mb-2">
                    Secondary adult applicants
                  </label>
                  <input
                    type="number"
                    min={0}
                    max={10}
                    value={additionalApplicants}
                    onChange={(e) => setAdditionalApplicants(Number(e.target.value))}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-cmg-text focus:outline-none focus:border-cmg-blue"
                  />
                </div>
              )}
              {fee.child !== null && (
                <div>
                  <label className="block text-sm font-medium text-cmg-text mb-2">
                    Child applicants
                  </label>
                  <input
                    type="number"
                    min={0}
                    max={10}
                    value={children}
                    onChange={(e) => setChildren(Number(e.target.value))}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-cmg-text focus:outline-none focus:border-cmg-blue"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Additional costs */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-card">
            <h3 className="font-heading text-lg font-semibold text-cmg-text mb-4">Additional Costs (optional)</h3>
            <div className="space-y-3">
              {additionalCosts.map((cost) => (
                <label key={cost.label} className="flex items-start justify-between gap-4 cursor-pointer">
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      checked={!!includeAdditional[cost.label]}
                      onChange={(e) =>
                        setIncludeAdditional((p) => ({ ...p, [cost.label]: e.target.checked }))
                      }
                      className="mt-0.5 accent-cmg-blue"
                    />
                    <div>
                      <span className="text-sm font-medium text-cmg-text">{cost.label}</span>
                    </div>
                  </div>
                  <span className="text-sm text-cmg-slate shrink-0">
                    AUD ${cost.low}–${cost.high}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Fee breakdown */}
          <div className="rounded-2xl gradient-navy-gold text-white p-8 shadow-hero">
            <h3 className="font-heading text-xl font-semibold mb-6">Fee Breakdown</h3>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span>Primary applicant (Subclass {fee.subclass})</span>
                <span className="font-semibold">AUD ${fee.primaryApplicant.toLocaleString()}</span>
              </div>
              {fee.secondApplicant && additionalApplicants > 0 && (
                <div className="flex justify-between text-sm text-white/80">
                  <span>Secondary applicants × {additionalApplicants}</span>
                  <span>AUD ${(fee.secondApplicant * additionalApplicants).toLocaleString()}</span>
                </div>
              )}
              {fee.child && children > 0 && (
                <div className="flex justify-between text-sm text-white/80">
                  <span>Child applicants × {children}</span>
                  <span>AUD ${(fee.child * children).toLocaleString()}</span>
                </div>
              )}
              {additionalTotal > 0 && (
                <div className="flex justify-between text-sm text-white/80">
                  <span>Additional costs (estimate)</span>
                  <span>AUD ${additionalTotal.toLocaleString()}</span>
                </div>
              )}
              <div className="border-t border-white/20 pt-3 flex justify-between text-lg font-bold">
                <span>Estimated Total</span>
                <span className="text-cmg-gold">AUD ${grandTotal.toLocaleString()}</span>
              </div>
            </div>
            {fee.notes && <p className="text-xs text-white/60 mb-3">Note: {fee.notes}</p>}
            <p className="text-xs text-white/60 leading-relaxed">
              ⚠️ All fees are in Australian Dollars (AUD) and are indicative only. DHA visa application charges are updated periodically. Additional costs are estimates. Confirm current fees at immi.homeaffairs.gov.au.
            </p>
          </div>
        </>
      )}
    </div>
  )
}
