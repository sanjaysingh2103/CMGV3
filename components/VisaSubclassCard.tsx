import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface VisaSubclassCardProps {
  number: string
  name: string
  description: string
  keyPoints: string[]
  href: string
  highlighted?: boolean
}

export default function VisaSubclassCard({ number, name, description, keyPoints, href, highlighted = false }: VisaSubclassCardProps) {
  return (
    <div className={cn(
      "rounded-2xl p-7 border border-l-4 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 flex flex-col",
      highlighted ? "bg-cmg-navy border-cmg-gold border-l-cmg-gold" : "bg-white border-gray-100 border-l-cmg-blue"
    )}>
      <div className={cn("inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 font-heading font-bold text-lg", highlighted ? "bg-cmg-gold text-cmg-navy" : "bg-cmg-blue text-white")}>
        {number}
      </div>
      <h3 className={cn("font-heading text-xl font-bold mb-2", highlighted ? "text-white" : "text-cmg-text")}>{name}</h3>
      <p className={cn("text-sm leading-relaxed mb-4", highlighted ? "text-white/70" : "text-cmg-slate")}>{description}</p>
      <ul className="space-y-2 flex-1">
        {keyPoints.map((pt) => (
          <li key={pt} className={cn("text-xs flex items-start gap-2", highlighted ? "text-white/80" : "text-cmg-slate")}>
            <span className={cn("w-1 h-1 rounded-full shrink-0 mt-1.5", highlighted ? "bg-cmg-gold" : "bg-cmg-blue")} />
            {pt}
          </li>
        ))}
      </ul>
      <Link href={href} className={cn("mt-5 inline-flex items-center gap-1 text-sm font-semibold transition-colors", highlighted ? "text-cmg-gold hover:text-white" : "text-cmg-blue hover:text-cmg-navy")}>
        Learn More <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  )
}
