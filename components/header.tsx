"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#courses", label: "Курсы (B2C)" },
  { href: "#services", label: "Услуги (B2B)" },
  { href: "#for-whom", label: "Для кого" },
  { href: "#testimonials", label: "Отзывы" },
  { href: "/about", label: "О компании" },
  { href: "/contact", label: "Контакты" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="https://90f1661d-2ff4-4f29-b07c-0e47453ca691.selstorage.ru/site1031578/d068ce38-de60-456e-b2be-3110970e4ada/d068ce38-de60-456e-b2be-3110970e4ada-13592320.png"
            alt="APEX Metrical"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <span className="text-lg font-semibold tracking-tight">APEX Metrical</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild>
            <Link href="#audit">Бесплатный аудит</Link>
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t lg:hidden">
          <nav className="flex flex-col gap-4 px-4 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-2 w-full">
              <Link href="#audit" onClick={() => setMobileMenuOpen(false)}>
                Бесплатный аудит
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
