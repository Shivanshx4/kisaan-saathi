import { getDictionary } from "@/lib/dictionaries"
import FarmerDashboard from "@/components/farmer-dashboard"

export default async function FarmersPage({
  params,
}: {
  params: { lang: string }
}) {
  const dict = await getDictionary(params.lang)

  return (
    <div className="container mx-auto py-10">
      <div className="text-center mb-12 fade-in-up">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-navy-blue">{dict.farmers.title}</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-saffron via-flag-white to-flag-green mx-auto mb-6"></div>
        <p className="text-xl text-navy-blue/80 max-w-2xl mx-auto">{dict.farmers.subtitle}</p>
      </div>
      <FarmerDashboard dictionary={dict.farmers} />
    </div>
  )
}

