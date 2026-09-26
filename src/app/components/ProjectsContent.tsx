'use client'

import { motion } from 'framer-motion'
import { HoverEffect } from './ui/card-hover-effect'
import { Project } from '@/types'
import { FolderGit2 } from 'lucide-react'

export function ProjectsContent({ projects }: { projects: Project[] }) {
  return (
    <div className="container max-w-7xl mx-auto px-4 py-16 sm:py-24">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-medium mb-4">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>Portfolio</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-3">
          My Projects<span className="text-blue-500">.</span>
        </h1>
        <div className="flex gap-1.5 justify-center mb-4">
          <div className="h-1 w-10 bg-blue-500 rounded-full" />
          <div className="h-1 w-3 bg-blue-500/40 rounded-full" />
          <div className="h-1 w-1.5 bg-blue-500/20 rounded-full" />
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Production-grade applications built for real businesses — CRM platforms, real-time systems, healthcare software, web scraping pipelines, and community portals.
        </p>
      </motion.div>

      <HoverEffect items={projects} />
    </div>
  )
}
