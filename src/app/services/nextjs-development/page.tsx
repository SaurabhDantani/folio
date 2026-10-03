import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, Rocket, Layout, Globe, Zap } from 'lucide-react'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.saurabhdantani.work'

export const metadata: Metadata = {
  title: 'Next.js Development Services',
  description: 'Professional Next.js development services. Build fast, SEO-friendly web applications with React, TypeScript, and modern web technologies. Based in Ahmedabad, India.',
  openGraph: {
    title: 'Next.js Development Services | Saurabh Dantani',
    description: 'Build fast, SEO-friendly web applications with React, TypeScript, and modern web technologies.',
    url: `${BASE_URL}/services/nextjs-development`,
  },
  alternates: {
    canonical: `${BASE_URL}/services/nextjs-development`,
  },
}

const features = [
  {
    icon: Rocket,
    title: 'Performance-First Development',
    description: 'Build blazing-fast applications with optimized Core Web Vitals. Server-side rendering, static generation, and edge computing for the best user experience.',
  },
  {
    icon: Layout,
    title: 'Modern UI/UX',
    description: 'Create beautiful, responsive interfaces with Tailwind CSS, Framer Motion animations, and accessibility-first design principles.',
  },
  {
    icon: Globe,
    title: 'SEO Optimized',
    description: 'Built-in SEO best practices with dynamic metadata, structured data (JSON-LD), sitemaps, and perfect Core Web Vitals scores.',
  },
  {
    icon: Zap,
    title: 'Scalable Architecture',
    description: 'Type-safe code with TypeScript, modular component architecture, and scalable state management for long-term maintainability.',
  },
]

const deliverables = [
  'Custom Next.js applications (App Router & Pages Router)',
  'E-commerce platforms with Shopify/Stripe integration',
  'SaaS dashboards and admin panels',
  'Landing pages and marketing websites',
  'API route development and integration',
  'Database integration (PostgreSQL, MongoDB)',
  'Authentication and authorization systems',
  'Real-time features with WebSocket integration',
]

const techStack = [
  'Next.js 14+ (App Router)',
  'React 19',
  'TypeScript',
  'Tailwind CSS',
  'Framer Motion',
  'Prisma / TypeORM',
  'PostgreSQL / MongoDB',
  'NextAuth.js',
  'tRPC / GraphQL',
  'Vercel / AWS deployment',
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Next.js & Full-Stack Web Development Services',
  serviceType: 'Full-Stack Web Development',
  description:
    'Custom Next.js web application development, React UI/UX design, performant backend integration, and SEO optimization by Saurabh Dantani.',
  provider: {
    '@type': 'Person',
    name: 'Saurabh Dantani',
    url: BASE_URL,
  },
  areaServed: 'Worldwide',
  url: `${BASE_URL}/services/nextjs-development`,
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
      name: 'Services',
      item: `${BASE_URL}/#services`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Next.js Development',
      item: `${BASE_URL}/services/nextjs-development`,
    },
  ],
}

export default function NextJsService() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#09090b]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Header */}
      <div className="bg-white dark:bg-zinc-950 border-b border-slate-200 dark:border-white/10">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 py-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
            Next.js Development Services
          </h1>

          <p className="text-lg text-slate-600 dark:text-zinc-400 leading-relaxed max-w-3xl">
            Build modern, high-performance web applications with Next.js. I create fast, SEO-friendly websites and web
            apps that deliver exceptional user experiences and rank well in search engines.
          </p>

          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors"
            >
              Start Your Project
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Features */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Why Next.js?</h2>
          <div className="grid gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-zinc-950 rounded-xl p-6 border border-slate-200 dark:border-white/10"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                    <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">What I Deliver</h2>
          <div className="bg-white dark:bg-zinc-950 rounded-xl p-6 border border-slate-200 dark:border-white/10">
            <ul className="grid sm:grid-cols-2 gap-3">
              {deliverables.map((deliverable, index) => (
                <li key={index} className="flex items-center gap-2 text-slate-600 dark:text-zinc-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  {deliverable}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] text-sm text-slate-700 dark:text-zinc-300 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-sky-500 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">Ready to Build Your Next.js App?</h3>
          <p className="text-blue-100 mb-6">
            Get a modern, high-performance web application that scales with your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-blue-600 font-semibold hover:bg-blue-50 transition-colors"
          >
            Discuss Your Project
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  )
}
