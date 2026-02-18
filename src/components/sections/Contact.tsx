'use client'

import FadeIn from '@/components/ui/FadeIn'

export default function Contact() {
  return (
    <section
      id="contact"
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
            <h2 className="text-4xl font-bold text-white mb-6">
              Lass uns zusammenarbeiten
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-gray-400 leading-relaxed mb-12">
              Ich bin aktuell offen für neue Möglichkeiten in strukturierten 
              Frontend-Teams. Ob du eine Frage hast oder einfach Hallo sagen 
              möchtest – mein Postfach ist offen!
            </p>
          </FadeIn>

          {/* CTA */}
          <FadeIn delay={0.3}>
            <a
              href="mailto:deine@email.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-lg transition-all hover:scale-105 active:scale-95 mb-16"
            >
              <span>Email schreiben</span>
              <span>→</span>
            </a>
          </FadeIn>

          {/* Social Links */}
          <FadeIn delay={0.4}>
            <div className="flex items-center justify-center gap-6 pt-8 border-t border-emerald-500/10">
              <a
                href="https://github.com/lejsbecirovic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                GitHub ↗
              </a>
              <a
                href="https://linkedin.com/in/lejs-becirovic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-sm"
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
