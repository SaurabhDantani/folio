import type { Metadata } from 'next'
import Link from 'next/link'
import { Sparkles, Calendar, Clock, BookOpen, ArrowRight } from 'lucide-react'
import { blogs } from '@/contents/blogs'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.saurabhdantani.work'

export const metadata: Metadata = {
  title: 'Blog — Web Development, Next.js & Automation Articles',
  description:
    'Technical articles and guides by Saurabh Dantani on Next.js, NestJS backend architecture, TypeScript, and Playwright web scraping automation.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Blog — Technical Articles by Saurabh Dantani',
    description:
      'Technical articles and guides by Saurabh Dantani on Next.js, NestJS backend architecture, TypeScript, and Playwright web scraping automation.',
    url: `${BASE_URL}/blogs`,
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
      <div className="container max-w-5xl mx-auto px-4 py-24 sm:py-32">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Engineering Insights</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-slate-900 dark:text-white tracking-tight">
            Articles &amp; Tutorials<span className="text-blue-500">.</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed">
            Practical guides and architectural case studies covering Next.js, Node.js, NestJS, Python automation, and web scraping.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {blogs.map((post) => (
            <article
              key={post.slug}
              className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-zinc-950 p-6 flex flex-col justify-between hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-zinc-500 mb-3">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {post.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 line-clamp-3 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs font-medium">
                <span className="text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/40 px-2.5 py-1 rounded-full">
                  Upcoming
                </span>
                <span className="text-slate-400 dark:text-zinc-500 inline-flex items-center gap-1">
                  In preparation
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Suggestion / Newsletter box */}
        <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-gradient-to-tr from-slate-100 to-white dark:from-zinc-900 dark:to-zinc-950 p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-sm">
          <BookOpen className="w-10 h-10 text-sky-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
            Have a specific topic in mind?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 mb-6 leading-relaxed">
            I regularly write about solving real production challenges. Let me know what you would like to see covered.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all shadow-md shadow-blue-500/20 hover:scale-105 active:scale-95"
          >
            <span>Request a Topic</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </>
  )
}