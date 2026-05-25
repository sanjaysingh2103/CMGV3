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
        height="h-[75vh] min-h-[560px]"
        trustBadges={content.hero.trustBadges}
        ctaButtons={[
          { label: "Book Free Consultation", href: "/contact", variant: "primary" },
          { label: "View Points Calculator", href: "/tools", variant: "outline" },
        ]}
      />

      {/* 2. Overview + Key Facts */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2">
            <p className="text-[11px] font-bold uppercase tracking-widest text-cmg-red mb-4">Overview</p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-cmg-text mb-6">Understanding Your Options</h2>
            <p className="text-cmg-slate text-lg leading-relaxed">{content.overview.intro}</p>
          </div>
          <div className="bg-cmg-light-blue rounded-2xl p-7 border border-cmg-blue/10">
            <p className="text-[11px] font-bold uppercase tracking-widest text-cmg-blue mb-4">Key Facts</p>
            <div className="space-y-4">
              {content.overview.keyFacts.map((fact) => (
                <div key={fact.label} className="flex justify-between items-start gap-3 py-3 border-b border-cmg-blue/10 last:border-0">
                  <span className="text-sm text-cmg-slate">{fact.label}</span>
                  <span className="text-sm font-semibold text-cmg-text text-right">{fact.value}</span>
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
            <p className="text-[11px] font-bold uppercase tracking-widest text-cmg-red mb-3">Eligibility</p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-cmg-text">Key Requirements</h2>
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
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[11px] font-bold uppercase tracking-widest text-cmg-red mb-3">Visa Subclasses</p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-cmg-text">Choose Your Pathway</h2>
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

      {/* 5. Step-by-Step Process */}
      <section className="py-20 px-4 bg-cmg-navy">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[11px] font-bold uppercase tracking-widest text-cmg-gold mb-3">Process</p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white">Step-by-Step Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {content.steps.map((step, i) => (
              <div key={i} className="bg-white/8 border border-white/10 rounded-2xl p-6">
                <div className="w-10 h-10 rounded-full bg-cmg-gold flex items-center justify-center mb-4 font-heading font-bold text-cmg-navy text-sm">
                  {i + 1}
                </div>
                <h3 className="font-semibold text-white text-base mb-2">{step.title}</h3>
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
            <p className="text-[11px] font-bold uppercase tracking-widest text-cmg-red mb-4">Fees</p>
            <h2 className="font-heading text-3xl font-bold text-cmg-text mb-6">Government Fees &amp; Costs</h2>
            <FeesTable
              rows={content.fees.rows}
              total={content.fees.total}
              disclaimer={content.fees.disclaimer}
            />
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-cmg-red mb-4">Documents</p>
            <h2 className="font-heading text-3xl font-bold text-cmg-text mb-6">Required Documents</h2>
            <ul className="space-y-3">
              {content.documents.map((doc, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-cmg-blue shrink-0 mt-0.5" />
                  <span className="text-cmg-slate text-sm">{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-20 px-4 bg-cmg-light-blue/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[11px] font-bold uppercase tracking-widest text-cmg-red mb-3">FAQ</p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-cmg-text">Frequently Asked Questions</h2>
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
