'use client'

import { FaCode, FaLaptopCode, FaGraduationCap } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Spotlight } from '../components/ui/Spotlight'
import { BentoGrid, BentoGridItem } from '../components/ui/bento-grid'
import { HoverEffect } from '../components/ui/card-hover-effect'
import { TracingBeam } from '../components/ui/tracing-beam'
import SkillsSection from '../components/SkillsSection'

export default function About() {
  return (
    <section className="relative overflow-hidden">
      {/* Spotlight Background */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="purple"
      />

      <div className="container max-w-7xl mx-auto px-4 py-20 relative z-10">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-10"
        >
          About Me
        </motion.h1>

        {/* Bio */}
        <p className="max-w-3xl mx-auto text-center text-lg text-muted-foreground mb-20">
          I&apos;m a Full Stack Developer passionate about building modern,
          scalable web applications with clean UX and robust architecture.
        </p>

        <SkillsSection />

        {/* Experience — Tracing Beam */}
        <TracingBeam className="mb-28">
          <div className="space-y-12 max-w-3xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold">
                Senior Full Stack Developer
              </h3>
              <p className="text-primary text-sm mb-2">
                Company Name • 2020 – Present
              </p>
              <ul className="list-disc list-inside text-muted-foreground">
                <li>Built scalable React & Node applications</li>
                <li>Reduced deployment time by 50% via CI/CD</li>
                <li>Mentored junior developers</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Full Stack Developer
              </h3>
              <p className="text-primary text-sm mb-2">
                Previous Company • 2018 – 2020
              </p>
              <ul className="list-disc list-inside text-muted-foreground">
                <li>Developed REST APIs</li>
                <li>Optimized DB queries by 40%</li>
                <li>Built responsive UI</li>
              </ul>
            </div>
          </div>
        </TracingBeam>

        {/* Education — Hover Card */}
        <HoverEffect
          items={[
            {
              title: 'B.Sc. Computer Science',
              description:
                'University Name • 2014 – 2018. Focus on software engineering and web development.',
              link: '#',
            },
          ]}
        />
      </div>
    </section>
  )
}
