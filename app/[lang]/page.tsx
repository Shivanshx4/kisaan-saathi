import { getDictionary } from "@/lib/dictionaries"
import Hero from "@/components/hero"
import Features from "@/components/features"
import PriceComparison from "@/components/price-comparison"
import HowItWorks from "@/components/how-it-works"
import CallToAction from "@/components/call-to-action"

export default async function Home({
  params,
}: {
  params: { lang: string }
}) {
  const dict = await getDictionary(params.lang)

  return (
    <div className="space-y-16 pb-16">
      <Hero dictionary={dict.home.hero} />
      <Features dictionary={dict.home.features} />
      <PriceComparison dictionary={dict.home.priceComparison} />
      <HowItWorks dictionary={dict.home.howItWorks} />
      <CallToAction dictionary={dict.home.cta} />
    </div>
  )
}

