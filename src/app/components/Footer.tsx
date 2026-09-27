'use client'

import Link from 'next/link'
import { Mail } from 'lucide-react'
import { FaLinkedinIn, FaGithub, FaXTwitter } from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-200 dark:border-white/[0.08] bg-slate-100/70 dark:bg-[#09090b] text-slate-600 dark:text-zinc-400 pt-16 pb-12 transition-colors duration-300" role="contentinfo">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200 dark:border-white/[0.08]">
          
          {/* Col 1: Brand, Tagline & Email */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 via-sky-400 to-cyan-300 p-[1.5px]">
                <div className="w-full h-full rounded-full bg-white dark:bg-[#09090b] flex items-center justify-center font-bold text-xs text-sky-600 dark:text-sky-400">
                  SD
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                  Saurabh Dantani
                </span>
                <span className="text-[11px] text-slate-500 dark:text-zinc-400 font-medium">
                  Full Stack Developer
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed max-w-sm">
              Freelance Full Stack &amp; Automation developer building high-performance web applications, backend microservices, real-time WebSocket platforms, and scrapers. Serving clients worldwide.
            </p>

            <div className="pt-2">
              <a
                href="mailto:saurabhdantani09@gmail.com"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] hover:bg-slate-50 dark:hover:bg-white/5 text-xs text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white transition shadow-xs"
              >
                <Mail className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                <span>saurabhdantani09@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5">
              <span className="text-sky-600 dark:text-sky-400">|</span> Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-slate-900 dark:hover:text-white transition-colors">About</Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-slate-900 dark:hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-slate-900 dark:hover:text-white transition-colors">Projects</Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-slate-900 dark:hover:text-white transition-colors">Blog</Link>
              </li>
              <li>
                <a href="/resume.pdf" download className="hover:text-slate-900 dark:hover:text-white transition-colors">Resume</a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-slate-900 dark:hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5">
              <span className="text-sky-600 dark:text-sky-400">|</span> Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/#services" className="hover:text-slate-900 dark:hover:text-white transition-colors">Full Stack Web Development</Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-slate-900 dark:hover:text-white transition-colors">Backend Microservices (.NET / NestJS)</Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-slate-900 dark:hover:text-white transition-colors">Web Scraping &amp; Browser Automation</Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-slate-900 dark:hover:text-white transition-colors">Real-Time Systems &amp; WebSockets</Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-slate-900 dark:hover:text-white transition-colors">CRM &amp; Admin Dashboards</Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-slate-900 dark:hover:text-white transition-colors">AWS Infrastructure &amp; DevOps</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Connect */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5">
              <span className="text-sky-600 dark:text-sky-400">|</span> Connect
            </h4>
            
            {/* Social Icons */}
            <div className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/in/saurabh-dantani-profile/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] hover:bg-slate-200 dark:hover:bg-white/10 hover:border-slate-300 dark:hover:border-white/30 text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition shadow-xs"
              >
                <FaLinkedinIn className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://github.com/SaurabhDantani"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] hover:bg-slate-200 dark:hover:bg-white/10 hover:border-slate-300 dark:hover:border-white/30 text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition shadow-xs"
              >
                <FaGithub className="w-3.5 h-3.5" />
              </a>
              <a
                href="mailto:saurabhdantani09@gmail.com"
                aria-label="Email"
                className="w-9 h-9 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] hover:bg-slate-200 dark:hover:bg-white/10 hover:border-slate-300 dark:hover:border-white/30 text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition shadow-xs"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for opportunities</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-zinc-500">
          <div>
            © {new Date().getFullYear()} Saurabh Dantani · Built with Next.js &amp; Tailwind CSS
          </div>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-slate-700 dark:hover:text-zinc-400 transition">Privacy</Link>
            <Link href="/about" className="hover:text-slate-700 dark:hover:text-zinc-400 transition">About</Link>
            <Link href="/contact" className="hover:text-slate-700 dark:hover:text-zinc-400 transition">Contact</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
