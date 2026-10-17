'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  Sparkles,
  Calendar,
  Clock,
  ArrowRight,
  Search,
  X,
  BookOpen,
  Tag,
} from 'lucide-react'
import { Blog } from '@/types'

interface BlogsContentProps {
  blogs: Blog[]
}

export function BlogsContent({ blogs }: BlogsContentProps) {
  const [selectedTag, setSelectedTag] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState<string>('')

  // Extract all unique tags
  const allTags = useMemo(() => {
    const set = new Set<string>()
    blogs.forEach((b) => {
      (b.tags || []).forEach((t) => set.add(t))
    })
    return ['all', ...Array.from(set)]
  }, [blogs])

  // Filtered blogs
  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      // Tag filter
      if (selectedTag !== 'all') {
        const hasTag = (blog.tags || []).some(
          (t) => t.toLowerCase() === selectedTag.toLowerCase()
        )
        if (!hasTag) return false
      }

      // Search query
      if (!searchQuery.trim()) return true
      const q = searchQuery.toLowerCase()
      const titleMatch = blog.title.toLowerCase().includes(q)
      const excerptMatch = blog.excerpt.toLowerCase().includes(q)
      const tagMatch = (blog.tags || []).some((t) => t.toLowerCase().includes(q))
      return titleMatch || excerptMatch || tagMatch
    })
  }, [blogs, selectedTag, searchQuery])

  // Top featured post (first one if 'all' and no search query)
  const featuredPost = useMemo(() => {
    if (selectedTag === 'all' && !searchQuery.trim()) {
      return blogs.find((b) => b.featured) || blogs[0]
    }
    return null
  }, [blogs, selectedTag, searchQuery])

  // Remaining posts
  const regularPosts = useMemo(() => {
    if (featuredPost) {
      return filteredBlogs.filter((b) => b.slug !== featuredPost.slug)
    }
    return filteredBlogs
  }, [filteredBlogs, featuredPost])

  return (
    <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      {/* Header section */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{blogs.length} Engineering Notes &amp; Deep Dives</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
          Engineering Blog &amp; Case Studies<span className="text-blue-500">.</span>
        </h1>
        <div className="flex gap-1.5 justify-center mb-4">
          <div className="h-1 w-12 bg-blue-500 rounded-full" />
          <div className="h-1 w-3 bg-blue-500/40 rounded-full" />
          <div className="h-1 w-1.5 bg-blue-500/20 rounded-full" />
        </div>
        <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed">
          Production notes on AI voice systems, Next.js architecture, Agentic AI, App Store mobile products, and high-ROI Meta Ads engineering.
        </p>
      </motion.div>

      {/* Filter and Search Bar */}
      <div className="mb-10 space-y-4">
        {/* Tags filter pills */}
        <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {allTags.map((tag) => {
            const isSelected = selectedTag.toLowerCase() === tag.toLowerCase()
            return (
              <button
                key={tag}
                type="button"
                onClick={() => setSelectedTag(tag)}
                className={`shrink-0 rounded-full border px-4 py-1.5 text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  isSelected
                    ? 'border-blue-500/50 bg-blue-500/15 text-blue-600 dark:text-blue-300 shadow-sm'
                    : 'border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] text-slate-600 dark:text-zinc-400 hover:border-slate-300 dark:hover:border-white/20 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {tag === 'all' ? 'All Posts' : tag}
              </button>
            )
          })}
        </div>

        {/* Search input */}
        <div className="max-w-md mx-auto relative">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search articles by title, topic, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-9 py-2.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/15 transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          {searchQuery && (
            <div className="mt-2 text-center text-xs text-slate-500 dark:text-zinc-400">
              Found <span className="font-semibold text-blue-600 dark:text-blue-400">{filteredBlogs.length}</span> matching articles
            </div>
          )}
        </div>
      </div>

      {/* Featured Hero Article (if on 'all' tab with no search) */}
      {featuredPost && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10 sm:mb-14"
        >
          <Link
            href={`/blogs/${featuredPost.slug}`}
            className="group block rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] overflow-hidden hover:border-blue-500/40 dark:hover:border-blue-400/30 transition-all duration-300 hover:shadow-xl dark:hover:shadow-blue-500/5"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              {/* Left Image */}
              <div className="lg:col-span-6 relative aspect-video sm:aspect-[16/10] lg:h-[22rem] w-full overflow-hidden bg-zinc-950">
                {featuredPost.image ? (
                  <Image
                    src={featuredPost.image}
                    alt={`${featuredPost.title} - Engineering Deep Dive`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-zinc-900 text-zinc-600">
                    <BookOpen className="w-12 h-12 opacity-30" />
                  </div>
                )}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1 rounded-full bg-blue-600 px-3 py-1 text-[11px] font-bold tracking-wider text-white uppercase shadow-md shadow-blue-600/30">
                    ★ Featured
                  </span>
                </div>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex flex-wrap gap-2 mb-3">
                  {featuredPost.tags?.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-blue-500/20 bg-blue-500/10 px-2.5 py-0.5 text-xs font-semibold text-blue-600 dark:text-blue-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white leading-snug mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {featuredPost.title}
                </h2>

                <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed mb-6 line-clamp-3">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-zinc-400 pt-4 border-t border-slate-100 dark:border-white/5">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      )}

      {/* Regular Articles Grid */}
      <AnimatePresence mode="popLayout">
        {regularPosts.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
          >
            {regularPosts.map((post, idx) => (
              <motion.article
                layout
                key={post.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: Math.min(idx * 0.04, 0.3) }}
                className="group flex flex-col rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] overflow-hidden hover:border-blue-500/40 dark:hover:border-blue-400/30 transition-all duration-300 hover:shadow-xl dark:hover:shadow-blue-500/5 hover:-translate-y-1.5"
              >
                <Link href={`/blogs/${post.slug}`} className="flex flex-col h-full">
                  {/* Article Thumbnail */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950 border-b border-slate-100 dark:border-white/5">
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt={`${post.title} - Engineering Guide`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-zinc-900 text-zinc-600">
                        <BookOpen className="w-8 h-8 opacity-30" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Body */}
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                      <div className="mb-2.5 flex flex-wrap gap-1.5">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/[0.04] px-2 py-0.5 text-[11px] font-medium text-slate-700 dark:text-zinc-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Title */}
                    <h2 className="mb-2 line-clamp-2 text-base sm:text-lg font-bold leading-snug text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="mb-4 line-clamp-2 flex-1 text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="mt-auto flex items-center justify-between border-t border-slate-100 dark:border-white/5 pt-3 text-xs text-slate-500 dark:text-zinc-400">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{post.date}</span>
                      </span>
                      <span className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-medium">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{post.readTime}</span>
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        ) : (
          <div className="py-16 text-center rounded-3xl border border-dashed border-slate-300 dark:border-white/10 bg-white/50 dark:bg-white/[0.01]">
            <BookOpen className="w-10 h-10 text-slate-400 mx-auto mb-3 opacity-60" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
              No matching articles found
            </h3>
            <p className="text-sm text-slate-500 dark:text-zinc-400 mb-4 max-w-sm mx-auto">
              No articles matched &ldquo;{searchQuery}&rdquo;. Try another term or reset filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('')
                setSelectedTag('all')
              }}
              className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20 text-xs font-semibold transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </AnimatePresence>

      {/* Suggestion / Request a Topic Box */}
      <div className="mt-16 rounded-3xl border border-slate-200 dark:border-white/10 bg-gradient-to-tr from-slate-100 to-white dark:from-zinc-900 dark:to-zinc-950 p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-sm">
        <BookOpen className="w-10 h-10 text-blue-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          Have a specific engineering topic in mind?
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 mb-6 leading-relaxed">
          I regularly write about solving real production challenges — Next.js architecture, real-time WebSockets, AI agent systems, and Python scrapers. Let me know what you would like to see covered.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all shadow-md shadow-blue-500/20 hover:scale-105 active:scale-95"
        >
          <span>Request a Topic</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}
