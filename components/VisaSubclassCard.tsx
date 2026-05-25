import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface VisaSubclassCardProps {
  number: string
  name: string
  description: string
  keyPoints: string[]
  href: string
  highlighted?: boolean
}

export default function VisaSubclassCard({
  number,
  name,
  description,
  keyPoints,
  href,
  highlighted = false,
}: VisaSubclassCardProps) {
  return (
    <div className={cn(
      "rounded-xl p-7 flex flex-col transition-all duration-200 hover:-translate-y-1",
      highlighted
        ? "bg-cmg-blue border border-cmg-blue shadow-blue"
        : "bg-white border border-cmg-border border-t-[3px] border-t-cmg-blue shadow-card hover:shadow-card-hover"
    )}>
      {/* Subclass number badge */}
      <div className={cn(
        "inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5 font-heading font-bold text-lg",
        highlighted ? "bg-white/15 text-white" : "bg-cmg-light-blue text-cmg-blue"
      )}>
        {number}
      </div>

      <h3 className={cn(
        "font-heading text-xl font-bold mb-2.5 leading-tight",
        highlighted ? "text-white" : "text-cmg-text"
      )}>
        {name}
      </h3>

      <p className={cn(
        "text-sm leading-relaxed mb-5",
        highlighted ? "text-white/70" : "text-cmg-slate"
      )}>
        {description}
      </p>

      <ul className="space-y-2.5 flex-1 mb-6">
        {keyPoints.map((pt) => (
          <li key={pt} className="flex items-start gap-2.5">
            <CheckCircle className={cn("h-3.5 w-3.5 shrink-0 mt-0.5", highlighted ? "text-white/70" : "text-cmg-blue")} />
            <span className={cn("text-xs leading-relaxed", highlighted ? "text-white/75" : "text-cmg-slate")}>
              {pt}
            </span>
          </li>
        ))}
      </ul>

      <Link
        href={href}
        className={cn(
          "inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200",
          highlighted ? "text-white hover:text-white/80" : "text-cmg-blue hover:text-cmg-navy"
        )}
      >
        Learn More <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  )
}
