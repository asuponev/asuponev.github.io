export enum Endpoint {
  about = 'about',
  education = 'education',
  experience = 'experience',
  projects = 'projects',
  skills = 'skills',
}

export interface IAbout {
  fullName: string
  position: string
  description: string
  photo: string
  place: {
    country: string
    city: string
  }
  links: {
    linkedin: string
    telegram: string
    email: string
    github: string
    codewars: string
  }
}

export interface IExperience {
  id: string
  date: string
  company: string
  position: string
  description: string
}

interface SkillItem {
  label: string
  icon: string
}

export interface ISkill {
  category: string
  items: SkillItem[]
}

export interface IEducation {
  id: string
  date: string
  company: string
  position: string
  description: string
  certificate: string
}

export interface IProject {
  id: string
  title: string
  description: string
  note: string
  skills: string[]
  cover: string
  git: string
  deploy: string
}
