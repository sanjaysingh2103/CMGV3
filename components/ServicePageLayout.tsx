import HeroBanner from "@/components/HeroBanner"
import EligibilityCard from "@/components/EligibilityCard"
import VisaSubclassCard from "@/components/VisaSubclassCard"
import FeesTable from "@/components/FeesTable"
import FAQAccordion from "@/components/FAQAccordion"
import CTABanner from "@/components/CTABanner"
import { CheckCircle2 } from "lucide-react"
import type { VisaPageContent } from "@/lib/visa-content"

interface ServicePageLayoutProps {
  content: VisaPageContent
}

export default function ServicePageLayout({ content }: ServicePageLayoutProps) {
  return (
    <>
      {/* 1. Hero */}
      <HeroBanner
        headline={content.hero.headline}
        subheadline={content.hero.subheadline}
        bgImage={content.hero.bgImage}
        gradient="gradient-hero"
        height="large"
        trustBadges={content.hero.trustBadges}
        ctaButtons={[
          { label: "Book Free Consultation", href: "/contact", variant: "primary" },
          { label: "View Points Calculator", href: "/tools", variant: "secondary" },
        ]}
      />

      {/* 2. Overview + Key Facts */}
      <section className="py-20 px-4 bg-cmg-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2">
            <p className="eyebrow text-cmg-red mb-4">Overview</p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-cmg-ink mb-6">
              Understanding Your Options
            </h2>
            <p className="text-cmg-slate text-lg leading-relaxed">{content.overview.intro}</p>
          </div>
          <div className="bg-white rounded-xl border border-cmg-cream-dark border-t-[3px] border-t-cmg-gold p-7 shadow-[0_2px_16px_rgba(26,24,38,0.06)]">
            <p className="eyebrow text-cmg-blue mb-4">Key Facts</p>
            <div className="space-y-3">
              {content.overview.keyFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex justify-between items-start gap-3 py-3 border-b border-cmg-cream-dark last:border-0"
                >
                  <span className="text-sm text-cmg-slate">{fact.label}</span>
                  <span className="text-sm font-semibold text-cmg-ink text-right">{fact.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Eligibility Requirements */}
      <section className="py-20 px-4 bg-section-lines">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="eyebrow text-cmg-red mb-3">Eligibility</p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-cmg-ink">Key Requirements</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {content.eligibility.map((item, i) => (
              <EligibilityCard
                key={i}
                icon={item.icon}
                title={item.title}
                detail={item.detail}
                required={item.required}
                accentColor={item.accentColor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Visa Subclasses */}
      <section className="py-20 px-4 bg-cmg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="eyebrow text-cmg-red mb-3">Visa Subclasses</p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-cmg-ink">Choose Your Pathway</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {content.subclasses.map((sub) => (
              <VisaSubclassCard
                key={sub.number}
                number={sub.number}
                name={sub.name}
                description={sub.description}
                keyPoints={sub.keyPoints}
                href={sub.href}
                highlighted={sub.highlighted}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Step-by-Step Process — dark navy with grain */}
      <section
        className="relative py-20 px-4 overflow-hidden"
        style={{ background: "linear-gradient(160deg, #07112b 0%, #0d2357 55%, #12295e 100%)" }}
      >
        {/* Grain texture */}
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
            <p className="eyebrow text-cmg-gold mb-3">Process</p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white">Step-by-Step Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {content.steps.map((step, i) => (
              <div
                key={i}
                className="bg-white/[0.07] border border-white/10 rounded-xl p-6 hover:bg-white/[0.11] transition-colors duration-200"
              >
                {/* Step number */}
                <div className="w-10 h-10 rounded-full bg-cmg-gold flex items-center justify-center mb-4 font-cormorant font-bold text-cmg-navy leading-none"
                  style={{ fontSize: "1.1rem" }}>
                  {i + 1}
                </div>
                <h3 className="font-heading font-semibold text-white text-base mb-2">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Fees & Documents */}
      <section className="py-20 px-4 bg-section-alt">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div>
            <p className="eyebrow text-cmg-red mb-4">Fees</p>
            <h2 className="font-heading text-3xl font-bold text-cmg-ink mb-6">Government Fees &amp; Costs</h2>
            <FeesTable
              rows={content.fees.rows}
              total={content.fees.total}
              disclaimer={content.fees.disclaimer}
            />
          </div>
          <div>
            <p className="eyebrow text-cmg-red mb-4">Documents</p>
            <h2 className="font-heading text-3xl font-bold text-cmg-ink mb-6">Required Documents</h2>
            <ul className="space-y-3">
              {content.documents.map((doc, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-cmg-gold shrink-0 mt-0.5" />
                  <span className="text-cmg-slate text-sm">{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-20 px-4 bg-cmg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="eyebrow text-cmg-red mb-3">FAQ</p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-cmg-ink">
              Frequently Asked Questions
            </h2>
          </div>
          <FAQAccordion faqs={content.faqs} />
        </div>
      </section>

      {/* 8. CTA */}
      <CTABanner
        headline={content.cta.headline}
        body={content.cta.body}
        primaryCTA={{ label: "Book Free Consultation", href: "/contact" }}
        secondaryCTA={{ label: "Call Us Now", href: "tel:+61299999999" }}
        variant="navy-gold"
      />
    </>
  )
}
