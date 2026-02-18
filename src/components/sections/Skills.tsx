import { skills } from '@/data/skills'

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-32 px-6 bg-white/[0.02]"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-px bg-blue-400" />
          <span className="text-blue-400 text-sm font-medium tracking-wider uppercase">
            Skills
          </span>
        </div>

        <div className="flex flex-wrap items-end justify-between gap-4 mb-16">
          <h2 className="text-4xl font-bold text-white">
            Was ich mitbringe
          </h2>
          <p className="text-gray-400 max-w-md">
            2 Jahre Berufserfahrung, kontinuierliches Lernen und
            ein starker Fokus auf Code-Qualität.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-blue-400/50 transition-all hover:-translate-y-1 group"
            >
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
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {skill.description}
              </p>

              {/* Projects */}
              {skill.projects && skill.projects.length > 0 && (
                <ul className="space-y-1">
                  {skill.projects.map((project, index) => (
                    <li
                      key={index}
                      className="text-xs text-gray-500 flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-blue-400 flex-shrink-0" />
                      {project}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Helper Funktion für Level-Farben
function getLevelStyle(level: string): string {
  switch (level) {
    case 'Experte':
      return 'bg-green-400/10 text-green-400'
    case 'Fortgeschritten':
      return 'bg-blue-400/10 text-blue-400'
    case 'Gut':
      return 'bg-yellow-400/10 text-yellow-400'
    case 'Anfänger':
      return 'bg-gray-400/10 text-gray-400'
    default:
      return 'bg-gray-400/10 text-gray-400'
  }
}