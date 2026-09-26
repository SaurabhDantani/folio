'use client'

import { motion } from 'framer-motion'
import {
  MessageSquare,
  FileSearch,
  Code2,
  Rocket,
  Wrench,
  ArrowRight,
} from 'lucide-react'

const STEPS = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Discovery & Consultation',
    description:
      'We discuss your project goals, requirements, tech constraints, and expected outcomes. I provide a clear roadmap and estimate.',
    color: 'from-blue-500 to-cyan-400',
  },
  {
    icon: FileSearch,
    step: '02',
    title: 'Architecture & Planning',
    description:
      'I design the system architecture, select the right tech stack, define database schemas, API contracts, and create a sprint-level plan.',
    color: 'from-purple-500 to-pink-400',
  },
  {
    icon: Code2,
    step: '03',
    title: 'Development & Iterations',
    description:
      'Agile development with weekly demos, code reviews, and iterative feedback loops. You see real progress every week.',
    color: 'from-emerald-500 to-teal-400',
  },
  {
    icon: Rocket,
    step: '04',
    title: 'Testing & Deployment',
    description:
      'Comprehensive testing, performance optimization, SEO audit, and production deployment on AWS, Vercel, or your preferred infrastructure.',
    color: 'from-amber-500 to-orange-400',
  },
  {
    icon: Wrench,
    step: '05',
    title: 'Support & Maintenance',
    description:
      'Post-launch monitoring, bug fixes, feature extensions, and ongoing performance optimization to keep your product running smoothly.',
    color: 'from-rose-500 to-red-400',
  },
]

export default function HowIWorkSection() {
  return (
    <section
      className="py-20 sm:py-28 relative overflow-hidden bg-slate-50/50 dark:bg-white/[0.01]"
      aria-labelledby="process-heading"
    >
      {/* Background ambient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-medium mb-4">
            <ArrowRight className="w-3.5 h-3.5" />
            <span>My Process</span>
          </div>
          <h2
            id="process-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight"
          >
            How I Work<span className="text-blue-500">.</span>
          </h2>
          <div className="flex gap-1.5 justify-center mb-4">
            <div className="h-1 w-10 bg-blue-500 rounded-full" />
            <div className="h-1 w-3 bg-blue-500/40 rounded-full" />
            <div className="h-1 w-1.5 bg-blue-500/20 rounded-full" />
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            A transparent, structured development process designed to deliver results efficiently — from initial discussion to post-launch support.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Vertical connector line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/30 via-purple-500/30 to-rose-500/30" />

          <div className="space-y-8 lg:space-y-0">
            {STEPS.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`lg:flex lg:items-center lg:gap-8 ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } relative lg:mb-12`}
                >
                  {/* Content Card */}
                  <div
                    className={`lg:w-[calc(50%-2rem)] ${
                      isEven ? 'lg:text-right' : 'lg:text-left'
                    }`}
                  >
                    <div className="glass-card card-hover-lift p-6 group">
                      <div
                        className={`flex items-center gap-4 mb-3 ${
                          isEven
                            ? 'lg:flex-row-reverse lg:justify-start'
                            : ''
                        }`}
                      >
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                            Step {step.step}
                          </span>
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {step.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Dot (desktop) */}
                  <div className="hidden lg:flex w-8 items-center justify-center relative z-10">
                    <div
                      className={`w-4 h-4 rounded-full bg-gradient-to-br ${step.color} ring-4 ring-white dark:ring-[#09090b] shadow-lg`}
                    />
                  </div>

                  {/* Spacer for other side */}
                  <div className="hidden lg:block lg:w-[calc(50%-2rem)]" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
