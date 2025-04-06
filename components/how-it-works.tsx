export default function HowItWorks({ dictionary }: { dictionary: any }) {
  const steps = [
    {
      number: "01",
      title: dictionary.steps.register.title,
      description: dictionary.steps.register.description,
    },
    {
      number: "02",
      title: dictionary.steps.list.title,
      description: dictionary.steps.list.description,
    },
    {
      number: "03",
      title: dictionary.steps.connect.title,
      description: dictionary.steps.connect.description,
    },
    {
      number: "04",
      title: dictionary.steps.transact.title,
      description: dictionary.steps.transact.description,
    },
  ]

  return (
    <section className="container py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-navy-900">{dictionary.title}</h2>
        <p className="mt-4 text-lg text-dark-green max-w-2xl mx-auto">{dictionary.subtitle}</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            <div className="text-6xl font-bold text-tan-100">{step.number}</div>
            <div className="mt-4">
              <h3 className="text-xl font-medium mb-2 text-navy-900">{step.title}</h3>
              <p className="text-dark-green">{step.description}</p>
            </div>
            {index < steps.length - 1 && (
              <div
                className="hidden lg:block absolute top-8 left-full w-8 h-0.5 bg-tan-100"
                style={{ width: "calc(100% - 3rem)" }}
              ></div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

