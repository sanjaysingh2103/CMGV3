import type { Metadata } from "next"
import { Video, Phone, Mail, MapPin, Clock } from "lucide-react"
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
  {
    question: "Is the consultation really free?",
    answer: "Yes, completely free and no obligation. Our free consultation is a 30-minute video call where a MARA-registered CMG agent assesses your situation and explains your options. There is no pressure to engage our services afterwards.",
  },
  {
    question: "How long is the consultation?",
    answer: "Our standard free consultation is 30 minutes. Complex cases may require a follow-up paid assessment, which we'll discuss with you if needed during the initial consultation.",
  },
  {
    question: "Can I consult from outside Australia?",
    answer: "Absolutely. We conduct consultations via video call (Zoom, Teams, or Google Meet) for clients worldwide. CMG serves clients from over 30 countries. All you need is a stable internet connection.",
  },
  {
    question: "What should I prepare before my consultation?",
    answer: "It helps to have your passport details, English test results (if taken), skills assessment outcome (if completed), employment history, and any previous visa applications or refusals ready. The more we know about your situation, the more useful advice we can provide.",
  },
  {
    question: "What does CMG charge for migration services?",
    answer: "Our fees vary by visa type and complexity. After your free consultation, we provide a written quote with no hidden costs. We believe in complete fee transparency — you'll know exactly what you're paying before any work begins.",
  },
]

const contactOptions = [
  {
    icon: Video,
    title: "Book Free Consultation",
    desc: "30-min video call",
    detail: "Choose your preferred time",
    color: "#1B3D8F",
  },
  {
    icon: Phone,
    title: "Call Us",
    desc: site.phone,
    detail: "Mon–Fri 9am–6pm AEST",
    color: "#C0392B",
  },
  {
    icon: Mail,
    title: "Email Us",
    desc: site.email,
    detail: "Response within 1 business day",
    color: "#D4A843",
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <HeroBanner
        headline="Let's Start Your Australian Journey"
        subheadline="Book a free 30-minute consultation with a MARA-registered CMG agent. Available online worldwide — no obligation."
        bgImage="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1920"
        gradient="gradient-hero"
        height="medium"
        ctaButtons={[]}
        trustBadges={["Free 30-min Consultation", "MARA Registered", "Available Worldwide"]}
      />

      {/* Contact option cards */}
      <section className="py-20 px-4 bg-cmg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {contactOptions.map((opt) => (
              <div
                key={opt.title}
                className="rounded-xl bg-white border border-cmg-cream-dark border-t-[3px] p-8 text-center shadow-[0_2px_12px_rgba(26,24,38,0.05)] hover:shadow-[0_8px_28px_rgba(26,24,38,0.10)] transition-shadow duration-200"
                style={{ borderTopColor: opt.color }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5"
                  style={{ backgroundColor: `${opt.color}12` }}
                >
                  <opt.icon className="h-7 w-7" style={{ color: opt.color }} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-cmg-ink mb-1.5">{opt.title}</h3>
                <p className="font-semibold text-sm mb-1" style={{ color: opt.color }}>{opt.desc}</p>
                <p className="text-cmg-slate text-sm">{opt.detail}</p>
              </div>
            ))}
          </div>

          {/* Address & hours strip */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 py-6 px-8 rounded-xl bg-cmg-cream-dark border border-cmg-cream-dark/80">
            <div className="flex items-center gap-2 text-sm text-cmg-slate">
              <MapPin className="h-4 w-4 text-cmg-gold shrink-0" />
              <span>{site.address}</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-cmg-cream-dark" />
            <div className="flex items-center gap-2 text-sm text-cmg-slate">
              <Clock className="h-4 w-4 text-cmg-gold shrink-0" />
              <span>{site.hours}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Booking form */}
      <ContactFormSection />

      {/* FAQ */}
      <section className="py-20 px-4 bg-cmg-cream">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="eyebrow text-cmg-red mb-3">FAQ</p>
            <h2 className="font-heading text-3xl font-bold text-cmg-ink">Consultation FAQs</h2>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>
    </>
  )
}
