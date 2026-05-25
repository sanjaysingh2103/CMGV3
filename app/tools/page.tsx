import type { Metadata } from "next"
import HeroBanner from "@/components/HeroBanner"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PointsCalculator from "@/components/tools/PointsCalculator"
import FeeEstimator from "@/components/tools/FeeEstimator"
import ProcessingTimes from "@/components/tools/ProcessingTimes"
import CTABanner from "@/components/CTABanner"

export const metadata: Metadata = {
  title: "Free Australian Visa Calculators — Points Test & Fees",
  description:
    "Estimate your skilled migration points score, visa fees, and processing times with CMG's free Australian immigration calculators.",
}

export default function ToolsPage() {
  return (
    <>
      <HeroBanner
        headline="Free Australian Immigration Calculators"
        subheadline="Use our tools to estimate your points score, visa fees, and processing times — then book a consultation to build your strategy."
        gradient="gradient-blue-red"
        height="medium"
      />

      <section className="py-16 px-4 bg-cmg-warm-white min-h-[60vh]">
        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="points" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-10 h-12">
              <TabsTrigger value="points" className="text-sm font-medium">Points Test</TabsTrigger>
              <TabsTrigger value="fees" className="text-sm font-medium">Fee Estimator</TabsTrigger>
              <TabsTrigger value="times" className="text-sm font-medium">Processing Times</TabsTrigger>
            </TabsList>

            <TabsContent value="points">
              <div className="mb-8">
                <h2 className="font-heading text-2xl font-bold text-cmg-text mb-2">Skilled Migration Points Calculator</h2>
                <p className="text-cmg-slate">Select the option that best describes your situation in each category to calculate your estimated points score.</p>
              </div>
              <PointsCalculator />
            </TabsContent>

            <TabsContent value="fees">
              <div className="mb-8">
                <h2 className="font-heading text-2xl font-bold text-cmg-text mb-2">Visa Fee Estimator</h2>
                <p className="text-cmg-slate">Select your visa type and the number of applicants to estimate the total government application fees.</p>
              </div>
              <FeeEstimator />
            </TabsContent>

            <TabsContent value="times">
              <div className="mb-8">
                <h2 className="font-heading text-2xl font-bold text-cmg-text mb-2">Processing Time Guide</h2>
                <p className="text-cmg-slate">Current indicative processing times sourced from the Department of Home Affairs.</p>
              </div>
              <ProcessingTimes />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <CTABanner
        headline="Our tools give you a starting point. A CMG agent gives you a strategy."
        body="Book a free 30-minute consultation to discuss your individual circumstances and develop a personalised migration plan."
        primaryCTA={{ label: "Book Free Consultation", href: "/contact" }}
        secondaryCTA={{ label: "Explore Services", href: "/services" }}
        variant="navy-gold"
      />
    </>
  )
}
