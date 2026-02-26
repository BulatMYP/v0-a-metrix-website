'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { MapPin, Phone, Clock, Mail } from "lucide-react"
import { CustomLogo } from "@/components/custom-logo"

const footerNavLinks = [
  { href: "/", label: "Главная" },
  { href: "#courses", label: "Курсы", anchor: "#courses" },
  { href: "#services", label: "Услуги", anchor: "#services" },
  { href: "/about", label: "О компании" },
  { href: "/contact", label: "Контакты" },
]

const additionalLinks = [
  { href: "/blog", label: "Блог" },
  { href: "/cases", label: "Кейсы" },
  { href: "/career", label: "Карьера" },
  { href: "/privacy", label: "Политика конфиденциальности" },
]

export function Footer() {
  const pathname = usePathname()

  const handleFooterNavClick = (link: typeof footerNavLinks[0]) => {
    if (pathname === '/') {
      if (link.anchor) {
        window.location.hash = link.anchor
      }
    } else if (link.anchor) {
      window.location.href = `/?section=${link.anchor.substring(1)}`
    } else {
      window.location.href = link.href
    }
  }

  return (
    <footer className="border-t bg-card">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <CustomLogo variant="footer" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Экосистема для предпринимателей: от образовательных курсов до экспертных услуг по привлечению инвестиций.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4" />
              <a href="mailto:hello@flgmn.tech" className="hover:text-foreground transition-colors">
                hello@flgmn.tech
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              www.flgmn.tech
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Навигация</h3>
            <nav className="flex flex-col gap-2">
              {footerNavLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleFooterNavClick(link)}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground text-left cursor-pointer bg-transparent border-none p-0"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                <div>
                  <a 
                    href="tel:+79656027624" 
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    +7 965 602 7624
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Пн-Пт: 10:00-19:00</span>
              </div>
            </div>
            <div className="pt-2">
              <h4 className="text-xs font-medium text-muted-foreground mb-2">Полезное</h4>
              <nav className="flex flex-col gap-1">
                {additionalLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Адреса</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  Москва, улица Бакунинская 71, строение 10, офис 708
                </span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  Казань, улица Волочаевская, 6, помещение 39, офис 31
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © 2017—2026 Флагман/Tech. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}
