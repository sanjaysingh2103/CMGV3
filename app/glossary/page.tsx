import type { Metadata } from "next"
import HeroBanner from "@/components/HeroBanner"
import JsonLd from "@/components/JsonLd"
import { glossary, type GlossaryTerm } from "@/lib/glossary"

export const metadata: Metadata = {
  title: "Australian Immigration Glossary — Visa Terms Explained",
  description:
    "Plain-English definitions of every Australian immigration term: MARA, SkillSelect, MLTSSL, ANZSCO, EOI, ITA, points test, bridging visas and 40+ more. Updated for 2026.",
  keywords: [
    "Australian immigration glossary",
    "visa terms",
    "MARA",
    "SkillSelect",
    "ANZSCO",
    "MLTSSL",
    "STSOL",
    "EOI",
    "skills assessment",
    "Australia migration vocabulary",
  ],
  openGraph: {
    title: "Australian Immigration Glossary — Visa Terms Explained",
    description: "Plain-English definitions of 50+ Australian immigration terms.",
    images: [
      {
        url: "/api/og?title=Immigration+Glossary&subtitle=50%2B+Australian+visa+terms+explained+in+plain+English&eyebrow=Glossary+%C2%B7+CMG",
        width: 1200,
        height: 630,
      },
    ],
  },
}

const CATEGORY_ORDER: GlossaryTerm["category"][] = [
  "General",
  "Process",
  "Skilled Migration",
  "Employer",
  "Family & Partner",
  "Student",
  "Business",
  "Documents",
]

const CATEGORY_COLORS: Record<GlossaryTerm["category"], string> = {
  General: "border-t-cmg-blue",
  Process: "border-t-cmg-blue",
  "Skilled Migration": "border-t-cmg-red",
  Employer: "border-t-cmg-navy",
  "Family & Partner": "border-t-cmg-red",
  Student: "border-t-cmg-blue",
  Business: "border-t-cmg-navy",
  Documents: "border-t-cmg-blue",
}

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
}

export default function GlossaryPage() {
  /* Group by category preserving order */
  const grouped = CATEGORY_ORDER.map((cat) => ({
    category: cat,
    terms: glossary.filter((t) => t.category === cat).sort((a, b) => a.term.localeCompare(b.term)),
  })).filter((g) => g.terms.length > 0)

  /* DefinedTerm structured data — helps Google understand glossary */
  const schema = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "CMG Australian Immigration Glossary",
    hasDefinedTerm: glossary.map((t) => ({
      "@type": "DefinedTerm",
      name: t.term,
      alternateName: t.abbr,
      description: t.definition,
      inDefinedTermSet: "CMG Australian Immigration Glossary",
    })),
  }

  return (
    <>
      <JsonLd data={schema} />

      <HeroBanner
        eyebrow="Glossary · 50+ terms explained"
        headline="Australian Immigration Glossary"
        subheadline="Every visa term, acronym, and process step — explained in plain English. From MARA to MLTSSL, from EOI to AHPRA."
        bgImage="https://images.unsplash.com/photo-1532012197267-da84d127e765?w=1920&q=80"
        gradient="gradient-hero-blue"
        texture="dots"
        height="medium"
      />

      {/* Category nav */}
      <section className="bg-section-alt border-b border-cmg-border py-6 px-4 sticky top-20 z-30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-2 justify-center">
          {grouped.map(({ category, terms }) => (
            <a
              key={category}
              href={`#cat-${slugify(category)}`}
              className="px-4 py-2 rounded-full bg-white border border-cmg-border text-[13px] font-bold text-cmg-text hover:border-cmg-blue hover:text-cmg-blue transition-colors"
            >
              {category} <span className="text-cmg-slate font-normal">({terms.length})</span>
            </a>
          ))}
        </div>
      </section>

      {/* Glossary list */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto space-y-16">
          {grouped.map(({ category, terms }) => (
            <div key={category} id={`cat-${slugify(category)}`} className="scroll-mt-44">
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="h-px w-6 bg-cmg-red" />
                <p className="eyebrow text-cmg-red">{category}</p>
                <span className="h-px w-6 bg-cmg-red" />
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-cmg-text mb-8">
                {category} terms
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {terms.map((t) => (
                  <article
                    key={t.term}
                    id={`term-${slugify(t.term)}`}
                    className={`scroll-mt-40 bg-white border border-cmg-border ${CATEGORY_COLORS[t.category]} border-t-[3px] rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow`}
                  >
                    <div className="flex items-baseline gap-2 mb-2 flex-wrap">
                      <h3 className="font-heading text-lg font-bold text-cmg-text leading-tight">
                        {t.term}
                      </h3>
                      {t.abbr && (
                        <span className="text-xs text-cmg-slate font-medium">
                          ({t.abbr})
                        </span>
                      )}
                    </div>
                    <p className="text-cmg-slate text-[14px] leading-relaxed">{t.definition}</p>
                    {t.relatedTerms && t.relatedTerms.length > 0 && (
                      <p className="mt-3 text-[12px] text-cmg-slate">
                        <span className="font-semibold text-cmg-text">Related:</span>{" "}
                        {t.relatedTerms.map((rt, i) => (
                          <span key={rt}>
                            <a
                              href={`#term-${slugify(rt)}`}
                              className="text-cmg-blue hover:underline font-semibold"
                            >
                              {rt}
                            </a>
                            {i < t.relatedTerms!.length - 1 && ", "}
                          </span>
                        ))}
                      </p>
                    )}
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-cmg-navy overflow-hidden">
        <div className="absolute inset-0 hero-premium-deep" aria-hidden />
        <div className="absolute inset-0 hero-tex-noise pointer-events-none" aria-hidden />
        <div className="relative max-w-3xl mx-auto text-center px-4 py-16 md:py-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-px w-12" style={{ background: "linear-gradient(to right, transparent, #003087)" }} />
            <span className="h-1.5 w-1.5 rounded-full bg-cmg-red" />
            <span className="h-px w-12" style={{ background: "linear-gradient(to left, transparent, #C8102E)" }} />
          </div>
          <p className="eyebrow text-white/60 mb-4">Still confused?</p>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
            Talk to a MARA-authorised agent — free.
          </h2>
          <p className="text-white/65 leading-relaxed mb-8 max-w-xl mx-auto">
            A 30-minute consultation will clarify which terms actually apply to your situation
            and which visa pathway makes sense for you.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-cmg-red text-white font-bold px-7 py-3.5 rounded-lg hover:bg-red-700 transition-colors shadow-[0_4px_24px_rgba(200,16,46,0.45)]"
          >
            Book Free Consultation
          </a>
        </div>
      </section>
    </>
  )
}
