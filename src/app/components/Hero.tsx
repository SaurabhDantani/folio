'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import { Spotlight } from './ui/Spotlight'
import { socialMedia } from '@/contents/social'
import { FaDownload } from 'react-icons/fa'
import { ArrowRight, Globe, Sparkles } from 'lucide-react'

const STATS = [
  { value: '4+ Years', label: 'Experience' },
  { value: '20+', label: 'Products & Solutions' },
  { value: '15+', label: 'Tech Stack Tools' },
]

const TECH_TAGS = [
  'React.js & Next.js',
  'Node.js & NestJS',
  '.NET Core & C#',
  'Python & Playwright',
  'Puppeteer Scraping',
  'PostgreSQL & MongoDB',
  'AWS & Docker',
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28 min-h-[90vh] flex items-center">
      {/* Background Spotlight & Subtle Ambient Grid */}
      <Spotlight className="-top-40 left-0 md:left-60" fill="#3B82F6" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.4] pointer-events-none" />

      <div className="relative container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm font-medium mb-6"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span>Available for Freelance Full-Stack Projects</span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.15] mb-4">
              Hi, I&apos;m{' '}
              <span className="text-gradient">Saurabh Dantani</span>
            </h1>

            {/* Typewriter Sub-headline */}
            <div className="text-xl sm:text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-6 h-8 flex items-center justify-center lg:justify-start gap-2">
              <Sparkles className="w-5 h-5 text-blue-500 dark:text-blue-400 shrink-0" />
              <span>
                <Typewriter
                  words={[
                    'Full-Stack Developer (4+ Yrs)',
                    'NestJS & Node.js Engineer',
                    'Web Scraping & Automation Expert',
                    '.NET Core & Cloud Architect',
                    'SaaS & CRM Platform Developer',
                  ]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={60}
                  deleteSpeed={35}
                  delaySpeed={1400}
                />
              </span>
            </div>

            {/* Paragraph Bio */}
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              Full-Stack Developer with <strong className="text-gray-900 dark:text-white">4+ years of experience</strong> building production-grade web applications, backend microservices, web automation workflows, dashboards, and APIs using{' '}
              <strong className="text-gray-900 dark:text-white">React, Next.js, Node.js, NestJS, .NET Core, Python &amp; AWS</strong>. Available for freelance collaborations with startups, businesses, agencies, and international clients.
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8">
              {TECH_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] rounded-lg text-slate-700 dark:text-gray-300 text-xs font-medium hover:border-blue-500/40 hover:bg-blue-500/10 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Quick Stat Counter Grid */}
            <div className="grid grid-cols-3 gap-3 max-w-md mx-auto lg:mx-0 mb-8">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card p-3 text-center hover:border-blue-500/30 transition-colors"
                >
                  <div className="text-lg sm:text-xl font-bold text-blue-600 dark:text-blue-400 leading-none mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Link
                href="/projects"
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all duration-300 shadow-lg shadow-blue-500/25 flex items-center gap-2 hover:scale-[1.03]"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl bg-slate-100 dark:bg-white/[0.05] hover:bg-slate-200 dark:hover:bg-white/[0.1] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white font-medium text-sm transition-all duration-300 hover:scale-[1.03]"
              >
                Get in Touch
              </Link>

              <a
                href="/resume.pdf"
                download
                className="px-5 py-3 rounded-xl border border-blue-500/30 text-blue-600 dark:text-blue-400 hover:bg-blue-500/10 text-sm font-medium transition-all duration-300 flex items-center gap-2"
              >
                <FaDownload className="w-3.5 h-3.5" />
                <span>Resume</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mt-8 pt-6 border-t border-slate-200 dark:border-white/[0.06]">
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Connect:</span>
              {socialMedia.map(({ icon: Icon, href, name }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${name} profile`}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white hover:border-blue-500/40 hover:bg-blue-500/10 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Glowing Profile Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Blue Ambient Glow behind avatar */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-blue-600/30 to-cyan-400/20 blur-2xl pointer-events-none" />

              {/* Profile Image Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-slate-200 dark:border-white/15 bg-zinc-900 shadow-2xl">
                <Image
                  src="/profileImg.jpg"
                  alt="Saurabh Dantani — Freelance Full Stack Developer"
                  fill
                  priority
                  sizes="(max-width: 768px) 320px, 384px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/80 via-transparent to-transparent" />

                {/* Floating Micro Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/80 dark:bg-black/60 backdrop-blur-md border border-slate-200 dark:border-white/10 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                    <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-900 dark:text-white">Ahmedabad, India</p>
                    <p className="text-[10px] text-gray-600 dark:text-gray-400">Serving Global &amp; Remote Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}


