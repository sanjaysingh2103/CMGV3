import type { Metadata } from "next"
import PolicyPage from "@/components/PolicyPage"
import { termsOfService } from "@/lib/policies"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing the use of Commonwealth Migration Group's website and services.",
}

export default function TermsPage() {
  return <PolicyPage {...termsOfService} />
}
