import type { Metadata } from 'next'
import { AboutContent } from '../components/AboutContent'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Saurabh Dantani — Full Stack Developer with experience in React, Next.js, Node.js, and TypeScript. Based in Ahmedabad, India. Passionate about building scalable web applications.',
  openGraph: {
    title: 'About Saurabh Dantani | Full Stack Developer',
    description:
      'Full Stack Developer with hands-on experience in React, Next.js, Node.js. Based in Ahmedabad, India.',
  },
}

const experience = [
  {
    title: 'Full Stack Developer',
    company: 'Future Stack Solutions',
    period: '2023 – Present',
    bullets: [
      'Developed scalable React & Node.js applications serving real users',
      'Cut deployment time by 50% using CI/CD pipelines',
      'Guided junior developers through code reviews and mentoring',
    ],
  },
]

const education = [
  {
    title: 'Diploma in Computer Engineering',
    description:
      'Government Polytechnic Ahmedabad • 2017 – 2020. Focused on software engineering, data structures, and modern web development.',
  },
  {
    title: 'B.Tech. in Computer Science and Engineering',
    description:
      'Government Engineering College, Modasa • 2020 – 2023. Specialized in software engineering, algorithms, system design, and modern web development.',
  },
]

export default function About() {
  return <AboutContent experience={experience} education={education} />
}
