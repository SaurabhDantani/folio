import type { Metadata } from 'next'
import { ContactForm } from '../components/ContactForm'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.saurabhdantani.work'

export const metadata: Metadata = {
  title: 'Contact — Hire Saurabh Dantani for Freelance Projects',
  description:
    'Get in touch with Saurabh Dantani for freelance full-stack development, CRM platforms, web scraping automation, AI integration, or technical consulting. Based in Ahmedabad, India — available worldwide for remote projects.',
  openGraph: {
    title: 'Contact Saurabh Dantani | Hire a Full Stack Developer',
    description:
      'Reach out for freelance web development, automation, CRM, or AI projects. Ahmedabad, India — available worldwide.',
    url: `${BASE_URL}/contact`,
  },
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
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
      name: 'Contact',
      item: `${BASE_URL}/contact`,
    },
  ],
}

export default function Contact() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ContactForm />
    </>
  )
}