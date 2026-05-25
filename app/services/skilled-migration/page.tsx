import type { Metadata } from "next"
import HeroBanner from "@/components/HeroBanner"
import FAQAccordion from "@/components/FAQAccordion"
import CTABanner from "@/components/CTABanner"
import JsonLd from "@/components/JsonLd"

export const metadata: Metadata = {
  title: "Skilled Migration Australia — 189, 190 & 491 Visa Experts",
  description:
    "Maximise your points score and secure your Australian skilled visa invitation. CMG specialists in subclass 189, 190 and 491.",
}

const visaSubclasses = [
  {
    code: "189",
    name: "Skilled Independent",
    colour: "bg-cmg-blue",
    points: [
      "Permanent residency — live and work anywhere in Australia",
      "No employer or state sponsorship required",
      "Typical invitation score: 85+ points",
      "Processing time: 6–18 months",
    ],
  },
  {
    code: "190",
    name: "Skilled Nominated",
    colour: "bg-cmg-blue-light",
    points: [
      "Permanent residency — live and work in nominating state/territory",
      "5 additional points for state nomination",
      "Typical invitation score: 75+ points",
      "Processing time: 6–18 months",
    ],
  },
  {
    code: "491",
    name: "Skilled Work Regional (Provisional)",
    colour: "bg-cmg-navy",
    points: [
      "5-year provisional visa — pathway to PR via subclass 191",
      "Live and work in regional Australia",
      "15 additional points for regional nomination",
      "Typical invitation score: 65+ points",
    ],
  },
]

const occupations = [
  "Software Engineers", "Civil Engineers", "Nurses", "Accountants",
  "Electricians", "Plumbers", "Teachers", "Chefs",
  "Project Managers", "Data Scientists",
]

const faqs = [
  { question: "What is the minimum points score to get an invitation?", answer: "The minimum score to submit an Expression of Interest (EOI) is 65 points. However, actual invitation scores for the subclass 189 are typically 85+ points in recent rounds. Regional pathways (491) can receive invitations at lower scores." },
  { question: "How long does the points test process take?", answer: "After lodging your EOI, you may receive an invitation within days to several months depending on your score and occupation. After receiving an invitation, you have 60 days to lodge your visa application. Overall processing from EOI to visa grant can take 6–18 months." },
  { question: "Can my partner add to my points score?", answer: "Yes. If your partner meets the skills and English language requirements, you can claim 10 additional points. Even if your partner doesn't meet these requirements, being in a de facto or married relationship without a qualifying partner means you still receive 0 points from this category." },
  { question: "What English test scores do I need?", answer: "For competent English (minimum) you need IELTS 6.0 in each band (or equivalent). For proficient English (+10 points) you need IELTS 7.0 in each band. For superior English (+20 points) you need IELTS 8.0 in each band. PTE Academic and TOEFL iBT scores are also accepted." },
  { question: "Can I lodge an EOI while completing my skills assessment?", answer: "No. You must hold a valid skills assessment before you can submit your EOI in SkillSelect. CMG recommends beginning the skills assessment process as early as possible as it can take 3–6 months." },
  { question: "What happens after I receive an invitation to apply?", answer: "You have 60 days from the date of invitation to lodge a complete visa application through ImmiAccount. CMG will guide you through gathering all required documents, completing health examinations, obtaining police clearances, and lodging a compelling application." },
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

export default function SkilledMigrationPage() {
  return (
    <>
      <JsonLd data={jsonLd} />

      <HeroBanner
        headline="Your Pathway to Australian Permanent Residency"
        subheadline="Australia's points-tested skilled migration program is the most direct route to permanent residency. CMG's expert agents will maximise your profile and secure your invitation."
        bgImage="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1920"
        gradient="gradient-hero"
        ctaButtons={[
          { label: "Check Your Points Score", href: "/tools", variant: "primary" },
          { label: "Book Free Assessment", href: "/contact", variant: "secondary" },
        ]}
        height="large"
      />

      {/* Overview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold text-cmg-red uppercase tracking-widest mb-3">General Skilled Migration</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-cmg-text mb-6">How Skilled Migration Works</h2>
          <p className="text-cmg-slate leading-relaxed text-lg">
            The General Skilled Migration (GSM) program allows skilled workers to live and work permanently in Australia without employer sponsorship. Points are awarded across criteria including age, English language ability, qualifications, and work experience. Applicants must submit an Expression of Interest (EOI) through SkillSelect and receive an invitation to apply.
          </p>
        </div>
      </section>

      {/* Visa subclasses */}
      <section className="py-20 px-4 bg-cmg-light-blue">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cmg-text">Visa Subclasses</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visaSubclasses.map((v) => (
              <div key={v.code} className="rounded-2xl bg-white shadow-card overflow-hidden">
                <div className={`${v.colour} px-6 py-5`}>
                  <span className="text-white/80 text-sm font-medium">Subclass {v.code}</span>
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

      {/* How we help */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cmg-text mb-4">CMG's Skills Assessment Strategy</h2>
            <p className="text-cmg-slate">We don't just lodge applications — we build strategies that maximise your score and invitation prospects.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["Occupation Selection", "English Test Preparation", "Skills Assessment Guidance", "State Nomination Identification", "EOI Optimisation", "Invitation Monitoring"].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl bg-cmg-light-blue p-4">
                <span className="w-2 h-2 rounded-full bg-cmg-blue shrink-0" />
                <span className="font-medium text-cmg-text text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Occupations in demand */}
      <section className="py-20 px-4 bg-cmg-light-blue">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-cmg-text mb-4">Occupations in Demand</h2>
          <p className="text-cmg-slate mb-10">These are among the most commonly invited occupations in recent skilled migration rounds.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {occupations.map((occ) => (
              <span key={occ} className="px-4 py-2 rounded-full bg-white text-cmg-blue border border-cmg-blue/20 font-medium text-sm shadow-card">
                {occ}
              </span>
            ))}
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
        headline="Use our free Points Test Calculator to estimate your score — then book a consultation to maximise it."
        body="Our MARA-registered agents have helped hundreds of skilled workers achieve their Australian residency. Start your journey today."
        primaryCTA={{ label: "Check Your Points Score", href: "/tools" }}
        secondaryCTA={{ label: "Book Free Consultation", href: "/contact" }}
        variant="navy-gold"
      />
    </>
  )
}
