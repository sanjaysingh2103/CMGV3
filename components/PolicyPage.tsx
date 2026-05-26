import HeroBanner from "@/components/HeroBanner"
import { Calendar, FileCheck, Mail, ShieldCheck, CheckCircle2 } from "lucide-react"

export interface PolicySection {
  heading: string
  body?: string
  list?: string[]
  sublist?: { title: string; items: string[] }[]
}

export interface PolicyContent {
  title: string
  intro: string
  effectiveDate: string
  sections: PolicySection[]
  bgImage?: string
}

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
}

function stripNumber(s: string) {
  return s.replace(/^\d+\.\s*/, "")
}

export default function PolicyPage({ title, intro, effectiveDate, sections, bgImage }: PolicyContent) {
  return (
    <>
      <HeroBanner
        eyebrow="Legal"
        headline={title}
        subheadline={`Effective ${effectiveDate} · Last updated ${effectiveDate}`}
        bgImage={bgImage ?? "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=80"}
        gradient="gradient-hero-deep"
        texture="grid"
        height="medium"
      />

      {/* Info strip - effective date, version, contact */}
      <section className="bg-section-alt border-b border-cmg-border py-7 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { icon: Calendar,    label: "Effective Date", value: effectiveDate },
            { icon: FileCheck,   label: "Version",        value: "1.0" },
            { icon: Mail,        label: "Questions?",     value: "support@commonwealthmigration.ae" },
            { icon: ShieldCheck, label: "Authority",      value: "MARA-Authorised" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-white border border-cmg-border flex items-center justify-center shrink-0">
                <Icon className="h-4 w-4 text-cmg-blue" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-wider text-cmg-slate font-bold">{label}</p>
                <p className="text-[13px] font-semibold text-cmg-text truncate">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main - sticky TOC + sectioned content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[280px_1fr] gap-10 lg:gap-16">

          {/* Sticky TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="h-px w-6 bg-cmg-red" />
                <p className="eyebrow text-cmg-red">Contents</p>
              </div>
              <nav>
                <ol className="space-y-0.5">
                  {sections.map((sec, i) => (
                    <li key={i}>
                      <a
                        href={`#sec-${slugify(sec.heading)}`}
                        className="flex items-start gap-2.5 py-2 px-3 rounded-md text-[13px] text-cmg-slate hover:text-cmg-blue hover:bg-cmg-light-blue transition-colors leading-snug"
                      >
                        <span className="font-bold text-cmg-blue/50 shrink-0">{i + 1}.</span>
                        <span>{stripNumber(sec.heading)}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          </aside>

          {/* Content */}
          <div className="min-w-0">
            {/* Intro card */}
            <div className="bg-section-alt border border-cmg-border border-t-[3px] border-t-cmg-blue rounded-xl p-6 md:p-7 mb-12 shadow-card">
              <p className="text-cmg-text leading-relaxed">{intro}</p>
            </div>

            {/* Sections */}
            <div className="space-y-12">
              {sections.map((sec, i) => (
                <article
                  key={i}
                  id={`sec-${slugify(sec.heading)}`}
                  className="scroll-mt-28"
                >
                  <div className="flex items-start gap-3.5 mb-4">
                    <span className="shrink-0 w-9 h-9 rounded-full bg-cmg-blue text-white font-heading font-bold flex items-center justify-center text-base shadow-blue">
                      {i + 1}
                    </span>
                    <h2 className="font-heading text-xl md:text-2xl font-bold text-cmg-text pt-1 leading-tight">
                      {stripNumber(sec.heading)}
                    </h2>
                  </div>

                  <div className="pl-[3.25rem]">
                    {sec.body && (
                      <p className="text-cmg-slate leading-relaxed mb-3">{sec.body}</p>
                    )}
                    {sec.list && (
                      <ul className="space-y-2 mt-2">
                        {sec.list.map((item, j) => (
                          <li key={j} className="flex items-start gap-2.5 text-cmg-slate text-[15px]">
                            <CheckCircle2 className="h-4 w-4 text-cmg-blue shrink-0 mt-1" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {sec.sublist?.map((sub, k) => (
                      <div key={k} className="mt-5">
                        <h3 className="font-bold text-cmg-text mb-2.5 text-[15px]">{sub.title}</h3>
                        <ul className="space-y-2">
                          {sub.items.map((it, m) => (
                            <li key={m} className="flex items-start gap-2.5 text-cmg-slate text-[15px]">
                              <CheckCircle2 className="h-4 w-4 text-cmg-blue shrink-0 mt-1" />
                              <span>{it}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            {/* Mobile section index - shows below content on small screens */}
            <div className="lg:hidden mt-16 bg-section-alt border border-cmg-border rounded-xl p-6">
              <p className="eyebrow text-cmg-red mb-3">All sections</p>
              <ol className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {sections.map((sec, i) => (
                  <li key={i}>
                    <a
                      href={`#sec-${slugify(sec.heading)}`}
                      className="flex items-start gap-2 py-1.5 text-[13px] text-cmg-slate hover:text-cmg-blue"
                    >
                      <span className="font-bold text-cmg-blue/50 shrink-0">{i + 1}.</span>
                      <span>{stripNumber(sec.heading)}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - questions about this policy */}
      <section className="relative bg-cmg-navy overflow-hidden">
        <div className="absolute inset-0 hero-premium-deep" aria-hidden />
        <div className="absolute inset-0 hero-tex-noise pointer-events-none" aria-hidden />

        <div className="relative max-w-3xl mx-auto text-center px-4 py-16 md:py-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-px w-12" style={{ background: "linear-gradient(to right, transparent, #003087)" }} />
            <span className="h-1.5 w-1.5 rounded-full bg-cmg-red" />
            <span className="h-px w-12" style={{ background: "linear-gradient(to left, transparent, #C8102E)" }} />
          </div>
          <p className="eyebrow text-white/60 mb-4">Questions about this policy?</p>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
            Our team is happy to walk you through any section.
          </h2>
          <p className="text-white/65 leading-relaxed mb-8 max-w-xl mx-auto">
            For privacy enquiries, data subject access requests, or clarification on how we
            handle your information - reach out to us directly.
          </p>
          <a
            href="mailto:support@commonwealthmigration.ae"
            className="inline-flex items-center gap-2 bg-cmg-red text-white font-bold px-7 py-3.5 rounded-lg hover:bg-red-700 transition-colors shadow-[0_4px_24px_rgba(200,16,46,0.45)]"
          >
            <Mail className="h-4 w-4" />
            support@commonwealthmigration.ae
          </a>
        </div>
      </section>
    </>
  )
}
