import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Rocket, TrendingUp, Gem, GraduationCap } from "lucide-react"

const courses = [
  {
    name: "Базовый: «Экономика и продажи»",
    icon: Rocket,
    price: "59 900 ₽",
    oldPrice: "79 900 ₽",
    discount: 25,
    description: "Первый поток для студентов технических вузов. Фундамент для запуска бизнеса: финансы, маркетинг, продажи.",
    includes: [
      "Финансовая модель и unit-экономика",
      "Сегментация рынка и выбор аудитории (JTBD)",
      "Комплекс маркетинга и упаковка продукта",
      "Построение воронки продаж и скрипты",
      "Основы лидерства для основателя",
      "Практический план первых 90 дней"
    ],
    cta: "Записаться на курс",
    timeline: "2 недели",
    highlighted: false,
    /*badge: "Первый поток",
    extraOffer: "Первым 10 — 34 900 ₽"  */
  },
  {
    name: "Профессиональный: «Запуск и масштабирование»",
    icon: TrendingUp,
    price: "249 900 ₽",
    oldPrice: undefined,
    discount: undefined,
    description: "Для основателей с первыми продажами и командой. Систематизация процессов, упаковка бизнеса и масштабирование.",
    includes: [
      "Углублённое финансовое моделирование на 3–5 лет",
      "Построение и автоматизация отдела продаж",
      "Управление командой: структура, мотивация, делегирование",
      "Упаковка бизнеса и формирование инвестиционного предложения",
      "Методы масштабирования и аутсорсинга",
      "Маркетинговые стратегии роста",
      "Оптимизация бизнес-процессов"
    ],
    cta: "Масштабировать бизнес",
    timeline: "3 недели",
    highlighted: true,
    badge: "Популярный выбор"
  },
  {
    name: "VIP: «Стратегия и инвестиции»",
    icon: Gem,
    price: "349 900 ₽",
    oldPrice: undefined,
    discount: undefined,
    description: "Интенсивный курс для основателей, готовых к привлечению институциональных инвестиций. Индивидуальная проработка стратегии, финансовой модели и переговорных позиций с действующими инвесторами.",
    includes: [
      "Инвестиционная упаковка: pitch deck, меморандум, финансовая модель",
      "Подготовка к due diligence и переговорам с инвесторами",
      "Оценка стоимости компании и доли",
      "Стратегическое планирование на 3–5 лет",
      "Менторские сессии с инвесторами (4–6 встреч)"
    ],
    cta: "Привлечь инвестиции",
    timeline: "4 недели",
    highlighted: false,
    badge: "VIP"
  }
]

export function CoursesSection() {
  return (
    <section id="courses" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary">B2C</Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-balance text-foreground">
            Образовательные программы для вашего бизнеса
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            От первых шагов до привлечения инвестиций — выберите свой уровень.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {courses.map((course) => (
            <Card
              key={course.name}
              className={`relative flex flex-col h-full ${course.highlighted ? 'border-primary shadow-lg' : ''}`}
            >
              {/* Бейдж (если есть) */}
              {course.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <Badge className={`${course.badge === 'Первый поток' ? 'bg-green-600' : 'bg-primary'} text-primary-foreground whitespace-nowrap`}>
                    {course.badge}
                  </Badge>
                </div>
              )}

              <CardHeader>
                <div className="flex items-start gap-3 mb-2">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <course.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg flex-1">{course.name}</CardTitle>
                </div>

                <CardDescription className="min-h-16 flex items-start">{course.description}</CardDescription>

                {/* Ценовой блок */}
                <div className="pt-4 min-h-20 flex flex-col justify-start">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-3xl font-bold text-foreground">{course.price}</span>
                    {course.oldPrice && (
                      <span className="text-lg text-muted-foreground line-through">{course.oldPrice}</span>
                    )}
                  </div>
                  {course.discount && (
                    <span className="text-sm font-semibold mt-1 text-destructive">
                      Скидка {course.discount}%
                    </span>
                  )}
                  {/* {course.extraOffer && (
                    <span className="text-sm font-medium mt-1 text-primary">
                      {course.extraOffer}
                    </span>
                  )} */}
                </div>

                {/* Длительность */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{course.timeline}</span>
                </div>

                {/* Специально для базового курса: иконка студента */}
                {course.name.includes("Базовый") && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                    <GraduationCap className="h-4 w-4" />
                    <span>Студенческий тариф</span>
                  </div>
                )}
              </CardHeader>

              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {course.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-card-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  className="w-full"
                  variant={course.highlighted ? "default" : "outline"}
                  asChild
                >
                  <Link href="/contact">{course.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          После курсов вы сможете продолжить с нами работу по упаковке проекта для инвесторов.
        </p>
      </div>
    </section>
  )
}
