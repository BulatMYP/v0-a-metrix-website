'use client'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { ForWhomSection } from "@/components/home/for-whom-section"
import { CoursesSection } from "@/components/home/courses-section"
import { ServicesSection } from "@/components/home/services-section"
import { TransformationSection } from "@/components/home/transformation-section"
import { FounderSection } from "@/components/home/founder-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { FinalCTASection } from "@/components/home/final-cta-section"

export default function HomePage() {
  const searchParams = useSearchParams()

  useEffect(() => {
    const section = searchParams.get('section')
    if (section) {
      const element = document.getElementById(section)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }, [searchParams])
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Dark blue background */}
        <div className="bg-background">
          <HeroSection />
        </div>
        
        {/* White background */}
        <div className="bg-white text-black">
          <ForWhomSection />
        </div>
        
        {/* Dark blue background */}
        <div className="bg-background">
          <CoursesSection />
        </div>
        
        {/* White background */}
        <div className="bg-white text-black">
          <ServicesSection />
        </div>
        
        {/* Dark blue background */}
        <div className="bg-background">
          <TransformationSection />
        </div>
        
        {/* White background */}
        <div className="bg-white text-black">
          <FounderSection />
        </div>
        
        {/* Dark blue background */}
        <div className="bg-background">
          <TestimonialsSection />
        </div>
        
        {/* White background */}
        <div className="bg-white text-black">
          <FinalCTASection />
        </div>
      </main>
      <Footer />
    </div>
  )
}
