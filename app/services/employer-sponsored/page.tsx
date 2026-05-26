import type { Metadata } from "next"
import ServicePageLayout from "@/components/ServicePageLayout"
import { visaContent } from "@/lib/visa-content"
import JsonLd from "@/components/JsonLd"

export const metadata: Metadata = {
  title: "Employer Sponsored Visas Australia - 482 TSS & 186 ENS | CMG",
  description: "Employer-sponsored work visas for skilled professionals and the businesses that need them. CMG handles the full 482 and 186 ENS process for employers and applicants.",
}

export default function EmployerSponsoredPage() {
  const content = visaContent["employer-sponsored"]
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Employer Sponsored Visa Services",
          provider: { "@type": "LegalService", name: "Commonwealth Migration Group" },
          description: metadata.description as string,
        }}
      />
      <ServicePageLayout content={content} />
    </>
  )
}
