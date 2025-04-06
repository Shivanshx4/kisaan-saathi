import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero({ dictionary }: { dictionary: any }) {
  return (
    <section className="relative landing-gradient">
      <div className="container relative pt-16 pb-20">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="flex justify-center mb-4">
            <Image src="/images/logo.png" alt="Kisaan Saathi Logo" width={120} height={120} className="h-28 w-28" />
          </div>

          <div>
            <h1 className="text-navy-900 text-4xl md:text-6xl font-bold">KisaanSathi</h1>
          </div>

          <p className="text-xl text-dark-green font-medium">{dictionary.subtitle}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-dark-green hover:bg-dark-green/90 text-white" asChild>
              <Link href="/farmers">{dictionary.farmerButton}</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-dark-green text-dark-green hover:bg-light-green/50"
              asChild
            >
              <Link href="/consumers">{dictionary.consumerButton}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

