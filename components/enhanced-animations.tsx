"use client"

import { useEffect, useRef } from "react"

// Enhanced scroll animations with intersection observer
export function useScrollAnimation(threshold = 0.1, rootMargin = "0px 0px -50px 0px") {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
            // Add staggered animation for child elements
            const children = entry.target.querySelectorAll(".stagger-child")
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add("animate-in")
              }, index * 100)
            })
          }
        })
      },
      { threshold, rootMargin }
    )

    const elements = document.querySelectorAll(".animate-on-scroll")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return ref
}

// Floating animation component
export function FloatingElement({ 
  children, 
  delay = 0,
  duration = 3,
  className = "" 
}: { 
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
}) {
  return (
    <div 
      className={`animate-float ${className}`}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`
      }}
    >
      {children}
    </div>
  )
}

// Typewriter effect component
export function TypewriterText({ 
  text, 
  speed = 100,
  className = "",
  onComplete 
}: {
  text: string
  speed?: number
  className?: string
  onComplete?: () => void
}) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    } else if (onComplete) {
      onComplete()
    }
  }, [currentIndex, text, speed, onComplete])

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

// Parallax scroll component
export function ParallaxSection({ 
  children, 
  speed = 0.5,
  className = "" 
}: {
  children: React.ReactNode
  speed?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const scrolled = window.pageYOffset
        const parallax = scrolled * speed
        ref.current.style.transform = `translateY(${parallax}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

// Loading spinner with Indian flag colors
export function LoadingSpinner({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8", 
    lg: "w-12 h-12"
  }

  return (
    <div className={`${sizeClasses[size]} animate-spin`}>
      <div className="w-full h-full rounded-full border-4 border-gray-200">
        <div className="w-full h-full rounded-full border-4 border-transparent border-t-saffron border-r-flag-white border-b-flag-green animate-spin"></div>
      </div>
    </div>
  )
}

// Success animation component
export function SuccessAnimation({ show, onComplete }: { show: boolean, onComplete?: () => void }) {
  useEffect(() => {
    if (show && onComplete) {
      const timeout = setTimeout(onComplete, 2000)
      return () => clearTimeout(timeout)
    }
  }, [show, onComplete])

  if (!show) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-full p-8 animate-bounce">
        <div className="w-16 h-16 rounded-full bg-flag-green flex items-center justify-center">
          <svg className="w-8 h-8 text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
    </div>
  )
}