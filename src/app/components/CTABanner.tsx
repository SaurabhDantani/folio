'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { FaLinkedinIn, FaGithub, FaXTwitter } from 'react-icons/fa6'

export default function CTABanner() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden" aria-label="Call to Action">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Glow Container Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] via-zinc-950 to-blue-950/20 p-8 sm:p-12 overflow-hidden shadow-2xl"
        >
          {/* Ambient Glows Inside Card */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start justify-between">
            
            {/* Left: Headline & Subtitle */}
            <div className="lg:col-span-8 space-y-4">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                Let&apos;s make the next thing unforgettable.
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base max-w-xl leading-relaxed">
                Product, scraping pipeline, or backend microservice — I&apos;ll build it like it has to last.
              </p>
            </div>

            {/* Right: Micro Profile Card */}
            <div className="lg:col-span-4 flex lg:justify-end">
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 flex items-center gap-3 backdrop-blur-md">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-white/10">
                  <Image
                    src="/profileImg.jpg"
                    alt="Saurabh Dantani"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-white text-sm">Saurabh Dantani</div>
                  <div className="text-xs text-zinc-400">Ahmedabad, Gujarat, India</div>
                  <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Open to freelance projects worldwide</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Action Row */}
          <div className="relative z-10 mt-10 pt-8 border-t border-white/[0.08] flex flex-wrap items-center gap-4">
            {/* White Pill Button */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full bg-white text-black font-semibold text-xs sm:text-sm hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95 shadow-md shadow-white/10"
            >
              <span>Get in touch</span>
              <span className="text-xs">↗</span>
            </Link>

            {/* Email Pill Button */}
            <a
              href="mailto:saurabhdantani09@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] text-white font-medium text-xs sm:text-sm transition-all hover:scale-105 active:scale-95"
            >
              <Mail className="w-4 h-4 text-sky-400" />
              <span>saurabhdantani09@gmail.com</span>
            </a>

            {/* Social Icon Buttons */}
            <div className="flex items-center gap-2 sm:ml-auto">
              <a
                href="https://www.linkedin.com/in/saurabh-dantani-profile/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/10 hover:border-white/30 text-zinc-300 hover:text-white flex items-center justify-center transition-all hover:scale-105"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/SaurabhDantani"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-10 h-10 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/10 hover:border-white/30 text-zinc-300 hover:text-white flex items-center justify-center transition-all hover:scale-105"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href="mailto:saurabhdantani09@gmail.com"
                aria-label="Email Saurabh"
                className="w-10 h-10 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/10 hover:border-white/30 text-zinc-300 hover:text-white flex items-center justify-center transition-all hover:scale-105"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  )
}
