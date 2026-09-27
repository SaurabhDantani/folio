'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import { MapPin } from 'lucide-react'

const TECH_TAGS = [
  'React.js',
  'Next.js',
  'Node.js',
  'NestJS',
  '.NET Core',
  'Python',
  'Web Scraping',
  'Playwright',
  'PostgreSQL',
  'AWS & Docker',
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24 min-h-[92vh] flex items-center">
      {/* Ambient Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] radial-glow-blue opacity-50 blur-3xl pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Hero Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 text-left"
          >
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/[0.04] text-xs text-slate-700 dark:text-zinc-300 font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Open for freelance · Ahmedabad</span>
            </div>

            {/* Main H1 Title */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.08] mb-3">
              Hi, I&apos;m<br />
              <span className="text-sky-500 dark:text-sky-400">Saurabh Dantani</span>
            </h1>

            {/* Typewriter Dynamic Subtitle */}
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-sky-600 dark:text-sky-400/90 mb-5 flex items-center gap-2 h-9">
              <Typewriter
                words={[
                  'Full-Stack Developer (4+ Yrs)',
                  'NestJS & Node.js Engineer',
                  'Web Automation Specialist',
                  '.NET Core & Microservices',
                  'AI & SaaS Architect',
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={50}
                deleteSpeed={30}
                delaySpeed={1600}
              />
            </div>

            {/* Bio Paragraph */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed mb-6 max-w-2xl">
              Freelance <strong className="text-slate-900 dark:text-white font-semibold">Full Stack, Backend &amp; Automation</strong> developer. Building production-grade web applications, backend microservices, real-time WebSocket platforms, and scrapers using{' '}
              <strong className="text-slate-900 dark:text-white font-semibold">React, Next.js, Node.js, NestJS, .NET Core, Python &amp; AWS</strong>.
            </p>

            {/* Proof Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/70 dark:bg-white/[0.03] text-xs text-slate-700 dark:text-zinc-300">
                <span className="font-semibold text-slate-900 dark:text-white">Lead Gen CRM</span>
                <span className="text-sky-600 dark:text-sky-400 font-medium">1000+ leads</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/70 dark:bg-white/[0.03] text-xs text-slate-700 dark:text-zinc-300">
                <span className="font-semibold text-slate-900 dark:text-white">IPO System</span>
                <span className="text-sky-600 dark:text-sky-400 font-medium">Real-Time WebSocket</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/70 dark:bg-white/[0.03] text-xs text-slate-700 dark:text-zinc-300">
                <span className="font-semibold text-slate-900 dark:text-white">Medical RCM</span>
                <span className="text-sky-600 dark:text-sky-400 font-medium">Production Automation</span>
              </div>
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {TECH_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] text-xs text-slate-600 dark:text-zinc-400 font-medium hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/25 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* 3-Stat Counter Box */}
            <div className="grid grid-cols-3 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] divide-x divide-slate-200 dark:divide-white/10 text-center max-w-lg mb-8 shadow-xs">
              <div className="p-3.5">
                <div className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">4+ Years</div>
                <div className="text-[10px] sm:text-xs text-slate-500 dark:text-zinc-500 uppercase tracking-wider font-medium mt-1">Experience</div>
              </div>
              <div className="p-3.5">
                <div className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">20+</div>
                <div className="text-[10px] sm:text-xs text-slate-500 dark:text-zinc-500 uppercase tracking-wider font-medium mt-1">Projects</div>
              </div>
              <div className="p-3.5">
                <div className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">15+</div>
                <div className="text-[10px] sm:text-xs text-slate-500 dark:text-zinc-500 uppercase tracking-wider font-medium mt-1">Tech Stack</div>
              </div>
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/30 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
              >
                <span>View Projects</span>
                <span className="text-xs">↗</span>
              </Link>

              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.04] hover:bg-slate-100 dark:hover:bg-white/[0.08] text-slate-800 dark:text-white font-semibold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xs"
              >
                <span>Get in Touch</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Rounded Portrait Frame with Ambient Radial Halo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-72 h-80 sm:w-96 sm:h-[460px] lg:w-[420px] lg:h-[480px]">
              {/* Radial Blue Halo Glow behind portrait */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-blue-600/25 via-sky-500/20 to-transparent blur-3xl pointer-events-none" />

              {/* Portrait Container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-slate-200 dark:border-white/12 bg-white dark:bg-zinc-950 shadow-xl dark:shadow-2xl">
                <Image
                  src="/profileImg.jpg"
                  alt="Saurabh Dantani — Full Stack & Automation Developer"
                  fill
                  priority
                  sizes="(max-width: 768px) 340px, 440px"
                  className="object-cover"
                />
                
                {/* Subtle Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 dark:from-[#09090b]/80 via-transparent to-transparent" />

                {/* Floating Micro Location Tag */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-white/90 dark:bg-black/60 backdrop-blur-md border border-slate-200/80 dark:border-white/10 flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-sky-500 dark:text-sky-400" />
                    <span className="text-xs font-semibold text-slate-900 dark:text-white">Ahmedabad, India</span>
                  </div>
                  <span className="text-[11px] text-slate-600 dark:text-zinc-400">Open Worldwide</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
