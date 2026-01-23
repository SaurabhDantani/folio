'use client'

import { FaCode, FaLaptopCode, FaGraduationCap } from 'react-icons/fa'
import { HoverEffect } from '../components/ui/card-hover-effect'

const skills = [
  {
    title: 'Frontend',
    description:
      'React, Next.js, TypeScript, Tailwind CSS, HTML5, CSS3',
    icon: <FaCode className="h-6 w-6 text-primary" />,
    link: '#',
  },
  {
    title: 'Backend',
    description:
      'Node.js, Express, PostgreSQL, MongoDB, REST APIs',
    icon: <FaLaptopCode className="h-6 w-6 text-primary" />,
    link: '#',
  },
  {
    title: 'Tools & Cloud',
    description:
      'Git, GitHub, Docker, AWS, CI/CD Pipelines',
    icon: <FaGraduationCap className="h-6 w-6 text-primary" />,
    link: '#',
  },
]

export default function SkillsSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to build scalable, high-quality
            applications.
          </p>
        </div>

        {/* Skills Cards */}
        <HoverEffect
          items={skills.map((skill) => ({
            title: skill.title,
            description: skill.description,
            link: skill.link,
            icon: skill.icon,
          }))}
        />
      </div>
    </section>
  )
}
