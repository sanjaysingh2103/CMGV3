import Image from "next/image"
import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface ImageTextRowProps {
  imageSrc: string
  imageAlt: string
  eyebrow?: string
  heading: string
  body: string
  bullets?: string[]
  ctaLabel?: string
  ctaHref?: string
  imageLeft?: boolean
  dark?: boolean
}

export default function ImageTextRow({
  imageSrc,
  imageAlt,
  eyebrow,
  heading,
  body,
  bullets,
  ctaLabel,
  ctaHref,
  imageLeft = true,
  dark = false,
}: ImageTextRowProps) {
  const imgEl = (
    <div className="relative">
      {/* Offset gold frame accent */}
      <div
        className={cn(
          "absolute w-full h-full rounded-2xl border-2 border-cmg-gold/30",
          imageLeft ? "-bottom-4 -right-4" : "-bottom-4 -left-4"
        )}
        aria-hidden
      />
      {/* Main image */}
      <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-[0_20px_60px_rgba(26,24,38,0.15)]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width:768px) 100vw, 50vw"
        />
        {/* Subtle corner gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-tl from-cmg-navy/15 to-transparent pointer-events-none" />
      </div>
      {/* Small gold accent dot */}
      <div
        className={cn(
          "absolute -top-3 w-6 h-6 rounded-full bg-cmg-gold shadow-gold",
          imageLeft ? "-left-3" : "-right-3"
        )}
        aria-hidden
      />
    </div>
  )

  const textEl = (
    <div className="flex flex-col justify-center">
      {eyebrow && (
        <p className="eyebrow text-cmg-red mb-3">{eyebrow}</p>
      )}
      <h2 className={cn(
        "font-heading text-3xl md:text-4xl font-bold mb-5 leading-tight",
        dark ? "text-white" : "text-cmg-ink"
      )}>
        {heading}
      </h2>
      <p className={cn(
        "leading-relaxed mb-6 text-base",
        dark ? "text-white/70" : "text-cmg-slate"
      )}>
        {body}
      </p>

      {bullets && (
        <ul className="space-y-3 mb-7">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-cmg-gold shrink-0 mt-1" />
              <span className={cn(
                "text-sm leading-relaxed",
                dark ? "text-white/80" : "text-cmg-slate"
              )}>
                {b}
              </span>
            </li>
          ))}
        </ul>
      )}

      {ctaLabel && ctaHref && (
        <Link
          href={ctaHref}
          className={cn(
            "inline-flex items-center gap-2 font-semibold text-sm w-fit px-5 py-2.5 rounded-full border transition-all duration-200",
            dark
              ? "border-cmg-gold text-cmg-gold hover:bg-cmg-gold hover:text-cmg-navy"
              : "border-cmg-blue text-cmg-blue hover:bg-cmg-blue hover:text-white"
          )}
        >
          {ctaLabel} →
        </Link>
      )}
    </div>
  )

  return (
    <section className={cn(
      "py-20 px-4 overflow-hidden",
      dark ? "bg-cmg-navy" : "bg-cmg-cream"
    )}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {imageLeft ? <>{imgEl}{textEl}</> : <>{textEl}{imgEl}</>}
      </div>
    </section>
  )
}
