import type { Metadata } from "next"
import ServicePageLayout from "@/components/ServicePageLayout"
import { visaContent } from "@/lib/visa-content"
import JsonLd from "@/components/JsonLd"

export const metadata: Metadata = {
  title: "Student & Graduate Visas Australia - 500 & 485 | CMG",
  description: "Student visa (500) and temporary graduate visa (485) specialists. CMG guides international students from enrolment through post-study work rights and skilled migration.",
}

export default function StudentPage() {
  const content = visaContent["student"]
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Student and Graduate Visa Services",
          provider: { "@type": "LegalService", name: "Commonwealth Migration Group" },
          description: metadata.description as string,
        }}
      />
      <ServicePageLayout content={content} />
    </>
  )
}
