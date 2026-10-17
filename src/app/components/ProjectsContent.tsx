'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  FolderGit2,
  Search,
  X,
  ExternalLink,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Layers,
} from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { Project } from '@/types'

interface ProjectsContentProps {
  projects: Project[]
}

const CATEGORIES = [
  { key: 'all', label: 'All' },
  { key: 'featured', label: 'Featured' },
  { key: 'Full Stack', label: 'Full Stack' },
  { key: 'Mobile App', label: 'Mobile' },
  { key: 'Backend', label: 'Backend' },
  { key: 'Frontend', label: 'Frontend' },
]

export function ProjectsContent({ projects }: ProjectsContentProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState<string>('')

  // Calculate category counts
  const counts = useMemo(() => {
    const c: Record<string, number> = {
      all: projects.length,
      featured: projects.filter((p) => p.featured).length,
      'Full Stack': projects.filter(
        (p) => p.category === 'Full Stack' || p.category === 'CRM & Automation'
      ).length,
      'Mobile App': projects.filter((p) => p.category === 'Mobile App').length,
      Backend: projects.filter(
        (p) => p.category === 'Backend' || p.category === 'Real-Time Systems'
      ).length,
      Frontend: projects.filter((p) => p.category === 'Frontend').length,
    }
    return c
  }, [projects])

  // Filter projects by category and search query
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Category filter
      let matchesCategory = true
      if (selectedCategory === 'featured') {
        matchesCategory = Boolean(project.featured)
      } else if (selectedCategory === 'Full Stack') {
        matchesCategory =
          project.category === 'Full Stack' || project.category === 'CRM & Automation'
      } else if (selectedCategory === 'Mobile App') {
        matchesCategory = project.category === 'Mobile App'
      } else if (selectedCategory === 'Backend') {
        matchesCategory =
          project.category === 'Backend' || project.category === 'Real-Time Systems'
      } else if (selectedCategory === 'Frontend') {
        matchesCategory = project.category === 'Frontend'
      }

      if (!matchesCategory) return false

      // Search filter
      if (!searchQuery.trim()) return true
      const q = searchQuery.toLowerCase()
      const titleMatch = project.title.toLowerCase().includes(q)
      const descMatch = project.description.toLowerCase().includes(q)
      const techMatch = (project.technologies || []).some((t) =>
        t.toLowerCase().includes(q)
      )
      const metricMatch = project.metric?.toLowerCase().includes(q)
      const catMatch = project.category?.toLowerCase().includes(q)

      return titleMatch || descMatch || techMatch || metricMatch || catMatch
    })
  }, [projects, selectedCategory, searchQuery])

  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
      {/* Header section */}
      <motion.div
        className="text-center mb-12 sm:mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-4">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>Selected Work & Case Studies</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
          Featured & Production Projects<span className="text-blue-500">.</span>
        </h1>
        <div className="flex gap-1.5 justify-center mb-4">
          <div className="h-1 w-12 bg-blue-500 rounded-full" />
          <div className="h-1 w-3 bg-blue-500/40 rounded-full" />
          <div className="h-1 w-1.5 bg-blue-500/20 rounded-full" />
        </div>
        <p className="text-slate-600 dark:text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          UI mockups, architectural case studies, and code for shipped products — AI voice campaign platforms, App Store apps, enterprise CRM dashboards, and high-volume web scrapers.
        </p>
      </motion.div>

      {/* Filter and Search Bar */}
      <div className="mb-10 space-y-4">
        {/* Category Filter Pills */}
        <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.key
            const count = counts[cat.key] ?? 0
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setSelectedCategory(cat.key)}
                className={`shrink-0 rounded-full border px-4 py-2 text-xs sm:text-sm font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? 'border-blue-500/50 bg-blue-500/15 text-blue-600 dark:text-blue-300 shadow-sm'
                    : 'border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] text-slate-600 dark:text-zinc-400 hover:border-slate-300 dark:hover:border-white/20 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[11px] font-mono ${
                    isSelected ? 'text-blue-500 dark:text-blue-400' : 'text-slate-400 dark:text-zinc-500'
                  }`}
                >
                  ({count})
                </span>
              </button>
            )
          })}
        </div>

        {/* Search input with result count indicator */}
        <div className="max-w-md mx-auto relative">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by title, technology (e.g. Next.js, Python), or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-9 py-2.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/15 transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          {searchQuery && (
            <div className="mt-2 text-center text-xs text-slate-500 dark:text-zinc-400">
              Found <span className="font-semibold text-blue-600 dark:text-blue-400">{filteredProjects.length}</span> matching projects
            </div>
          )}
        </div>
      </div>

      {/* Projects Grid */}
      <AnimatePresence mode="popLayout">
        {filteredProjects.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
          >
            {filteredProjects.map((project, idx) => (
              <ProjectCard key={project.slug || project.title} project={project} index={idx} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-16 text-center rounded-3xl border border-dashed border-slate-300 dark:border-white/10 bg-white/50 dark:bg-white/[0.01]"
          >
            <Layers className="w-10 h-10 text-slate-400 mx-auto mb-3 opacity-60" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
              No matching projects found
            </h3>
            <p className="text-sm text-slate-500 dark:text-zinc-400 mb-4 max-w-sm mx-auto">
              No projects matched your search for &ldquo;{searchQuery}&rdquo;. Try another keyword or reset filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('')
                setSelectedCategory('all')
              }}
              className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20 text-xs font-semibold transition-colors"
            >
              Reset Filters
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const caseStudyUrl = `/projects/${project.slug}`

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.3) }}
      className="group flex flex-col rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-white/[0.03] overflow-hidden hover:border-blue-500/40 dark:hover:border-blue-400/30 transition-all duration-300 hover:shadow-xl dark:hover:shadow-blue-500/5 hover:-translate-y-1.5"
    >
      {/* Mockup Image Preview */}
      <div className="relative aspect-video overflow-hidden bg-zinc-950 border-b border-slate-100 dark:border-white/5">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} - Full Stack Architecture & Implementation`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading={index < 3 ? 'eager' : 'lazy'}
            priority={index < 3}
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-zinc-900 text-zinc-600">
            <Layers className="w-10 h-10 opacity-30" />
          </div>
        )}

        {/* Gradient dark overlay for badge legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

        {/* Top Badges (Category & Featured) */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 max-w-[70%] z-10">
          <span className="rounded-full border border-white/20 bg-black/60 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-semibold text-white capitalize shadow-sm">
            {project.category || 'Full Stack'}
          </span>
          {project.featured && (
            <span className="rounded-full bg-amber-400 text-black px-2.5 py-0.5 text-[10px] font-bold shadow-sm flex items-center gap-1">
              ★ Featured
            </span>
          )}
        </div>

        {/* Top Right Metric Badge */}
        {project.metric && (
          <span className="absolute top-3 right-3 max-w-[48%] truncate rounded-full border border-blue-400/30 bg-black/65 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-semibold text-blue-300 shadow-sm flex items-center gap-1">
            <Sparkles className="w-2.5 h-2.5 text-blue-400 shrink-0" />
            <span className="truncate">{project.metric}</span>
          </span>
        )}
      </div>

      {/* Card Body */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* Title */}
        <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          <Link href={caseStudyUrl}>{project.title}</Link>
        </h3>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Quick Problem - Solution - Result Highlight (if available) */}
        {(project.problem || project.solution || project.result) && (
          <div className="mb-4 p-3 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/5 space-y-1.5 text-[11px] sm:text-xs">
            {project.problem && (
              <p className="text-slate-700 dark:text-zinc-300 flex items-start gap-1.5 leading-snug">
                <span className="font-semibold text-red-600 dark:text-red-400 shrink-0">Problem:</span>
                <span className="line-clamp-1">{project.problem}</span>
              </p>
            )}
            {project.solution && (
              <p className="text-slate-700 dark:text-zinc-300 flex items-start gap-1.5 leading-snug">
                <span className="font-semibold text-blue-600 dark:text-blue-400 shrink-0">Solution:</span>
                <span className="line-clamp-1">{project.solution}</span>
              </p>
            )}
            {project.result && (
              <p className="text-slate-700 dark:text-zinc-300 flex items-start gap-1.5 leading-snug">
                <span className="font-semibold text-emerald-600 dark:text-emerald-400 shrink-0">Result:</span>
                <span className="line-clamp-1">{project.result}</span>
              </p>
            )}
          </div>
        )}

        {/* Technologies List */}
        {project.technologies && project.technologies.length > 0 && (
          <div className="mb-5 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/[0.04] px-2 py-0.5 text-[11px] font-medium text-slate-700 dark:text-zinc-300"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="px-1.5 py-0.5 text-[11px] font-medium text-slate-400 dark:text-zinc-500">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>
        )}

        {/* Bottom Action Footer */}
        <div className="mt-auto pt-3 border-t border-slate-200/80 dark:border-white/[0.08] flex items-center justify-between gap-3">
          <Link
            href={caseStudyUrl}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            <span>Case Study</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>

          <div className="flex items-center gap-3">
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-white transition-colors"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <FaGithub className="w-3.5 h-3.5" />
                <span>Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  )
}
