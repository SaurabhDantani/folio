// app/components/Hero.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import { Spotlight } from '../components/ui/Spotlight'
import { BackgroundGradient } from '../components/ui/background-gradient'
import { socialMedia } from '@/contents/social'
import { FaDownload } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24">
      {/* Subtle Spotlight Background */}
      <Spotlight
        className="-top-40 left-0 md:left-60"
        fill="white"
      />

      <div className="relative container max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex justify-center mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                             bg-green-500/10 border border-green-500/20
                             text-green-600 dark:text-green-400 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              Open for Freelance &amp; Collaboration
            </span>
          </motion.div>

          {/* Avatar */}
          <div className="flex justify-center mb-8">
            <BackgroundGradient className="rounded-full p-1">
              <Image
                src="/profileImg.jpg"
                alt="Saurabh Dantani — Full Stack Developer"
                width={120}
                height={120}
                priority
                className="rounded-full object-cover"
              />
            </BackgroundGradient>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Hi, I&apos;m{' '}
            <span className="text-primary">
              Saurabh Dantani
            </span>
          </h1>

          {/* Subtitle / Typewriter */}
          <p className="text-lg md:text-xl text-secondary mb-10">
            <Typewriter
              words={[
                'Full Stack Developer',
                'AI / GenAI Enthusiast',
                'Open for Collaboration',
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1200}
            />
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            {socialMedia.map(({ icon: Icon, href, name }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit my ${name} profile`}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full border border-black/[0.08] dark:border-white/10
                           text-secondary hover:text-primary
                           hover:bg-black/5 dark:hover:bg-white/10
                           transition"
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/projects"
              className="px-8 py-3 rounded-xl bg-primary text-white font-medium
                         hover:bg-primary/90 transition shadow-sm"
            >
              View Projects
            </Link>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl
                         border border-primary/30 text-primary font-medium
                         hover:bg-primary/10 transition"
            >
              <FaDownload className="h-4 w-4" />
              Download Resume
            </a>

            <Link
              href="/contact"
              className="px-8 py-3 rounded-xl border border-black/[0.08]
                         dark:border-white/10 text-secondary
                         hover:bg-black/5 dark:hover:bg-white/10 transition"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
