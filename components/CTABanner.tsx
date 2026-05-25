import Link from "next/link"
import { cn } from "@/lib/utils"

interface CTABannerProps {
  headline: string
  body: string
  primaryCTA: { label: string; href: string }
  secondaryCTA: { label: string; href: string }
  variant?: "navy-gold" | "blue-red"
}

export default function CTABanner({
  headline,
  body,
  primaryCTA,
  secondaryCTA,
  variant = "navy-gold",
}: CTABannerProps) {
  return (
    <section
      className={cn(
        "py-20 px-4",
        variant === "navy-gold" ? "gradient-navy-gold" : "gradient-blue-red"
      )}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          {headline}
        </h2>
        <p className="text-lg text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto">
          {body}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryCTA.href}
            className="inline-flex items-center justify-center rounded-full bg-white text-cmg-blue font-semibold px-8 py-4 text-base hover:bg-cmg-warm-white transition-colors shadow-lg"
          >
            {primaryCTA.label}
          </Link>
          <Link
            href={secondaryCTA.href}
            className="inline-flex items-center justify-center rounded-full border-2 border-white text-white font-semibold px-8 py-4 text-base hover:bg-white/10 transition-colors"
          >
            {secondaryCTA.label}
          </Link>
        </div>
      </div>
    </section>
  )
}
