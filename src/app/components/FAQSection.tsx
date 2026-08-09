'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

const FAQS = [
  {
    question: 'What freelance development services do you offer?',
    answer:
      'I specialize in full-stack web application development (React, Next.js, Node.js, TypeScript), custom AI & LLM integrations (OpenAI GPT-4o, Anthropic Claude, chatbots), mobile app development (React Native), API design, and performance/SEO optimization.',
  },
  {
    question: 'Where are you based and how do you handle remote freelance work?',
    answer:
      'I am based in Ahmedabad, Gujarat, India. I collaborate seamlessly with clients across India (Mumbai, Bangalore, Delhi, Pune) as well as international clients in the US, UK, UAE, and Europe via Slack, Teams, WhatsApp, and GitHub.',
  },
  {
    question: 'How much does a custom full-stack web app or AI project cost?',
    answer:
      'Project costs depend on scope, features, timeline, and complexity. I offer both fixed-price project contracts and hourly/monthly retainer models. Contact me with your requirements for a detailed proposal and estimate.',
  },
  {
    question: 'What is your typical project delivery timeline?',
    answer:
      'A streamlined MVP (Minimum Viable Product) or landing application takes around 1 to 3 weeks. Complex multi-tenant SaaS applications, real-time platforms, or deep AI integrations typically take 4 to 8 weeks.',
  },
  {
    question: 'Do you provide post-launch maintenance and support?',
    answer:
      'Yes, I offer ongoing maintenance, server setup, bug fixes, feature extensions, and performance monitoring after product deployment.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

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

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden" aria-labelledby="faq-heading">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 id="faq-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">
            Frequently Asked Questions<span className="text-blue-500">.</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            Everything you need to know about starting a project or hiring me for freelance development.
          </p>
        </motion.div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="glass-card overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-gray-900 dark:text-white sm:text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-500 dark:text-blue-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-5 text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed border-t border-gray-200 dark:border-white/[0.06] pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
