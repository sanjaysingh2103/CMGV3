import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  Briefcase, Users, GraduationCap, Building2, Star, CheckCircle,
} from "lucide-react"
import HeroBanner from "@/components/HeroBanner"
import StatsBand from "@/components/StatsBand"
import ServiceCard from "@/components/ServiceCard"
import ImageTextRow from "@/components/ImageTextRow"
import ProcessSteps from "@/components/ProcessSteps"
import TestimonialCarousel from "@/components/TestimonialCarousel"
import TrustBar from "@/components/TrustBar"
import JsonLd from "@/components/JsonLd"
import { processSteps } from "@/lib/site"

export const metadata: Metadata = {
  title: "Australian Migration Agents — Commonwealth Migration Group",
  description:
    "MARA-registered migration agents helping skilled workers, families and businesses move to Australia. Book a free consultation today.",
}

const services = [
  {
    icon: Briefcase,
    title: "Skilled Migration",
    description: "Points-tested pathways to permanent residency — subclass 189, 190 and 491. We maximise your score and manage your EOI.",
    href: "/services/skilled-migration",
    accentColor: "red" as const,
  },
  {
    icon: Building2,
    title: "Employer Sponsored",
    description: "Connect with Australian employers through TSS 482 and ENS 186 visa pathways. From nomination to grant.",
    href: "/services/employer-sponsored",
    accentColor: "blue" as const,
  },
  {
    icon: Users,
    title: "Family & Partner",
    description: "Reunite with loved ones through Australia's partner, child and parent visa programs — onshore and offshore.",
    href: "/services/family-partner",
    accentColor: "gold" as const,
  },
  {
    icon: GraduationCap,
    title: "Student Visas",
    description: "Study in Australia on subclass 500 and transition to work rights and permanent residency through the 485 graduate visa.",
    href: "/services/student",
    accentColor: "red" as const,
  },
  {
    icon: Star,
    title: "Business & Investor",
    description: "Establish or expand your business in Australia through the 188, 888 and 132 business and investor visa streams.",
    href: "/services/business-investor",
    accentColor: "blue" as const,
  },
  {
    icon: CheckCircle,
    title: "Free Consultation",
    description: "Not sure which visa suits you? Start with a no-obligation 30-minute consultation with a MARA-registered agent.",
    href: "/contact",
    accentColor: "gold" as const,
  },
]

export default function HomePage() {
  return (
    <>
      {/* 1 — Hero */}
      <HeroBanner
        headline="Your Path to Australia Starts Here"
        subheadline="Expert MARA-registered migration agents helping skilled workers, families, and businesses achieve their Australian dream."
        bgImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920"
        gradient="gradient-hero"
        height="full"
        ctaButtons={[
          { label: "Book a Free Consultation", href: "/contact", variant: "primary" },
          { label: "Explore Visa Options", href: "/services", variant: "secondary" },
        ]}
        trustBadges={["MARA Registered", "500+ Visas Approved", "97% Success Rate"]}
      />

      {/* 2 — Stats Band */}
      <StatsBand />

      {/* 3 — Services Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-cmg-red text-xs font-bold uppercase tracking-widest mb-3">Our Services</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cmg-text mb-4">
              Comprehensive Australian Migration Services
            </h2>
            <p className="text-cmg-slate max-w-2xl mx-auto leading-relaxed">
              From skilled migration to family reunions — we handle every aspect of your Australian visa journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <ServiceCard key={svc.href} {...svc} variant="accent" />
            ))}
          </div>
        </div>
      </section>

      {/* 4 — Image-Text: Why MARA */}
      <ImageTextRow
        imageSrc="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900"
        imageAlt="Professional migration team at CMG"
        eyebrow="Why Choose CMG"
        heading="Why MARA Registration Matters"
        body="Not all migration advice is created equal. Only MARA-registered agents are legally authorised to provide immigration assistance in Australia — and are held accountable by the Office of the Migration Agents Registration Authority."
        bullets={[
          "Legally authorised to provide immigration assistance under the Migration Act 1958",
          "Accountable to OMARA's Code of Conduct — protecting you from negligent advice",
          "Access to the Department of Home Affairs' systems and priority processing queues",
          "Professional indemnity insurance required — your application is protected",
        ]}
        ctaLabel="About CMG"
        ctaHref="/about"
        imageLeft={true}
      />

      {/* 5 — Process Steps */}
      <section className="py-20 px-4 bg-cmg-light-blue">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-cmg-red text-xs font-bold uppercase tracking-widest mb-3">The Process</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cmg-text mb-4">
              Your Migration Journey in 4 Steps
            </h2>
            <p className="text-cmg-slate max-w-xl mx-auto">
              A clear, transparent process from first consultation to visa grant and beyond.
            </p>
          </div>
          <ProcessSteps steps={processSteps} />
        </div>
      </section>

      {/* 6 — Testimonials (dark navy) */}
      <section className="py-20 px-4 bg-cmg-navy">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-cmg-gold text-xs font-bold uppercase tracking-widest mb-3">Client Stories</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Real outcomes for real people — from 30+ countries to Australian residency.
            </p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* 7 — CTA Banner with city photo */}
      <div className="relative py-24 px-4 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920"
          alt="Sydney Opera House"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-cmg-navy/80" />
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-cmg-gold text-xs font-bold uppercase tracking-widest mb-4">Get Started Today</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Start Your Australian Journey?
          </h2>
          <p className="text-lg text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto">
            Book a free 30-minute consultation with one of our MARA-registered agents.
            No obligation, no jargon — just expert advice tailored to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-white text-cmg-blue font-semibold px-8 py-4 text-base hover:bg-cmg-warm-white transition-colors shadow-lg">
              Book Free Consultation
            </Link>
            <Link href="tel:+612XXXXXXXX" className="inline-flex items-center justify-center rounded-full border-2 border-white text-white font-semibold px-8 py-4 text-base hover:bg-white/10 transition-colors">
              Call Us Now
            </Link>
          </div>
        </div>
      </div>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Commonwealth Migration Group",
          description: "MARA-registered migration agents in Sydney, Australia",
          url: "https://commonwealthmigration.com.au",
          telephone: "+61 2 XXXX XXXX",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Level X, XX Street",
            addressLocality: "Sydney",
            addressRegion: "NSW",
            postalCode: "2000",
            addressCountry: "AU",
          },
        }}
      />
    </>
  )
}
