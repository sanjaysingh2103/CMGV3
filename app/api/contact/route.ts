import { NextResponse } from "next/server"
import { z } from "zod"
import { sendContactNotification, sendAutoReply } from "@/lib/resend"

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  country: z.string().optional(),
  visaType: z.string().min(1),
  message: z.string().min(10).max(1000),
  preferredTime: z.string().optional(),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const data = schema.parse(body)

    // Only attempt to send email if RESEND_API_KEY is set
    if (process.env.RESEND_API_KEY) {
      await Promise.all([
        sendContactNotification(data),
        sendAutoReply(data),
      ])
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid form data", details: err.issues }, { status: 400 })
    }
    console.error("Contact form error:", err)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
