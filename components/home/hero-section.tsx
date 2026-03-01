import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, TrendingUp, Award } from "lucide-react"

const trustIndicators = [
  { icon: Users, text: "500+ выпускников курсов" },
  { icon: TrendingUp, text: "50+ инвестиционных раундов" },
  { icon: Award, text: "Эксперты из Яндекса, McKinsey" },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 lg:py-36">
      {/* Фоновое изображение */}
      <div className="absolute inset-0">
        <Image
          src="/images/triumphal-arch.jpg"
          alt="Триумфальная арка - символ успеха"
          fill
          priority
          className="object-cover object-center opacity-60" // можно оставить 40-60, но сейчас 40
        />
      </div>
      {/* Более прозрачный градиент поверх изображения */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background/60 z-10" />

      <div className="relative z-20 mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <Badge variant="secondary" className="mb-6">
            Экосистема для предпринимателей
          </Badge>

          <h1 className="w-full text-3xl font-bold tracking-tight text-balance break-words sm:text-4xl md:text-5xl lg:text-6xl">
            От идеи до инвестиций: ваш путь в предпринимательстве
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed text-pretty md:text-xl">
            Стартуйте с нашими курсами. Масштабируйтесь с нашими экспертами.
            Получите систему знаний для запуска бизнеса и профессиональную упаковку для привлечения финансирования.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="#courses">Выбрать курс</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#services">Обсудить проект</Link>
            </Button>
          </div>

          <div className="mt-16 flex flex-col items-center gap-6 md:flex-row md:gap-10">
            {trustIndicators.map((indicator) => (
              <div key={indicator.text} className="flex items-center gap-2 text-sm text-muted-foreground">
                <indicator.icon className="h-5 w-5 text-foreground/70" />
                <span>{indicator.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}