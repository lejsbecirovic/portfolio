import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 1,
    title: "Land Salzburg Website",
    description: "Barrierefreie Landes-Website mit WCAG 2.2 Konformität",
    longDescription: "Frontend-Umsetzung der offiziellen Website des Landes Salzburg als Angestellter bei IXSOL GmbH. Vollständige WCAG 2.2 Implementierung, Template-Entwicklung mit Typo3 Fluid Engine und enge Zusammenarbeit mit dem Design-Team und weiteren Entwicklern.",
    tags: ["Typo3", "HTML/CSS", "WCAG 2.2", "Accessibility", "Fluid Templates"],
    liveUrl: "https://www.salzburg.gv.at",
    featured: true,
    company: "IXSOL GmbH"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "Persönliche Portfolio-Website mit React, Next.js und TypeScript",
    longDescription: "Moderne Portfolio-Website gebaut mit Next.js, TypeScript und Tailwind CSS. Fokus auf Performance, Accessibility und sauberem Code.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/deinname/portfolio",
    featured: true
  },
  {
    id: 3,
    title: "Accessible Component Library",
    description: "Barrierefreie React Komponenten nach WCAG 2.2",
    longDescription: "Eine Sammlung wiederverwendbarer, vollständig barrierefreier React-Komponenten. Jede Komponente ist nach WCAG 2.2 getestet und dokumentiert.",
    tags: ["React", "TypeScript", "Accessibility", "Storybook"],
    githubUrl: "https://github.com/deinname/component-library",
    featured: true
  }
]