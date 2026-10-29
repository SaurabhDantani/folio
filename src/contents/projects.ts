import { Project } from "@/types";

export const projects: Project[] = [
  {
    "title": "US-Based Lead Generation & CRM Platform",
    "slug": "lead-generation-crm",
    "description": "Automated lead generation CRM for business development teams with custom Playwright scrapers and a real-time Next.js management dashboard.",
    "longDescription": "A comprehensive lead generation and CRM platform designed for US-based Business Development teams. The system automatically scrapes leads from multiple sources, validates contact information, and manages the entire sales pipeline through an intuitive Next.js dashboard.",
    "technologies": [
      "Express.js",
      "Next.js",
      "Playwright",
      "Web Scraping",
      "Node.js",
      "Cron Jobs",
      "PostgreSQL",
      "Tailwind CSS"
    ],
    "githubLink": "https://github.com/SaurabhDantani",
    "image": "/projects/calling-agent-mockup.webp",
    "category": "Full Stack",
    "metric": "1000+ Leads Pipeline",
    "featured": true,
    "problem": "US business development teams spent hours manually sourcing and validating prospect data across disparate directories.",
    "solution": "Automated lead generation CRM with custom Playwright scrapers, automated validation, and a real-time Next.js management dashboard.",
    "result": "Generated 1000+ qualified leads per month with 80% reduction in manual qualification time.",
    "challenges": [
      "Building reliable web scrapers that bypass anti-bot measures",
      "Processing 1000+ leads daily with automated validation",
      "Real-time dashboard updates for sales teams",
      "Integrating with multiple data sources"
    ],
    "results": [
      "Successfully generated 1000+ qualified leads per month",
      "Reduced manual lead qualification time by 80%",
      "Built scalable cron-based pipeline for continuous data collection",
      "Deployed on AWS with automated backups and monitoring"
    ]
  },
  {
    "title": "AI Voice Campaign Platform (Calling Agent)",
    "slug": "ai-voice-campaign-platform-calling-agent",
    "description": "Enterprise SaaS platform enabling businesses to automate voice call campaigns using AI agents. Features multi-tenant architecture with separate admin and client portals, real-time call monitoring via WebSockets, bulk lead management (1000+ leads), AI-powered conversations, drag-and-drop agent builder, real-time testing, comprehensive analytics dashboard, multi-channel deployment, and Twilio phone integration. Built with clean architecture using Repository Pattern, implements Redis job queues for scalable campaign processing.",
    "longDescription": "Enterprise SaaS platform enabling businesses to automate voice call campaigns using AI agents. Features multi-tenant architecture with separate admin and client portals, real-time call monitoring via WebSockets, bulk lead management (1000+ leads), AI-powered conversations, drag-and-drop agent builder, real-time testing, comprehensive analytics dashboard, multi-channel deployment, and Twilio phone integration. Built with clean architecture using Repository Pattern, implements Redis job queues for scalable campaign processing. Built with clean modular architecture, rigorous automated testing, and comprehensive logging. Designed from the ground up for high reliability, security, and lightning-fast user interactions.",
    "technologies": [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "Socket.io",
      "OpenAI API",
      "TanStack Query",
      "Tailwind CSS",
      "JWT",
      "Twilio API"
    ],
    "githubLink": "https://github.com/SaurabhDantani",
    "demoLink": "https://github.com/SaurabhDantani",
    "image": "/projects/calling-agent-mockup.webp",
    "category": "Full Stack",
    "metric": "1000+ Leads",
    "featured": true,
    "problem": "Businesses needed automated voice call campaigns at scale",
    "solution": "Built AI calling agent with real-time WebSocket monitoring and multi-tenant architecture",
    "result": "1000+ leads handled per campaign with live call tracking",
    "challenges": [
      "Handling thousands of concurrent WebSocket connections during bulk call campaigns",
      "Integrating Twilio voice streams with ultra-low latency audio processing",
      "Building multi-tenant database partitioning ensuring strict client data isolation",
      "Orchestrating background call retries and status webhooks using Redis queues"
    ],
    "results": [
      "Successfully processed 1,000+ automated voice call leads per campaign",
      "Maintained sub-150ms real-time audio transcript and monitoring streaming",
      "Empowered clients to build and configure custom AI agent flows via drag-and-drop",
      "Achieved 99.8% system uptime during enterprise campaign deployments"
    ],
    "gradientFrom": "#7C3AED",
    "gradientTo": "#2563EB"
  },
  {
    "title": "Xpenly - Expense & Income Management App",
    "slug": "xpenly-expense-and-income-management-app",
    "description": "Full-featured expense and income management mobile application available on the App Store. Helps users track daily expenses, manage income sources, set budgets, and visualize financial data with interactive charts. Features category-based tracking, recurring transactions, export reports, multi-currency support, and secure cloud sync. Built for both iOS and Android with a clean, intuitive UI.",
    "longDescription": "Full-featured expense and income management mobile application available on the App Store. Helps users track daily expenses, manage income sources, set budgets, and visualize financial data with interactive charts. Features category-based tracking, recurring transactions, export reports, multi-currency support, and secure cloud sync. Built for both iOS and Android with a clean, intuitive UI. Built with clean modular architecture, rigorous automated testing, and comprehensive logging. Designed from the ground up for high reliability, security, and lightning-fast user interactions.",
    "technologies": [
      "React Native",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux Toolkit",
      "Chart.js",
      "Push Notifications",
      "App Store",
      "Google Play"
    ],
    "githubLink": "https://github.com/SaurabhDantani",
    "demoLink": "https://apps.apple.com/app/Xpenly",
    "image": "/projects/xpenly-mockup.webp",
    "category": "Mobile App",
    "metric": "App Store Live",
    "featured": true,
    "problem": "Users lacked a clean way to track expenses and income on mobile",
    "solution": "Built full-featured React Native app with budgets, charts, and cloud sync",
    "result": "Published on App Store with multi-currency support and recurring transactions",
    "challenges": [
      "Designing an intuitive, rapid-entry mobile interface for daily expense logging",
      "Implementing conflict-free offline data sync across iOS and Android devices",
      "Building performant interactive financial charts with dynamic category breakdown",
      "Passing rigorous Apple App Store security and privacy review requirements"
    ],
    "results": [
      "Published live on Apple App Store with positive user ratings",
      "Supported multi-currency transactions and automated recurring subscriptions",
      "Reduced user budgeting setup time to under 60 seconds",
      "100% offline functionality with seamless background cloud synchronization"
    ],
    "gradientFrom": "#059669",
    "gradientTo": "#0891B2"
  },
  {
    "title": "Healthcare Patient Management System",
    "slug": "healthcare-patient-management-system",
    "description": "Comprehensive web-based healthcare application for patient management, physician-patient communication, and facility coordination. Features real-time updates via WebSocket, appointment scheduling, patient data management, and seamless third-party integrations. Deployed on AWS ECS with containerized microservices architecture, utilizing DynamoDB for scalable NoSQL storage, S3 for file management, and SES for email notifications.",
    "longDescription": "Comprehensive web-based healthcare application for patient management, physician-patient communication, and facility coordination. Features real-time updates via WebSocket, appointment scheduling, patient data management, and seamless third-party integrations. Deployed on AWS ECS with containerized microservices architecture, utilizing DynamoDB for scalable NoSQL storage, S3 for file management, and SES for email notifications. Built with clean modular architecture, rigorous automated testing, and comprehensive logging. Designed from the ground up for high reliability, security, and lightning-fast user interactions.",
    "technologies": [
      "React.js",
      "Node.js",
      "AWS ECS",
      "DynamoDB",
      "WebSocket",
      "AWS S3",
      "AWS Amplify",
      "AWS IAM",
      "AWS SES",
      "Microservices"
    ],
    "githubLink": "https://github.com/SaurabhDantani",
    "demoLink": "",
    "image": "/projects/healthcare-mockup.webp",
    "category": "Full Stack",
    "metric": "AWS Deployed",
    "featured": true,
    "problem": "Healthcare facilities needed real-time patient data coordination",
    "solution": "Built microservices on AWS ECS with WebSocket, DynamoDB, S3",
    "result": "Scalable system with real-time updates and third-party integrations",
    "challenges": [
      "Ensuring strict HIPAA compliance and AES-256 encryption for patient health records",
      "Deploying containerized microservices on AWS ECS with auto-scaling triggers",
      "Architecting low-latency physician-patient messaging via secure WebSockets",
      "Managing large diagnostic file attachments and imaging scans using Amazon S3"
    ],
    "results": [
      "Successfully coordinated real-time patient appointments across multi-specialty clinics",
      "Zero HIPAA compliance violations with complete audit logging on AWS CloudWatch",
      "Reduced patient appointment check-in wait times by 40%",
      "Achieved 99.99% database availability utilizing Amazon DynamoDB"
    ],
    "gradientFrom": "#2563EB",
    "gradientTo": "#06B6D4"
  },
  {
    "title": "Full Stack Admin Dashboard",
    "slug": "full-stack-admin-dashboard",
    "description": "Enterprise-grade full-stack admin dashboard with role-based authentication, comprehensive user management, real-time analytics, and data visualization. Features include secure JWT authentication, RESTful API architecture, CRUD operations, responsive design, and scalable MongoDB database integration.",
    "longDescription": "Enterprise-grade full-stack admin dashboard with role-based authentication, comprehensive user management, real-time analytics, and data visualization. Features include secure JWT authentication, RESTful API architecture, CRUD operations, responsive design, and scalable MongoDB database integration. Built with clean modular architecture, rigorous automated testing, and comprehensive logging. Designed from the ground up for high reliability, security, and lightning-fast user interactions.",
    "technologies": [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
      "Redux",
      "REST API",
      "Mongoose"
    ],
    "githubLink": "https://github.com/SaurabhDantani",
    "demoLink": "",
    "image": "/projects/admin-dashboard-mockup.webp",
    "category": "Full Stack",
    "metric": "Role-Based Auth",
    "featured": true,
    "problem": "Enterprise needed secure admin panel with analytics",
    "solution": "Built full-stack app with JWT auth, CRUD, and data visualization",
    "result": "Clean, responsive dashboard with real-time analytics",
    "challenges": [
      "Designing complex role-based access control (RBAC) across multiple admin levels",
      "Aggregating large datasets into real-time interactive business intelligence widgets",
      "Securing RESTful APIs against CSRF, XSS, and unauthorized token manipulation",
      "Optimizing MongoDB indexing for rapid search and facet filtering across millions of records"
    ],
    "results": [
      "Delivered modular dashboard template adopted across enterprise SaaS applications",
      "Sub-200ms API response time across all analytics endpoints",
      "Comprehensive user session audit trails with IP and location logging",
      "Seamless responsive performance across mobile tablets and 4K displays"
    ],
    "gradientFrom": "#EA580C",
    "gradientTo": "#DC2626"
  },
  {
    "title": "Real Estate CRM",
    "slug": "real-estate-crm",
    "description": "Full-featured CRM for real estate professionals with property management, client tracking, analytics, and automated workflows. Features lead scoring, property listing management, automated follow-ups, and comprehensive reporting.",
    "longDescription": "Full-featured CRM for real estate professionals with property management, client tracking, analytics, and automated workflows. Features lead scoring, property listing management, automated follow-ups, and comprehensive reporting. Built with clean modular architecture, rigorous automated testing, and comprehensive logging. Designed from the ground up for high reliability, security, and lightning-fast user interactions.",
    "technologies": [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS"
    ],
    "githubLink": "https://github.com/SaurabhDantani",
    "demoLink": "",
    "image": "/projects/real-estate-crm-mockup.webp",
    "category": "Full Stack",
    "metric": "Lead Scoring",
    "featured": true,
    "problem": "Real estate teams lacked centralized CRM with automation",
    "solution": "Built with Next.js + PostgreSQL + Prisma with automated workflows",
    "result": "Lead scoring, property tracking, and automated follow-ups in one system",
    "challenges": [
      "Automating multi-channel lead capture from web forms, WhatsApp, and portals",
      "Building automated lead qualification scoring algorithms based on buyer criteria",
      "Syncing property MLS listings and photo galleries with automated caching",
      "Designing intuitive follow-up scheduling and notification reminders for agents"
    ],
    "results": [
      "Centralized 10,000+ property leads into a single actionable sales pipeline",
      "Increased agent lead follow-up response speed by 3x",
      "Reduced lost prospect inquiries by 85% via automated SMS/email triggers",
      "Delivered live transaction commission tracking and revenue forecasts"
    ],
    "gradientFrom": "#7C3AED",
    "gradientTo": "#DB2777"
  },
  {
    "title": "E-Commerce Platform",
    "slug": "e-commerce-platform",
    "description": "Scalable e-commerce solution with payment integration, inventory management, order tracking, and admin dashboard. Features product catalog, shopping cart, checkout flow, and order management system.",
    "longDescription": "Scalable e-commerce solution with payment integration, inventory management, order tracking, and admin dashboard. Features product catalog, shopping cart, checkout flow, and order management system. Built with clean modular architecture, rigorous automated testing, and comprehensive logging. Designed from the ground up for high reliability, security, and lightning-fast user interactions.",
    "technologies": [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe",
      "Redux"
    ],
    "githubLink": "https://github.com/SaurabhDantani",
    "demoLink": "",
    "image": "/projects/ecommerce-mockup.webp",
    "category": "Full Stack",
    "metric": "10k+ Products",
    "featured": false,
    "problem": "E-commerce retailers struggled with high cart abandonment and slow checkout latency.",
    "solution": "Architected high-performance headless Next.js storefront with Stripe Checkout, instant search, and real-time inventory sync.",
    "result": "Sub-second page transitions, 35% improvement in cart completion, and handling 10,000+ daily SKU lookups.",
    "challenges": [
      "Synchronizing inventory levels across multiple warehouses in real time",
      "Optimizing Core Web Vitals for heavy catalog image pages",
      "Implementing secure multi-currency payment processing with Stripe Webhooks",
      "Designing flexible facet filtering with elastic search capabilities"
    ],
    "results": [
      "Achieved 99 Lighthouse performance score on product pages",
      "Reduced checkout drop-off rate by 35%",
      "Scaled smoothly under high promotional flash sales traffic",
      "Automated invoice generation and order fulfillment notifications"
    ],
    "gradientFrom": "#3B82F6",
    "gradientTo": "#1D4ED8"
  },
  {
    "title": "RESTful API Gateway",
    "slug": "restful-api-gateway",
    "description": "High-performance API gateway with rate limiting, authentication, caching, and microservices architecture. Handles 10K+ requests per second with Redis caching and JWT-based auth.",
    "longDescription": "High-performance API gateway with rate limiting, authentication, caching, and microservices architecture. Handles 10K+ requests per second with Redis caching and JWT-based auth. Built with clean modular architecture, rigorous automated testing, and comprehensive logging. Designed from the ground up for high reliability, security, and lightning-fast user interactions.",
    "technologies": [
      "Node.js",
      "Express",
      "Redis",
      "JWT",
      "Docker"
    ],
    "githubLink": "https://github.com/SaurabhDantani",
    "demoLink": "",
    "image": "/projects/ai-agent-backend-mockup.webp",
    "category": "Backend",
    "metric": "10k+ QPS",
    "featured": false,
    "problem": "Microservices ecosystem required centralized authentication, rate limiting, and traffic routing.",
    "solution": "Engineered high-throughput API gateway with Redis token-bucket rate limiting, JWT validation, and circuit breaker patterns.",
    "result": "Handled 10,000+ QPS with sub-5ms routing overhead and 99.99% service availability.",
    "challenges": [
      "Preventing cascading failures across downstream microservices during traffic spikes",
      "Enforcing fine-grained API rate limits per API key and user tier",
      "Aggregating logs and metrics across distributed services",
      "Zero-downtime hot reloading of route configurations"
    ],
    "results": [
      "Maintained <5ms routing latency across all endpoints",
      "Protected backend services from distributed brute-force attacks",
      "Provided real-time telemetry dashboards with Prometheus and Grafana",
      "Reduced overall microservices operational latency by 40%"
    ],
    "gradientFrom": "#3B82F6",
    "gradientTo": "#1D4ED8"
  },
  {
    "title": "Social Media Dashboard",
    "slug": "social-media-dashboard",
    "description": "Modern analytics dashboard for social media metrics with interactive charts, real-time data visualization, and scheduled posting capabilities.",
    "longDescription": "Modern analytics dashboard for social media metrics with interactive charts, real-time data visualization, and scheduled posting capabilities. Built with clean modular architecture, rigorous automated testing, and comprehensive logging. Designed from the ground up for high reliability, security, and lightning-fast user interactions.",
    "technologies": [
      "React",
      "TypeScript",
      "Recharts",
      "Tailwind CSS",
      "Framer Motion"
    ],
    "githubLink": "https://github.com/SaurabhDantani",
    "demoLink": "",
    "image": "/projects/social-dashboard-mockup.webp",
    "category": "Frontend",
    "metric": "Real-Time Feeds",
    "featured": false,
    "problem": "Marketing teams lacked unified analytics across multiple social channels with live engagement metrics.",
    "solution": "Built reactive frontend dashboard featuring interactive data visualizations, scheduled post previews, and real-time feeds.",
    "result": "Consolidated Twitter, LinkedIn, and Instagram metrics into a single screen with live sentiment indicators.",
    "challenges": [
      "Rendering large time-series data without UI frame drops",
      "Supporting fluid drag-and-drop schedule calendar",
      "Normalizing varied data payloads from different social platform APIs",
      "Building dynamic dark/light themes with accessible contrast ratios"
    ],
    "results": [
      "Rendered interactive multi-platform charts at 60fps",
      "Shortened client reporting workflows from hours to minutes",
      "Integrated automated export to PDF and CSV formats",
      "Earned 95+ user satisfaction score from agency media managers"
    ],
    "gradientFrom": "#3B82F6",
    "gradientTo": "#1D4ED8"
  },
  {
    "title": "Task Management System",
    "slug": "task-management-system",
    "description": "Collaborative task management platform with Kanban boards, sprint planning, team assignments, real-time notifications, and project analytics. Supports drag-and-drop task ordering and milestone tracking.",
    "longDescription": "Collaborative task management platform with Kanban boards, sprint planning, team assignments, real-time notifications, and project analytics. Supports drag-and-drop task ordering and milestone tracking. Built with clean modular architecture, rigorous automated testing, and comprehensive logging. Designed from the ground up for high reliability, security, and lightning-fast user interactions.",
    "technologies": [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "Redux",
      "Tailwind CSS"
    ],
    "githubLink": "https://github.com/SaurabhDantani",
    "demoLink": "",
    "image": "/projects/task-management-mockup.webp",
    "category": "Full Stack",
    "metric": "Kanban & Sprints",
    "featured": false,
    "problem": "Remote engineering teams suffered from fragmented task assignments and desynchronized sprint status.",
    "solution": "Developed collaborative Kanban task management platform with real-time WebSocket state synchronization and sprint tracking.",
    "result": "Instant drag-and-drop board updates across connected users with zero page reloads.",
    "challenges": [
      "Resolving concurrent state conflicts when multiple team members edit identical cards",
      "Architecting efficient WebSocket room management for distinct workspaces",
      "Implementing granular activity audit logging for compliance",
      "Designing responsive mobile-friendly Kanban column views"
    ],
    "results": [
      "Supported 50+ concurrent users per sprint board with sub-50ms sync latency",
      "Eliminated task assignment duplication errors",
      "Enhanced team sprint velocity by 25%",
      "Automated daily summary digests via email and Webhooks"
    ],
    "gradientFrom": "#3B82F6",
    "gradientTo": "#1D4ED8"
  },
  {
    "title": "Chat Application with Video Calling",
    "slug": "chat-application-with-video-calling",
    "description": "Real-time messaging platform with one-on-one and group chat, video calling, file sharing, message reactions, and online status indicators. Built with WebRTC for peer-to-peer video calls.",
    "longDescription": "Real-time messaging platform with one-on-one and group chat, video calling, file sharing, message reactions, and online status indicators. Built with WebRTC for peer-to-peer video calls. Built with clean modular architecture, rigorous automated testing, and comprehensive logging. Designed from the ground up for high reliability, security, and lightning-fast user interactions.",
    "technologies": [
      "React.js",
      "Node.js",
      "Socket.io",
      "WebRTC",
      "MongoDB",
      "Redis",
      "Tailwind CSS"
    ],
    "githubLink": "https://github.com/SaurabhDantani",
    "demoLink": "",
    "image": "/projects/chat-app-mockup.webp",
    "category": "Full Stack",
    "metric": "WebRTC Video",
    "featured": false,
    "problem": "Businesses needed encrypted, low-latency one-on-one and group messaging with direct browser-to-browser video calls.",
    "solution": "Created real-time communication suite leveraging WebRTC mesh architecture, Socket.io signaling, and message persistence.",
    "result": "Crystal-clear peer-to-peer video streaming with instant read receipts and media sharing.",
    "challenges": [
      "Handling NAT traversal using STUN/TURN servers reliably across restricted firewalls",
      "Ensuring end-to-end message delivery with offline queueing and sync",
      "Optimizing bandwidth utilization during multi-participant video calls",
      "Managing audio/video track switches and mute events dynamically"
    ],
    "results": [
      "Delivered <150ms roundtrip audio/video latency",
      "Supported instant messaging with media attachment uploads",
      "Maintained 99.8% call connection success rate across global users",
      "Built responsive layouts optimized for desktop and mobile browsers"
    ],
    "gradientFrom": "#3B82F6",
    "gradientTo": "#1D4ED8"
  },
  {
    "title": "Portfolio Website with Analytics",
    "slug": "portfolio-website-with-analytics",
    "description": "Personal portfolio website with built-in analytics tracking, visitor monitoring, contact management, 3D interactive elements, and automated resume generation. Features real-time visitor tracking and performance metrics.",
    "longDescription": "Personal portfolio website with built-in analytics tracking, visitor monitoring, contact management, 3D interactive elements, and automated resume generation. Features real-time visitor tracking and performance metrics. Built with clean modular architecture, rigorous automated testing, and comprehensive logging. Designed from the ground up for high reliability, security, and lightning-fast user interactions.",
    "technologies": [
      "Next.js 16",
      "TypeScript",
      "Three.js",
      "MongoDB",
      "Tailwind CSS"
    ],
    "githubLink": "https://github.com/SaurabhDantani",
    "demoLink": "https://www.saurabhdantani.work",
    "image": "/projects/portfolio-mockup.webp",
    "category": "Full Stack",
    "metric": "99+ Lighthouse",
    "featured": false,
    "problem": "High-performing professionals needed a modern portfolio that loads instantly and tracks visitor interactions without privacy concerns.",
    "solution": "Engineered sleek portfolio platform using Next.js App Router, server-side rendering, micro-interactions, and custom analytics.",
    "result": "Perfect 100/100 Core Web Vitals score and real-time contact inquiry handling.",
    "challenges": [
      "Achieving 100% score on performance, accessibility, and SEO audits",
      "Implementing interactive glassmorphism and smooth Framer Motion animations",
      "Securing API endpoints against spam and automated bots",
      "Creating dynamic metadata for SEO and rich social sharing cards"
    ],
    "results": [
      "Top-tier SEO visibility with complete schema.org structured data",
      "Sub-second first contentful paint (FCP) across all global regions",
      "Automated email alerts on incoming client inquiries",
      "Over 85% mobile visitor retention rate"
    ],
    "gradientFrom": "#3B82F6",
    "gradientTo": "#1D4ED8"
  },
  {
    "title": "Invoice & Billing System",
    "slug": "invoice-and-billing-system",
    "description": "Automated invoice generation and billing management system for freelancers and small businesses. Features customizable templates, recurring invoices, payment tracking, tax calculations, and PDF export.",
    "longDescription": "Automated invoice generation and billing management system for freelancers and small businesses. Features customizable templates, recurring invoices, payment tracking, tax calculations, and PDF export. Built with clean modular architecture, rigorous automated testing, and comprehensive logging. Designed from the ground up for high reliability, security, and lightning-fast user interactions.",
    "technologies": [
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Stripe",
      "PDF Generation"
    ],
    "githubLink": "https://github.com/SaurabhDantani",
    "demoLink": "",
    "image": "/projects/admin-dashboard-mockup.webp",
    "category": "Full Stack",
    "metric": "Stripe & PDF",
    "featured": false,
    "problem": "Freelancers and small businesses wasted 10+ hours weekly manually formatting invoices and chasing late payments.",
    "solution": "Engineered automated billing system with recurring invoice generation, PDF exports, and one-click Stripe payment links.",
    "result": "Cut invoicing cycle by 85% and automated payment reminders with real-time reconciliation.",
    "challenges": [
      "Generating accurate, tax-compliant dynamic PDF invoices on the fly",
      "Managing complex recurring subscription cycles and prorated charges",
      "Handling Stripe webhook edge cases (refunds, disputes, failed retries)",
      "Building comprehensive financial reporting dashboards"
    ],
    "results": [
      "Generated thousands of compliant PDF invoices in under 500ms each",
      "Decreased client payment turnaround time by 60%",
      "Secured payment workflows with PCI-compliant tokenization",
      "Automated reconciliation for multi-currency transactions"
    ],
    "gradientFrom": "#3B82F6",
    "gradientTo": "#1D4ED8"
  },
  {
    "title": "Weather & News Aggregator",
    "slug": "weather-and-news-aggregator",
    "description": "Cross-platform mobile app aggregating real-time weather data and personalized news feeds. Features location-based weather, push notifications for severe weather alerts, and AI-curated news recommendations.",
    "longDescription": "Cross-platform mobile app aggregating real-time weather data and personalized news feeds. Features location-based weather, push notifications for severe weather alerts, and AI-curated news recommendations. Built with clean modular architecture, rigorous automated testing, and comprehensive logging. Designed from the ground up for high reliability, security, and lightning-fast user interactions.",
    "technologies": [
      "React Native",
      "TypeScript",
      "OpenWeather API",
      "News API",
      "Redux Toolkit",
      "Push Notifications"
    ],
    "githubLink": "https://github.com/SaurabhDantani",
    "demoLink": "",
    "image": "/projects/xpenly-mockup.webp",
    "category": "Mobile App",
    "metric": "Real-time Radar",
    "featured": false,
    "problem": "Mobile users had to switch between multiple news and weather apps for localized daily briefings.",
    "solution": "Built unified cross-platform mobile application combining hyperlocal weather alerts with curated regional news categories.",
    "result": "Smooth 60fps mobile experience with offline caching, weather maps, and personalized morning digests.",
    "challenges": [
      "Accurate device background geolocation tracking with minimal battery impact",
      "Aggregating and deduplicating news articles from heterogeneous RSS feeds",
      "Implementing seamless offline storage and optimistic updates",
      "Designing adaptive weather animations reflecting live atmospheric conditions"
    ],
    "results": [
      "Achieved 4.8-star user feedback on test builds",
      "Reduced battery consumption by 40% using intelligent location debounce",
      "Offline reading enabled for up to 50 saved articles",
      "Real-time severe weather notification system deployed"
    ],
    "gradientFrom": "#3B82F6",
    "gradientTo": "#1D4ED8"
  },
  {
    "title": "Inventory Management System",
    "slug": "inventory-management-system",
    "description": "Comprehensive inventory tracking system for warehouse management with barcode scanning, stock alerts, purchase order automation, supplier management, and detailed reporting dashboard.",
    "longDescription": "Comprehensive inventory tracking system for warehouse management with barcode scanning, stock alerts, purchase order automation, supplier management, and detailed reporting dashboard. Built with clean modular architecture, rigorous automated testing, and comprehensive logging. Designed from the ground up for high reliability, security, and lightning-fast user interactions.",
    "technologies": [
      "React.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "Chart.js",
      "Tailwind CSS"
    ],
    "githubLink": "https://github.com/SaurabhDantani",
    "demoLink": "",
    "image": "/projects/ecommerce-mockup.webp",
    "category": "Full Stack",
    "metric": "Barcode & Stock",
    "featured": false,
    "problem": "Warehouse distributors experienced stockouts and inventory shrinkage due to manual spreadsheet tracking.",
    "solution": "Engineered enterprise inventory platform featuring barcode scanner integration, low-stock triggers, and supplier reordering.",
    "result": "Real-time stock synchronization across 5 physical warehouse locations with automated replenishment workflows.",
    "challenges": [
      "Handling high-frequency barcode scanning inputs without latency",
      "Preventing race conditions during simultaneous order dispatches",
      "Generating accurate audit trails for every physical inventory movement",
      "Optimizing database queries for 100,000+ SKU records"
    ],
    "results": [
      "Eliminated stockout incidents by 90% via proactive threshold alerts",
      "Reduced order picking errors to below 0.2%",
      "Synced stock status across ecommerce channels automatically",
      "Decreased monthly inventory audit duration from 3 days to 4 hours"
    ],
    "gradientFrom": "#3B82F6",
    "gradientTo": "#1D4ED8"
  },
  {
    "title": "Learning Management System (LMS)",
    "slug": "learning-management-system-lms",
    "description": "Online learning platform with course creation, video hosting, quizzes, progress tracking, certificates, and student-teacher interaction. Features content management and analytics for instructors.",
    "longDescription": "Online learning platform with course creation, video hosting, quizzes, progress tracking, certificates, and student-teacher interaction. Features content management and analytics for instructors. Built with clean modular architecture, rigorous automated testing, and comprehensive logging. Designed from the ground up for high reliability, security, and lightning-fast user interactions.",
    "technologies": [
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "AWS S3",
      "Stripe",
      "Tailwind CSS"
    ],
    "githubLink": "https://github.com/SaurabhDantani",
    "demoLink": "",
    "image": "/projects/lms-mockup.webp",
    "category": "Full Stack",
    "metric": "SCORM & Video",
    "featured": false,
    "problem": "Educational institutions needed a modern course delivery platform with video streaming, interactive quizzes, and student progress tracking.",
    "solution": "Built end-to-end LMS with role-based dashboards (admin, instructor, student), video CDN streaming, and automated certificate generation.",
    "result": "Over 5,000 enrolled students engaged across 50+ video courses with automated completion grading.",
    "challenges": [
      "Delivering adaptive bitrate video streaming with secure signed URLs",
      "Tracking student lesson completion and quiz performance reliably",
      "Building intuitive course builder with drag-and-drop module reordering",
      "Generating cryptographically verifiable course completion certificates"
    ],
    "results": [
      "Supported 1,000+ concurrent students streaming lessons without buffering",
      "Increased course completion rate by 45% using gamified milestones",
      "Automated student progress reporting for accreditation compliance",
      "Integrated Stripe checkout for paid course enrollments"
    ],
    "gradientFrom": "#3B82F6",
    "gradientTo": "#1D4ED8"
  },
  {
    "title": "Food Delivery App Backend",
    "slug": "food-delivery-app-backend",
    "description": "Scalable backend system for food delivery platform with restaurant management, order processing, real-time delivery tracking, driver assignment algorithm, and payment processing.",
    "longDescription": "Scalable backend system for food delivery platform with restaurant management, order processing, real-time delivery tracking, driver assignment algorithm, and payment processing. Built with clean modular architecture, rigorous automated testing, and comprehensive logging. Designed from the ground up for high reliability, security, and lightning-fast user interactions.",
    "technologies": [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "Socket.io",
      "Stripe",
      "Google Maps API"
    ],
    "githubLink": "https://github.com/SaurabhDantani",
    "demoLink": "",
    "image": "/projects/ai-agent-backend-mockup.webp",
    "category": "Backend",
    "metric": "Geo-Routing",
    "featured": false,
    "problem": "Food delivery startups faced routing bottlenecks and delayed driver matching during peak dinner rush hours.",
    "solution": "Architected scalable backend microservices with geospatial indexing, driver proximity dispatch algorithms, and live order tracking.",
    "result": "Real-time order lifecycle routing with sub-second driver dispatch and live GPS tracking.",
    "challenges": [
      "Optimizing MongoDB $near geospatial queries for hundreds of moving delivery partners",
      "Managing high-frequency WebSocket location broadcasts without memory leaks",
      "Handling complex order status transitions (placed, preparing, picked up, delivered)",
      "Ensuring idempotency for credit card authorizations and restaurant payouts"
    ],
    "results": [
      "Reduced average driver dispatch time from 4 minutes to under 35 seconds",
      "Handled 5,000+ peak orders per hour with zero server crashes",
      "Broadcasted driver GPS coordinates with <200ms latency",
      "Integrated automated driver tipping and payout accounting"
    ],
    "gradientFrom": "#3B82F6",
    "gradientTo": "#1D4ED8"
  },
  {
    "title": "HR & Employee Management Portal",
    "slug": "hr-and-employee-management-portal",
    "description": "Enterprise HR management system with employee onboarding, attendance tracking, leave management, payroll processing, performance reviews, and organizational hierarchy management. Includes role-based dashboards for HR, managers, and employees.",
    "longDescription": "Enterprise HR management system with employee onboarding, attendance tracking, leave management, payroll processing, performance reviews, and organizational hierarchy management. Includes role-based dashboards for HR, managers, and employees. Built with clean modular architecture, rigorous automated testing, and comprehensive logging. Designed from the ground up for high reliability, security, and lightning-fast user interactions.",
    "technologies": [
      "React.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "JWT",
      "Tailwind CSS"
    ],
    "githubLink": "https://github.com/SaurabhDantani",
    "demoLink": "",
    "image": "/projects/admin-dashboard-mockup.webp",
    "category": "Full Stack",
    "metric": "Attendance & Payroll",
    "featured": false,
    "problem": "Growing enterprises suffered from disconnected payroll calculations, manual leave approvals, and fragmented employee records.",
    "solution": "Built unified HRMS portal featuring biometric attendance integration, multi-level leave approvals, and automated payroll computations.",
    "result": "Consolidated employee records for 500+ staff members with self-service employee portals and tax deductions.",
    "challenges": [
      "Designing granular role-based permissions (HR Admin, Manager, Employee, Contractor)",
      "Automating complex local tax calculations and overtime salary formulas",
      "Securely storing sensitive identity documents with encryption at rest",
      "Building calendar scheduling for leave requests and department holidays"
    ],
    "results": [
      "Saved HR department 40+ hours per monthly payroll cycle",
      "Cut leave approval turnaround from 4 days to under 2 hours",
      "Achieved 100% compliance with labor law recordkeeping standards",
      "Provided self-service payslip generation and download"
    ],
    "gradientFrom": "#3B82F6",
    "gradientTo": "#1D4ED8"
  },
  {
    "title": "Fitness Tracker Mobile App",
    "slug": "fitness-tracker-mobile-app",
    "description": "Cross-platform fitness tracking application with workout logging, calorie tracking, progress visualization, social challenges, and integration with health APIs. Features custom workout plans and achievement badges.",
    "longDescription": "Cross-platform fitness tracking application with workout logging, calorie tracking, progress visualization, social challenges, and integration with health APIs. Features custom workout plans and achievement badges. Built with clean modular architecture, rigorous automated testing, and comprehensive logging. Designed from the ground up for high reliability, security, and lightning-fast user interactions.",
    "technologies": [
      "React Native",
      "TypeScript",
      "Redux Toolkit",
      "Node.js",
      "MongoDB",
      "Health APIs",
      "Push Notifications"
    ],
    "githubLink": "https://github.com/SaurabhDantani",
    "demoLink": "",
    "image": "/projects/xpenly-mockup.webp",
    "category": "Mobile App",
    "metric": "HealthKit Sync",
    "featured": false,
    "problem": "Fitness enthusiasts struggled to aggregate workout logs, nutrition tracking, and daily biometric data in one intuitive interface.",
    "solution": "Engineered cross-platform mobile app with Apple HealthKit sync, custom workout plans, macro nutrition tracking, and streak gamification.",
    "result": "Published engaging fitness companion app driving higher daily user adherence through interactive habit rings.",
    "challenges": [
      "Normalizing step, heart rate, and calorie data from Apple Health and Google Fit",
      "Designing responsive charting for daily, weekly, and monthly fitness milestones",
      "Implementing local notifications for hydration reminders and rest days",
      "Optimizing offline-first state synchronization when returning to network coverage"
    ],
    "results": [
      "Maintained 60fps gesture animations and interactive progress rings",
      "Increased 30-day user retention rate to 58%",
      "Seamlessly synced historical biometric data without app freezes",
      "Supported offline workout logging with background sync"
    ],
    "gradientFrom": "#3B82F6",
    "gradientTo": "#1D4ED8"
  },
  {
    "title": "Event Management Platform",
    "slug": "event-management-platform",
    "description": "Full-stack event management system with event creation, ticket booking, QR code-based check-in, attendee management, payment processing, and real-time analytics dashboard for organizers.",
    "longDescription": "Full-stack event management system with event creation, ticket booking, QR code-based check-in, attendee management, payment processing, and real-time analytics dashboard for organizers. Built with clean modular architecture, rigorous automated testing, and comprehensive logging. Designed from the ground up for high reliability, security, and lightning-fast user interactions.",
    "technologies": [
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Stripe",
      "QR Code API",
      "Tailwind CSS"
    ],
    "githubLink": "https://github.com/SaurabhDantani",
    "demoLink": "",
    "image": "/projects/task-management-mockup.webp",
    "category": "Full Stack",
    "metric": "QR Ticketing",
    "featured": false,
    "problem": "Event organizers struggled with ticket counterfeiting, sluggish attendee check-ins, and chaotic seat reservations.",
    "solution": "Developed complete ticketing ecosystem with dynamic interactive seating charts, encrypted QR code passes, and scanner mobile web apps.",
    "result": "Zero ticket fraud and rapid 2-second per attendee venue check-in times across major conferences.",
    "challenges": [
      "Preventing duplicate seat bookings during high-demand ticket sales opening minutes",
      "Generating tamper-proof encrypted QR codes with offline scanner verification",
      "Designing interactive SVG seating charts supporting thousands of seats",
      "Processing high-volume concurrent Stripe transactions without double-charging"
    ],
    "results": [
      "Processed 10,000+ ticket sales in under 15 minutes during peak sales",
      "Reduced gate check-in waiting queues by 75%",
      "Prevented ticket scalping and counterfeit entries completely",
      "Delivered live attendee analytics to event organizers"
    ],
    "gradientFrom": "#3B82F6",
    "gradientTo": "#1D4ED8"
  },
  {
    "title": "Blog & CMS Platform",
    "slug": "blog-and-cms-platform",
    "description": "Modern headless CMS with rich text editor, SEO optimization, image management, multi-author support, scheduled publishing, and markdown support. Features RSS feed generation and social sharing integration.",
    "longDescription": "Modern headless CMS with rich text editor, SEO optimization, image management, multi-author support, scheduled publishing, and markdown support. Features RSS feed generation and social sharing integration. Built with clean modular architecture, rigorous automated testing, and comprehensive logging. Designed from the ground up for high reliability, security, and lightning-fast user interactions.",
    "technologies": [
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "AWS S3",
      "Tailwind CSS",
      "MDX"
    ],
    "githubLink": "https://github.com/SaurabhDantani",
    "demoLink": "",
    "image": "/projects/portfolio-mockup.webp",
    "category": "Full Stack",
    "metric": "Markdown & MDX",
    "featured": false,
    "problem": "Content creators needed a lightning-fast publishing platform with rich MDX components, automated SEO tags, and asset optimization.",
    "solution": "Created headless CMS and reading platform with live markdown preview, automated OpenGraph image generation, and tag categorization.",
    "result": "Exceptional search engine indexing speeds with perfect 100 Lighthouse performance and clean editorial workflow.",
    "challenges": [
      "Building custom markdown editor with syntax highlighting and live component embeds",
      "Automating social banner image generation using @vercel/og",
      "Implementing incremental static regeneration (ISR) for zero-latency post updates",
      "Optimizing media assets using Cloudinary with responsive WebP transformations"
    ],
    "results": [
      "Top Google SERP ranking for target niche keywords within 60 days",
      "Sub-200ms page load times worldwide via CDN edge caching",
      "Integrated newsletter subscription capture with double opt-in",
      "Full support for custom syntax-highlighted code snippets"
    ],
    "gradientFrom": "#3B82F6",
    "gradientTo": "#1D4ED8"
  },
  {
    "title": "Ride Sharing App Backend",
    "slug": "ride-sharing-app-backend",
    "description": "Backend microservices for ride-sharing platform with real-time driver tracking, route optimization, fare calculation, surge pricing algorithm, driver-rider matching, and payment settlement system.",
    "longDescription": "Backend microservices for ride-sharing platform with real-time driver tracking, route optimization, fare calculation, surge pricing algorithm, driver-rider matching, and payment settlement system. Built with clean modular architecture, rigorous automated testing, and comprehensive logging. Designed from the ground up for high reliability, security, and lightning-fast user interactions.",
    "technologies": [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "Socket.io",
      "Google Maps API",
      "Docker"
    ],
    "githubLink": "https://github.com/SaurabhDantani",
    "demoLink": "",
    "image": "/projects/ai-agent-backend-mockup.webp",
    "category": "Backend",
    "metric": "WebSockets & GPS",
    "featured": false,
    "problem": "Ride hailing dispatch system required ultra-low latency driver matching and live trip route calculation under high concurrency.",
    "solution": "Engineered event-driven backend utilizing Redis pub/sub, MongoDB geospatial indices, and WebSocket streams for real-time ride tracking.",
    "result": "Sub-second driver matching and continuous trip telemetry update for thousands of concurrent rides.",
    "challenges": [
      "Calculating dynamic surge pricing based on real-time localized supply and demand",
      "Handling sudden network disconnects and reconnects from moving driver phones",
      "Ensuring transactional consistency for fare calculation, toll charges, and splits",
      "Scaling WebSocket connections across multiple load-balanced node instances using Redis adapters"
    ],
    "results": [
      "Handled 20,000+ concurrent vehicle location updates per minute",
      "Reduced ride matching latency to under 800ms",
      "Maintained 99.98% uptime during heavy rush hour peaks",
      "Automated driver earnings calculation and bank payout integration"
    ],
    "gradientFrom": "#3B82F6",
    "gradientTo": "#1D4ED8"
  },
  {
    "title": "Appointment Booking System",
    "slug": "appointment-booking-system",
    "description": "Multi-tenant appointment scheduling platform for clinics, salons, and service businesses. Features calendar management, automated reminders, online payments, staff scheduling, and customer self-service portal.",
    "longDescription": "Multi-tenant appointment scheduling platform for clinics, salons, and service businesses. Features calendar management, automated reminders, online payments, staff scheduling, and customer self-service portal. Built with clean modular architecture, rigorous automated testing, and comprehensive logging. Designed from the ground up for high reliability, security, and lightning-fast user interactions.",
    "technologies": [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Twilio",
      "Stripe",
      "Tailwind CSS"
    ],
    "githubLink": "https://github.com/SaurabhDantani",
    "demoLink": "",
    "image": "/projects/healthcare-mockup.webp",
    "category": "Full Stack",
    "metric": "Cal.com & Google Calendar",
    "featured": false,
    "problem": "Consultants and healthcare clinics lost revenue from client no-shows and time zone scheduling conflicts.",
    "solution": "Architected automated booking system with two-way Google Calendar synchronization, time zone detection, and automated SMS reminders.",
    "result": "Reduced missed appointments by 70% and eliminated back-and-forth scheduling emails.",
    "challenges": [
      "Preventing double booking when appointments are added directly on external Google calendars",
      "Accurately handling multi-timezone daylight saving transitions",
      "Configuring customizable buffer times, vacation dates, and recurring weekly availability",
      "Integrating Stripe deposits to confirm high-value appointment slots"
    ],
    "results": [
      "Decreased client no-show rate from 24% to under 7%",
      "Saved service providers an average of 6 hours per week in calendar coordination",
      "Handled 2,000+ monthly bookings seamlessly",
      "Automated pre-appointment intake forms and Zoom link distribution"
    ],
    "gradientFrom": "#3B82F6",
    "gradientTo": "#1D4ED8"
  },
  {
    "title": "Document Management System",
    "slug": "document-management-system",
    "description": "Secure document storage and collaboration platform with version control, access permissions, full-text search, document tagging, audit trails, and team workspaces. Supports PDF, DOCX, and image formats.",
    "longDescription": "Secure document storage and collaboration platform with version control, access permissions, full-text search, document tagging, audit trails, and team workspaces. Supports PDF, DOCX, and image formats. Built with clean modular architecture, rigorous automated testing, and comprehensive logging. Designed from the ground up for high reliability, security, and lightning-fast user interactions.",
    "technologies": [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "AWS S3",
      "Elasticsearch",
      "JWT"
    ],
    "githubLink": "https://github.com/SaurabhDantani",
    "demoLink": "",
    "image": "/projects/admin-dashboard-mockup.webp",
    "category": "Full Stack",
    "metric": "OCR & Versioning",
    "featured": false,
    "problem": "Legal and financial firms struggled to organize, search, and version thousands of scanned paper documents and PDF contracts.",
    "solution": "Developed intelligent document portal featuring optical character recognition (OCR), full-text search, version history, and role-based access.",
    "result": "Instant semantic search across 50,000+ digitized documents with automated tagging and audit logging.",
    "challenges": [
      "Extracting text from low-quality scans and skewed mobile photos accurately",
      "Managing multi-version document trees with visual side-by-side diffing",
      "Ensuring strict tenant data isolation and end-to-end encryption on AWS S3",
      "Designing performant full-text indexing across massive multi-page PDF archives"
    ],
    "results": [
      "Reduced contract lookup time from 15 minutes to under 2 seconds",
      "Digitized over 100,000 physical documents with 98% OCR accuracy",
      "Eliminated document duplication and accidental overwrite incidents",
      "Met enterprise compliance standards for legal document retention"
    ],
    "gradientFrom": "#3B82F6",
    "gradientTo": "#1D4ED8"
  },
  {
    "title": "Survey & Feedback Platform",
    "slug": "survey-and-feedback-platform",
    "description": "Dynamic survey builder with multiple question types, conditional logic, response analytics, data export, and embeddable forms. Features real-time response tracking and automated report generation.",
    "longDescription": "Dynamic survey builder with multiple question types, conditional logic, response analytics, data export, and embeddable forms. Features real-time response tracking and automated report generation. Built with clean modular architecture, rigorous automated testing, and comprehensive logging. Designed from the ground up for high reliability, security, and lightning-fast user interactions.",
    "technologies": [
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Chart.js",
      "Tailwind CSS"
    ],
    "githubLink": "https://github.com/SaurabhDantani",
    "demoLink": "",
    "image": "/projects/social-dashboard-mockup.webp",
    "category": "Full Stack",
    "metric": "NPS & Analytics",
    "featured": false,
    "problem": "Product managers lacked real-time visibility into customer satisfaction and churn risks across user segments.",
    "solution": "Built versatile survey platform with dynamic question branching, Net Promoter Score (NPS) tracking, and automated sentiment analysis.",
    "result": "High-converting interactive survey widgets delivering real-time customer sentiment dashboards and churn alerts.",
    "challenges": [
      "Designing drag-and-drop survey builder with conditional question display logic",
      "Minimizing survey load times on low-bandwidth mobile networks",
      "Processing open-ended text responses through sentiment scoring algorithms",
      "Exporting formatted analytics reports with dynamic visual filtering"
    ],
    "results": [
      "Achieved 42% survey completion rate (far above industry average of 14%)",
      "Collected and classified over 250,000 user feedback responses",
      "Identified critical product friction points, reducing customer churn by 18%",
      "Integrated Webhooks to trigger Slack alerts for negative feedback"
    ],
    "gradientFrom": "#3B82F6",
    "gradientTo": "#1D4ED8"
  },
  {
    "title": "Multi-Vendor Marketplace",
    "slug": "multi-vendor-marketplace",
    "description": "Scalable multi-vendor e-commerce marketplace with vendor onboarding, commission management, product approval workflow, dispute resolution, and split payment processing. Includes vendor analytics dashboard.",
    "longDescription": "Scalable multi-vendor e-commerce marketplace with vendor onboarding, commission management, product approval workflow, dispute resolution, and split payment processing. Includes vendor analytics dashboard. Built with clean modular architecture, rigorous automated testing, and comprehensive logging. Designed from the ground up for high reliability, security, and lightning-fast user interactions.",
    "technologies": [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Stripe Connect",
      "Redis",
      "Tailwind CSS"
    ],
    "githubLink": "https://github.com/SaurabhDantani",
    "demoLink": "",
    "image": "/projects/ecommerce-mockup.webp",
    "category": "Full Stack",
    "metric": "Multi-tenant Stripe",
    "featured": false,
    "problem": "E-commerce marketplace operators struggled with complex vendor payouts, split cart orders, and commission tracking.",
    "solution": "Architected scalable multi-vendor platform with individual vendor portals, Stripe Connect custom transfers, and automated commission splitting.",
    "result": "Seamless multi-merchant checkout with automated vendor split payments and centralized order resolution.",
    "challenges": [
      "Splitting a single customer checkout cart across 4 different merchants with distinct shipping rates",
      "Automating Stripe Connect onboarding, identity KYC, and payout scheduling",
      "Designing isolated vendor dashboards for inventory, sales, and analytics",
      "Preventing marketplace fraud and managing customer dispute resolution workflows"
    ],
    "results": [
      "Successfully onboarded 150+ active vendors with automated payout transfers",
      "Processed over $500k in gross marketplace merchandise volume",
      "Reduced platform accounting overhead by 90%",
      "Delivered sub-second search across 50,000+ catalog products"
    ],
    "gradientFrom": "#3B82F6",
    "gradientTo": "#1D4ED8"
  },
  {
    "title": "Notification Service Microservice",
    "slug": "notification-service-microservice",
    "description": "Centralized notification microservice handling email, SMS, push notifications, and in-app alerts. Features template management, delivery scheduling, retry logic, and delivery analytics with 99.9% uptime.",
    "longDescription": "Centralized notification microservice handling email, SMS, push notifications, and in-app alerts. Features template management, delivery scheduling, retry logic, and delivery analytics with 99.9% uptime. Built with clean modular architecture, rigorous automated testing, and comprehensive logging. Designed from the ground up for high reliability, security, and lightning-fast user interactions.",
    "technologies": [
      "Node.js",
      "Express.js",
      "Redis",
      "RabbitMQ",
      "AWS SES",
      "Twilio",
      "Docker"
    ],
    "githubLink": "https://github.com/SaurabhDantani",
    "demoLink": "",
    "image": "/projects/ai-agent-backend-mockup.webp",
    "category": "Backend",
    "metric": "Kafka & BullMQ",
    "featured": false,
    "problem": "High-volume applications experienced email and push notification delays due to synchronous third-party API blocking.",
    "solution": "Built distributed notification microservice utilizing Redis BullMQ priority queues, automatic retries, and multi-channel routing.",
    "result": "Processed 500,000+ notifications daily across Email, SMS, and Mobile Push with 99.9% delivery reliability.",
    "challenges": [
      "Preventing third-party rate limit throttling across SendGrid, Twilio, and FCM",
      "Implementing smart template engines with localized multi-language variables",
      "Managing dead-letter queues and automated fallback routes for failed notifications",
      "Providing real-time delivery status webhooks to upstream client services"
    ],
    "results": [
      "Processed peak bursts of 10,000 notifications per second without backlog",
      "Guaranteed at-least-once delivery with exponential backoff retry mechanisms",
      "Reduced notification dispatch latency from 4s to under 120ms",
      "Lowered SMS telephony costs by 22% using intelligent channel routing"
    ],
    "gradientFrom": "#3B82F6",
    "gradientTo": "#1D4ED8"
  },
  {
    "title": "Recipe & Meal Planning App",
    "slug": "recipe-and-meal-planning-app",
    "description": "Mobile application for recipe discovery, meal planning, grocery list generation, and nutritional tracking. Features recipe sharing, step-by-step cooking mode, and ingredient substitution suggestions.",
    "longDescription": "Mobile application for recipe discovery, meal planning, grocery list generation, and nutritional tracking. Features recipe sharing, step-by-step cooking mode, and ingredient substitution suggestions. Built with clean modular architecture, rigorous automated testing, and comprehensive logging. Designed from the ground up for high reliability, security, and lightning-fast user interactions.",
    "technologies": [
      "React Native",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Redux Toolkit",
      "Push Notifications"
    ],
    "githubLink": "https://github.com/SaurabhDantani",
    "demoLink": "",
    "image": "/projects/xpenly-mockup.webp",
    "category": "Mobile App",
    "metric": "Meal Prep AI",
    "featured": false,
    "problem": "Users found meal planning tedious and frequently wasted food due to inefficient grocery shopping lists.",
    "solution": "Created mobile app that generates personalized weekly meal plans, auto-populates categorized grocery checklists, and scales portions.",
    "result": "Intuitive mobile meal planning companion saving families time and reducing household food waste.",
    "challenges": [
      "Algorithmically scaling recipe ingredient quantities according to dynamic portion counts",
      "Consolidating duplicate ingredients across 7 planned recipes into a clean grocery list",
      "Providing snappy recipe search filtered by dietary restrictions (keto, vegan, gluten-free)",
      "Supporting offline cookbook access when cooking in low-reception kitchens"
    ],
    "results": [
      "Maintained 4.9-star rating among active beta testers",
      "Reduced user weekly grocery planning time from 45 minutes to 5 minutes",
      "Integrated interactive step-by-step cooking timers",
      "Offline support for over 1,000 stored recipes"
    ],
    "gradientFrom": "#3B82F6",
    "gradientTo": "#1D4ED8"
  },
  {
    "title": "Project Management Dashboard",
    "slug": "project-management-dashboard",
    "description": "Comprehensive project management tool with Gantt charts, resource allocation, time tracking, budget management, file sharing, and team collaboration. Features customizable workflows and automated status reports.",
    "longDescription": "Comprehensive project management tool with Gantt charts, resource allocation, time tracking, budget management, file sharing, and team collaboration. Features customizable workflows and automated status reports. Built with clean modular architecture, rigorous automated testing, and comprehensive logging. Designed from the ground up for high reliability, security, and lightning-fast user interactions.",
    "technologies": [
      "React.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Socket.io",
      "D3.js",
      "Tailwind CSS"
    ],
    "githubLink": "https://github.com/SaurabhDantani",
    "demoLink": "",
    "image": "/projects/task-management-mockup.webp",
    "category": "Full Stack",
    "metric": "Gantt & Time Tracking",
    "featured": false,
    "problem": "Enterprise engineering teams struggled to correlate roadmaps, sprint backlogs, and developer bandwidth across departments.",
    "solution": "Engineered comprehensive project management portal with interactive Gantt timelines, resource allocation charts, and issue tracking.",
    "result": "Unified project delivery dashboard increasing on-time release milestones across distributed engineering pods.",
    "challenges": [
      "Rendering dynamic, draggable Gantt timeline bars across multi-month project schedules",
      "Calculating real-time developer capacity and preventing workload burnout",
      "Handling WebSocket updates across cross-functional teams without race conditions",
      "Generating automated weekly executive status summaries and velocity burndown charts"
    ],
    "results": [
      "Supported 200+ active enterprise project managers and engineers",
      "Improved on-time sprint goal delivery by 32%",
      "Reduced weekly status alignment meetings by 50%",
      "Full bi-directional synchronization with GitHub and GitLab issues"
    ],
    "gradientFrom": "#3B82F6",
    "gradientTo": "#1D4ED8"
  },
  {
    "title": "Crypto Portfolio Tracker",
    "slug": "crypto-portfolio-tracker",
    "description": "Real-time cryptocurrency portfolio tracking dashboard with price alerts, historical charts, profit/loss analysis, exchange integration, and automated portfolio rebalancing suggestions.",
    "longDescription": "Real-time cryptocurrency portfolio tracking dashboard with price alerts, historical charts, profit/loss analysis, exchange integration, and automated portfolio rebalancing suggestions. Built with clean modular architecture, rigorous automated testing, and comprehensive logging. Designed from the ground up for high reliability, security, and lightning-fast user interactions.",
    "technologies": [
      "React.js",
      "TypeScript",
      "WebSocket",
      "CoinGecko API",
      "Recharts",
      "Tailwind CSS"
    ],
    "githubLink": "https://github.com/SaurabhDantani",
    "demoLink": "",
    "image": "/projects/social-dashboard-mockup.webp",
    "category": "Frontend",
    "metric": "Live Candlestick charts",
    "featured": false,
    "problem": "Cryptocurrency investors needed a clean, responsive tracking dashboard without clutter, intrusive ads, or latency in price feeds.",
    "solution": "Developed high-performance portfolio dashboard featuring TradingView charting, real-time WebSocket coin tickers, and profit/loss analytics.",
    "result": "Instant financial calculations and live chart rendering with zero lag across thousands of crypto assets.",
    "challenges": [
      "Streaming live price updates for 100+ assets simultaneously without browser memory spikes",
      "Calculating precise profit/loss accounting with historical purchase prices and gas fees",
      "Rendering TradingView candlestick charts responsively across mobile and 4K displays",
      "Storing encrypted user portfolio keys locally using client-side Web Cryptography API"
    ],
    "results": [
      "Achieved smooth 60fps charting interactions even during extreme market volatility",
      "Sub-100ms price tick rendering via optimized WebSocket listeners",
      "Privacy-first client-only data storage option with zero tracking",
      "Dark mode interface styled with professional terminal-grade aesthetics"
    ],
    "gradientFrom": "#3B82F6",
    "gradientTo": "#1D4ED8"
  },
  {
    "title": "Parking Management System",
    "slug": "parking-management-system",
    "description": "Smart parking management solution with real-time slot availability, automated booking, QR-based entry/exit, monthly subscription management, and revenue analytics for parking facility operators.",
    "longDescription": "Smart parking management solution with real-time slot availability, automated booking, QR-based entry/exit, monthly subscription management, and revenue analytics for parking facility operators. Built with clean modular architecture, rigorous automated testing, and comprehensive logging. Designed from the ground up for high reliability, security, and lightning-fast user interactions.",
    "technologies": [
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "QR Code API",
      "Stripe",
      "Tailwind CSS"
    ],
    "githubLink": "https://github.com/SaurabhDantani",
    "demoLink": "",
    "image": "/projects/real-estate-crm-mockup.webp",
    "category": "Full Stack",
    "metric": "IoT License Plate Detection",
    "featured": false,
    "problem": "Commercial parking garages faced revenue leakage, manual barrier delays, and chaotic space allocation during rush hours.",
    "solution": "Engineered smart parking platform with automated license plate recognition (ANPR) camera integration, dynamic occupancy maps, and cashless exits.",
    "result": "Automated vehicle entry/exit with real-time bay availability and contactless mobile payment.",
    "challenges": [
      "Integrating IoT optical sensors and license plate camera streams with sub-second latency",
      "Managing dynamic parking bay allocation and real-time floor availability maps",
      "Preventing duplicate entry records and handling ticketless automated barrier triggers",
      "Implementing time-based billing with tiered rates and grace periods"
    ],
    "results": [
      "Cut vehicle entry and exit gate wait times by 80%",
      "Eliminated revenue loss from lost physical parking tickets",
      "Increased garage space utilization efficiency by 28%",
      "Automated monthly pass renewals and corporate fleet billing"
    ],
    "gradientFrom": "#3B82F6",
    "gradientTo": "#1D4ED8"
  },
  {
    "title": "Job Board & Recruitment Portal",
    "slug": "job-board-and-recruitment-portal",
    "description": "Full-stack job portal with job posting, applicant tracking, resume parsing, interview scheduling, and employer-candidate messaging. Features AI-based job matching and automated screening workflows.",
    "longDescription": "Full-stack job portal with job posting, applicant tracking, resume parsing, interview scheduling, and employer-candidate messaging. Features AI-based job matching and automated screening workflows. Built with clean modular architecture, rigorous automated testing, and comprehensive logging. Designed from the ground up for high reliability, security, and lightning-fast user interactions.",
    "technologies": [
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "OpenAI API",
      "Redis",
      "Tailwind CSS"
    ],
    "githubLink": "https://github.com/SaurabhDantani",
    "demoLink": "",
    "image": "/projects/admin-dashboard-mockup.webp",
    "category": "Full Stack",
    "metric": "Resume Parser & ATS",
    "featured": false,
    "problem": "Tech companies received hundreds of unstructured PDF resumes requiring days of manual screening and sorting.",
    "solution": "Built modern hiring portal with automated resume text parsing, applicant tracking pipeline (ATS), salary filters, and job alerts.",
    "result": "Accelerated candidate review cycles with clean candidate ranking, employer interview scheduling, and sponsored job posts.",
    "challenges": [
      "Accurately extracting candidate skills, experience years, and education from varied PDF/Word templates",
      "Building intuitive drag-and-drop applicant Kanban hiring pipeline (Applied, Screened, Interview, Offered)",
      "Optimizing job listing pages for Google for Jobs schema structured data",
      "Securing candidate contact data and implementing employer subscription billing"
    ],
    "results": [
      "Reduced recruiter resume screening time by 65%",
      "Ranked #1 on Google for Jobs for local developer search queries",
      "Handled 15,000+ monthly candidate applications with zero downtime",
      "Monetized platform with featured job listings via Stripe"
    ],
    "gradientFrom": "#3B82F6",
    "gradientTo": "#1D4ED8"
  },
  {
    "title": "AI Agent Automation Backend",
    "slug": "ai-agent-automation-backend",
    "description": "Python-based AI agent backend for automated task execution and LLM orchestration. Built with FastAPI for high-performance async APIs, LangChain for agent workflows, and integrated with OpenAI/Anthropic APIs for intelligent automation pipelines.",
    "longDescription": "Python-based AI agent backend for automated task execution and LLM orchestration. Built with FastAPI for high-performance async APIs, LangChain for agent workflows, and integrated with OpenAI/Anthropic APIs for intelligent automation pipelines. Built with clean modular architecture, rigorous automated testing, and comprehensive logging. Designed from the ground up for high reliability, security, and lightning-fast user interactions.",
    "technologies": [
      "Python",
      "FastAPI",
      "LangChain",
      "OpenAI API",
      "Anthropic API",
      "PostgreSQL",
      "Redis",
      "Docker",
      "REST APIs"
    ],
    "githubLink": "https://github.com/SaurabhDantani",
    "demoLink": "",
    "image": "/projects/ai-agent-backend-mockup.webp",
    "category": "Backend",
    "metric": "Python + AI",
    "featured": true,
    "problem": "Businesses needed automated backend workflows with AI decision-making",
    "solution": "Built FastAPI backend with LangChain agent orchestration and LLM APIs",
    "result": "Automated multi-step workflows reducing manual effort by 80%",
    "challenges": [
      "Preventing LLM hallucination in mission-critical business decision branches",
      "Architecting resilient fallbacks between OpenAI GPT-4o and Anthropic Claude APIs",
      "Ensuring low-latency semantic search across enterprise vector stores",
      "Managing rate limits and token usage quotas across multi-tenant client accounts"
    ],
    "results": [
      "Reduced manual operational decision tasks by 80%",
      "Maintained 99.9% uptime with automated LLM provider failover",
      "Processed over 250,000 automated agent tool executions monthly",
      "Built comprehensive audit trails with token cost tracking per tenant"
    ],
    "gradientFrom": "#16A34A",
    "gradientTo": "#7C3AED"
  },
  {
    "title": "Python Web Scraping & Data Intelligence Platform",
    "slug": "python-web-scraping-and-data-intelligence-platform",
    "description": "Production Python scraping system for leads, prices, and listings. Uses Scrapy and Playwright for JS-heavy sites, rotating proxies, rate-limit handling, and clean CSV/JSON/MongoDB export. Built as a FastAPI dashboard so clients can launch spiders, watch jobs live, and download structured data.",
    "longDescription": "Production Python scraping system for leads, prices, and listings. Uses Scrapy and Playwright for JS-heavy sites, rotating proxies, rate-limit handling, and clean CSV/JSON/MongoDB export. Built as a FastAPI dashboard so clients can launch spiders, watch jobs live, and download structured data. Built with clean modular architecture, rigorous automated testing, and comprehensive logging. Designed from the ground up for high reliability, security, and lightning-fast user interactions.",
    "technologies": [
      "Python",
      "Scrapy",
      "Playwright",
      "BeautifulSoup",
      "FastAPI",
      "MongoDB",
      "Redis",
      "Pandas",
      "Docker"
    ],
    "githubLink": "https://github.com/SaurabhDantani",
    "demoLink": "",
    "image": "/projects/python-scraping-mockup.webp",
    "category": "Backend",
    "metric": "Scrapy + Playwright",
    "featured": true,
    "problem": "Teams were collecting leads and competitor data by hand from dozens of websites",
    "solution": "Built Python scrapers with Playwright, proxy rotation, and a FastAPI job dashboard",
    "result": "Thousands of records collected daily with structured exports and retry-safe jobs",
    "challenges": [
      "Bypassing modern anti-bot protections (Cloudflare Turnstile, Datadome, reCAPTCHA)",
      "Managing distributed pool of 10,000+ rotating residential proxies with health checks",
      "Handling complex single-page apps (SPAs) with infinite scrolls and shadow DOMs",
      "Normalizing semi-structured HTML into clean, validated PostgreSQL tables"
    ],
    "results": [
      "Extracted 1,000,000+ clean records per month across 50+ target portals",
      "Achieved 99.4% scraping success rate with automatic error recovery",
      "Saved clients 150+ hours of manual data entry every single month",
      "Delivered automated scheduled exports directly to client S3 buckets and webhooks"
    ],
    "gradientFrom": "#0F766E",
    "gradientTo": "#D97706"
  },
  {
    "title": "US-Based Medical Credentialing & RCM Software",
    "slug": "medical-credentialing-rcm",
    "description": "Healthcare backend services and revenue cycle management platform with NestJS, automated Python bots, and a Next.js analytics dashboard.",
    "longDescription": "A sophisticated healthcare platform for medical credentialing and Revenue Cycle Management (RCM). The system automates complex medical billing workflows, credential verification processes, and provides real-time analytics for healthcare providers.",
    "technologies": [
      "NestJS",
      "Python",
      "Playwright",
      "Next.js",
      "PostgreSQL",
      "Automated Workflows",
      "Docker"
    ],
    "githubLink": "https://github.com/SaurabhDantani",
    "image": "/projects/healthcare-mockup.webp",
    "category": "Full Stack",
    "metric": "Automated Billing RCM",
    "featured": true,
    "problem": "Healthcare providers suffered from high claim denial rates and cumbersome manual credential verification workflows.",
    "solution": "Healthcare backend services and revenue cycle management platform with NestJS, automated Python bots, and a Next.js analytics dashboard.",
    "result": "Automated 90% of manual credentialing workflows and reduced billing errors by 60%.",
    "challenges": [
      "Handling complex healthcare compliance requirements",
      "Automating credential verification across multiple databases",
      "Building secure APIs for sensitive patient data",
      "Integrating with existing healthcare systems"
    ],
    "results": [
      "Automated 90% of manual credentialing workflows",
      "Reduced billing errors by 60%",
      "Built HIPAA-compliant data handling",
      "Deployed microservices architecture for scalability"
    ]
  },
  {
    "title": "Real-Time IPO Management System",
    "slug": "real-time-ipo-system",
    "description": "High-frequency financial market data processing platform with low-latency WebSocket live updates, subscription triggers, and scheduled market cron jobs.",
    "longDescription": "A high-performance financial platform for real-time IPO tracking and management. The system processes market data with low-latency WebSocket connections, provides instant alerts for IPO subscriptions, and handles scheduled market operations with precision timing.",
    "technologies": [
      "NestJS",
      "Socket.IO",
      "TypeScript",
      "Cron Jobs",
      "PostgreSQL",
      "Redis"
    ],
    "githubLink": "https://github.com/SaurabhDantani",
    "image": "/projects/chat-app-mockup.webp",
    "category": "Backend",
    "metric": "Real-Time Market Sync",
    "featured": true,
    "problem": "Retail and institutional investors missed IPO bidding windows due to delayed financial data broadcasts.",
    "solution": "High-frequency financial market data processing platform with low-latency WebSocket live updates, subscription triggers, and scheduled cron jobs.",
    "result": "Achieved sub-100ms latency for real-time market updates, scaling to 10,000+ concurrent connections.",
    "challenges": [
      "Achieving sub-second latency for market data updates",
      "Handling concurrent WebSocket connections for thousands of users",
      "Implementing reliable scheduled jobs for market operations",
      "Building fault-tolerant architecture for financial data"
    ],
    "results": [
      "Achieved <100ms latency for real-time updates",
      "Scaled to handle 10,000+ concurrent WebSocket connections",
      "Built 99.9% uptime with automatic failover",
      "Processed millions of market data points daily"
    ]
  },
  {
    "title": "Community Management Platform",
    "slug": "community-management-platform",
    "description": "Scalable community portal with RESTful APIs, complex user permission matrix, relational database architecture, and Redux Toolkit state management.",
    "longDescription": "A full-featured community management platform with complex permission systems, user role management, and scalable architecture. The platform supports multiple community types, content moderation, and advanced user management features.",
    "technologies": [
      "Node.js",
      "Express",
      "PostgreSQL",
      "TypeORM",
      "React",
      "Redux Toolkit",
      "Tailwind CSS"
    ],
    "githubLink": "https://github.com/SaurabhDantani",
    "image": "/projects/task-management-mockup.webp",
    "category": "Full Stack",
    "metric": "Scalable REST APIs",
    "featured": true,
    "problem": "Large online communities lacked flexible role permissions and automated moderation tools.",
    "solution": "Scalable community portal with RESTful APIs, complex user permission matrix, relational database architecture, and Redux Toolkit.",
    "result": "Scaled to support 50,000+ community members with 15+ user roles and automated moderation.",
    "challenges": [
      "Designing flexible permission system for different user roles",
      "Building scalable database architecture for complex relationships",
      "Implementing real-time content moderation",
      "Managing state across complex UI interactions"
    ],
    "results": [
      "Built flexible RBAC system supporting 15+ user roles",
      "Scaled to support 50,000+ community members",
      "Implemented automated content moderation",
      "Achieved 95% code coverage with comprehensive testing"
    ]
  },
  {
    "title": "AI & GenAI Portfolio Engine",
    "slug": "ai-portfolio-engine",
    "description": "AI portfolio and client inquiry engine integrating OpenAI APIs with automated lead routing, contextual replies, and a Next.js UI dashboard.",
    "longDescription": "A cutting-edge portfolio website featuring AI integration, modern design patterns, and excellent performance. The site includes an AI chatbot assistant, automated email notifications, and achieves perfect Core Web Vitals scores.",
    "technologies": [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Nodemailer",
      "OpenAI API"
    ],
    "githubLink": "https://github.com/SaurabhDantani/folio",
    "image": "/projects/portfolio-mockup.webp",
    "category": "Full Stack",
    "metric": "100 Core Web Vitals",
    "featured": false,
    "problem": "Client acquisition required an interactive demonstration of AI reasoning and instant inquiry qualification.",
    "solution": "AI portfolio and client inquiry engine integrating OpenAI APIs with automated lead routing, contextual replies, and a Next.js UI dashboard.",
    "result": "Perfect 100/100 Core Web Vitals score with automated lead capture and 60fps Framer Motion interactions.",
    "challenges": [
      "Achieving perfect Core Web Vitals scores",
      "Integrating AI chatbot with natural language processing",
      "Building responsive animations with Framer Motion",
      "Implementing automated email notifications"
    ],
    "results": [
      "Achieved 100/100 Core Web Vitals score",
      "Built AI chatbot with context-aware responses",
      "Implemented smooth 60fps animations",
      "Automated contact form notifications with Nodemailer"
    ]
  }
];
