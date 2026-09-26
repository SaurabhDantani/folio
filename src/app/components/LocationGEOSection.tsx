import React from 'react';
import { MapPin, Globe, Users } from 'lucide-react';

export default function LocationGEOSection() {
  return (
    <section
      className="py-12 border-y border-gray-200 dark:border-white/[0.06] bg-slate-50 dark:bg-white/[0.01]"
      aria-label="About Saurabh Dantani - Freelance Full Stack Developer"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Main Bio Text */}
        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed text-center max-w-4xl mx-auto mb-8">
          <strong className="text-gray-900 dark:text-white font-semibold">Saurabh Dantani</strong> is a freelance{' '}
          <strong className="text-blue-600 dark:text-blue-400 font-semibold">Full Stack & AI Integration Developer</strong> based in{' '}
          <strong className="text-gray-900 dark:text-white font-semibold">Ahmedabad, India</strong>. Specializing in{' '}
          <strong className="text-gray-900 dark:text-white font-semibold">React, Next.js, Node.js, NestJS, .NET Core, and Python</strong>, he builds modern web applications, CRM platforms, web scraping automation, real-time systems, and custom AI workflows. Available remotely for projects across{' '}
          <span className="text-gray-700 dark:text-gray-300">India, USA, UK, UAE, Canada</span>, and worldwide.
        </p>

        {/* Trust Indicators Row */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          <div className="flex items-center gap-2.5 text-sm text-gray-600 dark:text-gray-400">
            <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
              <MapPin className="w-4.5 h-4.5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="font-semibold text-gray-900 dark:text-white text-xs">Based In</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Ahmedabad, Gujarat, India</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 text-sm text-gray-600 dark:text-gray-400">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
              <Globe className="w-4.5 h-4.5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <p className="font-semibold text-gray-900 dark:text-white text-xs">Serving</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Global & Remote Clients</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 text-sm text-gray-600 dark:text-gray-400">
            <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
              <Users className="w-4.5 h-4.5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <p className="font-semibold text-gray-900 dark:text-white text-xs">Clients In</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Mumbai, Bangalore, Delhi, USA, UK, UAE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
