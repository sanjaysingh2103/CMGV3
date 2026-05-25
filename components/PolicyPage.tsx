import HeroBanner from "@/components/HeroBanner"

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

export default function PolicyPage({ title, intro, effectiveDate, sections, bgImage }: PolicyContent) {
  return (
    <>
      <HeroBanner
        eyebrow="Legal"
        headline={title}
        subheadline={`Effective ${effectiveDate}`}
        bgImage={bgImage ?? "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=80"}
        gradient="gradient-hero-deep"
        texture="grid"
        height="medium"
      />

      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-cmg-slate leading-relaxed mb-12">{intro}</p>

          <div className="space-y-12">
            {sections.map((sec, i) => (
              <div key={i}>
                <h2 className="font-heading text-xl md:text-2xl font-bold text-cmg-text mb-3">
                  {sec.heading}
                </h2>
                {sec.body && (
                  <p className="text-cmg-slate leading-relaxed mb-4">{sec.body}</p>
                )}
                {sec.list && (
                  <ul className="list-disc list-outside ml-5 space-y-1.5 text-cmg-slate">
                    {sec.list.map((item, j) => <li key={j}>{item}</li>)}
                  </ul>
                )}
                {sec.sublist && sec.sublist.map((sub, k) => (
                  <div key={k} className="mb-4">
                    <h3 className="font-semibold text-cmg-text mt-3 mb-2">{sub.title}</h3>
                    <ul className="list-disc list-outside ml-5 space-y-1.5 text-cmg-slate">
                      {sub.items.map((it, m) => <li key={m}>{it}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
