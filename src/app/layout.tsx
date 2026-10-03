import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AIChatbot from "./ai/AIChatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.saurabhdantani.work";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Saurabh Dantani | Full Stack & Automation Developer, Ahmedabad",
    template: "%s | Saurabh Dantani",
  },
  description:
    "Freelance Full Stack Developer & Automation Engineer. Building scalable Next.js apps, CRM systems, and Python scrapers. Based in Ahmedabad, India.",
  authors: [{ name: "Saurabh Dantani", url: BASE_URL }],
  creator: "Saurabh Dantani",
  publisher: "Saurabh Dantani",
  category: "technology",
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Saurabh Dantani Portfolio",
    title: "Saurabh Dantani | Full Stack & Automation Developer, Ahmedabad",
    description:
      "Freelance Full Stack Developer & Automation Engineer. Building scalable Next.js apps, CRM systems, and Python scrapers. Based in Ahmedabad, India.",
    images: [
      {
        url: "/profileImg.jpg",
        width: 1200,
        height: 630,
        alt: "Saurabh Dantani — Full Stack & AI Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saurabh Dantani | Full Stack & Automation Developer, Ahmedabad",
    description:
      "Freelance Full Stack Developer. 4+ Years experience in React, Next.js, Node.js, Python, web scraping. Available worldwide & remote.",
    images: ["/profileImg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: "your-verification-code",
  },
};

// Structured Schemas for Search Engines & AI Answer Engines (GEO/AEO)
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${BASE_URL}/#person`,
  name: "Saurabh Dantani",
  url: BASE_URL,
  image: `${BASE_URL}/profileImg.jpg`,
  jobTitle: "Freelance Full Stack & AI Integration Developer",
  telephone: "+917567358252",
  email: "saurabhdantani09@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  sameAs: [
    "https://github.com/SaurabhDantani",
    "https://www.linkedin.com/in/saurabh-dantani-profile/",
  ],
  knowsAbout: [
    "React.js",
    "Next.js",
    "TypeScript",
    "Node.js",
    "NestJS",
    ".NET Core",
    "C#",
    "Python",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "MSSQL",
    "AI Integration",
    "LLM APIs",
    "OpenAI",
    "WebSockets",
    "Socket.IO",
    "React Native",
    "Tailwind CSS",
    "Docker",
    "AWS",
    "Playwright",
    "Puppeteer",
    "Web Scraping",
    "SEO",
    "GEO",
    "AEO",
  ],
  description:
    "Saurabh Dantani is a Freelance Full Stack & AI Integration Developer with 4+ years of experience in React, Next.js, Node.js, NestJS, .NET Core, Python, and AWS. Based in Ahmedabad, India. Available worldwide & remote for web, mobile, automation, and AI projects.",
  hasOccupation: {
    "@type": "Occupation",
    name: "Full Stack Developer",
    occupationLocation: { "@type": "City", name: "Ahmedabad, India" },
  },
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "Government Engineering College, Modasa",
    },
    {
      "@type": "EducationalOrganization",
      name: "Government Polytechnic Ahmedabad",
    },
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Full Stack Web Development",
        serviceType: "Full Stack Web Development",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Web Scraping & Browser Automation",
        serviceType: "Data Extraction & Automation",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "CRM & Admin Dashboard Development",
        serviceType: "CRM Development",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "AI & LLM Integration",
        serviceType: "AI Integration & Automation",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Mobile App Development",
        serviceType: "Mobile App Development",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "SEO, GEO & AEO Optimization",
        serviceType: "Search Engine Optimization",
      },
    },
  ],
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${BASE_URL}/#service`,
  name: "Saurabh Dantani — Web Development, Automation & AI Consulting",
  image: `${BASE_URL}/profileImg.jpg`,
  url: BASE_URL,
  priceRange: "$$",
  founder: { "@id": `${BASE_URL}/#person` },
  provider: { "@id": `${BASE_URL}/#person` },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+917567358252",
    email: "saurabhdantani09@gmail.com",
    contactType: "customer service",
    availableLanguage: ["English", "Hindi", "Gujarati"],
    areaServed: "Worldwide",
  },
  areaServed: [
    { "@type": "City", name: "Ahmedabad" },
    { "@type": "City", name: "Mumbai" },
    { "@type": "City", name: "Bangalore" },
    { "@type": "City", name: "Delhi" },
    { "@type": "City", name: "Pune" },
    { "@type": "City", name: "Hyderabad" },
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "Canada" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "Australia" },
  ],
  sameAs: [
    "https://github.com/SaurabhDantani",
    "https://www.linkedin.com/in/saurabh-dantani-profile/",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Freelance Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Full Stack Web Development",
          description:
            "Fast, scalable, SEO-friendly web apps built with Next.js, React, TypeScript, Node.js, NestJS, .NET Core, and PostgreSQL/MongoDB.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Scraping & Browser Automation",
          description:
            "Automated data extraction, browser automation, and scheduled cron pipelines using Playwright, Puppeteer, and Python.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "CRM & Admin Dashboard Development",
          description:
            "Custom CRM systems, lead generation platforms, admin dashboards, and business management portals.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI & LLM Integration",
          description:
            "Integration of OpenAI GPT-4o, Anthropic Claude, custom chatbots, and automated AI agents into business workflows.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AWS Deployment & DevOps",
          description:
            "AWS EC2/RDS/S3 infrastructure, Docker containers, Nginx reverse proxy, PM2 process management, and production deployments.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SEO, GEO & Performance Optimization",
          description:
            "Structured schema markup, Core Web Vitals optimization, and generative engine optimization (GEO/AEO).",
        },
      },
    ],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  name: "Saurabh Dantani Portfolio",
  url: BASE_URL,
  description:
    "Freelance Full Stack & AI Developer portfolio — React, Next.js, Node.js, NestJS, .NET Core, Python, web scraping, automation, AI integration, and custom web development.",
  publisher: { "@id": `${BASE_URL}/#person` },
  author: { "@id": `${BASE_URL}/#person` },
  potentialAction: {
    "@type": "SearchAction",
    target: `${BASE_URL}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${BASE_URL}/#profilepage`,
  url: BASE_URL,
  name: "Saurabh Dantani — Freelance Full Stack & AI Developer",
  mainEntity: { "@id": `${BASE_URL}/#person` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth dark">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3B82F6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="67FZ5qpmWomdyzJzZQrH4uGTH2kPc6T7nsS4a3f5CSU" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(profilePageSchema),
          }}
        />
        {/* Cloudflare Web Analytics */}
        <script
          type="module"
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "911e52642ac44bd19e8a9124f5f6b3bb"}'
        />
        {/* End Cloudflare Web Analytics */}
      </head>
      <body
        className={`bg-slate-50 text-slate-900 dark:bg-[#09090b] dark:text-zinc-100 transition-colors duration-300 antialiased ${geistSans.variable} ${geistMono.variable}`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <AIChatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}
