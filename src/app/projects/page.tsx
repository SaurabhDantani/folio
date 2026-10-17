import type { Metadata } from 'next'
import { projects } from '@/contents/projects'
import { ProjectsContent } from '../components/ProjectsContent'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.saurabhdantani.work'

export const metadata: Metadata = {
  title: 'Projects Portfolio — Full Stack, AI Platforms, Mobile & Automation | Saurabh Dantani',
  description:
    'Explore 35+ production projects by Saurabh Dantani: AI voice platforms, App Store mobile applications, healthcare systems, enterprise CRM dashboards, and Python web scrapers built with Next.js, React, Node.js, and Python.',
  keywords: [
    'Saurabh Dantani projects',
    'AI Voice Campaign Platform',
    'Xpenly App Store',
    'Next.js Developer portfolio',
    'React Native Mobile apps',
    'Full Stack projects',
    'Python web scraping projects',
    'Healthcare management system',
    'Enterprise CRM dashboards',
    'FastAPI automation',
    'Full Stack developer Ahmedabad',
    'Freelance web developer',
  ],
  openGraph: {
    title: 'Projects Portfolio | Saurabh Dantani — Full Stack & AI Developer',
    description:
      'Explore 35+ production projects: AI platforms, App Store mobile applications, enterprise SaaS dashboards, and automation systems.',
    url: `${BASE_URL}/projects`,
    images: [
      {
        url: `${BASE_URL}/projects/calling-agent-mockup.webp`,
        width: 1200,
        height: 630,
        alt: 'Saurabh Dantani Projects Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects Portfolio | Saurabh Dantani',
    description:
      'Explore 35+ production projects: AI platforms, App Store mobile applications, enterprise SaaS dashboards, and automation systems.',
    images: [`${BASE_URL}/projects/calling-agent-mockup.webp`],
  },
  alternates: {
    canonical: `${BASE_URL}/projects`,
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: BASE_URL,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Projects',
      item: `${BASE_URL}/projects`,
    },
  ],
}

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Saurabh Dantani — Production & Featured Projects',
  description: 'Production-grade applications built for businesses worldwide.',
  numberOfItems: projects.length,
  itemListElement: projects.map((project, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: project.title,
    description: project.description,
    url: `${BASE_URL}/projects/${project.slug}`,
    image: project.image?.startsWith('http') ? project.image : `${BASE_URL}${project.image}`,
  })),
}

export default function Projects() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <ProjectsContent projects={projects} />
    </>
  )
}
