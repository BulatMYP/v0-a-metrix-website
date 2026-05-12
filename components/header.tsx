"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { CustomLogo } from "@/components/custom-logo"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#courses-anchor", label: "Курсы" },
  { href: "#services", label: "Услуги" },
  { href: "#for-whom", label: "Для кого" },
  { href: "#testimonials", label: "Отзывы" },
  { href: "#about", label: "О компании" },
  { href: "#contacts", label: "Контакты" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const handleNavClick = (link: typeof navLinks[0]) => {
    if (pathname === '/') {
      // On homepage, use smooth scroll to anchor
      const element = document.querySelector(link.href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Update hash without page reload
        window.history.pushState({}, '', link.href);
      }
    } else {
      // On other pages, navigate to home with anchor
      window.location.href = `/${link.href}`;
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-auto py-3 max-w-6xl items-center justify-between px-4 md:px-6">
        <CustomLogo variant="header" />

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link)}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground cursor-pointer bg-transparent border-none p-0"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            onClick={() => {
              if (pathname === '/') {
                const element = document.querySelector('#audit');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                  window.history.pushState({}, '', '#audit');
                }
              } else {
                window.location.href = '/#audit';
              }
            }}
          >
            Бесплатный аудит
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
              <button
                key={link.href}
                onClick={() => handleNavClick(link)}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground text-left cursor-pointer bg-transparent border-none p-0"
              >
                {link.label}
              </button>
            ))}
            <Button
              className="mt-2 w-full"
              onClick={() => {
                if (pathname === '/') {
                  const element = document.querySelector('#audit');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                    window.history.pushState({}, '', '#audit');
                  }
                } else {
                  window.location.href = '/#audit';
                }
                setMobileMenuOpen(false);
              }}
            >
              Бесплатный аудит
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
