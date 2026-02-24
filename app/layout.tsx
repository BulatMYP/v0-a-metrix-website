import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: {
    default: 'Флагман/Tech | От первой бизнес-идеи до инвестиционного раунда',
    template: '%s | Флагман/Tech',
  },
  description: 'Курсы для начинающих предпринимателей и экспертные услуги по упаковке стартапов. Научим строить бизнес с нуля и поможем привлечь инвестиции.',
  keywords: ['курсы для предпринимателей', 'запуск стартапа', 'финансовое моделирование', 'unit-экономика', 'привлечение инвестиций', 'инвестиционное предложение', 'бизнес курсы', 'стартап обучение', 'флагман', 'flagman tech', 'бизнес-ускоритель', 'инкубатор стартапов', 'венчурное финансирование', 'питч проекта', 'бизнес-план', 'инвесторы', 'стартап курсы', 'предпринимательство', 'новая бизнес идея', 'пакаж инвестиционного предложения', 'финтех образование', 'стартап экосистема', 'инвестиции в стартапы', 'запуск бизнеса с нуля', 'как привлечь инвестиции', 'финансовое моделирование стартапа', 'unit экономика', 'LTV CAC', 'метрики стартапа', 'business model canvas', 'как подготовить питч', 'investor relations', 'раунд финансирования', 'pre-seed round', 'seed round', 'series A funding', 'стартап консультация', 'бизнес консультант', 'финансовый консультант', 'стратегическое планирование', 'бизнес развитие', 'масштабирование бизнеса', 'exit стратегия', 'IPO подготовка'],
  authors: [{ name: 'Флагман/Tech' }],
  creator: 'Флагман/Tech',
  publisher: 'Флагман/Tech',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Флагман/Tech',
    title: 'Флагман/Tech | От первой бизнес-идеи до инвестиционного раунда',
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
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Флагман/Tech",
    "alternateName": ["Flagman Tech", "Флагман", "APEX Metrical"],
    "url": "https://flgmn.tech",
    "logo": "https://flgmn.tech/logo-header.png",
    "description": "Экосистема для предпринимателей: от образовательных курсов до экспертных услуг по привлечению инвестиций.",
    "foundingDate": "2017",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+7-965-602-7624",
      "contactType": "Customer Support",
      "email": "hello@flgmn.tech"
    },
    "address": [
      {
        "@type": "PostalAddress",
        "addressCountry": "RU",
        "addressLocality": "Москва",
        "streetAddress": "улица Бакунинская 71, строение 10, офис 708"
      },
      {
        "@type": "PostalAddress",
        "addressCountry": "RU",
        "addressLocality": "Казань",
        "streetAddress": "улица Волочаевская, 6, помещение 39, офис 31"
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/flagman-tech",
      "https://www.instagram.com/flagman.tech",
      "https://t.me/flagman_tech"
    ]
  };

  return (
    <html lang="ru">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <meta name="theme-color" content="#f5f2ed" />
        <meta name="msapplication-TileColor" content="#f5f2ed" />
        <meta property="og:image" content="https://flgmn.tech/logo-header.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://flgmn.tech/logo-header.png" />
      </head>
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
