import type { Metadata } from "next"
import HeroBanner from "@/components/HeroBanner"
import FAQAccordion from "@/components/FAQAccordion"
import CTABanner from "@/components/CTABanner"
import JsonLd from "@/components/JsonLd"

export const metadata: Metadata = {
  title: "Employer Sponsored Visa Australia — 482 & 186 Specialists",
  description:
    "Work in Australia through employer sponsorship. CMG navigates TSS 482 and ENS 186 visa applications for employers and employees alike.",
}

const visas = [
  {
    code: "482",
    name: "Temporary Skill Shortage (TSS)",
    colour: "bg-cmg-blue",
    points: [
      "Work in Australia for 2–4 years",
      "Employer must be an approved sponsor",
      "Short-term, medium-term, and labour agreement streams",
      "Pathway to permanent residency via subclass 186",
    ],
  },
  {
    code: "186",
    name: "Employer Nomination Scheme (ENS)",
    colour: "bg-cmg-navy",
    points: [
      "Permanent residency from day one",
      "Direct Entry and Temporary Residence Transition streams",
      "Employer must nominate the position",
      "Age limit: 45 years at time of application",
    ],
  },
]

const faqs = [
  { question: "What occupations are eligible for the TSS visa?", answer: "The TSS visa covers occupations on either the Short-Term Skilled Occupation List (STSOL) or the Medium and Long-Term Strategic Skills List (MLTSSL). The applicable list determines the stream and visa duration. CMG can advise which list your occupation falls on." },
  { question: "How long does the TSS visa last?", answer: "TSS visas can be granted for up to 2 years for short-term stream occupations, or up to 4 years for medium-term and labour agreement streams. Extensions may be possible." },
  { question: "Can I switch employers on a 482 visa?", answer: "Yes, but there are conditions. Changing employers requires a new nomination from the new employer and in most cases a new visa application. CMG can advise on the process and timing to ensure you remain lawfully working throughout the transition." },
  { question: "What are the English language requirements?", answer: "Generally, you need to demonstrate competent English (IELTS 5.0 in each band or equivalent). Some streams and occupations may require higher levels. Exemptions exist for citizens of certain English-speaking countries." },
  { question: "How do I transition from a 482 to permanent residency?", answer: "The most common pathway is the subclass 186 via the Temporary Residence Transition (TRT) stream, available after 2 years of working for your sponsoring employer in the nominated occupation. CMG specialises in mapping and preparing this transition." },
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

export default function EmployerSponsoredPage() {
  return (
    <>
      <JsonLd data={jsonLd} />

      <HeroBanner
        headline="Work in Australia with Employer Support"
        subheadline="Australia's employer-sponsored visa program gives skilled workers a fast-tracked path to work and live in Australia — and in many cases, achieve permanent residency."
        bgImage="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920"
        gradient="gradient-hero"
        ctaButtons={[
          { label: "Book Free Assessment", href: "/contact", variant: "primary" },
          { label: "Learn About 482→186", href: "#process", variant: "secondary" },
        ]}
        height="large"
      />

      {/* Visa cards */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cmg-text">Employer-Sponsored Visa Options</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {visas.map((v) => (
              <div key={v.code} className="rounded-2xl bg-white shadow-card overflow-hidden border border-gray-100">
                <div className={`${v.colour} px-6 py-5`}>
                  <span className="text-white/80 text-sm">Subclass {v.code}</span>
                  <h3 className="font-heading text-2xl font-bold text-white mt-1">{v.name}</h3>
                </div>
                <ul className="p-6 space-y-3">
                  {v.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-cmg-slate">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cmg-blue shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Employers */}
      <section className="py-20 px-4 bg-cmg-light-blue">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cmg-text mb-4">Sponsoring Overseas Workers?</h2>
            <p className="text-cmg-slate text-lg">We Handle the Complexity.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {["Access global talent", "Retain key staff via permanent pathways", "Full compliance support", "Labour Market Testing assistance"].map((item) => (
              <div key={item} className="rounded-2xl bg-white p-5 shadow-card text-center">
                <span className="text-cmg-blue font-semibold text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Employees */}
      <section id="process" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cmg-text mb-4">Already Have a Job Offer in Australia?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { step: "01", label: "Verify your occupation", desc: "Confirm eligibility on STSOL or MLTSSL" },
              { step: "02", label: "Employer applies for sponsorship", desc: "Become an approved standard business sponsor" },
              { step: "03", label: "Nomination lodged", desc: "Employer nominates the specific role" },
              { step: "04", label: "Visa application submitted", desc: "You apply for the 482 visa through ImmiAccount" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-cmg-blue text-white font-heading font-bold text-xl flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="font-semibold text-cmg-text mb-2">{item.label}</h4>
                <p className="text-cmg-slate text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-cmg-light-blue">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-cmg-text mb-10 text-center">Frequently Asked Questions</h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <CTABanner
        headline="Employer sponsorship is complex — CMG makes it simple."
        body="Whether you're an employer looking to sponsor or an employee with a job offer, CMG's specialists handle the entire process."
        primaryCTA={{ label: "Book Free Consultation", href: "/contact" }}
        secondaryCTA={{ label: "Learn About 186 PR", href: "/services/skilled-migration" }}
        variant="navy-gold"
      />
    </>
  )
}
