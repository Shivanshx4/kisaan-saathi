import { Leaf, TrendingUp, ShieldCheck, Users } from "lucide-react"

export default function Features({ dictionary }: { dictionary: any }) {
  const features = [
    {
      icon: <Leaf className="h-10 w-10 text-dark-green" />,
      title: dictionary.directConnection.title,
      description: dictionary.directConnection.description,
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-dark-green" />,
      title: dictionary.betterPrices.title,
      description: dictionary.betterPrices.description,
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-dark-green" />,
      title: dictionary.security.title,
      description: dictionary.security.description,
    },
    {
      icon: <Users className="h-10 w-10 text-dark-green" />,
      title: dictionary.community.title,
      description: dictionary.community.description,
    },
  ]

  return (
    <section className="container py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-navy-900">{dictionary.title}</h2>
        <p className="mt-4 text-lg text-dark-green max-w-2xl mx-auto">{dictionary.subtitle}</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-tan-100">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-medium mb-2 text-navy-900">{feature.title}</h3>
            <p className="text-dark-green">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

