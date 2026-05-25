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
  medium: "min-h-[60vh]",
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
  return (
    <section className={cn("relative flex items-center overflow-hidden", heightClasses[height] ?? height)}>
      {/* Background image */}
      {bgImage && (
        <Image
          src={bgImage}
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      )}

      {/* Gradient overlay */}
      <div
        className={cn("absolute inset-0", gradient)}
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-24">
        <div className="max-w-3xl">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {headline}
          </h1>
          <p className="text-lg md:text-xl text-white/85 leading-relaxed mb-10 max-w-2xl">
            {subheadline}
          </p>
          {ctaButtons.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-4">
              {ctaButtons.map((btn) => (
                <Link
                  key={btn.label}
                  href={btn.href}
                  className={cn(
                    "inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold text-base transition-all",
                    btn.variant === "primary"
                      ? "bg-cmg-blue text-white hover:bg-cmg-blue-light shadow-lg"
                      : "border-2 border-white text-white hover:bg-white/10"  // secondary or outline
                  )}
                >
                  {btn.label}
                </Link>
              ))}
            </div>
          )}
          {trustBadges && trustBadges.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-8">
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 px-4 py-1.5 text-sm font-medium text-white"
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
