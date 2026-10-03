'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const FAQS = [
  {
    question: 'Are you available for freelance work?',
    answer:
      'Yes, I am currently available for select freelance projects, retainer contracts, and consulting. I work with startups, businesses, and agencies worldwide across the US, UK, UAE, and India.',
  },
  {
    question: 'What freelance development services do you offer?',
    answer:
      'I specialize in full-stack web applications (React, Next.js, Node.js, NestJS), backend microservices (.NET Core, C#), web scraping & browser automation pipelines (Playwright, Python), real-time WebSocket systems, and cloud deployment on AWS.',
  },
  {
    question: 'What is your typical project timeline?',
    answer:
      'A focused MVP or automated scraping pipeline typically takes 1 to 3 weeks. Complex multi-tenant SaaS platforms, real-time financial tracking systems, or healthcare portals typically take 4 to 8 weeks depending on specifications.',
  },
  {
    question: 'How do you structure project pricing?',
    answer:
      'I offer milestone-based fixed price contracts for well-defined scopes as well as weekly/monthly retainer models for agile or ongoing product development. Reach out with your requirements for a clear estimate.',
  },
  {
    question: 'Where are you based and how do you handle remote communication?',
    answer:
      'I am based in Ahmedabad, Gujarat, India. I operate async-first using Slack, GitHub, Loom, and Google Meet with overlapping hours for clients across North America, Europe, the Middle East, and Asia.',
  },
  {
    question: 'Do you provide post-launch support and maintenance?',
    answer:
      'Yes, I provide post-launch maintenance, cloud server monitoring, bug fixes, scaling support, and automated backup configurations after production launch.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden" id="faq" aria-labelledby="faq-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-14">
          <div className="text-xs uppercase tracking-widest text-sky-600 dark:text-sky-400 font-semibold mb-3">
            FAQ
          </div>
          <h2 id="faq-heading" className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Straight answers.
          </h2>
          <p className="text-slate-600 dark:text-zinc-400 text-sm sm:text-base">
            Everything you need to know about working together on full-stack, scraping, and backend projects.
          </p>
        </div>

        {/* Minimal Accordion List */}
        <div className="border-t border-slate-200 dark:border-white/10 divide-y divide-slate-200 dark:divide-white/10">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div key={index} className="py-4">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full py-2 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 dark:text-white text-base sm:text-lg hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 dark:text-zinc-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-sky-600 dark:text-sky-400' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="pt-2 pb-4 text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
