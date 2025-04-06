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
      <h1 className="text-3xl font-bold mb-6">{dict.farmers.title}</h1>
      <FarmerDashboard dictionary={dict.farmers} />
    </div>
  )
}

