"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { useScrolled } from "@/hooks/useScrolled"
import { navServices, primaryNav } from "@/lib/site"
import ConsultationModal from "./ConsultationModal"
import { cn } from "@/lib/utils"
import {
  Sheet,
  SheetContent,
} from "@/components/ui/sheet"

export default function Navbar() {
  const scrolled = useScrolled(20)
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-8 h-8 rounded-full bg-cmg-red flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                <path d="M12 2C8 2 4 6 4 10c0 3 2 5.5 5 7l3 1 3-1c3-1.5 5-4 5-7 0-4-4-8-8-8z" />
              </svg>
            </div>
            <span
              className={cn(
                "font-heading font-bold text-xl transition-colors",
                scrolled ? "text-cmg-blue" : "text-white"
              )}
            >
              CMG
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Services with mega dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
            >
              <button
                className={cn(
                  "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  scrolled
                    ? "text-cmg-text hover:text-cmg-blue hover:bg-cmg-light-blue"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                )}
              >
                Services
                <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", megaOpen && "rotate-180")} />
              </button>

              {/* Mega dropdown */}
              {megaOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[480px] bg-white rounded-2xl shadow-hover border border-gray-100 p-4 grid grid-cols-1 gap-1">
                  {navServices.map((svc) => (
                    <Link
                      key={svc.href}
                      href={svc.href}
                      className="flex flex-col px-4 py-3 rounded-xl hover:bg-cmg-light-blue transition-colors group"
                    >
                      <span className="font-semibold text-cmg-text group-hover:text-cmg-blue text-sm">{svc.label}</span>
                      <span className="text-xs text-cmg-slate mt-0.5">{svc.description}</span>
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    className="flex items-center justify-center px-4 py-3 rounded-xl bg-cmg-light-blue text-cmg-blue font-semibold text-sm hover:bg-cmg-blue hover:text-white transition-colors mt-1"
                  >
                    View All Services →
                  </Link>
                </div>
              )}
            </div>

            {primaryNav.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  scrolled
                    ? "text-cmg-text hover:text-cmg-blue hover:bg-cmg-light-blue"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <ConsultationModal />
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              scrolled ? "text-cmg-text hover:bg-gray-100" : "text-white hover:bg-white/10"
            )}
            aria-label="Open menu"
          >
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
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <div className="flex flex-col h-full bg-white">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-cmg-red flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
              <path d="M12 2C8 2 4 6 4 10c0 3 2 5.5 5 7l3 1 3-1c3-1.5 5-4 5-7 0-4-4-8-8-8z" />
            </svg>
          </div>
          <span className="font-heading font-bold text-xl text-cmg-blue">CMG</span>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto p-4 space-y-1">
        {/* Services expandable */}
        <button
          onClick={() => setServicesOpen(!servicesOpen)}
          className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-cmg-text font-medium hover:bg-cmg-light-blue transition-colors"
        >
          Services
          <ChevronDown className={cn("h-4 w-4 transition-transform", servicesOpen && "rotate-180")} />
        </button>
        {servicesOpen && (
          <div className="ml-4 space-y-1">
            {navServices.map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                className="block px-4 py-2.5 rounded-xl text-sm text-cmg-slate hover:text-cmg-blue hover:bg-cmg-light-blue transition-colors"
              >
                {svc.label}
              </Link>
            ))}
          </div>
        )}

        {primaryNav.slice(1).map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block px-4 py-3 rounded-xl text-cmg-text font-medium hover:bg-cmg-light-blue hover:text-cmg-blue transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-100">
        <ConsultationModal
          triggerClassName="w-full rounded-full bg-cmg-red text-white font-semibold py-3 text-sm hover:bg-cmg-red-light transition-colors"
        />
      </div>
    </div>
  )
}
