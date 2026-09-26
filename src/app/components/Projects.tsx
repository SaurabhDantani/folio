'use client'

import { projects } from '@/contents/projects'
import { motion } from 'framer-motion'
import { HoverEffect } from './ui/card-hover-effect'
import { ArrowRight, FolderGit2 } from 'lucide-react'
import Link from 'next/link'

export default function Projects() {
  // Only show featured projects on homepage
  const featuredProjects = projects.filter((p) => p.featured)

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden" aria-labelledby="projects-heading">
      {/* Background ambient */}
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-medium mb-4">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Portfolio</span>
          </div>
          <h2
            id="projects-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight"
          >
            Featured Projects<span className="text-blue-500">.</span>
          </h2>
          <div className="flex gap-1.5 justify-center mb-4">
            <div className="h-1 w-10 bg-blue-500 rounded-full" />
            <div className="h-1 w-3 bg-blue-500/40 rounded-full" />
            <div className="h-1 w-1.5 bg-blue-500/20 rounded-full" />
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Production-grade CRM platforms, real-time systems, web scraping automation, and healthcare solutions built for real businesses.
          </p>
        </motion.div>

        <HoverEffect items={featuredProjects} />

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center mt-10"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 dark:bg-white/[0.05] hover:bg-slate-200 dark:hover:bg-white/[0.1] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white font-medium text-sm transition-all duration-300 hover:scale-[1.03]"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}