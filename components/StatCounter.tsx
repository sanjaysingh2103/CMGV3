"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

interface StatCounterProps {
  value: number
  suffix?: string
  label: string
  duration?: number
}

function Counter({ value, suffix = "", duration = 2000 }: { value: number; suffix: string; duration: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    const start = 0
    const end = value
    const steps = 60
    const stepDuration = duration / steps
    let current = start
    const timer = setInterval(() => {
      current += Math.ceil(end / steps)
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(current)
      }
    }, stepDuration)
    return () => clearInterval(timer)
  }, [isInView, value, duration])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export default function StatCounter({ value, suffix = "", label, duration = 2000 }: StatCounterProps) {
  return (
    <div className="text-center">
      <div className="font-heading text-5xl md:text-6xl font-bold text-cmg-blue">
        <Counter value={value} suffix={suffix} duration={duration} />
      </div>
      <p className="mt-2 text-cmg-slate font-medium">{label}</p>
    </div>
  )
}
