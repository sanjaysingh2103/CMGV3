import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface FAQ {
  question: string
  answer: string
}

interface FAQAccordionProps {
  faqs: FAQ[]
  className?: string
}

export default function FAQAccordion({ faqs, className }: FAQAccordionProps) {
  return (
    <Accordion multiple={false} className={className}>
      {faqs.map((faq, i) => (
        <AccordionItem
          key={i}
          value={`faq-${i}`}
          className="border-b border-gray-200"
        >
          <AccordionTrigger className="text-left font-semibold text-cmg-text hover:text-cmg-blue hover:no-underline py-5 text-base">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-cmg-slate text-base leading-relaxed pb-5">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
