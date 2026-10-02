import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, Workflow, Clock, Database, Bot } from 'lucide-react'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.saurabhdantani.work'

export const metadata: Metadata = {
  title: 'Business Automation Services',
  description: 'Business automation services to streamline workflows, reduce manual work, and increase efficiency. CRM automation, email workflows, data pipelines, and custom bot development.',
  openGraph: {
    title: 'Business Automation Services | Saurabh Dantani',
    description: 'Streamline workflows, reduce manual work, and increase efficiency with custom automation solutions.',
    url: `${BASE_URL}/services/automation`,
  },
  alternates: {
    canonical: `${BASE_URL}/services/automation`,
  },
}

const features = [
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description: 'Automate repetitive tasks and business processes. Connect different systems, trigger actions based on events, and eliminate manual data entry.',
  },
  {
    icon: Clock,
    title: 'Scheduled Operations',
    description: 'Build cron-based jobs that run on your schedule—daily backups, data syncs, report generation, and maintenance tasks.',
  },
  {
    icon: Database,
    title: 'Data Pipeline Automation',
    description: 'Automate data collection, transformation, and loading. Extract from multiple sources, process, and store in your database.',
  },
  {
    icon: Bot,
    title: 'Custom Bot Development',
    description: 'Build intelligent bots for Telegram, Discord, Slack, or custom platforms. Automate customer support, notifications, and task management.',
  },
]

const services = [
  'CRM automation and lead qualification',
  'Email marketing automation sequences',
  'Data synchronization between systems',
  'Automated reporting and dashboards',
  'Invoice and billing automation',
  'Social media posting automation',
  'Customer onboarding workflows',
  'API integrations and webhooks',
  'Cloud infrastructure automation',
]

const techStack = [
  'Node.js / Python',
  'NestJS / Express',
  'Cron jobs',
  'Webhooks',
  'REST APIs',
  'Message queues (Redis, RabbitMQ)',
  'AWS Lambda',
  'Docker',
  'n8n / Zapier integrations',
  'PostgreSQL / MongoDB',
]

export default function AutomationService() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#09090b]">
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
            Business Automation Services
          </h1>

          <p className="text-lg text-slate-600 dark:text-zinc-400 leading-relaxed max-w-3xl">
            Automate repetitive tasks, streamline workflows, and focus on what matters. I build custom automation solutions
            that save time, reduce errors, and scale with your business.
          </p>

          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors"
            >
              Automate Your Workflow
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Features */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Automation Solutions</h2>
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

        {/* Services */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">What I Can Automate</h2>
          <div className="bg-white dark:bg-zinc-950 rounded-xl p-6 border border-slate-200 dark:border-white/10">
            <ul className="grid sm:grid-cols-2 gap-3">
              {services.map((service, index) => (
                <li key={index} className="flex items-center gap-2 text-slate-600 dark:text-zinc-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  {service}
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
          <h3 className="text-2xl font-bold text-white mb-2">Ready to Automate?</h3>
          <p className="text-blue-100 mb-6">
            Let's identify repetitive tasks in your workflow and build automation that saves you hours every week.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-blue-600 font-semibold hover:bg-blue-50 transition-colors"
          >
            Discuss Your Needs
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  )
}
