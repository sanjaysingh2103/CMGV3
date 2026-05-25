import type { Metadata } from "next"
import PolicyPage from "@/components/PolicyPage"
import { antiFraudPolicy } from "@/lib/policies"

export const metadata: Metadata = {
  title: "Anti-Fraud Policy",
  description: "Commonwealth Migration Group's commitment to ethical practice and fraud prevention.",
}

export default function AntiFraudPage() {
  return <PolicyPage {...antiFraudPolicy} />
}
