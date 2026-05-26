import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  XCircle,
  User,
  Sparkles,
  ShieldCheck,
} from "lucide-react"
import HeroBanner from "@/components/HeroBanner"
import FAQAccordion from "@/components/FAQAccordion"
import JsonLd from "@/components/JsonLd"
import { cn } from "@/lib/utils"
import { comparisons, comparisonSlugs, type ComparisonContent } from "@/lib/comparisons"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return comparisonSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const cmp = comparisons[slug]
  if (!cmp) return { title: "Comparison Not Found" }
  return {
    title: cmp.seo.title,
    description: cmp.seo.description,
    keywords: cmp.seo.keywords,
    alternates: { canonical: `/compare/${cmp.slug}` },
    openGraph: {
      title: cmp.seo.title,
      description: cmp.seo.description,
      type: "article",
    },
  }
}

const accentClasses = {
  blue: {
    border: "border-t-cmg-blue",
    badge: "bg-cmg-blue text-white",
    heading: "text-cmg-blue",
    bulletBg: "bg-cmg-light-blue text-cmg-blue",
  },
  red: {
    border: "border-t-cmg-red",
    badge: "bg-cmg-red text-white",
    heading: "text-cmg-red",
    bulletBg: "bg-red-50 text-cmg-red",
  },
} as const

export default async function ComparisonPage({ params }: Props) {
  const { slug } = await params
  const cmp: ComparisonContent | undefined = comparisons[slug]
  if (!cmp) notFound()

  /* FAQ schema for Google rich snippets */
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: cmp.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  }

  return (
    <>
      <JsonLd data={faqSchema} />

      {/* 1. HERO */}
      <HeroBanner
        eyebrow={cmp.hero.eyebrow}
        headline={cmp.hero.headline}
        subheadline={cmp.hero.subheadline}
        gradient="gradient-hero-deep"
        texture="grid"
        height="medium"
        trustBadges={["MARA Registered", "Free 30-min Consultation", "Plain-English Advice"]}
        ctaButtons={[
          { label: "Book Free Consultation", href: "/contact", variant: "primary" },
          { label: "Skip to FAQs", href: "#faqs", variant: "secondary" },
        ]}
      />

      {/* 1.5 Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="bg-section-alt border-b border-cmg-border py-3 px-4 text-sm"
      >
        <ol className="max-w-7xl mx-auto flex items-center gap-1.5 text-cmg-slate flex-wrap">
          <li>
            <Link href="/" className="hover:text-cmg-blue">Home</Link>
          </li>
          <li><ChevronRight className="h-3.5 w-3.5" /></li>
          <li>
            <Link href="/compare" className="hover:text-cmg-blue">Compare Visas</Link>
          </li>
          <li><ChevronRight className="h-3.5 w-3.5" /></li>
          <li className="font-semibold text-cmg-text">
            {cmp.visaA} vs {cmp.visaB}
          </li>
        </ol>
      </nav>

      {/* 2. QUICK VERDICT */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border border-cmg-border border-t-[4px] border-t-cmg-blue p-8 md:p-10 shadow-premium">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="h-5 w-5 text-cmg-red" />
              <p className="eyebrow text-cmg-red">Quick Verdict</p>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-cmg-text mb-4">
              The 30-second answer
            </h2>
            <p className="text-cmg-slate text-lg leading-relaxed">
              {cmp.verdict}
            </p>
          </div>
        </div>
      </section>

      {/* 3. SIDE-BY-SIDE COMPARISON TABLE */}
      <section className="py-20 px-4 bg-section-alt">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="eyebrow text-cmg-red mb-3">Side-by-Side</p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-cmg-text">
              Specifications Compared
            </h2>
            <p className="text-cmg-slate mt-4 max-w-2xl mx-auto">
              Key differences are highlighted in red. All fees in AUD; processing times reflect Department of Home Affairs published medians.
            </p>
          </div>

          {/* Desktop: classic table */}
          <div className="hidden md:block rounded-xl overflow-hidden border border-cmg-border bg-white shadow-card">
            <table className="w-full text-sm">
              <thead className="bg-cmg-navy text-white sticky top-0">
                <tr>
                  <th className="text-left px-5 py-4 font-semibold w-1/4">
                    <span className="eyebrow text-white/60 block mb-1">Compare</span>
                    Specification
                  </th>
                  <th className="text-left px-5 py-4 font-heading text-base font-bold w-3/8">
                    <span className="eyebrow text-white/60 block mb-1">Option A</span>
                    {cmp.comparisonTable.columnA}
                  </th>
                  <th className="text-left px-5 py-4 font-heading text-base font-bold w-3/8">
                    <span className="eyebrow text-white/60 block mb-1">Option B</span>
                    {cmp.comparisonTable.columnB}
                  </th>
                </tr>
              </thead>
              <tbody>
                {cmp.comparisonTable.rows.map((row, i) => (
                  <tr
                    key={row.label}
                    className={cn(
                      "border-t border-cmg-border",
                      i % 2 === 1 && "bg-cmg-cream",
                      row.diff && "bg-red-50/40"
                    )}
                  >
                    <td className="px-5 py-4 font-semibold text-cmg-text align-top">
                      {row.label}
                      {row.diff && (
                        <span className="ml-2 inline-block text-[10px] font-bold uppercase tracking-wider text-cmg-red bg-red-100 px-1.5 py-0.5 rounded">
                          Key diff
                        </span>
                      )}
                    </td>
                    <td
                      className={cn(
                        "px-5 py-4 align-top leading-relaxed",
                        row.diff ? "text-cmg-red font-semibold" : "text-cmg-slate"
                      )}
                    >
                      {row.a}
                    </td>
                    <td
                      className={cn(
                        "px-5 py-4 align-top leading-relaxed",
                        row.diff ? "text-cmg-red font-semibold" : "text-cmg-slate"
                      )}
                    >
                      {row.b}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile: stacked cards per row */}
          <div className="md:hidden space-y-4">
            {cmp.comparisonTable.rows.map((row) => (
              <div
                key={row.label}
                className={cn(
                  "bg-white rounded-xl border border-cmg-border p-5 shadow-card",
                  row.diff && "border-cmg-red/30 bg-red-50/30"
                )}
              >
                <p className="font-semibold text-cmg-text mb-3 flex items-center gap-2">
                  {row.label}
                  {row.diff && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-cmg-red bg-red-100 px-1.5 py-0.5 rounded">
                      Key diff
                    </span>
                  )}
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="eyebrow text-cmg-blue mb-1">{cmp.visaA}</p>
                    <p className={cn("text-sm leading-relaxed", row.diff ? "text-cmg-red font-semibold" : "text-cmg-slate")}>
                      {row.a}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-cmg-border">
                    <p className="eyebrow text-cmg-red mb-1">{cmp.visaB}</p>
                    <p className={cn("text-sm leading-relaxed", row.diff ? "text-cmg-red font-semibold" : "text-cmg-slate")}>
                      {row.b}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CHOICE CARDS — "Choose X if…" */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="eyebrow text-cmg-red mb-3">Decision Framework</p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-cmg-text">
              Which One Fits You?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {cmp.choiceCards.map((card) => {
              const a = accentClasses[card.accent]
              return (
                <div
                  key={card.subclass}
                  className={cn(
                    "bg-white rounded-2xl border border-cmg-border border-t-[4px] p-8 shadow-card hover:shadow-card-hover transition-all duration-200",
                    a.border
                  )}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span className={cn("inline-flex items-center justify-center font-heading font-bold rounded-lg w-12 h-12 text-base", a.badge)}>
                      {card.subclass}
                    </span>
                    <h3 className={cn("font-heading text-2xl font-bold", a.heading)}>
                      {card.heading}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {card.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className={cn("rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5", a.bulletBg)}>
                          <CheckCircle2 className="h-4 w-4" />
                        </span>
                        <span className="text-cmg-slate leading-relaxed text-sm">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 5. PERSONAS */}
      <section className="py-20 px-4 bg-section-alt">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="eyebrow text-cmg-red mb-3">Real Scenarios</p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-cmg-text">
              Three People, Three Choices
            </h2>
            <p className="text-cmg-slate mt-4 max-w-2xl mx-auto">
              Composite profiles drawn from CMG client cases. Names changed, circumstances preserved.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cmp.personas.map((p) => (
              <article
                key={p.name}
                className="bg-white rounded-2xl border border-cmg-border p-7 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-full bg-cmg-light-blue flex items-center justify-center">
                    <User className="h-5 w-5 text-cmg-blue" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-cmg-text leading-snug">
                    {p.name}
                  </h3>
                </div>
                <p className="text-xs text-cmg-slate font-medium mb-4 pb-4 border-b border-cmg-border">
                  {p.profile}
                </p>
                <p className="text-sm text-cmg-slate leading-relaxed mb-5">
                  {p.story}
                </p>
                <div className="rounded-lg bg-cmg-cream border border-cmg-border p-4">
                  <p className="eyebrow text-cmg-red mb-1.5">Best fit</p>
                  <p className="font-heading font-bold text-cmg-blue text-base mb-2">{p.bestFit}</p>
                  <p className="text-xs text-cmg-slate leading-relaxed">{p.reason}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. COMMON MISTAKES */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="eyebrow text-cmg-red mb-3">Traps to Avoid</p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-cmg-text">
              Common Mistakes When Choosing
            </h2>
            <p className="text-cmg-slate mt-4">
              The pitfalls we see week after week — costly, avoidable, often invisible until grant is delayed or refused.
            </p>
          </div>

          <ul className="space-y-4">
            {cmp.mistakes.map((m, i) => (
              <li
                key={i}
                className="flex items-start gap-4 bg-red-50/40 border border-red-100 rounded-xl p-5"
              >
                <XCircle className="h-6 w-6 text-cmg-red shrink-0 mt-0.5" />
                <p className="text-cmg-text leading-relaxed">{m}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7. FAQs */}
      <section id="faqs" className="py-20 px-4 bg-section-alt scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="eyebrow text-cmg-red mb-3">FAQ</p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-cmg-text">
              {cmp.visaA} vs {cmp.visaB} — Frequently Asked Questions
            </h2>
          </div>
          <div className="bg-white rounded-2xl border border-cmg-border shadow-card p-6 md:p-8">
            <FAQAccordion faqs={cmp.faqs} />
          </div>
        </div>
      </section>

      {/* 8. CTA — premium navy with red light leak */}
      <section className="relative overflow-hidden py-20 px-4 hero-premium-deep">
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 mb-6">
            <ShieldCheck className="h-3.5 w-3.5 text-white/80" />
            <p className="eyebrow text-white/90">MARA-Registered · Plain English</p>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 text-shadow-hero">
            Still unsure between {cmp.visaA} and {cmp.visaB}?
          </h2>
          <p className="text-white/75 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            One 30-minute consultation can save months of planning down the wrong pathway. Our MARA-registered agents will assess your points, occupation list status and state nomination prospects — for free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-cmg-red text-white font-semibold px-8 py-4 rounded-lg text-sm hover:bg-red-700 transition-colors shadow-lg"
            >
              Book Free Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/compare"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-lg text-sm hover:border-white/60 hover:bg-white/5 transition-all"
            >
              See Other Comparisons
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
