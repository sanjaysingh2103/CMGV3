import { stats } from "@/lib/site"

export default function StatsBand() {
  return (
    <section
      className="relative py-16 px-4 overflow-hidden"
      style={{ background: "linear-gradient(110deg, #07112b 0%, #0d2357 50%, #162e5e 100%)" }}
    >
      {/* Grain texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.04,
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23grain)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
        }}
        aria-hidden
      />

      {/* Gold hairline top */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cmg-gold/50 to-transparent" />

      <div className="relative max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 text-center">
        {stats.map((stat, i) => (
          <div key={stat.label} className="relative px-2">
            {/* Column divider */}
            {i < stats.length - 1 && (
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-14 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
            )}

            {/* Large editorial numeral — Cormorant Garamond */}
            <div
              className="font-cormorant leading-none mb-1"
              style={{
                fontSize: "clamp(3rem, 6vw, 4.5rem)",
                fontWeight: 300,
                color: "#D4A843",
                letterSpacing: "-0.02em",
                fontVariantNumeric: "lining-nums",
              }}
            >
              {stat.value}
              <span style={{ fontSize: "0.55em", fontWeight: 400, color: "#D4A843" }}>
                {stat.suffix}
              </span>
            </div>

            {/* Label */}
            <div className="text-white/60 text-xs font-medium tracking-widest uppercase mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Gold hairline bottom */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cmg-gold/30 to-transparent" />
    </section>
  )
}
