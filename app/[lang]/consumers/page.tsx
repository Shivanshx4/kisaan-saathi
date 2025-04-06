import { getDictionary } from "@/lib/dictionaries"
import ProductListing from "@/components/product-listing"

export default async function ConsumersPage({
  params,
}: {
  params: { lang: string }
}) {
  const dict = await getDictionary(params.lang)

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">{dict.consumers.title}</h1>
      <ProductListing dictionary={dict.consumers} />
    </div>
  )
}

