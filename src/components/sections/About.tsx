export default function About() {
  return (
    <section
      id="about"
      className="py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left: Text */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-blue-400" />
              <span className="text-blue-400 text-sm font-medium tracking-wider uppercase">
                Über mich
              </span>
            </div>

            <h2 className="text-4xl font-bold text-white mb-6">
              Leidenschaft für sauberen,
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {' '}barrierefreien Code
              </span>
            </h2>

            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Als Frontend & CMS Developer mit 2 Jahren Erfahrung habe ich mich 
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
          </div>

          {/* Right: Info Cards */}
          <div className="space-y-4">

            <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-blue-400/50 transition-colors">
              <div className="text-2xl mb-3">🎯</div>
              <h3 className="text-white font-semibold mb-2">Spezialisierung</h3>
              <p className="text-gray-400 text-sm">
                Frontend Development mit Fokus auf Accessibility, 
                moderne CSS-Architekturen und CMS-Integration.
              </p>
            </div>

            <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-blue-400/50 transition-colors">
              <div className="text-2xl mb-3">♿</div>
              <h3 className="text-white font-semibold mb-2">Accessibility First</h3>
              <p className="text-gray-400 text-sm">
                WCAG 2.2 Expertise aus der Praxis – nicht nur Theorie. 
                Barrierefreiheit ist für mich kein Afterthought, sondern 
                Teil des Entwicklungsprozesses von Anfang an.
              </p>
            </div>

            <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-blue-400/50 transition-colors">
              <div className="text-2xl mb-3">🚀</div>
              <h3 className="text-white font-semibold mb-2">Lernbereitschaft</h3>
              <p className="text-gray-400 text-sm">
                Aktuell vertiefe ich React, TypeScript und Next.js um 
                moderne Frontend-Architekturen vollständig zu beherrschen.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}