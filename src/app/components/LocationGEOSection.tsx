import React from 'react'
import { MapPin, Globe, Users, ShieldCheck } from 'lucide-react'

export default function LocationGEOSection() {
  return (
    <section
      className="py-12 border-y border-slate-200 dark:border-white/10 bg-slate-100/60 dark:bg-white/[0.01] transition-colors duration-300"
      aria-label="About Saurabh Dantani - Freelance Full Stack Developer"
    >
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Main Bio Text */}
        <p className="text-base sm:text-lg text-slate-700 dark:text-zinc-300 leading-relaxed text-center max-w-4xl mx-auto mb-8 font-normal">
          <strong className="text-slate-900 dark:text-white font-semibold">Saurabh Dantani</strong> is a freelance{' '}
          <strong className="text-sky-600 dark:text-sky-400 font-semibold">full-stack developer</strong>, backend engineer, and{' '}
          <strong className="text-slate-900 dark:text-white font-semibold">automation specialist</strong> based in{' '}
          <strong className="text-slate-900 dark:text-white font-semibold">Ahmedabad, India</strong>. He builds{' '}
          <strong className="text-slate-900 dark:text-white font-semibold">React, Next.js, Node.js, and NestJS</strong> products, plus{' '}
          <strong className="text-sky-600 dark:text-sky-400 font-semibold">.NET Core microservices</strong>, production scrapers (Playwright, Python), and real-time WebSocket platforms. He works remotely with teams across{' '}
          <span className="text-slate-900 dark:text-zinc-200 font-medium">India, USA, UK, UAE</span>, and worldwide.
        </p>

        {/* Minimalist Trust Indicator Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-slate-600 dark:text-zinc-400">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-sky-500 dark:text-sky-400" />
            <span>Based in Ahmedabad, Gujarat, India</span>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] shadow-xs">
            <Globe className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
            <span>Remote-First · Global Clients</span>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] shadow-xs">
            <Users className="w-3.5 h-3.5 text-purple-500 dark:text-purple-400" />
            <span>Serving Startups &amp; Enterprises</span>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />
            <span>4+ Years Production Experience</span>
          </div>
        </div>
      </div>
    </section>
  )
}
