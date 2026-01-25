import { Project } from "@/types";


export const projects: Project[] = [
    {
        title: 'E-commerce Platform',
        description: 'A full-stack e-commerce platform built with Next.js, TypeScript, and Tailwind CSS.',
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
        githubLink: 'https://github.com/SaurabhDantani/ecommerce-with-payment-gateway',
        // demoLink: 'https://demo.com',
        image: '/projects/e-commerce-website.png',
      },
      {
        title: 'Portfolio Website',
        description: 'My personal portfolio website showcasing my projects and skills.',
        technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
        githubLink: 'https://github.com/SaurabhDantani/folio',
        // demoLink: 'https://demo.com',
        image: 'https://github.com/SaurabhDantani/folio/blob/main/site.png?raw=true',
      }, 

      {
        title: 'Chat Application',
        description: 'A real-time chat application using WebSocket technology.',
        technologies: ['React', 'Node.js', 'Socket.io'],
        githubLink: 'https://github.com/SaurabhDantani/lumina-chatapp',
        // demoLink: 'https://demo.com',
        image: '/projects/chat-app.png',
      },
      {
        title: 'Card Management UI',
        description: 'A Bank card management UI.',
        technologies: ['React', 'Edamam API'],
        githubLink: 'https://github.com/SaurabhDantani',
        // demoLink: 'https://demo.com',
        image: 'https://github.com/SaurabhDantani/card-manager-react/blob/main/Screenshot%20(7).png?raw=true',
      },
  ];