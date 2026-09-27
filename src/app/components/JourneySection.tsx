'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'

const JOURNEY = [
  {
    index: '01',
    period: 'May 2026 – Present',
    year: '2026',
    isCurrent: true,
    company: 'Ambit Global Solutions',
    role: 'Senior Full-Stack & Automation Engineer',
    description:
      'Leading architecture and implementation for enterprise platforms, automated scraping pipelines, and healthcare microservices.',
    bullets: [
      'Architected a US-Based Lead Generation & CRM Platform using Express.js, Next.js, Playwright, web scraping, and automated cron jobs for BD teams.',
      'Developed backend microservices for US-Based Medical Credentialing & RCM Software with NestJS, Python, Playwright, and a Next.js dashboard.',
      'Automated complex medical billing and credentialing workflows to accelerate revenue cycle management (RCM) operations.',
    ],
    tags: [
      'Next.js',
      'Express.js',
      'Playwright',
      'Python',
      'NestJS',
      'PostgreSQL',
      'AWS',
      'Automation',
    ],
  },
  {
    index: '02',
    period: '2023 – April 2026',
    year: '2023',
    isCurrent: false,
    company: 'Future Stack Solutions',
    role: 'Full-Stack Developer & Backend Specialist',
    description:
      'Engineered real-time financial market systems, scalable REST APIs, browser automation bots, and microservices.',
    bullets: [
      'Built a Real-Time IPO Management System using NestJS, Socket.IO, TypeScript, and automated cron jobs for live stock market data processing.',
      'Engineered scalable REST APIs for a Community Management Platform using Node.js/Express, PostgreSQL, TypeORM, React, and Redux Toolkit.',
      'Designed end-to-end web scraping & browser automation systems using Playwright, Puppeteer, and Python for scheduled workflows.',
      'Developed robust backend services in .NET Core & C# alongside Node.js microservice architectures.',
      'Configured and maintained cloud server infrastructure using AWS (EC2, RDS, S3), Docker containers, Nginx reverse proxy, and PM2 process manager.',
    ],
    tags: [
      'NestJS',
      'Socket.IO',
      'Node.js',
      '.NET Core',
      'C#',
      'React',
      'Playwright',
      'AWS',
      'Docker',
      'PostgreSQL',
    ],
  },
  {
    index: '03',
    period: '2020 – 2023',
    year: '2020',
    isCurrent: false,
    company: 'Government Engineering College, Modasa',
    role: 'B.Tech. in Computer Science and Engineering',
    description:
      'Graduated with honors in Computer Science, focusing on distributed systems, data structures, algorithms, and software engineering.',
    bullets: [
      'Completed comprehensive coursework in Algorithms, Operating Systems, Database Management Systems, and Software Engineering.',
      'Developed full-stack web and real-time socket projects as core capstone deliverables.',
    ],
    tags: ['B.Tech. CSE', 'Data Structures', 'Algorithms', 'System Design'],
  },
]

export default function JourneySection() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden" id="experience">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-16">
          <div className="text-xs uppercase tracking-widest text-sky-400 font-semibold mb-3">
            Journey
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 max-w-3xl">
            Roles that compound — from scalable microservices to automation in production.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl">
            A chronological timeline of production engineering, startups, and impact.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Glowing Vertical Line */}
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-8 -translate-x-1/2 w-[2px] bg-gradient-to-b from-blue-500 via-sky-400 to-purple-500/20" />

          {/* Cards Stack */}
          <div className="space-y-12 lg:space-y-16">
            {JOURNEY.map((item, idx) => {
              const isEven = idx % 2 === 0
              return (
                <div
                  key={item.company}
                  className={`relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Central Node for Desktop */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border border-sky-400/40 bg-zinc-950 items-center justify-center z-10">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        item.isCurrent
                          ? 'bg-emerald-400 animate-ping'
                          : 'bg-sky-400'
                      }`}
                    />
                    <div
                      className={`absolute w-3 h-3 rounded-full ${
                        item.isCurrent ? 'bg-emerald-500' : 'bg-sky-400'
                      }`}
                    />
                  </div>

                  {/* Card Element */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className={`lg:col-span-6 ${
                      isEven ? 'lg:pr-12' : 'lg:col-start-7 lg:pl-12'
                    }`}
                  >
                    <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 sm:p-8 hover:border-white/20 hover:bg-white/[0.035] transition-all duration-300">
                      
                      {/* Meta Header */}
                      <div className="flex items-center justify-between gap-2 mb-4 text-xs">
                        <span className="font-mono text-zinc-400">
                          {item.index} / {item.period}
                        </span>
                        {item.isCurrent && (
                          <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-semibold flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            NOW
                          </span>
                        )}
                      </div>

                      {/* Year Subtitle */}
                      <div className="text-xs font-mono text-zinc-500 mb-1">
                        {item.year}
                      </div>

                      {/* Company Name */}
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 tracking-tight">
                        {item.company}
                      </h3>

                      {/* Position Title */}
                      <h4 className="text-sm font-semibold text-sky-400 mb-4">
                        {item.role}
                      </h4>

                      {/* Description bullets */}
                      <ul className="space-y-2 text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6 list-disc pl-4">
                        {item.bullets.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.02] text-[11px] font-medium text-zinc-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                    </div>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
