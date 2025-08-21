import { getDictionary } from "@/lib/dictionaries"
import EnhancedHero from "@/components/enhanced-hero"
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
    <div className="space-y-0 pb-16">
      <EnhancedHero dictionary={dict.home.hero} />
      <div className="space-y-20">
      <Features dictionary={dict.home.features} />
      <PriceComparison dictionary={dict.home.priceComparison} />
      <HowItWorks dictionary={dict.home.howItWorks} />
      <CallToAction dictionary={dict.home.cta} />
      </div>
    </div>
  )
}

