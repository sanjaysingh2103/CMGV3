import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface CTAButton {
  label: string
  href: string
  variant: "primary" | "secondary"
}

interface HeroBannerProps {
  headline: string
  subheadline: string
  bgImage?: string
  gradient?: string
  ctaButtons?: CTAButton[]
  height?: "full" | "large" | "medium"
  children?: React.ReactNode
}

const heightClasses = {
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
  children,
}: HeroBannerProps) {
  return (
    <section className={cn("relative flex items-center overflow-hidden", heightClasses[height])}>
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
                      : "border-2 border-white text-white hover:bg-white/10"
                  )}
                >
                  {btn.label}
                </Link>
              ))}
            </div>
          )}
          {children}
        </div>
      </div>
    </section>
  )
}
