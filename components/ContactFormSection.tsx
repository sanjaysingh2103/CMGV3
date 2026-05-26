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
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { site } from "@/lib/site"

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
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    setLoading(true)
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      setSubmitted(true)
      reset()
    } catch {
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-20 px-4 bg-section-alt">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Form */}
          <div className="bg-white rounded-2xl border border-cmg-cream-dark shadow-[0_2px_20px_rgba(26,24,38,0.06)] p-8">
            <h2 className="font-heading text-3xl font-bold text-cmg-ink mb-3">Book Your Free Consultation</h2>
            <p className="text-cmg-slate mb-8">Fill in the form and we&apos;ll confirm your booking within 1 business day.</p>

            {submitted ? (
              <div className="rounded-2xl bg-green-50 border border-green-200 p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-heading text-2xl font-semibold text-cmg-text mb-2">Request Received!</h3>
                <p className="text-cmg-slate">Thank you for reaching out. A CMG agent will be in touch within 1 business day to confirm your consultation booking.</p>
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
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+1 555 000 0000" {...register("phone")} className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="country">Country of Residence</Label>
                    <Input id="country" placeholder="e.g. India" {...register("country")} className="mt-1" />
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
                  <Label>Preferred Consultation Time (AEST)</Label>
                  <Select onValueChange={(v: string | null) => setValue("preferredTime", v ?? "")}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select preferred time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Morning (9am–12pm AEST)">Morning (9am–12pm AEST)</SelectItem>
                      <SelectItem value="Afternoon (12pm–3pm AEST)">Afternoon (12pm–3pm AEST)</SelectItem>
                      <SelectItem value="Evening (3pm–6pm AEST)">Evening (3pm–6pm AEST)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full bg-cmg-blue text-white font-semibold py-4 hover:bg-cmg-blue-light transition-colors disabled:opacity-60 text-base"
                >
                  {loading ? "Sending…" : "Submit → Book My Free Consultation"}
                </button>

                <p className="text-xs text-cmg-slate text-center">
                  By submitting this form you agree to our{" "}
                  <a href="/privacy" className="text-cmg-blue hover:underline">Privacy Policy</a>.
                </p>
              </form>
            )}
          </div>

          {/* Office details */}
          <div>
            <h2 className="font-heading text-3xl font-bold text-cmg-ink mb-3">Our Office</h2>
            <p className="text-cmg-slate mb-8">Visit us or reach out anytime - we serve clients worldwide.</p>
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

            <div className="rounded-xl bg-cmg-light-blue aspect-video flex items-center justify-center border border-cmg-blue/10">
              <div className="text-center text-cmg-slate">
                <MapPin className="h-8 w-8 mx-auto mb-2 text-cmg-blue" />
                <p className="text-sm font-medium">Map will display here</p>
                <p className="text-xs mt-1">Add Google Maps API key to enable</p>
              </div>
            </div>

            {/* MARA trust badge */}
            <div className="mt-6 flex items-center gap-3 bg-white border border-cmg-cream-dark rounded-xl p-4">
              <div className="w-10 h-10 rounded-full bg-cmg-gold flex items-center justify-center shrink-0">
                <span className="font-bold text-sm text-cmg-navy">M</span>
              </div>
              <div>
                <p className="text-xs font-bold text-cmg-ink">MARA Registered Migration Agents</p>
                <p className="text-xs text-cmg-slate mt-0.5">All agents registered with OMARA · Fully insured</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
