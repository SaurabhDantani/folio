'use client'

import { motion } from 'framer-motion'
import { Spotlight } from '../components/ui/Spotlight'
import { HoverEffect } from '../components/ui/card-hover-effect'
import { TracingBeam } from '../components/ui/tracing-beam'
import SkillsSection from '../components/SkillsSection'

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
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            About Me
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-muted-foreground">
            I&apos;m a full-stack developer who enjoys turning complex problems into
            clean, scalable, and user-friendly web experiences.
          </p>
        </motion.header>

        {/* Skills */}
        <section className="mb-24">
          <SkillsSection />
        </section>

        {/* Experience */}
        <section className="mb-28">
          <h2 className="mb-10 text-center text-2xl font-semibold">
            Experience
          </h2>

          <TracingBeam>
            <div className="mx-auto max-w-3xl space-y-12">
              {experience.map((exp, i) => (
                <article
                  key={i}
                  className="rounded-xl border border-border bg-background/60 p-6 backdrop-blur"
                >
                  <h3 className="text-lg font-semibold">{exp.title}</h3>
                  <p className="text-sm text-primary">
                    {exp.company} • {exp.period}
                  </p>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
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
        <section>
          <h2 className="mb-10 text-center text-2xl font-semibold">
            Education
          </h2>

          <HoverEffect items={education} />
        </section>
      </div>
    </section>
  )
}
