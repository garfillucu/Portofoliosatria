import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce platform with real-time inventory, secure payments, and admin dashboard.",
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Stripe"],
    imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    liveUrl: "https://ecommerce-platform-demo.netlify.app",
    role: "Full Stack Developer",
    duration: "3 months",
    features: [
      "User authentication and authorization",
      "Product catalog with search and filtering",
      "Shopping cart and wishlist management",
      "Secure payment processing with Stripe",
      "Real-time inventory tracking",
      "Admin dashboard for product and order management",
      "Order tracking and history",
      "Responsive design for mobile and desktop"
    ],
    responsibilities: [
      "Developed the frontend using React and Tailwind CSS",
      "Implemented secure payment processing with Stripe",
      "Built RESTful APIs using Node.js and Express",
      "Designed and implemented the database schema",
      "Set up real-time inventory tracking with Redis",
      "Implemented user authentication and authorization",
      "Created admin dashboard for product management"
    ],
    challenges: [
      "Implementing real-time inventory tracking across multiple servers",
      "Ensuring secure payment processing and data handling",
      "Optimizing performance for large product catalogs",
      "Managing complex state across multiple components"
    ],
    achievements: [
      "Reduced page load time by 40% through optimization",
      "Implemented successful payment processing system",
      "Created scalable and maintainable codebase",
      "Achieved 95% test coverage"
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