interface Step {
  title: string
  description: string
}

export default function ProcessSteps({ steps }: { steps: Step[] }) {
  return (
    <div className="relative">
      {/* Connector line — desktop only */}
      <div
        className="absolute top-8 hidden lg:block h-px bg-cmg-border"
        style={{ left: "calc(12.5% + 2rem)", right: "calc(12.5% + 2rem)" }}
        aria-hidden
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            {/* Step circle */}
            <div className="relative z-10 w-16 h-16 rounded-full bg-cmg-blue flex items-center justify-center font-heading font-bold text-white text-xl mb-5 shadow-blue shrink-0">
              {i + 1}
            </div>
            <h3 className="font-heading font-bold text-cmg-text text-base mb-2">{step.title}</h3>
            <p className="text-cmg-slate text-sm leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
