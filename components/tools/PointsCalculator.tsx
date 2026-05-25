"use client"

import { useState } from "react"
import { AlertCircle, CheckCircle2, XCircle } from "lucide-react"
import { pointsCategories, pointsBonuses, pointsThresholds } from "@/lib/visa-data"
import { cn } from "@/lib/utils"

export default function PointsCalculator() {
  const [selections, setSelections] = useState<Record<string, number>>({})
  const [bonuses, setBonuses] = useState<Record<string, boolean>>({})

  const baseScore = Object.values(selections).reduce((a, b) => a + b, 0)
  const bonusScore = Object.entries(bonuses)
    .filter(([, checked]) => checked)
    .reduce((acc, [key]) => {
      const bonus = pointsBonuses.find((b) => b.key === key)
      return acc + (bonus?.points ?? 0)
    }, 0)
  const totalScore = baseScore + bonusScore

  return (
    <div className="space-y-8">
      {/* Base categories */}
      <div className="space-y-6">
        {pointsCategories.map((cat) => (
          <div key={cat.key} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-card">
            <h3 className="font-heading text-lg font-semibold text-cmg-text mb-4">{cat.label}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {cat.options.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() =>
                    setSelections((prev) => ({
                      ...prev,
                      [cat.key]: prev[cat.key] === opt.value ? -1 : opt.value,
                    }))
                  }
                  className={cn(
                    "flex items-center justify-between rounded-xl px-4 py-3 text-sm border transition-all",
                    selections[cat.key] === opt.value
                      ? "bg-cmg-blue text-white border-cmg-blue"
                      : "bg-cmg-light-blue text-cmg-text border-transparent hover:border-cmg-blue/30"
                  )}
                >
                  <span>{opt.label}</span>
                  <span className={cn("font-bold ml-2", selections[cat.key] === opt.value ? "text-cmg-gold" : "text-cmg-blue")}>
                    +{opt.value}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bonus points */}
      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-card">
        <h3 className="font-heading text-lg font-semibold text-cmg-text mb-4">Bonus Points</h3>
        <div className="space-y-3">
          {pointsBonuses.map((bonus) => (
            <label
              key={bonus.key}
              className={cn(
                "flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all",
                bonuses[bonus.key]
                  ? "bg-cmg-blue/5 border-cmg-blue/30"
                  : "border-gray-100 hover:border-cmg-blue/20"
              )}
            >
              <input
                type="checkbox"
                checked={!!bonuses[bonus.key]}
                onChange={(e) => setBonuses((prev) => ({ ...prev, [bonus.key]: e.target.checked }))}
                className="mt-0.5 accent-cmg-blue"
              />
              <div className="flex-1 min-w-0">
                <span className="font-semibold text-cmg-text text-sm">{bonus.label}</span>
                <span className="block text-xs text-cmg-slate mt-0.5">{bonus.description}</span>
              </div>
              <span className="font-bold text-cmg-blue text-sm shrink-0">+{bonus.points}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Score result */}
      <div className="rounded-2xl gradient-navy-gold text-white p-8 shadow-hero">
        <div className="text-center mb-8">
          <p className="text-white/70 text-sm mb-1">Your Estimated Score</p>
          <div className="font-heading text-7xl font-bold">{totalScore}</div>
          <p className="text-white/70 text-sm mt-1">points</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {Object.entries(pointsThresholds).map(([code, info]) => {
            const eligible = totalScore >= info.minimum
            const invitationLikely = totalScore >= info.typical
            return (
              <div
                key={code}
                className={cn(
                  "rounded-xl p-4 text-center",
                  invitationLikely ? "bg-green-500/20" : eligible ? "bg-yellow-500/20" : "bg-white/10"
                )}
              >
                {invitationLikely ? (
                  <CheckCircle2 className="h-6 w-6 text-green-400 mx-auto mb-2" />
                ) : eligible ? (
                  <AlertCircle className="h-6 w-6 text-yellow-400 mx-auto mb-2" />
                ) : (
                  <XCircle className="h-6 w-6 text-white/40 mx-auto mb-2" />
                )}
                <p className="font-semibold text-sm">{info.label}</p>
                <p className="text-xs text-white/70 mt-1">
                  Typical invite: {info.typical}+ pts
                </p>
              </div>
            )
          })}
        </div>

        <p className="text-xs text-white/60 text-center leading-relaxed">
          ⚠️ This calculator provides an estimate only. Actual point allocation requires formal skills assessment by the relevant assessing authority. Book a consultation for a personalised assessment.
        </p>
      </div>
    </div>
  )
}
