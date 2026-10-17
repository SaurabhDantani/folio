export interface Project {
  title: string;
  description: string;
  technologies?: string[];
  githubLink?: string;
  demoLink?: string;
  image?: string;
  category?: string;
  metric?: string;
  featured?: boolean;
  slug?: string;
  longDescription?: string;
  problem?: string;
  solution?: string;
  result?: string;
  challenges?: string[];
  results?: string[];
  gradientFrom?: string;
  gradientTo?: string;
}

export interface Blog {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
  image?: string;
  tags?: string[];
  content?: string;
  featured?: boolean;
  description?: string;
}

export interface SocialMedia {
  name: string;
  href: string;
  icon: React.ElementType;
}