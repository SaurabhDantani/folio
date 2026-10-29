import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  LayoutDashboard,
  ShieldCheck,
  Users,
  Search,
  Zap,
  TrendingUp,
  FileSpreadsheet,
  Lock,
  HelpCircle,
} from 'lucide-react'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.saurabhdantani.work'

export const metadata: Metadata = {
  title: 'Custom CRM & Admin Dashboard Development Services',
  description:
    'Custom CRM platforms, business operations portals, and high-performance admin dashboards engineered with Next.js, TypeScript, PostgreSQL, and strict RBAC security. Zero per-seat licensing fees.',
  openGraph: {
    title: 'Custom CRM & Admin Dashboard Development Services | Saurabh Dantani',
    description:
      'Custom CRM platforms, business operations portals, and high-performance admin dashboards engineered with Next.js, TypeScript, PostgreSQL, and strict RBAC security. Zero per-seat licensing fees.',
    url: `${BASE_URL}/services/crm-dashboards`,
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/site.png`,
        width: 1200,
        height: 630,
        alt: 'Custom CRM & Admin Dashboard Development by Saurabh Dantani',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom CRM & Admin Dashboard Development Services | Saurabh Dantani',
    description:
      'Custom CRM platforms, business operations portals, and high-performance admin dashboards engineered with Next.js, TypeScript, PostgreSQL, and strict RBAC security. Zero per-seat licensing fees.',
    images: [`${BASE_URL}/site.png`],
  },
  alternates: {
    canonical: `${BASE_URL}/services/crm-dashboards`,
  },
}

const features = [
  {
    icon: LayoutDashboard,
    title: 'Tailored to Your Exact Sales Funnel',
    description:
      'No rigid off-the-shelf constraints. Every column, stage, lead status, conversion pipeline, and custom formula is designed specifically around how your team closes deals.',
  },
  {
    icon: Lock,
    title: 'Granular Role-Based Access Control (RBAC)',
    description:
      'Strict multi-tier permission matrix protecting sensitive revenue numbers, customer contact information, and audit logs. Easily segregate Admins, Sales Managers, SDRs, and External Contractors.',
  },
  {
    icon: Search,
    title: 'Sub-100ms Instant Search & Filtering',
    description:
      'Fast client-side indexing combined with optimized PostgreSQL trigram indexes (pg_trgm) allowing your team to search through 100,000+ lead records in milliseconds without page refreshes.',
  },
  {
    icon: FileSpreadsheet,
    title: 'Bulk Ingest & One-Click CSV/Excel Exports',
    description:
      'High-speed streaming parser handling 50,000+ row CSV imports with schema validation, automatic duplicate deduplication, and instantaneous formatted exports.',
  },
  {
    icon: Zap,
    title: 'Automated Scraping & Ingestion Pipelines',
    description:
      'Direct integration with custom Playwright scraping bots, Meta Ads Leads webhooks, and third-party APIs. New qualified opportunities populate sales queues automatically.',
  },
  {
    icon: TrendingUp,
    title: 'Real-Time Revenue & Conversion Metrics',
    description:
      'Live KPI charts, rep quota tracking, win/loss conversion ratios, and activity timeline audit trails rendered with interactive Recharts components.',
  },
]

const deliverables = [
  'Custom Next.js App Router CRM or operations portal',
  'PostgreSQL / Supabase database architecture with ACID transactions',
  'Multi-tier RBAC permission guards on frontend and API routes',
  'Instant full-text search with debounce & multi-tag filters',
  'Bulk lead import & export engine with deduplication heuristics',
  'Automated email / WhatsApp notification webhooks',
  'Activity audit logging tracking every record update',
  'Production deployment on AWS / Vercel with automated daily backups',
]

const processSteps = [
  {
    step: '01',
    title: 'Funnel & Workflow Discovery',
    desc: 'We map out your sales stages, lead qualification criteria, rep hierarchy, and identify repetitive tasks to automate.',
  },
  {
    step: '02',
    title: 'Schema & UI Wireframe Sprint',
    desc: 'We design the normalized PostgreSQL relational schema and review clickable UI prototypes for lead management tables and modals.',
  },
  {
    step: '03',
    title: 'Frontend & API Implementation',
    desc: 'We build the Next.js frontend with sub-100ms search, write secure server actions, and implement automated validation.',
  },
  {
    step: '04',
    title: 'Data Migration & Rollout',
    desc: 'We import your existing records from spreadsheets or legacy CRMs, verify user permissions, and train your operations team.',
  },
]

const pricingModels = [
  {
    tier: 'Operations Dashboard',
    price: '$1,800 – $3,200',
    timeline: '2–3 weeks',
    description: 'Internal admin portal for user management, order tracking, and core reporting metrics.',
    includes: [
      'Next.js admin dashboard UI',
      'User management & role permissions',
      'Data tables with sorting & pagination',
      'CSV export functionality',
      'PostgreSQL schema & deployment',
    ],
  },
  {
    tier: 'Custom Lead CRM Platform',
    price: '$3,800 – $7,000',
    timeline: '4–7 weeks',
    description: 'End-to-end sales CRM with automated lead ingest, scraping connections, and deep analytics.',
    popular: true,
    includes: [
      'Custom pipeline stages & kanban views',
      'Sub-100ms search on 100K+ records',
      'Automated scraper / webhook ingestion',
      'Granular RBAC (Admin, Manager, Rep)',
      'Activity timeline & audit trail',
      '30 days post-launch support',
    ],
  },
  {
    tier: 'Dedicated Dashboard Retainer',
    price: '$2,400 / month',
    timeline: 'Ongoing monthly',
    description: 'Continuous feature expansion, new internal tool builds, and workflow automation.',
    includes: [
      '20–25 hours dedicated engineering per week',
      'Rapid turnaround for new operational features',
      'Direct Slack/Discord access',
      'Database query optimization & indexing',
      'Cancel anytime',
    ],
  },
]

const faqs = [
  {
    q: 'Why should we build a custom CRM instead of paying for HubSpot or Salesforce?',
    a: 'Off-the-shelf CRMs charge hefty per-seat monthly fees ($100–$150/user/month). For a 20-person sales team, that is $24,000–$36,000 every single year — for rigid tools that force you into their workflow. A custom CRM is a one-time build that you own forever with zero per-user fees, saving tens of thousands in licensing while aligning 100% with your operational processes.',
  },
  {
    q: 'Can we migrate our existing customer data from spreadsheets or our old CRM?',
    a: 'Yes. I write automated ETL scripts that sanitize, deduplicate, and import your existing customer lists, sales histories, and notes from Excel, CSV, or legacy CRM API exports into your new database with complete data integrity.',
  },
  {
    q: 'How fast is the search functionality when our database reaches 100,000+ leads?',
    a: 'Lightning fast. By combining PostgreSQL generalized inverted indexes (GIN) with trigram matching and client-side memory caching, search queries return matching accounts in under 100 milliseconds, even across hundreds of thousands of contacts.',
  },
  {
    q: 'Is our sensitive company and customer data secure?',
    a: 'Absolutely. Your platform runs entirely on your own private cloud infrastructure (AWS or Supabase). All connections use SSL encryption, passwords use bcrypt/argon2 hashing, and database queries are parameterized to eliminate SQL injection vulnerabilities.',
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Custom CRM & Admin Dashboard Development Services',
  serviceType: 'CRM & Admin Dashboard Engineering',
  description:
    'Custom CRM platforms, business development portals, and admin dashboards built with Next.js and PostgreSQL by Saurabh Dantani.',
  provider: {
    '@type': 'Person',
    name: 'Saurabh Dantani',
    url: BASE_URL,
  },
  areaServed: 'Worldwide',
  url: `${BASE_URL}/services/crm-dashboards`,
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
      name: 'CRM & Admin Dashboards',
      item: `${BASE_URL}/services/crm-dashboards`,
    },
  ],
}

export default function CRMDashboardsService() {
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
            Operations &amp; Sales Technology
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 leading-tight">
            Custom CRM &amp; Admin Dashboard Development
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-zinc-300 leading-relaxed max-w-3xl mb-8">
            Escape the per-seat SaaS tax. I build tailored, high-speed CRM platforms and internal operations dashboards with Next.js, TypeScript, PostgreSQL, and strict RBAC controls — designed 100% around your business workflow.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm transition-all shadow-md shadow-sky-600/20 hover:scale-105 active:scale-95"
            >
              <span>Build Your Custom CRM</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/blogs/build-vs-buy-custom-lead-gen-crm"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-slate-300 dark:border-white/10 bg-white dark:bg-white/[0.04] text-slate-800 dark:text-zinc-200 hover:bg-slate-100 dark:hover:bg-white/10 text-sm font-semibold transition-all"
            >
              <span>Read Build vs Buy Guide</span>
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
              Built for Sales Velocity and Operational Security
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-2xl">
              Generic software forces your team to adapt to its limitations. A custom dashboard empowers your team with instant search, automated lead routing, and complete data sovereignty.
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

        {/* 4-Step Process */}
        <section aria-labelledby="process-heading">
          <div className="mb-10">
            <h2 id="process-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
              How We Deliver Your Custom CRM
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-2xl">
              Agile development sprints with weekly interactive staging demos and seamless data migration.
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

        {/* Case Study Spotlight */}
        <section className="rounded-3xl border border-sky-500/20 bg-gradient-to-br from-sky-500/5 via-blue-500/5 to-transparent p-8 sm:p-10">
          <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
            <div className="max-w-2xl">
              <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider block mb-2">
                Production Case Study
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-4">
                US-Based Lead Generation &amp; Sales CRM
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed mb-6">
                Designed and built a full-stack custom CRM for a US business development agency. Replaced multiple third-party SaaS subscriptions with an integrated Next.js platform featuring sub-100ms client search, automated lead verification scrapers, and CSV export automation.
              </p>
              
              <div className="grid grid-cols-3 gap-4 mb-6 pt-4 border-t border-slate-200 dark:border-white/10">
                <div>
                  <div className="text-2xl font-black text-sky-600 dark:text-sky-400">$1,800/mo</div>
                  <div className="text-xs text-slate-500">SaaS Fees Saved</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-sky-600 dark:text-sky-400">2x</div>
                  <div className="text-xs text-slate-500">Rep Outreach Speed</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-sky-600 dark:text-sky-400">0 Seats</div>
                  <div className="text-xs text-slate-500">Unlimited Users</div>
                </div>
              </div>

              <Link
                href="/projects/lead-generation-crm"
                className="inline-flex items-center gap-2 text-sm font-bold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors"
              >
                <span>Read Full CRM Case Study &amp; Architecture</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="w-full lg:w-72 shrink-0 p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/10 text-xs space-y-3">
              <div className="font-bold text-slate-900 dark:text-white pb-2 border-b border-slate-100 dark:border-white/5">
                Dashboard Stack
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma', 'Recharts', 'Redis', 'Docker'].map((tech) => (
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

        {/* Pricing Models */}
        <section aria-labelledby="pricing-heading">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <h2 id="pricing-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
              Transparent CRM Pricing Models
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400">
              One-time investment with zero recurring per-user licensing fees.
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
              Answers regarding migration, per-seat costs, and customization.
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

        {/* Related Case Studies */}
        <section className="pt-8 border-t border-slate-200 dark:border-white/10">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
            Related Case Studies &amp; Articles
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
                US-Based Lead Generation CRM Platform
              </h4>
            </Link>
            <Link
              href="/services/web-scraping"
              className="p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] hover:border-sky-500/40 transition group"
            >
              <div className="text-[10px] uppercase font-bold text-sky-500 mb-1">Service</div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-sky-500 transition line-clamp-2">
                Web Scraping &amp; Browser Automation
              </h4>
            </Link>
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 p-8 sm:p-12 text-center text-white shadow-xl">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-3">
            Ready to Build Your Custom Sales CRM?
          </h2>
          <p className="text-blue-100 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Stop paying thousands every month for tools you don&apos;t own. Let&apos;s build a CRM tailored directly to your team.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-slate-900 font-bold text-sm hover:bg-slate-100 transition shadow-md hover:scale-105 active:scale-95"
          >
            <span>Request a Custom CRM Proposal</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  )
}

