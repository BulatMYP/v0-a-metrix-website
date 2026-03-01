import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Award, BookOpen, Globe, Users, Zap } from "lucide-react"

const achievements = [
  {
    icon: BookOpen,
    title: "Образование",
    description: "МГТУ имени Баумана, МГУ имени Ломоносова"
  },
  {
    icon: Users,
    title: "Big Four Experience",
    description: "Консультант в ведущих международных фирмах"
  },
  {
    icon: Globe,
    title: "Международный опыт",
    description: "Работал в США, Европе, Азии"
  },
  {
    icon: Zap,
    title: "Предпринимательство",
    description: "12+ лет в создании и масштабировании стартапов"
  },
  {
    icon: Award,
    title: "Экспертиза",
    description: "Помог 500+ компаниям привлечь инвестиции"
  },
]

export function FounderSection() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            ОБ ОСНОВАТЕЛЕ
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-balance text-foreground mb-4">
            Опыт и экспертиза, которые помогут вашему бизнесу
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Основатель Флагман/Tech имеет глубокие знания в области стартапов, инвестиций и бизнес-развития
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Левая колонка - Изображение */}
          <div className="relative">
            <div className="relative aspect-square rounded-lg overflow-hidden border border-border ring-1 ring-primary/30">
              <Image
                src="/images/founder-white-bg.png" // замените на реальное имя файла (рекомендуется без пробелов)
                alt="Основатель Флагман/Tech"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>

            {/* Плавающая карточка с ключевой метрикой */}
            <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-lg p-4 shadow-lg max-w-xs">
              <p className="text-2xl font-bold text-primary">12+</p>
              <p className="text-sm text-muted-foreground">лет опыта в предпринимательстве</p>
            </div>
          </div>

          {/* Правая колонка - Достижения */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              Путь к успеху вашего бизнеса
            </h3>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <achievement.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-1">
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Статистика */}
            <div className="mt-12 grid grid-cols-2 gap-4">
              <div className="bg-card/50 border border-border rounded-lg p-4">
                <p className="text-2xl font-bold text-primary">100+</p>
                <p className="text-xs text-muted-foreground mt-1">компаний обучено</p>
              </div>
              <div className="bg-card/50 border border-border rounded-lg p-4">
                <p className="text-2xl font-bold text-primary">200M+</p>
                <p className="text-xs text-muted-foreground mt-1">привлечено инвестиций</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}