import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Quote } from "lucide-react"

const testimonials = [
  {
    category: "Выпускник курса",
    name: "Анна, запустила онлайн-школу",
    quote: "Курс дал структуру. Я наконец-то поняла unit-экономику своего проекта и с первого месяца вышла в прибыль. Шаблоны из курса использую до сих пор.",
    result: "Прибыль 120+ тыс. руб. с 3-го месяца"
  },
  {
    category: "Клиент B2B-услуг",
    name: "Мария, основатель SaaS для ритейла",
    quote: "Динамическая финансовая модель спасла нас на переговорах с инвесторами. За 30 секунд ответили на каверзный вопрос про рост CAC.",
    result: "Закрыли Seed-раунд на $1.2M"
  }
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-balance">
            Истории успеха
          </h2>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="relative">
              <CardContent className="p-8">
                <Badge variant="secondary" className="mb-6">
                  {testimonial.category}
                </Badge>
                
                <Quote className="h-8 w-8 text-muted-foreground/20 mb-4" />
                
                <blockquote className="text-lg leading-relaxed mb-6">
                  {testimonial.quote}
                </blockquote>
                
                <div className="border-t pt-4">
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-green-600 font-medium mt-1">{testimonial.result}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
