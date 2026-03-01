import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Calculator,
  PresentationIcon,
  LineChart,
  Target,
  Briefcase,
  TrendingUp,
  ArrowRight,
  Check,
  Quote,
} from "lucide-react"

const services = [ /* ... без изменений ... */]

const processSteps = [ /* ... без изменений ... */]

const advantages = [
  {
    title: "Отраслевые шаблоны",
    description: "Готовые методологии для SaaS, маркетплейсов, e-commerce и deep tech",
  },
  {
    title: "Динамические сценарии",
    description: "Меняйте CAC, конверсию, LTV — сразу видите влияние на оценку",
  },
  {
    title: "Формат под фонды",
    description: "Знаем, на что смотрят Target Global, Flint Capital, DA Capital и другие",
  },
  {
    title: "Скорость и готовность",
    description: "От первого звонка до готового пакета — 5-7 рабочих дней",
  },
]

const caseStudy = {
  quote:
    "Благодаря Флагман/Tech мы за 6 дней подготовили пакет, который прошёл due diligence в двух фондах параллельно. Инвесторы отметили глубину проработки.",
  author: "Алексей, CEO EdTech-стартапа",
  result: "2 term sheet за 3 недели, раунд $850K",
}

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white"> {/* добавлен bg-white */}
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            B2B
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-balance text-foreground">
            Экспертные услуги для вашего бизнеса
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Когда знаний из курсов уже недостаточно, и вам нужен гарантированный результат «под ключ».
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-12 lg:gap-16 mb-24">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-center`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                  <service.icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-card-foreground">
                  {service.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <Button asChild className="mt-6">
                  <Link href="/contact">
                    Обсудить проект
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div
                className={`rounded-lg border border-border bg-card p-8 ${index % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-6">
                  Что входит
                </h4>
                <ul className="space-y-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-foreground/70 flex-shrink-0 mt-0.5" />
                      <span className="text-card-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold tracking-tight md:text-3xl text-foreground">
              Мы готовим ваш инвестиционный пакет под ключ
            </h3>
            <p className="mt-4 text-muted-foreground">
              Четкий процесс с предсказуемым результатом за 5-7 рабочих дней
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.step} className="relative">
                <div className="flex flex-col">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-semibold">
                    {step.step}
                  </div>
                  <h4 className="mt-4 text-lg font-semibold text-foreground">
                    {step.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      {step.duration}
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground">
                      {step.deliverable}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Advantages */}
        <div className="mb-24">
          <h3 className="text-center text-xl font-semibold text-foreground mb-12">
            Что делает нас эффективными
          </h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="rounded-lg border border-border bg-card p-6" // заменено на bg-card
              >
                <h4 className="font-semibold text-card-foreground">
                  {advantage.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Case Study */}
        <div className="max-w-3xl mx-auto">
          <Card className="bg-secondary/50 border-0">
            <CardContent className="p-8 md:p-12">
              <Quote className="h-10 w-10 text-muted-foreground/30 mb-6" />
              <blockquote className="text-lg md:text-xl leading-relaxed mb-6 text-foreground">
                {caseStudy.quote}
              </blockquote>
              <div className="border-t border-border pt-6">
                <p className="font-medium text-foreground">{caseStudy.author}</p>
                <p className="text-sm text-foreground/80 font-medium mt-1">
                  {caseStudy.result}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button size="lg" asChild>
            <Link href="/contact">
              Обсудить задачу
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}