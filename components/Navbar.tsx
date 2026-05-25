"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, ChevronDown, Phone } from "lucide-react"
import { useScrolled } from "@/hooks/useScrolled"
import { visaNav, servicesNav, primaryNav } from "@/lib/site"
import { site } from "@/lib/site"
import ConsultationModal from "./ConsultationModal"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent } from "@/components/ui/sheet"

export default function Navbar() {
  const scrolled = useScrolled(20)
  const [visaOpen, setVisaOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className={cn(
      "fixed top-0 inset-x-0 z-50 transition-all duration-300",
      scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 rounded-full bg-cmg-red flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white"><path d="M12 2C8 2 4 6 4 10c0 3 2 5.5 5 7l3 1 3-1c3-1.5 5-4 5-7 0-4-4-8-8-8z"/></svg>
            </div>
            <div>
              <div className={cn("font-heading font-bold text-xl leading-none transition-colors", scrolled ? "text-cmg-blue" : "text-white")}>CMG</div>
              <div className={cn("text-[9px] font-medium tracking-widest uppercase leading-none mt-0.5 transition-colors", scrolled ? "text-cmg-slate" : "text-white/60")}>Commonwealth Migration Group</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {/* Visas mega dropdown */}
            <div className="relative" onMouseEnter={() => setVisaOpen(true)} onMouseLeave={() => setVisaOpen(false)}>
              <button className={cn("flex items-center gap-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors", scrolled ? "text-cmg-text hover:text-cmg-blue hover:bg-cmg-light-blue" : "text-white/90 hover:text-white hover:bg-white/10")}>
                Visas <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200", visaOpen && "rotate-180")} />
              </button>
              {visaOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[820px] bg-white rounded-2xl shadow-hover border border-gray-100 p-6 grid grid-cols-4 gap-6">
                  {visaNav.map((col) => (
                    <div key={col.category}>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-cmg-slate mb-3">{col.category}</p>
                      <div className="space-y-1">
                        {col.items.map((item) => (
                          <Link key={item.number} href={item.href} className="flex gap-3 px-2 py-2 rounded-xl hover:bg-cmg-light-blue group transition-colors">
                            <span className="text-xs font-bold text-cmg-blue/50 w-7 shrink-0 pt-0.5">{item.number}</span>
                            <div>
                              <p className="text-sm font-semibold text-cmg-text group-hover:text-cmg-blue leading-tight">{item.label}</p>
                              <p className="text-xs text-cmg-slate mt-0.5">{item.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                  {/* Featured panel */}
                  <div className="bg-cmg-light-blue rounded-xl p-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-cmg-red mb-2">{visaNav[0].featured.label}</p>
                    <p className="font-heading font-bold text-cmg-text text-base mb-2">{visaNav[0].featured.title}</p>
                    <p className="text-xs text-cmg-slate leading-relaxed mb-3">{visaNav[0].featured.desc}</p>
                    <Link href={visaNav[0].featured.href} className="text-xs font-bold text-cmg-blue hover:underline">Read More →</Link>
                  </div>
                </div>
              )}
            </div>

            {/* Services mega dropdown */}
            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button className={cn("flex items-center gap-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors", scrolled ? "text-cmg-text hover:text-cmg-blue hover:bg-cmg-light-blue" : "text-white/90 hover:text-white hover:bg-white/10")}>
                Services <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200", servicesOpen && "rotate-180")} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[700px] bg-white rounded-2xl shadow-hover border border-gray-100 p-6 grid grid-cols-4 gap-6">
                  {servicesNav.map((col) => (
                    <div key={col.category}>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-cmg-slate mb-3">{col.category}</p>
                      <div className="space-y-1">
                        {col.items.map((item) => (
                          <Link key={item.label} href={item.href} className="flex flex-col px-2 py-2 rounded-xl hover:bg-cmg-light-blue group transition-colors">
                            <p className="text-sm font-semibold text-cmg-text group-hover:text-cmg-blue leading-tight">{item.label}</p>
                            <p className="text-xs text-cmg-slate mt-0.5">{item.desc}</p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                  {/* Featured */}
                  <div className="bg-cmg-light-blue rounded-xl p-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-cmg-red mb-2">Differentiator</p>
                    <p className="font-heading font-bold text-cmg-text text-base mb-2">Refusals & AAT Appeals</p>
                    <p className="text-xs text-cmg-slate leading-relaxed mb-3">If you&apos;ve been refused, time is critical. We assess merits and represent appeals within statutory windows.</p>
                    <Link href="/services" className="text-xs font-bold text-cmg-blue hover:underline">Read More →</Link>
                  </div>
                </div>
              )}
            </div>

            {["About", "Resources", "Tools", "Contact"].map((label) => {
              const href = `/${label.toLowerCase()}`
              return (
                <Link key={label} href={href} className={cn("px-4 py-2.5 rounded-lg text-sm font-medium transition-colors", scrolled ? "text-cmg-text hover:text-cmg-blue hover:bg-cmg-light-blue" : "text-white/90 hover:text-white hover:bg-white/10")}>{label}</Link>
              )
            })}
          </nav>

          {/* Right: phone + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href={`tel:${site.phone}`} className={cn("flex items-center gap-1.5 text-sm font-medium transition-colors", scrolled ? "text-cmg-text hover:text-cmg-blue" : "text-white/90 hover:text-white")}>
              <Phone className="h-4 w-4" />{site.phone}
            </a>
            <ConsultationModal triggerClassName="rounded-full bg-cmg-red text-white font-semibold px-6 py-2.5 text-sm hover:bg-cmg-red-light transition-colors shadow-md" />
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setMobileOpen(true)} className={cn("lg:hidden p-2 rounded-lg transition-colors", scrolled ? "text-cmg-text hover:bg-gray-100" : "text-white hover:bg-white/10")} aria-label="Open menu">
            <Menu className="h-6 w-6" />
          </button>
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetContent side="right" className="w-[300px] p-0">
              <MobileMenu />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

function MobileMenu() {
  const [visaOpen, setVisaOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <div className="flex flex-col h-full bg-white">
      <div className="p-5 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-cmg-red flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white"><path d="M12 2C8 2 4 6 4 10c0 3 2 5.5 5 7l3 1 3-1c3-1.5 5-4 5-7 0-4-4-8-8-8z"/></svg>
          </div>
          <div>
            <div className="font-heading font-bold text-lg text-cmg-blue leading-none">CMG</div>
            <div className="text-[9px] text-cmg-slate tracking-widest uppercase">Commonwealth Migration Group</div>
          </div>
        </div>
      </div>
      <nav className="flex-1 overflow-y-auto p-3 space-y-0.5">
        {/* Visas */}
        <button onClick={() => setVisaOpen(!visaOpen)} className="w-full flex items-center justify-between px-3 py-3 rounded-xl text-cmg-text font-medium hover:bg-cmg-light-blue transition-colors text-sm">
          Visas <ChevronDown className={cn("h-4 w-4 transition-transform", visaOpen && "rotate-180")} />
        </button>
        {visaOpen && (
          <div className="ml-3 space-y-0.5 pb-1">
            {visaNav.flatMap((col) => col.items).map((item) => (
              <Link key={item.number} href={item.href} className="flex gap-2 px-3 py-2 rounded-xl text-sm text-cmg-slate hover:text-cmg-blue hover:bg-cmg-light-blue transition-colors">
                <span className="text-xs font-bold text-cmg-blue/40 w-6 shrink-0 pt-0.5">{item.number}</span>
                {item.label}
              </Link>
            ))}
          </div>
        )}
        {/* Services */}
        <button onClick={() => setServicesOpen(!servicesOpen)} className="w-full flex items-center justify-between px-3 py-3 rounded-xl text-cmg-text font-medium hover:bg-cmg-light-blue transition-colors text-sm">
          Services <ChevronDown className={cn("h-4 w-4 transition-transform", servicesOpen && "rotate-180")} />
        </button>
        {servicesOpen && (
          <div className="ml-3 space-y-0.5 pb-1">
            {servicesNav.flatMap((col) => col.items).map((item) => (
              <Link key={item.label} href={item.href} className="block px-3 py-2 rounded-xl text-sm text-cmg-slate hover:text-cmg-blue hover:bg-cmg-light-blue transition-colors">{item.label}</Link>
            ))}
          </div>
        )}
        {["About", "Resources", "Tools", "Contact"].map((label) => (
          <Link key={label} href={`/${label.toLowerCase()}`} className="block px-3 py-3 rounded-xl text-cmg-text font-medium hover:bg-cmg-light-blue hover:text-cmg-blue transition-colors text-sm">{label}</Link>
        ))}
      </nav>
      <div className="p-4 border-t border-gray-100 space-y-2">
        <a href={`tel:${site.phone}`} className="flex items-center justify-center gap-2 w-full py-3 rounded-full border border-cmg-blue/20 text-cmg-blue text-sm font-medium hover:bg-cmg-light-blue transition-colors">
          <Phone className="h-4 w-4" />{site.phone}
        </a>
        <ConsultationModal triggerClassName="w-full rounded-full bg-cmg-red text-white font-semibold py-3 text-sm hover:bg-cmg-red-light transition-colors" />
      </div>
    </div>
  )
}
