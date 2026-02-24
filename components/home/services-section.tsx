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

const services = [
  {
    id: "financial-modeling",
    icon: Calculator,
    title: "Финансовое моделирование",
    description:
      "Создаем динамические финансовые модели с несколькими сценариями развития. Модели адаптированы под требования инвесторов любого типа и включают все ключевые метрики.",
    features: [
      "P&L на 3-5 лет с помесячной детализацией",
      "3 сценария: консервативный, реалистичный, агрессивный",
      "Моделирование cashflow и точки безубыточности",
      "Анализ чувствительности к ключевым параметрам",
    ],
  },
  {
    id: "investment-packaging",
    icon: PresentationIcon,
    title: "Инвестиционная упаковка",
    description:
      "Готовим полный пакет материалов для переговоров с фондами, бизнес-ангелами и частными инвесторами: от одностраничника до развернутого pitch deck.",
    features: [
      "Pitch deck на 10-15 слайдов",
      "Teaser / одностраничник для рассылки",
      "Investment memorandum",
      "Подготовка к due diligence",
    ],
  },
  {
    id: "unit-economics",
    icon: LineChart,
    title: "Расчет Unit-экономики",
    description:
      "Глубокий анализ unit-экономики вашего продукта с учетом специфики ниши. Определяем точки роста и узкие места.",
    features: [
      "Расчет CAC, LTV, Payback Period",
      "Когортный анализ",
      "Benchmark по отрасли",
      "Рекомендации по оптимизации метрик",
    ],
  },
  {
    id: "strategy",
    icon: Target,
    title: "Стратегический консалтинг",
    description:
      "Помогаем определить вектор развития компании, сформулировать стратегию и подготовить план достижения целей.",
    features: [
      "Стратегические сессии с командой",
      "Анализ конкурентной среды",
      "Формулирование OKR и KPI",
      "Дорожная карта развития",
    ],
  },
  {
    id: "business-launch",
    icon: Briefcase,
    title: "Упаковка и запуск бизнеса",
    description:
      "Комплексная подготовка нового бизнеса к запуску: от бизнес-плана до операционных процессов.",
    features: [
      "Бизнес-план и финансовая модель",
      "Организационная структура",
      "Описание бизнес-процессов",
      "Маркетинговая стратегия",
    ],
  },
  {
    id: "sales-training",
    icon: TrendingUp,
    title: "Обучение продажам",
    description:
      "Продажи — основа любого бизнеса на любой стадии. Обучаем оффлайн-продажам и ДНК продаж — системному подходу к построению отдела продаж.",
    features: [
      "Техника оффлайн-продаж",
      "ДНК продаж — системный подход",
      "Построение воронки продаж",
      "Скрипты и работа с возражениями",
      "Практические тренинги с обратной связью",
    ],
  },
]

const processSteps = [
  {
    step: "1",
    title: "Аудит и стратегическая сессия",
    description:
      "Разбираем текущую модель, находим слабые места, определяем ключевые метрики для вашей ниши",
    duration: "1 день",
    deliverable: "Дорожная карта подготовки",
  },
  {
    step: "2",
    title: "Финансовое моделирование",
    description:
      "Строим динамическую модель с 3 сценариями (консервативный, реалистичный, агрессивный)",
    duration: "2 дня",
    deliverable: "Интерактивная финансовая модель",
  },
  {
    step: "3",
    title: "Инвестиционное предложение",
    description:
      "Готовим pitch deck, отвечающий на ключевые вопросы инвесторов, и teaser",
    duration: "1 день",
    deliverable: "Презентация + Одностраничник",
  },
  {
    step: "4",
    title: "Репетиция и упаковка",
    description:
      "Проводим «репетицию» due diligence, готовим ответы на сложные вопросы",
    duration: "1 день",
    deliverable: "Готовность к переговорам",
  },
]

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
    <section id="services" className="py-20 md:py-28 bg-card">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            B2B
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-balance">
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
                className={`rounded-lg border border-border bg-background p-8 ${index % 2 === 1 ? "lg:order-1" : ""}`}
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
            <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
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
                className="rounded-lg border border-border bg-background p-6"
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
              <blockquote className="text-lg md:text-xl leading-relaxed mb-6">
                {caseStudy.quote}
              </blockquote>
              <div className="border-t border-border pt-6">
                <p className="font-medium">{caseStudy.author}</p>
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
