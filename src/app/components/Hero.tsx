// app/components/Hero.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import { Spotlight } from '../components/ui/Spotlight'
import { BackgroundGradient } from '../components/ui/background-gradient'
import { socialMedia } from '@/contents/social'

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
          {/* Avatar */}
          <div className="flex justify-center mb-8">
            <BackgroundGradient className="rounded-full p-1">
              <Image
                src="/profile.avif"
                alt="Saurabh Dantani"
                width={120}
                height={120}
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
            {socialMedia.map(({ icon: Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
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
