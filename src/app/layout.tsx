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
    default: "Saurabh Dantani | Full Stack Developer & Freelancer",
    template: "%s | Saurabh Dantani",
  },
  description:
    "Saurabh Dantani is a Full Stack Developer specializing in React, Next.js, Node.js, and TypeScript. Building modern, scalable web applications. Available for freelance projects.",
  keywords: [
    "Saurabh Dantani",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript",
    "Freelance Web Developer",
    "Ahmedabad Developer",
    "Web Developer India",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Saurabh Dantani", url: BASE_URL }],
  creator: "Saurabh Dantani",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Saurabh Dantani — Portfolio",
    title: "Saurabh Dantani | Full Stack Developer & Freelancer",
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js. Building modern, scalable web applications. Open for collaboration and freelance work.",
    images: [
      {
        url: "/profileImg.jpg",
        width: 1200,
        height: 630,
        alt: "Saurabh Dantani — Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saurabh Dantani | Full Stack Developer & Freelancer",
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js. Open for collaboration and freelance work.",
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

// JSON-LD Structured Data for rich search results
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Saurabh Dantani",
  url: BASE_URL,
  image: `${BASE_URL}/profileImg.jpg`,
  jobTitle: "Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, Next.js, Node.js, and TypeScript. Available for freelance projects.",
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
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "AWS",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`bg-white transition-colors dark:bg-gray-900 dark:text-white ${geistSans.variable} ${geistMono.variable}`}
      >
        <ThemeProvider>
        <AIChatbot />
          <Navbar />
          <div className="min-h-screen pt-24">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
