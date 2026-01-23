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
import { BackgroundGradient } from '../components/ui/background-gradient'

const navItems = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Projects', link: '/projects' },
  { name: 'Blogs', link: '/blogs' },
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
        <FloatingNav navItems={navItems}>
          <BackgroundGradient className="rounded-lg px-4 py-2">
            <Link
              href="/"
              className="font-bold text-sm text-white tracking-wide"
            >
              Saurabh
            </Link>
          </BackgroundGradient>

          <button
            onClick={toggleTheme}
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
          <Link href="/" className="font-bold">
            Saurabh
          </Link>

          <button onClick={() => setOpen(true)}>
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
                <button onClick={() => setOpen(false)}>
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
