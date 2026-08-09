'use client'

import { motion } from 'framer-motion'
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiDotnet,
  SiPostgresql,
  SiMongodb,
  SiPython,
  SiPuppeteer,
  SiDocker,
  SiNginx,
  SiAmazon,
  SiSocketdotio,
} from 'react-icons/si'
import { TbBrandCSharp } from 'react-icons/tb'
import { Bot, Clock, Server, Database, Network } from 'lucide-react'

const SKILLS = [
  {
    title: 'Frontend Development',
    description: 'Modern, responsive, and state-managed web interfaces.',
    items: [
      { name: 'React.js', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Redux', icon: SiRedux },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
    ],
  },
  {
    title: 'Backend & Microservices',
    description: 'High-performance backend systems, microservices, and REST APIs.',
    items: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express.js', icon: SiExpress },
      { name: 'NestJS', icon: SiNestjs },
      { name: '.NET Core', icon: SiDotnet },
      { name: 'C#', icon: TbBrandCSharp },
      { name: 'REST APIs', icon: Network },
    ],
  },
  {
    title: 'Database Architecture',
    description: 'Relational, document-based, and enterprise data storage.',
    items: [
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'MSSQL', icon: Database },
    ],
  },
  {
    title: 'Automation & Web Scraping',
    description: 'Automated data extraction pipelines and scheduled workflows.',
    items: [
      { name: 'Python', icon: SiPython },
      { name: 'Playwright', icon: Bot },
      { name: 'Puppeteer', icon: SiPuppeteer },
      { name: 'Cron Jobs', icon: Clock },
    ],
  },
  {
    title: 'Cloud, DevOps & Real-Time',
    description: 'Cloud deployment, containerization, server management & live sockets.',
    items: [
      { name: 'AWS (EC2/S3)', icon: SiAmazon },
      { name: 'Docker', icon: SiDocker },
      { name: 'Nginx', icon: SiNginx },
      { name: 'PM2', icon: Server },
      { name: 'Socket.IO', icon: SiSocketdotio },
    ],
  },
]

function SkillCard({
  title,
  description,
  items,
  index,
}: {
  title: string
  description: string
  items: { name: string; icon: any }[]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="glass-card card-hover-lift p-6 relative overflow-hidden group flex flex-col justify-between"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {items.map(({ name, icon: Icon }) => (
          <div
            key={name}
            className="flex flex-col items-center gap-2 p-3 rounded-xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] hover:border-blue-500/30 hover:bg-blue-500/10 transition-all duration-300 group/item"
          >
            <Icon className="h-6 w-6 text-slate-700 dark:text-gray-300 group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 transition-colors duration-300 group-hover/item:scale-110 shrink-0" />
            <span className="text-[11px] font-medium text-slate-700 dark:text-gray-300 text-center leading-tight">
              {name}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default function SkillsSection() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden" aria-labelledby="skills-heading">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 id="skills-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">
            Skills &amp; Tech Stack<span className="text-blue-500">.</span>
          </h2>
          <div className="flex gap-1.5 justify-center mb-4">
            <div className="h-1 w-10 bg-blue-500 rounded-full" />
            <div className="h-1 w-3 bg-blue-500/40 rounded-full" />
            <div className="h-1 w-1.5 bg-blue-500/20 rounded-full" />
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Comprehensive production-grade tech stack spanning frontend, backend, automation pipelines, database design, and cloud infrastructure.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((skill, index) => (
            <SkillCard key={skill.title} {...skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

