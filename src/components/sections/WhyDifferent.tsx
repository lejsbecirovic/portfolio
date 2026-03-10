'use client'

import FadeIn from '@/components/ui/FadeIn'

export default function WhyDifferent() {
  return (
    <section
      id="why-different"
      aria-labelledby="why-different-heading"
      className="py-32 px-6 bg-white/[0.01]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-emerald-400" />
              <span className="text-emerald-400 text-sm font-medium tracking-wider uppercase">
                Warum ich gut ins Team passe
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2
              id="why-different-heading"
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Was man von mir erwarten kann {' '}
              <span className="text-sm md:text-base text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                und was nicht
              </span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="space-y-6 text-slate-300 leading-relaxed">
              <p>
                <span className="font-semibold text-white">Ich bin kein Senior,</span>{' '}
                wäre aber gerne einer. Ich habe 3 Jahre Erfahrung – aber ohne Code-Reviews, ohne festes Team, ohne Mentoren. 
                Ich habe viel gemacht, und ich weiß: Es gibt noch viel zu lernen.
              </p>
              <p>
                <span className="font-semibold text-white">Ich bin kein React-Experte,</span>{' '}
                würde aber gerne einer werden. Dieses Portfolio ist einer meiner privaten React-Projekte. Habe ich Fehler gemacht? Sicher.
                Würde ich es in 2 Jahren anders bauen? Wahrscheinlich. Aber: Ich habe es gebaut und dabei gelernt.
              </p>
              <p>
                <span className="font-semibold text-white">Ich bin nicht der beste Entwickler,</span>{' '}
                würde aber gerne von den besten lernen. Ich will in einem Team sein, in dem ich der Schlechteste bin – weil ich dann am meisten lerne.
                Wenn du jemanden suchst, der schon alles kann: Ich bin es nicht. Wenn du jemanden suchst, der lernen will: Lass uns reden.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

