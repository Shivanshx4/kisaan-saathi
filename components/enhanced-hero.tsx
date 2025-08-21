"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FloatingElement, TypewriterText } from "./enhanced-animations"

export default function EnhancedHero({ dictionary }: { dictionary: any }) {
  const [currentSlogan, setCurrentSlogan] = useState(0)
  const slogans = [
    "Direct from Farm to Table",
    "खेत से सीधे आपकी थाली तक",
    "शेतातून थेट तुमच्या ताटात",
    "வயலில் இருந்து நேரடியாக உங்கள் தட்டுக்கு"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlogan((prev) => (prev + 1) % slogans.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative landing-gradient min-h-screen flex items-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <FloatingElement delay={0} duration={4} className="absolute top-10 left-10 w-20 h-20 bg-saffron/20 rounded-full" />
        <FloatingElement delay={1} duration={5} className="absolute top-1/3 right-20 w-16 h-16 bg-flag-green/20 rounded-full" />
        <FloatingElement delay={2} duration={3} className="absolute bottom-20 left-1/4 w-12 h-12 bg-navy-blue/20 rounded-full" />
        <FloatingElement delay={0.5} duration={6} className="absolute top-1/2 left-5 w-8 h-8 bg-saffron/30 rounded-full" />
        <FloatingElement delay={1.5} duration={4} className="absolute bottom-10 right-10 w-24 h-24 bg-flag-green/15 rounded-full" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Logo with enhanced animation */}
          <div className="flex justify-center mb-6">
            <div className="animate-scale-in hover-lift">
              <Image 
                src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop" 
                alt="Kisaan Saathi Logo" 
                width={140} 
                height={140} 
                className="h-36 w-36 rounded-full shadow-2xl border-4 border-white transition-transform duration-300 hover:scale-110" 
              />
            </div>
          </div>

          {/* Main title with gradient animation */}
          <div className="space-y-6">
            <h1 className="gradient-text text-6xl md:text-8xl font-extrabold tracking-tight animate-slide-in-left">
              KisaanSathi
            </h1>
            
            {/* Rotating slogans */}
            <div className="h-16 flex items-center justify-center">
              <h2 className="text-2xl md:text-3xl font-bold text-navy-blue transition-all duration-500">
                {slogans[currentSlogan]}
              </h2>
            </div>

            {/* Language badges with stagger animation */}
            <div className="flex justify-center items-center space-x-3 text-sm md:text-base">
              {[
                { emoji: "🧡", text: "किसान", bg: "bg-saffron/20" },
                { emoji: "🤍", text: "साथी", bg: "bg-flag-white/20 border" },
                { emoji: "💚", text: "समुदाय", bg: "bg-flag-green/20" }
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`stagger-child px-4 py-2 ${item.bg} rounded-full hover-lift cursor-pointer transition-all duration-300 hover:scale-105`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <span className="mr-1">{item.emoji}</span>
                  <span className="font-medium text-navy-blue">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Subtitle with typewriter effect */}
          <div className="animate-slide-in-right">
            <p className="text-xl md:text-2xl text-navy-blue font-medium max-w-4xl mx-auto leading-relaxed">
              {dictionary.subtitle}
            </p>
          </div>

          {/* CTA buttons with enhanced animations */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Button 
              size="lg" 
              className="btn-primary text-lg px-10 py-5 hover-lift animate-slide-in-left transform hover:scale-105 transition-all duration-300" 
              asChild
              style={{ animationDelay: "0.3s" }}
            >
              <Link href="/farmers">
                <span className="flex items-center gap-2">
                  🌾 {dictionary.farmerButton}
                </span>
              </Link>
            </Button>
            <Button
              size="lg"
              className="btn-secondary text-lg px-10 py-5 hover-lift animate-slide-in-right transform hover:scale-105 transition-all duration-300"
              asChild
              style={{ animationDelay: "0.5s" }}
            >
              <Link href="/consumers">
                <span className="flex items-center gap-2">
                  🛒 {dictionary.consumerButton}
                </span>
              </Link>
            </Button>
          </div>

          {/* Scroll indicator with animation */}
          <div className="pt-16 animate-bounce-custom">
            <div className="inline-flex flex-col items-center space-y-2 text-navy-blue/60 cursor-pointer hover:text-navy-blue transition-colors duration-300">
              <span className="text-sm font-medium">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
                <div className="w-1 h-3 bg-current rounded-full mt-2 animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced shimmer effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 animate-shimmer"></div>
      </div>
    </section>
  )
}