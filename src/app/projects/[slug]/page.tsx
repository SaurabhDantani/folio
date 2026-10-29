import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { projects } from '@/contents/projects'
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Sparkles,
  Layers,
} from 'lucide-react'

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

  const imageUrl = project.image?.startsWith('http')
    ? project.image
    : `${BASE_URL}${project.image}`

  return {
    title: `${project.title} — Case Study & Architecture`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Saurabh Dantani`,
      description: project.description,
      url: `${BASE_URL}/projects/${project.slug}`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${project.title} - Architectural Case Study`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Saurabh Dantani`,
      description: project.description,
      images: [imageUrl],
    },
    alternates: {
      canonical: `${BASE_URL}/projects/${project.slug}`,
    },
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  const projectIndex = projects.findIndex((p) => p.slug === slug)

  if (projectIndex === -1) {
    notFound()
  }

  const project = projects[projectIndex]
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null

  // Related projects in same or complementary category
  const relatedProjects = projects
    .filter((p) => p.slug !== project.slug && (p.category === project.category || p.featured))
    .slice(0, 3)

  const imageUrl = project.image?.startsWith('http')
    ? project.image
    : `${BASE_URL}${project.image}`

  const projectSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.title,
    description: project.longDescription || project.description,
    applicationCategory: project.category || 'DeveloperApplication',
    operatingSystem: 'Web, iOS, Android, Cloud',
    author: {
      '@type': 'Person',
      name: 'Saurabh Dantani',
      url: BASE_URL,
    },
    url: `${BASE_URL}/projects/${project.slug}`,
    image: {
      '@type': 'ImageObject',
      url: imageUrl,
      caption: `${project.title} mockup and architecture`,
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
      {
        '@type': 'ListItem',
        position: 3,
        name: project.title,
        item: `${BASE_URL}/projects/${project.slug}`,
      },
    ],
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#09090b] text-slate-900 dark:text-zinc-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Header / Hero */}
      <div className="bg-white dark:bg-zinc-950 border-b border-slate-200 dark:border-white/10 pt-10 pb-12">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Projects
          </Link>

          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold">
              {project.category || 'Full Stack'}
            </span>
            {project.metric && (
              <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-medium flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-emerald-500" />
                {project.metric}
              </span>
            )}
            {project.featured && (
              <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-black text-[11px] font-bold">
                ★ Featured
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-400 leading-relaxed mb-6">
            {project.longDescription || project.description}
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3">
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-colors shadow-sm"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-300 dark:border-white/15 bg-white dark:bg-white/[0.04] text-slate-700 dark:text-white font-medium text-sm hover:bg-slate-100 dark:hover:bg-white/[0.08] transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        {/* Project Image Mockup */}
        {project.image && (
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 mb-12 bg-zinc-950 shadow-xl">
            <Image
              src={project.image}
              alt={`${project.title} - Full Stack Architecture & Implementation`}
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
        )}

        {/* Case Study High-Level Breakdown (Problem - Solution - Result) */}
        {(project.problem || project.solution || project.result) && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {project.problem && (
              <div className="p-5 rounded-2xl border border-rose-200 dark:border-rose-900/30 bg-rose-50/50 dark:bg-rose-950/10">
                <div className="flex items-center gap-2 text-rose-700 dark:text-rose-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <AlertCircle className="w-4 h-4" />
                  <span>The Challenge</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed">
                  {project.problem}
                </p>
              </div>
            )}
            {project.solution && (
              <div className="p-5 rounded-2xl border border-blue-200 dark:border-blue-900/30 bg-blue-50/50 dark:bg-blue-950/10">
                <div className="flex items-center gap-2 text-blue-700 dark:text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Lightbulb className="w-4 h-4" />
                  <span>The Solution</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            )}
            {project.result && (
              <div className="p-5 rounded-2xl border border-emerald-200 dark:border-emerald-900/30 bg-emerald-50/50 dark:bg-emerald-950/10">
                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>The Impact</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed">
                  {project.result}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Technologies Grid */}
        <div className="mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <Layers className="w-5 h-5 text-blue-500" />
            <span>Technologies & Tools</span>
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies?.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] text-xs sm:text-sm text-slate-700 dark:text-zinc-200 font-medium shadow-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Technical Challenges */}
        {project.challenges && project.challenges.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Key Engineering Challenges
            </h2>
            <div className="space-y-3">
              {project.challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl border border-slate-200/80 dark:border-white/5 bg-white dark:bg-white/[0.02]"
                >
                  <span className="w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-sm text-slate-700 dark:text-zinc-300 leading-relaxed">
                    {challenge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Results & Deliverables */}
        {project.results && project.results.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Results & Measurable Outcomes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.results.map((result, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl border border-slate-200/80 dark:border-white/5 bg-white dark:bg-white/[0.02]"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed">
                    {result}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pagination Navigation (Prev / Next) */}
        <div className="border-t border-slate-200 dark:border-white/10 pt-8 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors w-full sm:w-auto"
            >
              <ArrowLeft className="w-4 h-4" />
              <div className="text-left">
                <div className="text-[11px] uppercase tracking-wider text-slate-400">Previous Project</div>
                <div className="font-semibold text-slate-900 dark:text-white line-clamp-1">{prevProject.title}</div>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextProject && (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="inline-flex items-center justify-end gap-2 text-sm text-slate-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors w-full sm:w-auto sm:ml-auto text-right"
            >
              <div>
                <div className="text-[11px] uppercase tracking-wider text-slate-400">Next Project</div>
                <div className="font-semibold text-slate-900 dark:text-white line-clamp-1">{nextProject.title}</div>
              </div>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="mb-14">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
              More Projects You Might Like
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedProjects.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="p-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] hover:border-blue-400/30 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-semibold text-blue-500 uppercase tracking-wider block mb-1">
                      {p.category}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors line-clamp-2 mb-2">
                      {p.title}
                    </h4>
                  </div>
                  <span className="text-xs text-blue-600 dark:text-blue-400 font-medium inline-flex items-center gap-1 mt-2">
                    Case Study →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA Card */}
        <div className="bg-gradient-to-r from-blue-600 via-sky-600 to-blue-700 rounded-3xl p-8 sm:p-10 text-center shadow-lg">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Interested in Building Something Similar?
          </h3>
          <p className="text-blue-100 text-sm sm:text-base max-w-xl mx-auto mb-6 leading-relaxed">
            I build high-scale web platforms, AI voice automation systems, App Store mobile applications, and resilient data extraction pipelines.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-blue-600 font-bold text-sm hover:bg-blue-50 transition-colors shadow-sm"
          >
            <span>Let&apos;s Discuss Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
