import { Database, Cloud, Zap, Shield, Sparkles, Globe, type LucideIcon } from "lucide-react";
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

export const projectCategories = ["All", "Python", "Django", "FastAPI", "AI", "RAG", "SEO", "Web"];

const rawProjects: Omit<Project, "slug">[] = [
  {
    title: "AB IT and Technical Services — Company Website & Digital Presence",
    category: "Web",
    description:
      "Designed and built the corporate website for AB IT and Technical Services, a UK-registered IT infrastructure and cybersecurity company serving enterprise clients across the UK and Europe.",
    details: [
      "As the developer behind this site, I handled the design, development, and deployment end-to-end myself, including custom domain configuration (abitandtechnicalservices.com) via Cloudflare DNS, Netlify hosting, and SSL setup, all without outside contractors.",
      "Built a multi-page marketing site covering Data Centre Support, Network & Cabling, Cybersecurity/SIEM, Cloud & Data Engineering, Field Engineering, and Managed IT Services, giving each service line its own clear breakdown for enterprise procurement teams evaluating the company.",
      "Structured the site to be responsive and SEO-optimized from the start, with client testimonials and concrete operational metrics (SLA performance, engineer network size, ticket response times) used as trust signals rather than generic marketing copy.",
      "Built client-facing pages around the trust signals enterprise buyers actually check before procurement: GDPR compliance, SC-cleared engineers, and EMEA/APAC coverage.",
      "Owning the full stack, from DNS and hosting to SSL and domain management, meant every technical decision on this project mapped directly to a business outcome rather than being handed off to a separate ops team.",
    ],
    tech: ["Netlify", "Cloudflare DNS", "SSL/TLS", "SEO"],
    icon: Globe,
    color: "from-slate-500 to-blue-500",
    metrics: { year: "2024", scope: "Corporate Website", type: "Web/SEO" },
    githubLink: "https://github.com/AsimShafique-59",
    demoLink: "https://abitandtechnicalservices.com",
  },
  {
    title: "Reachgin -- Multi-Industry POS",
    category: "Django",
    description:
      "Architected a scalable backend system (35+ apps, 150+ models) for multi-industry POS with centralized admin management.",
    details: [
      "Reachgin needed a single POS backend that could serve multiple industries (retail, services, hospitality) from one codebase without each vertical stepping on another's data or business rules, so the system was split into 35+ Django apps with clear domain boundaries and 150+ models covering everything from inventory to loyalty.",
      "Implemented RESTful APIs with JWT authentication (SimpleJWT), token rotation, blacklisting, and RBAC so that staff, managers, and admins across every tenant industry get exactly the access level their role requires, nothing more.",
      "Designed service-layer architecture with separation of concerns, UUID primary keys, soft deletes, and standardized database models, chosen specifically so records could be safely restored after accidental deletion and so IDs never leaked sequential business volume to the outside world.",
      "Developed transaction management including appointment scheduling, billing, invoice generation, and promotion/discount engines, the core revenue-facing logic that every industry vertical on the platform depends on.",
      "Integrated Celery and Redis for background/async workloads (notifications, report generation, scheduled jobs), AWS S3 for media and document storage, Firebase FCM for real-time push notifications to staff devices, and drf-spectacular for auto-generated OpenAPI/Swagger documentation so frontend and mobile teams could integrate without guessing at the API contract.",
      "Reachgin is the largest Django backend I've built to date, and it's the project that shaped how I think about service-layer separation, RBAC, and async task design on every Django project since.",
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
    description:
      "Architected and implemented a schema-based multi-tenant SaaS backend using Django and django-tenant, built to onboard new business customers onto shared infrastructure without compromising data isolation.",
    details: [
      "LinkPOS is a SaaS POS platform sold to multiple independent businesses, so the core requirement was strict data isolation between tenants without the operational overhead of running a separate database per customer. django-tenant's schema-based multi-tenancy was chosen over row-level tenancy (a shared table with a tenant_id column) specifically to get that isolation guarantee at the PostgreSQL schema level while still running everything on a single cluster.",
      "Enabled secure tenant isolation and horizontal scalability within a single PostgreSQL cluster, so onboarding a new business customer means provisioning a new schema rather than standing up new infrastructure.",
      "Developed tenant-aware RESTful APIs with JWT authentication, RBAC, and permission-based POS workflows, ensuring every request resolves to the correct tenant schema automatically and can never leak data across tenant boundaries.",
      "Designed optimized PostgreSQL schemas, managed migrations across all tenant schemas simultaneously, and tuned query performance for high throughput as the number of tenants and transaction volume grew.",
      "Multi-tenancy trade-offs like this one, schema isolation versus shared-table row isolation, come up constantly in SaaS backend work, and LinkPOS is where I worked through that decision with a real production system rather than a hypothetical.",
      "The same django-tenant patterns (per-schema migrations, tenant-aware middleware, and permission scoping) carry over directly to any Django SaaS product that needs to serve multiple customers from shared infrastructure.",
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
      "Developed an automated SEO analysis platform for website performance, technical SEO metrics, and content optimization, built to replace manual, spreadsheet-driven SEO audits with a repeatable data pipeline.",
    details: [
      "Manual SEO audits don't scale past a handful of sites, so this platform automates the repetitive parts, crawling, metric extraction, and reporting, so the analysis effort stays roughly constant whether it's auditing one site or dozens.",
      "Processed large-scale SEO datasets using NumPy and Pandas for keyword analysis and traffic insights, turning raw crawl and search-performance data into rankable, comparable metrics across pages and time periods.",
      "Integrated Google Analytics data pipelines to track user behavior and conversion metrics, connecting technical SEO findings back to actual visitor behavior rather than treating crawl data in isolation.",
      "Leveraged Advertools for technical SEO auditing, URL analysis, sitemap parsing, and search performance evaluation, covering the same crawlability/indexability fundamentals (robots.txt, sitemaps, canonicalization, status codes) that any production SEO audit needs to check at scale.",
      "Building this platform is also what pushed me to apply the same technical-SEO discipline, clean metadata, structured data, sitemaps, canonical URLs, to my own projects, including this portfolio.",
      "The keyword and traffic-insight pipeline runs on the same Pandas/NumPy data-processing skills I use across my Python backend work, applied here to search performance data instead of application data.",
      "It sits at the intersection of two things I care about as a Python developer: writing backend code that holds up in production, and making sure the sites built with that code can actually be found on Google.",
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
      "Integrated PayMob payments, OAuth2 (Google/Authlib), Firebase notifications, asyncio, uvloop, background workers, SQLAdmin, Sentry, and Alembic.",
    ],
    tech: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Redis", "AWS S3", "PayMob"],
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
