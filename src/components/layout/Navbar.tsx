'use client'

import { useState, useEffect, useRef } from 'react'

const navLinks = [
  { label: 'Über mich', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projekte', href: '#projects' },
  { label: 'Kontakt', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement | null>(null)
  const menuRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isMenuOpen || !menuRef.current) {
      return
    }

    const menuElement = menuRef.current
    const focusableElements = Array.from(
      menuElement.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])'
      )
    ).filter((el) => !el.hasAttribute('aria-hidden'))

    if (focusableElements.length > 0) {
      focusableElements[0].focus()
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
        return
      }

      if (event.key === 'Tab' && focusableElements.length > 0) {
        const firstElement = focusableElements[0]
        const lastElement = focusableElements[focusableElements.length - 1]

        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault()
          lastElement.focus()
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault()
          firstElement.focus()
        }
      }
    }

    menuElement.addEventListener('keydown', handleKeyDown)

    return () => {
      menuElement.removeEventListener('keydown', handleKeyDown)
      menuButtonRef.current?.focus()
    }
  }, [isMenuOpen])

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${isScrolled
          ? 'bg-[#0a0f0d]/90 backdrop-blur-md border-b border-emerald-500/10 py-4'
          : 'bg-transparent py-6'
        }
      `}
    >
      <nav
        className="max-w-6xl mx-auto px-6 flex items-center justify-between"
        aria-label="Hauptnavigation"
      >
        {/* Logo */}
        <a
          href="#"
          className="text-xl font-bold text-white hover:text-emerald-400 transition-colors"
        >
          LB<span className="text-emerald-400">.</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-white hover:text-emerald-300 transition-colors text-sm font-medium relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:block px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-emerald-500/20"
        >
          Kontakt aufnehmen
        </a>

        {/* Mobile Menu Button */}
        <button
          id="mobile-menu-button"
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
          ref={menuButtonRef}
        >
          <span aria-hidden="true">{isMenuOpen ? '✕' : '☰'}</span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          role="menu"
          aria-labelledby="mobile-menu-button"
          className="md:hidden bg-[#0a0f0d] border-t border-emerald-500/10 px-6 py-4"
          ref={menuRef}
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-white hover:text-emerald-300 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
