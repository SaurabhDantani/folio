'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  CodeXml,
  LayoutDashboard,
  Bot,
  Zap,
  Cloud,
  Radio,
  ArrowRight,
} from 'lucide-react'

type Service = {
  icon: any
  title: string
  description: string
  bullets: string[]
  link?: string
}

const SERVICES: Service[] = [
  {
    icon: CodeXml,
    title: 'Full Stack Web Development',
    description:
      'I build fast, scalable, SEO-friendly web applications with React.js, Next.js, TypeScript, and Node.js. From enterprise dashboards to multi-tenant SaaS platforms — clean architecture and production-grade performance.',
    bullets: [
      'Next.js & React.js web apps',
      'TypeScript strict type architecture',
      'Modern UI with Tailwind CSS & Framer Motion',
    ],
    link: '/services/nextjs-development',
  },
  {
    icon: Zap,
    title: 'Backend Microservices & APIs',
    description:
      'I engineer scalable RESTful APIs, high-throughput microservices, and secure databases using NestJS, Node.js, Express, and .NET Core with C#.',
    bullets: [
      'NestJS, Node.js & Express microservices',
      '.NET Core & C# backend architecture',
      'PostgreSQL, MongoDB, and MSSQL schemas',
    ],
  },
  {
    icon: Bot,
    title: 'Web Scraping & Automation',
    description:
      'I build Python backends, production web scrapers, and RPA bots — Playwright, Puppeteer, and Python data pipelines with proxy rotation, anti-detect configs, and retry-safe jobs.',
    bullets: [
      'Playwright, Puppeteer & Python scrapers',
      'Lead extraction & market data pipelines',
      'Automated scheduled cron workflows',
    ],
    link: '/services/web-scraping',
  },
  {
    icon: Radio,
    title: 'Real-Time Systems & WebSockets',
    description:
      'I develop low-latency live platforms such as real-time IPO tracking systems, live market feeds, and bi-directional notification engines powered by Socket.IO and WebSockets.',
    bullets: [
      'Low-latency WebSocket & Socket.IO streams',
      'Real-time financial & market data processing',
      'Live notification & trigger systems',
    ],
  },
  {
    icon: LayoutDashboard,
    title: 'CRM & Admin Dashboards',
    description:
      'I create specialized CRM platforms, lead generation portals, and admin dashboards for business development and operations teams, complete with RBAC permission matrices.',
    bullets: [
      'Custom CRM & BD lead management',
      'Role-based access control (RBAC)',
      'High-performance analytics dashboards',
    ],
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure & DevOps',
    description:
      'I configure and maintain reliable cloud infrastructure on AWS — EC2 instances, RDS databases, S3 storage, Docker containerization, Nginx reverse proxies, and PM2 process management.',
    bullets: [
      'AWS (EC2, RDS, S3) architecture',
      'Docker containerization & deployment',
      'Nginx reverse proxy & SSL automation',
    ],
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-28 relative overflow-hidden" aria-labelledby="services-heading">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs uppercase tracking-widest text-sky-600 dark:text-sky-400 font-semibold mb-3">
            Services
          </div>
          <h2 id="services-heading" className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 max-w-2xl">
            End-to-end engineering from concept to scale.
          </h2>
          <p className="text-slate-600 dark:text-zinc-400 text-sm sm:text-base max-w-xl">
            Clean architecture, real-time features, automated scraping pipelines, and production-grade performance.
          </p>
        </div>

        {/* 3x2 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] p-8 hover:border-slate-300 dark:hover:border-white/20 hover:bg-slate-50/50 dark:hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between group shadow-xs"
              >
                <div>
                  {/* Icon Badge */}
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-sky-600 dark:text-sky-400 mb-6 group-hover:scale-110 group-hover:border-sky-500/40 transition-all">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">
                    {service.title}
                  </h3>

                  {/* Paragraph */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Sub-offering Bullets with Blue Triangle Indicators */}
                <ul className="space-y-2 pt-4 border-t border-slate-200/80 dark:border-white/[0.06] text-xs text-slate-700 dark:text-zinc-300">
                  {service.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-sky-600 dark:text-sky-400 font-bold shrink-0 mt-0.5">▸</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                {service.link && (
                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors mt-4"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                )}
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
