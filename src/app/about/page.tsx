'use client'

import { motion } from 'framer-motion'
import { Spotlight } from '../components/ui/Spotlight'
import { HoverEffect } from '../components/ui/card-hover-effect'
import { TracingBeam } from '../components/ui/tracing-beam'
import SkillsSection from '../components/SkillsSection'

export default function About() {
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
            I’m a full-stack developer who enjoys turning complex problems into
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
              <article className="rounded-xl border border-border bg-background/60 p-6 backdrop-blur">
                <h3 className="text-lg font-semibold">
                  Full Stack Developer
                </h3>
                <p className="text-sm text-primary">
                  Future Stack Solutions • 2023 – Present
                </p>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                  <li>Developed scalable React & Node.js applications</li>
                  <li>Cut deployment time by 50% using CI/CD pipelines</li>
                  <li>Guided junior developers through code reviews</li>
                </ul>
              </article>
            </div>
          </TracingBeam>
        </section>

        {/* Education */}
        <section>
          <h2 className="mb-10 text-center text-2xl font-semibold">
            Education
          </h2>

          <HoverEffect
            items={[
              {
                title: 'Diploma in Computer Engineering',
                description:
                  'Government Polytechnic Ahmedabad • 2017 – 2020. Focused on software engineering, data structures, and modern web development.',
                // link: '#',
              },
              {
                title: 'B.Tech. in Computer Science and Engineering',
                description:
                  'Government Engineering College, Modasa • 2020 – 2023. Specialized in software engineering, algorithms, system design, and modern web development.',
                // link: '#',
              },
            ]}
          />
        </section>
      </div>
    </section>
  )
}
