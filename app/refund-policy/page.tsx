import type { Metadata } from "next"
import PolicyPage from "@/components/PolicyPage"
import { refundPolicy } from "@/lib/policies"

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Refund eligibility and processing terms at Commonwealth Migration Group.",
}

export default function RefundPolicyPage() {
  return <PolicyPage {...refundPolicy} />
}
