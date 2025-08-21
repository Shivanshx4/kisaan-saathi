import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero({ dictionary }: { dictionary: any }) {
  return (
    <section className="relative landing-gradient min-h-screen flex items-center">
      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center space-y-8 fade-in-up">
          <div className="flex justify-center mb-4">
            <div className="animate-bounce-custom">
              <Image 
                src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop" 
                alt="Kisaan Saathi Logo" 
                width={120} 
                height={120} 
                className="h-32 w-32 rounded-full shadow-2xl border-4 border-white" 
              />
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="multilingual-title-main text-5xl md:text-7xl font-extrabold tracking-tight">
              KisaanSathi
            </h1>
            <div className="flex justify-center items-center space-x-2 text-sm md:text-base text-navy-blue/80">
              <span className="px-3 py-1 bg-saffron/20 rounded-full">🧡 किसान</span>
              <span className="px-3 py-1 bg-flag-white/20 rounded-full border">🤍 साथी</span>
              <span className="px-3 py-1 bg-flag-green/20 rounded-full">💚 समुदाय</span>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-navy-blue font-medium max-w-3xl mx-auto leading-relaxed">
            {dictionary.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Button size="lg" className="btn-primary text-lg px-8 py-4" asChild>
              <Link href="/farmers">{dictionary.farmerButton}</Link>
            </Button>
            <Button
              size="lg"
              className="btn-secondary text-lg px-8 py-4"
              asChild
            >
              <Link href="/consumers">{dictionary.consumerButton}</Link>
            </Button>
          </div>

          <div className="pt-12 animate-bounce-custom">
            <div className="inline-flex items-center space-x-2 text-navy-blue/60">
              <span className="text-sm">Scroll to explore</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-saffron/20 rounded-full animate-pulse-custom"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-flag-green/20 rounded-full animate-pulse-custom" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-5 w-12 h-12 bg-navy-blue/20 rounded-full animate-pulse-custom" style={{animationDelay: '2s'}}></div>
    </section>
  )
}

