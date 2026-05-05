import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: {
    default: 'Флагман/Tech | Tech Бизнес-Акселератор с AI | От идеи до инвестиций',
    template: '%s | Флагман/Tech',
  },
  description: 'Tech бизнес-акселератор от APEX Metrical. Курсы для предпринимателей, экспертная поддержка стартапов, консультации по AI-интеграции и привлечение инвестиций.',
  applicationName: 'Флагман/Tech',
  referrer: 'origin-when-cross-origin',
  metadataBase: new URL('https://flgmn.tech'),
  keywords: [
    // ... (ваши ключевые слова остаются без изменений)
  ],
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Флагман/Tech | Tech Бизнес-Акселератор',
    title: 'Флагман/Tech | Tech Бизнес-Акселератор с AI | От идеи до инвестиций',
    description: 'Полный путь от идеи к инвестициям. Tech акселератор APEX Metrical с экспертизой в AI, стартап-образовании и привлечении венчурных инвестиций. Москва и Казань.',
    url: 'https://flgmn.tech',
  },
  alternates: {
    canonical: 'https://flgmn.tech',
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
    "@graph": [
      // ... (ваша schema разметка остаётся без изменений)
    ]
  };

  return (
    <html lang="ru">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        {/* Поисковые системы и индексация */}
        <meta name="theme-color" content="#f5f2ed" />
        <meta name="msapplication-TileColor" content="#f5f2ed" />
        <meta name="yandex-verification" content="YANDEX_VERIFICATION_CODE" />
        <meta name="yandex-tableau-widget" content="YANDEX_TABLEAU_WIDGET_CODE" />
        <meta name="google-site-verification" content="GOOGLE_VERIFICATION_CODE" />
        <meta name="msvalidate.01" content="BING_VERIFICATION_CODE" />
        <meta name="mailru-verification" content="MAIL_VERIFICATION_CODE" />
        <meta property="og:image" content="https://flgmn.tech/logo-header.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://flgmn.tech/logo-header.png" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Флагман/Tech" />
        <link rel="canonical" href="https://flgmn.tech" />
      </head>
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />

        {/* Скрипт интеграции Т-Банка */}
        <Script
          src="https://integrationjs.t-static.ru/integration.js"
          strategy="afterInteractive"
          onLoad={() => {
            // Инициализация после загрузки скрипта
            if (typeof window !== 'undefined' && window.PaymentIntegration) {
              window.PaymentIntegration.init({
                terminalKey: process.env.NEXT_PUBLIC_TINKOFF_TERMINAL_KEY,
                product: 'eacq',
                features: {
                  payment: {},
                  iframe: {}
                }
              }).then(() => {
                console.log('Tinkoff payment integration initialized');
              }).catch((err: any) => {
                console.error('Tinkoff init error:', err);
              });
            }
          }}
        />
      </body>
    </html>
  )
}
