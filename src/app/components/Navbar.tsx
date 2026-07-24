'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  SunIcon,
  MoonIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { useTheme } from '../context/ThemeContext'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FloatingNav } from '../components/ui/floating-navbar'

const navItems = [
  { name: 'About', link: '/about' },
  { name: 'Projects', link: '/projects' },
  { name: 'Contact', link: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden md:block fixed top-0 inset-x-0 z-50">
        <FloatingNav navItems={navItems} pathname={pathname}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            <Link
              href="/"
              className="group relative font-extrabold text-sm tracking-wide"
            >
              <span
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
                           bg-[length:200%_auto] animate-gradient-x
                           bg-clip-text text-transparent
                           transition-all duration-300
                           group-hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]"
              >
                Saurabh Dantani
              </span>
            </Link>
          </motion.div>

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="ml-2 p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition"
          >
            {theme === 'dark' ? (
              <SunIcon className="h-4 w-4" />
            ) : (
              <MoonIcon className="h-4 w-4" />
            )}
          </button>
        </FloatingNav>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden fixed top-0 inset-x-0 z-50 bg-white/80 dark:bg-dark/80 backdrop-blur-lg">
        <div className="flex items-center justify-between px-4 h-14">
          <Link href="/" className="font-extrabold text-sm tracking-wide">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent">
              Saurabh Dantani
            </span>
          </Link>

          <button onClick={() => setOpen(true)} aria-label="Open menu">
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Slide Over */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 22 }}
              className="fixed z-50 right-0 top-0 h-full w-72 bg-white dark:bg-dark p-6"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-semibold">Menu</span>
                <button onClick={() => setOpen(false)} aria-label="Close menu">
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>

              <nav className="space-y-5">
                {navItems.map((item) => (
                  <Link
                    key={item.link}
                    href={item.link}
                    onClick={() => setOpen(false)}
                    className={`block text-lg ${
                      pathname === item.link
                        ? 'text-primary font-medium'
                        : 'text-muted-foreground'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              <button
                onClick={toggleTheme}
                className="mt-10 flex items-center gap-2 text-sm"
              >
                {theme === 'dark' ? (
                  <SunIcon className="h-5 w-5" />
                ) : (
                  <MoonIcon className="h-5 w-5" />
                )}
                Toggle theme
              </button>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

