import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  Briefcase, Users, GraduationCap, Building2, Star, CheckCircle,
  ArrowRight, ShieldCheck, Award, Clock, Phone,
} from "lucide-react"
import HeroCarousel from "@/components/HeroCarousel"
import ServiceCard from "@/components/ServiceCard"
import ImageTextRow from "@/components/ImageTextRow"
import ProcessSteps from "@/components/ProcessSteps"
import dynamic from "next/dynamic"
const TestimonialCarousel = dynamic(() => import("@/components/TestimonialCarousel"), {
  ssr: true,
  loading: () => <div className="min-h-[320px]" aria-hidden />,
})
import JsonLd from "@/components/JsonLd"
import { organisationSchema, localBusinessSchema } from "@/lib/structured-data"
import { processSteps } from "@/lib/site"

export const metadata: Metadata = {
  title: "Australian Migration Agents - Commonwealth Migration Group",
  description:
    "MARA-registered migration agents helping skilled workers, families and businesses move to Australia. Book a free consultation today.",
}

const services = [
  {
    icon: Briefcase,
    title: "Skilled Migration",
    description: "Points-tested pathways to permanent residency - subclass 189, 190 and 491. We maximise your score and manage your EOI.",
    href: "/services/skilled-migration",
    accentColor: "blue" as const,
  },
  {
    icon: Building2,
    title: "Employer Sponsored",
    description: "Connect with Australian employers through TSS 482 and ENS 186 visa pathways. From nomination to grant.",
    href: "/services/employer-sponsored",
    accentColor: "red" as const,
  },
  {
    icon: Users,
    title: "Family & Partner",
    description: "Reunite with loved ones through Australia's partner, child and parent visa programs - onshore and offshore.",
    href: "/services/family-partner",
    accentColor: "blue" as const,
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
    accentColor: "red" as const,
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── 1. HERO - auto-rotating skyline carousel (no blue tint) ──── */}
      <section className="relative flex min-h-[calc(100vh-5rem)] items-center justify-center overflow-hidden">
        {/* Carousel background - cross-fades between 4 Australian skylines every 6s */}
        <HeroCarousel
          slides={[
            { src: "/hero-1.png", alt: "Sydney Opera House and Harbour Bridge at golden hour" },
            { src: "/hero-2.png", alt: "Sydney Harbour Bridge arches at sunset" },
            { src: "/hero-3.png", alt: "Bondi Beach with Sydney skyline at sunrise" },
            { src: "/hero-4.png", alt: "Melbourne CBD skyline reflected in the Yarra River at dusk" },
          ]}
          interval={6000}
        />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-8 text-center py-24">

          {/* Eyebrow with flag-inspired hairlines (blue → red) */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-10" style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.5))" }} />
            <p className="eyebrow text-white tracking-[0.24em] font-bold">
              MARA Registered <span className="text-cmg-red-light">·</span> Migration Agents <span className="text-cmg-red-light">·</span> Est. 2009
            </p>
            <span className="h-px w-10" style={{ background: "linear-gradient(to left, transparent, rgba(255,255,255,0.5))" }} />
          </div>

          {/* Headline */}
          <h1
            className="font-heading font-bold text-white leading-[1.15] mb-6"
            style={{ fontSize: "clamp(2.4rem, 5.5vw, 4rem)", textShadow: "0 2px 16px rgba(0,26,94,0.45)" }}
          >
            Your Path to Australia<br />Starts Here
          </h1>

          <p className="text-white/80 text-base md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Expert MARA-registered migration agents helping skilled workers,
            families, and businesses achieve their Australian dream - with a 97% visa approval rate.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-cmg-red text-white font-semibold px-8 py-4 rounded-lg text-sm hover:bg-red-700 transition-colors shadow-lg"
            >
              Book Free Consultation
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/60 text-white font-semibold px-8 py-4 rounded-lg text-sm hover:bg-white hover:text-cmg-navy transition-all"
            >
              Explore Visa Options <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-2.5 justify-center">
            {[
              { icon: ShieldCheck, label: "MARA Registered" },
              { icon: Award,       label: "97% Success Rate" },
              { icon: Clock,       label: "500+ Visas Approved" },
            ].map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 bg-white/12 border border-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 text-xs font-semibold text-white"
              >
                <Icon className="h-3.5 w-3.5 text-white/70 shrink-0" />
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 opacity-40">
          <div className="w-px h-8 bg-white animate-pulse" />
          <span className="text-white text-[10px] tracking-widest uppercase">Scroll</span>
        </div>
      </section>

      {/* ── 2. SERVICES ──────────────────────────────────────────────── */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-6 bg-cmg-red" />
              <p className="eyebrow text-cmg-red">Our Services</p>
              <span className="h-px w-6 bg-cmg-red" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cmg-text mb-4">
              Comprehensive Australian Migration Services
            </h2>
            <p className="text-cmg-slate max-w-2xl mx-auto leading-relaxed">
              From skilled migration to family reunions - we handle every aspect of
              your Australian visa journey with precision and care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <ServiceCard key={svc.href} {...svc} />
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

      {/* ── 4. WHY CMG - image + text ────────────────────────────────── */}
      <ImageTextRow
        imageSrc="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900"
        imageAlt="Professional migration team at CMG"
        eyebrow="Why Choose CMG"
        heading="Why MARA Registration Matters"
        body="Not all migration advice is created equal. Only MARA-registered agents are legally authorised to provide immigration assistance in Australia - and are held accountable by the Office of the Migration Agents Registration Authority."
        bullets={[
          "Legally authorised under the Migration Act 1958",
          "Accountable to OMARA's Code of Conduct - protecting you from negligent advice",
          "Access to Department of Home Affairs systems and priority queues",
          "Professional indemnity insurance - your application is protected",
        ]}
        ctaLabel="Learn About Our Team"
        ctaHref="/about"
        imageLeft={true}
        bgClass="bg-section-alt"
      />

      {/* ── 5. CITIES PHOTO STRIP ────────────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="eyebrow text-cmg-slate text-center mb-8">Where We Place Our Clients</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { city: "Sydney",    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600" },
              { city: "Melbourne", img: "https://images.unsplash.com/photo-1514395462725-fb4566210144?w=600" },
              { city: "Brisbane",  img: "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?w=600" },
              { city: "Perth",     img: "https://images.unsplash.com/photo-1573946314-a6e48038f491?w=600" },
            ].map(({ city, img }) => (
              <div key={city} className="relative aspect-[3/4] rounded-xl overflow-hidden group">
                <Image
                  src={img}
                  alt={`${city}, Australia`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cmg-navy/75 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 text-white font-heading font-bold text-lg">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. PROCESS ───────────────────────────────────────────────── */}
      <section className="py-24 px-4 bg-section-alt">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-6 bg-cmg-red" />
              <p className="eyebrow text-cmg-red">The Process</p>
              <span className="h-px w-6 bg-cmg-red" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cmg-text mb-4">
              Your Migration Journey in 4 Steps
            </h2>
            <p className="text-cmg-slate max-w-xl mx-auto">
              A clear, transparent process - from first consultation to visa grant and life in Australia.
            </p>
          </div>
          <ProcessSteps steps={processSteps} />
        </div>
      </section>

      {/* ── 7. TESTIMONIALS ──────────────────────────────────────────── */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-6 bg-cmg-red" />
              <p className="eyebrow text-cmg-red">Client Stories</p>
              <span className="h-px w-6 bg-cmg-red" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cmg-text mb-4">
              What Our Clients Say
            </h2>
            <p className="text-cmg-slate max-w-xl mx-auto">
              Real outcomes for real people - from 30+ countries to Australian permanent residency.
            </p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* ── 8. EXPERT GUIDANCE - image + text ────────────────────────── */}
      <ImageTextRow
        imageSrc="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=900"
        imageAlt="Professional consultation with CMG migration agent"
        eyebrow="Our Approach"
        heading="Expert Guidance, Real Outcomes"
        body="Our MARA-registered agents combine deep legal knowledge with genuine care for every client. We don't just lodge applications - we build strategies, prepare you for every stage, and stand beside you until your visa is in hand."
        bullets={[
          "Free 30-minute assessment to understand your specific pathway",
          "Dedicated case manager assigned to your file from day one",
          "Real-time case tracking and proactive communication",
          "Post-visa support - skills assessment, state nomination, and more",
        ]}
        ctaLabel="Book Your Free Consultation"
        ctaHref="/contact"
        imageLeft={false}
        bgClass="bg-section-alt"
      />

      {/* ── 9. CTA BANNER - premium, with red light-leak ─────────────── */}
      <section className="relative bg-cmg-navy overflow-hidden">
        {/* Premium deep gradient with red glow */}
        <div className="absolute inset-0 hero-premium-deep" aria-hidden />
        {/* Grain */}
        <div className="absolute inset-0 hero-tex-noise pointer-events-none" aria-hidden />

        <div className="relative max-w-4xl mx-auto text-center px-4 py-24 md:py-28">
          {/* Flag-inspired divider above eyebrow */}
          <div className="flex items-center justify-center gap-2 mb-5">
            <span className="h-px w-12" style={{ background: "linear-gradient(to right, transparent, #003087)" }} />
            <span className="h-1.5 w-1.5 rounded-full bg-cmg-red" />
            <span className="h-px w-12" style={{ background: "linear-gradient(to left, transparent, #C8102E)" }} />
          </div>
          <p className="eyebrow text-white/60 mb-5">Get Started Today</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Start Your Australian Journey?
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Book a free 30-minute consultation with one of our MARA-registered agents.
            No obligation, no jargon - just expert advice tailored to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-cmg-red text-white font-bold px-9 py-4 rounded-lg text-base hover:bg-red-700 transition-colors shadow-[0_4px_24px_rgba(200,16,46,0.45)]"
            >
              Book Free Consultation
            </Link>
            <a
              href="tel:+61299999999"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-semibold px-9 py-4 rounded-lg text-base hover:border-white/60 hover:bg-white/5 transition-all"
            >
              <Phone className="h-4 w-4" /> Call Us Now
            </a>
          </div>
          <p className="mt-8 text-white/40 text-sm">
            MARA Registered <span className="text-cmg-red-light">·</span> Professional Indemnity Insured <span className="text-cmg-red-light">·</span> 500+ Approved Visas
          </p>
        </div>
      </section>


      <JsonLd data={organisationSchema} />
      <JsonLd data={localBusinessSchema} />
    </>
  )
}
