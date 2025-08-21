import { Leaf, TrendingUp, ShieldCheck, Users } from "lucide-react"

export default function Features({ dictionary }: { dictionary: any }) {
  const features = [
    {
      icon: <Leaf className="h-12 w-12 text-flag-green" />,
      title: dictionary.directConnection.title,
      description: dictionary.directConnection.description,
      color: "bg-flag-green/10 border-flag-green/20"
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-saffron" />,
      title: dictionary.betterPrices.title,
      description: dictionary.betterPrices.description,
      color: "bg-saffron/10 border-saffron/20"
    },
    {
      icon: <ShieldCheck className="h-12 w-12 text-navy-blue" />,
      title: dictionary.security.title,
      description: dictionary.security.description,
      color: "bg-navy-blue/10 border-navy-blue/20"
    },
    {
      icon: <Users className="h-12 w-12 text-flag-green" />,
      title: dictionary.community.title,
      description: dictionary.community.description,
      color: "bg-flag-green/10 border-flag-green/20"
    },
  ]

  return (
    <section className="container py-20">
      <div className="text-center mb-16 fade-in-up">
        <h2 className="text-4xl md:text-5xl font-bold text-navy-blue mb-4">{dictionary.title}</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-saffron via-flag-white to-flag-green mx-auto mb-6"></div>
        <p className="mt-4 text-xl text-navy-blue/80 max-w-3xl mx-auto leading-relaxed">{dictionary.subtitle}</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className={`bg-white rounded-xl p-8 shadow-lg border-2 ${feature.color} card-hover group`}
            style={{animationDelay: `${index * 0.2}s`}}
          >
            <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-4 text-navy-blue group-hover:text-flag-green transition-colors duration-300">
              {feature.title}
            </h3>
            <p className="text-navy-blue/70 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

