'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { socialMedia } from '@/contents/social'
import { Heart, MapPin, Sparkles } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-[#09090b]">
      <div className="container max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-200 dark:border-white/[0.06]">
          
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-5 text-center md:text-left">
            <Link href="/" className="inline-block text-xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
              Saurabh Dantani<span className="text-blue-500">.</span>
            </Link>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm mx-auto md:mx-0 mb-4">
              Freelance Full Stack &amp; AI Integration Developer based in Ahmedabad, India. Delivering enterprise-grade web applications &amp; mobile solutions.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-full">
              <MapPin className="w-3.5 h-3.5" />
              <span>Ahmedabad, India • Available Worldwide</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 text-center md:text-left">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-300 mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-600 dark:text-gray-400">
              <li>
                <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Freelance Services</Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects &amp; Portfolio</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About &amp; Skills</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Get in Touch</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services Offered Keywords */}
          <div className="md:col-span-4 text-center md:text-left">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-300 mb-4">
              Capabilities
            </h4>
            <div className="flex flex-wrap justify-center md:justify-start gap-1.5">
              {[
                'Next.js 15',
                'React 19',
                'TypeScript',
                'Node.js',
                'Python API',
                'AI Chatbots',
                'OpenAI GPT-4o',
                'React Native',
                'WebSockets',
                'SEO & GEO',
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] text-gray-700 dark:text-gray-400 shadow-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom copyright & socials */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-gray-600 dark:text-gray-400">
          <p className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} Saurabh Dantani. Built with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />
            <span>in Next.js</span>
          </p>

          <div className="flex items-center gap-3">
            {socialMedia.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-full bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white hover:border-blue-500/40 hover:bg-blue-500/10 transition-colors"
                aria-label={`Visit ${item.name}`}
              >
                <item.icon className="h-4 w-4" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

