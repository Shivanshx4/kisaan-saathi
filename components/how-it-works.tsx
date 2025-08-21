export default function HowItWorks({ dictionary }: { dictionary: any }) {
  const steps = [
    {
      number: "01",
      title: dictionary.steps.register.title,
      description: dictionary.steps.register.description,
      icon: "👤",
      color: "bg-saffron/10 border-saffron/30"
    },
    {
      number: "02",
      title: dictionary.steps.list.title,
      description: dictionary.steps.list.description,
      icon: "📝",
      color: "bg-flag-green/10 border-flag-green/30"
    },
    {
      number: "03",
      title: dictionary.steps.connect.title,
      description: dictionary.steps.connect.description,
      icon: "🤝",
      color: "bg-navy-blue/10 border-navy-blue/30"
    },
    {
      number: "04",
      title: dictionary.steps.transact.title,
      description: dictionary.steps.transact.description,
      icon: "💰",
      color: "bg-flag-green/10 border-flag-green/30"
    },
  ]

  return (
    <section className="container py-20">
      <div className="text-center mb-16 fade-in-up">
        <h2 className="text-4xl md:text-5xl font-bold text-navy-blue mb-4">{dictionary.title}</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-saffron via-flag-white to-flag-green mx-auto mb-6"></div>
        <p className="mt-4 text-xl text-navy-blue/80 max-w-3xl mx-auto leading-relaxed">{dictionary.subtitle}</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className={`relative p-8 rounded-2xl border-2 ${step.color} card-hover group`}
            style={{animationDelay: `${index * 0.3}s`}}
          >
            <div className="text-center mb-6">
              <div className="text-6xl mb-4 group-hover:animate-bounce-custom">{step.icon}</div>
              <div className="text-4xl font-bold text-navy-blue/20 absolute top-4 right-4">{step.number}</div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4 text-navy-blue group-hover:text-flag-green transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-navy-blue/70 leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
        
        {/* Connection lines for desktop */}
        <div className="hidden lg:block absolute top-1/2 left-1/4 w-1/4 h-0.5 bg-gradient-to-r from-saffron to-flag-green transform -translate-y-1/2"></div>
        <div className="hidden lg:block absolute top-1/2 left-1/2 w-1/4 h-0.5 bg-gradient-to-r from-flag-green to-navy-blue transform -translate-y-1/2"></div>
        <div className="hidden lg:block absolute top-1/2 left-3/4 w-1/4 h-0.5 bg-gradient-to-r from-navy-blue to-flag-green transform -translate-y-1/2"></div>
      </div>
    </section>
  )
}

