'use client'

import { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { fadeInUp, fadeIn, slideInLeft, slideInRight } from '@/lib/animations'

interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error('Failed to send message')

      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div id="contact" className="container max-w-6xl mx-auto py-16">
      <motion.div className="text-center mb-12" {...fadeInUp}>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight mb-3">
          Get In Touch<span className="text-blue-500">.</span>
        </h2>
        <div className="flex gap-1.5 justify-center mb-4">
          <div className="h-1 w-10 bg-blue-500 rounded-full" />
          <div className="h-1 w-3 bg-blue-500/40 rounded-full" />
          <div className="h-1 w-1.5 bg-blue-500/20 rounded-full" />
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-lg mx-auto">
          Have a project in mind, need freelance tech expertise, or want to discuss a full-stack/AI collaboration? Reach out anytime!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Contact Information */}
        <motion.div
          className="glass-card p-8 space-y-8"
          {...slideInLeft}
        >
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Available for Freelance Projects</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              I am open to working with <strong className="text-gray-900 dark:text-white">startups, businesses, agencies, and international clients</strong>.
            </p>
            <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs text-gray-700 dark:text-gray-300 space-y-1.5">
              <p className="font-semibold text-blue-600 dark:text-blue-400">💡 Got a project in mind?</p>
              <p>• New product idea or MVP build</p>
              <p>• Existing application improvements & API refactoring</p>
              <p>• Web scraping, data extraction & automation</p>
              <p>• Custom CRM platforms, admin dashboards & SaaS solutions</p>
            </div>
          </div>

          <div className="space-y-6">
            <motion.div
              className="flex items-center gap-4 group"
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors">
                <FaEnvelope className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h4 className="text-xs uppercase font-semibold text-gray-500 dark:text-gray-400">Email Address</h4>
                <a href="mailto:saurabhdantani09@gmail.com" className="text-sm font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  saurabhdantani09@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center gap-4 group"
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors">
                <FaPhone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h4 className="text-xs uppercase font-semibold text-gray-500 dark:text-gray-400">Phone / WhatsApp</h4>
                <a href="tel:+917567358252" className="text-sm font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  +91 7567358252
                </a>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center gap-4 group"
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors">
                <FaMapMarkerAlt className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h4 className="text-xs uppercase font-semibold text-gray-500 dark:text-gray-400">Location</h4>
                <p className="text-sm font-medium text-gray-900 dark:text-white">Ahmedabad, Gujarat, India (Remote Available)</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="glass-card p-8"
          {...slideInRight}
        >
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInUp}>
              <label htmlFor="name" className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-sm"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <label htmlFor="email" className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-sm"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <label htmlFor="message" className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-2">
                Project Details / Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Tell me about your project goals, timeline, or requirements..."
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-sm"
              />
            </motion.div>

            <motion.button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-blue-500/25 disabled:opacity-50"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              {status === 'loading' ? 'Sending Message...' : 'Send Message'}
            </motion.button>

            {status === 'success' && (
              <motion.p
                className="text-emerald-400 text-xs text-center font-medium bg-emerald-500/10 border border-emerald-500/20 py-2.5 rounded-lg"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Thank you! Your message has been sent successfully.
              </motion.p>
            )}

            {status === 'error' && (
              <motion.p
                className="text-red-400 text-xs text-center font-medium bg-red-500/10 border border-red-500/20 py-2.5 rounded-lg"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Failed to send message. Please try again or email directly.
              </motion.p>
            )}
          </motion.form>
        </motion.div>
      </div>
    </div>
  )
}

