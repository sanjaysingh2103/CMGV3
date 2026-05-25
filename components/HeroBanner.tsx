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
  eyebrow?: string
  /** Texture overlay: 'diagonal' | 'dots' | 'grid' | 'noise' */
  texture?: "diagonal" | "dots" | "grid" | "noise"
  /** Position content left or center (default: center) */
  align?: "left" | "center"
  children?: React.ReactNode
}

const heightClasses: Record<string, string> = {
  full:   "min-h-[calc(100vh-5rem)]",
  large:  "min-h-[68vh]",
  medium: "min-h-[48vh]",
}

const textureClasses: Record<string, string> = {
  diagonal: "hero-tex-diagonal",
  dots:     "hero-tex-dots",
  grid:     "hero-tex-grid",
  noise:    "hero-tex-noise",
}

export default function HeroBanner({
  headline,
  subheadline,
  bgImage,
  gradient = "gradient-hero",
  ctaButtons = [],
  height = "large",
  trustBadges,
  eyebrow = "MARA Registered Migration Agents",
  texture,
  align = "center",
  children,
}: HeroBannerProps) {
  const heightClass = heightClasses[height] ?? height
  const centered = align === "center"

  return (
    <section className={cn("relative flex items-center overflow-hidden", heightClass, centered ? "justify-center" : "justify-start")}>
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

      {/* Colour overlay */}
      <div className={cn("absolute inset-0", gradient)} aria-hidden />

      {/* Optional texture */}
      {texture && (
        <div className={cn("absolute inset-0 pointer-events-none", textureClasses[texture])} aria-hidden />
      )}

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 120% 100% at 50% 50%, transparent 50%, rgba(0,13,58,0.35) 100%)" }}
        aria-hidden
      />

      {/* Content */}
      <div className={cn(
        "relative z-10 w-full max-w-4xl mx-auto px-5 md:px-8 py-24 md:py-32",
        centered ? "text-center" : "text-left max-w-5xl"
      )}>

        {eyebrow && (
          <div className={cn("flex items-center gap-3 mb-5", centered && "justify-center")}>
            <span className="h-px w-8 bg-white/40" />
            <p className="eyebrow text-white/80 tracking-[0.22em]">{eyebrow}</p>
            <span className="h-px w-8 bg-white/40" />
          </div>
        )}

        <h1
          className="font-heading font-bold text-white leading-[1.18] mb-6 text-shadow-hero"
          style={{ fontSize: "clamp(2.2rem, 4.8vw, 3.5rem)" }}
        >
          {headline}
        </h1>

        <p className={cn(
          "text-base sm:text-lg md:text-xl text-white/82 leading-relaxed mb-9 text-shadow-sm",
          centered ? "max-w-2xl mx-auto" : "max-w-2xl"
        )}>
          {subheadline}
        </p>

        {ctaButtons.length > 0 && (
          <div className={cn("flex flex-col sm:flex-row gap-3", centered && "justify-center")}>
            {ctaButtons.map((btn) => (
              <Link
                key={btn.label}
                href={btn.href}
                className={cn(
                  "inline-flex items-center justify-center rounded-md px-7 py-3.5 font-semibold text-sm transition-all duration-200",
                  btn.variant === "primary"
                    ? "bg-cmg-red text-white hover:bg-red-700 shadow-lg"
                    : "border-2 border-white/70 text-white hover:bg-white hover:text-cmg-navy"
                )}
              >
                {btn.label}
              </Link>
            ))}
          </div>
        )}

        {trustBadges && trustBadges.length > 0 && (
          <div className={cn("flex flex-wrap gap-2.5 mt-8", centered && "justify-center")}>
            {trustBadges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 text-xs font-semibold text-white"
              >
                <ShieldCheck className="h-3.5 w-3.5 text-white/70 shrink-0" />
                {badge}
              </span>
            ))}
          </div>
        )}

        {children}
      </div>
    </section>
  )
}
