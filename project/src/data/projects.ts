import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Local Food Market E-Commerce",
    description: "Full-stack e-commerce platform with real-time inventory, secure payments, and admin dashboard.",
    technologies: ["React", "Next.js", "PostgreSQL", "Typescript", "Tailwind Css"],
    imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    liveUrl: "https://ecommerce-platform-demo.netlify.app",
    role: "Full Stack Developer",
    duration: "1 months",
    features: [
      "Sistem Autentikasi & Otorisasi",
      "Login/Register dengan OTP",
      "Form handling yang aman dengan validasi",
      "UI/UX Modern",
      "Dark/Light mode",
      "Komponen yang accessible",
      "Responsive design",
      "Interactive elements",
      "Carousel/Slider untuk product showcase",
      "Charts & Grafik untuk analytics",
      "Form & Input Management"
    ],
    responsibilities: [
      "Implementasi clean code dengan TypeScript",
      "Setup project structure yang scalable",
      "State management dengan Zustand",
      "Routing dengan Next.js",
      "Image optimization",
      "Code splitting",
      "SEO optimization",
      "Lazy loading",
      "Responsive design implementation",
      "Accessibility standards",
      "Cross-browser compatibility",
      "Component reusability"
    ],
    challenges: [
      "Integrasi multiple third-party libraries",
      "Type safety dengan TypeScript",
      "State management yang kompleks",
      "Performance optimization",
      "Maintaining code quality",
      "Ensuring responsive design",
      "Browser compatibility",
      "Accessibility compliance"
    ],
    achievements: [
      "Modern tech stack implementation",
      "Type-safe development environment",
      "Scalable architecture",
      "Accessible UI components",
      "Clean code architecture",
      "Reusable component library",
      "Optimized performance",
      "SEO-friendly implementation"
    ]
  },
  {
    id: 2,
    title: "Task Management System",
    description: "Collaborative task management system with real-time updates and team features.",
    technologies: ["React", "TypeScript", "Express", "MongoDB", "Socket.IO"],
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    githubUrl: "https://github.com/yourusername/task-management",
    liveUrl: "https://task-management-demo.netlify.app",
    role: "Frontend Developer",
    duration: "2 months",
    features: [
      "Real-time task updates",
      "Team collaboration tools",
      "Task assignment and tracking",
      "Project timeline visualization",
      "File attachment support",
      "Comment and discussion system",
      "Email notifications",
      "Performance analytics dashboard"
    ],
    responsibilities: [
      "Led frontend development using React and TypeScript",
      "Implemented real-time updates using Socket.IO",
      "Created responsive and intuitive user interface",
      "Developed reusable component library",
      "Integrated with backend APIs",
      "Implemented state management using Redux"
    ],
    challenges: [
      "Managing complex state with real-time updates",
      "Ensuring smooth performance with large datasets",
      "Implementing efficient data synchronization",
      "Creating intuitive user interface for complex features"
    ],
    achievements: [
      "Successfully delivered project ahead of schedule",
      "Received positive feedback from beta users",
      "Created comprehensive documentation",
      "Implemented efficient state management system"
    ]
  }
];