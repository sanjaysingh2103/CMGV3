import type { Metadata } from "next"
import Link from "next/link"
import {
  Briefcase,
  Building2,
  Heart,
  GraduationCap,
  TrendingUp,
  MessageSquare,
} from "lucide-react"
import HeroBanner from "@/components/HeroBanner"
import TrustBar from "@/components/TrustBar"
import ServiceCard from "@/components/ServiceCard"
import ProcessSteps from "@/components/ProcessSteps"
import StatCounter from "@/components/StatCounter"
import TestimonialCarousel from "@/components/TestimonialCarousel"
import CTABanner from "@/components/CTABanner"
import JsonLd from "@/components/JsonLd"
import { stats, processSteps } from "@/lib/site"

export const metadata: Metadata = {
  title: "Commonwealth Migration Group — Australian Immigration Experts",
  description:
    "MARA-registered migration agents helping skilled workers, families & businesses migrate to Australia. Book a free consultation today.",
}

const services = [
  { icon: Briefcase, title: "Skilled Migration", description: "Points-tested pathways to permanent residency — subclass 189, 190, and 491.", href: "/services/skilled-migration" },
  { icon: Building2, title: "Employer Sponsored", description: "Connect with Australian employers through TSS 482 and ENS 186 visa pathways.", href: "/services/employer-sponsored" },
  { icon: Heart, title: "Family & Partner", description: "Reunite with loved ones through Australia's family and partner visa programs.", href: "/services/family-partner" },
  { icon: GraduationCap, title: "Student Visas", description: "Study in Australia and explore post-study work rights and migration pathways.", href: "/services/student" },
  { icon: TrendingUp, title: "Business & Investor", description: "Establish or expand your business in Australia with dedicated investor visa options.", href: "/services/business-investor" },
  { icon: MessageSquare, title: "Free Consultation", description: "Not sure which visa suits you? Start with a no-obligation 30-minute consultation.", href: "/contact", variant: "featured" as const },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Commonwealth Migration Group",
  description: "MARA-registered Australian immigration and migration agents.",
  url: "https://commonwealthmigration.com.au",
  telephone: "+61-2-XXXX-XXXX",
  email: "info@commonwealthmigration.com.au",
  address: { "@type": "PostalAddress", addressCountry: "AU" },
  priceRange: "$$",
  areaServed: "Worldwide",
  sameAs: [
    "https://www.linkedin.com/company/commonwealthmigrationgroup",
    "https://www.facebook.com/CMGMigration",
  ],
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={jsonLd} />

      {/* Section 1 — Hero */}
      <HeroBanner
        headline="Your Path to Australia Starts Here"
        subheadline="Expert migration agents helping skilled workers, families, and businesses achieve their Australian dream. Registered. Trusted. Results-driven."
        bgImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920"
        gradient="gradient-hero"
        ctaButtons={[
          { label: "Book a Free Consultation", href: "/contact", variant: "primary" },
          { label: "Explore Visa Options", href: "/services", variant: "secondary" },
        ]}
        height="full"
      />

      {/* Section 2 — Trust bar */}
      <TrustBar />

      {/* Section 3 — Services grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-cmg-red uppercase tracking-widest mb-3">Our Services</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-cmg-text mb-6">
              Comprehensive Australian Migration Services
            </h2>
            <p className="text-cmg-slate text-lg max-w-3xl mx-auto leading-relaxed">
              From skilled migration to family reunions — we handle every aspect of your Australian visa journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <ServiceCard
                key={svc.href}
                icon={svc.icon}
                title={svc.title}
                description={svc.description}
                href={svc.href}
                variant={svc.variant}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — How it works */}
      <section className="py-20 px-4 bg-cmg-light-blue">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-cmg-red uppercase tracking-widest mb-3">The Process</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cmg-text">
              Your Migration Journey in 4 Steps
            </h2>
          </div>
          <ProcessSteps steps={processSteps} />
        </div>
      </section>

      {/* Section 5 — Stats */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-cmg-red uppercase tracking-widest mb-3">Our Track Record</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cmg-text">
              Trusted by Migrants Worldwide
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <StatCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why choose CMG */}
      <section className="py-20 px-4 bg-cmg-light-blue">
        <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold text-cmg-red uppercase tracking-widest mb-3">Why CMG</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cmg-text mb-6">
              Why Choose CMG?
            </h2>
            <div className="space-y-4 text-cmg-slate leading-relaxed">
              <p>
                At Commonwealth Migration Group, we understand that every migration journey is unique. Our team of MARA-registered agents brings deep expertise across Australia's complex visa landscape — from points-tested skilled migration to family reunions, employer sponsorship, student pathways, and high-value business investment visas.
              </p>
              <p>
                When you choose Commonwealth Migration Group, you're choosing MARA-registered expertise, transparent pricing, and a genuine commitment to your success. We don't outsource your case to junior staff. You work directly with experienced migration agents who know the Department of Home Affairs inside out — and know how to build a compelling, complete visa application.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-cmg-blue text-white font-semibold px-8 py-4 hover:bg-cmg-blue-light transition-colors"
              >
                Book Free Consultation
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border-2 border-cmg-blue text-cmg-blue font-semibold px-8 py-4 hover:bg-cmg-blue/5 transition-colors"
              >
                About CMG
              </Link>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 grid grid-cols-2 gap-4">
            {[
              { number: "500+", label: "Visas Approved" },
              { number: "97%", label: "Success Rate" },
              { number: "15+", label: "Years Experience" },
              { number: "30+", label: "Countries Served" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl bg-white shadow-card p-6 text-center hover:shadow-hover transition-shadow"
              >
                <div className="font-heading text-4xl font-bold text-cmg-blue mb-2">{item.number}</div>
                <div className="text-cmg-slate text-sm font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-cmg-red uppercase tracking-widest mb-3">Client Stories</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cmg-text">What Our Clients Say</h2>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Section 7 — CTA */}
      <CTABanner
        headline="Ready to Start Your Australian Journey?"
        body="Book a free 30-minute consultation with one of our MARA-registered agents. No obligation, no jargon — just expert advice tailored to you."
        primaryCTA={{ label: "Book Free Consultation", href: "/contact" }}
        secondaryCTA={{ label: "Call Us Now", href: "tel:+61200000000" }}
        variant="navy-gold"
      />
    </>
  )
}
