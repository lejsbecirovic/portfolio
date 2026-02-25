export type SkillLevel = 
  | 'Gut' 
  | 'Fortgeschritten' 
  | 'Experte'

export interface Skill {
  id: number
  title: string
  description: string
  level: SkillLevel
  icon: string
  projects?: string[]
}

export interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  tags: string[]
  image?: string
  liveUrl?: string
  githubUrl?: string
  featured: boolean
  company?: string
  shown?: boolean
}

export interface Experience {
  id: number
  company: string
  role: string
  period: string
  description: string[]
  technologies: string[]
}