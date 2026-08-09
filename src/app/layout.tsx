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

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://saurabhdantani.dev";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Saurabh Dantani | Freelance Full Stack & AI Integration Developer",
    template: "%s | Saurabh Dantani",
  },
  description:
    "Saurabh Dantani — Freelance Full Stack & AI Developer (React, Next.js, TypeScript, Node.js, Python). Building scalable web & mobile apps, LLM integration, and real-time systems. Based in Ahmedabad, India — available worldwide & remote.",
  keywords: [
    "Saurabh Dantani",
    "Saurabh Dantani developer",
    "Saurabh Dantani portfolio",
    "Saurabh Dantani freelance developer",
    "best full stack developer in India",
    "best freelance developer in India",
    "best Next.js developer in India",
    "best React developer in India",
    "best AI developer in India",
    "best web developer in Ahmedabad",
    "top freelance developer India",
    "top web developer Ahmedabad",
    "hire full stack developer India",
    "hire freelance Next.js developer",
    "hire AI integration developer",
    "hire React Native developer India",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "React Native Developer",
    "AI Integration Developer",
    "Python Developer",
    "Node.js Developer",
    "LLM developer",
    "AI agent developer",
    "WebSocket developer",
    "SEO services",
    "GEO AEO LLMO optimization",
    "freelance full stack developer in Ahmedabad",
    "freelance full stack developer in Mumbai",
    "freelance full stack developer in Bangalore",
    "freelance full stack developer in Delhi",
    "freelance full stack developer in Pune",
    "freelance web developer in India",
  ],
  authors: [{ name: "Saurabh Dantani", url: BASE_URL }],
  creator: "Saurabh Dantani",
  publisher: "Saurabh Dantani",
  category: "technology",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Saurabh Dantani Portfolio",
    title: "Saurabh Dantani | Freelance Full Stack & AI Developer",
    description:
      "Freelance Full Stack & AI Developer (React, Next.js, Node.js, Python, TypeScript). Scalable web & mobile apps, AI/LLM integration. Ahmedabad, India — available worldwide.",
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
    title: "Saurabh Dantani | Freelance Full Stack & AI Developer",
    description:
      "Freelance Full Stack & AI Developer. 3+ Years experience in React, Next.js, Node.js, Python, AI/LLM integration. Available worldwide & remote.",
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
    "Python",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "AI Integration",
    "LLM APIs",
    "OpenAI",
    "WebSockets",
    "React Native",
    "Tailwind CSS",
    "Docker",
    "AWS",
    "SEO",
    "GEO",
    "AEO",
  ],
  description:
    "Saurabh Dantani is a Freelance Full Stack & AI Integration Developer (React, Next.js, Node.js, Python) based in Ahmedabad, India. Available worldwide & remote for web, mobile, and AI projects.",
  hasOccupation: {
    "@type": "Occupation",
    name: "Full Stack Developer",
    occupationLocation: { "@type": "City", name: "Ahmedabad, India" },
  },
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
  name: "Saurabh Dantani — Web Development, AI & Mobile Consulting",
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
            "Fast, scalable, SEO-friendly web apps built with Next.js, React, TypeScript, Node.js, and PostgreSQL/MongoDB.",
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
          name: "Mobile App Development",
          description:
            "Cross-platform iOS and Android apps with React Native, clean UX, and high-performance offline capabilities.",
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
    "Freelance Full Stack & AI Developer portfolio — React, Next.js, Node.js, Python, AI integration, mobile apps, and custom web development.",
  publisher: { "@id": `${BASE_URL}/#person` },
  author: { "@id": `${BASE_URL}/#person` },
};

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${BASE_URL}/#profilepage`,
  url: BASE_URL,
  name: "Saurabh Dantani — Freelance Full Stack & AI Developer",
  mainEntity: { "@id": `${BASE_URL}/#person` },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
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
      </head>
      <body
        className={`bg-white text-gray-900 dark:bg-[#09090b] dark:text-gray-100 transition-colors duration-300 antialiased ${geistSans.variable} ${geistMono.variable}`}
      >
        <ThemeProvider>
          <AIChatbot />
          <Navbar />
          <main className="min-h-screen pt-20">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

