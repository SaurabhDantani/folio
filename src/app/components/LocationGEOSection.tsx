import React from 'react';

export default function LocationGEOSection() {
  return (
    <section className="py-10 border-y border-gray-200 dark:border-white/[0.06] bg-slate-50 dark:bg-white/[0.01]" aria-label="About Saurabh Dantani - Freelance Full Stack Developer">
      <div className="container mx-auto px-4 max-w-5xl">
        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed text-center">
          <strong className="text-gray-900 dark:text-white font-semibold">Saurabh Dantani</strong> is a freelance{' '}
          <strong className="text-blue-600 dark:text-blue-400 font-semibold">Full Stack &amp; AI Integration Developer</strong> based in{' '}
          <strong className="text-gray-900 dark:text-white font-semibold">Ahmedabad, India</strong>. Specializing in{' '}
          <strong className="text-gray-900 dark:text-white font-semibold">React, Next.js, Node.js, and TypeScript</strong>, he builds modern web applications, real-time chat platforms, e-commerce systems, and custom AI agent workflows. Available remotely for projects across{' '}
          <span className="text-gray-700 dark:text-gray-300">Mumbai, Bangalore, Delhi, Pune, Hyderabad, USA, UK, UAE</span>, and worldwide.
        </p>

        {/* Screen-reader / Search Crawler Optimized SEO Keyword Text */}
        <p className="sr-only">
          Saurabh Dantani — Best freelance Full Stack &amp; Next.js Developer in Ahmedabad, Gujarat, India. Offers full stack web development, React Native mobile apps, AI/LLM integration, WebSocket real-time systems, and SEO/GEO optimization for startups and businesses worldwide.
        </p>
      </div>
    </section>
  );
}
