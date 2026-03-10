import type { Skill } from '@/types'

export const skills: Skill[] = [
  {
    id: 1,
    title: "HTML & CSS",
    description: "Semantisches HTML und modernes CSS inkl. Custom Properties, Grid & Flexbox",
    level: "Sicher",
    icon: "🎨",
    projects: [
      "Salzburg Landeswebseite",
      "WCAG 2.2 konforme Templates",
      "Responsive Layouts"
    ]
  },
  {
    id: 2,
    title: "JavaScript",
    description: "Modern ES6+, DOM Manipulation, Async/Await und API Integration",
    level: "Sicher",
    icon: "⚡",
    projects: [
      "Interaktive Komponenten",
      "Form Validation",
      "API Integration"
    ]
  },
  {
    id: 3,
    title: "React & TypeScript",
    description: "Komponenten, Hooks und TypeScript. Über dieses Portfolio und kleine Projekte lerne ich.",
    level: "Lernend",
    icon: "⚛️",
    projects: [
      "Portfolio Website",
      "Kanban Board App",
      "Riftbound Deck Builder (Riot API Integration)"
    ]
  },
  {
    id: 4,
    title: "Typo3 & WordPress",
    description: "3 Jahre Production. Fluid Templates, Plugins, Extensions.",
    level: "Sicher",
    icon: "📝",
    projects: [
      "Salzburg Landeswebseite (Typo3)",
      "Theme Customization",
      "Plugin & Extension Development"
    ]
  },
  {
    id: 6,
    title: "Accessibility (WCAG)",
    description: "Barrierefreie Webentwicklung nach WCAG 2.2 Standards",
    level: "Gut",
    icon: "♿",
    projects: [
      "Salzburg Landeswebseite (WCAG 2.2)",
      "Accessibility Audits",
      "ARIA Implementation"
    ]
  },
  {
    id: 7,
    title: "Git & Koordination",
    description: "Versionskontrolle mit Git. Erfahrung in der Koordination externer Entwickler.",
    level: "Sicher",
    icon: "🔀",
    projects: [
      "Eigenverantwortliche Code-Verwaltung",
      "Task-Delegation an externe Entwickler",
      "ddev für lokale Typo3/WordPress-Entwicklung"
    ]
  }
]