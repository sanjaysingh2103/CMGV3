import type { Metadata } from "next"
import { Video, Phone, Mail } from "lucide-react"
import HeroBanner from "@/components/HeroBanner"
import FAQAccordion from "@/components/FAQAccordion"
import ContactFormSection from "@/components/ContactFormSection"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Book a Free Consultation — Commonwealth Migration Group",
  description:
    "Book a free 30-minute consultation with a MARA-registered CMG migration agent. Online consultations available worldwide.",
}

const faqs = [
  { question: "Is the consultation really free?", answer: "Yes, completely free and no obligation. Our free consultation is a 30-minute video call where a MARA-registered CMG agent assesses your situation and explains your options. There is no pressure to engage our services afterwards." },
  { question: "How long is the consultation?", answer: "Our standard free consultation is 30 minutes. Complex cases may require a follow-up paid assessment, which we'll discuss with you if needed during the initial consultation." },
  { question: "Can I consult from outside Australia?", answer: "Absolutely. We conduct consultations via video call (Zoom, Teams, or Google Meet) for clients worldwide. CMG serves clients from over 30 countries. All you need is a stable internet connection." },
  { question: "What should I prepare before my consultation?", answer: "It helps to have your passport details, English test results (if taken), skills assessment outcome (if completed), employment history, and any previous visa applications or refusals ready. The more we know about your situation, the more useful advice we can provide." },
]

const contactOptions = [
  { icon: Video, title: "Book Free Consultation", desc: "30-min video call", detail: "Choose your preferred time | Speak with a MARA agent" },
  { icon: Phone, title: "Call Us", desc: site.phone, detail: "Mon–Fri 9am–6pm AEST" },
  { icon: Mail, title: "Email Us", desc: site.email, detail: "Response within 1 business day" },
]

export default function ContactPage() {
  return (
    <>
      <HeroBanner
        headline="Let's Start Your Australian Journey"
        subheadline="Book a free 30-minute consultation with a MARA-registered CMG agent. Available online worldwide."
        bgImage="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1920"
        gradient="gradient-hero"
        height="medium"
      />

      {/* Contact options */}
      <section className="py-20 px-4 bg-cmg-light-blue">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactOptions.map((opt) => (
              <div key={opt.title} className="rounded-2xl bg-white shadow-card p-8 text-center">
                <div className="w-14 h-14 rounded-2xl bg-cmg-light-blue flex items-center justify-center mx-auto mb-5">
                  <opt.icon className="h-7 w-7 text-cmg-blue" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-cmg-text mb-2">{opt.title}</h3>
                <p className="font-medium text-cmg-blue mb-1">{opt.desc}</p>
                <p className="text-cmg-slate text-sm">{opt.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking form (client component) */}
      <ContactFormSection />

      {/* FAQ */}
      <section className="py-20 px-4 bg-cmg-light-blue">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-cmg-text mb-10 text-center">Consultation FAQs</h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>
    </>
  )
}
