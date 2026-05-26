import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Scale, ShieldCheck, MessageCircle, Sparkles } from "lucide-react"
import HeroBanner from "@/components/HeroBanner"
import CTABanner from "@/components/CTABanner"
import JsonLd from "@/components/JsonLd"
import { cn } from "@/lib/utils"
import { comparisonSummaries } from "@/lib/comparisons"

export const metadata: Metadata = {
  title: "Compare Australian Visas Side-by-Side - 189, 190, 491, 482, 186 | CMG",
  description:
    "Side-by-side visa comparisons for the most-asked Australian migration choices: 189 vs 190, 189 vs 491, 482 vs 186. Points, costs, processing and pathways compared.",
  keywords: [
    "compare Australian visas",
    "189 vs 190",
    "189 vs 491",
    "482 vs 186",
    "visa comparison Australia",
    "skilled visa comparison",
    "employer sponsored visa comparison",
  ],
  alternates: { canonical: "/compare" },
}

const accentMap = {
  blue: { border: "border-t-cmg-blue", chip: "bg-cmg-blue text-white", link: "text-cmg-blue" },
  red:  { border: "border-t-cmg-red",  chip: "bg-cmg-red text-white",  link: "text-cmg-red"  },
  gold: { border: "border-t-cmg-gold", chip: "bg-cmg-gold text-cmg-navy", link: "text-cmg-gold-deep" },
} as const

export default function CompareIndexPage() {
  /* Service schema markup */
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Australian Visa Comparison Service",
    provider: {
      "@type": "LegalService",
      name: "Commonwealth Migration Group",
      areaServed: "Australia",
    },
    serviceType: "Migration Agent Comparison & Strategy",
    description: metadata.description as string,
  }

  /* ItemList schema for the three comparison pages */
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: comparisonSummaries.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `/compare/${c.slug}`,
      name: `Subclass ${c.visaA} vs ${c.visaB}`,
    })),
  }

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={itemListSchema} />

      <HeroBanner
        eyebrow="Visa Comparisons"
        headline="Compare Australian Visas - Side-by-Side"
        subheadline="When you're stuck between two pathways, an honest comparison beats a thousand brochure pages. Here are the three choices we explain on every consultation call."
        gradient="gradient-hero-deep"
        texture="grid"
        height="medium"
        trustBadges={["MARA-Registered Analysis", "Updated for 2026", "No Marketing Fluff"]}
        ctaButtons={[
          { label: "Book Free Consultation", href: "/contact", variant: "primary" },
          { label: "See All Services", href: "/services", variant: "secondary" },
        ]}
      />

      {/* Why these three matter */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-cmg-light-blue border border-cmg-blue/10 px-4 py-1.5 mb-6">
            <Scale className="h-4 w-4 text-cmg-blue" />
            <p className="eyebrow text-cmg-blue">Why these three?</p>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-cmg-text mb-6">
            The Most-Asked Australian Visa Questions
          </h2>
          <p className="text-cmg-slate text-lg leading-relaxed">
            Every week we receive the same three questions: <em>189 or 190?</em>, <em>189 or 491?</em>, <em>482 or 186?</em>. The answer always depends on points, occupation, employer relationship and willingness to relocate. These guides give you the framework - a 30-minute consultation gives you the answer for your specific case.
          </p>
        </div>
      </section>

      {/* The 3 comparison cards */}
      <section className="pb-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {comparisonSummaries.map((c) => {
              const a = accentMap[c.accent]
              return (
                <Link
                  key={c.slug}
                  href={`/compare/${c.slug}`}
                  className={cn(
                    "group block bg-white rounded-xl border border-cmg-border border-t-[3px] p-7",
                    "shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200",
                    a.border
                  )}
                >
                  <div className="flex items-center gap-2 mb-5">
                    <span className={cn("inline-flex items-center justify-center font-heading font-bold rounded-lg px-3 py-1.5 text-sm", a.chip)}>
                      {c.visaA}
                    </span>
                    <span className="font-heading text-cmg-slate font-bold text-lg">vs</span>
                    <span className={cn("inline-flex items-center justify-center font-heading font-bold rounded-lg px-3 py-1.5 text-sm", a.chip)}>
                      {c.visaB}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-cmg-text mb-3 leading-snug">
                    Subclass {c.visaA} vs {c.visaB}
                  </h3>
                  <p className="text-cmg-slate text-sm leading-relaxed mb-6">
                    {c.shortDescription}
                  </p>
                  <span className={cn("inline-flex items-center gap-1.5 font-semibold text-sm group-hover:gap-2.5 transition-all duration-200", a.link)}>
                    Compare <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* What you'll find on each page */}
      <section className="py-20 px-4 bg-section-alt">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="eyebrow text-cmg-red mb-3">What&apos;s Inside</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cmg-text">
              Every Comparison Includes
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Sparkles, title: "Quick Verdict", text: "Two-sentence answer for skim-readers - who picks which, and why." },
              { icon: Scale, title: "Spec Comparison", text: "12+ row side-by-side table covering points, costs, processing, work rights." },
              { icon: MessageCircle, title: "3 Real Personas", text: "Composite client cases showing how the right choice depends on profile." },
              { icon: ShieldCheck, title: "Mistakes & FAQs", text: "Common traps to avoid plus 6–7 specific FAQs answered by MARA agents." },
            ].map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="bg-white rounded-xl border border-cmg-border p-6 shadow-card"
              >
                <div className="w-10 h-10 rounded-lg bg-cmg-light-blue flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-cmg-blue" />
                </div>
                <h3 className="font-heading text-base font-bold text-cmg-text mb-2">{title}</h3>
                <p className="text-sm text-cmg-slate leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Need a comparison that isn't listed?"
        body="Book a free 30-minute consultation - we'll walk you through the trade-offs for your specific situation, occupation and points score."
        primaryCTA={{ label: "Book Free Consultation", href: "/contact" }}
        secondaryCTA={{ label: "Use Our Points Calculator", href: "/tools" }}
        variant="navy-gold"
      />
    </>
  )
}
