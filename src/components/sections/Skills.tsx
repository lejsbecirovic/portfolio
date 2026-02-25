'use client'

import { skills } from '@/data/skills'
import FadeIn from '@/components/ui/FadeIn'

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-32 px-6 bg-white/[0.02]"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium tracking-wider uppercase">
              Skills
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-16">
            <h2 id="skills-heading" className="text-4xl font-bold text-white">
              Was ich mitbringe
            </h2>
            <p className="text-slate-300 max-w-md">
              3 Jahre Berufserfahrung, kontinuierliches Lernen und 
              ein starker Fokus auf Code-Qualität.
            </p>
          </div>
        </FadeIn>

        {/* Skills Grid with Stagger */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <FadeIn key={skill.id} delay={0.1 * (index % 3)}>
              <div className="h-full p-6 bg-white/5 border border-emerald-500/10 rounded-xl hover:border-emerald-400/50 transition-all hover:-translate-y-1 group">
                {/* Icon & Title */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{skill.icon}</span>
                  <div>
                    <h3 className="text-white font-semibold">{skill.title}</h3>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${getLevelStyle(skill.level)}`}>
                      {skill.level}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white text-sm leading-relaxed mb-4">
                  {skill.description}
                </p>

                {/* Projects */}
                {skill.projects && skill.projects.length > 0 && (
                  <ul className="space-y-1">
                    {skill.projects.map((project, i) => (
                      <li
                        key={i}
                        className="text-xs text-slate-300 flex items-center gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-emerald-400 flex-shrink-0" />
                        {project}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

function getLevelStyle(level: string): string {
  switch (level) {
    case 'Experte':
      return 'bg-green-400/10 text-green-400'
    case 'Fortgeschritten':
      return 'bg-emerald-400/10 text-emerald-400'
    case 'Gut':
      return 'bg-yellow-400/10 text-yellow-400'
    case 'Anfänger':
      return 'bg-emerald-300/10 text-emerald-300'
    default:
      return 'bg-emerald-300/10 text-emerald-300'
  }
}
