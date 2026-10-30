import { blogs } from '@/contents/blogs'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.saurabhdantani.work'

export async function GET() {
  const activeBlogs = blogs.filter((b) => !b.noindex)

  const itemsXml = activeBlogs
    .map((post) => {
      const pubDate = post.date ? new Date(post.date).toUTCString() : new Date().toUTCString()
      return `  <item>
    <title><![CDATA[${post.title}]]></title>
    <link>${BASE_URL}/blogs/${post.slug}</link>
    <guid isPermaLink="true">${BASE_URL}/blogs/${post.slug}</guid>
    <pubDate>${pubDate}</pubDate>
    <description><![CDATA[${post.description || post.excerpt}]]></description>
  </item>`
    })
    .join('\n')

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Saurabh Dantani | Full Stack &amp; Automation Developer</title>
    <link>${BASE_URL}</link>
    <description>Production notes on Next.js, AI voice platforms, web scraping, and full-stack architecture.</description>
    <language>en-us</language>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml" />
${itemsXml}
  </channel>
</rss>`

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
    },
  })
}

