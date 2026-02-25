'use client'

import FadeIn from '@/components/ui/FadeIn'
import ContactForm from '@/components/sections/ContactForm'
import { useState } from 'react'

const CONTACT_EMAIL = 'lejs.becirovic@gmail.com'

export default function Contact() {
  const [copyStatus, setCopyStatus] = useState<string>('')

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL)
      setCopyStatus('E-Mail-Adresse wurde in die Zwischenablage kopiert.')
    } catch {
      setCopyStatus(
        'Kopieren nicht möglich. Bitte markiere die E-Mail-Adresse manuell und kopiere sie.'
      )
    } finally {
      window.setTimeout(() => setCopyStatus(''), 4000)
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-32 px-6 bg-white/[0.02]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center">

          {/* Header */}
          <FadeIn>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-px bg-emerald-400" />
              <span className="text-emerald-400 text-sm font-medium tracking-wider uppercase">
                Kontakt
              </span>
              <div className="w-8 h-px bg-emerald-400" />
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 id="contact-heading" className="text-4xl font-bold text-white mb-6">
              Lass uns zusammenarbeiten
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-white leading-relaxed mb-12">
              Ich bin aktuell offen für neue Möglichkeiten in strukturierten
              Frontend-Teams. Ob du eine Frage hast oder einfach Hallo sagen
              möchtest – mein Postfach ist offen!
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <ContactForm />
          </FadeIn>

          {/* Fallback: E-Mail-Adresse kopieren, falls API nicht funktioniert */}
          <FadeIn delay={0.4}>
            <div className="mb-16">
              <div className="flex flex-col items-center gap-3">
                <p className="text-sm text-emerald-100">
                  <span className="sr-only">E-Mail-Adresse:</span>
                  <span className="font-mono break-all">
                    {CONTACT_EMAIL}
                  </span>
                </p>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-3 px-6 py-3 bg-transparent border border-emerald-500/60 hover:bg-emerald-600/10 text-white font-medium rounded-lg transition-all hover:scale-105 active:scale-95 cursor-pointer"
                  aria-describedby="copy-email-status"
                >
                  <span>E-Mail kopieren</span>
                  <span>📋</span>
                </button>
                <p
                  id="copy-email-status"
                  aria-live="polite"
                  className="text-sm text-emerald-200 min-h-[1.25rem]"
                >
                  {copyStatus}
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Social Links */}
          <FadeIn delay={0.5}>
            <div className="flex items-center justify-center gap-6 pt-8 border-t border-emerald-500/10">
              <a
                href="https://github.com/lejsbecirovic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-emerald-300 transition-colors text-sm"
              >
                GitHub ↗
              </a>
              <a
                href="https://linkedin.com/in/lejs-becirovic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-emerald-300 transition-colors text-sm"
              >
                LinkedIn ↗
              </a>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}

