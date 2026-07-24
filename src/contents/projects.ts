import { Project } from "@/types";


export const projects: Project[] = [
    {
        title: 'E-commerce Platform',
        description: 'Built a full-stack e-commerce platform with product catalog, cart management, and Stripe payment integration. Features server-side rendering for SEO, dynamic filtering, and a responsive checkout flow.',
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
        githubLink: 'https://github.com/SaurabhDantani/ecommerce-with-payment-gateway',
        // demoLink: 'https://demo.com',
        image: '/projects/e-commerce-website.png',
      },
      {
        title: 'Portfolio Website',
        description: 'Designed and developed a modern developer portfolio with dark mode, Framer Motion animations, floating navigation, and a contact form with email integration via Nodemailer.',
        technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
        githubLink: 'https://github.com/SaurabhDantani/folio',
        // demoLink: 'https://demo.com',
        image: 'https://github.com/SaurabhDantani/folio/blob/main/site.png?raw=true',
      }, 

      {
        title: 'Chat Application',
        description: 'Developed a real-time chat application with instant messaging, typing indicators, and online status tracking. Uses WebSocket connections for low-latency bidirectional communication.',
        technologies: ['React', 'Node.js', 'Socket.io'],
        githubLink: 'https://github.com/SaurabhDantani/lumina-chatapp',
        // demoLink: 'https://demo.com',
        image: '/projects/chat-app.png',
      },
      {
        title: 'Card Management UI',
        description: 'Created an interactive bank card management interface with smooth animations, card details view, and responsive design. Features drag-to-reorder and transaction history views.',
        technologies: ['React', 'CSS3', 'JavaScript'],
        githubLink: 'https://github.com/SaurabhDantani',
        // demoLink: 'https://demo.com',
        image: 'https://github.com/SaurabhDantani/card-manager-react/blob/main/Screenshot%20(7).png?raw=true',
      },
  ];