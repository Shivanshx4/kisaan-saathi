import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CallToAction({ dictionary }: { dictionary: any }) {
  return (
    <section className="container py-20">
      <div className="landing-gradient rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
        <div className="relative z-10 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-navy-blue">{dictionary.title}</h2>
          <p className="text-xl text-navy-blue/80 max-w-3xl mx-auto mb-12 leading-relaxed">{dictionary.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="btn-primary text-lg px-8 py-4" asChild>
            <Link href="/farmers">{dictionary.farmerButton}</Link>
          </Button>
            <Button className="btn-secondary text-lg px-8 py-4" asChild>
            <Link href="/consumers">{dictionary.consumerButton}</Link>
          </Button>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/20 rounded-full animate-pulse-custom"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/20 rounded-full animate-pulse-custom" style={{animationDelay: '1s'}}></div>
      </div>
    </section>
  )
}

