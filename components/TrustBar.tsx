import { CheckCircle } from "lucide-react"
import { trustBadges } from "@/lib/site"

export default function TrustBar() {
  return (
    <section className="bg-cmg-blue py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {trustBadges.map((badge) => (
            <div key={badge} className="flex items-center gap-2 text-white whitespace-nowrap">
              <CheckCircle className="h-4 w-4 text-cmg-gold shrink-0" />
              <span className="text-sm font-medium">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
