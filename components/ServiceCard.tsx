import Link from "next/link"
import { ArrowRight, type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  href: string
  variant?: "default" | "featured" | "accent"
  accentColor?: "red" | "gold" | "blue"
  className?: string
}

export default function ServiceCard({
  icon: Icon, title, description, href, variant = "accent", accentColor = "red", className,
}: ServiceCardProps) {
  const accentClass = {
    red: "border-l-cmg-red",
    gold: "border-l-cmg-gold",
    blue: "border-l-cmg-blue",
  }[accentColor]

  return (
    <Link
      href={href}
      className={cn(
        "group block rounded-2xl p-7 bg-white shadow-card border border-gray-100 border-l-4",
        "hover:shadow-hover hover:-translate-y-1 transition-all duration-300",
        variant === "accent" && accentClass,
        variant === "featured" && "border-l-cmg-blue bg-cmg-light-blue",
        className
      )}
    >
      <div className={cn(
        "inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5 transition-colors duration-300",
        "bg-cmg-light-blue group-hover:bg-cmg-blue",
        variant === "featured" && "bg-cmg-blue"
      )}>
        <Icon className={cn("h-6 w-6 text-cmg-blue group-hover:text-white transition-colors duration-300", variant === "featured" && "text-white")} />
      </div>
      <h3 className="font-heading text-xl font-semibold text-cmg-text mb-2">{title}</h3>
      <p className="text-cmg-slate leading-relaxed text-sm mb-5">{description}</p>
      <span className="inline-flex items-center gap-1 text-cmg-blue font-semibold text-sm group-hover:gap-2 transition-all">
        Learn More <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  )
}
