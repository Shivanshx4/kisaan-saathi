import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CallToAction({ dictionary }: { dictionary: any }) {
  return (
    <section className="container py-16">
      <div className="landing-gradient rounded-xl p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold mb-4 text-navy-900">{dictionary.title}</h2>
        <p className="text-lg text-dark-green max-w-2xl mx-auto mb-8">{dictionary.subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-dark-green hover:bg-dark-green/90" asChild>
            <Link href="/farmers">{dictionary.farmerButton}</Link>
          </Button>
          <Button variant="outline" className="border-dark-green text-dark-green hover:bg-light-green/50" asChild>
            <Link href="/consumers">{dictionary.consumerButton}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

