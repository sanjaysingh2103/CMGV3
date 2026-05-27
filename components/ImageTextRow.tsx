import Image from "next/image"
import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

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
  bgClass?: string
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
  bgClass = "bg-white",
}: ImageTextRowProps) {
  return (
    <section className={cn("py-20 px-4", bgClass)}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 lg:gap-20 items-center">

        {/* Image */}
        <div className={cn("relative rounded-2xl overflow-hidden aspect-[4/3] shadow-premium", !imageLeft && "lg:order-2")}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Text */}
        <div className={cn(!imageLeft && "lg:order-1")}>
          {eyebrow && (
            <p className="eyebrow text-cmg-red mb-3">{eyebrow}</p>
          )}
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-cmg-text mb-5">
            {heading}
          </h2>
          <p className="text-cmg-slate leading-relaxed mb-6">{body}</p>
          {bullets && bullets.length > 0 && (
            <ul className="space-y-3 mb-8">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-cmg-blue shrink-0 mt-0.5" />
                  <span className="text-cmg-slate text-sm leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          )}
          {ctaLabel && ctaHref && (
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 bg-cmg-blue text-white font-semibold px-6 py-3 rounded-lg text-sm hover:bg-cmg-navy transition-colors shadow-card"
            >
              {ctaLabel} <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
