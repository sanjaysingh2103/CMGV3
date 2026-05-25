import { stats } from "@/lib/site"

export default function StatsBand() {
  return (
    <section
      className="relative py-14 px-4 overflow-hidden"
      style={{ background: "linear-gradient(100deg, #07112b 0%, #0d2357 45%, #14326e 100%)" }}
    >
      {/* Subtle diagonal stripe texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "repeating-linear-gradient(-55deg, #fff, #fff 1px, transparent 1px, transparent 40px)"
        }}
      />
      {/* Gold accent line at top */}
      <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-cmg-gold/60 to-transparent" />

      <div className="relative max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, i) => (
          <div key={stat.label} className="relative">
            {/* Divider between items (not after last) */}
            {i < stats.length - 1 && (
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-10 w-px bg-white/10" />
            )}
            <div className="font-heading text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-cmg-gold tracking-tight leading-none">
              {stat.value}{stat.suffix}
            </div>
            <div className="text-white/65 text-sm mt-2 font-medium tracking-wide">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Gold accent line at bottom */}
      <div className="absolute bottom-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-cmg-gold/30 to-transparent" />
    </section>
  )
}
