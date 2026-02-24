'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface CustomLogoProps {
  variant?: 'header' | 'footer'
  isDark?: boolean
}

export function CustomLogo({ variant = 'header', isDark = true }: CustomLogoProps) {
  const pathname = usePathname()
  
  // Determine colors based on background context
  const flagmanColor = isDark ? '#FFFFFF' : '#0D1B2A'
  const techColor = '#EF4444' // Red accent (always red)
  const textColor = isDark ? '#8A9BA5' : '#5A7A8F' // Gray text (adapts)

  if (variant === 'footer') {
    return (
      <Link href="/" className="inline-block">
        <div className="flex flex-col gap-0.5">
          <div className="flex items-baseline gap-1">
            <span
              style={{
                fontSize: '24px',
                fontWeight: 700,
                color: flagmanColor,
                fontFamily: 'Inter, Helvetica, Arial, sans-serif',
                letterSpacing: '-0.5px',
              }}
            >
              ФЛАГМАН
            </span>
            <span
              style={{
                fontSize: '18px',
                fontWeight: 500,
                color: techColor,
                fontFamily: 'Inter, Helvetica, Arial, sans-serif',
              }}
            >
              /Tech
            </span>
          </div>
        </div>
      </Link>
    )
  }

  // Header variant (larger)
  return (
    <Link href="/" className="inline-block">
      <div className="flex flex-col gap-1">
        <div className="flex items-baseline gap-1.5">
          <span
            style={{
              fontSize: '48px',
              fontWeight: 700,
              color: flagmanColor,
              fontFamily: 'Inter, Helvetica, Arial, sans-serif',
              letterSpacing: '-1px',
              lineHeight: 1,
            }}
          >
            ФЛАГМАН
          </span>
          <span
            style={{
              fontSize: '36px',
              fontWeight: 500,
              color: techColor,
              fontFamily: 'Inter, Helvetica, Arial, sans-serif',
              lineHeight: 1,
            }}
          >
            /Tech
          </span>
        </div>
        <span
          style={{
            fontSize: '18px',
            fontWeight: 400,
            color: textColor,
            fontFamily: 'Inter, Helvetica, Arial, sans-serif',
          }}
        >
          Бизнес-акселератор
        </span>
        <span
          style={{
            fontSize: '14px',
            fontWeight: 400,
            color: '#5A7A8F',
            fontFamily: 'Inter, Helvetica, Arial, sans-serif',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}
        >
          от APEX METRICAL
        </span>
      </div>
    </Link>
  )
}
