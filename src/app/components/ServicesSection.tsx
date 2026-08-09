'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  CodeXml,
  LayoutDashboard,
  Bot,
  Zap,
  Cloud,
  Briefcase,
  Check,
  ArrowRight,
} from 'lucide-react'
import Link from 'next/link'

const SERVICES = [
  {
    icon: CodeXml,
    title: 'Custom Web Apps & SaaS Platforms',
    description:
      'Full-stack web applications and SaaS platforms built with Next.js, React, TypeScript, and Node.js. Optimized for speed, user experience, and scalability.',
    highlights: [
      'Next.js & React.js frontend development',
      'SaaS product architecture & multi-tenant setups',
      'TypeScript type safety & clean code standard',
      'Component design systems & modern UI/UX',
    ],
    badge: 'Frontend & SaaS',
  },
  {
    icon: LayoutDashboard,
    title: 'CRM & Admin Dashboards',
    description:
      'Custom CRM systems, business intelligence dashboards, and management portals tailored for BD, sales, and operations teams.',
    highlights: [
      'Lead generation & CRM workflows',
      'Role-based access control & permission matrix',
      'Real-time data visualization & reporting',
      'Internal tool & admin panel engineering',
    ],
    badge: 'CRM & Analytics',
  },
  {
    icon: Zap,
    title: 'REST APIs & Backend Systems',
    description:
      'Scalable backend services, RESTful APIs, and microservices engineered using Node.js, NestJS, Express.js, and .NET Core / C# ecosystems.',
    highlights: [
      'Node.js, Express & NestJS microservices',
      '.NET Core & C# backend services',
      'PostgreSQL, MongoDB & MSSQL database design',
      'Secure authentication & API middleware',
    ],
    badge: 'Backend & APIs',
  },
  {
    icon: Bot,
    title: 'Web Scraping & Business Automation',
    description:
      'Automated web data extraction, browser automation, and scheduled cron workflows powered by Python, Playwright, and Puppeteer.',
    highlights: [
      'Playwright & Puppeteer browser automation',
      'Python data extraction & scraping pipelines',
      'Automated scheduled cron job workflows',
      'Medical RCM & BD lead scraping automation',
    ],
    badge: 'Automation',
  },
  {
    icon: Cloud,
    title: 'AWS Deployment & DevOps',
    description:
      'Robust cloud infrastructure setup, containerization, server deployment, and continuous monitoring for production applications.',
    highlights: [
      'AWS EC2, RDS & S3 infrastructure setup',
      'Docker containerization & deployment',
      'Nginx reverse proxy & SSL configuration',
      'PM2 process management & uptime monitoring',
    ],
    badge: 'Cloud & DevOps',
  },
  {
    icon: Briefcase,
    title: 'Real-Time Apps & Freelance Work',
    description:
      'Real-time WebSocket applications, IPO market systems, and freelance tech engineering for startups, agencies, and international clients.',
    highlights: [
      'Socket.IO live data streaming & market feeds',
      'End-to-end MVP building for startups',
      'Existing application upgrades & API refactoring',
      'Available for direct freelance contracts',
    ],
    badge: 'Freelance & Sockets',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-28 relative overflow-hidden" aria-labelledby="services-heading">
      {/* Background glow ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 id="services-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">
            Services &amp; Solutions<span className="text-blue-500">.</span>
          </h2>
          <div className="flex gap-1.5 justify-center mb-4">
            <div className="h-1 w-10 bg-blue-500 rounded-full" />
            <div className="h-1 w-3 bg-blue-500/40 rounded-full" />
            <div className="h-1 w-1.5 bg-blue-500/20 rounded-full" />
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Freelance web development, AI integration, cross-platform apps &amp; technical consulting for startups, founders, and enterprises globally.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="glass-card card-hover-lift p-6 relative flex flex-col justify-between group overflow-hidden"
              >
                {/* Accent top gradient on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Top Bar: Icon + Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-blue-600 dark:text-blue-400">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-2 mb-6">
                    {service.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-gray-700 dark:text-gray-300">
                        <Check className="w-4 h-4 text-blue-500 dark:text-blue-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA Link */}
                <div className="pt-4 border-t border-gray-200 dark:border-white/[0.06] flex items-center justify-between">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors"
                  >
                    <span>Discuss Project</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
