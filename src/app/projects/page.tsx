import type { Metadata } from 'next'
import { projects } from '@/contents/projects'
import { ProjectsContent } from '../components/ProjectsContent'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.saurabhdantani.work'

export const metadata: Metadata = {
  title: 'Projects — CRM, Real-Time Systems & Automation',
  description:
    'Explore production projects by Saurabh Dantani — US-Based CRM platforms, real-time IPO systems, medical credentialing software, web scraping automation, and community management portals. Built with Next.js, NestJS, .NET Core, Python, and AWS.',
  openGraph: {
    title: 'Projects by Saurabh Dantani | Full Stack & AI Developer',
    description:
      'CRM platforms, real-time systems, healthcare software, and automation tools. Built with Next.js, NestJS, .NET Core, Python.',
    url: `${BASE_URL}/projects`,
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
  name: 'Saurabh Dantani — Portfolio Projects',
  numberOfItems: projects.length,
  itemListElement: projects.map((project, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: project.title,
    description: project.description,
    url: project.githubLink || `${BASE_URL}/projects`,
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
