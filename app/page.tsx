import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  Briefcase, Users, GraduationCap, Building2, Star, CheckCircle,
  ArrowRight, ShieldCheck, Clock, Award, Phone,
} from "lucide-react"
import StatsBand from "@/components/StatsBand"
import ServiceCard from "@/components/ServiceCard"
import ImageTextRow from "@/components/ImageTextRow"
import ProcessSteps from "@/components/ProcessSteps"
import TestimonialCarousel from "@/components/TestimonialCarousel"
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

const trustBadges = [
  { icon: ShieldCheck, label: "MARA Registered" },
  { icon: Award,       label: "97% Success Rate" },
  { icon: Clock,       label: "500+ Visas Approved" },
]

const pathwayHighlights = [
  {
    flag: "🇦🇺",
    visa: "Subclass 189",
    label: "Skilled Independent",
    desc: "No employer or state sponsor needed — live and work anywhere in Australia permanently.",
    color: "#C0392B",
  },
  {
    flag: "🏢",
    visa: "Subclass 482",
    label: "Employer Sponsored",
    desc: "Sponsored by an Australian employer to work in a specific occupation for up to 4 years.",
    color: "#1B3D8F",
  },
  {
    flag: "❤️",
    visa: "Partner Visa",
    label: "Onshore & Offshore",
    desc: "Reunite with your Australian partner or spouse through the 820/801 or 309/100 pathway.",
    color: "#D4A843",
  },
  {
    flag: "🎓",
    visa: "Subclass 485",
    label: "Graduate Visa",
    desc: "Stay in Australia after completing your degree with 18 months to 6 years of work rights.",
    color: "#0D9488",
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── 1. SPLIT HERO ─────────────────────────────────────────────────────── */}
      <section className="relative flex min-h-screen overflow-hidden" style={{ background: "#0D2357" }}>

        {/* Grain texture on navy panel */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            opacity: 0.04,
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23g)'/%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat",
          }}
          aria-hidden
        />

        {/* Subtle radial glow */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{ background: "radial-gradient(ellipse 70% 80% at 25% 50%, rgba(27,61,143,0.6) 0%, transparent 70%)" }}
          aria-hidden
        />

        {/* ── Right photo panel — diagonal clip ── */}
        <div
          className="absolute inset-0 lg:left-[44%] z-0"
          style={{ clipPath: "polygon(9% 0, 100% 0, 100% 100%, 0 100%)" }}
        >
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920"
            alt="Sydney Harbour Bridge — Australia"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
          {/* Scrim: stronger on left edge to blend with navy */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(13,35,87,0.95) 0%, rgba(13,35,87,0.45) 28%, rgba(13,35,87,0.10) 60%, transparent 100%), linear-gradient(to top, rgba(13,35,87,0.6) 0%, transparent 40%)",
            }}
            aria-hidden
          />
        </div>

        {/* ── Left content panel ── */}
        <div className="relative z-10 flex flex-col justify-center w-full lg:w-[58%] px-6 sm:px-10 md:px-16 lg:px-20 pt-32 pb-20 lg:py-0">
          <div className="max-w-xl">

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-7">
              <div className="h-px w-10 bg-cmg-gold flex-shrink-0" />
              <span className="text-cmg-gold font-semibold text-xs tracking-[0.18em] uppercase">
                MARA Registered Migration Agents
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-heading font-bold text-white leading-[1.08] mb-6"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.25rem)" }}
            >
              Your Path to{" "}
              <span className="italic text-cmg-gold">Australia</span>
              <br />
              Starts Here
            </h1>

            <p className="text-white/75 text-base md:text-lg leading-relaxed mb-10 max-w-md">
              Expert MARA-registered migration agents helping skilled workers,
              families, and businesses achieve their Australian dream — with
              a 97% visa approval rate.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-cmg-red text-white font-semibold px-8 py-3.5 text-base hover:bg-cmg-red-light hover:shadow-[0_8px_24px_rgba(192,57,43,0.45)] hover:-translate-y-0.5 transition-all duration-200"
              >
                Book Free Consultation
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/50 text-white font-semibold px-8 py-3.5 text-base hover:bg-white/10 hover:border-white transition-all duration-200"
              >
                Explore Visa Options <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2.5">
              {trustBadges.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold text-white"
                >
                  <Icon className="h-3.5 w-3.5 text-cmg-gold shrink-0" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-1.5 opacity-40">
          <div className="w-px h-8 bg-white animate-pulse" />
          <span className="text-white text-[10px] tracking-widest uppercase">Scroll</span>
        </div>
      </section>

      {/* ── 2. STATS BAND ─────────────────────────────────────────────────────── */}
      <StatsBand />

      {/* ── 3. VISA PATHWAY HIGHLIGHTS ────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-cmg-cream border-b border-cmg-cream-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pathwayHighlights.map((p) => (
              <div
                key={p.visa}
                className="group bg-white rounded-xl p-6 border border-cmg-cream-dark hover:border-cmg-gold/40 hover:shadow-gold transition-all duration-300 cursor-default"
                style={{ borderTopColor: p.color, borderTopWidth: 3 }}
              >
                <div className="text-2xl mb-3">{p.flag}</div>
                <p className="text-[11px] font-bold tracking-widest uppercase mb-0.5" style={{ color: p.color }}>{p.visa}</p>
                <h3 className="font-heading text-base font-semibold text-cmg-ink mb-2">{p.label}</h3>
                <p className="text-cmg-slate text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. SERVICES GRID ──────────────────────────────────────────────────── */}
      <section className="py-24 px-4 bg-section-alt">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="eyebrow text-cmg-red mb-3">Our Services</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cmg-ink mb-4">
              Comprehensive Australian<br className="hidden sm:block" /> Migration Services
            </h2>
            <p className="text-cmg-slate max-w-2xl mx-auto leading-relaxed">
              From skilled migration to family reunions — we handle every aspect of
              your Australian visa journey with precision and care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <ServiceCard key={svc.href} {...svc} variant="accent" />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-cmg-blue font-semibold text-sm hover:text-cmg-navy transition-colors"
            >
              View all visa services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 5. WHY MARA — Image + Text ────────────────────────────────────────── */}
      <ImageTextRow
        imageSrc="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900"
        imageAlt="Professional migration team at CMG"
        eyebrow="Why Choose CMG"
        heading="Why MARA Registration Matters"
        body="Not all migration advice is created equal. Only MARA-registered agents are legally authorised to provide immigration assistance in Australia — and are held accountable by the Office of the Migration Agents Registration Authority."
        bullets={[
          "Legally authorised under the Migration Act 1958",
          "Accountable to OMARA's Code of Conduct — protecting you from negligent advice",
          "Access to Department of Home Affairs systems and priority queues",
          "Professional indemnity insurance — your application is protected",
        ]}
        ctaLabel="Learn About Our Team"
        ctaHref="/about"
        imageLeft={true}
      />

      {/* ── 6. CITIES / LIFESTYLE PHOTO STRIP ────────────────────────────────── */}
      <section className="py-16 px-4 bg-cmg-cream-dark overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <p className="eyebrow text-cmg-slate text-center mb-8">Where We Place Our Clients</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { city: "Sydney", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600" },
              { city: "Melbourne", img: "https://images.unsplash.com/photo-1514395462725-fb4566210144?w=600" },
              { city: "Brisbane", img: "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?w=600" },
              { city: "Perth", img: "https://images.unsplash.com/photo-1573946314-a6e48038f491?w=600" },
            ].map(({ city, img }) => (
              <div key={city} className="relative aspect-[3/4] md:aspect-[3/4] rounded-xl overflow-hidden group">
                <Image
                  src={img}
                  alt={`${city}, Australia`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cmg-navy/80 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 text-white font-heading font-semibold text-lg">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. PROCESS STEPS ──────────────────────────────────────────────────── */}
      <section className="py-24 px-4 bg-section-lines">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="eyebrow text-cmg-red mb-3">The Process</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cmg-ink mb-4">
              Your Migration Journey in 4 Steps
            </h2>
            <p className="text-cmg-slate max-w-xl mx-auto">
              A clear, transparent process — from first consultation to visa grant and life in Australia.
            </p>
          </div>
          <ProcessSteps steps={processSteps} />
        </div>
      </section>

      {/* ── 8. TESTIMONIALS — navy with grain ─────────────────────────────────── */}
      <section
        className="relative py-24 px-4 overflow-hidden"
        style={{ background: "linear-gradient(160deg, #07112b 0%, #0d2357 55%, #12295e 100%)" }}
      >
        {/* Grain */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.04,
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23g)'/%3E%3C/svg%3E\")",
          }}
          aria-hidden
        />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cmg-gold/30 to-transparent" />

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="eyebrow text-cmg-gold mb-3">Client Stories</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-white/55 max-w-xl mx-auto">
              Real outcomes for real people — from 30+ countries to Australian permanent residency.
            </p>
          </div>
          <TestimonialCarousel />
        </div>

        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cmg-gold/20 to-transparent" />
      </section>

      {/* ── 9. SECOND IMAGE ROW — Australia lifestyle ─────────────────────────── */}
      <ImageTextRow
        imageSrc="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=900"
        imageAlt="Professional consultation with CMG migration agent"
        eyebrow="Our Approach"
        heading="Expert Guidance, Real Outcomes"
        body="Our MARA-registered agents combine deep legal knowledge with genuine care for every client. We don't just lodge applications — we build strategies, prepare you for every stage, and stand beside you until your visa is in hand."
        bullets={[
          "Free 30-minute assessment to understand your specific pathway",
          "Dedicated case manager assigned to your file from day one",
          "Real-time case tracking and proactive communication",
          "Post-visa support — skills assessment, state nomination, and more",
        ]}
        ctaLabel="Book Your Free Consultation"
        ctaHref="/contact"
        imageLeft={false}
      />

      {/* ── 10. CTA BANNER — full photo overlay ───────────────────────────────── */}
      <section className="relative py-28 px-4 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1524293568345-75d62c3664f7?w=1920"
          alt="Melbourne CBD — Australia"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(13,35,87,0.95) 0%, rgba(13,35,87,0.82) 45%, rgba(13,35,87,0.60) 100%)",
          }}
          aria-hidden
        />
        {/* Grain on dark section */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.035,
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23g)'/%3E%3C/svg%3E\")",
          }}
          aria-hidden
        />

        <div className="relative max-w-4xl mx-auto text-center">
          <p className="eyebrow text-cmg-gold mb-5">Get Started Today</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Start Your<br />
            <span className="italic text-cmg-gold-light">Australian Journey?</span>
          </h2>
          <p className="text-white/75 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Book a free 30-minute consultation with one of our MARA-registered agents.
            No obligation, no jargon — just expert advice tailored to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-cmg-navy font-bold px-9 py-4 text-base hover:bg-cmg-cream hover:shadow-[0_8px_32px_rgba(255,255,255,0.25)] hover:-translate-y-0.5 transition-all duration-200 shadow-xl"
            >
              Book Free Consultation
            </Link>
            <a
              href="tel:+61299999999"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/60 text-white font-semibold px-9 py-4 text-base hover:bg-white/10 hover:border-white transition-all duration-200"
            >
              <Phone className="h-4 w-4" /> Call Us Now
            </a>
          </div>

          {/* MARA trust chip */}
          <div className="mt-10 inline-flex items-center gap-3 bg-white/8 border border-white/12 rounded-full px-5 py-2.5">
            <ShieldCheck className="h-4 w-4 text-cmg-gold shrink-0" />
            <span className="text-white/70 text-sm">MARA Registered · Professional Indemnity Insured · 500+ Approved Visas</span>
          </div>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Commonwealth Migration Group",
          description: "MARA-registered migration agents in Sydney, Australia",
          url: "https://commonwealthmigration.com.au",
          telephone: "+61 2 9999 9999",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Level 10, 20 Bond Street",
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
