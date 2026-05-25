"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star } from "lucide-react"
import Image from "next/image"
import { testimonials } from "@/lib/site"

const avatars = [
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=80",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80",
  "https://images.unsplash.com/photo-1551836022-deb4988cc58e?w=80",
  "https://images.unsplash.com/photo-1580489944761-15a19d674533?w=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80",
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => setCurrent((p) => (p + 1) % testimonials.length), 5000)
    return () => clearInterval(timer)
  }, [paused])

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="hidden md:grid grid-cols-3 gap-5">
        {testimonials.map((t, i) => <TestimonialCard key={i} testimonial={t} avatar={avatars[i % avatars.length]} />)}
      </div>
      <div className="md:hidden relative overflow-hidden min-h-[260px]">
        <AnimatePresence mode="wait">
          <motion.div key={current} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.4 }}>
            <TestimonialCard testimonial={testimonials[current]} avatar={avatars[current % avatars.length]} />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex md:hidden justify-center gap-2 mt-5">
        {testimonials.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-cmg-gold" : "bg-white/30"}`} aria-label={`Testimonial ${i + 1}`} />
        ))}
      </div>
    </div>
  )
}

function TestimonialCard({ testimonial, avatar }: { testimonial: (typeof testimonials)[number]; avatar: string }) {
  return (
    <div className="rounded-2xl bg-white/8 border border-white/10 p-6 flex flex-col gap-4 h-full hover:bg-white/12 transition-colors">
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-cmg-gold text-cmg-gold" />)}
      </div>
      <p className="text-white/80 leading-relaxed flex-1 text-sm italic">&quot;{testimonial.quote}&quot;</p>
      <div className="flex items-center gap-3 pt-2 border-t border-white/10">
        <div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0">
          <Image src={avatar} alt={testimonial.name} fill className="object-cover" sizes="36px" />
        </div>
        <div>
          <p className="font-semibold text-white text-sm">{testimonial.name}</p>
          <p className="text-xs text-white/50">{testimonial.role} · {testimonial.origin}</p>
        </div>
      </div>
    </div>
  )
}
