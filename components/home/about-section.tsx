'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Target, Users, TrendingUp, Award, Zap, BookOpen } from "lucide-react"

const stats = [
  { value: "500+", label: "Выпускников курсов" },
  { value: "50+", label: "Инвестиционных раундов" },
  { value: "9", label: "Лет опыта" },
  { value: "5-7", label: "Дней на упаковку" },
]

const values = [
  {
    icon: Target,
    title: "Фокус на результате",
    description: "Мы работаем не ради красивых документов, а ради реального запуска бизнеса и привлечения инвестиций.",
  },
  {
    icon: Users,
    title: "Партнёрский подход",
    description: "Мы не делаем за вас — мы учим вас создавать и защищать свою модель, становясь экспертом в своём бизнесе.",
  },
  {
    icon: BookOpen,
    title: "Практика, а не теория",
    description: "Все курсы и услуги заточены на реальные метрики и документы, которые вы сразу применяете.",
  },
  {
    icon: Zap,
    title: "Скорость",
    description: "Курс — несколько недель. Упаковка проекта — 5-7 дней. Мы ценим ваше время.",
  },
]

const differentiators = [
  "Сквозная экспертиза: от основ для новичков до переговоров с фондами",
  "Практика, а не теория: все курсы и услуги заточены на реальные метрики",
  "Скорость: курс — несколько недель; упаковка проекта — 5-7 дней",
  "Сообщество и нетворкинг: доступ к комьюнити предпринимателей и инвесторов"
]

const unifiedAdvantage = "Мы предлагаем сквозной путь: клиент может начать с курса для получения фундамента, а затем, по мере роста, получить премиальные услуги по упаковке от тех же экспертов. Это создаёт уникальное доверие и высокий LTV."

export function AboutSection() {
  return (
    <>
      {/* Hero */}
      <section id="about" className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              О компании Флагман/Tech
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Экосистема для предпринимателей: от образовательных курсов до экспертных услуг по привлечению инвестиций. С 2017 года помогаем превращать идеи в успешные бизнесы.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-semibold md:text-5xl">{stat.value}</div>
                <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="border-t bg-card py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                Наша миссия и видение
              </h3>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Стать экосистемой №1 для предпринимателей в СНГ, сопровождая проект от идеи до успешного инвестиционного раунда.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Мы создаём ценность на каждом этапе: практические курсы для начинающих предпринимателей и экспертные услуги по финансовому моделированию и инвестиционной упаковке для растущих стартапов.
              </p>
            </div>
            <div className="rounded-xl border bg-background p-8">
              <h4 className="text-xl font-semibold">Наше конкурентное преимущество</h4>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {unifiedAdvantage}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              Наши ценности
            </h3>
            <p className="mt-4 text-lg text-muted-foreground">
              Принципы, которыми мы руководствуемся в работе с каждым клиентом
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex gap-5 rounded-xl border bg-card p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary">
                  <value.icon className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold">{value.title}</h4>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="border-t bg-card py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              Почему выбирают Флагман/Tech
            </h3>
            <p className="mt-4 text-lg text-muted-foreground">
              Ключевые отличия от конкурентов
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-2xl space-y-4">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 rounded-xl border bg-background p-5"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-foreground text-sm font-medium text-background">
                  {index + 1}
                </div>
                <p className="text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
