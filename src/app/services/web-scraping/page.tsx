import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Target,
  Zap,
  Shield,
  Database,
  Cpu,
  RefreshCw,
  HelpCircle,
  Code2,
} from 'lucide-react'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.saurabhdantani.work'

export const metadata: Metadata = {
  title: 'Web Scraping & Browser Automation Services',
  description:
    'Custom web scraping, browser automation, and data pipeline engineering. Extract complex JavaScript-rendered data, bypass anti-bots, and deploy scheduled cron pipelines with Playwright & Python.',
  openGraph: {
    title: 'Web Scraping & Browser Automation Services | Saurabh Dantani',
    description:
      'Custom web scraping, browser automation, and data pipeline engineering. Extract complex JavaScript-rendered data, bypass anti-bots, and deploy scheduled cron pipelines with Playwright & Python.',
    url: `${BASE_URL}/services/web-scraping`,
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/site.png`,
        width: 1200,
        height: 630,
        alt: 'Web Scraping Services by Saurabh Dantani',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Scraping & Browser Automation Services | Saurabh Dantani',
    description:
      'Custom web scraping, browser automation, and data pipeline engineering. Extract complex JavaScript-rendered data, bypass anti-bots, and deploy scheduled cron pipelines with Playwright & Python.',
    images: [`${BASE_URL}/site.png`],
  },
  alternates: {
    canonical: `${BASE_URL}/services/web-scraping`,
  },
}

const features = [
  {
    icon: Target,
    title: 'Headless Browser Cluster Orchestration',
    description:
      'Execution using Playwright and Puppeteer across dynamic single-page apps (SPAs), infinite scrolling grids, shadow DOMs, canvas elements, and client-rendered JavaScript that standard HTTP scrapers fail to read.',
  },
  {
    icon: Shield,
    title: 'Anti-Bot & WAF Defense Evasion',
    description:
      'Stealth configurations engineered to bypass Cloudflare Turnstile, Datadome, Akamai, and PerimeterX. Includes TLS fingerprint matching, canvas spoofing, user-agent rotation, and human behavior emulation.',
  },
  {
    icon: RefreshCw,
    title: 'Residential & Mobile Proxy Pools',
    description:
      'Automated IP rotation across millions of geo-targeted residential and 4G/5G mobile proxies. Intelligent sticky sessions, automatic retry backoffs, and ban detection to ensure 99.8% extraction completion.',
  },
  {
    icon: Database,
    title: 'Automated ETL & Schema Validation',
    description:
      'Strict data transformation using Pydantic and Zod. Automated deduplication, type casting, normalization, and direct streaming into PostgreSQL, MongoDB, Pinecone, or S3 buckets.',
  },
  {
    icon: Zap,
    title: 'Scheduled Cron & Event-Driven Triggers',
    description:
      'Autonomous cron pipelines running on Docker, AWS ECS, or serverless workers. Webhook triggers that dispatch clean records into your CRM, Slack inboxes, or proprietary downstream models.',
  },
  {
    icon: Cpu,
    title: 'Automated CAPTCHA Solving',
    description:
      'Integrated API solvers for reCAPTCHA v2/v3, hCaptcha, GeeTest, and image puzzles with sub-5-second turnaround times and zero manual human oversight.',
  },
]

const useCases = [
  'B2B lead generation from LinkedIn, Apollo, and niche directories',
  'Real estate listing aggregation (Zillow, Realtor, Redfin)',
  'E-commerce price monitoring and inventory tracking (Amazon, Walmart, Shopify)',
  'Financial data extraction and sentiment indexing',
  'Job market analytics and compensation benchmarking',
  'Regulatory, public records, and court filing extraction',
]

const deliverables = [
  'Custom Python or Node.js Playwright scraping engine',
  'Automated proxy rotation & session management pipeline',
  'PostgreSQL, MongoDB, or S3 schema design with automatic deduplication',
  'Export pipelines (CSV, JSON, REST API endpoint, Webhooks)',
  'Docker containerization for push-button deployment',
  'Automated monitoring alerts on Slack/Discord for DOM changes',
  'Comprehensive documentation & full repository code ownership',
  '30 days bug-fix warranty & selector maintenance',
]

const processSteps = [
  {
    step: '01',
    title: 'Target Profiling & DOM Analysis',
    desc: 'We analyze target site defenses (WAFs, rate limits, CAPTCHAs), map out data structures, and determine the optimal proxy architecture.',
  },
  {
    step: '02',
    title: 'Stealth Prototype & Validation',
    desc: 'We deploy test scraper workers against 1,000 live records to measure evasion reliability, selector stability, and throughput.',
  },
  {
    step: '03',
    title: 'Production Pipeline & Storage',
    desc: 'We containerize the engine, integrate proxy rotation pools, write database ingestion routines, and set up cron schedules.',
  },
  {
    step: '04',
    title: 'Monitoring & Handover',
    desc: 'We configure DOM change alert webhooks, verify automated exports, and transfer repository credentials with complete setup guides.',
  },
]

const pricingModels = [
  {
    tier: 'Target Site Scraper',
    price: '$1,200 – $2,200',
    timeline: '1–2 weeks',
    description: 'Custom scraper for a single complex target with anti-bot evasion and structured export.',
    includes: [
      'Single dynamic target site extraction',
      'Playwright / Python engine build',
      'Anti-detect & proxy rotation setup',
      'CSV / JSON / Database export',
      'Docker containerized deployment',
    ],
  },
  {
    tier: 'Multi-Source Data Engine',
    price: '$2,800 – $5,500',
    timeline: '3–5 weeks',
    description: 'Continuous data pipeline aggregating 3–5 sources with automated deduplication & CRM ingestion.',
    popular: true,
    includes: [
      '3 to 5 target platforms with custom parsers',
      'Automated scheduled cron workers',
      'Centralized PostgreSQL / MongoDB storage',
      'Automated CAPTCHA solver integration',
      'Direct API / webhook sync into your app',
      '30-day selector maintenance warranty',
    ],
  },
  {
    tier: 'Pipeline Maintenance Retainer',
    price: '$1,500 / month',
    timeline: 'Ongoing monthly',
    description: 'Continuous monitoring, proxy orchestration, and instant DOM selector fixes when targets update.',
    includes: [
      'Daily health monitoring & alerts',
      'Immediate selector updates within 24 hours',
      'Proxy pool bandwidth management',
      'New data field additions on demand',
      'Monthly data quality audits',
    ],
  },
]

const faqs = [
  {
    q: 'Is web scraping legal?',
    a: 'Yes, scraping publicly available facts and data is legal under landmark court precedents, including the US 9th Circuit Court of Appeals ruling in hiQ Labs v. LinkedIn (2022). Scraping does not violate the CFAA when accessing public data that does not require login credentials or circumvent authentication barriers.',
  },
  {
    q: 'How do you handle websites that block IP addresses or show Cloudflare challenges?',
    a: 'I use stealth browser automation with patched Chromium binaries, TLS fingerprint spoofing, and rotating residential IP pools where requests emanate from genuine ISP nodes. For CAPTCHAs, automated solver APIs resolve challenges in under 4 seconds.',
  },
  {
    q: 'What happens when the target website redesigns its layout or changes its code?',
    a: 'Target websites periodically update their HTML. I build resilient scrapers using semantic selectors, schema markup anchors, and API endpoint interception rather than brittle CSS classes. Every project also includes automated failure alerts and 30 days of free selector maintenance.',
  },
  {
    q: 'In what format can the extracted data be delivered?',
    a: 'Data can be streamed directly into your database (PostgreSQL, MongoDB, Supabase), stored as JSON/CSV in an Amazon S3 bucket, delivered via real-time webhooks, or injected directly into tools like Airtable, Google Sheets, or your CRM.',
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Web Scraping & Browser Automation Services',
  serviceType: 'Data Extraction & Web Scraping',
  description:
    'Custom web scraping, browser automation, and scheduled data extraction pipelines using Playwright, Puppeteer, and Python by Saurabh Dantani.',
  provider: {
    '@type': 'Person',
    name: 'Saurabh Dantani',
    url: BASE_URL,
  },
  areaServed: 'Worldwide',
  url: `${BASE_URL}/services/web-scraping`,
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
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
    <div className="min-h-screen bg-slate-50 dark:bg-[#09090b] text-slate-900 dark:text-zinc-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Header */}
      <div className="bg-white dark:bg-zinc-950 border-b border-slate-200 dark:border-white/10 pt-10 pb-16">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-zinc-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Services
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/20 bg-sky-500/10 text-sky-600 dark:text-sky-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Data Engineering &amp; Automation
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 leading-tight">
            Web Scraping &amp; Browser Automation Services
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-zinc-300 leading-relaxed max-w-3xl mb-8">
            Stop losing hours to manual data collection or getting blocked by anti-bot walls. I build enterprise scraping engines and scheduled data pipelines using Playwright, Puppeteer, and Python that deliver clean, structured data on autopilot.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm transition-all shadow-md shadow-sky-600/20 hover:scale-105 active:scale-95"
            >
              <span>Request Scraping Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/blogs/how-much-does-a-web-scraper-cost"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-slate-300 dark:border-white/10 bg-white dark:bg-white/[0.04] text-slate-800 dark:text-zinc-200 hover:bg-slate-100 dark:hover:bg-white/10 text-sm font-semibold transition-all"
            >
              <span>Read Scraper Pricing Guide</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="container max-w-5xl mx-auto px-4 sm:px-6 py-16 space-y-20">

        {/* Features / Architecture */}
        <section aria-labelledby="features-heading">
          <div className="mb-8">
            <h2 id="features-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
              Engineered to Overcome Complex Anti-Scraping Defenses
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-2xl">
              Modern websites use sophisticated bot detection, fingerprinting, and dynamic JavaScript rendering. Here is how we build extraction pipelines that reliably collect data at scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] p-6 hover:border-sky-500/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Common Use Cases */}
        <section className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] p-8 sm:p-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            High-Value Scraping Use Cases
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {useCases.map((useCase, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>{useCase}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Step-by-Step Delivery Process */}
        <section aria-labelledby="process-heading">
          <div className="mb-10">
            <h2 id="process-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
              How We Build Your Extraction Pipeline
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-2xl">
              From initial defense audit to scheduled production deployment, every step is tested against live anti-bot firewalls.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] p-6 relative flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl font-extrabold text-sky-600 dark:text-sky-400 mb-3">
                    {step.step}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Real Case Study Spotlight */}
        <section className="rounded-3xl border border-sky-500/20 bg-gradient-to-br from-sky-500/5 via-blue-500/5 to-transparent p-8 sm:p-10">
          <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
            <div className="max-w-2xl">
              <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider block mb-2">
                Production Case Study
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-4">
                Python Web Scraping &amp; Data Intelligence Platform
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed mb-6">
                Engineered a distributed Python scraping system that processes thousands of competitor catalog pages daily. Integrated residential proxy rotation, Playwright headless workers, and automated deduplication routines with zero IP bans.
              </p>
              
              <div className="grid grid-cols-3 gap-4 mb-6 pt-4 border-t border-slate-200 dark:border-white/10">
                <div>
                  <div className="text-2xl font-black text-sky-600 dark:text-sky-400">50K+</div>
                  <div className="text-xs text-slate-500">Pages Daily</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-sky-600 dark:text-sky-400">99.8%</div>
                  <div className="text-xs text-slate-500">Extraction Success</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-sky-600 dark:text-sky-400">0 Bans</div>
                  <div className="text-xs text-slate-500">Anti-Bot Shield</div>
                </div>
              </div>

              <Link
                href="/projects/python-web-scraping-and-data-intelligence-platform"
                className="inline-flex items-center gap-2 text-sm font-bold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors"
              >
                <span>Read Full Scraping Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="w-full lg:w-72 shrink-0 p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/10 text-xs space-y-3">
              <div className="font-bold text-slate-900 dark:text-white pb-2 border-b border-slate-100 dark:border-white/5">
                Scraping Stack
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['Playwright', 'Python', 'Puppeteer', 'Residential Proxies', 'Docker', 'PostgreSQL', 'Redis', 'AWS EC2'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/5 font-medium text-slate-700 dark:text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Transparent Pricing Models */}
        <section aria-labelledby="pricing-heading">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <h2 id="pricing-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
              Transparent Scraping Pricing Models
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400">
              Clear fixed-fee proposals based on target complexity and anti-bot defense level.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pricingModels.map((plan) => (
              <div
                key={plan.tier}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between border ${
                  plan.popular
                    ? 'border-sky-500 bg-sky-50/50 dark:bg-sky-950/20 relative shadow-lg'
                    : 'border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02]'
                }`}
              >
                <div>
                  {plan.popular && (
                    <div className="text-[10px] uppercase font-bold tracking-wider text-sky-600 dark:text-sky-400 mb-2">
                      Most Common
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {plan.tier}
                  </h3>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-2">
                    {plan.price}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-zinc-400 mb-4 font-medium">
                    Typical timeline: {plan.timeline}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  <ul className="space-y-2.5 pt-4 border-t border-slate-200/80 dark:border-white/10 text-xs text-slate-700 dark:text-zinc-300 mb-8">
                    {plan.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className={`w-full text-center py-3 rounded-full text-xs font-bold transition-all ${
                    plan.popular
                      ? 'bg-sky-600 hover:bg-sky-500 text-white shadow-md'
                      : 'bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-zinc-200 text-white dark:text-black'
                  }`}
                >
                  Choose {plan.tier}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section aria-labelledby="faq-heading">
          <div className="mb-8">
            <h2 id="faq-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-2xl">
              Answers to technical, legal, and operational questions about custom data scraping.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] p-6"
              >
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed pl-7">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Case Studies & Guides */}
        <section className="pt-8 border-t border-slate-200 dark:border-white/10">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
            Related Scraping Guides &amp; Projects
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/blogs/how-much-does-a-web-scraper-cost"
              className="p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] hover:border-sky-500/40 transition group"
            >
              <div className="text-[10px] uppercase font-bold text-sky-500 mb-1">Pricing Guide</div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-sky-500 transition line-clamp-2">
                How Much Does a Web Scraper Cost in 2026? Pricing, Proxies &amp; Architecture
              </h4>
            </Link>
            <Link
              href="/blogs/web-scraping-vs-official-apis"
              className="p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] hover:border-sky-500/40 transition group"
            >
              <div className="text-[10px] uppercase font-bold text-sky-500 mb-1">Engineering Deep Dive</div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-sky-500 transition line-clamp-2">
                Web Scraping vs Official APIs: Anti-Bot Defense &amp; Scalability
              </h4>
            </Link>
            <Link
              href="/projects/lead-generation-crm"
              className="p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] hover:border-sky-500/40 transition group"
            >
              <div className="text-[10px] uppercase font-bold text-sky-500 mb-1">Case Study</div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-sky-500 transition line-clamp-2">
                US-Based Lead Generation CRM Platform
              </h4>
            </Link>
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 p-8 sm:p-12 text-center text-white shadow-xl">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-3">
            Ready to Automate Your Data Collection?
          </h2>
          <p className="text-blue-100 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Send me your target URL and requested data fields. I will evaluate anti-bot defenses and return a clear technical proposal.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-slate-900 font-bold text-sm hover:bg-slate-100 transition shadow-md hover:scale-105 active:scale-95"
          >
            <span>Get a Scraping Proposal</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  )
}
