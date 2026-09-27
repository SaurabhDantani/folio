'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'

const navItems = [
  { name: 'About', link: '/about' },
  { name: 'Services', link: '/#services' },
  { name: 'Projects', link: '/projects' },
  { name: 'Blogs', link: '/blogs' },
  { name: 'Resume', link: '/resume.pdf' },
  { name: 'Contact', link: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 border-b border-slate-200/80 dark:border-white/[0.06] bg-white/80 dark:bg-[#09090b]/80 backdrop-blur-xl transition-colors duration-300">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Left: Branding & Role */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-600 via-sky-400 to-cyan-300 p-[1.5px] shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full rounded-full bg-white dark:bg-[#09090b] flex items-center justify-center font-bold text-xs text-sky-500 dark:text-sky-400">
                SD
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors tracking-tight">
                Saurabh Dantani
              </span>
              <span className="text-[11px] text-slate-500 dark:text-zinc-400 font-medium">
                Full Stack Developer
              </span>
            </div>
          </Link>

          {/* Center: Floating Capsule Nav Links */}
          <nav className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/70 dark:bg-white/[0.03] backdrop-blur-md shadow-sm dark:shadow-lg dark:shadow-black/20">
            {navItems.map((item) => {
              const isActive = pathname === item.link
              const isExternal = item.link.endsWith('.pdf')
              
              if (isExternal) {
                return (
                  <a
                    key={item.name}
                    href={item.link}
                    download
                    className="px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/5 transition-all"
                  >
                    {item.name}
                  </a>
                )
              }

              return (
                <Link
                  key={item.name}
                  href={item.link}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                    isActive
                      ? 'text-slate-900 dark:text-white bg-white dark:bg-white/10 font-semibold shadow-xs'
                      : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>

          {/* Right: CTA Hire Me Button & Theme Toggle */}
          <div className="flex items-center gap-2.5">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark/light theme"
              className="p-2 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/[0.04] text-slate-700 dark:text-zinc-300 hover:text-sky-500 dark:hover:text-white hover:border-sky-400/40 transition-all"
            >
              {theme === 'dark' ? (
                <SunIcon className="w-4 h-4 text-amber-400" />
              ) : (
                <MoonIcon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full bg-slate-900 dark:bg-white text-white dark:text-black font-semibold text-xs hover:bg-slate-800 dark:hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95 shadow-md shadow-black/5 dark:shadow-white/10"
            >
              <span>Hire Me</span>
              <span className="text-xs">↗</span>
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setOpen(true)}
              aria-label="Open navigation menu"
              className="md:hidden p-2 rounded-lg text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Over Drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 280 }}
              className="fixed z-50 right-0 top-0 h-full w-72 bg-white dark:bg-[#09090b] text-slate-900 dark:text-white p-6 border-l border-slate-200 dark:border-white/10 shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-slate-200 dark:border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-sky-400 p-[1px]">
                      <div className="w-full h-full rounded-full bg-white dark:bg-[#09090b] flex items-center justify-center font-bold text-xs text-sky-500 dark:text-sky-400">
                        SD
                      </div>
                    </div>
                    <span className="font-bold text-sm text-slate-900 dark:text-white">Menu</span>
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    aria-label="Close navigation menu"
                    className="p-1 rounded-md text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>

                <nav className="mt-6 space-y-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.link}
                      href={item.link}
                      onClick={() => setOpen(false)}
                      className={`block px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                        pathname === item.link
                          ? 'bg-slate-100 dark:bg-white/10 text-slate-900 dark:text-white font-semibold'
                          : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/5'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="pt-6 border-t border-slate-200 dark:border-white/10 space-y-3">
                {/* Mobile Theme Toggle Button */}
                <button
                  onClick={toggleTheme}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-xs font-semibold text-slate-800 dark:text-zinc-200 hover:bg-slate-200 dark:hover:bg-white/10 transition"
                >
                  {theme === 'dark' ? (
                    <>
                      <SunIcon className="w-4 h-4 text-amber-500" />
                      <span>Switch to Light Mode</span>
                    </>
                  ) : (
                    <>
                      <MoonIcon className="w-4 h-4 text-slate-700" />
                      <span>Switch to Dark Mode</span>
                    </>
                  )}
                </button>

                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-black font-semibold text-sm hover:bg-slate-800 dark:hover:bg-zinc-200 transition"
                >
                  <span>Hire Me</span>
                  <span>↗</span>
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
