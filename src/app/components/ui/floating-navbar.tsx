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
  className?: string
  children?: React.ReactNode
}

export function FloatingNav({
  navItems,
  className,
  children,
}: FloatingNavProps) {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const [activeRect, setActiveRect] = useState<DOMRect | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const prev = scrollY.getPrevious() ?? 0
    setHidden(latest > prev && latest > 80)
  })

  const childrenArray = React.Children.toArray(children)

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={clsx(
        'fixed top-4 inset-x-0 z-50 flex justify-center',
        className
      )}
    >
      <div
        className={clsx(
          'flex items-center gap-2 md:gap-6 px-4 md:px-6 py-3 rounded-full',
          'bg-white/70 dark:bg-neutral-900/80',
          'backdrop-blur-xl',
          'border border-black/[0.08] dark:border-white/10',
          'shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] dark:shadow-black/30'
        )}
      >
        {/* Left */}
        {childrenArray[0]}

        {/* Nav Items */}
        <div
          ref={containerRef}
          className="relative flex items-center gap-4 md:gap-6 text-sm"
        >
          {/* Moving indicator */}
          {activeRect && containerRef.current && (
            <motion.div
              className="absolute rounded-full bg-primary/10 dark:bg-primary/20"
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

          {navItems.map((item) => (
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
              className="relative px-3 py-1.5 text-neutral-600 dark:text-neutral-300 hover:text-primary dark:hover:text-white transition"
            >
              <span className="relative z-10">{item.name}</span>
            </Link>
          ))}
        </div>

        {/* Right */}
        {childrenArray[1]}
      </div>
    </motion.nav>
  )
}
