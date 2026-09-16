'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'TEAM_ROSTER', href: '/', path: 'team-roster' },
  { label: 'ABOUT_PROJECT', href: '/project', path: 'about-project' },
  { label: 'PRESENTATION', href: '/project#deck', path: 'presentation' },
]

export default function Header() {
  const pathname = usePathname()
  const [time, setTime] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const updateTime = () => {
      const now = new Date()
      const hours = now.getHours()
      const minutes = now.getMinutes().toString().padStart(2, '0')
      const seconds = now.getSeconds().toString().padStart(2, '0')
      const ampm = hours >= 12 ? 'PM' : 'AM'
      const h = (hours % 12 || 12).toString().padStart(2, '0')
      setTime(`${h}:${minutes}:${seconds} ${ampm}`)
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/' || pathname === '/SWE_portfolio_website/'
    return pathname?.startsWith(href)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest border-b-2 border-on-surface retro-shadow-header">
      <div className="h-16 w-full px-gutter md:px-margin flex items-center justify-between gap-space-md">
        {/* Logo */}
        <div className="flex items-center gap-space-sm min-w-max">
          <span className="text-[20px] select-none">🚀</span>
          <span className="font-bold text-headline-sm text-on-surface uppercase tracking-wider" style={{ fontFamily: 'Space Mono, monospace', fontSize: '15px', lineHeight: '22px' }}>
            TEAM ROCKET
          </span>
          <span className="px-space-xs py-[2px] bg-primary-container text-on-primary-container font-bold border border-on-surface select-none"
            style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', lineHeight: '14px', letterSpacing: '0.08em' }}>
            v1.0.exe
          </span>
        </div>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-space-sm">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.href}
              className={`px-space-md py-space-xs uppercase tracking-wider transition-all border ${
                isActive(link.href) && !(link.href === '/project#deck')
                  ? 'bg-primary-container text-on-primary-container font-bold border-on-surface retro-shadow-sm'
                  : 'text-on-surface-variant border-transparent hover:bg-surface-container-high hover:text-on-surface'
              }`}
              style={{ fontFamily: 'Space Mono, monospace', fontSize: '12px', lineHeight: '16px', letterSpacing: '0.05em', fontWeight: '700' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-space-md">
          {/* Clock */}
          <div className="hidden sm:flex items-center gap-space-xs px-space-sm py-space-xs bg-surface-container-low border border-on-surface"
            style={{ fontFamily: 'Space Mono, monospace', fontSize: '12px', lineHeight: '16px', letterSpacing: '0.05em', fontWeight: '700' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>schedule</span>
            <span>{mounted ? time : '12:00:00 PM'}</span>
          </div>

          {/* Window controls */}
          <div className="flex items-center gap-[3px] px-space-xs py-space-xs bg-surface-container-high border border-on-surface">
            <button aria-label="Minimize"
              className="w-5 h-5 flex items-center justify-center bg-surface-container-lowest border border-on-surface hover:bg-primary-container text-on-surface retro-shadow-sm active-press"
              style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', lineHeight: '14px', letterSpacing: '0.08em', fontWeight: '700' }}>
              _
            </button>
            <button aria-label="Maximize"
              className="w-5 h-5 flex items-center justify-center bg-surface-container-lowest border border-on-surface hover:bg-primary-container text-on-surface retro-shadow-sm active-press"
              style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', lineHeight: '14px', letterSpacing: '0.08em', fontWeight: '700' }}>
              □
            </button>
            <button aria-label="Close"
              className="w-5 h-5 flex items-center justify-center bg-surface-container-lowest border border-on-surface hover:bg-error-container hover:text-on-error-container text-on-surface retro-shadow-sm active-press"
              style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', lineHeight: '14px', letterSpacing: '0.08em', fontWeight: '700' }}>
              ✕
            </button>
          </div>

          {/* Avatar */}
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center border border-on-surface">
            <span className="material-symbols-outlined text-on-primary" style={{ fontSize: '18px' }}>person</span>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      <div className="md:hidden flex items-center gap-space-xs px-gutter py-space-xs bg-surface-container border-t border-outline-variant overflow-x-auto">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            href={link.href}
            className={`whitespace-nowrap px-space-sm py-space-xs uppercase tracking-wider border ${
              isActive(link.href) && !(link.href === '/project#deck')
                ? 'bg-primary-container text-on-primary-container font-bold border-on-surface'
                : 'text-on-surface-variant border-transparent hover:bg-surface-container-high'
            }`}
            style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', lineHeight: '14px', letterSpacing: '0.08em', fontWeight: '700' }}>
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  )
}
