import type { Metadata } from "next"
import PolicyPage from "@/components/PolicyPage"
import { privacyPolicy } from "@/lib/policies"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Commonwealth Migration Group collects, uses, and protects your personal information.",
}

export default function PrivacyPage() {
  return <PolicyPage {...privacyPolicy} />
}
