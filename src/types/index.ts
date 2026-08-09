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
}

export interface Blog {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
}

export interface SocialMedia {
  name: string;
  href: string;
  icon: React.ElementType;
}