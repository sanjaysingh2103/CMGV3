"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { testimonials } from "@/lib/site"

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [paused])

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Desktop: 3-col grid */}
      <div className="hidden md:grid grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} testimonial={t} />
        ))}
      </div>

      {/* Mobile: single carousel */}
      <div className="md:hidden relative overflow-hidden min-h-[280px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4 }}
          >
            <TestimonialCard testimonial={testimonials[current]} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots — mobile */}
      <div className="flex md:hidden justify-center gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === current ? "bg-cmg-blue" : "bg-cmg-blue/20"
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[number] }) {
  return (
    <div className="rounded-2xl bg-white shadow-card p-6 flex flex-col gap-4 h-full">
      <Quote className="h-8 w-8 text-cmg-blue/20" />
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-cmg-gold text-cmg-gold" />
        ))}
      </div>
      <p className="text-cmg-slate leading-relaxed flex-1 italic">"{testimonial.quote}"</p>
      <div>
        <p className="font-semibold text-cmg-text">{testimonial.name}</p>
        <p className="text-sm text-cmg-slate">{testimonial.role}</p>
        <p className="text-xs text-cmg-blue mt-0.5">{testimonial.origin}</p>
      </div>
    </div>
  )
}
