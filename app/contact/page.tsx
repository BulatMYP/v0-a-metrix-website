import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { MapPin, Phone, Clock, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Контакты",
  description: "Свяжитесь с Флагман/Tech для консультации по курсам или упаковке вашего проекта для инвесторов. Офисы в Москве и Казани.",
}

const contactInfo = [
  {
    icon: Phone,
    title: "Телефон",
    value: "+7 965 602 7624",
    href: "tel:+79656027624",
  },
  {
    icon: Clock,
    title: "Режим работы",
    value: "Пн-Пт: 10:00-19:00",
    href: null,
  },
  {
    icon: Mail,
    title: "Email",
    value: "hello@flgmn.tech",
    href: "mailto:hello@flgmn.tech",
  },
]

const offices = [
  {
    city: "Москва",
    address: "улица Бакунинская 71, строение 10, офис 708",
  },
  {
    city: "Казань",
    address: "улица Декабристов, 2, помещение "Идель- Пресс", офис 8",
  },
]

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
                Свяжитесь с нами
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Оставьте заявку, и мы свяжемся с вами в ближайшее время для обсуждения вашего проекта
              </p>
            </div>

            <div className="mt-16 grid gap-12 lg:grid-cols-5">
              {/* Contact Info */}
              <div className="space-y-8 lg:col-span-2">
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.title}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="font-medium transition-colors hover:text-muted-foreground"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-8">
                  <h2 className="text-lg font-semibold">Наши офисы</h2>
                  <div className="mt-6 space-y-6">
                    {offices.map((office, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                          <MapPin className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-medium">{office.city}</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {office.address}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="rounded-xl border bg-card p-6 md:p-8 lg:col-span-3">
                <h2 className="text-xl font-semibold">Оставить заявку</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Заполните форму, и мы свяжемся с вами в течение рабочего дня
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
