'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Layers,
  Server,
  Database,
  Bot,
  Cloud,
} from 'lucide-react'

interface SkillItem {
  name: string
  percentage: number
  level: 'Expert' | 'Advanced'
}

const CATEGORIES: {
  id: string
  label: string
  icon: any
  skills: SkillItem[]
}[] = [
  {
    id: 'frontend',
    label: 'Frontend Development',
    icon: Layers,
    skills: [
      { name: 'React.js', percentage: 95, level: 'Expert' },
      { name: 'Next.js', percentage: 92, level: 'Expert' },
      { name: 'TypeScript', percentage: 90, level: 'Expert' },
      { name: 'JavaScript (ES6+)', percentage: 95, level: 'Expert' },
      { name: 'Tailwind CSS', percentage: 92, level: 'Expert' },
      { name: 'HTML5 & CSS3', percentage: 95, level: 'Expert' },
      { name: 'Redux Toolkit', percentage: 88, level: 'Advanced' },
      { name: 'Framer Motion', percentage: 85, level: 'Advanced' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend Development',
    icon: Server,
    skills: [
      { name: 'Node.js', percentage: 92, level: 'Expert' },
      { name: 'NestJS', percentage: 90, level: 'Expert' },
      { name: 'Express.js', percentage: 92, level: 'Expert' },
      { name: '.NET Core & C#', percentage: 85, level: 'Advanced' },
      { name: 'RESTful API Architecture', percentage: 95, level: 'Expert' },
      { name: 'Socket.IO / WebSockets', percentage: 88, level: 'Advanced' },
      { name: 'TypeORM & ORMs', percentage: 88, level: 'Advanced' },
      { name: 'Microservices Design', percentage: 86, level: 'Advanced' },
    ],
  },
  {
    id: 'database',
    label: 'Database & Storage',
    icon: Database,
    skills: [
      { name: 'PostgreSQL', percentage: 90, level: 'Expert' },
      { name: 'MongoDB', percentage: 88, level: 'Advanced' },
      { name: 'MSSQL / SQL Server', percentage: 85, level: 'Advanced' },
      { name: 'Redis Caching', percentage: 82, level: 'Advanced' },
      { name: 'Database Query Optimization', percentage: 88, level: 'Advanced' },
      { name: 'Data Modeling & Schemas', percentage: 90, level: 'Expert' },
    ],
  },
  {
    id: 'automation',
    label: 'Automation & Scraping',
    icon: Bot,
    skills: [
      { name: 'Python', percentage: 90, level: 'Expert' },
      { name: 'Playwright', percentage: 92, level: 'Expert' },
      { name: 'Puppeteer', percentage: 88, level: 'Advanced' },
      { name: 'Web Scraping Pipelines', percentage: 92, level: 'Expert' },
      { name: 'Automated Cron Jobs', percentage: 90, level: 'Expert' },
      { name: 'Proxy & Anti-Detect Handling', percentage: 88, level: 'Advanced' },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & DevOps',
    icon: Cloud,
    skills: [
      { name: 'AWS (EC2, S3, RDS)', percentage: 86, level: 'Advanced' },
      { name: 'Docker Containerization', percentage: 85, level: 'Advanced' },
      { name: 'Nginx Reverse Proxy', percentage: 85, level: 'Advanced' },
      { name: 'PM2 Process Manager', percentage: 90, level: 'Expert' },
      { name: 'CI/CD Pipelines & GitHub Actions', percentage: 84, level: 'Advanced' },
      { name: 'Linux Server Administration', percentage: 85, level: 'Advanced' },
    ],
  },
]

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState('frontend')
  const currentCategory = CATEGORIES.find((c) => c.id === activeTab) || CATEGORIES[0]

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden" id="skills">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-12">
          <div className="text-xs uppercase tracking-widest text-sky-600 dark:text-sky-400 font-semibold mb-3">
            Skills
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 max-w-2xl">
            Technical expertise across the entire stack.
          </h2>
          <p className="text-slate-600 dark:text-zinc-400 text-sm sm:text-base max-w-xl">
            Battle-tested technologies and tooling applied across production environments.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-10">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon
            const isActive = cat.id === activeTab
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? 'border border-blue-600/40 dark:border-blue-500/50 bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-white shadow-xs'
                    : 'border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/[0.05]'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-blue-600 dark:text-sky-400' : 'text-slate-500 dark:text-zinc-400'}`} />
                <span>{cat.label}</span>
              </button>
            )
          })}
        </div>

        {/* 4-Column Progress Bar Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {currentCategory.skills.map((skill) => (
              <div
                key={skill.name}
                className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] p-5 hover:border-slate-300 dark:hover:border-white/20 hover:bg-slate-50/50 dark:hover:bg-white/[0.035] transition-all shadow-xs"
              >
                {/* Top: Name & Percentage */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-bold text-sm text-slate-900 dark:text-white tracking-tight">
                    {skill.name}
                  </span>
                  <span className="text-xs font-semibold text-sky-600 dark:text-sky-400">
                    {skill.percentage}%
                  </span>
                </div>

                {/* Middle: Progress Bar */}
                <div className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-white/10 overflow-hidden mb-3">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-400"
                  />
                </div>

                {/* Bottom: Level */}
                <div className="text-[11px] text-slate-500 dark:text-zinc-500 font-medium">
                  {skill.level}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Stats Counter Bar */}
        <div className="flex flex-wrap gap-8 sm:gap-14 pt-10 mt-10 border-t border-slate-200/80 dark:border-white/[0.06]">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">25+</div>
            <div className="text-xs text-slate-600 dark:text-zinc-400 font-medium mt-1">Technologies</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">5</div>
            <div className="text-xs text-slate-600 dark:text-zinc-400 font-medium mt-1">Categories</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">15+</div>
            <div className="text-xs text-slate-600 dark:text-zinc-400 font-medium mt-1">Expert Level</div>
          </div>
        </div>

      </div>
    </section>
  )
}
