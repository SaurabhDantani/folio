'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const TESTIMONIALS = [
  {
    name: 'Jayesh Patel',
    role: 'CEO, Ambit Global Solutions',
    content:
      'Saurabh delivered an exceptional CRM and lead generation platform for our US-based BD team. His expertise in web scraping, NestJS, and Next.js made the complex automation workflows seamless. Highly professional and delivers on time.',
    rating: 5,
  },
  {
    name: 'Ravi Mehta',
    role: 'Founder, Future Stack Solutions',
    content:
      'Working with Saurabh on the real-time IPO management system was outstanding. His Socket.IO and NestJS skills are top-notch. The system handles thousands of concurrent connections without any issues.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Product Manager, Healthcare Startup',
    content:
      'Saurabh built our medical credentialing software backend from scratch. His Python automation and Playwright bots reduced our manual workload by 80%. The Next.js dashboard is clean, fast, and exactly what we needed.',
    rating: 5,
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${
            i < rating
              ? 'text-amber-400 fill-amber-400'
              : 'text-gray-300 dark:text-gray-600'
          }`}
        />
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Saurabh Dantani — Freelance Development Services',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      bestRating: '5',
      worstRating: '1',
      ratingCount: String(TESTIMONIALS.length),
      reviewCount: String(TESTIMONIALS.length),
    },
    review: TESTIMONIALS.map((t) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: t.name },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: String(t.rating),
        bestRating: '5',
      },
      reviewBody: t.content,
    })),
  }

  return (
    <section
      className="py-20 sm:py-28 relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      {/* Background ambient */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-medium mb-4">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>Client Reviews</span>
          </div>
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight"
          >
            What Clients Say<span className="text-blue-500">.</span>
          </h2>
          <div className="flex gap-1.5 justify-center mb-4">
            <div className="h-1 w-10 bg-blue-500 rounded-full" />
            <div className="h-1 w-3 bg-blue-500/40 rounded-full" />
            <div className="h-1 w-1.5 bg-blue-500/20 rounded-full" />
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Trusted by startups, agencies, and businesses across India and internationally for delivering production-grade solutions on time.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card card-hover-lift p-6 relative group flex flex-col"
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-10 h-10 text-blue-500" />
              </div>

              {/* Stars */}
              <StarRating rating={testimonial.rating} />

              {/* Content */}
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-300 leading-relaxed flex-1">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
                    {testimonial.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
