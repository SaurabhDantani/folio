import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, Target, Zap, Shield } from 'lucide-react'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.saurabhdantani.work'

export const metadata: Metadata = {
  title: 'Web Scraping & Browser Automation Services',
  description: 'Professional web scraping and browser automation services. Extract data from any website, automate workflows, and build scheduled data pipelines with Playwright and Python.',
  openGraph: {
    title: 'Web Scraping & Browser Automation Services | Saurabh Dantani',
    description: 'Extract data from any website, automate workflows, and build scheduled data pipelines with Playwright and Python.',
    url: `${BASE_URL}/services/web-scraping`,
  },
  alternates: {
    canonical: `${BASE_URL}/services/web-scraping`,
  },
}

const features = [
  {
    icon: Target,
    title: 'Custom Data Extraction',
    description: 'Extract structured data from any website including e-commerce, social media, business directories, and more. Handle dynamic content, infinite scroll, and complex JavaScript-rendered pages.',
  },
  {
    icon: Zap,
    title: 'Automated Workflows',
    description: 'Build end-to-end automation pipelines that run on schedule (cron jobs), trigger based on events, or process data in real-time. Integrate with your existing systems via APIs.',
  },
  {
    icon: Shield,
    title: 'Anti-Bot Evasion',
    description: 'Implement sophisticated techniques to bypass anti-scraping measures including proxy rotation, user agent spoofing, CAPTCHA solving, and rate limiting.',
  },
]

const useCases = [
  'Lead generation from business directories and LinkedIn',
  'Price monitoring and competitor analysis for e-commerce',
  'Social media data extraction for market research',
  'Financial data scraping for investment analysis',
  'Real estate listing aggregation',
  'News and content monitoring',
  'Academic and research data collection',
]

const techStack = [
  'Playwright',
  'Puppeteer',
  'Python (BeautifulSoup, Scrapy)',
  'Node.js',
  'Headless Chrome',
  'Proxy rotation services',
  'CAPTCHA solving APIs',
  'AWS Lambda',
  'Docker containers',
  'PostgreSQL / MongoDB',
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Web Scraping & Browser Automation Services',
  serviceType: 'Data Extraction & Web Scraping',
  description:
    'Custom web scraping, browser automation, and scheduled data extraction pipelines using Playwright, Puppeteer, and Python.',
  provider: {
    '@type': 'Person',
    name: 'Saurabh Dantani',
    url: BASE_URL,
  },
  areaServed: 'Worldwide',
  url: `${BASE_URL}/services/web-scraping`,
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
      name: 'Web Scraping',
      item: `${BASE_URL}/services/web-scraping`,
    },
  ],
}

export default function WebScrapingService() {
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
            Web Scraping & Browser Automation
          </h1>

          <p className="text-lg text-slate-600 dark:text-zinc-400 leading-relaxed max-w-3xl">
            Extract valuable data from any website and automate repetitive workflows. I build custom scraping solutions
            that handle complex JavaScript-rendered pages, bypass anti-bot measures, and deliver clean, structured data
            ready for analysis.
          </p>

          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors"
            >
              Get a Quote
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Features */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">What I Build</h2>
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

        {/* Use Cases */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Common Use Cases</h2>
          <div className="bg-white dark:bg-zinc-950 rounded-xl p-6 border border-slate-200 dark:border-white/10">
            <ul className="grid sm:grid-cols-2 gap-3">
              {useCases.map((useCase, index) => (
                <li key={index} className="flex items-center gap-2 text-slate-600 dark:text-zinc-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  {useCase}
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
          <h3 className="text-2xl font-bold text-white mb-2">Ready to Automate Your Data Collection?</h3>
          <p className="text-blue-100 mb-6">
            Get a custom scraping solution that delivers clean, structured data on schedule.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-blue-600 font-semibold hover:bg-blue-50 transition-colors"
          >
            Start Your Project
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  )
}
