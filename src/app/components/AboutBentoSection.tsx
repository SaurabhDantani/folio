'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Globe, Code2, Database, Bot, Sparkles, Layers, Cpu, Terminal } from 'lucide-react'

const TICKER_ITEMS = [
  'REACT.JS',
  'NEXT.JS',
  'NESTJS',
  'NODE.JS',
  '.NET CORE',
  'PYTHON',
  'PLAYWRIGHT',
  'TYPESCRIPT',
  'AWS',
  'DOCKER',
  'POSTGRESQL',
  'MONGODB',
  'WEBSOCKETS',
  'REDIS',
  'PUPPETEER',
  'REST APIS',
]

const BENTO_CARDS = [
  {
    icon: Globe,
    title: 'Product & web',
    description:
      'Next.js and React apps that feel finished — dashboards, SaaS platforms, and admin portals clients actually use every day.',
  },
  {
    icon: Code2,
    title: 'Backend & APIs',
    description:
      'NestJS, Node.js, and .NET Core microservices. Built with clean architecture, connection pooling, and resilient API contracts.',
  },
  {
    icon: Terminal,
    title: 'Web scraping',
    description:
      'Playwright, Puppeteer & Python scrapers with proxy rotation, anti-detect handling, retries, and automated cron pipelines.',
  },
  {
    icon: Bot,
    title: 'AI that ships',
    description:
      'LLM integrations, automated data processors, and real-time WebSocket pipelines built to handle high throughput in production.',
  },
]

export default function AboutBentoSection() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden" id="about">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Tag */}
        <div className="text-xs uppercase tracking-widest text-sky-400 font-semibold mb-3">
          About
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-12 sm:mb-16 max-w-3xl leading-[1.12]">
          A builder from Ahmedabad who ships for the world.
        </h2>

        {/* Main Grid: Story on Left, 2x2 Bento on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-20">
          
          {/* Left: Personal Story & Chips */}
          <div className="lg:col-span-5 space-y-6 text-zinc-400 leading-relaxed text-sm sm:text-base">
            <p>
              I&apos;m Saurabh — <strong className="text-white font-semibold">4+ Years of engineering</strong> at Ambit Global Solutions &amp; Future Stack Solutions, collaborating with teams who need more than just a landing page.
            </p>
            <p>
              I design the product architecture, write robust backend microservices, and build high-throughput data scrapers when the source is complex. That&apos;s how real-time IPO tracking systems, lead generation CRM platforms, and medical RCM engines got shipped to production.
            </p>
            <p>
              Remote-first. India and worldwide. If it has to stay up, I treat it like production from day one.
            </p>

            {/* Category Chips */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs text-zinc-300">
                <Globe className="w-3.5 h-3.5 text-sky-400" />
                <span>Web Apps</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs text-zinc-300">
                <Code2 className="w-3.5 h-3.5 text-blue-400" />
                <span>Backend &amp; APIs</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs text-zinc-300">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span>Automation</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs text-zinc-300">
                <Bot className="w-3.5 h-3.5 text-purple-400" />
                <span>AI &amp; LLMs</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs text-zinc-300">
                <Layers className="w-3.5 h-3.5 text-cyan-400" />
                <span>Cloud &amp; AWS</span>
              </span>
            </div>

            {/* Read Story Button */}
            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] text-white font-semibold text-xs transition-all hover:scale-105 active:scale-95"
              >
                <span>Read the full story</span>
                <span className="text-xs">↗</span>
              </Link>
            </div>
          </div>

          {/* Right: 2x2 Bento Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {BENTO_CARDS.map((card, i) => {
              const Icon = card.icon
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Icon Container */}
                    <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-sky-400 mb-6">
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Card Title */}
                    <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>

        </div>

      </div>

      {/* Infinite Scrolling Ticker Ribbon (Full Width) */}
      <div className="w-full border-y border-white/[0.08] bg-black/40 py-4 overflow-hidden relative">
        <div className="animate-marquee items-center gap-8 whitespace-nowrap">
          {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((tech, i) => (
            <div key={i} className="inline-flex items-center gap-8 text-xs font-bold tracking-widest text-zinc-400 hover:text-white transition-colors">
              <span>{tech}</span>
              <Sparkles className="w-3 h-3 text-sky-400 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
