import { AlertTriangle } from "lucide-react"
import { processingTimes } from "@/lib/visa-data"

const visaGroups = [
  { label: "Skilled Migration", visas: ["189", "190", "491"] },
  { label: "Employer Sponsored", visas: ["482", "186"] },
  { label: "Family Visas", visas: ["820/801"] },
  { label: "Study & Temporary", visas: ["500", "485"] },
  { label: "Business & Investor", visas: ["188A"] },
]

export default function ProcessingTimes() {
  return (
    <div className="space-y-6">
      {visaGroups.map((group) => {
        const rows = processingTimes.filter((t) => group.visas.includes(t.visa))
        return (
          <div key={group.label} className="rounded-2xl border border-gray-100 bg-white shadow-card overflow-hidden">
            <div className="bg-cmg-blue px-6 py-3">
              <h3 className="font-heading font-semibold text-white">{group.label}</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-cmg-light-blue text-cmg-text">
                    <th className="text-left px-6 py-3 font-semibold">Visa</th>
                    <th className="text-left px-6 py-3 font-semibold">Stream</th>
                    <th className="text-left px-6 py-3 font-semibold">75% Processed</th>
                    <th className="text-left px-6 py-3 font-semibold">90% Processed</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => (
                    <tr
                      key={`${row.visa}-${row.stream}`}
                      className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="px-6 py-4 font-semibold text-cmg-blue">
                        {row.visa}
                      </td>
                      <td className="px-6 py-4 text-cmg-text">{row.stream}</td>
                      <td className="px-6 py-4">
                        <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 font-medium text-xs">
                          {row.seventyFive}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-700 font-medium text-xs">
                          {row.ninety}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )
      })}

      {/* Disclaimer */}
      <div className="rounded-2xl bg-amber-50 border border-amber-200 p-6 flex gap-4">
        <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
        <div className="text-sm text-amber-800 leading-relaxed">
          <p className="font-semibold mb-1">Important Disclaimer</p>
          Processing times are sourced from the Department of Home Affairs (DHA) and are indicative only. Actual processing times vary based on application completeness, character and health check timing, and DHA workload at the time of lodgement. Commonwealth Migration Group cannot guarantee processing times. Check current processing times at immi.homeaffairs.gov.au.
        </div>
      </div>
    </div>
  )
}
