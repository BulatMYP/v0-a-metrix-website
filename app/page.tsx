'use client'

import { Suspense, useEffect } from 'react'
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

// Отдельный компонент, использующий useSearchParams
function ScrollHandler() {
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

  return null // компонент ничего не рендерит
}

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Оборачиваем компонент с useSearchParams в Suspense */}
        <Suspense fallback={null}>
          <ScrollHandler />
        </Suspense>

        {/* Dark blue background */}
        <div className="bg-background">
          <HeroSection />
        </div>

        {/* Light gray background */}
        <div className="bg-[#F8F9FA] text-[#0D1B2A]">
          <ForWhomSection />
        </div>

        {/* Dark blue background */}
        <div className="bg-background">
          <CoursesSection />
        </div>

        {/* Light gray background */}
        <div className="bg-[#F8F9FA] text-[#0D1B2A]">
          <ServicesSection />
        </div>

        {/* Dark blue background */}
        <div className="bg-background">
          <TransformationSection />
        </div>

        {/* Light gray background */}
        <div className="bg-[#F8F9FA] text-[#0D1B2A]">
          <FounderSection />
        </div>

        {/* Dark blue background */}
        <div className="bg-background">
          <TestimonialsSection />
        </div>

        {/* Light gray background */}
        <div className="bg-[#F8F9FA] text-[#0D1B2A]">
          <FinalCTASection />
        </div>
      </main>
      <Footer />
    </div>
  )
}