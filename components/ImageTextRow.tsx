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
  imageSrc, imageAlt, eyebrow, heading, body, bullets, ctaLabel, ctaHref, imageLeft = true, dark = false,
}: ImageTextRowProps) {
  const imgEl = (
    <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-hover">
      <Image src={imageSrc} alt={imageAlt} fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
    </div>
  )
  const textEl = (
    <div className="flex flex-col justify-center">
      {eyebrow && <p className="text-cmg-red text-xs font-bold uppercase tracking-widest mb-3">{eyebrow}</p>}
      <h2 className={cn("font-heading text-3xl md:text-4xl font-bold mb-4 leading-tight", dark ? "text-white" : "text-cmg-text")}>{heading}</h2>
      <p className={cn("leading-relaxed mb-6", dark ? "text-white/70" : "text-cmg-slate")}>{body}</p>
      {bullets && (
        <ul className="space-y-3 mb-6">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-cmg-gold shrink-0 mt-0.5" />
              <span className={cn("text-sm leading-relaxed", dark ? "text-white/80" : "text-cmg-slate")}>{b}</span>
            </li>
          ))}
        </ul>
      )}
      {ctaLabel && ctaHref && (
        <Link href={ctaHref} className={cn("inline-flex items-center gap-2 font-semibold text-sm transition-colors w-fit", dark ? "text-cmg-gold hover:text-white" : "text-cmg-blue hover:text-cmg-navy")}>
          {ctaLabel} →
        </Link>
      )}
    </div>
  )

  return (
    <section className={cn("py-20 px-4", dark ? "bg-cmg-navy" : "bg-white")}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {imageLeft ? <>{imgEl}{textEl}</> : <>{textEl}{imgEl}</>}
      </div>
    </section>
  )
}
