import Link from "next/link"
import { ArrowRight, type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  href: string
  variant?: "default" | "featured"
  className?: string
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  variant = "default",
  className,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group block rounded-2xl p-8 border border-gray-100 bg-white shadow-card",
        "hover:shadow-hover hover:scale-[1.02] hover:border-cmg-blue/20",
        "transition-all duration-300",
        variant === "featured" && "border-cmg-blue/30 bg-cmg-light-blue",
        className
      )}
    >
      <div
        className={cn(
          "inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5",
          "bg-cmg-light-blue group-hover:bg-cmg-blue transition-colors duration-300",
          variant === "featured" && "bg-cmg-blue"
        )}
      >
        <Icon
          className={cn(
            "h-7 w-7 text-cmg-blue group-hover:text-white transition-colors duration-300",
            variant === "featured" && "text-white"
          )}
        />
      </div>
      <h3 className="font-heading text-xl font-semibold text-cmg-text mb-3">{title}</h3>
      <p className="text-cmg-slate leading-relaxed mb-4">{description}</p>
      <span className="inline-flex items-center gap-1 text-cmg-blue font-semibold text-sm group-hover:gap-2 transition-all">
        Learn More
        <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  )
}
