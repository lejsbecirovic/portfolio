export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 pt-20"
      aria-label="Einleitung"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="max-w-3xl">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-blue-400" />
            <span className="text-blue-400 text-sm font-medium tracking-wider uppercase">
              Frontend & CMS Developer
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Hi, ich bin{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Lejs Becirovic
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl">
            Ich entwickle barrierefreie, moderne Webapplikationen mit Fokus auf 
            sauberen Code und außergewöhnliche User Experience.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-all hover:scale-105 active:scale-95"
            >
              Projekte ansehen
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-white/20 hover:border-white/40 text-white font-medium rounded-lg transition-all hover:bg-white/5"
            >
              Kontakt aufnehmen
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-12 mt-16 pt-16 border-t border-white/10">
            <div>
              <div className="text-3xl font-bold text-white">2+</div>
              <div className="text-gray-400 text-sm mt-1">Jahre Erfahrung</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">WCAG</div>
              <div className="text-gray-400 text-sm mt-1">2.2 Zertifiziert</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">10+</div>
              <div className="text-gray-400 text-sm mt-1">Projekte</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}