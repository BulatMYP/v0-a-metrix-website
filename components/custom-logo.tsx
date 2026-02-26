'use client'

import Link from 'next/link'
import Image from 'next/image'

interface CustomLogoProps {
  variant?: 'header' | 'footer'
  isDark?: boolean // оставлено для совместимости, но не используется
}

export function CustomLogo({ variant = 'header' }: CustomLogoProps) {
  // Выбираем размеры в зависимости от варианта
  const imageHeight = variant === 'header' ? 40 : 30 // пикселей
  const imageClassName = variant === 'header'
    ? 'h-10 md:h-12 w-auto'  // на мобильных 40px, на десктопе 48px
    : 'h-8 w-auto'           // для футера 32px

  return (
    <Link href="/" className="inline-block shrink-0">
      <Image
        src="/images/logo_flgmnw.png"
        alt="Флагман / Tech"
        width={200}        // достаточная ширина для пропорций
        height={imageHeight}
        className={imageClassName}
        priority           // логотип грузим сразу
      />
    </Link>
  )
}
