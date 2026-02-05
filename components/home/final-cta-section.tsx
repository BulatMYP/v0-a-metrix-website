import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Calendar } from "lucide-react"

const ctaOptions = [
  {
    icon: Download,
    title: "Попробовать бесплатно",
    description: "Скачайте бесплатный шаблон для расчёта unit-экономики вашей идеи.",
    button: "Скачать шаблон",
    href: "#download"
  },
  {
    icon: Calendar,
    title: "Получить консультацию",
    description: "Обсудите ваш проект с экспертом и получите дорожную карту развития.",
    button: "Записаться",
    href: "/contact"
  }
]

export function FinalCTASection() {
  return (
    <section id="audit" className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-balance">
            Сделайте первый шаг к бизнесу вашей мечты
          </h2>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
          {ctaOptions.map((option) => (
            <Card key={option.title} className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-foreground/10">
                  <option.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl text-primary-foreground">{option.title}</CardTitle>
                <CardDescription className="text-primary-foreground/70">
                  {option.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="secondary" 
                  className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90" 
                  asChild
                >
                  <Link href={option.href}>{option.button}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
