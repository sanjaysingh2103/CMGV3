"use client"

import Link from "next/link"
import { useState, useRef, useCallback } from "react"
import { Menu, ChevronDown, Phone, X } from "lucide-react"
import { visaNav, servicesNav } from "@/lib/site"
import { site } from "@/lib/site"
import ConsultationModal from "./ConsultationModal"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent } from "@/components/ui/sheet"

/* ─── Hummingbird logo SVG ─────────────────────────────────────────────── */
function HummingbirdMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 88" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Wing - blade sweeping upper-right */}
      <path d="M50 30 L96 6 L80 50 Z" />
      {/* Body - large C-curve from beak to tail */}
      <path d="
        M6 48
        C1 38 2 26 14 26
        C20 26 24 22 32 24
        L50 30
        L80 50
        C68 44 58 50 55 62
        C52 74 58 82 68 83
        L60 90
        C42 90 26 80 20 66
        C14 54 16 46 22 44
        C16 44 10 48 6 48
        Z
      " />
      {/* Eye */}
      <circle cx="13" cy="31" r="4" fill="white" />
    </svg>
  )
}

/* ─── CMG wordmark logo ────────────────────────────────────────────────── */
function CMGLogo() {
  return (
    <Link href="/" className="flex items-center gap-3 shrink-0 group">
      {/* Icon mark - red square with hummingbird */}
      <div className="w-11 h-11 rounded-xl bg-cmg-red flex items-center justify-center shadow-sm">
        <HummingbirdMark className="w-6 h-6 text-white" />
      </div>
      {/* Text mark */}
      <div className="flex flex-col leading-none">
        <span className="font-heading font-bold text-2xl tracking-tight text-cmg-blue leading-none">CMG</span>
        <span className="text-[8.5px] font-bold tracking-[0.18em] uppercase text-cmg-slate leading-none mt-1.5">
          Commonwealth Migration Group
        </span>
      </div>
    </Link>
  )
}

/* ─── Dropdown panel wrapper ───────────────────────────────────────────── */
function DropdownPanel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn(
      "absolute top-[calc(100%+4px)] left-1/2 -translate-x-1/2 bg-white rounded-2xl p-6",
      "border border-gray-100/80 shadow-[0_20px_60px_rgba(13,35,87,0.14),0_4px_16px_rgba(13,35,87,0.08)]",
      "before:absolute before:-top-1 before:left-1/2 before:-translate-x-1/2 before:w-3 before:h-3",
      "before:rotate-45 before:bg-white before:border-l before:border-t before:border-gray-100/80",
      "animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-150",
      className
    )}>
      {/* Blue top accent line */}
      <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-cmg-blue via-cmg-blue to-cmg-red rounded-full" />
      {children}
    </div>
  )
}

export default function Navbar() {
  const [visaOpen, setVisaOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  /* Debounced close timers */
  const visaTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const servicesTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleVisaEnter = useCallback(() => {
    if (visaTimer.current) clearTimeout(visaTimer.current)
    setVisaOpen(true)
  }, [])
  const handleVisaLeave = useCallback(() => {
    visaTimer.current = setTimeout(() => setVisaOpen(false), 180)
  }, [])
  const handleServicesEnter = useCallback(() => {
    if (servicesTimer.current) clearTimeout(servicesTimer.current)
    setServicesOpen(true)
  }, [])
  const handleServicesLeave = useCallback(() => {
    servicesTimer.current = setTimeout(() => setServicesOpen(false), 180)
  }, [])

  const navLinkClass = "px-4 py-2.5 rounded-md text-[15px] font-bold text-cmg-text hover:text-cmg-blue hover:bg-cmg-light-blue transition-all duration-150"
  const dropdownBtnClass = "flex items-center gap-1 px-4 py-2.5 rounded-md text-[15px] font-bold text-cmg-text hover:text-cmg-blue hover:bg-cmg-light-blue transition-all duration-150"

  return (
    <header className="sticky top-0 inset-x-0 z-50 bg-white border-b-2 border-cmg-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-18 lg:h-20">

          <CMGLogo />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">

            {/* Visas mega dropdown */}
            <div
              className="relative"
              onMouseEnter={handleVisaEnter}
              onMouseLeave={handleVisaLeave}
            >
              <button className={dropdownBtnClass}>
                Visas
                <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200", visaOpen && "rotate-180")} />
              </button>
              {/* invisible bridge fills the 4px gap so cursor can reach panel */}
              {visaOpen && <div className="absolute top-full left-0 right-0 h-2" />}
              {visaOpen && (
                <DropdownPanel className="w-[860px]">
                  <div className="grid grid-cols-4 gap-6 pt-3">
                    {visaNav.map((col) => (
                      <div key={col.category}>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-cmg-slate/70 mb-3">{col.category}</p>
                        <div className="space-y-0.5">
                          {col.items.map((item) => (
                            <Link
                              key={item.number}
                              href={item.href}
                              className="flex gap-3 px-2.5 py-2.5 rounded-xl hover:bg-cmg-light-blue group transition-all duration-150"
                              onClick={() => setVisaOpen(false)}
                            >
                              <span className="text-[11px] font-black text-cmg-blue/40 group-hover:text-cmg-blue w-7 shrink-0 pt-0.5 transition-colors">{item.number}</span>
                              <div>
                                <p className="text-sm font-semibold text-cmg-text group-hover:text-cmg-blue leading-tight transition-colors">{item.label}</p>
                                <p className="text-xs text-cmg-slate mt-0.5">{item.desc}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                    {/* Featured panel */}
                    <div className="bg-gradient-to-br from-cmg-navy to-cmg-blue rounded-xl p-5 flex flex-col">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-cmg-gold mb-2">{visaNav[0].featured.label}</p>
                      <p className="font-heading font-bold text-white text-base mb-2 leading-snug">{visaNav[0].featured.title}</p>
                      <p className="text-xs text-white/70 leading-relaxed mb-4 flex-1">{visaNav[0].featured.desc}</p>
                      <Link
                        href={visaNav[0].featured.href}
                        className="text-xs font-bold text-cmg-gold hover:text-white transition-colors inline-flex items-center gap-1"
                        onClick={() => setVisaOpen(false)}
                      >
                        Learn More →
                      </Link>
                    </div>
                  </div>
                </DropdownPanel>
              )}
            </div>

            {/* Services mega dropdown */}
            <div
              className="relative"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <button className={dropdownBtnClass}>
                Services
                <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200", servicesOpen && "rotate-180")} />
              </button>
              {servicesOpen && <div className="absolute top-full left-0 right-0 h-2" />}
              {servicesOpen && (
                <DropdownPanel className="w-[720px]">
                  <div className="grid grid-cols-4 gap-6 pt-3">
                    {servicesNav.map((col) => (
                      <div key={col.category}>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-cmg-slate/70 mb-3">{col.category}</p>
                        <div className="space-y-0.5">
                          {col.items.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              className="flex flex-col px-2.5 py-2.5 rounded-xl hover:bg-cmg-light-blue group transition-all duration-150"
                              onClick={() => setServicesOpen(false)}
                            >
                              <p className="text-sm font-semibold text-cmg-text group-hover:text-cmg-blue leading-tight transition-colors">{item.label}</p>
                              <p className="text-xs text-cmg-slate mt-0.5">{item.desc}</p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                    {/* Featured */}
                    <div className="bg-gradient-to-br from-cmg-navy to-cmg-blue rounded-xl p-5 flex flex-col">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-cmg-gold mb-2">Differentiator</p>
                      <p className="font-heading font-bold text-white text-base mb-2 leading-snug">Refusals &amp; AAT Appeals</p>
                      <p className="text-xs text-white/70 leading-relaxed mb-4 flex-1">Time-critical. We assess merits and represent appeals within statutory windows.</p>
                      <Link
                        href="/services"
                        className="text-xs font-bold text-cmg-gold hover:text-white transition-colors"
                        onClick={() => setServicesOpen(false)}
                      >
                        Learn More →
                      </Link>
                    </div>
                  </div>
                </DropdownPanel>
              )}
            </div>

            {["About", "Resources", "Tools", "Contact"].map((label) => (
              <Link key={label} href={`/${label.toLowerCase()}`} className={navLinkClass}>{label}</Link>
            ))}
          </nav>

          {/* Right: phone + CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href={`tel:${site.phone}`}
              className="flex items-center gap-1.5 text-[13px] font-bold text-cmg-slate hover:text-cmg-blue transition-colors"
            >
              <Phone className="h-3.5 w-3.5" />{site.phone}
            </a>
            <ConsultationModal triggerClassName="rounded-md bg-cmg-red text-white font-bold px-5 py-2.5 text-sm hover:bg-red-700 transition-colors shadow-md" />
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden p-2.5 rounded-md text-cmg-text hover:bg-cmg-light-blue transition-colors"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetContent side="right" className="w-[320px] sm:w-[360px] p-0 border-0">
              <MobileMenu onClose={() => setMobileOpen(false)} />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  const [visaOpen, setVisaOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-cmg-red flex items-center justify-center shadow-md">
            <HummingbirdMark className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="font-heading font-bold text-lg text-cmg-blue leading-none">CMG</div>
            <div className="text-[8px] text-cmg-slate tracking-[0.16em] uppercase mt-0.5">Commonwealth Migration Group</div>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 rounded-lg text-cmg-slate hover:bg-gray-100 transition-colors"
          aria-label="Close menu"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Nav links */}
      <nav className="flex-1 overflow-y-auto p-3 space-y-0.5">
        {/* Visas */}
        <button
          onClick={() => setVisaOpen(!visaOpen)}
          className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-cmg-text font-semibold hover:bg-cmg-light-blue hover:text-cmg-blue transition-all text-sm"
        >
          Visas
          <ChevronDown className={cn("h-4 w-4 text-cmg-slate transition-transform duration-200", visaOpen && "rotate-180")} />
        </button>
        {visaOpen && (
          <div className="ml-3 space-y-0.5 pb-2 border-l-2 border-cmg-blue/10 pl-3 ml-4">
            {visaNav.flatMap((col) => col.items).map((item) => (
              <Link
                key={item.number}
                href={item.href}
                onClick={onClose}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-cmg-slate hover:text-cmg-blue hover:bg-cmg-light-blue transition-all"
              >
                <span className="text-[11px] font-black text-cmg-blue/50 w-7 shrink-0">{item.number}</span>
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </div>
        )}

        {/* Services */}
        <button
          onClick={() => setServicesOpen(!servicesOpen)}
          className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-cmg-text font-semibold hover:bg-cmg-light-blue hover:text-cmg-blue transition-all text-sm"
        >
          Services
          <ChevronDown className={cn("h-4 w-4 text-cmg-slate transition-transform duration-200", servicesOpen && "rotate-180")} />
        </button>
        {servicesOpen && (
          <div className="ml-4 space-y-0.5 pb-2 border-l-2 border-cmg-blue/10 pl-3">
            {servicesNav.flatMap((col) => col.items).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                className="block px-3 py-2.5 rounded-xl text-sm text-cmg-slate font-medium hover:text-cmg-blue hover:bg-cmg-light-blue transition-all"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}

        <div className="pt-1 border-t border-gray-100 mt-2 space-y-0.5">
          {["About", "Resources", "Tools", "Contact"].map((label) => (
            <Link
              key={label}
              href={`/${label.toLowerCase()}`}
              onClick={onClose}
              className="flex items-center px-4 py-3.5 rounded-xl text-cmg-text font-semibold hover:bg-cmg-light-blue hover:text-cmg-blue transition-all text-sm"
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Bottom CTA */}
      <div className="p-4 border-t border-gray-100 bg-cmg-light-blue/40 space-y-2.5">
        <a
          href={`tel:${site.phone}`}
          className="flex items-center justify-center gap-2 w-full py-3 rounded-full border-2 border-cmg-blue/20 text-cmg-blue text-sm font-semibold hover:bg-cmg-blue hover:text-white hover:border-cmg-blue transition-all"
        >
          <Phone className="h-4 w-4" />{site.phone}
        </a>
        <ConsultationModal triggerClassName="w-full rounded-full bg-cmg-red text-white font-semibold py-3 text-sm hover:bg-cmg-red-light transition-all shadow-md" />
      </div>
    </div>
  )
}
