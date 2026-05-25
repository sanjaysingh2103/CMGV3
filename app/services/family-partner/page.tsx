import type { Metadata } from "next"
import HeroBanner from "@/components/HeroBanner"
import FAQAccordion from "@/components/FAQAccordion"
import CTABanner from "@/components/CTABanner"
import JsonLd from "@/components/JsonLd"

export const metadata: Metadata = {
  title: "Australian Partner & Family Visa Specialists — CMG",
  description:
    "Reunite with your family in Australia. Expert guidance on partner visas (820/801, 309/100) and all family visa subclasses.",
}

const visaTypes = [
  { code: "820/801", name: "Partner Visa (Onshore)", desc: "For married or de facto partners already in Australia. Two-stage process leading to permanent residency." },
  { code: "309/100", name: "Partner Visa (Offshore)", desc: "For married or de facto partners applying from outside Australia. Temporary then permanent stages." },
  { code: "101/102", name: "Child Visa", desc: "Permanent residency for biological and adopted children of Australian citizens and permanent residents." },
  { code: "103/143", name: "Parent Visa", desc: "Bring parents to Australia permanently. The contributory parent visa (143) offers faster processing." },
  { code: "864", name: "Contributory Aged Parent Visa", desc: "For aged parents already in Australia on another visa. Higher cost but faster processing." },
  { code: "116/117", name: "Other Family Visas", desc: "Remaining relative (116) and carer visas (116) for unique family circumstances." },
]

const partnerTimeline = [
  { stage: "Stage 1", code: "820 (onshore) or 309 (offshore)", timing: "12–24 months", desc: "Temporary visa granted while relationship assessed" },
  { stage: "Stage 2", code: "801/100 Permanent", timing: "2–3 years after Stage 1 grant", desc: "Permanent visa granted on confirmation of genuine ongoing relationship" },
]

const faqs = [
  { question: "What evidence do I need for a partner visa?", answer: "The Department of Home Affairs assesses partner visa applications across four categories: financial aspects (joint bank accounts, property, bills), nature of household (shared living, domestic duties), social aspects (joint activities, recognition by family and friends), and commitment to each other. CMG prepares comprehensive evidence bundles tailored to each couple's circumstances." },
  { question: "How long does a partner visa take?", answer: "The onshore partner visa (820) Stage 1 processing currently takes 12–24 months. Stage 2 (permanent 801 visa) is typically assessed 2–3 years after the Stage 1 grant date. Offshore partner visas (309/100) follow similar timeframes but from outside Australia." },
  { question: "Can I work while my partner visa is being processed?", answer: "Yes. When you lodge an onshore partner visa (subclass 820), you receive a bridging visa A that allows you to work full-time in Australia while the application is being processed." },
  { question: "What is a de facto relationship for visa purposes?", answer: "A de facto relationship for Australian immigration purposes is a genuine, ongoing partnership between two people who are not married but are in a committed relationship similar to marriage. The relationship must have existed for at least 12 months before the application (with some exceptions for registered relationships)." },
  { question: "Can same-sex couples apply for a partner visa?", answer: "Yes. Australia's partner visa program is fully inclusive of same-sex and gender-diverse couples. Both married couples and de facto partners (of all genders and sexual orientations) can apply." },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
}

export default function FamilyPartnerPage() {
  return (
    <>
      <JsonLd data={jsonLd} />

      <HeroBanner
        headline="Reunite Your Family in Australia"
        subheadline="Whether you're bringing a partner, child, or parent to Australia — CMG's compassionate team will guide you through every requirement of Australia's family visa program."
        bgImage="https://images.unsplash.com/photo-1511895426328-dc8714191011?w=1920"
        gradient="gradient-hero"
        ctaButtons={[
          { label: "Book Free Consultation", href: "/contact", variant: "primary" },
          { label: "Partner Visa Details", href: "#partner", variant: "secondary" },
        ]}
        height="large"
      />

      {/* Visa types grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cmg-text">Family Visa Options</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visaTypes.map((v) => (
              <div key={v.code} className="rounded-2xl bg-white border border-gray-100 shadow-card p-6 hover:shadow-hover transition-all">
                <span className="inline-block bg-cmg-light-blue text-cmg-blue text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  Subclass {v.code}
                </span>
                <h3 className="font-heading text-xl font-semibold text-cmg-text mb-3">{v.name}</h3>
                <p className="text-cmg-slate text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner visa deep dive */}
      <section id="partner" className="py-20 px-4 bg-cmg-light-blue">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cmg-text mb-4">Australia's Partner Visa — What You Need to Know</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="rounded-2xl bg-white p-8 shadow-card">
              <h3 className="font-heading text-xl font-semibold text-cmg-text mb-5">Evidence Requirements</h3>
              <div className="space-y-4">
                {["Financial aspects — joint accounts, shared bills, property", "Nature of household — shared living arrangements and duties", "Social aspects — joint activities, family and friend recognition", "Commitment — future plans, communication history, length of relationship"].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-cmg-gold shrink-0" />
                    <span className="text-cmg-slate text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-card">
              <h3 className="font-heading text-xl font-semibold text-cmg-text mb-5">Two-Stage Timeline</h3>
              <div className="space-y-5">
                {partnerTimeline.map((stage) => (
                  <div key={stage.stage} className="border-l-4 border-cmg-blue pl-4">
                    <span className="font-bold text-cmg-blue text-sm">{stage.stage}</span>
                    <p className="font-semibold text-cmg-text text-sm mt-0.5">{stage.code}</p>
                    <p className="text-cmg-slate text-xs mt-1">{stage.timing} — {stage.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-cmg-text mb-10 text-center">Frequently Asked Questions</h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <CTABanner
        headline="Family reunification is our passion. Let's get your family together."
        body="CMG's family visa specialists have helped hundreds of couples and families reunite in Australia. Book your free consultation today."
        primaryCTA={{ label: "Book Free Consultation", href: "/contact" }}
        secondaryCTA={{ label: "Call Us Now", href: "tel:+61200000000" }}
        variant="navy-gold"
      />
    </>
  )
}
