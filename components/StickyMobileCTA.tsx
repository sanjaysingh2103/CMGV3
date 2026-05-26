"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Phone } from "lucide-react"
import { site } from "@/lib/site"

/**
 * Slim sticky CTA bar - mobile only, appears after the user scrolls past the hero.
 * Sits ABOVE the floating WhatsApp/Chat buttons (which pin to right corner).
 * Hidden on the contact page itself and on policy pages.
 */
export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false)
  const pathname = usePathname()

  const HIDDEN_ROUTES = ["/contact", "/privacy", "/terms", "/refund-policy", "/anti-fraud"]
  const hidden = HIDDEN_ROUTES.some((p) => pathname?.startsWith(p))

  useEffect(() => {
    if (hidden) return
    const onScroll = () => setVisible(window.scrollY > 700)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [hidden])

  if (hidden) return null

  return (
    <div
      className={`fixed bottom-28 inset-x-0 z-30 lg:hidden px-3 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!visible}
    >
      <div className="bg-white border border-cmg-border rounded-xl shadow-[0_-2px_16px_rgba(0,13,58,0.12)] px-3 py-2.5 flex gap-2 items-center">
        <a
          href={`tel:${site.phone}`}
          className="flex items-center justify-center gap-1.5 px-3 h-11 border-2 border-cmg-blue text-cmg-blue rounded-lg font-bold text-[13px] shrink-0"
        >
          <Phone className="h-4 w-4" />
          Call
        </a>
        <Link
          href="/contact"
          className="flex-1 flex items-center justify-center gap-1.5 h-11 bg-cmg-red text-white rounded-lg font-bold text-[13px] hover:bg-red-700 transition-colors"
        >
          Free Consultation
        </Link>
      </div>
    </div>
  )
}
