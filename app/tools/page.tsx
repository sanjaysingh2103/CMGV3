import type { Metadata } from "next"
import HeroBanner from "@/components/HeroBanner"
import PointsCalculator from "@/components/tools/PointsCalculator"
import FeeEstimator from "@/components/tools/FeeEstimator"
import ProcessingTimes from "@/components/tools/ProcessingTimes"
import CTABanner from "@/components/CTABanner"
import { Calculator, DollarSign, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Australian Visa Tools — Points Calculator, Fee Estimator & Processing Times | CMG",
  description: "Free Australian visa tools: points test calculator, government fee estimator, and current processing times for all major visa subclasses.",
}

export default function ToolsPage() {
  return (
    <>
      <HeroBanner
        headline="Australian Visa Tools"
        subheadline="Free calculators to help you understand your options, estimate costs, and set realistic timelines."
        bgImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920"
        gradient="gradient-hero"
        height="medium"
      />

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-cmg-slate text-sm mb-16 max-w-2xl mx-auto">
            These tools provide guidance only. Results depend on individual circumstances, current occupation lists, and Department processing volumes. Book a free consultation for a personalised assessment.
          </p>

          <div className="space-y-20">
            {/* Points Calculator */}
            <div id="points" className="scroll-mt-24">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-cmg-blue flex items-center justify-center shrink-0">
                  <Calculator className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="font-heading text-2xl font-bold text-cmg-text mb-1">Points Test Calculator</h2>
                  <p className="text-cmg-slate">Estimate your skilled migration score across all categories — select one option per category.</p>
                </div>
              </div>
              <div className="border border-gray-100 rounded-2xl p-6 md:p-8 bg-cmg-warm-white">
                <PointsCalculator />
              </div>
            </div>

            {/* Fee Estimator */}
            <div id="fees" className="scroll-mt-24">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-cmg-red flex items-center justify-center shrink-0">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="font-heading text-2xl font-bold text-cmg-text mb-1">Government Fee Estimator</h2>
                  <p className="text-cmg-slate">Select your visa and family composition to estimate government application fees.</p>
                </div>
              </div>
              <div className="border border-gray-100 rounded-2xl p-6 md:p-8 bg-cmg-warm-white">
                <FeeEstimator />
              </div>
            </div>

            {/* Processing Times */}
            <div id="times" className="scroll-mt-24">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-cmg-gold flex items-center justify-center shrink-0">
                  <Clock className="h-6 w-6 text-cmg-navy" />
                </div>
                <div>
                  <h2 className="font-heading text-2xl font-bold text-cmg-text mb-1">Processing Times</h2>
                  <p className="text-cmg-slate">Current processing time estimates for major visa subclasses. Filter by category.</p>
                </div>
              </div>
              <div className="border border-gray-100 rounded-2xl p-6 md:p-8 bg-cmg-warm-white">
                <ProcessingTimes />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Want a Professional Assessment?"
        body="Our calculators give you an estimate — our MARA-registered agents give you a definitive answer. Book your free 30-minute consultation."
        primaryCTA={{ label: "Book Free Consultation", href: "/contact" }}
        secondaryCTA={{ label: "View Services", href: "/services" }}
        variant="navy-gold"
      />
    </>
  )
}
