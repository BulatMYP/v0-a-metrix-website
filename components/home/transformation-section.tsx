import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, X, CheckCircle } from "lucide-react"

const beforeItems = [
  "Идея есть, но нет понятного плана и уверенности в цифрах",
  "Хаос в расчётах, страх сделать ошибку на старте",
  "Потеря времени на самообучение и пробы без системы",
  "Незнание, как говорить с инвесторами или партнёрами"
]

const afterItems = [
  "Чёткий план и финансовая модель вашего бизнеса",
  "Налаженные процессы первых продаж и маркетинга",
  "Сэкономленные месяцы времени и тысячи рублей",
  "Готовый профессиональный пакет для масштабирования или привлечения инвестиций"
]

const emotions = ["Уверенность", "Контроль над процессом", "Гордость за свой проект", "Спокойствие за будущее"]

export function TransformationSection() {
  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-balance">
            Ваша трансформация: от идеи к результату
          </h2>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 items-stretch">
          <Card className="border-destructive/20 bg-destructive/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                  A
                </span>
                Точка А: Неопределённость
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {beforeItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <X className="mt-0.5 h-5 w-5 shrink-0 text-destructive/70" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-green-500/20 bg-green-500/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/10 text-green-600">
                  Б
                </span>
                Точка Б: Уверенность и контроль
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <ul className="space-y-4">
                {afterItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground mb-3">Ваши эмоции:</p>
                <div className="flex flex-wrap gap-2">
                  {emotions.map((emotion) => (
                    <Badge key={emotion} variant="secondary" className="bg-green-500/10 text-green-700 border-0">
                      {emotion}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="hidden md:flex justify-center mt-8">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="text-sm">Ваш путь с Флагман/Tech</span>
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </section>
  )
}
