'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { socialMedia } from '@/contents/social'

export default function Footer() {
  return (
    <footer className="relative border-t border-black/[0.08] dark:border-white/10">
      <div className="bg-white/70 dark:bg-neutral-900/80 backdrop-blur-xl">
        <div className="container max-w-7xl mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            
            {/* Brand */}
            <div className="text-center md:text-left">
              <Link
                href="/"
                className="text-lg font-bold tracking-wide"
              >
                <span className="text-primary">Created By Saurabh</span>
              </Link>

              {/* <p className="mt-2 text-sm text-secondary">
                © {new Date().getFullYear()} Saurabh. All rights reserved.
              </p> */}
            </div>

            {/* Navigation */}
            <nav className="flex flex-wrap justify-center gap-6 text-sm">
              <Link
                href="/about"
                className="text-secondary hover:text-primary transition"
              >
                About
              </Link>
              <Link
                href="/projects"
                className="text-secondary hover:text-primary transition"
              >
                Projects
              </Link>
              <Link
                href="/blogs"
                className="text-secondary hover:text-primary transition"
              >
                Blogs
              </Link>
              <Link
                href="/contact"
                className="text-secondary hover:text-primary transition"
              >
                Contact
              </Link>
            </nav>

            {/* Socials */}
            <div className="flex items-center gap-4">
              {socialMedia.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-full text-secondary hover:text-primary hover:bg-black/5 dark:hover:bg-white/10 transition"
                  aria-label={item.name}
                >
                  <item.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>

          </div>
        </div>
      </div>
    </footer>
  )
}
