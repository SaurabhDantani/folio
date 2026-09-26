'use client'

import { motion } from 'framer-motion'
import { Spotlight } from '../components/ui/Spotlight'
import { HoverEffect } from '../components/ui/card-hover-effect'
import { TracingBeam } from '../components/ui/tracing-beam'
import SkillsSection from '../components/SkillsSection'
import { Briefcase, GraduationCap, User } from 'lucide-react'

interface ExperienceItem {
  title: string
  company: string
  period: string
  bullets: string[]
}

interface EducationItem {
  title: string
  description: string
}

export function AboutContent({
  experience,
  education,
}: {
  experience: ExperienceItem[]
  education: EducationItem[]
}) {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <Spotlight
        className="-top-40 left-0 md:left-1/3 md:-top-20"
        fill="purple"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-medium mb-4">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-gray-900 dark:text-white">
            About Me<span className="text-blue-500">.</span>
          </h1>
          <div className="flex gap-1.5 justify-center my-4">
            <div className="h-1 w-10 bg-blue-500 rounded-full" />
            <div className="h-1 w-3 bg-blue-500/40 rounded-full" />
            <div className="h-1 w-1.5 bg-blue-500/20 rounded-full" />
          </div>
          <p className="mx-auto mt-2 max-w-2xl text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
            Full Stack Developer with 4+ years of professional experience building production-grade web applications, CRM platforms, web scraping automation, real-time systems, and backend microservices for startups and businesses.
          </p>
        </motion.header>

        {/* Skills */}
        <section className="mb-24" aria-labelledby="about-skills">
          <SkillsSection />
        </section>

        {/* Experience */}
        <section className="mb-28" aria-labelledby="experience-heading">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-medium mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Work History</span>
            </div>
            <h2 id="experience-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
              Experience<span className="text-blue-500">.</span>
            </h2>
          </div>

          <TracingBeam>
            <div className="mx-auto max-w-3xl space-y-8">
              {experience.map((exp, i) => (
                <article
                  key={i}
                  className="glass-card p-6"
                >
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mt-1">
                    {exp.company} • {exp.period}
                  </p>
                  <ul className="mt-4 space-y-2 pl-5 text-sm text-gray-600 dark:text-gray-400 leading-relaxed list-disc">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </TracingBeam>
        </section>

        {/* Education */}
        <section aria-labelledby="education-heading">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-medium mb-3">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Academic Background</span>
            </div>
            <h2 id="education-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
              Education<span className="text-blue-500">.</span>
            </h2>
          </div>

          <HoverEffect items={education} />
        </section>
      </div>
    </section>
  )
}
