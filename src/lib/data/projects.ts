import { Database, Cloud, Zap, Shield, Sparkles, type LucideIcon } from "lucide-react";
import { slugify } from "@/lib/slugify";

export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  details: string[];
  tech: string[];
  icon: LucideIcon;
  color: string;
  metrics: { year: string; scope: string; type: string };
  githubLink: string;
  demoLink: string;
};

export const projectCategories = ["All", "Python", "Django", "FastAPI", "AI", "RAG", "SEO"];

const rawProjects: Omit<Project, "slug">[] = [
  {
    title: "Reachgin -- Multi-Industry POS",
    category: "Django",
    description:
      "Architected a scalable backend system (35+ apps, 150+ models) for multi-industry POS with centralized admin management.",
    details: [
      "Implemented RESTful APIs with JWT authentication (SimpleJWT), token rotation, blacklisting, and RBAC.",
      "Designed service-layer architecture with separation of concerns, UUID primary keys, soft deletes, and standardized database models.",
      "Developed transaction management including appointment scheduling, billing, invoice generation, and promotion/discount engines.",
      "Integrated Celery, Redis, AWS S3, Firebase FCM push notifications, and drf-spectacular/OpenAPI Swagger documentation.",
    ],
    tech: ["Python", "Django", "DRF", "PostgreSQL", "Celery", "Redis", "AWS S3"],
    icon: Database,
    color: "from-indigo-500 to-purple-500",
    metrics: { year: "2026", scope: "POS", type: "Django" },
    githubLink: "https://github.com/AsimShafique-59",
    demoLink: "https://asimshafique.netlify.app",
  },
  {
    title: "LinkPOS – Multi-Tenant SaaS POS Platform",
    category: "Django",
    description: "Architected and implemented a schema-based multi-tenant SaaS backend using Django and django-tenant.",
    details: [
      "Enabled secure tenant isolation and horizontal scalability within a single PostgreSQL cluster.",
      "Developed tenant-aware RESTful APIs with JWT authentication, RBAC, and permission-based POS workflows.",
      "Designed optimized PostgreSQL schemas, managed migrations, and tuned query performance for high throughput.",
    ],
    tech: ["Python", "Django", "DRF", "django-tenant", "PostgreSQL"],
    icon: Database,
    color: "from-indigo-500 to-blue-500",
    metrics: { year: "2025", scope: "Multi-Tenant SaaS", type: "Django" },
    githubLink: "https://github.com/AsimShafique-59",
    demoLink: "https://asimshafique.netlify.app",
  },
  {
    title: "SEO AI – Automated Website SEO Analytics Platform",
    category: "SEO",
    description:
      "Developed an automated SEO analysis platform for website performance, technical SEO metrics, and content optimization.",
    details: [
      "Processed large-scale SEO datasets using NumPy and Pandas for keyword analysis and traffic insights.",
      "Integrated Google Analytics data pipelines to track user behavior and conversion metrics.",
      "Leveraged Advertools for technical SEO auditing, URL analysis, sitemap parsing, and search performance evaluation.",
    ],
    tech: ["Python", "Pandas", "NumPy", "Google Analytics", "Advertools"],
    icon: Cloud,
    color: "from-amber-500 to-orange-500",
    metrics: { year: "2025", scope: "SEO Analytics", type: "Data Platform" },
    githubLink: "https://github.com/AsimShafique-59",
    demoLink: "https://asimshafique.netlify.app",
  },
  {
    title: "Venuze -- Venue Booking Platform",
    category: "FastAPI",
    description: "Built scalable REST APIs using FastAPI with PostgreSQL, SQLAlchemy, Redis, and AWS S3.",
    details: [
      "Implemented JWT authentication, Redis token blacklisting, and RBAC for secure access.",
      "Built venue booking, availability calendars, geo-search, dynamic pricing, invoices, coupons, disputes, and real-time chat.",
      "Integrated Stripe payments, OAuth2 (Google/Authlib), Firebase notifications, asyncio, uvloop, background workers, SQLAdmin, Sentry, and Alembic.",
    ],
    tech: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Redis", "AWS S3", "Stripe"],
    icon: Cloud,
    color: "from-emerald-500 to-teal-500",
    metrics: { year: "2026", scope: "Venue Booking", type: "FastAPI" },
    githubLink: "https://github.com/AsimShafique-59",
    demoLink: "https://venuze.com/",
  },
  {
    title: "Power Email AI",
    category: "AI",
    description:
      "Engineered a full-stack AI email automation system with intelligent reply generation, routing, campaigns, and rule-based workflows.",
    details: [
      "Developed backend modular services with JWT auth, encrypted credential storage, and AWS SES email pipelines.",
      "Built a React frontend for automations, templates, and AI agents with 95%+ response accuracy.",
    ],
    tech: ["Python", "React", "OpenAI", "AWS SES", "JWT"],
    icon: Zap,
    color: "from-purple-500 to-pink-500",
    metrics: { year: "2025", scope: "Email AI", type: "Automation" },
    githubLink: "https://github.com/AsimShafique-59",
    demoLink: "https://ai-powered-email-245242481871.us-central1.run.app/inbox",
  },
  {
    title: "Peer Learning Circle Web Application",
    category: "Django",
    description: "Built a scalable web platform enabling students to create and manage study groups with custom Django admin controls.",
    details: ["Enabled study group creation, collaboration, and administrative oversight for student communities."],
    tech: ["Python", "Django", "DRF", "REST APIs"],
    icon: Database,
    color: "from-blue-500 to-cyan-500",
    metrics: { year: "2025", scope: "Education", type: "Django" },
    githubLink: "https://github.com/AsimShafique-59/peer_learning_platform",
    demoLink: "https://asimshafique.netlify.app",
  },
  {
    title: "Sophia Bot – AI Healthcare Assistant",
    category: "AI",
    description: "Developed a healthcare chatbot with context-aware responses, conversation history, and EHR integration readiness.",
    details: ["Delivered 92% answer accuracy with Groq Llama-3 and RAG-powered knowledge retrieval."],
    tech: ["OpenAI Agent SDK", "Groq Llama-3", "RAG", "Python"],
    icon: Sparkles,
    color: "from-cyan-500 to-blue-500",
    metrics: { year: "2025", scope: "Healthcare", type: "AI Chatbot" },
    githubLink: "https://github.com/AsimShafique-59",
    demoLink: "https://sophiamainbot-asim.streamlit.app/",
  },
  {
    title: "Email Classification & Auto-Reply Agent",
    category: "AI",
    description: "Engineered an IMAP/SMTP agent to classify property-related emails, generate replies, and forward with e-signature DOCX/PDF.",
    details: ["Achieved 90% classification accuracy for automated email categorization and reply generation."],
    tech: ["Python", "Groq Llama-3", "BeautifulSoup", "IMAP", "SMTP"],
    icon: Zap,
    color: "from-pink-500 to-red-500",
    metrics: { year: "2025", scope: "Email Automation", type: "AI Agent" },
    githubLink: "https://github.com/AsimShafique-59",
    demoLink: "https://asimshafique.netlify.app",
  },
  {
    title: "Multi-Modal RAG System with Contextual References",
    category: "RAG",
    description: "Designed a multi-modal RAG pipeline for PDFs, DOCX, CSV, and images with audio/video timestamp extraction.",
    details: ["Achieved 90% retrieval accuracy and 60% precision for timestamp extraction across multimedia sources."],
    tech: ["Python", "LangChain", "ChromaDB", "Groq Llama-3"],
    icon: Shield,
    color: "from-indigo-500 to-purple-500",
    metrics: { year: "2025", scope: "Multi-Modal", type: "RAG" },
    githubLink: "https://github.com/AsimShafique-59",
    demoLink: "https://asimshafique.netlify.app",
  },
];

export const projects: Project[] = rawProjects.map((project) => ({
  ...project,
  slug: slugify(project.title),
}));

export const featuredProjects = projects.slice(0, 3);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
