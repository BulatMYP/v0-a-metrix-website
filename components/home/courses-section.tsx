import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock } from "lucide-react"

const courses = [
  {
    name: "Базовый: «Экономика и продажи»",
    price: "55 000 ₽",
    oldPrice: "85 000 ₽",
    discount: 35,
    description: "Фундамент для запуска. Рассчитайте рентабельность и настройте первые продажи.",
    includes: [
      "Расчет unit-экономики и точки безубыточности",
      "Построение воронки продаж и скриптов",
      "Основы клиентоориентированного маркетинга",
      "Шаблоны финансовых таблиц и коммерческих предложений",
      "Доступ к комьюнити + 2 вебинара с экспертами"
    ],
    cta: "Начать с основ",
    timeline: "1 неделя",
    highlighted: false
  },
  {
    name: "Профессиональный: «Запуск и масштабирование»",
    price: "150 000 ₽",
    oldPrice: undefined,
    discount: undefined,
    description: "Для первых успехов. Упакуйте проект и подготовьтесь к масштабированию или поиску партнёров.",
    includes: [
      "Всё из Базового тарифа +",
      "Финансовое моделирование на 2-3 года",
      "Упаковка бизнеса и формирование инвестиционного предложения",
      "Методы масштабирования и аутсорсинга",
      "Личный разбор проекта +  сессии с ментором"
    ],
    cta: "Масштабировать бизнес",
    timeline: "2 недели",
    highlighted: true
  },
  {
    name: "VIP: «Стратегия и инвестиции»",
    price: "250 000 ₽",
    oldPrice: undefined,
    discount: undefined,
    description: "Для амбициозных проектов. Подготовьтесь к привлечению инвестиций или продаже доли.",
    includes: [
      "Всё из Профессионального тарифа +",
      "Глубокий стратегический консалтинг по развитию",
      "Подготовка к due diligence и переговорам с инвесторами",
      "Оценка стоимости компании и доли",
      "Персональное сопровождение 1-на-1 (8 сессий)"
    ],
    cta: "Привлечь инвестиции",
    timeline: "4 недель",
    highlighted: false
  }
]

export function CoursesSection() {
  return (
    <section id="courses" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">B2C</Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-balance">
            Курсы для начинающих предпринимателей
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Практические программы, чтобы избежать ошибок новичка и запустить бизнес на правильном фундаменте.
          </p>
        </div>
        
        <div className="grid gap-6 lg:grid-cols-3">
          {courses.map((course) => (
            <Card 
              key={course.name} 
              className={`relative flex flex-col h-full ${course.highlighted ? 'border-foreground/20 shadow-lg' : ''}`}
            >
              {course.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge>Популярный выбор</Badge>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-lg min-h-14 flex items-start">{course.name}</CardTitle>
                <CardDescription className="min-h-16 flex items-start">{course.description}</CardDescription>
                <div className="pt-4 min-h-20 flex flex-col justify-start">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold">{course.price}</span>
                    {course.oldPrice && (
                      <span className="text-lg text-muted-foreground line-through">{course.oldPrice}</span>
                    )}
                  </div>
                  {course.discount && (
                    <span className="text-sm font-semibold text-accent mt-1">
                      Скидка {course.discount}%
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{course.timeline}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {course.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                      <span>{item}</span>
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
