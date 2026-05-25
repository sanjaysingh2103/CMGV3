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

const iconStyles = {
  red:  { bg: "bg-red-50 group-hover:bg-cmg-red",          text: "text-cmg-red group-hover:text-white" },
  gold: { bg: "bg-amber-50 group-hover:bg-cmg-gold",        text: "text-cmg-gold group-hover:text-white" },
  blue: { bg: "bg-blue-50 group-hover:bg-cmg-blue",         text: "text-cmg-blue group-hover:text-white" },
}

export default function ServiceCard({
  icon: Icon, title, description, href, variant = "accent", accentColor = "red", className,
}: ServiceCardProps) {
  const colors = iconStyles[accentColor]
  const isFeatured = variant === "featured"

  return (
    <Link
      href={href}
      className={cn(
        "group block rounded-xl p-7 transition-all duration-300",
        /* Shadow lift on hover */
        "shadow-[0_2px_12px_rgba(26,24,38,0.06)] hover:shadow-[0_20px_50px_rgba(26,24,38,0.13)]",
        /* 3-D perspective tilt */
        "[perspective:800px] hover:[transform:translateY(-6px)_rotateX(1.5deg)_rotateY(-0.8deg)]",
        /* Card base */
        isFeatured
          ? "bg-gradient-to-br from-cmg-navy to-cmg-blue text-white border-0"
          : "bg-white border border-cmg-cream-dark",
        /* Top gold border (editorial accent) */
        !isFeatured && "border-t-[3px] border-t-cmg-gold",
        className
      )}
    >
      {/* Icon badge */}
      <div className={cn(
        "inline-flex items-center justify-center w-11 h-11 rounded-lg mb-5 transition-all duration-300",
        isFeatured ? "bg-white/15 group-hover:bg-white/25" : colors.bg,
      )}>
        <Icon className={cn(
          "h-5 w-5 transition-all duration-300",
          isFeatured ? "text-cmg-gold" : colors.text,
        )} />
      </div>

      {/* Title */}
      <h3 className={cn(
        "font-heading text-xl font-semibold mb-2.5 leading-tight transition-colors duration-200",
        isFeatured
          ? "text-white group-hover:text-cmg-gold"
          : "text-cmg-ink group-hover:text-cmg-blue"
      )}>
        {title}
      </h3>

      {/* Description */}
      <p className={cn(
        "leading-relaxed text-sm mb-5",
        isFeatured ? "text-white/70" : "text-cmg-slate"
      )}>
        {description}
      </p>

      {/* CTA link */}
      <span className={cn(
        "inline-flex items-center gap-1.5 font-semibold text-sm group-hover:gap-3 transition-all duration-200",
        isFeatured ? "text-cmg-gold" : "text-cmg-gold-deep"
      )}>
        Learn More <ArrowRight className="h-3.5 w-3.5" />
      </span>
    </Link>
  )
}
