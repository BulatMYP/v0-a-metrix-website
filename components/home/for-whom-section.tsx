import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Rocket, TrendingUp, Building2, CheckCircle } from "lucide-react"

const segments = [
  {
    name: "Начинающие предприниматели (B2C)",
    icon: Rocket,
    description: "У вас есть идея или первый проект, но не хватает системных знаний по экономике, продажам и маркетингу.",
    triggers: [
      "Хочу запустить свой бизнес, но не знаю, с чего начать",
      "Пробую разные подходы, но нет стабильного результата",
      "Теряю мотивацию из-за отсутствия структуры"
    ],
    bigJob: "Запустить стабильно работающий и прибыльный бизнес, чтобы обрести финансовую независимость.",
    coreJobs: [
      "Быстро получить структурированные знания без \"воды\"",
      "Получить пошаговый план и шаблоны для немедленного применения",
      "Избежать фатальных ошибок и сэкономить время"
    ]
  },
  {
    name: "Основатели стартапов (B2B)",
    icon: TrendingUp,
    description: "Ваш IT-стартап (SaaS, маркетплейс, deep tech) растёт, и вы готовитесь к переговорам с инвесторами на раунд Seed–A.",
    triggers: [
      "Назначена встреча с фондом, а финансовая модель «сырая»",
      "Нужно убедительно обосновать оценку компании",
      "Нет ресурсов для профессиональной упаковки проекта"
    ],
    bigJob: "Успешно закрыть инвестиционный раунд на выгодных условиях для роста на 2-3 года вперёд.",
    coreJobs: [
      "Получить профессиональное финансовое моделирование «под ключ»",
      "Иметь динамическую модель для ответов на вопросы инвесторов",
      "Делегировать упаковку, чтобы сфокусироваться на продукте"
    ]
  },
  {
    name: "Растущий бизнес и стратегические сделки",
    icon: Building2,
    description: "Ваш бизнес вышел на новый уровень и требует профессионального финансового управления для масштабирования или подготовки к крупной транзакции.",
    triggers: [
      "Хочу навести порядок в управленческой отчётности, чтобы видеть реальную картину прибыльности и денежных потоков",
      "Хочу делегировать операционное управление команде, сохранив контроль через KPI и прозрачные отчёты",
      "Хочу быстро оценить финансовые последствия стратегических решений (новый филиал, продуктовая линейка)",
      "Хочу подготовить бизнес к продаже или привлечению стратегического инвестора с максимальной оценкой"
    ],
    bigJob: "Перевести бизнес из режима постоянного \"тушения пожаров\" в режим управляемого роста и завершить стратегическую транзакцию с максимальной выгодой",
    coreJobs: [
      "Внедрение автоматизированной системы управленческого учёта с наглядными дашбордами",
      "Настройка KPI-системы для эффективного контроля при делегировании",
      "Финансовое моделирование для оценки инвестиционных решений и сделок",
      "Подготовка инвестиционного меморандума и due diligence пакета",
      "Переход на международные стандарты отчётности"
    ]
  }
]

export function ForWhomSection() {
  return (
    <section id="for-whom" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-balance">
            Мы создаём ценность для каждого этапа вашего пути
          </h2>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-2">
          {segments.slice(0, 2).map((segment) => (
            <Card key={segment.name} className="relative overflow-hidden">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <segment.icon className="h-6 w-6 text-foreground" />
                </div>
                <CardTitle className="text-xl">{segment.name}</CardTitle>
                <p className="text-muted-foreground leading-relaxed">{segment.description}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium mb-3 text-muted-foreground">Знакомые ситуации:</h4>
                  <ul className="space-y-2">
                    {segment.triggers.map((trigger) => (
                      <li key={trigger} className="flex items-start gap-2 text-sm">
                        <span className="text-muted-foreground">—</span>
                        <span>{trigger}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-lg bg-secondary/50 p-4">
                  <h4 className="text-sm font-medium mb-2">Ваша главная задача:</h4>
                  <p className="text-sm text-muted-foreground">{segment.bigJob}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-3">Что вам нужно:</h4>
                  <ul className="space-y-2">
                    {segment.coreJobs.map((job) => (
                      <li key={job} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                        <span>{job}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <div className="max-w-2xl w-full">
            {(() => {
              const ThirdSegment = segments[2]
              const ThirdSegmentIcon = ThirdSegment.icon
              return (
                <Card className="relative overflow-hidden">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <ThirdSegmentIcon className="h-6 w-6 text-foreground" />
                    </div>
                    <CardTitle className="text-xl">{ThirdSegment.name}</CardTitle>
                    <p className="text-muted-foreground leading-relaxed">{ThirdSegment.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="text-sm font-medium mb-3 text-muted-foreground">Знакомые ситуации:</h4>
                      <ul className="space-y-2">
                        {ThirdSegment.triggers.map((trigger) => (
                          <li key={trigger} className="flex items-start gap-2 text-sm">
                            <span className="text-muted-foreground">—</span>
                            <span>{trigger}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-lg bg-secondary/50 p-4">
                      <h4 className="text-sm font-medium mb-2">Ваша главная задача:</h4>
                      <p className="text-sm text-muted-foreground">{ThirdSegment.bigJob}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium mb-3">Что вам нужно:</h4>
                      <ul className="space-y-2">
                        {ThirdSegment.coreJobs.map((job) => (
                          <li key={job} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                            <span>{job}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              )
            })()}
          </div>
        </div>
      </div>
    </section>
  )
}
