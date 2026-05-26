"use client"

import { useState } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

export interface FAQ {
  question: string
  answer: string
  category?: string
}

interface FAQAccordionProps {
  faqs: FAQ[]
  className?: string
}

export default function FAQAccordion({ faqs, className }: FAQAccordionProps) {
  /* Derive category list while preserving the order they first appear in.
     If no FAQ has a category, we render a flat accordion (backward compatible). */
  const categories: string[] = []
  for (const f of faqs) {
    if (f.category && !categories.includes(f.category)) categories.push(f.category)
  }
  const hasCategories = categories.length > 1

  const [active, setActive] = useState<string>(hasCategories ? "All" : "All")

  const filtered =
    !hasCategories || active === "All"
      ? faqs
      : faqs.filter((f) => f.category === active)

  return (
    <div className={className}>
      {hasCategories && (
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {["All", ...categories].map((cat) => {
            const count = cat === "All" ? faqs.length : faqs.filter((f) => f.category === cat).length
            const isActive = active === cat
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={cn(
                  "px-4 py-2 rounded-full border text-[13px] font-bold transition-all duration-150",
                  isActive
                    ? "bg-cmg-blue text-white border-cmg-blue shadow-blue"
                    : "bg-white text-cmg-text border-cmg-border hover:border-cmg-blue hover:text-cmg-blue",
                )}
              >
                {cat}{" "}
                <span className={cn("font-normal", isActive ? "text-white/70" : "text-cmg-slate")}>
                  ({count})
                </span>
              </button>
            )
          })}
        </div>
      )}

      <Accordion multiple={false} className="bg-white rounded-xl border border-cmg-border overflow-hidden shadow-card">
        {filtered.map((faq, i) => (
          <AccordionItem
            key={`${active}-${i}`}
            value={`faq-${i}`}
            className="border-b border-cmg-border last:border-b-0"
          >
            <AccordionTrigger className="text-left font-bold text-cmg-text hover:text-cmg-blue hover:no-underline py-5 px-6 text-[15px]">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-cmg-slate text-[15px] leading-relaxed pb-5 px-6">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {hasCategories && filtered.length === 0 && (
        <p className="text-center text-cmg-slate text-sm py-8">No FAQs in this category yet.</p>
      )}
    </div>
  )
}
