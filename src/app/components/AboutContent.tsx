'use client'

import { motion } from 'framer-motion'
import { HoverEffect } from '../components/ui/card-hover-effect'
import SkillsSection from '../components/SkillsSection'
import JourneySection from '../components/JourneySection'
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
    <section className="relative overflow-hidden pt-28 pb-20 sm:pb-32">
      {/* Ambient Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] radial-glow-blue opacity-40 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-20 text-center max-w-3xl mx-auto"
        >
          <div className="text-xs uppercase tracking-widest text-sky-400 font-semibold mb-3">
            About Me
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-4">
            A builder from Ahmedabad who ships for the world.
          </h1>
          <p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed">
            Full Stack Developer with 4+ years of professional experience building production-grade web applications, CRM platforms, web scraping automation, real-time systems, and backend microservices for startups and businesses.
          </p>
        </motion.header>

        {/* Journey / Experience Timeline */}
        <section className="mb-24" aria-labelledby="experience-heading">
          <JourneySection />
        </section>

        {/* Skills */}
        <section className="mb-24" aria-labelledby="about-skills">
          <SkillsSection />
        </section>

        {/* Education */}
        <section aria-labelledby="education-heading" className="pt-8 border-t border-white/[0.08]">
          <div className="mb-12">
            <div className="text-xs uppercase tracking-widest text-sky-400 font-semibold mb-3">
              Education
            </div>
            <h2 id="education-heading" className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Academic Background
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((item, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 hover:border-white/20 transition-all"
              >
                <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-sky-400 mb-6">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}

