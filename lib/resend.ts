import { Resend } from "resend"

function getResend() {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) throw new Error("Missing RESEND_API_KEY environment variable")
  return new Resend(apiKey)
}

interface ContactPayload {
  name: string
  email: string
  phone?: string
  country?: string
  visaType: string
  message: string
  preferredTime?: string
}

export async function sendContactNotification(data: ContactPayload) {
  const resend = getResend()
  const { data: result, error } = await resend.emails.send({
    from: "CMG Website <noreply@commonwealthmigration.com.au>",
    to: [process.env.CONTACT_EMAIL_TO ?? "info@commonwealthmigration.com.au"],
    subject: `New Consultation Request - ${data.visaType} - ${data.name}`,
    text: `
New consultation request received from the CMG website.

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone ?? "Not provided"}
Country: ${data.country ?? "Not provided"}
Visa Type: ${data.visaType}
Preferred Time: ${data.preferredTime ?? "Not specified"}

Message:
${data.message}
    `.trim(),
  })
  if (error) throw new Error(error.message)
  return result
}

export async function sendAutoReply(data: ContactPayload) {
  const resend = getResend()
  const { data: result, error } = await resend.emails.send({
    from: "Commonwealth Migration Group <noreply@commonwealthmigration.com.au>",
    to: [data.email],
    subject: "We've received your consultation request - CMG",
    text: `
Hi ${data.name},

Thank you for reaching out to Commonwealth Migration Group.

We've received your consultation request and a member of our team will be in touch within 1 business day to confirm your booking.

Your request details:
- Visa Type: ${data.visaType}
- Preferred Time: ${data.preferredTime ?? "Not specified"}

In the meantime, you can explore our free immigration calculators at commonwealthmigration.com.au/tools.

Best regards,
The CMG Team
Commonwealth Migration Group
info@commonwealthmigration.com.au
    `.trim(),
  })
  if (error) throw new Error(error.message)
  return result
}
