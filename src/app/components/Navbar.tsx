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
  { name: 'Home', link: '/' },
  { name: 'Services', link: '/#services' },
  { name: 'Projects', link: '/projects' },
  { name: 'About', link: '/about' },
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
      <div className="md:hidden fixed top-0 inset-x-0 z-50 bg-white/90 dark:bg-[#09090b]/90 backdrop-blur-lg border-b border-gray-200 dark:border-white/10 text-gray-900 dark:text-white">
        <div className="flex items-center justify-between px-4 h-14">
          <Link href="/" className="font-extrabold text-sm tracking-wide">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent">
              Saurabh Dantani
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-gray-700 dark:text-gray-200"
            >
              {theme === 'dark' ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>
            <button onClick={() => setOpen(true)} aria-label="Open menu" className="p-1">
              <Bars3Icon className="h-6 w-6 text-gray-900 dark:text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide Over */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-xs z-40"
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
              className="fixed z-50 right-0 top-0 h-full w-72 bg-white dark:bg-[#09090b] text-gray-900 dark:text-white p-6 border-l border-gray-200 dark:border-white/10 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200 dark:border-white/10">
                <span className="font-bold text-lg text-gray-900 dark:text-white">Navigation</span>
                <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-1 text-gray-600 dark:text-gray-300">
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>

              <nav className="space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.link}
                    href={item.link}
                    onClick={() => setOpen(false)}
                    className={`block py-2 text-base font-medium transition-colors ${
                      pathname === item.link
                        ? 'text-blue-600 dark:text-blue-400 font-semibold'
                        : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              <button
                onClick={toggleTheme}
                className="mt-8 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-sm font-medium text-gray-800 dark:text-gray-200 hover:bg-slate-200 dark:hover:bg-white/10 transition"
              >
                {theme === 'dark' ? (
                  <>
                    <SunIcon className="h-5 w-5 text-amber-500" />
                    <span>Switch to Light Mode</span>
                  </>
                ) : (
                  <>
                    <MoonIcon className="h-5 w-5 text-blue-600" />
                    <span>Switch to Dark Mode</span>
                  </>
                )}
              </button>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

