import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: {
    default: 'APEX Metrical | От первой бизнес-идеи до инвестиционного раунда',
    template: '%s | APEX Metrical',
  },
  description: 'Курсы для начинающих предпринимателей и экспертные услуги по упаковке стартапов. Научим строить бизнес с нуля и поможем привлечь инвестиции.',
  keywords: ['курсы для предпринимателей', 'запуск стартапа', 'финансовое моделирование', 'unit-экономика', 'привлечение инвестиций', 'инвестиционное предложение', 'бизнес курсы', 'стартап обучение'],
  authors: [{ name: 'APEX Metrical' }],
  creator: 'APEX Metrical',
  publisher: 'APEX Metrical',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: 'https://90f1661d-2ff4-4f29-b07c-0e47453ca691.selstorage.ru/site1031578/d068ce38-de60-456e-b2be-3110970e4ada/d068ce38-de60-456e-b2be-3110970e4ada-13592320.png',
    apple: 'https://90f1661d-2ff4-4f29-b07c-0e47453ca691.selstorage.ru/site1031578/d068ce38-de60-456e-b2be-3110970e4ada/d068ce38-de60-456e-b2be-3110970e4ada-13592320.png',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: 'APEX Metrical',
    title: 'APEX Metrical | От первой бизнес-идеи до инвестиционного раунда',
    description: 'Курсы для начинающих предпринимателей и экспертные услуги по упаковке стартапов.',
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#f5f2ed',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
