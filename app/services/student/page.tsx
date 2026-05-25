import type { Metadata } from "next"
import HeroBanner from "@/components/HeroBanner"
import FAQAccordion from "@/components/FAQAccordion"
import CTABanner from "@/components/CTABanner"
import JsonLd from "@/components/JsonLd"

export const metadata: Metadata = {
  title: "Student Visa Australia — Subclass 500 & Graduate 485",
  description:
    "Study in Australia and plan your migration pathway. CMG guides international students through subclass 500 and post-study options.",
}

const cities = [
  { city: "Melbourne", desc: "World-class universities, vibrant culture, cosmopolitan food scene." },
  { city: "Sydney", desc: "Iconic harbour city, leading institutions, diverse job market." },
  { city: "Brisbane", desc: "Sunshine-filled river city with strong tech and healthcare sectors." },
  { city: "Perth", desc: "Australia's most isolated major city — resource-rich and liveable." },
  { city: "Adelaide", desc: "Affordable, student-friendly city with strong health and defence sectors." },
  { city: "Canberra", desc: "Australia's capital — home to ANU and government institutions." },
]

const faqs = [
  { question: "What is the GTE requirement?", answer: "The Genuine Temporary Entrant (GTE) requirement is an assessment that you intend to stay temporarily in Australia. You must demonstrate strong ties to your home country, a genuine desire to study your chosen course, and intention to comply with visa conditions. CMG prepares compelling, individually tailored GTE statements." },
  { question: "How do I show sufficient funds?", answer: "You need to demonstrate AUD $21,041 per year for yourself, plus AUD $7,362 per year for each accompanying family member (as at 2024 rates). Funds can be evidenced through bank statements, scholarship letters, financial guarantees from sponsors, or a combination of these." },
  { question: "Can I change courses on a student visa?", answer: "Yes, in most cases. However, transferring providers within the first 6 months of your principal course requires approval from your current education provider or proof of extenuating circumstances. CMG advises on the implications of course transfers for your visa conditions." },
  { question: "What English tests are accepted?", answer: "IELTS Academic, PTE Academic, TOEFL iBT, Cambridge Advanced (CAE), and OET are all accepted for the student visa. The required score depends on your course and education provider. Most universities require IELTS 6.0–6.5 overall." },
  { question: "How do I apply for a 485 after graduating?", answer: "Once you've completed your degree, you can apply for the Temporary Graduate visa (subclass 485) within 6 months of receiving your final results. The 485 grants 2–4+ years (depending on degree level and location studied) to remain in Australia, gain work experience, and build your migration pathway." },
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

export default function StudentVisasPage() {
  return (
    <>
      <JsonLd data={jsonLd} />

      <HeroBanner
        headline="Study in Australia — Then Stay"
        subheadline="Australia's world-class universities, vibrant cities, and post-study work pathways make it the destination of choice for international students. CMG helps you get there."
        bgImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920"
        gradient="gradient-hero"
        ctaButtons={[
          { label: "Book Free Consultation", href: "/contact", variant: "primary" },
          { label: "Post-Study Options", href: "#graduate", variant: "secondary" },
        ]}
        height="large"
      />

      {/* Subclass 500 */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-sm font-semibold text-cmg-red uppercase tracking-widest mb-3">Student Visa</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cmg-text mb-6">Subclass 500 — Student Visa</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { label: "Eligibility", desc: "Enrolled in a registered CRICOS course at an accredited institution" },
              { label: "Financial Requirements", desc: "Demonstrate sufficient funds for tuition, living expenses, and travel" },
              { label: "English Language", desc: "IELTS, PTE, TOEFL, or OET results meeting course requirements" },
              { label: "Genuine Temporary Entrant", desc: "GTE statement demonstrating intent to study and return home" },
              { label: "Work Rights", desc: "48 hours per fortnight during study, unlimited during semester breaks" },
              { label: "Dependants", desc: "Can bring spouse and dependent children on the same application" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl bg-cmg-light-blue p-5 border border-cmg-blue/10">
                <h3 className="font-semibold text-cmg-text mb-2">{item.label}</h3>
                <p className="text-cmg-slate text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Post-study */}
      <section id="graduate" className="py-20 px-4 bg-cmg-light-blue">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cmg-text mb-4">Study. Work. Migrate.</h2>
            <p className="text-cmg-slate text-lg">Subclass 485 — Temporary Graduate Visa</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { value: "2–4+ years", label: "Post-study work rights", desc: "Depending on degree level and where you studied" },
              { value: "Unlimited", label: "Work rights on 485", desc: "Work full-time in Australia in any occupation" },
              { value: "PR pathway", label: "Build your migration case", desc: "Gain skilled experience to qualify for points-tested visas" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl bg-white shadow-card p-6 text-center">
                <div className="font-heading text-3xl font-bold text-cmg-blue mb-2">{item.value}</div>
                <div className="font-semibold text-cmg-text mb-2">{item.label}</div>
                <p className="text-cmg-slate text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cmg-text">Popular Study Destinations</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cities.map((c) => (
              <div key={c.city} className="rounded-2xl bg-cmg-light-blue p-5 border border-cmg-blue/10">
                <h3 className="font-heading text-lg font-semibold text-cmg-text mb-2">{c.city}</h3>
                <p className="text-cmg-slate text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GTE guidance */}
      <section className="py-20 px-4 bg-cmg-light-blue">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold text-cmg-text mb-6">Why Your GTE Statement Matters</h2>
          <p className="text-cmg-slate text-lg leading-relaxed">
            The Genuine Temporary Entrant requirement is where many student visa applications fall down. CMG prepares compelling, legally-sound GTE statements that present your case clearly to the Department — minimising the risk of requests for further information or refusal.
          </p>
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
        headline="Start your Australian study journey with CMG's guidance."
        body="From GTE statements to post-study migration pathways — CMG supports international students at every stage."
        primaryCTA={{ label: "Book Free Consultation", href: "/contact" }}
        secondaryCTA={{ label: "Explore PR Pathways", href: "/services/skilled-migration" }}
        variant="navy-gold"
      />
    </>
  )
}
