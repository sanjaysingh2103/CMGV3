import type { Metadata } from "next"
import ServicePageLayout from "@/components/ServicePageLayout"
import { visaContent } from "@/lib/visa-content"
import JsonLd from "@/components/JsonLd"

export const metadata: Metadata = {
  title: "Family & Partner Visas Australia - 820, 309 & Parent Visas | CMG",
  description: "Reunite your family in Australia with CMG's expert family visa services. Partner visas (820/309), child visas and parent visa (143) specialists.",
}

export default function FamilyPartnerPage() {
  const content = visaContent["family-partner"]
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Family and Partner Visa Services",
          provider: { "@type": "LegalService", name: "Commonwealth Migration Group" },
          description: metadata.description as string,
        }}
      />
      <ServicePageLayout content={content} />
    </>
  )
}
