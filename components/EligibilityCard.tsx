import { type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface EligibilityCardProps {
  icon: LucideIcon
  title: string
  detail: string
  required?: boolean
  accentColor?: "red" | "gold" | "blue"
}

export default function EligibilityCard({ icon: Icon, title, detail, required = true, accentColor = "blue" }: EligibilityCardProps) {
  const accent = { red: "border-l-cmg-red", gold: "border-l-cmg-gold", blue: "border-l-cmg-blue" }[accentColor]
  return (
    <div className={cn("bg-white rounded-xl p-5 border border-gray-100 border-l-4 shadow-card", accent)}>
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-lg bg-cmg-light-blue flex items-center justify-center shrink-0">
          <Icon className="h-5 w-5 text-cmg-blue" />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <p className="font-semibold text-cmg-text text-sm">{title}</p>
            {required && <span className="text-[10px] font-bold uppercase tracking-wider text-cmg-red bg-red-50 px-1.5 py-0.5 rounded">Required</span>}
          </div>
          <p className="text-cmg-slate text-xs leading-relaxed">{detail}</p>
        </div>
      </div>
    </div>
  )
}
