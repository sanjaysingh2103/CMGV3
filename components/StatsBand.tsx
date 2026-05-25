import { stats } from "@/lib/site"

export default function StatsBand() {
  return (
    <section className="bg-cmg-blue py-14 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/15">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center px-4 py-2">
              <div className="font-heading text-4xl md:text-5xl font-bold text-white mb-1.5">
                {stat.value}
              </div>
              <div className="text-white/60 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
