'use client'

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiAmazon,
  SiGit,
  SiGithub,
} from 'react-icons/si'

const SKILLS = [
  {
    title: 'Frontend Development',
    description: 'Building responsive, accessible, and high-performance user interfaces.',
    items: [
      { name: 'React', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: SiCss3 },
    ],
  },
  {
    title: 'Backend Development',
    description: 'Designing scalable APIs, databases, and server-side systems.',
    items: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express', icon: SiExpress },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MongoDB', icon: SiMongodb },
    ],
  },
  {
    title: 'Tools & Cloud',
    description: 'Modern tooling, CI/CD pipelines, and cloud infrastructure.',
    items: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Docker', icon: SiDocker },
      { name: 'AWS', icon: SiAmazon },
    ],
  },
]

function SkillCard({
  title,
  description,
  items,
}: {
  title: string
  description: string
  items: { name: string; icon: any }[]
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* gradient hover ring */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-primary/10" />
      </div>

      <h3 className="relative z-10 text-lg font-semibold">
        {title}
      </h3>
      <p className="relative z-10 mt-2 text-sm text-muted-foreground">
        {description}
      </p>

      <div className="relative z-10 mt-6 grid grid-cols-3 gap-4">
        {items.map(({ name, icon: Icon }) => (
          <div
            key={name}
            className="flex flex-col items-center gap-2 rounded-xl bg-muted/40 p-3 text-center transition group-hover:bg-muted/60"
          >
            <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
            <span className="text-xs font-medium">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function SkillsSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Skills & Expertise</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            A focused set of technologies I use to build reliable and scalable web applications.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {SKILLS.map((skill) => (
            <SkillCard key={skill.title} {...skill} />
          ))}
        </div>
      </div>
    </section>
  )
}
