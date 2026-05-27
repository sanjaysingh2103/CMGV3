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
  /**
   * Number of columns on lg+ screens. 1 = single column (default, full width up to ~5xl).
   * 2 = split into a 2-column responsive grid (better for wide-screen pages with many items).
   */
  columns?: 1 | 2
}

export default function FAQAccordion({ faqs, className, columns = 1 }: FAQAccordionProps) {
  /* Derive category list while preserving the order they first appear in.
     If no FAQ has a category, we render a flat accordion (backward compatible). */
  const categories: string[] = []
  for (const f of faqs) {
    if (f.category && !categories.includes(f.category)) categories.push(f.category)
  }
  const hasCategories = categories.length > 1

  const [active, setActive] = useState<string>("All")

  const filtered =
    !hasCategories || active === "All"
      ? faqs
      : faqs.filter((f) => f.category === active)

  /* When in 2-column mode, split filtered list down the middle so the visual
     reading order is top-to-bottom in each column (left col first half, right col second half). */
  const half = Math.ceil(filtered.length / 2)
  const leftCol = columns === 2 ? filtered.slice(0, half) : filtered
  const rightCol = columns === 2 ? filtered.slice(half) : []

  const renderAccordion = (items: FAQ[], colKey: string) => (
    <Accordion
      multiple={false}
      className="bg-white rounded-xl border border-cmg-border overflow-hidden shadow-card"
    >
      {items.map((faq, i) => (
        <AccordionItem
          key={`${colKey}-${active}-${i}`}
          value={`faq-${colKey}-${i}`}
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
  )

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

      {columns === 2 && rightCol.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {renderAccordion(leftCol, "L")}
          {renderAccordion(rightCol, "R")}
        </div>
      ) : (
        renderAccordion(filtered, "F")
      )}

      {hasCategories && filtered.length === 0 && (
        <p className="text-center text-cmg-slate text-sm py-8">No FAQs in this category yet.</p>
      )}
    </div>
  )
}
