import type { Metadata } from "next"
import {
  Briefcase,
  Building2,
  Heart,
  GraduationCap,
  TrendingUp,
  MessageSquare,
} from "lucide-react"
import HeroBanner from "@/components/HeroBanner"
import ServiceCard from "@/components/ServiceCard"
import CTABanner from "@/components/CTABanner"
import JsonLd from "@/components/JsonLd"

export const metadata: Metadata = {
  title: "Australian Visa Services - CMG Migration Group",
  description:
    "Skilled migration, employer sponsorship, family visas, student visas & business investor pathways. Expert CMG agents guide every step.",
}

const services = [
  { icon: Briefcase, title: "Skilled Migration", description: "Points-tested pathways to permanent residency - subclass 189, 190, and 491.", href: "/services/skilled-migration" },
  { icon: Building2, title: "Employer Sponsored", description: "Connect with Australian employers through TSS 482 and ENS 186 visa pathways.", href: "/services/employer-sponsored" },
  { icon: Heart, title: "Family & Partner", description: "Reunite with loved ones through Australia's family and partner visa programs.", href: "/services/family-partner" },
  { icon: GraduationCap, title: "Student Visas", description: "Study in Australia and explore post-study work rights and migration pathways.", href: "/services/student" },
  { icon: TrendingUp, title: "Business & Investor", description: "Establish or expand your business in Australia with dedicated investor visa options.", href: "/services/business-investor" },
  { icon: MessageSquare, title: "Free Consultation", description: "Not sure which visa suits you? Start with a no-obligation 30-minute consultation.", href: "/contact" },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Australian Immigration Services",
  provider: {
    "@type": "LegalService",
    name: "Commonwealth Migration Group",
  },
  serviceType: "Migration Agent Services",
  areaServed: "Worldwide",
  description: "Comprehensive Australian visa and migration services.",
}

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={jsonLd} />

      <HeroBanner
        eyebrow="MARA-Registered · 5 Pathways · 30+ Visa Subclasses"
        headline="Comprehensive Australian Migration Services"
        subheadline="From skilled migration to family reunions - we handle every aspect of your Australian visa journey."
        bgImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=80"
        gradient="gradient-hero-deep"
        texture="grid"
        ctaButtons={[
          { label: "Book Free Consultation", href: "/contact", variant: "primary" },
          { label: "Check Your Points", href: "/tools", variant: "secondary" },
        ]}
        height="large"
      />

      {/* Intro copy */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-sm font-semibold text-cmg-red uppercase tracking-widest mb-3">Why Choose CMG</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cmg-text mb-6">
              Australia Is Open for the World&apos;s Best Talent
            </h2>
            <p className="text-cmg-slate leading-relaxed text-lg">
              Australia&apos;s migration program is built on selective merit - but navigating it requires expert knowledge, strategic timing, and meticulous preparation. CMG offers comprehensive migration services across every major visa category, ensuring you&apos;re matched with the right pathway and supported at every step.
            </p>
            <p className="text-cmg-slate leading-relaxed text-lg mt-4">
              Whether you&apos;re a skilled professional targeting permanent residency, an employer looking to fill critical roles, a family seeking reunification, a student planning your study pathway, or a business investor exploring Australia&apos;s opportunities - CMG has the expertise you need.
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
              />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Not Sure Which Visa Is Right for You?"
        body="Our MARA-registered agents provide free 30-minute consultations to assess your eligibility and recommend the best pathway to Australia."
        primaryCTA={{ label: "Book Free Consultation", href: "/contact" }}
        secondaryCTA={{ label: "Use Our Free Tools", href: "/tools" }}
        variant="navy-gold"
      />
    </>
  )
}
