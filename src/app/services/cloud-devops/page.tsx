import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Cloud,
  Server,
  ShieldCheck,
  Terminal,
  Cpu,
  Lock,
  Zap,
  HelpCircle,
  RefreshCw,
} from 'lucide-react'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.saurabhdantani.work'

export const metadata: Metadata = {
  title: 'AWS Cloud Infrastructure & DevOps Freelance Services',
  description:
    'Production AWS infrastructure setup, Docker containerization, Nginx reverse proxy configuration, PM2 cluster orchestration, and automated CI/CD deployment pipelines by Saurabh Dantani.',
  openGraph: {
    title: 'AWS Cloud Infrastructure & DevOps Freelance Services | Saurabh Dantani',
    description:
      'Production AWS infrastructure setup, Docker containerization, Nginx reverse proxy configuration, PM2 cluster orchestration, and automated CI/CD deployment pipelines by Saurabh Dantani.',
    url: `${BASE_URL}/services/cloud-devops`,
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/site.png`,
        width: 1200,
        height: 630,
        alt: 'AWS Cloud Infrastructure & DevOps Services by Saurabh Dantani',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AWS Cloud Infrastructure & DevOps Freelance Services | Saurabh Dantani',
    description:
      'Production AWS infrastructure setup, Docker containerization, Nginx reverse proxy configuration, PM2 cluster orchestration, and automated CI/CD deployment pipelines by Saurabh Dantani.',
    images: [`${BASE_URL}/site.png`],
  },
  alternates: {
    canonical: `${BASE_URL}/services/cloud-devops`,
  },
}

const features = [
  {
    icon: Cloud,
    title: 'AWS Production Infrastructure Architecture',
    description:
      'Architect robust production environments across Amazon EC2, RDS (PostgreSQL/MySQL), S3 bucket asset pipelines, and CloudFront global CDNs configured for 99.99% reliability and minimum latency.',
  },
  {
    icon: Terminal,
    title: 'Docker Containerization & Multi-Stage Builds',
    description:
      'Lean, production-hardened Docker images built with multi-stage compilations that trim container image sizes by up to 80%, reduce attack surfaces, and run seamlessly across staging and production.',
  },
  {
    icon: ShieldCheck,
    title: 'Nginx Reverse Proxy & Automated SSL',
    description:
      'Production Nginx configurations featuring HTTP/2 and HTTP/3 support, Gzip/Brotli compression, rate limiting against brute-force attacks, and automated Let’s Encrypt SSL/TLS certbot renewal.',
  },
  {
    icon: Cpu,
    title: 'PM2 Cluster Mode & Daemon Orchestration',
    description:
      'Zero-downtime deployments utilizing PM2 cluster mode to scale Node.js processes across all available CPU cores, coupled with auto-restarts on unexpected unhandled exceptions or memory leaks.',
  },
  {
    icon: Zap,
    title: 'Automated CI/CD Deployment Pipelines',
    description:
      'GitHub Actions continuous integration pipelines that run automated test suites, linting checks, build validation, and trigger zero-downtime atomic deployments directly upon merging to main.',
  },
  {
    icon: Lock,
    title: 'Security Hardening & Automated Backups',
    description:
      'AWS Security Groups, strict firewall rules (UFW), SSH key-only access, non-root container users, and scheduled daily automated snapshots with cross-region disaster recovery.',
  },
]

const deliverables = [
  'Provisioned and secured AWS EC2 instance or ECS cluster',
  'PostgreSQL / MySQL on AWS RDS with automated snapshots',
  'Amazon S3 storage bucket setup with IAM restricted policies',
  'Nginx reverse proxy with SSL / TLS certificates (A+ rating)',
  'Multi-stage Dockerfile and docker-compose.yml configurations',
  'GitHub Actions CI/CD pipeline for push-to-deploy workflows',
  'Automated daily database backups to S3 with retention policies',
  'Detailed runbook documentation for server maintenance and monitoring',
]

const processSteps = [
  {
    step: '01',
    title: 'Infrastructure & Workload Assessment',
    desc: 'We review your traffic projections, compute requirements, storage needs, and cloud budget to choose optimal instance sizing.',
  },
  {
    step: '02',
    title: 'Server Provisioning & Security',
    desc: 'We provision VPCs, configure security firewalls, lock down SSH access, and set up hardened Linux OS baselines.',
  },
  {
    step: '03',
    title: 'Containerization & CI/CD Setup',
    desc: 'We containerize your services, configure Nginx reverse proxies, SSL certificates, and set up automated GitHub Actions deploys.',
  },
  {
    step: '04',
    title: 'Load Testing, Backups & Handover',
    desc: 'We simulate traffic spikes, verify automated backup restore routines, and deliver complete root credentials with maintenance guides.',
  },
]

const pricingModels = [
  {
    tier: 'Server Setup & Hardening',
    price: '$1,200 – $2,200',
    timeline: '1–2 weeks',
    description: 'Production setup on AWS EC2 or DigitalOcean with Docker, Nginx, SSL, and CI/CD.',
    includes: [
      'AWS EC2 / VPS provisioning & hardening',
      'Docker & docker-compose configuration',
      'Nginx reverse proxy with automated SSL',
      'GitHub Actions automated deployment',
      'Automated daily database backups',
    ],
  },
  {
    tier: 'Multi-Tier Cloud Infrastructure',
    price: '$2,800 – $5,200',
    timeline: '3–5 weeks',
    description: 'High-availability architecture with managed database, Redis cache, S3 CDN, and monitoring.',
    popular: true,
    includes: [
      'AWS EC2/ECS + RDS PostgreSQL setup',
      'Amazon S3 bucket with CloudFront CDN',
      'Redis caching & worker queue setup',
      'Zero-downtime rolling deployment pipeline',
      'Uptime monitoring & alert webhooks',
      '30-day post-launch warranty support',
    ],
  },
  {
    tier: 'Monthly DevOps Maintenance',
    price: '$1,800 / month',
    timeline: 'Ongoing monthly',
    description: 'Continuous server maintenance, security patches, performance tuning, and on-call support.',
    includes: [
      '15–20 hours dedicated engineering per week',
      'OS security patches & dependency updates',
      'Database health monitoring & query tuning',
      'Emergency outage on-call response',
      'Month-to-month flexibility',
    ],
  },
]

const faqs = [
  {
    q: 'Why should we host on AWS instead of PaaS providers like Vercel, Render, or Heroku?',
    a: 'While PaaS platforms are simple initially, bandwidth and compute markups become exorbitant as traffic grows (up to 5x–10x more expensive than raw AWS infrastructure). A self-managed AWS EC2 or ECS setup gives you full control over CPU, memory, Docker networking, background workers, and persistent databases for a fraction of the monthly operating cost.',
  },
  {
    q: 'How do you ensure zero-downtime deployments when pushing new code?',
    a: 'We use atomic deployments and PM2 cluster reload or blue-green Docker container swaps. The new application version spins up and passes internal health checks before Nginx routes traffic to it, ensuring end-users never encounter 502 bad gateway errors during deploys.',
  },
  {
    q: 'How do you prevent surprise runaway AWS bills?',
    a: 'I configure strict AWS Budgets with automated email and Slack billing alerts at 50%, 80%, and 100% thresholds, enforce lifecycle rules on S3 storage to automatically archive stale logs to Glacier, and provision appropriately sized reserved or spot instances to avoid costly over-provisioning.',
  },
  {
    q: 'What happens if the server crashes or runs out of memory?',
    a: 'Every deployment is configured with automatic process supervisor restarts (PM2 / Docker restart policies), system swap memory buffers to absorb burst spikes, and cloud health monitoring that dispatches instant alerts via Slack or SMS if resource utilization exceeds thresholds.',
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AWS Cloud Infrastructure & DevOps Freelance Services',
  serviceType: 'DevOps & Cloud Infrastructure Engineering',
  description:
    'Custom AWS cloud setup, Docker containerization, Nginx configuration, and CI/CD pipelines by Saurabh Dantani.',
  provider: {
    '@type': 'Person',
    name: 'Saurabh Dantani',
    url: BASE_URL,
  },
  areaServed: 'Worldwide',
  url: `${BASE_URL}/services/cloud-devops`,
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
      name: 'Cloud Infrastructure & DevOps',
      item: `${BASE_URL}/services/cloud-devops`,
    },
  ],
}

export default function CloudDevOpsService() {
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
            Cloud Architecture &amp; Reliability
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 leading-tight">
            AWS Cloud Infrastructure &amp; DevOps Engineering
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-zinc-300 leading-relaxed max-w-3xl mb-8">
            Deploy production web applications and APIs that never crash under load. I configure reliable AWS cloud infrastructure, Docker containers, Nginx reverse proxies, and automated CI/CD pipelines.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm transition-all shadow-md shadow-sky-600/20 hover:scale-105 active:scale-95"
            >
              <span>Discuss Your Infrastructure</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/projects/restful-api-gateway"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-slate-300 dark:border-white/10 bg-white dark:bg-white/[0.04] text-slate-800 dark:text-zinc-200 hover:bg-slate-100 dark:hover:bg-white/10 text-sm font-semibold transition-all"
            >
              <span>View Deployed Project</span>
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
              Reliable, Zero-Downtime Infrastructure
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-2xl">
              Eliminate server downtime, fragile deployment scripts, and insecure credentials with battle-tested cloud architecture.
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
              4-Phase Cloud Engineering Workflow
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-2xl">
              From security baseline hardening to automated CI/CD and disaster recovery testing.
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
                Full-Stack Cloud Infrastructure &amp; Admin Dashboard
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed mb-6">
                Engineered the complete production deployment pipeline for an enterprise administrative portal on AWS EC2. Implemented Docker container orchestration, Nginx reverse proxy with SSL, PM2 cluster management, automated GitHub Actions CI/CD, and scheduled daily database snapshots to Amazon S3.
              </p>
              
              <div className="grid grid-cols-3 gap-4 mb-6 pt-4 border-t border-slate-200 dark:border-white/10">
                <div>
                  <div className="text-2xl font-black text-sky-600 dark:text-sky-400">99.99%</div>
                  <div className="text-xs text-slate-500">Service Uptime</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-sky-600 dark:text-sky-400">&lt;60s</div>
                  <div className="text-xs text-slate-500">CI/CD Deploy Time</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-sky-600 dark:text-sky-400">0 Downtime</div>
                  <div className="text-xs text-slate-500">Rolling Rebuilds</div>
                </div>
              </div>

              <Link
                href="/projects/full-stack-admin-dashboard"
                className="inline-flex items-center gap-2 text-sm font-bold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors"
              >
                <span>Read Full Infrastructure Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="w-full lg:w-72 shrink-0 p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/10 text-xs space-y-3">
              <div className="font-bold text-slate-900 dark:text-white pb-2 border-b border-slate-100 dark:border-white/5">
                DevOps Stack
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['AWS EC2', 'AWS RDS', 'Amazon S3', 'Docker', 'Nginx', 'GitHub Actions', 'PM2', 'SSL Certbot', 'Linux'].map((tech) => (
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
              Transparent DevOps Pricing Models
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400">
              Reliable cloud infrastructure with complete root credential handover.
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
              Details on cloud hosting options, zero-downtime deploys, and disaster recovery.
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
            Related Architecture &amp; Services
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/projects/full-stack-admin-dashboard"
              className="p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] hover:border-sky-500/40 transition group"
            >
              <div className="text-[10px] uppercase font-bold text-sky-500 mb-1">Case Study</div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-sky-500 transition line-clamp-2">
                Full Stack Admin Dashboard &amp; Infrastructure
              </h4>
            </Link>
            <Link
              href="/services/backend-microservices"
              className="p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] hover:border-sky-500/40 transition group"
            >
              <div className="text-[10px] uppercase font-bold text-sky-500 mb-1">Service</div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-sky-500 transition line-clamp-2">
                Backend Microservices &amp; APIs
              </h4>
            </Link>
            <Link
              href="/services/nextjs-development"
              className="p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] hover:border-sky-500/40 transition group"
            >
              <div className="text-[10px] uppercase font-bold text-sky-500 mb-1">Service</div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-sky-500 transition line-clamp-2">
                Next.js Web Development
              </h4>
            </Link>
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 p-8 sm:p-12 text-center text-white shadow-xl">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-3">
            Ready to Hard-Wire Your Cloud Deployment?
          </h2>
          <p className="text-blue-100 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Let&apos;s build a production AWS infrastructure that deploys automatically on every git push and never crashes.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-slate-900 font-bold text-sm hover:bg-slate-100 transition shadow-md hover:scale-105 active:scale-95"
          >
            <span>Request Infrastructure Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  )
}

