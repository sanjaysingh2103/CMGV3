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
    <div
      className={cn(
        "rounded-xl p-7 flex flex-col transition-all duration-300 hover:-translate-y-1.5",
        highlighted
          ? "bg-cmg-navy border border-cmg-gold/40 shadow-[0_4px_32px_rgba(13,35,87,0.35)]"
          : "bg-white border border-cmg-cream-dark border-t-[3px] border-t-cmg-blue shadow-[0_2px_16px_rgba(26,24,38,0.06)] hover:shadow-[0_12px_36px_rgba(26,24,38,0.12)]"
      )}
    >
      {/* Subclass number badge */}
      <div
        className={cn(
          "inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5 font-heading font-bold text-lg",
          highlighted ? "bg-cmg-gold text-cmg-navy" : "bg-cmg-blue/10 text-cmg-blue"
        )}
      >
        {number}
      </div>

      <h3 className={cn(
        "font-heading text-xl font-bold mb-2.5 leading-tight",
        highlighted ? "text-white" : "text-cmg-ink"
      )}>
        {name}
      </h3>

      <p className={cn(
        "text-sm leading-relaxed mb-5",
        highlighted ? "text-white/65" : "text-cmg-slate"
      )}>
        {description}
      </p>

      <ul className="space-y-2.5 flex-1 mb-6">
        {keyPoints.map((pt) => (
          <li key={pt} className="flex items-start gap-2.5">
            <CheckCircle
              className={cn(
                "h-3.5 w-3.5 shrink-0 mt-0.5",
                highlighted ? "text-cmg-gold" : "text-cmg-blue"
              )}
            />
            <span className={cn(
              "text-xs leading-relaxed",
              highlighted ? "text-white/75" : "text-cmg-slate"
            )}>
              {pt}
            </span>
          </li>
        ))}
      </ul>

      <Link
        href={href}
        className={cn(
          "inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 group-hover:gap-2.5",
          highlighted ? "text-cmg-gold hover:text-white" : "text-cmg-blue hover:text-cmg-navy"
        )}
      >
        Learn More <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  )
}
