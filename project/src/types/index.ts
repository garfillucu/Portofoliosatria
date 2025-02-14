export type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  role: string;
  duration: string;
  features: string[];
  responsibilities: string[];
  challenges: string[];
  achievements: string[];
};

export type Theme = 'light' | 'dark';

export type Skill = {
  name: string;
  icon: string;
};

export type TechCategory = {
  category: string;
  skills: Skill[];
};