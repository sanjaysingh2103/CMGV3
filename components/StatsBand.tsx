import { stats } from "@/lib/site"

/**
 * Soft credibility strip — replaces the previous harsh navy stats block.
 * Uses the brand cream/white palette to flow smoothly from the warm hero
 * into the rest of the page. Large editorial numerals in cmg-blue, with
 * subtle red micro-accents for the brand flag colours.
 */
export default function StatsBand() {
  return (
    <section className="relative bg-white border-y border-cmg-border py-14 md:py-16 px-4 overflow-hidden">
      {/* Very faint diagonal flag-stripe at top + bottom for premium accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent 0%, #003399 25%, #003399 45%, #D52B1E 55%, #D52B1E 75%, transparent 100%)",
        }}
        aria-hidden
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent 0%, #D52B1E 25%, #D52B1E 45%, #003399 55%, #003399 75%, transparent 100%)",
        }}
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-y-0 md:divide-x md:divide-cmg-border">
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center px-4 md:px-6">
              {/* Red top-dot accent */}
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-cmg-red mb-3" />

              {/* Large editorial numeral */}
              <div className="font-heading text-5xl md:text-6xl font-bold text-cmg-blue leading-none tracking-tight tabular-nums">
                {stat.value}
                <span className="text-cmg-red text-3xl md:text-4xl ml-0.5 align-top">
                  {stat.suffix}
                </span>
              </div>

              {/* Label */}
              <div className="text-cmg-slate text-xs md:text-[13px] font-semibold tracking-wide uppercase mt-3">
                {stat.label}
              </div>

              {/* Subtle decoration line under label - only on hover or always faint */}
              <span
                className="block mx-auto mt-3 h-px bg-cmg-border"
                style={{ width: i % 2 === 0 ? "32px" : "24px" }}
                aria-hidden
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
