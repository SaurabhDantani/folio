'use client'

import { motion } from 'framer-motion'

const TESTIMONIALS = [
  {
    name: 'Jayesh Patel',
    role: 'CEO, Ambit Global Solutions',
    project: 'US-Based Lead Gen & CRM Platform',
    quote:
      '“Saurabh delivered an exceptional CRM and lead generation platform for our US-based BD team. His expertise in web scraping, NestJS, and Next.js made the complex automation workflows seamless. Delivered on time with clean, production-ready code.”',
  },
  {
    name: 'Ravi Mehta',
    role: 'Founder, Future Stack Solutions',
    project: 'Real-Time IPO Management System',
    quote:
      '“Working with Saurabh on the real-time IPO management system was outstanding. His Socket.IO and NestJS skills are top-notch. The platform handles thousands of concurrent connections with zero lag.”',
  },
  {
    name: 'Priya Sharma',
    role: 'Product Lead, Healthcare SaaS',
    project: 'Medical Credentialing & RCM Platform',
    quote:
      '“Saurabh built our healthcare credentialing backend and automation pipelines from scratch. His Python automation and Playwright bots reduced manual workflow time significantly. Reliable, communicative, and async-friendly.”',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden" id="proof" aria-labelledby="testimonials-heading">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-14">
          <div className="text-xs uppercase tracking-widest text-sky-400 font-semibold mb-3">
            Proof
          </div>
          <h2 id="testimonials-heading" className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 max-w-2xl">
            What shipping actually feels like.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl">
            Feedback from founders, CEOs, and engineering teams on production deliveries.
          </p>
        </div>

        {/* 3-Column Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 hover:border-white/20 hover:bg-white/[0.035] transition-all flex flex-col justify-between"
            >
              {/* Quote Body */}
              <blockquote className="text-sm sm:text-base text-zinc-300 leading-relaxed italic mb-8 font-normal">
                {t.quote}
              </blockquote>

              {/* Author & Project Meta */}
              <div className="pt-4 border-t border-white/[0.06] space-y-1">
                <div className="font-bold text-white text-sm">
                  {t.name}
                </div>
                <div className="text-xs text-zinc-400 font-medium">
                  {t.role}
                </div>
                <div className="pt-2">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium text-sky-400">
                    {t.project}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
