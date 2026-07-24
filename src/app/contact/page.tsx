import type { Metadata } from 'next'
import { ContactForm } from '../components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Saurabh Dantani for freelance projects, collaboration opportunities, or job inquiries. Based in Ahmedabad, Gujarat, India.',
  openGraph: {
    title: 'Contact Saurabh Dantani | Full Stack Developer',
    description:
      'Reach out for freelance projects, collaboration, or job opportunities. Based in Ahmedabad, India.',
  },
}

export default function Contact() {
  return <ContactForm />
}