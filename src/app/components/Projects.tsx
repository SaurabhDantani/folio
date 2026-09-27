'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, ArrowRight, Activity, Database, Sparkles, Terminal } from 'lucide-react'
import Link from 'next/link'
import { projects } from '@/contents/projects'

export default function Projects() {
  const featuredProject = projects[0] // Lead Gen CRM
  const otherProjects = projects.slice(1, 4)

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden" id="projects" aria-labelledby="projects-heading">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Title on Left, Link on Right */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <div className="text-xs uppercase tracking-widest text-sky-400 font-semibold mb-3">
              Selected Work
            </div>
            <h2 id="projects-heading" className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Built for production, not demos.
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-400 hover:text-white transition-colors"
          >
            <span>All projects</span>
            <span>↗</span>
          </Link>
        </div>

        {/* Featured Split Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-10 mb-10 hover:border-white/20 transition-all duration-300"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Browser Mockup Window */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-white/10 bg-zinc-950 overflow-hidden shadow-2xl">
                {/* Browser Top Bar */}
                <div className="px-4 py-3 border-b border-white/10 bg-white/[0.02] flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex-1 max-w-xs mx-auto px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-zinc-400 text-center truncate">
                    https://crm.leadgeneration.app/dashboard
                  </div>
                </div>

                {/* Mockup Dashboard Content */}
                <div className="p-6 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black space-y-4">
                  {/* Metric Row */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                      <div className="text-[10px] text-zinc-400 uppercase font-medium">Scraped Leads</div>
                      <div className="text-lg font-bold text-white mt-1">1,248</div>
                      <div className="text-[10px] text-emerald-400 mt-0.5">↑ +14% today</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                      <div className="text-[10px] text-zinc-400 uppercase font-medium">Active Workers</div>
                      <div className="text-lg font-bold text-sky-400 mt-1">16 Bots</div>
                      <div className="text-[10px] text-zinc-400 mt-0.5">Proxy Rotation</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                      <div className="text-[10px] text-zinc-400 uppercase font-medium">Success Rate</div>
                      <div className="text-lg font-bold text-white mt-1">99.4%</div>
                      <div className="text-[10px] text-emerald-400 mt-0.5">Retry-safe</div>
                    </div>
                  </div>

                  {/* Mock Visual Flow */}
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                    <div className="flex items-center justify-between text-xs text-zinc-400 border-b border-white/5 pb-2">
                      <span className="font-semibold text-white">Live Scraping Queue</span>
                      <span className="text-sky-400 flex items-center gap-1">
                        <Activity className="w-3 h-3 animate-pulse" /> Live Stream
                      </span>
                    </div>
                    <div className="font-mono text-[11px] text-zinc-400 space-y-1">
                      <p><span className="text-emerald-400">[200 OK]</span> Extracted 45 contacts · Google Maps &amp; Directories</p>
                      <p><span className="text-sky-400">[SYNC]</span> Synced to PostgreSQL CRM database</p>
                      <p><span className="text-purple-400">[CRON]</span> Automated notification sent to BD team</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Project Details */}
            <div className="lg:col-span-5 space-y-4">
              {/* Badges */}
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-sky-400 font-semibold text-xs">
                  {featuredProject.metric}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-xs">
                  Full Stack SaaS
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {featuredProject.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {featuredProject.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {(featuredProject.technologies || []).map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.02] text-xs font-medium text-zinc-400"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-6 pt-4 border-t border-white/[0.06]">
                <a
                  href={featuredProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                >
                  <span>Live product</span>
                  <span className="text-xs">↗</span>
                </a>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-400 hover:text-white transition-colors"
                >
                  <span>Case notes →</span>
                </Link>
              </div>
            </div>

          </div>
        </motion.div>

        {/* 3-Column Secondary Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 hover:border-white/20 hover:bg-white/[0.035] transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Metric Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sky-400 font-semibold text-xs">
                    {p.metric}
                  </span>
                  <span className="text-xs text-zinc-500 font-medium">
                    {p.category}
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-sky-400 transition-colors">
                  {p.title}
                </h4>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                  {p.description}
                </p>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-white/[0.06]">
                  {(p.technologies || []).slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-full border border-white/10 bg-white/[0.02] text-[11px] font-medium text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center justify-between">
                  <a
                    href={p.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-sky-400 hover:underline"
                  >
                    <span>View project</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}