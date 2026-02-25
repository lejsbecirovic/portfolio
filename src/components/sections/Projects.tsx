'use client'

import { projects } from '@/data/projects'
import FadeIn from '@/components/ui/FadeIn'

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium tracking-wider uppercase">
              Projekte
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-16">
            <h2 id="projects-heading" className="text-4xl font-bold text-white">
              Ausgewählte Arbeiten
            </h2>
            <p className="text-white max-w-md">
              Von Landes-Websites bis zu eigenen Projekten – 
              hier sind meine relevantesten Arbeiten.
            </p>
          </div>
        </FadeIn>

        {/* Projects Grid */}
        <div className="space-y-6">
          {projects.filter(project => project.shown !== false).map((project, index) => (
            <FadeIn key={project.id} delay={0.1 * index}>
              <div className="group p-8 bg-white/5 border border-emerald-500/10 rounded-xl hover:border-emerald-400/50 transition-all">
                <div className="flex flex-wrap items-start justify-between gap-6">

                  {/* Left */}
                  <div className="flex-1 min-w-64">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-emerald-400 text-sm font-mono">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      {project.featured && (
                        <span className="text-xs px-2 py-0.5 bg-emerald-400/10 text-emerald-400 rounded-full">
                          Featured
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-slate-300 text-sm leading-relaxed mb-4">
                      {project.longDescription}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 bg-white/5 border border-emerald-500/10 text-emerald-300 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: Links */}
                  <div className="flex flex-col gap-3 ml-auto items-end">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium rounded-lg transition-all hover:scale-105 active:scale-95 w-fit"
                      >
                        <span>Live ansehen</span>
                        <span>↗</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 border border-white/20 hover:border-white/40 text-white text-sm font-medium rounded-lg transition-all hover:scale-105 active:scale-95 w-fit"
                      >
                        <span>GitHub</span>
                        <span>↗</span>
                      </a>
                    )}
                  </div>

                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
