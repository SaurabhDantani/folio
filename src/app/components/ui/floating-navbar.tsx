'use client'

import React, { useState, useRef } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import Link from 'next/link'
import clsx from 'clsx'

interface NavItem {
  name: string
  link: string
}

interface FloatingNavProps {
  navItems: NavItem[]
  pathname?: string
  className?: string
  children?: React.ReactNode
}

export function FloatingNav({
  navItems,
  pathname,
  className,
  children,
}: FloatingNavProps) {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const [activeRect, setActiveRect] = useState<DOMRect | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 20)
  })

  const childrenArray = React.Children.toArray(children)

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={clsx(
        'fixed top-4 inset-x-0 z-50 flex justify-center pointer-events-auto px-4',
        className
      )}
    >
      <div
        className={clsx(
          'flex items-center gap-2 md:gap-6 px-4 md:px-6 py-2.5 rounded-full transition-all duration-300',
          scrolled
            ? 'bg-white/85 dark:bg-[#09090b]/85 backdrop-blur-xl border border-gray-200/80 dark:border-white/15 shadow-lg shadow-black/5 dark:shadow-black/40'
            : 'bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md border border-gray-200/50 dark:border-white/10 shadow-sm'
        )}
      >
        {/* Left (Logo / Name) */}
        {childrenArray[0]}

        {/* Nav Items */}
        <div
          ref={containerRef}
          className="relative flex items-center gap-1 md:gap-2 text-sm"
        >
          {/* Hover indicator */}
          {activeRect && containerRef.current && (
            <motion.div
              className="absolute rounded-full bg-blue-500/10 dark:bg-blue-500/20"
              style={{
                left:
                  activeRect.left -
                  containerRef.current.getBoundingClientRect().left,
                width: activeRect.width,
                height: activeRect.height,
                top:
                  activeRect.top -
                  containerRef.current.getBoundingClientRect().top,
              }}
              transition={{
                type: 'spring',
                stiffness: 500,
                damping: 35,
                mass: 0.8,
              }}
            />
          )}

          {navItems.map((item) => {
            const isActive = pathname === item.link

            return (
              <Link
                key={item.link}
                href={item.link}
                onMouseEnter={(e) => {
                  const rect = (
                    e.currentTarget as HTMLElement
                  ).getBoundingClientRect()
                  setActiveRect(rect)
                }}
                onMouseLeave={() => setActiveRect(null)}
                className={clsx(
                  'relative px-3.5 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all duration-200',
                  isActive
                    ? 'text-blue-600 dark:text-blue-400 font-semibold bg-blue-500/10 dark:bg-blue-500/20'
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white'
                )}
              >
                <span className="relative z-10">{item.name}</span>
              </Link>
            )
          })}
        </div>

        {/* Right (Theme Toggle) */}
        {childrenArray[1]}
      </div>
    </motion.nav>
  )
}


