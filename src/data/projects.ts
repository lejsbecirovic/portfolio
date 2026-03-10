import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 1,
    title: "Land Salzburg Website",
    description: "Barrierefreie Landes-Website mit WCAG 2.2 Konformität",
    longDescription: "Mitarbeit im Frontend-Team an der Website des Landes Salzburg (als Angestellter bei IXSOL GmbH). Meine Aufgaben: Typo3 Fluid Templates, Komponenten und Accessibility (WCAG 2.2) – in Abstimmung mit Design und anderen Entwicklern.",
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
    longDescription: "Dieses Portfolio ist mein Lernprojekt für React und Next.js. Gebaut mit Next.js, TypeScript und Tailwind – um modernes Frontend zu üben, inkl. Accessibility und sauberem Code. Der Code ist auf GitHub einsehbar.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/lejsbecirovic/portfolio",
    featured: true
  },
  {
    id: 4,
    title: "Diverse CMS-Projekte",
    description: "12+ WordPress & Typo3 Websites für verschiedene Kunden",
    longDescription: "Umsetzung von Landingpages, Corporate Websites, E-Commerce-Lösungen und Custom Themes mit WordPress und Typo3. Von kleinen Sites bis zu Projekten mit WooCommerce. Entwicklung, Wartung und Weiterentwicklung – teils eigenverantwortlich, teils im Team.",
    tags: ["WordPress", "Typo3", "E-Commerce", "Custom Themes", "Maintenance", "Performance Optimization", "SEO"],
    featured: false,
    shown: true
  },
  {
    id: 5,
    title: "Kleine Lernprojekte",
    description: "Side Projects mit React, TypeScript und modernen Frameworks",
    longDescription: "Um moderne Frameworks zu vertiefen, baue ich neben dem Portfolio kleinere Projekte – und veröffentliche sie auf GitHub. Die Sammlung wächst laufend; schau gern vorbei.",
    tags: ["React", "TypeScript", "Vite", "Learning"],
    githubUrl: "https://github.com/lejsbecirovic",
    featured: false,
    shown: true
  },
]