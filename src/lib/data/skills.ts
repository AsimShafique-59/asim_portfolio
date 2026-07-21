import { Database, Cloud, Code2, Cpu, Layers, Terminal, type LucideIcon } from "lucide-react";

export type Skill = { name: string; level: number; description: string };

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  color: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Python Backend",
    icon: Code2,
    color: "from-indigo-500 to-blue-500",
    skills: [
      { name: "Python", level: 98, description: "Core language for backend, automation, and AI services." },
      { name: "Django", level: 92, description: "Full-stack framework for scalable web and API services." },
      { name: "Django REST Framework", level: 90, description: "REST API design and implementation." },
      { name: "FastAPI", level: 94, description: "High-performance async APIs and OpenAPI-first development." },
      { name: "Node.js", level: 80, description: "Supplementary backend tooling for integrations." },
    ],
  },
  {
    title: "Generative AI & LLMs",
    icon: Cpu,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "LangChain", level: 92, description: "LLM orchestration, prompt workflows, RAG pipelines." },
      { name: "LangGraph", level: 88, description: "AI graph orchestration and model chaining." },
      { name: "CrewAI", level: 85, description: "Agent-driven AI workflows and automation." },
      { name: "OpenAI Agent SDK", level: 90, description: "Production-ready conversational AI systems." },
      { name: "RAG Systems", level: 93, description: "Retrieval augmented generation for structured references." },
    ],
  },
  {
    title: "Data & Vector Databases",
    icon: Database,
    color: "from-cyan-500 to-blue-500",
    skills: [
      { name: "PostgreSQL", level: 94, description: "Relational data modeling and optimization." },
      { name: "MongoDB", level: 88, description: "NoSQL document storage and aggregation." },
      { name: "MySQL", level: 85, description: "RDBMS fundamentals and query tuning." },
      { name: "Chroma DB", level: 86, description: "Vector database for semantic search." },
      { name: "Pinecone DB", level: 84, description: "Managed vector search for AI retrieval." },
      { name: "Faiss DB", level: 82, description: "High-performance vector similarity search." },
    ],
  },
  {
    title: "Cloud & MLOps",
    icon: Cloud,
    color: "from-emerald-500 to-teal-500",
    skills: [
      { name: "Docker", level: 92, description: "Containerization and deployment workflows." },
      { name: "AWS", level: 88, description: "Cloud services and infrastructure automation." },
      { name: "Alibaba Cloud", level: 80, description: "Cloud infrastructure and PaaS services for scalable deployments." },
      { name: "Render", level: 82, description: "Modern app deployment and hosting." },
      { name: "Railway", level: 79, description: "Developer-friendly platform for rapid cloud deployments." },
      { name: "Vercel", level: 80, description: "Frontend deployment and static hosting." },
      { name: "Hostinger", level: 78, description: "Affordable hosting and managed services." },
    ],
  },
  {
    title: "Engineering Tooling",
    icon: Terminal,
    color: "from-orange-500 to-amber-500",
    skills: [
      { name: "GitHub Actions", level: 91, description: "CI/CD pipelines and automation." },
      { name: "Postman", level: 89, description: "API testing and documentation." },
      { name: "VS Code", level: 95, description: "Primary development environment." },
      { name: "PyCharm", level: 86, description: "IDE support for Python engineering." },
      { name: "Cursor", level: 80, description: "AI-assisted coding workflows." },
      { name: "pgAdmin", level: 82, description: "Postgres database administration." },
      { name: "DBeaver", level: 81, description: "Cross-database management and querying." },
      { name: "XAMPP", level: 75, description: "Local development server management." },
    ],
  },
  {
    title: "Architecture & Leadership",
    icon: Layers,
    color: "from-fuchsia-500 to-violet-500",
    skills: [
      { name: "System Design", level: 90, description: "End-to-end design for stable systems." },
      { name: "Microservices Architecture", level: 88, description: "Distributed service design." },
      { name: "Clean Architecture", level: 87, description: "Maintainable and modular codebases." },
      { name: "SOLID Principles", level: 89, description: "Strong object-oriented design." },
      { name: "Domain-Driven Design (DDD)", level: 85, description: "Business-focused architecture." },
      { name: "Event-Driven Systems", level: 86, description: "Async events and messaging patterns." },
      { name: "Scalable API Design", level: 91, description: "Robust APIs for production workloads." },
    ],
  },
];

export const topSkills = skillCategories.map((category) => category.skills[0]);
