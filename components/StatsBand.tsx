import { stats } from "@/lib/site"

export default function StatsBand() {
  return (
    <section className="relative bg-cmg-blue py-16 px-4 overflow-hidden">
      {/* Subtle red light leak top-right for premium feel */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 50% 70% at 95% 10%, rgba(200,16,46,0.20) 0%, transparent 60%)",
        }}
        aria-hidden
      />
      {/* Fine grain */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/15">
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center px-4 py-2 relative">
              <div className="flex items-center justify-center gap-2 mb-2">
                {i === 0 && <span className="w-1.5 h-1.5 rounded-full bg-cmg-red-light" />}
                <div className="font-heading text-4xl md:text-5xl font-bold text-white">
                  {stat.value}
                </div>
                {i === stats.length - 1 && <span className="w-1.5 h-1.5 rounded-full bg-cmg-red-light" />}
              </div>
              <div className="text-white/65 text-sm font-medium tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
