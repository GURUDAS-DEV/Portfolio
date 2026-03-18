export interface Project {
  id: number;
  title: string;
  year: string;
  role: string;
  description: string;
  tech: string[];
  num: string;       // e.g. "01"
  accent: string;    // HEX accent color — matches portfolio palette
  link?: string;
  github?: string;
  demo?: string;  
}

export const projects: Project[] = [
  {
    id: 1,
    num: "01",
    title: "Nova Bot Studio",
    year: "2026",
    role: "AI Saas Platform",
    description:
      "A SaaS platform for building and deploying AI Powered Chatbots, on platforms like WhatsApp, Instagram, Telegram, discord and for your own Website. Built with Next.js, Node.js, and Tailwind CSS.",
    tech: ["Next.js", "Node.js", "Typescript", "Redis", "PostgreSQL", "MongoDB", "BullMQ", "Rate Limiting", "OAuth", "Playwright"],
    accent: "#ffd93d",
    github : "https://github.com/GURUDAS-DEV/NOVA-BOT-STUDIO",
    demo  : "https://www.linkedin.com/feed/update/urn:li:activity:7407381186077126656/",
  },
  {
    id: 2,
    num: "02",
    title: "Breath Clean",
    year: "2026",
    role: "Health Tech Prototype",
    description:
      "Build during a Hackathon, Breath Clean is a platfrom where user can see the health score of your normal route and can find a better route with better air quality, Traffic, Weather and many more parameter. Can save your route, for future updates and we will notify you when your route is cleanest.",
    tech: ["Next.js", "Node.js", "Typescript", "Pathway AI", "Redis", "MongoDB", "Mapbox API", "Cron Job", "Rate Limiting"],
    accent: "#a8e6cf",
    github : "https://github.com/GURUDAS-DEV/BreathClean",
    link : "https://breathe.daemondoc.online/",
    
  },
  {
    id: 3,
    num: "03",
    title: "Invoice IQ",
    year: "2024",
    role: "Smart Invoice Management System",
    description:
      "Invoice IQ is an AI-powered purchase intelligence platform that helps users track and analyze their purchases from suppliers. Users can add deliveries through manual entry, invoice photos (OCR), or natural language prompts, and the system automatically organizes the data, tracks spending, and detects price changes over time.",
    tech: ["Next.js", "Node.js", "Typescript", "MongoDB", "Redis", "OCR APIs", "AI APIs", "Rate Limiting"],
    accent: "#66dff4",
    github : "https://github.com/GURUDAS-DEV/Invoice-IQ",
    link : "https://invoiceiq-two.vercel.app/",
  },
  {
    id: 4,
    num: "04",
    title: "Quizify",
    year: "2025",
    role: "AI Powered Quiz Generator",
    description:
      "Build a AI Powered Platform where user can create their custom or AI Powered Quiz by just a prompt, and can host and get response live. Can also join AI Powered Quiz and can gain knowdlege with fun. Built with Next.js, Node.js and AI APIs.",
    tech: ["React.js", "Node.js", "Redis", "Socket.IO", "MongoDB", "AI APIs", ],
    accent: "#ff6b9d",
    link : "https://quizifyai.me",
    github : "https://github.com/GURUDAS-DEV/AI-Based-Quiz-Builder-Quizfy-",
    demo : "https://www.linkedin.com/feed/update/urn:li:activity:7398266714838310912/"
  },
];
