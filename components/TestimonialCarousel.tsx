"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { testimonials } from "@/lib/site"

const avatars = [
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=80&q=80",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80",
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const [dir, setDir] = useState(1)

  const advance = (d: number) => {
    setDir(d)
    setCurrent((p) => (p + d + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => advance(1), 5500)
    return () => clearInterval(timer)
  }, [paused])

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Desktop: 3-column grid */}
      <div className="hidden md:grid grid-cols-3 gap-5">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} testimonial={t} avatar={avatars[i % avatars.length]} />
        ))}
      </div>

      {/* Mobile: animated single card */}
      <div className="md:hidden relative overflow-hidden" style={{ minHeight: 320 }}>
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={current}
            custom={dir}
            variants={{
              enter:  (d: number) => ({ opacity: 0, x: d * 48 }),
              center: { opacity: 1, x: 0 },
              exit:   (d: number) => ({ opacity: 0, x: d * -48 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.38, ease: [0.32, 0.72, 0, 1] }}
          >
            <TestimonialCard
              testimonial={testimonials[current]}
              avatar={avatars[current % avatars.length]}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Mobile controls */}
      <div className="flex md:hidden items-center justify-between mt-5 px-2">
        <button
          onClick={() => advance(-1)}
          className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDir(i > current ? 1 : -1); setCurrent(i) }}
              className={`transition-all duration-200 rounded-full ${i === current ? "w-5 h-2 bg-cmg-gold" : "w-2 h-2 bg-white/25 hover:bg-white/40"}`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => advance(1)}
          className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

function TestimonialCard({
  testimonial,
  avatar,
}: {
  testimonial: (typeof testimonials)[number]
  avatar: string
}) {
  return (
    <div className="relative rounded-2xl overflow-hidden h-full flex flex-col p-7 bg-white/[0.06] border border-white/10 hover:bg-white/[0.10] transition-colors duration-200 group">
      {/* Large decorative opening quote — Cormorant Garamond */}
      <span
        className="absolute top-3 left-5 select-none pointer-events-none font-cormorant text-cmg-gold/20 leading-none"
        style={{ fontSize: "7rem", lineHeight: 1, fontWeight: 300 }}
        aria-hidden
      >
        &ldquo;
      </span>

      {/* Stars */}
      <div className="flex gap-0.5 mb-4 relative z-10">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-3.5 w-3.5 fill-cmg-gold text-cmg-gold" />
        ))}
      </div>

      {/* Quote — Playfair Display italic */}
      <p className="font-heading italic text-white/85 leading-relaxed flex-1 text-base mb-5 relative z-10">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-white/10 relative z-10">
        <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-cmg-gold/30 shrink-0">
          <Image src={avatar} alt={testimonial.name} fill className="object-cover" sizes="40px" />
        </div>
        <div>
          <p className="font-semibold text-white text-sm leading-tight">{testimonial.name}</p>
          <p className="text-xs text-white/50 mt-0.5">{testimonial.role} · {testimonial.origin}</p>
        </div>

        {/* Visa type badge */}
        {testimonial.visa && (
          <span className="ml-auto text-[10px] font-semibold text-cmg-gold border border-cmg-gold/30 px-2 py-0.5 rounded-full shrink-0">
            {testimonial.visa}
          </span>
        )}
      </div>
    </div>
  )
}
