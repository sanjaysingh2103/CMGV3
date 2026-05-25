import { cn } from "@/lib/utils"

interface FeeRow {
  item: string
  fee: string
  notes?: string
}

interface FeesTableProps {
  rows: FeeRow[]
  total?: string
  disclaimer?: string
  title?: string
}

export default function FeesTable({ rows, total, disclaimer, title = "Government Fees 2025–26" }: FeesTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-card">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-cmg-blue text-white">
            <th className="text-left px-5 py-3.5 font-semibold">{title}</th>
            <th className="text-right px-5 py-3.5 font-semibold">Fee (AUD)</th>
            <th className="text-left px-5 py-3.5 font-semibold hidden md:table-cell">Notes</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={cn("border-t border-gray-100", i % 2 === 0 ? "bg-white" : "bg-cmg-light-blue/50")}>
              <td className="px-5 py-3.5 text-cmg-text font-medium">{row.item}</td>
              <td className="px-5 py-3.5 text-right text-cmg-blue font-semibold">{row.fee}</td>
              <td className="px-5 py-3.5 text-cmg-slate hidden md:table-cell">{row.notes ?? ""}</td>
            </tr>
          ))}
          {total && (
            <tr className="border-t-2 border-cmg-blue/20 bg-cmg-light-blue">
              <td className="px-5 py-4 font-bold text-cmg-text">Estimated Total</td>
              <td className="px-5 py-4 text-right font-bold text-cmg-navy text-base">{total}</td>
              <td className="px-5 py-4 hidden md:table-cell" />
            </tr>
          )}
        </tbody>
      </table>
      {disclaimer && <p className="px-5 py-3 text-xs text-cmg-slate bg-gray-50 border-t border-gray-100">{disclaimer}</p>}
    </div>
  )
}
