import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
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
        "relative py-20 px-4 overflow-hidden",
        variant === "navy-gold" ? "gradient-navy-gold" : "gradient-blue-red"
      )}
    >
      {/* Grain texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.035,
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23g)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
        }}
        aria-hidden
      />
      {/* Gold hairline top */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cmg-gold/40 to-transparent" />

      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
          {headline}
        </h2>
        <p className="text-lg text-white/75 leading-relaxed mb-10 max-w-2xl mx-auto">
          {body}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryCTA.href}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-cmg-navy font-bold px-9 py-4 text-base hover:bg-cmg-cream hover:shadow-[0_8px_28px_rgba(255,255,255,0.2)] hover:-translate-y-0.5 transition-all duration-200 shadow-lg"
          >
            {primaryCTA.label} <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href={secondaryCTA.href}
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/60 text-white font-semibold px-9 py-4 text-base hover:bg-white/10 hover:border-white transition-all duration-200"
          >
            <Phone className="h-4 w-4" /> {secondaryCTA.label}
          </Link>
        </div>
      </div>
    </section>
  )
}
