'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Send } from "lucide-react"

const contactMethods = [
  {
    icon: Phone,
    title: "Телефон",
    value: "+7 965 602 7624",
    href: "tel:+79656027624"
  },
  {
    icon: Mail,
    title: "Email",
    value: "hello@flgmn.tech",
    href: "mailto:hello@flgmn.tech"
  },
  {
    icon: MapPin,
    title: "Адрес (Москва)",
    value: "Улица Бакунинская 71, строение 10, офис 708",
    href: "#"
  }
]

export function ContactsSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contacts" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Свяжитесь с нами
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-balance text-foreground">
            Давайте начнём вашу историю успеха
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            У вас есть вопросы? Мы готовы помочь. Свяжитесь с нами через форму, телефон или лично в офисе.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          {contactMethods.map((method, index) => (
            <Card key={index} className="border border-border bg-card">
              <CardContent className="p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary mb-6">
                  <method.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">
                  {method.title}
                </h3>
                {method.href.startsWith('#') ? (
                  <p className="text-muted-foreground leading-relaxed">
                    {method.value}
                  </p>
                ) : (
                  <a
                    href={method.href}
                    className="text-card-foreground hover:text-primary transition-colors font-medium"
                  >
                    {method.value}
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="border border-border bg-card">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl font-semibold mb-8 text-card-foreground">
                Форма обратной связи
              </h3>

              {submitted ? (
                <div className="rounded-lg bg-green-950 border border-green-800 p-6 text-center">
                  <p className="text-green-400 font-medium">
                    ✓ Спасибо! Ваше сообщение отправлено успешно.
                  </p>
                  <p className="text-green-500 text-sm mt-2">
                    Мы свяжемся с вами в ближайшее время.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                        Ваше имя
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Иван Петров"
                        required
                        className="bg-background border-border text-foreground placeholder:text-muted-foreground/50"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="ivan@example.com"
                        required
                        className="bg-background border-border text-foreground placeholder:text-muted-foreground/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-card-foreground mb-2">
                      Телефон
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+7 (965) 602-76-24"
                      className="bg-background border-border text-foreground placeholder:text-muted-foreground/50"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                      Сообщение
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Расскажите нам о вашем проекте и целях..."
                      required
                      rows={5}
                      className="bg-background border-border text-foreground placeholder:text-muted-foreground/50 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full"
                    size="lg"
                  >
                    {isLoading ? 'Отправка...' : 'Отправить сообщение'}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 text-foreground text-center">
            Где нас найти
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Moscow Office */}
            <div className="rounded-lg overflow-hidden border border-border">
              <div className="h-80 bg-card flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="text-card-foreground font-medium">Москва</p>
                  <p className="text-sm text-muted-foreground">Интерактивная карта</p>
                </div>
              </div>
              <div className="p-6 bg-card border-t border-border">
                <h4 className="font-semibold text-card-foreground mb-2">Офис в Москве</h4>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  Улица Бакунинская 71, строение 10, офис 708
                </p>
                <p className="text-sm text-muted-foreground">
                  Пн-Пт: 10:00-19:00
                </p>
              </div>
            </div>

            {/* Kazan Office */}
            <div className="rounded-lg overflow-hidden border border-border">
              <div className="h-80 bg-card flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="text-card-foreground font-medium">Казань</p>
                  <p className="text-sm text-muted-foreground">Интерактивная карта</p>
                </div>
              </div>
              <div className="p-6 bg-card border-t border-border">
                <h4 className="font-semibold text-card-foreground mb-2">Офис в Казани</h4>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  Улица Волочаевская, 6, помещение 39, офис 31
                </p>
                <p className="text-sm text-muted-foreground">
                  Пн-Пт: 10:00-19:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}