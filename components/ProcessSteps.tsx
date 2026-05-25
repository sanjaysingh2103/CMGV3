import {
  MessageSquare,
  ClipboardList,
  FileText,
  CheckCircle,
  type LucideIcon,
} from "lucide-react"

const iconMap: Record<string, LucideIcon> = {
  MessageSquare,
  ClipboardList,
  FileText,
  CheckCircle,
}

interface Step {
  number: number
  title: string
  description: string
  icon: string
}

interface ProcessStepsProps {
  steps: Step[]
}

export default function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <div className="relative">
      {/* Gold connector line — desktop only */}
      <div
        className="hidden lg:block absolute top-[2.75rem] left-[12.5%] right-[12.5%] h-px"
        style={{
          background: "linear-gradient(to right, transparent, rgba(212,168,67,0.4) 15%, rgba(212,168,67,0.4) 85%, transparent)",
        }}
        aria-hidden
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
        {steps.map((step) => {
          const Icon = iconMap[step.icon] ?? CheckCircle
          return (
            <div
              key={step.number}
              className="relative flex flex-col items-center lg:items-start text-center lg:text-left group"
            >
              {/* Step badge with large Playfair number behind */}
              <div className="relative mb-6">
                {/* Large decorative background number */}
                <span
                  className="absolute -top-3 -left-2 font-cormorant leading-none select-none pointer-events-none text-cmg-blue/[0.07]"
                  style={{ fontSize: "5rem", fontWeight: 700 }}
                  aria-hidden
                >
                  {step.number}
                </span>

                {/* Icon circle */}
                <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full bg-white border-2 border-cmg-gold shadow-gold transition-all duration-300 group-hover:bg-cmg-navy">
                  <Icon className="h-6 w-6 text-cmg-blue group-hover:text-cmg-gold transition-colors duration-300" />
                  {/* Step number dot */}
                  <span className="absolute -top-1.5 -right-1.5 flex items-center justify-center w-5 h-5 rounded-full bg-cmg-gold text-cmg-navy font-heading font-bold text-[10px]">
                    {step.number}
                  </span>
                </div>
              </div>

              <h3 className="font-heading text-lg font-semibold text-cmg-ink mb-2 group-hover:text-cmg-blue transition-colors duration-200">
                {step.title}
              </h3>
              <p className="text-cmg-slate leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
