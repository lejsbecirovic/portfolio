import type { Skill } from '@/types'

export const skills: Skill[] = [
  {
    id: 1,
    title: "HTML & CSS",
    description: "Semantisches HTML und modernes CSS inkl. Custom Properties, Grid & Flexbox",
    level: "Fortgeschritten",
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
    level: "Gut",
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
    description: "Component-basierte Entwicklung mit Hooks und Type-Safety",
    level: "Gut",
    icon: "⚛️",
    projects: [
      "Portfolio Website (dieses Projekt)",
      "Component Library (in Arbeit)"
    ]
  },
  {
    id: 4,
    title: "Typo3",
    description: "Frontend-Integration, Fluid Templates und Content Element Entwicklung",
    level: "Fortgeschritten",
    icon: "🔧",
    projects: [
      "Salzburg Landeswebseite (Großprojekt)",
      "Custom Content Elements",
      "Fluid Template Engine"
    ]
  },
  {
    id: 5,
    title: "WordPress",
    description: "Theme-Entwicklung, Custom Plugins und Shortcode-Entwicklung",
    level: "Gut",
    icon: "📝",
    projects: [
      "Custom Plugins",
      "Shortcode Entwicklung",
      "Theme Customization"
    ]
  },
  {
    id: 6,
    title: "Accessibility (WCAG)",
    description: "Barrierefreie Webentwicklung nach WCAG 2.2 Standards",
    level: "Fortgeschritten",
    icon: "♿",
    projects: [
      "Salzburg Landeswebseite (WCAG 2.2)",
      "Accessibility Audits",
      "ARIA Implementation"
    ]
  }
]