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
      {/* Connector line — desktop */}
      <div
        className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-cmg-blue/20 via-cmg-blue/60 to-cmg-blue/20"
        aria-hidden
      />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
        {steps.map((step) => {
          const Icon = iconMap[step.icon] ?? CheckCircle
          return (
            <div key={step.number} className="relative flex flex-col items-center lg:items-start text-center lg:text-left">
              {/* Number + Icon badge */}
              <div className="relative z-10 flex items-center justify-center w-20 h-20 rounded-full bg-cmg-blue text-white shadow-hero mb-5">
                <Icon className="h-8 w-8" />
                <span className="absolute -top-1 -right-1 flex items-center justify-center w-6 h-6 rounded-full bg-cmg-gold text-cmg-navy text-xs font-bold">
                  {step.number}
                </span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-cmg-text mb-2">{step.title}</h3>
              <p className="text-cmg-slate leading-relaxed text-sm md:text-base">{step.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
