import type { Metadata } from "next"
import HeroBanner from "@/components/HeroBanner"
import FAQAccordion from "@/components/FAQAccordion"
import CTABanner from "@/components/CTABanner"
import JsonLd from "@/components/JsonLd"

export const metadata: Metadata = {
  title: "Business & Investor Visa Australia — Subclass 188 & 888",
  description:
    "Establish your Australian business with expert 188 and 888 visa guidance. CMG supports business innovation and investor applicants.",
}

const visas = [
  {
    code: "188A",
    name: "Business Innovation (Provisional)",
    requirements: ["Business turnover ≥ AUD $750K", "Net business & personal assets ≥ AUD $1.25M", "Age: under 55 (state waiver possible)", "State government nomination required"],
    colour: "bg-cmg-blue",
  },
  {
    code: "188B",
    name: "Investor (Provisional)",
    requirements: ["Net assets ≥ AUD $2.25M", "Business/investment experience", "Invest AUD $1.5M in designated investments", "State government nomination required"],
    colour: "bg-cmg-blue-light",
  },
  {
    code: "188C",
    name: "Significant Investor (Provisional)",
    requirements: ["No age limit", "Invest AUD $5M in complying investments", "State government nomination required", "Must hold for at least 4 years"],
    colour: "bg-cmg-navy",
  },
  {
    code: "188E",
    name: "Premium Investor (Provisional)",
    requirements: ["Invest AUD $15M in Australia", "No state nomination required", "Invitation from the Minister only", "Most prestigious pathway"],
    colour: "bg-cmg-gold",
    textClass: "text-cmg-navy",
  },
  {
    code: "888",
    name: "Business Innovation & Investment (Permanent)",
    requirements: ["Hold a 188 provisional visa", "Meet ongoing financial requirements", "Demonstrate business or investment activity", "Pathway to permanent residency"],
    colour: "bg-cmg-navy",
  },
  {
    code: "132",
    name: "Business Talent (Permanent)",
    requirements: ["Direct permanent visa — no provisional stage", "High-calibre business owners", "Significant Business History or Venture Capital streams", "Must be nominated by a state"],
    colour: "bg-cmg-red",
  },
]

const faqs = [
  { question: "Which state should I apply to for business visa nomination?", answer: "Different states prioritise different types of business and investment. Victoria, NSW, and Queensland are popular for tech and innovation, while Western Australia and South Australia actively recruit manufacturing and resources businesses. CMG identifies the state most aligned with your business profile and manages the nomination strategy." },
  { question: "What is a 'complying investment' for the SIV stream?", answer: "For the Significant Investor Visa (188C), your AUD $5M must be invested across prescribed categories: a minimum AUD $500K in eligible venture capital or growth private equity funds, a minimum AUD $1.5M in eligible managed funds investing in emerging companies, with the balance in other eligible investments." },
  { question: "How long does the business visa process take?", answer: "The 188 provisional visa can take 22–35 months from lodgement. To then apply for the permanent 888 visa, you must typically hold the 188 for at least 2–4 years and meet ongoing requirements. The total journey to permanent residency can take 4–6+ years." },
  { question: "Do I need to live in Australia on a 188 visa?", answer: "Generally, yes. You must demonstrate genuine commitment to operating a business or making a designated investment in Australia. Most 188 streams have requirements around time spent in Australia and active involvement in business operations." },
  { question: "Can my family come with me?", answer: "Yes. Your spouse/partner and dependent children can be included in your 188 application as secondary applicants. They receive the same visa conditions and can work and study in Australia." },
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

export default function BusinessInvestorPage() {
  return (
    <>
      <JsonLd data={jsonLd} />

      <HeroBanner
        headline="Invest in Australia. Build Your Future."
        subheadline="Australia welcomes ambitious entrepreneurs, investors, and business leaders through a suite of business and investment visa options. CMG provides end-to-end strategy for high-net-worth applicants."
        bgImage="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920"
        gradient="gradient-navy-gold"
        ctaButtons={[
          { label: "Book Strategic Consultation", href: "/contact", variant: "primary" },
          { label: "View Visa Options", href: "#visas", variant: "secondary" },
        ]}
        height="large"
      />

      {/* Why Australia */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cmg-text">Why Australia for Business?</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {["Consistent GDP growth", "Stable political environment", "World-class infrastructure", "Access to Asia-Pacific markets", "Exceptional quality of life"].map((item) => (
              <div key={item} className="rounded-2xl bg-cmg-light-blue p-5 text-center">
                <span className="text-cmg-blue font-semibold text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visa options */}
      <section id="visas" className="py-20 px-4 bg-cmg-light-blue">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cmg-text">Business Visa Options</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visas.map((v) => (
              <div key={v.code} className="rounded-2xl bg-white shadow-card overflow-hidden">
                <div className={`${v.colour} px-6 py-4`}>
                  <span className={`text-sm font-medium ${v.textClass ?? "text-white/80"}`}>Subclass {v.code}</span>
                  <h3 className={`font-heading text-lg font-bold mt-0.5 ${v.textClass ?? "text-white"}`}>{v.name}</h3>
                </div>
                <ul className="p-5 space-y-2">
                  {v.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-cmg-slate">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cmg-blue shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our process */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-cmg-text">Our Process for Business Visas</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {["State nomination strategy", "Business plan preparation", "Financial documentation", "Investment structuring advice", "Application lodgement"].map((step, i) => (
              <div key={step} className="text-center">
                <div className="w-10 h-10 rounded-full bg-cmg-blue text-white flex items-center justify-center text-sm font-bold mx-auto mb-3">
                  {i + 1}
                </div>
                <p className="text-sm text-cmg-text font-medium">{step}</p>
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
        headline="Ready to bring your business vision to Australia?"
        body="CMG's business visa specialists provide end-to-end strategy — from state nomination to permanent residency."
        primaryCTA={{ label: "Book Strategic Consultation", href: "/contact" }}
        secondaryCTA={{ label: "Explore Other Services", href: "/services" }}
        variant="navy-gold"
      />
    </>
  )
}
