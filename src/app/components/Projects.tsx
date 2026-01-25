'use client'

import { projects } from '@/contents/projects'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'
import { HoverEffect } from './ui/card-hover-effect'

export default function Projects() {
  return (
    <section className="py-20">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          {...fadeInUp}
        >
          Featured Projects
        </motion.h2>
        <HoverEffect items={projects} />
      </div>
    </section>
  )
} 