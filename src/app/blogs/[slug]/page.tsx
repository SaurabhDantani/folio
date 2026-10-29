import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { blogs } from '@/contents/blogs'
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  BookOpen,
  Share2,
  Tag,
  CheckCircle2,
} from 'lucide-react'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.saurabhdantani.work'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return blogs.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = blogs.find((b) => b.slug === slug)

  if (!post) {
    return {
      title: 'Article Not Found',
    }
  }

  const imageUrl = post.image?.startsWith('http')
    ? post.image
    : `${BASE_URL}${post.image}`

  return {
    title: post.title,
    description: post.description || post.excerpt,
    robots: post.noindex
      ? { index: false, follow: true }
      : { index: true, follow: true },
    openGraph: {
      title: `${post.title} | Saurabh Dantani`,
      description: post.description || post.excerpt,
      url: `${BASE_URL}/blogs/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: ['Saurabh Dantani'],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | Saurabh Dantani`,
      description: post.description || post.excerpt,
      images: [imageUrl],
    },
    alternates: {
      canonical: `${BASE_URL}/blogs/${post.slug}`,
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const postIndex = blogs.findIndex((b) => b.slug === slug)

  if (postIndex === -1) {
    notFound()
  }

  const post = blogs[postIndex]
  const prevPost = postIndex > 0 ? blogs[postIndex - 1] : null
  const nextPost = postIndex < blogs.length - 1 ? blogs[postIndex + 1] : null

  // Related posts matching tags
  const relatedPosts = blogs
    .filter(
      (b) =>
        b.slug !== post.slug &&
        b.tags?.some((t) => post.tags?.includes(t))
    )
    .slice(0, 3)

  const imageUrl = post.image?.startsWith('http')
    ? post.image
    : `${BASE_URL}${post.image}`

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description || post.excerpt,
    image: imageUrl,
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/blogs/${post.slug}`,
    },
    author: {
      '@type': 'Person',
      name: 'Saurabh Dantani',
      url: BASE_URL,
      jobTitle: 'Full Stack & AI Developer',
    },
    publisher: {
      '@type': 'Person',
      name: 'Saurabh Dantani',
      url: BASE_URL,
    },
    keywords: post.tags?.join(', '),
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
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `${BASE_URL}/blogs/${post.slug}`,
      },
    ],
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#09090b] text-slate-900 dark:text-zinc-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Header section */}
      <div className="bg-white dark:bg-zinc-950 border-b border-slate-200 dark:border-white/10 pt-10 pb-12">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Articles
          </Link>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags?.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-600 dark:text-blue-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 leading-tight">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-400 leading-relaxed mb-6">
            {post.description || post.excerpt}
          </p>

          {/* Metadata bar */}
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 dark:text-zinc-400 pt-4 border-t border-slate-100 dark:border-white/5">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-blue-500" />
              {post.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-blue-500" />
              {post.readTime}
            </span>
            <span>•</span>
            <span>Written by <strong className="text-slate-800 dark:text-zinc-200">Saurabh Dantani</strong></span>
          </div>
        </div>
      </div>

      {/* Main content body */}
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        {/* Featured Image */}
        {post.image && (
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 mb-12 bg-zinc-950 shadow-xl">
            <Image
              src={post.image}
              alt={`${post.title} - Architectural Case Study`}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
        )}

        {/* Prose Article Content */}
        <article
          className="prose prose-slate dark:prose-invert max-w-none mb-14
            prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-slate-900 dark:prose-headings:text-white
            prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-xl sm:prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-base sm:prose-p:text-lg prose-p:leading-relaxed prose-p:text-slate-700 dark:prose-p:text-zinc-300
            prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:underline hover:prose-a:text-blue-500
            prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-2xl prose-pre:p-5
            prose-code:text-blue-600 dark:prose-code:text-blue-300 prose-code:bg-slate-100 dark:prose-code:bg-white/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md
            prose-li:text-slate-700 dark:prose-li:text-zinc-300
            prose-hr:border-slate-200 dark:prose-hr:border-white/10"
          dangerouslySetInnerHTML={{ __html: post.content || `<p>${post.excerpt}</p>` }}
        />

        {/* Author bio card */}
        <div className="p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] mb-12 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-20 h-20 rounded-full overflow-hidden relative shrink-0 border-2 border-blue-500/40">
            <Image
              src="/profile.avif"
              alt="Saurabh Dantani"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
              Saurabh Dantani
            </h3>
            <p className="text-xs uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold mb-2">
              Full Stack &amp; AI Developer • Ahmedabad, India
            </p>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
              Specialized in production web applications with Next.js, Node.js microservices, Python scrapers, and AI systems. Available for contract and full-stack development worldwide.
            </p>
          </div>
        </div>

        {/* Pagination Navigation (Prev / Next) */}
        <div className="border-t border-slate-200 dark:border-white/10 pt-8 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          {prevPost ? (
            <Link
              href={`/blogs/${prevPost.slug}`}
              className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors w-full sm:w-auto"
            >
              <ArrowLeft className="w-4 h-4" />
              <div className="text-left">
                <div className="text-[11px] uppercase tracking-wider text-slate-400">Previous Article</div>
                <div className="font-semibold text-slate-900 dark:text-white line-clamp-1">{prevPost.title}</div>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextPost && (
            <Link
              href={`/blogs/${nextPost.slug}`}
              className="inline-flex items-center justify-end gap-2 text-sm text-slate-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors w-full sm:w-auto sm:ml-auto text-right"
            >
              <div>
                <div className="text-[11px] uppercase tracking-wider text-slate-400">Next Article</div>
                <div className="font-semibold text-slate-900 dark:text-white line-clamp-1">{nextPost.title}</div>
              </div>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mb-14">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
              Related Articles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blogs/${p.slug}`}
                  className="p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] hover:border-blue-400/40 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-semibold text-blue-500 uppercase tracking-wider block mb-1">
                      {p.tags?.[0] || 'Article'}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors line-clamp-2 mb-2">
                      {p.title}
                    </h4>
                  </div>
                  <span className="text-xs text-blue-600 dark:text-blue-400 font-medium inline-flex items-center gap-1 mt-2">
                    Read Article →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Call to action */}
        <div className="bg-gradient-to-r from-blue-600 via-sky-600 to-blue-700 rounded-3xl p-8 sm:p-10 text-center shadow-lg">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Looking for a Technical Partner?
          </h3>
          <p className="text-blue-100 text-sm sm:text-base max-w-xl mx-auto mb-6 leading-relaxed">
            I help businesses design, build, and deploy production-grade full-stack platforms, real-time dashboards, and AI agents.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-blue-600 font-bold text-sm hover:bg-blue-50 transition-colors shadow-sm"
          >
            <span>Let&apos;s Discuss Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
