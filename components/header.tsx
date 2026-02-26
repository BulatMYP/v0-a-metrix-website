"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { CustomLogo } from "@/components/custom-logo"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "/?section=courses", label: "Курсы (B2C)", anchor: "#courses" },
  { href: "/?section=services", label: "Услуги (B2B)", anchor: "#services" },
  { href: "/?section=for-whom", label: "Для кого", anchor: "#for-whom" },
  { href: "/?section=testimonials", label: "Отзывы", anchor: "#testimonials" },
  { href: "/about", label: "О компании" },
  { href: "/contact", label: "Контакты" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const handleAnchorClick = (link: typeof navLinks[0]) => {
    if (pathname === '/') {
      // On homepage, just set the hash
      window.location.hash = link.anchor || link.href
    } else {
      // On other pages, navigate to home with section param
      window.location.href = `/?section=${link.anchor!.substring(1)}`
    }
    setMobileMenuOpen(false)
  }

  const handleRegularClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-auto py-3 max-w-6xl items-center justify-between px-4 md:px-6">
        <CustomLogo variant="header" />

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => {
            if (link.anchor) {
              // Anchor link: render as button with click handler
              return (
                <button
                  key={link.href}
                  onClick={() => handleAnchorClick(link)}
                  className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground cursor-pointer bg-transparent border-none p-0"
                >
                  {link.label}
                </button>
              )
            } else {
              // Regular page link: use Next.js Link
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleRegularClick}
                  className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              )
            }
          })}
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
            {navLinks.map((link) => {
              if (link.anchor) {
                return (
                  <button
                    key={link.href}
                    onClick={() => handleAnchorClick(link)}
                    className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground text-left cursor-pointer bg-transparent border-none p-0"
                  >
                    {link.label}
                  </button>
                )
              } else {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={handleRegularClick}
                    className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                )
              }
            })}
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