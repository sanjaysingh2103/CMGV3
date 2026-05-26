import type { Metadata } from "next"
import ServicePageLayout from "@/components/ServicePageLayout"
import { visaContent } from "@/lib/visa-content"
import JsonLd from "@/components/JsonLd"

export const metadata: Metadata = {
  title: "Skilled Migration Australia - 189, 190 & 491 Visa Experts | CMG",
  description: "Maximise your SkillSelect points score and secure your Australian skilled visa invitation. CMG specialists in subclass 189, 190 and 491 visas.",
}

export default function SkilledMigrationPage() {
  const content = visaContent["skilled-migration"]
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Skilled Migration Visa Services",
          provider: { "@type": "LegalService", name: "Commonwealth Migration Group" },
          description: metadata.description as string,
        }}
      />
      <ServicePageLayout content={content} />
    </>
  )
}
