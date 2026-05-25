import Link from "next/link"
import { ArrowRight, type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  href: string
  accentColor?: "blue" | "red" | "gold"
  featured?: boolean
  variant?: "default" | "accent"
}

const topBorder: Record<string, string> = {
  blue: "border-t-cmg-blue",
  red:  "border-t-cmg-red",
  gold: "border-t-cmg-gold",
}

const iconStyle: Record<string, string> = {
  blue: "bg-cmg-light-blue text-cmg-blue",
  red:  "bg-red-50 text-cmg-red",
  gold: "bg-amber-50 text-cmg-gold",
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  accentColor = "blue",
  featured = false,
}: ServiceCardProps) {
  if (featured) {
    return (
      <Link
        href={href}
        className="group block bg-cmg-blue rounded-xl p-7 shadow-blue hover:shadow-[0_8px_32px_rgba(0,48,135,0.35)] hover:-translate-y-0.5 transition-all duration-200"
      >
        <div className="w-11 h-11 rounded-lg bg-white/15 flex items-center justify-center mb-5">
          <Icon className="h-5 w-5 text-white" />
        </div>
        <h3 className="font-heading text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-white/70 text-sm leading-relaxed mb-5">{description}</p>
        <span className="inline-flex items-center gap-1.5 text-white font-semibold text-sm group-hover:gap-2.5 transition-all duration-200">
          Learn More <ArrowRight className="h-4 w-4" />
        </span>
      </Link>
    )
  }

  return (
    <Link
      href={href}
      className={cn(
        "group block bg-white rounded-xl border border-cmg-border border-t-[3px] p-7",
        "shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200",
        topBorder[accentColor]
      )}
    >
      <div className={cn("w-11 h-11 rounded-lg flex items-center justify-center mb-5", iconStyle[accentColor])}>
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="font-heading text-lg font-bold text-cmg-text mb-2">{title}</h3>
      <p className="text-cmg-slate text-sm leading-relaxed mb-5">{description}</p>
      <span className="inline-flex items-center gap-1.5 text-cmg-blue font-semibold text-sm group-hover:gap-2.5 transition-all duration-200">
        Learn More <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  )
}
