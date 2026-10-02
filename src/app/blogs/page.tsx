import type { Metadata } from 'next'
import { Sparkles } from 'lucide-react'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.saurabhdantani.work'

export const metadata: Metadata = {
  title: 'Blog — Tech Articles & Development Insights',
  description:
    'Read articles by Saurabh Dantani on full-stack development, React, Next.js, NestJS, TypeScript, web scraping, and modern web technologies. Coming soon.',
  robots: {
    index: false, // Don't index until real content exists
    follow: true,
  },
  alternates: {
    canonical: `${BASE_URL}/blogs`,
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
      name: 'Blog',
      item: `${BASE_URL}/blogs`,
    },
  ],
}

export default function Blogs() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="container max-w-4xl mx-auto px-4 py-24 sm:py-32">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center text-gray-900 dark:text-white tracking-tight">
          Blog Posts<span className="text-blue-500">.</span>
        </h1>
        <div className="flex gap-1.5 justify-center mb-6">
          <div className="h-1 w-10 bg-blue-500 rounded-full" />
          <div className="h-1 w-3 bg-blue-500/40 rounded-full" />
          <div className="h-1 w-1.5 bg-blue-500/20 rounded-full" />
        </div>

        <div className="text-center py-20">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 mb-6">
            <Sparkles className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            Coming Soon
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-md mx-auto leading-relaxed">
            I&apos;m working on writing technical articles about full-stack development,
            NestJS, web scraping with Playwright, React, Next.js, and modern web technologies. Stay tuned!
          </p>
        </div>
      </div>
    </>
  )
}