import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Globe } from "lucide-react"

import HeroBanner from "@/components/HeroBanner"
import CTABanner from "@/components/CTABanner"
import JsonLd from "@/components/JsonLd"

import { countries, countrySlugs } from "@/lib/countries"

export const metadata: Metadata = {
  title: "Migrate to Australia from Your Country - CMG Country Guides",
  description:
    "Country-specific Australian migration guides for GCC, Middle East and South Asia. UAE, India, Pakistan, Philippines, Egypt, Saudi Arabia.",
  alternates: { canonical: "/from" },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Migrate to Australia by Country of Origin",
  description:
    "Australian visa pathways tailored to applicants from the UAE, India, Pakistan, Philippines, Egypt and Saudi Arabia.",
  url: "https://commonwealthmigration.com/from",
  about: countrySlugs.map((slug) => ({
    "@type": "Country",
    name: countries[slug].countryName,
  })),
}

export default function FromCountryIndexPage() {
  const list = countrySlugs.map((slug) => countries[slug])

  return (
    <>
      <JsonLd data={jsonLd} />

      <HeroBanner
        eyebrow="Country-of-Origin Guides"
        headline="Migrate to Australia from Your Country"
        subheadline="CMG is a Dubai-based migration consultancy specialising in applicants from the GCC, Middle East and South Asia. Choose your country below for a tailored guide to attestation, occupations and visa pathways."
        bgImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
        gradient="gradient-hero-deep"
        texture="grid"
        height="medium"
        ctaButtons={[
          { label: "Book Free Consultation", href: "/contact", variant: "primary" },
          { label: "All Visa Services", href: "/services", variant: "secondary" },
        ]}
        trustBadges={["MARA-Authorised", "Dubai-Based", "GCC & South Asia Specialists"]}
      />

      {/* Intro copy */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="eyebrow text-cmg-red mb-3">CMG Country Specialists</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cmg-text mb-6">
              Where you&apos;re applying from changes everything
            </h2>
            <p className="text-cmg-slate leading-relaxed text-lg">
              Document attestation requirements, police clearance authorities,
              skills assessment quirks and even the wording of employer reference
              letters differ dramatically by country. A migration agent who
              doesn&apos;t know that HEC attestation is mandatory for Pakistani
              degrees, or that PSA documents from the Philippines now need
              Apostille rather than red ribbon, will cost you months in
              re-submissions.
            </p>
            <p className="text-cmg-slate leading-relaxed text-lg mt-4">
              CMG is headquartered in Dubai and built specifically around GCC,
              Middle East and South Asian applicants. The guides below are
              written by our MARA-registered agents and updated to reflect
              current Australian Department of Home Affairs requirements.
            </p>
          </div>

          {/* Country grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {list.map((c) => (
              <Link
                key={c.slug}
                href={`/from/${c.slug}`}
                className="group block bg-white rounded-xl border border-cmg-border border-t-[3px] border-t-cmg-blue p-7 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-14 h-14 rounded-xl bg-cmg-light-blue flex items-center justify-center text-3xl shrink-0"
                    aria-hidden
                  >
                    {c.flagEmoji}
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-cmg-text leading-tight">
                      {c.countryName}
                    </h3>
                    <p className="text-cmg-slate text-xs mt-1">
                      Pathways for {c.demonym}s
                    </p>
                  </div>
                </div>
                <p className="text-cmg-slate text-sm leading-relaxed mb-5">
                  {c.cardBlurb}
                </p>
                <span className="inline-flex items-center gap-1.5 text-cmg-blue font-semibold text-sm group-hover:gap-2.5 transition-all duration-200">
                  Migrate from {c.countryShort} <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-footer trust band */}
      <section className="trust-band py-10 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 text-cmg-text">
          <Globe className="h-5 w-5 text-cmg-blue" />
          <p className="text-sm font-semibold">
            Not on this list? CMG also works with applicants from Bangladesh,
            Sri Lanka, Nepal, Jordan, Lebanon, Oman, Bahrain, Kuwait and Qatar.
          </p>
        </div>
      </section>

      <CTABanner
        headline="Not sure which pathway fits your country?"
        body="Book a free 30-minute consultation with a MARA-registered CMG agent. We'll assess your points, your document position and your country-specific risks."
        primaryCTA={{ label: "Book Free Consultation", href: "/contact" }}
        secondaryCTA={{ label: "Call CMG Dubai", href: "tel:+97142345678" }}
        variant="navy-gold"
      />
    </>
  )
}
