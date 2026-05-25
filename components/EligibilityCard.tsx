import { type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface EligibilityCardProps {
  icon: LucideIcon
  title: string
  detail: string
  required?: boolean
  accentColor?: "red" | "gold" | "blue"
}

const accentStyles = {
  red:  { topBorder: "border-t-cmg-red",  iconBg: "bg-red-50",         iconText: "text-cmg-red"  },
  gold: { topBorder: "border-t-cmg-gold", iconBg: "bg-amber-50",       iconText: "text-cmg-gold" },
  blue: { topBorder: "border-t-cmg-blue", iconBg: "bg-cmg-light-blue", iconText: "text-cmg-blue" },
}

export default function EligibilityCard({
  icon: Icon,
  title,
  detail,
  required = true,
  accentColor = "blue",
}: EligibilityCardProps) {
  const styles = accentStyles[accentColor]

  return (
    <div className={cn(
      "bg-white rounded-xl p-5 border border-cmg-border border-t-[3px] shadow-card hover:shadow-card-hover transition-shadow duration-200",
      styles.topBorder
    )}>
      <div className="flex items-start gap-3">
        <div className={cn("w-9 h-9 rounded-lg flex items-center justify-center shrink-0", styles.iconBg)}>
          <Icon className={cn("h-5 w-5", styles.iconText)} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start gap-2 mb-1 flex-wrap">
            <p className="font-semibold text-cmg-text text-sm leading-snug">{title}</p>
            {required && (
              <span className="text-[9px] font-bold uppercase tracking-wider text-cmg-red bg-red-50 border border-red-100 px-1.5 py-0.5 rounded shrink-0">
                Required
              </span>
            )}
          </div>
          <p className="text-cmg-slate text-xs leading-relaxed">{detail}</p>
        </div>
      </div>
    </div>
  )
}
