import type { Metadata } from "next"
import ServicePageLayout from "@/components/ServicePageLayout"
import { visaContent } from "@/lib/visa-content"
import JsonLd from "@/components/JsonLd"

export const metadata: Metadata = {
  title: "Business & Investor Visas Australia - 188 & 888 BIIP | CMG",
  description: "Business Innovation and Investment Program (BIIP) specialists. CMG guides business owners and investors through the 188 provisional and 888 permanent visa pathway.",
}

export default function BusinessInvestorPage() {
  const content = visaContent["business-investor"]
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Business and Investor Visa Services",
          provider: { "@type": "LegalService", name: "Commonwealth Migration Group" },
          description: metadata.description as string,
        }}
      />
      <ServicePageLayout content={content} />
    </>
  )
}
