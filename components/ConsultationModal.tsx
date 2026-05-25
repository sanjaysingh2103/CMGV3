"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
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

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  visaType: z.string().min(1, "Please select a visa type"),
  message: z.string().min(10, "Please add a brief message").max(500),
})

type FormData = z.infer<typeof schema>

interface ConsultationModalProps {
  /** Button text for the trigger */
  triggerLabel?: string
  /** Override the trigger's className */
  triggerClassName?: string
}

export default function ConsultationModal({
  triggerLabel = "Book Free Consultation",
  triggerClassName = "rounded-full bg-cmg-red text-white font-semibold px-6 py-2.5 text-sm hover:bg-cmg-red-light transition-colors shadow-md",
}: ConsultationModalProps) {
  const [open, setOpen] = useState(false)
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
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={triggerClassName}
      >
        {triggerLabel}
      </button>

      <Dialog
        open={open}
        onOpenChange={(v) => {
          setOpen(v)
          if (!v) setSubmitted(false)
        }}
      >
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl text-cmg-text">
              Book a Free Consultation
            </DialogTitle>
          </DialogHeader>

          {submitted ? (
            <div className="py-8 text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-cmg-text mb-2">Request Received!</h3>
              <p className="text-cmg-slate">We&apos;ll be in touch within 1 business day to confirm your booking.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-2">
              <div>
                <Label htmlFor="modal-name">Full Name *</Label>
                <Input id="modal-name" placeholder="Your full name" {...register("name")} className="mt-1" />
                {errors.name && <p className="text-cmg-red text-sm mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <Label htmlFor="modal-email">Email Address *</Label>
                <Input id="modal-email" type="email" placeholder="you@example.com" {...register("email")} className="mt-1" />
                {errors.email && <p className="text-cmg-red text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <Label>Visa Type of Interest *</Label>
                <Select onValueChange={(v: string | null) => setValue("visaType", v ?? "")}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select visa type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Skilled Migration">Skilled Migration</SelectItem>
                    <SelectItem value="Employer Sponsored">Employer Sponsored</SelectItem>
                    <SelectItem value="Family & Partner">Family & Partner</SelectItem>
                    <SelectItem value="Student Visa">Student Visa</SelectItem>
                    <SelectItem value="Business & Investor">Business & Investor</SelectItem>
                    <SelectItem value="Not Sure">Not Sure</SelectItem>
                  </SelectContent>
                </Select>
                {errors.visaType && <p className="text-cmg-red text-sm mt-1">{errors.visaType.message}</p>}
              </div>

              <div>
                <Label htmlFor="modal-message">Brief Message *</Label>
                <Textarea
                  id="modal-message"
                  placeholder="Tell us about your situation…"
                  rows={3}
                  {...register("message")}
                  className="mt-1"
                />
                {errors.message && <p className="text-cmg-red text-sm mt-1">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-cmg-blue text-white font-semibold py-3 hover:bg-cmg-blue-light transition-colors disabled:opacity-60"
              >
                {loading ? "Sending…" : "Book My Free Consultation"}
              </button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
