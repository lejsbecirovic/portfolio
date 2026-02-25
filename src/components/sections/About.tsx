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
                  Als Frontend & CMS Developer mit 3 Jahren Erfahrung habe ich mich 
                  auf die Entwicklung barrierefreier, moderner Webapplikationen spezialisiert. 
                  Mein größtes Projekt war die Frontend-Umsetzung der offiziellen 
                  Website des Landes Salzburg – vollständig nach WCAG 2.2 Standard.
                </p>
                <p>
                  Ich arbeite am liebsten in strukturierten Teams, wo ich mich 
                  vollständig auf die Qualität des Codes konzentrieren kann. 
                  Meine Stärke liegt in der präzisen Umsetzung von Designs und 
                  der Sicherstellung von Accessibility für alle Nutzer.
                </p>
                <p>
                  Aktuell erweitere ich mein Skillset gezielt mit React, TypeScript 
                  und modernen Frontend-Frameworks um mich als vollwertiger 
                  Frontend Developer zu etablieren.
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
