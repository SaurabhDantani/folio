import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { projects } from '@/contents/projects'
import { ArrowLeft, ExternalLink, Github, CheckCircle2 } from 'lucide-react'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.saurabhdantani.work'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} | Saurabh Dantani`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Saurabh Dantani`,
      description: project.description,
      url: `${BASE_URL}/projects/${project.slug}`,
      images: project.image ? [{ url: project.image, width: 1200, height: 630, alt: project.title }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Saurabh Dantani`,
      description: project.description,
      images: project.image ? [project.image] : [],
    },
    alternates: {
      canonical: `${BASE_URL}/projects/${project.slug}`,
    },
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  const projectSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.title,
    description: project.longDescription || project.description,
    applicationCategory: project.category,
    operatingSystem: 'Any',
    author: {
      '@type': 'Person',
      name: 'Saurabh Dantani',
      url: BASE_URL,
    },
    url: `${BASE_URL}/projects/${project.slug}`,
    ...(project.image && { image: project.image.startsWith('http') ? project.image : `${BASE_URL}${project.image}` }),
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
      {
        '@type': 'ListItem',
        position: 3,
        name: project.title,
        item: `${BASE_URL}/projects/${project.slug}`,
      },
    ],
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#09090b]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Header */}
      <div className="bg-white dark:bg-zinc-950 border-b border-slate-200 dark:border-white/10">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 py-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium">
              {project.category}
            </span>
            {project.metric && (
              <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-medium">
                {project.metric}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
            {project.title}
          </h1>

          <p className="text-lg text-slate-600 dark:text-zinc-400 leading-relaxed">
            {project.longDescription || project.description}
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 mt-6">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium text-sm hover:opacity-90 transition-opacity"
              >
                <Github className="w-4 h-4" />
                View on GitHub
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.04] text-slate-700 dark:text-white font-medium text-sm hover:bg-slate-50 dark:hover:bg-white/[0.08] transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Project Image */}
        {project.image && (
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 mb-12 bg-slate-100 dark:bg-zinc-900">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
        )}

        {/* Technologies */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies?.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] text-sm text-slate-700 dark:text-zinc-300 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Challenges */}
        {project.challenges && project.challenges.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Challenges</h2>
            <ul className="space-y-3">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-600 dark:text-zinc-400">
                  <span className="w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    !
                  </span>
                  <span className="leading-relaxed">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Results */}
        {project.results && project.results.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Results & Impact</h2>
            <ul className="space-y-3">
              {project.results.map((result, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-600 dark:text-zinc-400">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{result}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-sky-500 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">Need a Similar Project?</h3>
          <p className="text-blue-100 mb-6">
            I can help you build scalable web applications, automation systems, and real-time platforms.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-blue-600 font-semibold hover:bg-blue-50 transition-colors"
          >
            Get in Touch
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  )
}
