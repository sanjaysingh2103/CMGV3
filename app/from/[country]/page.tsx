import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowRight,
  Briefcase,
  CalendarDays,
  CheckCircle2,
  FileBadge,
  Globe,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Quote,
} from "lucide-react"

import HeroBanner from "@/components/HeroBanner"
import FAQAccordion from "@/components/FAQAccordion"
import JsonLd from "@/components/JsonLd"

import { countries, countrySlugs, type CountryContent } from "@/lib/countries"

/* ------------------------------------------------------------------ */
/* Static params + per-page metadata                                  */
/* ------------------------------------------------------------------ */

export function generateStaticParams() {
  return countrySlugs.map((country) => ({ country }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string }>
}): Promise<Metadata> {
  const { country } = await params
  const data = countries[country]
  if (!data) return {}
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    keywords: data.keywords,
    alternates: { canonical: `/from/${data.slug}` },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `/from/${data.slug}`,
      type: "website",
      images: [{ url: data.hero.bgImage }],
    },
  }
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default async function CountryFromPage({
  params,
}: {
  params: Promise<{ country: string }>
}) {
  const { country } = await params
  const data: CountryContent | undefined = countries[country]
  if (!data) notFound()

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Australia Migration from ${data.countryName}`,
    serviceType: "Migration Agent Services",
    provider: {
      "@type": "LegalService",
      name: "Commonwealth Migration Group",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressCountry: "AE",
      },
    },
    areaServed: { "@type": "Country", name: data.countryName },
    description: data.metaDescription,
    url: `https://commonwealthmigration.com/from/${data.slug}`,
  }

  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={serviceSchema} />

      {/* 1. HERO -------------------------------------------------- */}
      <HeroBanner
        eyebrow={data.hero.eyebrow}
        headline={data.hero.headline}
        subheadline={data.hero.subheadline}
        bgImage={data.hero.bgImage}
        gradient={data.hero.gradient}
        texture={data.hero.texture}
        trustBadges={data.hero.trustBadges}
        height="large"
        ctaButtons={[
          { label: "Book Free Consultation", href: "/contact", variant: "primary" },
          { label: "View Points Calculator", href: "/tools", variant: "secondary" },
        ]}
      />

      {/* 2. COUNTRY SNAPSHOT STRIP -------------------------------- */}
      <section className="bg-section-alt border-b border-cmg-border py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="eyebrow text-cmg-red text-center mb-6">
            {data.countryShort} → Australia at a glance
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.snapshot.map((s, i) => {
              const Icon = [Sparkles, CalendarDays, Briefcase, FileBadge][i] ?? Sparkles
              return (
                <div
                  key={s.label}
                  className="bg-white rounded-xl border border-cmg-border border-t-[3px] border-t-cmg-blue p-5 shadow-card"
                >
                  <div className="w-10 h-10 rounded-lg bg-cmg-light-blue flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-cmg-blue" />
                  </div>
                  <p className="eyebrow text-cmg-slate mb-1.5">{s.label}</p>
                  <p className="font-heading text-base font-bold text-cmg-text leading-snug">
                    {s.value}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 3. WHY MIGRANTS FROM X CHOOSE AUSTRALIA ------------------ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <p className="eyebrow text-cmg-red mb-3">Why Australia</p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-cmg-text mb-5">
              Why migrants from {data.countryShort} choose Australia
            </h2>
            <p className="text-cmg-slate text-lg leading-relaxed">
              Real reasons {data.demonym} families make the move - and what makes
              Australia stand apart from Canada, the UK and the US.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {data.whyAustralia.map((r) => (
              <div
                key={r.title}
                className="bg-cmg-cream rounded-xl border border-cmg-border p-7"
              >
                <div className="w-10 h-10 rounded-lg bg-white border border-cmg-border flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-5 w-5 text-cmg-blue" />
                </div>
                <h3 className="font-heading text-lg font-bold text-cmg-text mb-2.5">
                  {r.title}
                </h3>
                <p className="text-cmg-slate leading-relaxed text-[15px]">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TOP VISA PATHWAYS FROM X ------------------------------ */}
      <section className="py-20 px-4 bg-section-alt">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <p className="eyebrow text-cmg-red mb-3">Visa Pathways</p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-cmg-text mb-5">
              Top visa pathways from {data.countryShort}
            </h2>
            <p className="text-cmg-slate text-lg leading-relaxed">
              Each pathway is matched to typical {data.demonym} applicant profiles.
              Click through for the full visa requirements, fees and process.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {data.pathways.map((p) => (
              <Link
                key={p.number}
                href={p.href}
                className="group bg-white rounded-xl border border-cmg-border border-t-[3px] border-t-cmg-red p-6 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 flex flex-col"
              >
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="font-heading text-3xl font-bold text-cmg-blue">
                    {p.number}
                  </span>
                  <span className="eyebrow text-cmg-slate">Subclass</span>
                </div>
                <h3 className="font-heading text-base font-bold text-cmg-text mb-2.5">
                  {p.name}
                </h3>
                <p className="text-cmg-slate text-sm leading-relaxed flex-grow">
                  {p.whyPopular}
                </p>
                <span className="inline-flex items-center gap-1.5 mt-5 text-cmg-blue font-semibold text-sm group-hover:gap-2.5 transition-all duration-200">
                  Learn more <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. COUNTRY-SPECIFIC CONSIDERATIONS ----------------------- */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <p className="eyebrow text-cmg-red mb-3">
              {data.countryShort}-Specific
            </p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-cmg-text mb-5">
              What makes {data.countryShort} applications different
            </h2>
            <p className="text-cmg-slate text-lg leading-relaxed">
              Document attestation, police clearance authorities, test centres
              and the most common refusal reasons we see for {data.demonym} applicants.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.considerations.map((c, i) => (
              <div
                key={c.title}
                className="flex gap-5 p-6 rounded-xl border border-cmg-border bg-white hover:bg-cmg-cream/40 transition-colors duration-200"
              >
                <div className="shrink-0">
                  <div className="w-11 h-11 rounded-full bg-cmg-blue text-white flex items-center justify-center font-heading font-bold text-base">
                    {i + 1}
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold text-cmg-text mb-2">
                    {c.title}
                  </h3>
                  <p className="text-cmg-slate text-sm leading-relaxed">
                    {c.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. COMMON OCCUPATIONS ----------------------------------- */}
      <section className="py-20 px-4 bg-cmg-navy">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <p className="eyebrow text-white/60 mb-3">Occupations</p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-5">
              Common occupations from {data.countryShort}
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
              These are the ANZSCO occupations CMG sees most frequently from{" "}
              {data.demonym} applicants - each linked to its skills assessment
              authority and preferred visa pathway.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {data.occupations.map((o) => (
              <div
                key={o.anzsco}
                className="bg-white/[0.07] border border-white/10 rounded-lg p-5 hover:bg-white/[0.11] transition-colors duration-200"
              >
                <div className="flex items-baseline justify-between gap-3 mb-1.5">
                  <h3 className="font-heading text-base font-bold text-white leading-tight">
                    {o.name}
                  </h3>
                  <span className="text-xs font-mono text-cmg-gold-light shrink-0">
                    {o.anzsco}
                  </span>
                </div>
                <p className="text-white/60 text-xs leading-relaxed">
                  {o.pathway}
                </p>
              </div>
            ))}
          </div>
          <p className="text-white/50 text-xs text-center mt-8 max-w-2xl mx-auto">
            ANZSCO codes from the Australian and New Zealand Standard Classification
            of Occupations. Eligibility depends on the current Core Skills Occupation
            List - CMG will confirm at consultation.
          </p>
        </div>
      </section>

      {/* 7. TESTIMONIALS ----------------------------------------- */}
      <section className="py-20 px-4 bg-section-alt">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="eyebrow text-cmg-red mb-3">Client Stories</p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-cmg-text mb-5">
              {data.demonym} applicants we&rsquo;ve helped
            </h2>
            <p className="text-cmg-slate text-base leading-relaxed">
              Names initialised and details lightly anonymised - every story is real.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {data.testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-cmg-border p-8 shadow-card relative"
              >
                <Quote className="absolute top-6 right-6 h-7 w-7 text-cmg-red/20" />
                <p className="text-cmg-text text-base leading-relaxed mb-6 italic">
                  &ldquo;{t.body}&rdquo;
                </p>
                <div className="flex items-center gap-4 pt-5 border-t border-cmg-border">
                  <div className="w-12 h-12 rounded-full bg-cmg-blue text-white flex items-center justify-center font-heading font-bold text-sm">
                    {t.initials}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-cmg-text text-sm">
                      {t.initials} · age {t.age} · {t.occupation}
                    </p>
                    <p className="text-cmg-slate text-xs mt-0.5">
                      {t.city} · Subclass {t.visa}
                      {t.timeline && (
                        <>
                          {" · "}
                          <span className="text-cmg-blue font-semibold">{t.timeline}</span>
                        </>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. COUNTRY-SPECIFIC FAQS -------------------------------- */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <p className="eyebrow text-cmg-red mb-3">FAQ</p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-cmg-text mb-5">
              Frequently asked questions from {data.countryShort}
            </h2>
            <p className="text-cmg-slate text-base leading-relaxed">
              The questions {data.demonym} applicants most commonly ask CMG -
              answered by our MARA-registered agents.
            </p>
          </div>
          <FAQAccordion faqs={data.faqs} />
        </div>
      </section>

      {/* 9. PRE-FOOTER TRUST BAND -------------------------------- */}
      <section className="trust-band py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { icon: ShieldCheck, label: "MARA Code of Conduct" },
            { icon: FileBadge, label: "Professional Indemnity Insured" },
            { icon: MessageCircle, label: "Free 30-min Consultation" },
            { icon: Globe, label: "Dubai-Based · GCC Reach" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white border border-cmg-border flex items-center justify-center shrink-0">
                <Icon className="h-4 w-4 text-cmg-blue" />
              </div>
              <p className="text-[13px] font-semibold text-cmg-text leading-tight">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 10. CTA - premium navy with red light-leak --------------- */}
      <section className="hero-premium-deep relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 hero-tex-grid pointer-events-none" aria-hidden />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="eyebrow text-cmg-gold-light mb-4">
            {data.flagEmoji} {data.countryShort} → Australia
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
            {data.cta.headline}
          </h2>
          <p className="text-white/75 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            {data.cta.body}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-cmg-red text-white font-semibold px-9 py-4 rounded-lg text-sm hover:bg-red-700 transition-colors shadow-lg"
            >
              Book Free Consultation
            </Link>
            <a
              href="tel:+97142345678"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-semibold px-9 py-4 rounded-lg text-sm hover:border-white/60 hover:bg-white/5 transition-all"
            >
              <Phone className="h-4 w-4" />
              Call CMG Dubai
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
