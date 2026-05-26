"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { site } from "@/lib/site"
import { mailtoLink, whatsappLink, type LeadPayload } from "@/lib/lead-links"

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  country: z.string().optional(),
  visaType: z.string().min(1, "Please select a visa type"),
  message: z.string().min(10, "Please add a message (min 10 characters)").max(500),
  preferredTime: z.string().optional(),
})

type FormData = z.infer<typeof schema>

export default function ContactFormSection() {
  const [submitted, setSubmitted] = useState<null | { name: string; payload: LeadPayload }>(null)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  function buildPayload(data: FormData): LeadPayload {
    return {
      source: "Contact form",
      name: data.name,
      email: data.email,
      phone: data.phone,
      visaType: data.visaType,
      message: data.message,
      extra: {
        "Country of residence": data.country,
        "Preferred time": data.preferredTime,
      },
    }
  }

  const onSubmit = (data: FormData) => {
    const payload = buildPayload(data)
    setSubmitted({ name: data.name, payload })
    reset()
  }

  return (
    <section className="py-20 px-4 bg-section-alt">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Form */}
          <div className="bg-white rounded-2xl border border-cmg-cream-dark shadow-[0_2px_20px_rgba(26,24,38,0.06)] p-8">
            <h2 className="font-heading text-3xl font-bold text-cmg-ink mb-3">Book Your Free Consultation</h2>
            <p className="text-cmg-slate mb-8">Fill in the form, then send via email or WhatsApp - whichever you prefer.</p>

            {submitted ? (
              <div className="rounded-2xl bg-green-50 border border-green-200 p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-heading text-2xl font-semibold text-cmg-text mb-3">
                  Almost done, {submitted.name.split(" ")[0]}!
                </h3>
                <p className="text-cmg-slate mb-6">
                  Choose how you&apos;d like to send your enquiry to CMG. Both options pre-fill your message - just hit send on the next screen.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={mailtoLink(submitted.payload)}
                    className="inline-flex items-center justify-center gap-2 bg-cmg-blue text-white font-bold px-6 py-3.5 rounded-lg hover:bg-cmg-navy transition-colors shadow-blue"
                  >
                    <Mail className="h-4 w-4" /> Send via Email
                  </a>
                  <a
                    href={whatsappLink(submitted.payload)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-6 py-3.5 rounded-lg hover:bg-[#1da851] transition-colors shadow-[0_4px_24px_rgba(37,211,102,0.40)]"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    Send via WhatsApp
                  </a>
                </div>
                <button
                  onClick={() => setSubmitted(null)}
                  className="mt-6 text-sm text-cmg-slate hover:text-cmg-blue underline"
                >
                  Start over
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" placeholder="Your full name" {...register("name")} className="mt-1" />
                    {errors.name && <p className="text-cmg-red text-sm mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="you@example.com" {...register("email")} className="mt-1" />
                    {errors.email && <p className="text-cmg-red text-sm mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="phone">Phone / WhatsApp</Label>
                    <Input id="phone" type="tel" placeholder="+971 50 491 6720" {...register("phone")} className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="country">Country of Residence</Label>
                    <Input id="country" placeholder="e.g. UAE, India, Philippines" {...register("country")} className="mt-1" />
                  </div>
                </div>

                <div>
                  <Label>Visa Type of Interest *</Label>
                  <Select onValueChange={(v: string | null) => setValue("visaType", v ?? "")}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select visa type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Skilled Migration">Skilled Migration (189/190/491)</SelectItem>
                      <SelectItem value="Employer Sponsored">Employer Sponsored (482/186)</SelectItem>
                      <SelectItem value="Family & Partner">Family & Partner Visas</SelectItem>
                      <SelectItem value="Student Visa">Student Visa (500/485)</SelectItem>
                      <SelectItem value="Business & Investor">Business & Investor Visas</SelectItem>
                      <SelectItem value="Visit Visa">Visit Visa</SelectItem>
                      <SelectItem value="Not Sure">Not Sure - Need Advice</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.visaType && <p className="text-cmg-red text-sm mt-1">{errors.visaType.message}</p>}
                </div>

                <div>
                  <Label htmlFor="message">Brief Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your situation, goals, and any relevant details…"
                    rows={4}
                    {...register("message")}
                    className="mt-1"
                  />
                  {errors.message && <p className="text-cmg-red text-sm mt-1">{errors.message.message}</p>}
                </div>

                <div>
                  <Label>Preferred Consultation Time</Label>
                  <Select onValueChange={(v: string | null) => setValue("preferredTime", v ?? "")}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select preferred time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Morning (10am-1pm GST)">Morning (10am-1pm GST)</SelectItem>
                      <SelectItem value="Afternoon (1pm-4pm GST)">Afternoon (1pm-4pm GST)</SelectItem>
                      <SelectItem value="Evening (4pm-7pm GST)">Evening (4pm-7pm GST)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-cmg-red text-white font-bold py-4 hover:bg-red-700 transition-colors text-base flex items-center justify-center gap-2 shadow-[0_4px_24px_rgba(200,16,46,0.40)]"
                >
                  <Send className="h-4 w-4" />
                  Continue - Choose How to Send
                </button>

                <p className="text-xs text-cmg-slate text-center">
                  We&apos;ll show you two send options - email or WhatsApp - both arrive directly with the CMG team.
                  By submitting you agree to our{" "}
                  <a href="/privacy" className="text-cmg-blue hover:underline">Privacy Policy</a>.
                </p>
              </form>
            )}
          </div>

          {/* Office details */}
          <div>
            <h2 className="font-heading text-3xl font-bold text-cmg-ink mb-3">Our Office</h2>
            <p className="text-cmg-slate mb-8">Visit us in Dubai or reach out anytime - we serve the GCC and worldwide.</p>
            <div className="space-y-4 mb-8">
              {[
                { icon: MapPin, label: "Address", value: site.address },
                { icon: Phone, label: "Phone", value: site.phone },
                { icon: Mail, label: "Email", value: site.email },
                { icon: Clock, label: "Hours", value: site.hours },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-cmg-cream-dark">
                  <div className="w-10 h-10 rounded-lg bg-cmg-light-blue flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-cmg-blue" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-cmg-slate uppercase tracking-wider">{item.label}</span>
                    <p className="text-cmg-ink font-medium mt-0.5 text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* MARA trust badge */}
            <div className="mt-6 flex items-center gap-3 bg-white border border-cmg-cream-dark rounded-xl p-4">
              <div className="w-10 h-10 rounded-full bg-cmg-gold flex items-center justify-center shrink-0">
                <span className="font-bold text-sm text-cmg-navy">M</span>
              </div>
              <div>
                <p className="text-xs font-bold text-cmg-ink">MARA-Authorised Migration Agents</p>
                <p className="text-xs text-cmg-slate mt-0.5">Compliant, transparent, end-to-end migration support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
