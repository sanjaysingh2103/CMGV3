/**
 * Lead handoff helpers - 100% first-party, no third-party services.
 *
 * Two delivery paths for any captured lead:
 *  1. mailto: opens the visitor's own email client pre-filled to support@commonwealthmigration.ae
 *  2. wa.me deep link opens WhatsApp pre-filled to +971 50 491 6720
 *
 * Both arrive directly in CMG inboxes - no Resend, no Mailchimp, no SaaS.
 */

import { site } from "@/lib/site"

export interface LeadPayload {
  name?: string
  email?: string
  phone?: string
  visaType?: string
  message?: string
  /** Extra structured fields - rendered as "Key: Value" lines */
  extra?: Record<string, string | undefined>
  /** Where the lead came from on the site */
  source?: string
}

/**
 * Build the body text used by both mailto: and WhatsApp - structured key/value lines.
 */
function buildBody(p: LeadPayload): string {
  const lines: string[] = []
  if (p.source) lines.push(`Source: ${p.source}`)
  if (p.name) lines.push(`Name: ${p.name}`)
  if (p.email) lines.push(`Email: ${p.email}`)
  if (p.phone) lines.push(`Phone / WhatsApp: ${p.phone}`)
  if (p.visaType) lines.push(`Visa of interest: ${p.visaType}`)
  if (p.extra) {
    for (const [k, v] of Object.entries(p.extra)) {
      if (v) lines.push(`${k}: ${v}`)
    }
  }
  if (p.message) {
    lines.push("")
    lines.push("Message:")
    lines.push(p.message)
  }
  lines.push("")
  lines.push("---")
  lines.push("Sent from commonwealthmigration.ae")
  return lines.join("\n")
}

/**
 * mailto: link that opens the visitor's email client pre-filled.
 */
export function mailtoLink(p: LeadPayload): string {
  const subject =
    p.visaType && p.visaType !== "Newsletter"
      ? `Migration enquiry - ${p.visaType}${p.name ? ` - ${p.name}` : ""}`
      : p.visaType === "Newsletter"
        ? "Newsletter signup"
        : "Migration enquiry from website"
  const body = buildBody(p)
  const to = site.email
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

/**
 * WhatsApp wa.me link that opens WhatsApp pre-filled to CMG's number.
 */
export function whatsappLink(p: LeadPayload): string {
  const phone = site.whatsapp.replace(/\D/g, "")
  const greeting = p.name ? `Hi CMG team, I'm ${p.name}.` : "Hi CMG team,"
  const body = buildBody(p)
  const text = `${greeting}\n\n${body}`
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`
}
