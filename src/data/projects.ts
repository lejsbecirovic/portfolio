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
    title: "Kanban Board App",
    description: "Modernes Kanban-Board mit React, TypeScript und Firebase",
    longDescription: "Vollständig reaktive Kanban-Board-Anwendung mit Echtzeit-Updates via Firebase. Features: Drag & Drop Task-Management, Daily Board, Statistik-Dashboard, Priorisierungssystem (P1-P3), Dark Mode, responsive Design und sichere Authentifizierung. Entwickelt mit React, TypeScript, Vite als Build-Tool und TailwindCSS für das Styling.",
    tags: ["React", "TypeScript", "Firebase", "Vite", "TailwindCSS"],
    liveUrl: "https://kanban-board-vite-umber.vercel.app/",
    githubUrl: "https://github.com/lejsbecirovic/kanban-board-vite",
    featured: true,
    shown: false
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Persönliche Portfolio-Website mit React, Next.js und TypeScript",
    longDescription: "Moderne Portfolio-Website gebaut mit Next.js, TypeScript und Tailwind CSS. Fokus auf Performance, Accessibility und sauberem Code.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/lejsbecirovic/portfolio",
    featured: true
  },
  {
    id: 4,
    title: "Accessible Component Library",
    description: "Barrierefreie React Komponenten nach WCAG 2.2",
    longDescription: "Eine Sammlung wiederverwendbarer, vollständig barrierefreier React-Komponenten. Jede Komponente ist nach WCAG 2.2 getestet und dokumentiert.",
    tags: ["React", "TypeScript", "Accessibility", "Storybook"],
    githubUrl: "https://github.com/lejsbecirovic",
    featured: true,
    shown: false
  },
  {
    id: 5,
    title: "Diverse CMS-Projekte",
    description: "12+ WordPress & Typo3 Websites für verschiedene Kunden",
    longDescription: "Umsetzung von Landingpages, Corporate Websites, E-Commerce-Lösungen und Custom Themes. Von kleinen 5-Seiten-Sites bis zu größeren Projekten mit WooCommerce-Integration. Eigenverantwortliche Entwicklung, Wartung und Weiterentwicklung.",
    tags: ["WordPress", "Typo3", "E-Commerce", "Custom Themes", "Maintenance", "Performance Optimization", "SEO"],
    featured: false,
    shown: true
  }
]