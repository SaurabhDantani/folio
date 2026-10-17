import type { Metadata } from 'next'
import { blogs } from '@/contents/blogs'
import { BlogsContent } from '../components/BlogsContent'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.saurabhdantani.work'

export const metadata: Metadata = {
  title: 'Blog & Deep Dives — AI Systems, Next.js, Mobile & Automation | Saurabh Dantani',
  description:
    'Engineering notes, architecture breakdowns, and production tutorials by Saurabh Dantani: AI voice platforms, Next.js App Router, Agentic AI, App Store mobile products, and Meta Ads engineering.',
  keywords: [
    'Saurabh Dantani blog',
    'AI voice platform architecture',
    'Next.js tutorials',
    'Agentic AI vs Automation',
    'React Native App Store guide',
    'Generative AI production lessons',
    'WebSocket real-time dashboard',
    'Prompt engineering patterns',
    'Multi-tenant AI SaaS',
    'Full Stack developer Ahmedabad',
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Engineering Blog & Deep Dives | Saurabh Dantani',
    description:
      'Production notes on AI voice systems, Next.js architecture, Agentic AI, App Store mobile products, and high-ROI Meta Ads engineering.',
    url: `${BASE_URL}/blogs`,
    images: [
      {
        url: `${BASE_URL}/blog/meta-ads-fullstack.webp`,
        width: 1200,
        height: 630,
        alt: 'Saurabh Dantani Engineering Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Engineering Blog & Deep Dives | Saurabh Dantani',
    description:
      'Production notes on AI voice systems, Next.js architecture, Agentic AI, App Store mobile products, and high-ROI Meta Ads engineering.',
    images: [`${BASE_URL}/blog/meta-ads-fullstack.webp`],
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

const blogListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Saurabh Dantani — Engineering Blog & Articles',
  description: 'Technical notes and architectural deep dives by Saurabh Dantani.',
  numberOfItems: blogs.length,
  itemListElement: blogs.map((post, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: post.title,
    description: post.excerpt,
    url: `${BASE_URL}/blogs/${post.slug}`,
    image: post.image?.startsWith('http') ? post.image : `${BASE_URL}${post.image}`,
  })),
}

export default function Blogs() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />
      <BlogsContent blogs={blogs} />
    </>
  )
}