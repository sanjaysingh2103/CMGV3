import Link from "next/link"
import { Phone } from "lucide-react"

interface CTABannerProps {
  headline: string
  body: string
  primaryCTA: { label: string; href: string }
  secondaryCTA?: { label: string; href: string }
  variant?: "navy-gold" | "blue" | "red"
}

export default function CTABanner({
  headline,
  body,
  primaryCTA,
  secondaryCTA,
}: CTABannerProps) {
  return (
    <section className="bg-cmg-navy py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
          {headline}
        </h2>
        <p className="text-white/65 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          {body}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryCTA.href}
            className="inline-flex items-center justify-center bg-cmg-red text-white font-semibold px-8 py-4 rounded-lg text-sm hover:bg-red-700 transition-colors shadow-lg"
          >
            {primaryCTA.label}
          </Link>
          {secondaryCTA && (
            <a
              href={secondaryCTA.href}
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-lg text-sm hover:border-white/60 hover:bg-white/5 transition-all"
            >
              <Phone className="h-4 w-4" />
              {secondaryCTA.label}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
