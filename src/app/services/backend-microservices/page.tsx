import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Zap,
  Database,
  ShieldCheck,
  Server,
  Layers,
  Cpu,
  HelpCircle,
  Network,
  Lock,
} from 'lucide-react'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.saurabhdantani.work'

export const metadata: Metadata = {
  title: 'Backend Microservices, NestJS & API Engineering Services',
  description:
    'Scalable backend microservices, RESTful APIs, and distributed architectures engineered with NestJS, Node.js, .NET Core C#, PostgreSQL, and Redis caching. Based in Ahmedabad, serving clients globally.',
  openGraph: {
    title: 'Backend Microservices, NestJS & API Engineering Services | Saurabh Dantani',
    description:
      'Scalable backend microservices, RESTful APIs, and distributed architectures engineered with NestJS, Node.js, .NET Core C#, PostgreSQL, and Redis caching.',
    url: `${BASE_URL}/services/backend-microservices`,
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/site.png`,
        width: 1200,
        height: 630,
        alt: 'Backend Microservices Development by Saurabh Dantani',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Backend Microservices, NestJS & API Engineering Services | Saurabh Dantani',
    description:
      'Scalable backend microservices, RESTful APIs, and distributed architectures engineered with NestJS, Node.js, .NET Core C#, PostgreSQL, and Redis caching.',
    images: [`${BASE_URL}/site.png`],
  },
  alternates: {
    canonical: `${BASE_URL}/services/backend-microservices`,
  },
}

const features = [
  {
    icon: Server,
    title: 'NestJS Modular Architecture',
    description:
      'Enterprise TypeScript backends built on NestJS with strict dependency injection, decorator-driven routing, Swagger documentation, and clean domain-driven design (DDD) separating controllers, services, and repositories.',
  },
  {
    icon: Cpu,
    title: '.NET Core & C# Microservices',
    description:
      'High-throughput, asynchronous C# backends built with ASP.NET Core. Designed for compute-intensive workloads, enterprise integrations, and mission-critical transaction processing.',
  },
  {
    icon: Database,
    title: 'High-Performance Database Engineering',
    description:
      'Relational and NoSQL schemas optimized for write-heavy workloads. PostgreSQL, MSSQL, and MongoDB with advanced B-tree indexing, query plan profiling (EXPLAIN ANALYZE), connection pooling (PgBouncer), and ACID compliance.',
  },
  {
    icon: Zap,
    title: 'Distributed Redis Caching & Queues',
    description:
      'Low-latency Redis caching layers that eliminate database pressure, combined with Redis Bull and RabbitMQ queues for asynchronous task orchestration, retry backoffs, and rate limiting.',
  },
  {
    icon: Lock,
    title: 'Zero-Trust Authentication & RBAC',
    description:
      'Stateless JWT tokens, refresh token rotation, OAuth2 single sign-on (SSO), and granular role-based access control (RBAC) matrices defending every endpoint with automated guard middleware.',
  },
  {
    icon: Network,
    title: 'API Gateway & Event Streaming',
    description:
      'Reverse proxy routing, request validation via Zod and class-validator, API versioning (v1/v2), distributed tracing with OpenTelemetry, and bi-directional WebSocket event channels.',
  },
]

const deliverables = [
  'Custom NestJS / Node.js or .NET Core API backends',
  'PostgreSQL, MongoDB, or MSSQL database schemas & migrations',
  'Redis Bull / RabbitMQ background worker queues',
  'Comprehensive Swagger / OpenAPI documentation',
  'Containerized Docker setups with docker-compose orchestration',
  'Automated unit & integration test coverage (Jest / Supertest)',
  'Rate limiting, CORS, CSRF, and security middleware',
  'Production deployment on AWS EC2, ECS, or DigitalOcean',
]

const processSteps = [
  {
    step: '01',
    title: 'Domain Modeling & Schema Design',
    desc: 'We map your entity relationships, define data contracts, plan indexing strategies, and establish OpenAPI specifications.',
  },
  {
    step: '02',
    title: 'Core Service Implementation',
    desc: 'We write modular NestJS or .NET Core services with strict input validation, transaction management, and error filters.',
  },
  {
    step: '03',
    title: 'Caching & Load Hardening',
    desc: 'We benchmark queries under synthetic load using k6, configure Redis caching layers, and profile connection pool throughput.',
  },
  {
    step: '04',
    title: 'Deployment & Observability',
    desc: 'We package the service in Docker, configure health check endpoints and structured logging, and hand over the repository.',
  },
]

const pricingModels = [
  {
    tier: 'API Microservice Sprint',
    price: '$1,600 – $2,800',
    timeline: '2–3 weeks',
    description: 'A focused backend microservice or RESTful API gateway with database schema and auth.',
    includes: [
      'Core REST API with NestJS or Node.js',
      'Database schema (PostgreSQL or MongoDB)',
      'JWT Authentication & RBAC roles',
      'Swagger / Postman API documentation',
      'Docker containerization',
    ],
  },
  {
    tier: 'Distributed Cluster',
    price: '$3,400 – $6,500',
    timeline: '4–7 weeks',
    description: 'Multi-service architecture with background queues, caching, and third-party integrations.',
    popular: true,
    includes: [
      'Multiple decoupled microservices',
      'Redis Bull / RabbitMQ job queues',
      'High-throughput database tuning & indexing',
      'Automated integration test suite',
      'AWS ECS / Docker deployment setup',
      '30 days post-launch support & tuning',
    ],
  },
  {
    tier: 'Dedicated Backend Retainer',
    price: '$2,500 / month',
    timeline: 'Ongoing monthly',
    description: 'Continuous API expansion, database optimization, and ongoing backend engineering.',
    includes: [
      '20–25 hours dedicated engineering per week',
      'Direct Slack/Discord communication',
      'New endpoint design and schema migrations',
      'Performance profiling and query optimization',
      'No long-term contracts',
    ],
  },
]

const faqs = [
  {
    q: 'Why choose NestJS over standard Express.js for enterprise backends?',
    a: 'While Express is minimalist, it provides no architectural conventions. As teams expand, Express projects frequently become tangled spaghetti code. NestJS provides an out-of-the-box architecture based on TypeScript, modules, dependency injection, and decorators, ensuring your codebase remains maintainable, testable, and standardized for years to come.',
  },
  {
    q: 'How do you ensure high throughput and prevent database bottlenecks under heavy traffic?',
    a: 'I prevent bottlenecks through a three-layer strategy: (1) PgBouncer connection pooling to avoid exhausting database handles, (2) Redis multi-layer caching with sub-5ms response times for read-heavy operations, and (3) asynchronous Redis Bull queues that offload slow operations (email sending, image processing, third-party webhooks) from the main request-response cycle.',
  },
  {
    q: 'Can you migrate legacy monoliths to a modern microservices architecture?',
    a: 'Yes. I use the Strangler Fig pattern to decouple monolithic backends incrementally into self-contained microservices without requiring risky, multi-month system downtimes.',
  },
  {
    q: 'Do you provide interactive API documentation for frontend teams?',
    a: 'Yes. Every backend is shipped with fully documented interactive Swagger / OpenAPI endpoints, TypeScript types, and exportable Postman collections so frontend developers can integrate immediately.',
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Backend Microservices, NestJS & API Engineering Services',
  serviceType: 'Backend Development & API Engineering',
  description:
    'Custom backend microservices, NestJS architecture, .NET Core APIs, and PostgreSQL database optimization by Saurabh Dantani.',
  provider: {
    '@type': 'Person',
    name: 'Saurabh Dantani',
    url: BASE_URL,
  },
  areaServed: 'Worldwide',
  url: `${BASE_URL}/services/backend-microservices`,
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
      name: 'Backend Microservices',
      item: `${BASE_URL}/services/backend-microservices`,
    },
  ],
}

export default function BackendMicroservicesService() {
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
            High-Throughput Distributed Architecture
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 leading-tight">
            Backend Microservices &amp; API Development
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-zinc-300 leading-relaxed max-w-3xl mb-8">
            I engineer high-concurrency backend services, clean RESTful APIs, and scalable database schemas using NestJS, Node.js, .NET Core C#, and PostgreSQL — built for 99.99% uptime and sub-50ms p95 response times.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm transition-all shadow-md shadow-sky-600/20 hover:scale-105 active:scale-95"
            >
              <span>Discuss Your Backend Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/projects/restful-api-gateway"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-slate-300 dark:border-white/10 bg-white dark:bg-white/[0.04] text-slate-800 dark:text-zinc-200 hover:bg-slate-100 dark:hover:bg-white/10 text-sm font-semibold transition-all"
            >
              <span>View API Gateway Case Study</span>
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
              Engineered for Scalability, Security &amp; Concurrency
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-2xl">
              From database query optimization to message queues and containerized deployments, every microservice is engineered for enterprise maintainability.
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
              How We Engineer Your Backend
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-2xl">
              Strict domain design, load profiling, and automated test suites that prevent regressions.
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
                Enterprise RESTful API Gateway &amp; Auth Service
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed mb-6">
                Engineered a unified API Gateway orchestrating client traffic across multiple underlying microservices. Includes token bucket rate limiting, Redis caching layers, JWT validation, and automated Swagger schema synchronization.
              </p>
              
              <div className="grid grid-cols-3 gap-4 mb-6 pt-4 border-t border-slate-200 dark:border-white/10">
                <div>
                  <div className="text-2xl font-black text-sky-600 dark:text-sky-400">&lt;25ms</div>
                  <div className="text-xs text-slate-500">p95 Latency</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-sky-600 dark:text-sky-400">10K+</div>
                  <div className="text-xs text-slate-500">Req / Second</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-sky-600 dark:text-sky-400">99.99%</div>
                  <div className="text-xs text-slate-500">Service Uptime</div>
                </div>
              </div>

              <Link
                href="/projects/restful-api-gateway"
                className="inline-flex items-center gap-2 text-sm font-bold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors"
              >
                <span>Read Full API Gateway Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="w-full lg:w-72 shrink-0 p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/10 text-xs space-y-3">
              <div className="font-bold text-slate-900 dark:text-white pb-2 border-b border-slate-100 dark:border-white/5">
                Backend Stack
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['NestJS', 'Node.js', '.NET Core', 'C#', 'PostgreSQL', 'Redis', 'Docker', 'JWT', 'Swagger'].map((tech) => (
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
              Transparent Backend Pricing Models
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400">
              Clear deliverables and predictable timelines. No surprise fees.
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
                      Most Popular
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
              Insights on architectural choices, database performance, and security.
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
            Related Architecture &amp; Case Studies
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/projects/restful-api-gateway"
              className="p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] hover:border-sky-500/40 transition group"
            >
              <div className="text-[10px] uppercase font-bold text-sky-500 mb-1">Case Study</div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-sky-500 transition line-clamp-2">
                RESTful API Gateway Architecture
              </h4>
            </Link>
            <Link
              href="/services/real-time-systems"
              className="p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] hover:border-sky-500/40 transition group"
            >
              <div className="text-[10px] uppercase font-bold text-sky-500 mb-1">Service</div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-sky-500 transition line-clamp-2">
                Real-Time Systems &amp; WebSockets
              </h4>
            </Link>
            <Link
              href="/services/cloud-devops"
              className="p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] hover:border-sky-500/40 transition group"
            >
              <div className="text-[10px] uppercase font-bold text-sky-500 mb-1">Service</div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-sky-500 transition line-clamp-2">
                Cloud Infrastructure &amp; DevOps
              </h4>
            </Link>
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 p-8 sm:p-12 text-center text-white shadow-xl">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-3">
            Need a Robust, Scalable Backend Engine?
          </h2>
          <p className="text-blue-100 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Let&apos;s build an API architecture that never fails under load. Available for contracts and architectural consulting worldwide.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-slate-900 font-bold text-sm hover:bg-slate-100 transition shadow-md hover:scale-105 active:scale-95"
          >
            <span>Start Technical Discovery</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  )
}

