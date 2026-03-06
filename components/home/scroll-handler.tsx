'use client'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

export function ScrollHandler() {
  const searchParams = useSearchParams()

  useEffect(() => {
    const section = searchParams.get('section')
    if (section) {
      const element = document.getElementById(section)
      if (element) {
        // Даём время на рендер, затем скроллим с учётом высоты хедера
        setTimeout(() => {
          const header = document.querySelector('header')
          const headerHeight = header ? header.offsetHeight : 0
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
          const offsetPosition = elementPosition - headerHeight - 10 // 10px доп. отступа

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }, 100)
      }
    }
  }, [searchParams])

  return null
}
