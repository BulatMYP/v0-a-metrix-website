import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
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
    // AI и новые технологии
    'AI стартапы', 'искусственный интеллект бизнес', 'AI консультация', 'LLM интеграция', 'машинное обучение стартапы',
    'AI инструменты для бизнеса', 'ИИ для предпринимателей', 'генеративный ИИ в бизнесе', 'AI монетизация', 'технологические стартапы',
    'deeptech стартапы', 'SaaS с AI', 'AI продукты', 'AI-first компании', 'трансформация через ИИ',
    
    // Tech акселератор и ускорение
    'tech акселератор москва', 'бизнес-акселератор', 'стартап акселератор', 'инкубатор стартапов',
    'акселератор для tech стартапов', 'программа ускорения', 'startup accelerator Russia', 'технологический ускоритель',
    
    // Запуск и развитие
    'запуск tech стартапа', 'как запустить технологический стартап', 'разработка tech продукта',
    'стартап с нуля', 'создание стартапа', 'первая бизнес-идея', 'технологический бизнес',
    
    // Инвестиции и финансирование
    'привлечение инвестиций', 'стартап финансирование', 'венчурное финансирование', 'инвестиционный раунд',
    'seed funding', 'series A финансирование', 'венчурные инвесторы', 'питч для инвесторов',
    'инвестиционное предложение', 'как привлечь инвестиции в стартап', 'финансирование tech стартапов',
    
    // Образование и обучение
    'курсы для предпринимателей', 'бизнес-образование', 'стартап школа', 'предпринимательское образование',
    'курсы по стартапам', 'обучение запуску бизнеса', 'финансовая грамотность для основателей',
    'экспертиза в стартапах', 'mentorship программа', 'наставничество стартапов',
    
    // Консалтинг и экспертиза
    'консультация по стартапам', 'бизнес-консультант', 'стартап консалтинг', 'strategic advisory',
    'финансовое консультирование', 'бизнес-план консультация', 'модель развития бизнеса',
    
    // Метрики и аналитика
    'метрики стартапа', 'unit экономика', 'LTV CAC', 'финансовое моделирование', 'growth metrics',
    'KPI для стартапов', 'аналитика продукта', 'product metrics',
    
    // Практические темы
    'питч-дека подготовка', 'как подготовиться к питчу', 'investor relations', '募 (привлечение)',
    'стартап позиционирование', 'маркетинг стартапа', 'продажи для стартапов', 'go-to-market',
    
    // Брендированные ключевые слова
    'флагман tech', 'flagman tech', 'флагман акселератор', 'APEX Metrical', 'flgmn.tech'
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
      {
        "@type": "Organization",
        "@id": "https://flgmn.tech/#organization",
        "name": "Флагман/Tech",
        "alternateName": ["Flagman Tech", "Флагман", "APEX Metrical"],
        "url": "https://flgmn.tech",
        "logo": {
          "@type": "ImageObject",
          "url": "https://flgmn.tech/logo-header.png",
          "width": "200",
          "height": "200"
        },
        "description": "Tech бизнес-акселератор от APEX Metrical с экспертизой в AI, стартап-образовании и привлечении венчурных инвестиций.",
        "foundingDate": "2017",
        "slogan": "От первой бизнес-идеи до инвестиционного раунда",
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+7-965-602-7624",
            "contactType": "Customer Support",
            "email": "hello@flgmn.tech"
          }
        ],
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
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://flgmn.tech/#localbusiness",
        "name": "Флагман/Tech — Tech Бизнес-Акселератор",
        "url": "https://flgmn.tech",
        "telephone": "+7-965-602-7624",
        "email": "hello@flgmn.tech",
        "priceRange": "₽₽",
        "areaServed": [
          {
            "@type": "City",
            "name": "Москва"
          },
          {
            "@type": "City",
            "name": "Казань"
          }
        ],
        "knowsAbout": [
          "Стартапы",
          "Tech бизнес",
          "AI и машинное обучение",
          "Венчурное финансирование",
          "Бизнес-образование",
          "Предпринимательство"
        ]
      },
      {
        "@type": "EducationalOrganization",
        "@id": "https://flgmn.tech/#education",
        "name": "Флагман/Tech — Школа Предпринимателей",
        "url": "https://flgmn.tech",
        "description": "Курсы и программы обучения для предпринимателей и основателей стартапов",
        "teaches": [
          "Запуск стартапа",
          "Финансовое моделирование",
          "Привлечение инвестиций",
          "AI интеграция в бизнес",
          "Метрики и аналитика стартапа"
        ]
      }
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
        
        {/* Яндекс */}
        <meta name="yandex-verification" content="YANDEX_VERIFICATION_CODE" />
        <meta name="yandex-tableau-widget" content="YANDEX_TABLEAU_WIDGET_CODE" />
        
        {/* Google */}
        <meta name="google-site-verification" content="GOOGLE_VERIFICATION_CODE" />
        
        {/* Bing */}
        <meta name="msvalidate.01" content="BING_VERIFICATION_CODE" />
        
        {/* Mail.ru */}
        <meta name="mailru-verification" content="MAIL_VERIFICATION_CODE" />
        
        {/* Социальные сети */}
        <meta property="og:image" content="https://flgmn.tech/logo-header.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://flgmn.tech/logo-header.png" />
        
        {/* Дополнительные SEO теги */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Флагман/Tech" />
        <link rel="canonical" href="https://flgmn.tech" />
      </head>
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
