import { stats } from "@/lib/site"

export default function StatsBand() {
  return (
    <section className="bg-cmg-navy py-12 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="font-heading text-4xl md:text-5xl font-bold text-cmg-gold">
              {stat.value}{stat.suffix}
            </div>
            <div className="text-white/70 text-sm mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
