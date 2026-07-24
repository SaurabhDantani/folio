import type { Metadata } from 'next'
import { projects } from '@/contents/projects'
import { ProjectsContent } from '../components/ProjectsContent'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Explore projects built by Saurabh Dantani — including e-commerce platforms, real-time chat applications, and portfolio websites using React, Next.js, Node.js, and TypeScript.',
  openGraph: {
    title: 'Projects by Saurabh Dantani | Full Stack Developer',
    description:
      'E-commerce platforms, real-time chat apps, and more. Built with React, Next.js, Node.js, TypeScript.',
  },
}

export default function Projects() {
  return <ProjectsContent projects={projects} />
}
