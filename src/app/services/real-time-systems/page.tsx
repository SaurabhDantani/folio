import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Radio,
  Zap,
  Activity,
  Layers,
  Cpu,
  HelpCircle,
  TrendingUp,
  ShieldCheck,
  Server,
} from 'lucide-react'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.saurabhdantani.work'

export const metadata: Metadata = {
  title: 'Real-Time WebSocket & Live Dashboard Development Services',
  description:
    'Low-latency real-time systems, bi-directional WebSocket architecture, live financial market feeds, and high-concurrency dashboards built with Socket.IO, Redis Pub/Sub, and Next.js.',
  openGraph: {
    title: 'Real-Time WebSocket & Live Dashboard Development Services | Saurabh Dantani',
    description:
      'Low-latency real-time systems, bi-directional WebSocket architecture, live financial market feeds, and high-concurrency dashboards built with Socket.IO, Redis Pub/Sub, and Next.js.',
    url: `${BASE_URL}/services/real-time-systems`,
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/site.png`,
        width: 1200,
        height: 630,
        alt: 'Real-Time Systems Development by Saurabh Dantani',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Real-Time WebSocket & Live Dashboard Development Services | Saurabh Dantani',
    description:
      'Low-latency real-time systems, bi-directional WebSocket architecture, live financial market feeds, and high-concurrency dashboards built with Socket.IO, Redis Pub/Sub, and Next.js.',
    images: [`${BASE_URL}/site.png`],
  },
  alternates: {
    canonical: `${BASE_URL}/services/real-time-systems`,
  },
}

const features = [
  {
    icon: Radio,
    title: 'Bi-Directional WebSocket & Socket.IO Streams',
    description:
      'Full-duplex persistent connections delivering sub-50ms data streaming between client browsers and backend clusters. Zero polling overhead, binary payload support, and automatic transport fallbacks.',
  },
  {
    icon: Cpu,
    title: 'Horizontal Scaling with Redis Pub/Sub',
    description:
      'Scale WebSocket nodes horizontally behind Nginx load balancers using the Redis adapter. Messages published on any server node are broadcast instantly to matching socket rooms across the entire cluster.',
  },
  {
    icon: Activity,
    title: 'Live Market & Financial Data Feeds',
    description:
      'High-throughput real-time ingest pipelines for market ticker feeds, live IPO tracking, order book updates, and cryptocurrency charts with client-side throttled re-renders.',
  },
  {
    icon: Zap,
    title: 'Resilient Reconnection & State Recovery',
    description:
      'Defensive client connection protocols featuring exponential backoff retries, heartbeat health pings, socket room re-subscription, and missed-message reconciliation caches.',
  },
  {
    icon: Layers,
    title: 'Live Multi-User Collaboration & Presence',
    description:
      'Real-time cursors, multi-tenant workspace presence indicators, concurrent typing events, and conflict-free collaborative editing for modern SaaS platforms.',
  },
  {
    icon: ShieldCheck,
    title: 'Secured Token Handshakes & Room RBAC',
    description:
      'JWT-authenticated socket handshakes preventing unauthorized listener access. Dynamic room authorization allowing clients to subscribe strictly to authorized event channels.',
  },
]

const deliverables = [
  'Custom Socket.IO / WebSocket server cluster',
  'Redis Pub/Sub adapter setup for multi-instance scaling',
  'Next.js / React real-time UI components with smooth state updates',
  'Heartbeat monitoring, connection recovery, and offline fallbacks',
  'JWT token handshake authentication & channel authorization',
  'Live notification engine with audio alerts and desktop pushes',
  'Nginx WebSocket proxy configuration with SSL termination',
  'Full source code repository with architecture diagrams and tests',
]

const processSteps = [
  {
    step: '01',
    title: 'Protocol & Message Schema Spec',
    desc: 'We map out your event channels, define typed JSON/binary payload contracts, and design socket room topologies.',
  },
  {
    step: '02',
    title: 'Socket Engine & Pub/Sub Setup',
    desc: 'We build the connection manager, integrate Redis Pub/Sub adapters, and implement token-based authentication guards.',
  },
  {
    step: '03',
    title: 'Client State & Throttling Integration',
    desc: 'We connect your frontend UI, implement memoized render loops to prevent UI lag under burst traffic, and configure reconnect buffers.',
  },
  {
    step: '04',
    title: 'Concurrency Benchmarking & Deploy',
    desc: 'We stress-test connections with Artillery / k6 to ensure thousands of concurrent active sockets with minimal CPU impact.',
  },
]

const pricingModels = [
  {
    tier: 'Live Stream Sprint',
    price: '$1,400 – $2,400',
    timeline: '1–2 weeks',
    description: 'Add real-time WebSockets, live chat, or instant notifications to an existing application.',
    includes: [
      'Socket.IO / WebSocket server module',
      'JWT handshake authentication',
      'Client hooks & connection state UI',
      'Reconnection & error fallback logic',
      'Docker / Nginx configuration',
    ],
  },
  {
    tier: 'Full Real-Time Platform',
    price: '$3,200 – $5,800',
    timeline: '3–6 weeks',
    description: 'Comprehensive live platform (financial ticker, AI voice dashboard, or live collaborative workspace).',
    popular: true,
    includes: [
      'Multi-node Redis Pub/Sub cluster architecture',
      'Real-time analytics and visualization dashboard',
      'Room-based RBAC permissions',
      'High-throughput concurrency stress testing',
      'Production AWS / Docker deployment',
      '30 days dedicated warranty support',
    ],
  },
  {
    tier: 'Infrastructure Retainer',
    price: '$2,000 / month',
    timeline: 'Ongoing monthly',
    description: 'Continuous monitoring, connection scaling, latency optimization, and new event stream additions.',
    includes: [
      '20 hours dedicated engineering per week',
      'Live socket cluster performance monitoring',
      'New real-time feature additions',
      'Memory leak and latency profiling',
      'Month-to-month flexibility',
    ],
  },
]

const faqs = [
  {
    q: 'Why use WebSockets instead of short polling or Server-Sent Events (SSE)?',
    a: 'Short polling generates immense server overhead by continuously establishing new HTTP connections even when no new data exists. Server-Sent Events (SSE) are mono-directional (server to client only). WebSockets provide a true bi-directional full-duplex TCP connection, allowing both server and client to exchange messages at microsecond latencies with minimal packet headers.',
  },
  {
    q: 'How do you scale WebSockets horizontally across multiple load-balanced servers?',
    a: 'Since WebSockets maintain persistent TCP connections to a specific physical server, broadcasting an event from Server A will not reach a user connected to Server B by default. I resolve this by integrating a Redis Pub/Sub adapter: every broadcast is published to Redis, which immediately fans the message out to all active server nodes and their respective connected clients.',
  },
  {
    q: 'How do you prevent high-frequency real-time updates from freezing the user’s browser?',
    a: 'When receiving dozens of updates per second (such as live market price ticks), updating React state on every packet will cause UI freezes. I implement client-side animation frame buffering (requestAnimationFrame) and throttle mechanisms (e.g., 60fps capped dispatchers) so the UI remains butter-smooth while displaying fresh live metrics.',
  },
  {
    q: 'What happens when a user loses mobile connection temporarily?',
    a: 'The system uses an intelligent reconnect protocol. When a dropped socket reconnects, it sends the timestamp of its last received event ID. The backend responds with missed events stored in an ephemeral Redis buffer, ensuring zero data loss during network switches.',
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Real-Time WebSocket & Live Dashboard Development Services',
  serviceType: 'Real-Time Systems & WebSocket Engineering',
  description:
    'Custom real-time systems, WebSocket architecture, Socket.IO streaming, and live dashboards by Saurabh Dantani.',
  provider: {
    '@type': 'Person',
    name: 'Saurabh Dantani',
    url: BASE_URL,
  },
  areaServed: 'Worldwide',
  url: `${BASE_URL}/services/real-time-systems`,
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
      name: 'Real-Time Systems',
      item: `${BASE_URL}/services/real-time-systems`,
    },
  ],
}

export default function RealTimeSystemsService() {
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
            Low-Latency Streaming Architecture
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 leading-tight">
            Real-Time Systems &amp; WebSocket Engineering
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-zinc-300 leading-relaxed max-w-3xl mb-8">
            Deliver instant, reactive user experiences with bi-directional WebSockets, Socket.IO clusters, and Redis Pub/Sub backbones. From live financial market streams to real-time AI dashboards and notifications.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm transition-all shadow-md shadow-sky-600/20 hover:scale-105 active:scale-95"
            >
              <span>Build a Real-Time System</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/projects/ai-voice-campaign-platform-calling-agent"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-slate-300 dark:border-white/10 bg-white dark:bg-white/[0.04] text-slate-800 dark:text-zinc-200 hover:bg-slate-100 dark:hover:bg-white/10 text-sm font-semibold transition-all"
            >
              <span>View Live Campaign Case Study</span>
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
              Production Architecture for Low-Latency Streaming
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-2xl">
              WebSockets require thoughtful clustering, memory management, and reconnect handling. Here is how we ensure your live streams never drop packets.
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
              4-Phase Implementation Process
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-2xl">
              From socket topology design to load testing under thousands of concurrent sessions.
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
                AI Voice Campaign Platform (Calling Agent)
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed mb-6">
                Engineered an enterprise AI calling dashboard handling 1,000+ simultaneous voice campaign calls. Integrated Socket.IO and Redis Bull queues to stream live call audio metrics, sentiment scores, and conversation transcripts directly to client dashboards every 2 seconds without page refreshes.
              </p>
              
              <div className="grid grid-cols-3 gap-4 mb-6 pt-4 border-t border-slate-200 dark:border-white/10">
                <div>
                  <div className="text-2xl font-black text-sky-600 dark:text-sky-400">1,000+</div>
                  <div className="text-xs text-slate-500">Live Leads / Campaign</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-sky-600 dark:text-sky-400">&lt;50ms</div>
                  <div className="text-xs text-slate-500">Socket Latency</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-sky-600 dark:text-sky-400">10+ Tenants</div>
                  <div className="text-xs text-slate-500">Isolated Rooms</div>
                </div>
              </div>

              <Link
                href="/projects/ai-voice-campaign-platform-calling-agent"
                className="inline-flex items-center gap-2 text-sm font-bold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors"
              >
                <span>Read Full Real-Time Architecture Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="w-full lg:w-72 shrink-0 p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/10 text-xs space-y-3">
              <div className="font-bold text-slate-900 dark:text-white pb-2 border-b border-slate-100 dark:border-white/5">
                Real-Time Stack
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['Socket.IO', 'WebSockets', 'Redis Pub/Sub', 'Node.js', 'Next.js', 'Twilio Voice', 'Tailwind CSS'].map((tech) => (
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
              Transparent Real-Time Pricing
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400">
              Clear scope, production stress testing, and zero hidden costs.
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
              Technical specifics on WebSocket concurrency, socket clustering, and reconnect architectures.
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
            Related Real-Time Case Studies &amp; Services
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/projects/ai-voice-campaign-platform-calling-agent"
              className="p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] hover:border-sky-500/40 transition group"
            >
              <div className="text-[10px] uppercase font-bold text-sky-500 mb-1">Case Study</div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-sky-500 transition line-clamp-2">
                Calling Agent: Real-Time AI Voice Platform
              </h4>
            </Link>
            <Link
              href="/projects/chat-application-with-video-calling"
              className="p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] hover:border-sky-500/40 transition group"
            >
              <div className="text-[10px] uppercase font-bold text-sky-500 mb-1">Case Study</div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-sky-500 transition line-clamp-2">
                Chat Application with Real-Time Video Calling
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
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 p-8 sm:p-12 text-center text-white shadow-xl">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-3">
            Ready to Build a High-Throughput Real-Time Stream?
          </h2>
          <p className="text-blue-100 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Let&apos;s architect a low-latency WebSocket platform that scales smoothly to thousands of concurrent users.
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

