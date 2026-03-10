import FadeIn from '@/components/ui/FadeIn'

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left: Text */}
          <div>
            <FadeIn>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-emerald-400" />
                <span className="text-emerald-400 text-sm font-medium tracking-wider uppercase">
                  Über mich
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 id="about-heading" className="text-4xl font-bold text-white mb-6">
                Leidenschaft für sauberen,
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  {' '}barrierefreien Code
                </span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Nach meinem Abschluss an der HTL (Informatik) habe ich 3 Jahre als Webentwickler mit Typo3 und WordPress gearbeitet – 
                  zuerst eher chaotisch, später in klareren Strukturen.
                </p>
                <p>
                  Am meisten gemacht habe ich Frontend (Templates, Markup, Styling), Barrierefreiheit (WCAG) sowie Plugins, 
                  Extensions und Shortcodes – je nach Projekt in Typo3 oder WordPress.
                </p>
                <p>
                  Mein größtes Projekt war die Mitarbeit an der Website des Landes Salzburg (Typo3, WCAG 2.2).
                  Dort war ich im Frontend-Team für Templates, Komponenten und Accessibility-Details zuständig.
                </p>
                <p>
                  React, TypeScript und Next.js nutze ich seit ein paar Monaten bewusst zum Lernen –
                  dieses Portfolio ist Teil davon. Ich suche ein Team, in dem ich mein CMS-Wissen einbringen
                  und modernes Frontend Schritt für Schritt aufbauen kann.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right: Info Cards with Stagger */}
          <div className="space-y-4">
            {[
              { icon: '🎯', title: 'Spezialisierung', text: 'Frontend Development mit Fokus auf Accessibility, moderne CSS-Architekturen und CMS-Integration.' },
              { icon: '♿', title: 'Accessibility First', text: 'WCAG 2.2 Expertise aus der Praxis – nicht nur Theorie. Barrierefreiheit ist für mich kein Afterthought, sondern Teil des Entwicklungsprozesses von Anfang an.' },
              { icon: '🚀', title: 'Lernbereitschaft', text: 'Aktuell vertiefe ich React, TypeScript und Next.js um moderne Frontend-Architekturen vollständig zu beherrschen.' }
            ].map((card, index) => (
              <FadeIn key={card.title} delay={0.1 * index} direction="left">
                <div className="p-6 bg-white/5 border border-emerald-500/10 rounded-xl hover:border-emerald-400/50 transition-colors">
                  <div className="text-2xl mb-3">{card.icon}</div>
                  <h3 className="text-white font-semibold mb-2">{card.title}</h3>
                  <p className="text-slate-300 text-sm">{card.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
