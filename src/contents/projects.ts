import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: 'US-Based Lead Generation & CRM Platform',
    slug: 'lead-generation-crm',
    description: 'Automated lead generation CRM for business development teams with custom Playwright scrapers and a real-time Next.js management dashboard.',
    longDescription: 'A comprehensive lead generation and CRM platform designed for US-based Business Development teams. The system automatically scrapes leads from multiple sources, validates contact information, and manages the entire sales pipeline through an intuitive Next.js dashboard.',
    technologies: ['Express.js', 'Next.js', 'Playwright', 'Web Scraping', 'Node.js', 'Cron Jobs'],
    githubLink: 'https://github.com/SaurabhDantani',
    image: '/projects/e-commerce-website.png',
    category: 'CRM & Automation',
    metric: 'Lead Generation Pipeline',
    featured: true,
    challenges: [
      'Building reliable web scrapers that bypass anti-bot measures',
      'Processing 1000+ leads daily with automated validation',
      'Real-time dashboard updates for sales teams',
      'Integrating with multiple data sources'
    ],
    results: [
      'Successfully generated 1000+ qualified leads per month',
      'Reduced manual lead qualification time by 80%',
      'Built scalable cron-based pipeline for continuous data collection',
      'Deployed on AWS with automated backups and monitoring'
    ]
  },
  {
    title: 'US-Based Medical Credentialing & RCM Software',
    slug: 'medical-credentialing-rcm',
    description: 'Healthcare backend services and revenue cycle management platform with NestJS, automated Python bots, and a Next.js analytics dashboard.',
    longDescription: 'A sophisticated healthcare platform for medical credentialing and Revenue Cycle Management (RCM). The system automates complex medical billing workflows, credential verification processes, and provides real-time analytics for healthcare providers.',
    technologies: ['NestJS', 'Python', 'Playwright', 'Next.js', 'PostgreSQL', 'Automated Workflows'],
    githubLink: 'https://github.com/SaurabhDantani',
    image: 'https://github.com/SaurabhDantani/folio/blob/main/site.png?raw=true',
    category: 'Healthcare & RCM',
    metric: 'Automated Billing RCM',
    featured: true,
    challenges: [
      'Handling complex healthcare compliance requirements',
      'Automating credential verification across multiple databases',
      'Building secure APIs for sensitive patient data',
      'Integrating with existing healthcare systems'
    ],
    results: [
      'Automated 90% of manual credentialing workflows',
      'Reduced billing errors by 60%',
      'Built HIPAA-compliant data handling',
      'Deployed microservices architecture for scalability'
    ]
  },
  {
    title: 'Real-Time IPO Management System',
    slug: 'real-time-ipo-system',
    description: 'High-frequency financial market data processing platform with low-latency WebSocket live updates, subscription triggers, and scheduled market cron jobs.',
    longDescription: 'A high-performance financial platform for real-time IPO tracking and management. The system processes market data with low-latency WebSocket connections, provides instant alerts for IPO subscriptions, and handles scheduled market operations with precision timing.',
    technologies: ['NestJS', 'Socket.IO', 'TypeScript', 'Cron Jobs', 'PostgreSQL'],
    githubLink: 'https://github.com/SaurabhDantani',
    image: '/projects/chat-app.png',
    category: 'Real-Time Systems',
    metric: 'Real-Time Market Sync',
    featured: true,
    challenges: [
      'Achieving sub-second latency for market data updates',
      'Handling concurrent WebSocket connections for thousands of users',
      'Implementing reliable scheduled jobs for market operations',
      'Building fault-tolerant architecture for financial data'
    ],
    results: [
      'Achieved <100ms latency for real-time updates',
      'Scaled to handle 10,000+ concurrent WebSocket connections',
      'Built 99.9% uptime with automatic failover',
      'Processed millions of market data points daily'
    ]
  },
  {
    title: 'Community Management Platform',
    slug: 'community-management-platform',
    description: 'Scalable community portal with RESTful APIs, complex user permission matrix, relational database architecture, and Redux Toolkit state management.',
    longDescription: 'A full-featured community management platform with complex permission systems, user role management, and scalable architecture. The platform supports multiple community types, content moderation, and advanced user management features.',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'TypeORM', 'React', 'Redux Toolkit'],
    githubLink: 'https://github.com/SaurabhDantani',
    image: 'https://github.com/SaurabhDantani/card-manager-react/blob/main/Screenshot%20(7).png?raw=true',
    category: 'Full Stack Web',
    metric: 'Scalable REST APIs',
    featured: true,
    challenges: [
      'Designing flexible permission system for different user roles',
      'Building scalable database architecture for complex relationships',
      'Implementing real-time content moderation',
      'Managing state across complex UI interactions'
    ],
    results: [
      'Built flexible RBAC system supporting 15+ user roles',
      'Scaled to support 50,000+ community members',
      'Implemented automated content moderation',
      'Achieved 95% code coverage with comprehensive testing'
    ]
  },
  {
    title: 'AI & GenAI Portfolio Engine',
    slug: 'ai-portfolio-engine',
    description: 'AI portfolio and client inquiry engine integrating OpenAI APIs with automated lead routing, contextual replies, and a Next.js UI dashboard.',
    longDescription: 'A cutting-edge portfolio website featuring AI integration, modern design patterns, and excellent performance. The site includes an AI chatbot assistant, automated email notifications, and achieves perfect Core Web Vitals scores.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Nodemailer'],
    githubLink: 'https://github.com/SaurabhDantani/folio',
    image: 'https://github.com/SaurabhDantani/folio/blob/main/site.png?raw=true',
    category: 'AI & Web',
    metric: '100 Core Web Vitals',
    featured: false,
    challenges: [
      'Achieving perfect Core Web Vitals scores',
      'Integrating AI chatbot with natural language processing',
      'Building responsive animations with Framer Motion',
      'Implementing automated email notifications'
    ],
    results: [
      'Achieved 100/100 Core Web Vitals score',
      'Built AI chatbot with context-aware responses',
      'Implemented smooth 60fps animations',
      'Automated contact form notifications with Nodemailer'
    ]
  },
];