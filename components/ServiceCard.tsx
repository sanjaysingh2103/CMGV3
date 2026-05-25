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

const accentColors = {
  red:  { border: "border-l-cmg-red",  icon: "bg-red-50 group-hover:bg-cmg-red",   iconText: "text-cmg-red group-hover:text-white" },
  gold: { border: "border-l-cmg-gold", icon: "bg-amber-50 group-hover:bg-cmg-gold", iconText: "text-cmg-gold group-hover:text-white" },
  blue: { border: "border-l-cmg-blue", icon: "bg-cmg-light-blue group-hover:bg-cmg-blue", iconText: "text-cmg-blue group-hover:text-white" },
}

export default function ServiceCard({
  icon: Icon, title, description, href, variant = "accent", accentColor = "red", className,
}: ServiceCardProps) {
  const colors = accentColors[accentColor]

  return (
    <Link
      href={href}
      className={cn(
        "group block rounded-2xl p-7 bg-white border-l-4 transition-all duration-300",
        "shadow-[0_2px_12px_rgba(13,35,87,0.06)] hover:shadow-[0_12px_40px_rgba(13,35,87,0.14)]",
        "hover:-translate-y-1.5 border border-gray-100/80",
        variant === "accent" && colors.border,
        variant === "featured" && "border-l-cmg-blue bg-gradient-to-br from-cmg-light-blue to-white",
        className
      )}
    >
      <div className={cn(
        "inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5 transition-all duration-300",
        variant === "featured" ? "bg-cmg-blue" : colors.icon,
      )}>
        <Icon className={cn(
          "h-6 w-6 transition-all duration-300",
          variant === "featured" ? "text-white" : colors.iconText,
        )} />
      </div>
      <h3 className="font-heading text-xl font-semibold text-cmg-text mb-2 group-hover:text-cmg-blue transition-colors duration-200">
        {title}
      </h3>
      <p className="text-cmg-slate leading-relaxed text-sm mb-5">{description}</p>
      <span className="inline-flex items-center gap-1.5 text-cmg-blue font-bold text-sm group-hover:gap-2.5 transition-all duration-200">
        Learn More <ArrowRight className="h-3.5 w-3.5" />
      </span>
    </Link>
  )
}
