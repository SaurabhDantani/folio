import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Read articles by Saurabh Dantani on full-stack development, React, Next.js, TypeScript, and modern web technologies.',
  robots: {
    index: false, // Don't index until real content exists
    follow: true,
  },
}

export default function Blogs() {
  return (
    <div className="container max-w-7xl mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Blog Posts
      </h1>

      <div className="text-center py-20">
        <p className="text-xl text-secondary mb-4">
          Coming Soon
        </p>
        <p className="text-secondary max-w-md mx-auto">
          I&apos;m working on writing technical articles about full-stack development,
          React, Next.js, and modern web technologies. Stay tuned!
        </p>
      </div>
    </div>
  )
}