import type { Metadata } from 'next'
import { AboutContent } from '../components/AboutContent'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://saurabhdantani.dev'

export const metadata: Metadata = {
  title: 'About — Experience, Skills & Education',
  description:
    'Saurabh Dantani — Full Stack Developer with 3+ years of professional experience in React, Next.js, NestJS, .NET Core, Python, and AWS. Based in Ahmedabad, India. Building scalable web applications, CRM platforms, and automation systems.',
  openGraph: {
    title: 'About Saurabh Dantani | Full Stack & AI Developer',
    description:
      'Full Stack Developer with 3+ years hands-on experience in React, Next.js, NestJS, .NET Core, Python, web scraping, and cloud deployment. Based in Ahmedabad, India.',
    url: `${BASE_URL}/about`,
  },
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: BASE_URL,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'About',
      item: `${BASE_URL}/about`,
    },
  ],
}

const experience = [
  {
    title: 'Senior Full-Stack & Automation Engineer',
    company: 'Ambit Global Solutions',
    period: 'May 2026 – Present',
    bullets: [
      'Architected a US-Based Lead Generation & CRM Platform using Express.js, Next.js, Playwright, web scraping, and automated cron jobs for BD teams.',
      'Developed backend microservices for US-Based Medical Credentialing & RCM Software with NestJS, Python, Playwright, and a Next.js dashboard.',
      'Automated complex medical billing and credentialing workflows to accelerate revenue cycle management (RCM) operations.',
    ],
  },
  {
    title: 'Full-Stack Developer & Backend Specialist',
    company: 'Future Stack Solutions',
    period: '2023 – April 2026',
    bullets: [
      'Built a Real-Time IPO Management System using NestJS, Socket.IO, TypeScript, and automated cron jobs for live stock market data processing.',
      'Engineered scalable REST APIs for a Community Management Platform using Node.js/Express, PostgreSQL, TypeORM, React, and Redux Toolkit.',
      'Designed end-to-end web scraping & browser automation systems using Playwright, Puppeteer, and Python for scheduled workflows.',
      'Developed robust backend services in .NET Core & C# alongside Node.js microservice architectures.',
      'Configured and maintained cloud server infrastructure using AWS (EC2, RDS, S3), Docker containers, Nginx reverse proxy, and PM2 process manager.',
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
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AboutContent experience={experience} education={education} />
    </>
  )
}
