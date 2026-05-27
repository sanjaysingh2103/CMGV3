"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

interface HeroSlide {
  src: string
  alt: string
}

interface HeroCarouselProps {
  slides: HeroSlide[]
  /** Milliseconds between slide changes - default 6000 (6s) */
  interval?: number
}

/**
 * Auto-rotating hero background carousel with smooth cross-fade transitions.
 * No blue tint overlay - just a subtle bottom-fade scrim for text contrast.
 * Pauses rotation on hover for accessibility.
 */
export default function HeroCarousel({ slides, interval = 6000 }: HeroCarouselProps) {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused || slides.length <= 1) return
    const t = setInterval(() => {
      setActive((i) => (i + 1) % slides.length)
    }, interval)
    return () => clearInterval(t)
  }, [paused, slides.length, interval])

  return (
    <div
      className="absolute inset-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Cross-fade stack - all slides mounted, opacity-driven */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-[1500ms] ease-in-out"
          style={{ opacity: i === active ? 1 : 0 }}
          aria-hidden={i !== active}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            quality={85}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      ))}

      {/* Subtle bottom-only scrim for headline contrast - no blue tint */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.55) 100%)",
        }}
        aria-hidden
      />

      {/* Slide indicator dots */}
      {slides.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="group/dot p-1"
            >
              <span
                className={`block transition-all duration-300 rounded-full ${
                  i === active
                    ? "w-8 h-1.5 bg-white"
                    : "w-1.5 h-1.5 bg-white/40 group-hover/dot:bg-white/70"
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
