import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Rocket,
  Layout,
  Globe,
  Zap,
  ShieldCheck,
  Code2,
  Cpu,
  Layers,
  HelpCircle,
  Briefcase,
  DollarSign,
  TrendingUp,
} from 'lucide-react'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.saurabhdantani.work'

export const metadata: Metadata = {
  title: 'Next.js & Full Stack Web Development Services',
  description:
    'Custom Next.js & React full-stack web applications. Server Components, TypeScript architecture, sub-second load times, and SEO-optimized web platforms built for scale.',
  openGraph: {
    title: 'Next.js & Full Stack Web Development Services | Saurabh Dantani',
    description:
      'Custom Next.js & React full-stack web applications. Server Components, TypeScript architecture, sub-second load times, and SEO-optimized web platforms built for scale.',
    url: `${BASE_URL}/services/nextjs-development`,
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/site.png`,
        width: 1200,
        height: 630,
        alt: 'Next.js Web Development by Saurabh Dantani',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js & Full Stack Web Development Services | Saurabh Dantani',
    description:
      'Custom Next.js & React full-stack web applications. Server Components, TypeScript architecture, sub-second load times, and SEO-optimized web platforms built for scale.',
    images: [`${BASE_URL}/site.png`],
  },
  alternates: {
    canonical: `${BASE_URL}/services/nextjs-development`,
  },
}

const features = [
  {
    icon: Rocket,
    title: 'App Router & Server Components (RSC)',
    description:
      'Zero-bundle-overhead server rendering. We stream dynamic UI directly from edge nodes while keeping sensitive business logic and heavy libraries off client devices, achieving sub-second Largest Contentful Paint (LCP).',
  },
  {
    icon: Globe,
    title: 'Programmatic SEO & Core Web Vitals',
    description:
      'Built-in structured JSON-LD schemas, dynamic OpenGraph cards, automated sitemap generators, and 95+ Google Lighthouse scores across desktop and mobile viewports.',
  },
  {
    icon: Code2,
    title: 'Strict TypeScript & Modular Systems',
    description:
      'End-to-end type safety spanning database queries, server actions, and UI components. Clean modular architecture that prevents runtime crashes and scales cleanly with multiple contributors.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Authentication & Multi-Tenancy',
    description:
      'Production-ready authentication using NextAuth / Auth.js, JWT tokens, OAuth providers, and multi-tenant database isolation patterns (PostgreSQL schema or tenantId isolation).',
  },
  {
    icon: Zap,
    title: 'Sub-100ms API Routes & Server Actions',
    description:
      'Direct database mutations with built-in CSRF validation, optimistic UI state updates, and Redis caching layers for instant user feedback and resilient error boundaries.',
  },
  {
    icon: Cpu,
    title: 'Real-Time Sync & WebSocket Feeds',
    description:
      'Bi-directional state sync with Socket.IO, live dashboard event streams, push notifications, and automated background jobs running on dedicated Redis queues.',
  },
]

const deliverables = [
  'Custom Next.js SaaS platforms and enterprise portals',
  'High-converting marketing landing pages with Meta Pixel & CAPI',
  'Role-based admin dashboards and customer portals (RBAC)',
  'E-commerce storefronts with Stripe / PayPal checkout flows',
  'REST & GraphQL API route design with Zod validation',
  'Database architecture (PostgreSQL, Supabase, MongoDB, Prisma)',
  'Automated CI/CD pipelines on Vercel, AWS EC2, or Docker',
  'Automated unit & integration test suites',
]

const processSteps = [
  {
    step: '01',
    title: 'Technical Scoping & Architecture',
    desc: 'We review user journeys, choose the optimal state and database schemas, plan RSC streaming boundaries, and establish API contracts.',
  },
  {
    step: '02',
    title: 'Iterative Sprint Builds',
    desc: 'You receive weekly staging previews. Every pull request runs through strict automated TypeScript validation and linting checks.',
  },
  {
    step: '03',
    title: 'Performance & Security Hardening',
    desc: 'Comprehensive Lighthouse audit, Core Web Vitals profiling, OWASP security sanity checks, and rate-limiting setup.',
  },
  {
    step: '04',
    title: 'Production Handover & Support',
    desc: 'Zero-downtime deployment, environment configuration, full IP/code repository transfer, and 30 days of included post-launch support.',
  },
]

const pricingModels = [
  {
    tier: 'MVP Sprint',
    price: '$1,500 – $2,800',
    timeline: '2–3 weeks',
    description: 'Perfect for startups and founders needing a fast, production-ready product launch.',
    includes: [
      'Core feature set with App Router',
      'User auth & database schema setup',
      'Mobile-responsive Tailwind UI',
      'SEO metadata & sitemap configuration',
      'Deployment on Vercel or AWS',
    ],
  },
  {
    tier: 'Full-Scale Platform',
    price: '$3,200 – $6,500',
    timeline: '4–7 weeks',
    description: 'End-to-end custom web app, multi-tenant SaaS, or complex operations platform.',
    popular: true,
    includes: [
      'Multi-role RBAC permissions',
      'Payment gateways (Stripe/PayPal)',
      'Real-time notifications & WebSockets',
      'Admin analytics & export dashboards',
      'Full CI/CD & staging environment',
      '30 days dedicated warranty support',
    ],
  },
  {
    tier: 'Monthly Dedicated Retainer',
    price: '$2,400 / month',
    timeline: 'Ongoing sprint cycles',
    description: 'Continuous feature engineering, performance optimization, and architectural support.',
    includes: [
      '20–25 hours dedicated engineering per week',
      'Direct Slack/Discord communication',
      'Sprint planning and priority execution',
      'Code reviews & infrastructure monitoring',
      'No long-term lock-in (month-to-month)',
    ],
  },
]

const faqs = [
  {
    q: 'Why should I choose Next.js over a standard React Single Page App (SPA)?',
    a: 'Standard React SPAs download an empty HTML shell and rely on the browser to execute JavaScript before rendering content. This hurts initial page load speeds and search engine indexing. Next.js server-renders content on edge servers, providing instant first-contentful paint, flawless SEO indexing, and optimal Core Web Vitals.',
  },
  {
    q: 'Who owns the intellectual property and code repository?',
    a: 'You do. 100% of the code, git history, documentation, and infrastructure credentials are owned exclusively by you under your chosen license upon milestone completion.',
  },
  {
    q: 'Do you handle backend APIs and database architecture as well?',
    a: 'Yes. As a Full Stack developer with 4+ years of experience in Node.js, NestJS, and .NET Core, I design clean database schemas (PostgreSQL, MongoDB, MSSQL), write server actions, build REST/GraphQL endpoints, and configure cloud hosting.',
  },
  {
    q: 'How do we communicate throughout the development lifecycle?',
    a: 'We communicate via your preferred channel — Slack, Discord, Microsoft Teams, or WhatsApp — combined with weekly video check-ins and interactive staging preview URLs for hands-on testing.',
  },
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
      name: 'Next.js Development',
      item: `${BASE_URL}/services/nextjs-development`,
    },
  ],
}

export default function NextJsService() {
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
            Next.js &amp; React Engineering
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 leading-tight">
            Next.js &amp; Full Stack Web Development Services
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-zinc-300 leading-relaxed max-w-3xl mb-8">
            I engineer blazing-fast, server-rendered Next.js applications that eliminate client bloat, ace Core Web Vitals, and deliver scalable full-stack capabilities for modern businesses.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm transition-all shadow-md shadow-sky-600/20 hover:scale-105 active:scale-95"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/projects/lead-generation-crm"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-slate-300 dark:border-white/10 bg-white dark:bg-white/[0.04] text-slate-800 dark:text-zinc-200 hover:bg-slate-100 dark:hover:bg-white/10 text-sm font-semibold transition-all"
            >
              <span>View Matching Case Study</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="container max-w-5xl mx-auto px-4 sm:px-6 py-16 space-y-20">
        
        {/* Core Capabilities */}
        <section aria-labelledby="capabilities-heading">
          <div className="mb-8">
            <h2 id="capabilities-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
              Production Capabilities Built for Enterprise Performance
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-2xl">
              Unlike generic agencies that rely on heavy templates and bloated plugins, I build lightweight, type-safe Next.js platforms designed to scale to hundreds of thousands of users.
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

        {/* Deliverables Checklist */}
        <section className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] p-8 sm:p-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            What You Receive
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {deliverables.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Step-by-Step Engineering Process */}
        <section aria-labelledby="process-heading">
          <div className="mb-10">
            <h2 id="process-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
              Transparent 4-Phase Delivery Process
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-2xl">
              No black boxes. You get complete transparency through regular staging deployments, clean commit histories, and weekly review meetings.
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
                Featured Case Study
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-4">
                US-Based Lead Generation CRM Platform
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed mb-6">
                Architected and deployed a multi-tenant business development CRM powered by Next.js App Router, automated Playwright scraping pipelines, and PostgreSQL. Handles thousands of company leads with sub-100ms client search, role-based territory controls, and automated CSV export pipelines.
              </p>
              
              <div className="grid grid-cols-3 gap-4 mb-6 pt-4 border-t border-slate-200 dark:border-white/10">
                <div>
                  <div className="text-2xl font-black text-sky-600 dark:text-sky-400">99+</div>
                  <div className="text-xs text-slate-500">Lighthouse Score</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-sky-600 dark:text-sky-400">&lt;100ms</div>
                  <div className="text-xs text-slate-500">Query Latency</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-sky-600 dark:text-sky-400">100%</div>
                  <div className="text-xs text-slate-500">Code Ownership</div>
                </div>
              </div>

              <Link
                href="/projects/lead-generation-crm"
                className="inline-flex items-center gap-2 text-sm font-bold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors"
              >
                <span>Read Full Case Study &amp; Architecture</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="w-full lg:w-72 shrink-0 p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/10 text-xs space-y-3">
              <div className="font-bold text-slate-900 dark:text-white pb-2 border-b border-slate-100 dark:border-white/5">
                Tech Stack Used
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['Next.js 15', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Playwright', 'Redis', 'Docker'].map((tech) => (
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
              Transparent Pricing &amp; Engagement Models
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400">
              Clear milestone-based proposals with no hidden fees. Choose the engagement that aligns with your timeline and roadmap.
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

        {/* FAQ Section */}
        <section aria-labelledby="faq-heading">
          <div className="mb-8">
            <h2 id="faq-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-2xl">
              Everything you need to know about working with an independent senior engineer instead of an agency.
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
            Related Engineering Articles &amp; Case Studies
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/blogs/build-vs-buy-custom-lead-gen-crm"
              className="p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] hover:border-sky-500/40 transition group"
            >
              <div className="text-[10px] uppercase font-bold text-sky-500 mb-1">Architecture Guide</div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-sky-500 transition line-clamp-2">
                Build vs Buy: Why Fast-Growing Companies Build Custom Lead-Gen CRMs
              </h4>
            </Link>
            <Link
              href="/projects/lead-generation-crm"
              className="p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] hover:border-sky-500/40 transition group"
            >
              <div className="text-[10px] uppercase font-bold text-sky-500 mb-1">Case Study</div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-sky-500 transition line-clamp-2">
                US-Based Lead Generation &amp; CRM Platform
              </h4>
            </Link>
            <Link
              href="/services/crm-dashboards"
              className="p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] hover:border-sky-500/40 transition group"
            >
              <div className="text-[10px] uppercase font-bold text-sky-500 mb-1">Service</div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-sky-500 transition line-clamp-2">
                Custom CRM &amp; Admin Dashboard Development
              </h4>
            </Link>
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 p-8 sm:p-12 text-center text-white shadow-xl">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-3">
            Ready to Build Your Next.js Web Application?
          </h2>
          <p className="text-blue-100 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Let&apos;s turn your product specs into a lightning-fast, production-grade platform. Available worldwide for contract and milestone builds.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-slate-900 font-bold text-sm hover:bg-slate-100 transition shadow-md hover:scale-105 active:scale-95"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  )
}
