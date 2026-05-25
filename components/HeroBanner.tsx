import Image from "next/image"
import Link from "next/link"
import { ShieldCheck } from "lucide-react"
import { cn } from "@/lib/utils"

interface CTAButton {
  label: string
  href: string
  variant?: "primary" | "secondary" | "outline"
}

interface HeroBannerProps {
  headline: string
  subheadline: string
  bgImage?: string
  gradient?: string
  ctaButtons?: CTAButton[]
  height?: "full" | "large" | "medium" | (string & {})
  trustBadges?: string[]
  children?: React.ReactNode
}

const heightClasses: Record<string, string> = {
  full: "min-h-screen",
  large: "min-h-[80vh]",
  medium: "min-h-[56vh]",
}

export default function HeroBanner({
  headline,
  subheadline,
  bgImage,
  gradient = "gradient-hero",
  ctaButtons = [],
  height = "large",
  trustBadges,
  children,
}: HeroBannerProps) {
  const heightClass = heightClasses[height] ?? height

  return (
    <section className={cn("relative flex items-center overflow-hidden", heightClass)}>
      {/* Background image */}
      {bgImage && (
        <Image
          src={bgImage}
          alt=""
          fill
          priority
          className="object-cover object-center scale-[1.02]"
          sizes="100vw"
        />
      )}

      {/* Primary gradient overlay — left scrim + bottom scrim */}
      <div className={cn("absolute inset-0", gradient)} aria-hidden />

      {/* Extra bottom-scrim for text area legibility */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(13,35,87,0.55) 0%, rgba(13,35,87,0.15) 25%, transparent 50%)"
        }}
        aria-hidden
      />

      {/* Subtle vignette edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 120% 100% at 50% 50%, transparent 40%, rgba(13,35,87,0.25) 100%)"
        }}
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-8 lg:px-16 py-24 md:py-32">
        <div className="max-w-2xl lg:max-w-3xl">

          {/* Eyebrow accent */}
          <div className="flex items-center gap-2 mb-6">
            <div className="h-0.5 w-8 bg-cmg-gold rounded-full" />
            <span className="text-cmg-gold text-xs font-bold uppercase tracking-[0.2em]">
              MARA Registered Migration Agents
            </span>
          </div>

          <h1
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[3.75rem] font-bold text-white leading-[1.1] mb-6 text-shadow-hero"
          >
            {headline}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/85 leading-relaxed mb-10 max-w-xl text-shadow-sm">
            {subheadline}
          </p>

          {ctaButtons.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-3">
              {ctaButtons.map((btn) => (
                <Link
                  key={btn.label}
                  href={btn.href}
                  className={cn(
                    "inline-flex items-center justify-center rounded-full px-7 py-3.5 font-semibold text-sm sm:text-base transition-all duration-200 shadow-lg",
                    btn.variant === "primary"
                      ? "bg-cmg-red text-white hover:bg-cmg-red-light hover:shadow-xl hover:-translate-y-0.5"
                      : "border-2 border-white/80 text-white hover:bg-white hover:text-cmg-navy backdrop-blur-sm"
                  )}
                >
                  {btn.label}
                </Link>
              ))}
            </div>
          )}

          {trustBadges && trustBadges.length > 0 && (
            <div className="flex flex-wrap gap-2.5 mt-8">
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/12 backdrop-blur-md border border-white/20 px-4 py-1.5 text-xs font-semibold text-white shadow-sm"
                >
                  <ShieldCheck className="h-3.5 w-3.5 text-cmg-gold shrink-0" />
                  {badge}
                </span>
              ))}
            </div>
          )}

          {children}
        </div>
      </div>
    </section>
  )
}
