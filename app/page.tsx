import type { Metadata } from 'next'
import { Suspense } from 'react'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { ForWhomSection } from "@/components/home/for-whom-section"
import { CoursesSection } from "@/components/home/courses-section"
import { ServicesSection } from "@/components/home/services-section"
import { TransformationSection } from "@/components/home/transformation-section"
import { AboutSection } from "@/components/home/about-section"
import { FounderSection } from "@/components/home/founder-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { FinalCTASection } from "@/components/home/final-cta-section"
import { ContactsSection } from "@/components/home/contacts-section"
import { ScrollHandler } from "@/components/home/scroll-handler"

// SEO Metadata for home page
export const metadata: Metadata = {
  title: "Флагман/Tech | Tech Акселератор и Школа Предпринимателей",
  description: "Tech бизнес-акселератор от APEX Metrical. Курсы по запуску стартапа, консультации по привлечению инвестиций, поддержка AI-проектов. От идеи к инвестициям за 5-7 дней.",
  keywords: [
    'флагман tech',
    'tech акселератор',
    'школа предпринимателей',
    'запуск стартапа',
    'курсы по стартапам',
    'консультация инвесторы',
    'AI стартапы',
    'бизнес-ускоритель',
    'венчурное финансирование',
    'упаковка проекта'
  ]
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

        {/* Light gray background - About Section */}
        <div className="bg-[#F8F9FA] text-[#0D1B2A]">
          <AboutSection />
        </div>

        {/* Dark blue background */}
        <div className="bg-background">
          <FounderSection />
        </div>

        {/* Dark blue background */}
        <div className="bg-background">
          <TestimonialsSection />
        </div>

        {/* Light gray background */}
        <div className="bg-[#F8F9FA] text-[#0D1B2A]">
          <ContactsSection />
        </div>

        {/* Dark blue background */}
        <div className="bg-background">
          <FinalCTASection />
        </div>
      </main>
      <Footer />
    </div>
  )
}
