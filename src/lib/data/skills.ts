import {
  Database,
  Cloud,
  Code2,
  Cpu,
  Layers,
  Terminal,
  Search,
  Boxes,
  TreePine,
  Blocks,
  Grid3x3,
  LayoutTemplate,
  ShieldCheck,
  Puzzle,
  Radio,
  Waypoints,
  type LucideIcon,
} from "lucide-react";
import {
  SiPython,
  SiDjango,
  SiFastapi,
  SiNodedotjs,
  SiLangchain,
  SiLanggraph,
  SiCrewai,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiMeta,
  SiDocker,
  SiAlibabacloud,
  SiRender,
  SiRailway,
  SiVercel,
  SiHostinger,
  SiGithubactions,
  SiPostman,
  SiPycharm,
  SiCursor,
  SiDbeaver,
  SiXampp,
} from "react-icons/si";
import { TbBrandOpenai, TbBrandAws, TbBrandVscode } from "react-icons/tb";
import type { IconType } from "react-icons";

export type IconComponent = LucideIcon | IconType;

/** Official brand hex per simple-icons/tabler dataset. `null` = brand mark has no distinct color (render neutral/theme-colored). */
export type Skill = { name: string; level: number; description: string; icon: IconComponent; iconColor: string | null };

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
      { name: "Python", level: 98, description: "Core language for backend, automation, and AI services.", icon: SiPython, iconColor: "#3776AB" },
      { name: "Django", level: 92, description: "Full-stack framework for scalable web and API services.", icon: SiDjango, iconColor: null },
      {
        name: "Django REST Framework",
        level: 90,
        description: "REST API design and implementation.",
        icon: SiDjango,
        iconColor: null,
      },
      {
        name: "FastAPI",
        level: 94,
        description: "High-performance async APIs and OpenAPI-first development.",
        icon: SiFastapi,
        iconColor: "#009688",
      },
      { name: "Node.js", level: 80, description: "Supplementary backend tooling for integrations.", icon: SiNodedotjs, iconColor: "#5FA04E" },
    ],
  },
  {
    title: "Generative AI & LLMs",
    icon: Cpu,
    color: "from-purple-500 to-pink-500",
    skills: [
      {
        name: "LangChain",
        level: 92,
        description: "LLM orchestration, prompt workflows, RAG pipelines.",
        icon: SiLangchain,
        iconColor: "#7FC8FF",
      },
      { name: "LangGraph", level: 88, description: "AI graph orchestration and model chaining.", icon: SiLanggraph, iconColor: "#7FC8FF" },
      { name: "CrewAI", level: 85, description: "Agent-driven AI workflows and automation.", icon: SiCrewai, iconColor: "#FF5A50" },
      {
        name: "OpenAI Agent SDK",
        level: 90,
        description: "Production-ready conversational AI systems.",
        icon: TbBrandOpenai,
        iconColor: null,
      },
      { name: "RAG Systems", level: 93, description: "Retrieval augmented generation for structured references.", icon: Search, iconColor: null },
    ],
  },
  {
    title: "Data & Vector Databases",
    icon: Database,
    color: "from-cyan-500 to-blue-500",
    skills: [
      { name: "PostgreSQL", level: 94, description: "Relational data modeling and optimization.", icon: SiPostgresql, iconColor: "#4169E1" },
      { name: "MongoDB", level: 88, description: "NoSQL document storage and aggregation.", icon: SiMongodb, iconColor: "#47A248" },
      { name: "MySQL", level: 85, description: "RDBMS fundamentals and query tuning.", icon: SiMysql, iconColor: "#4479A1" },
      {
        name: "Chroma DB",
        level: 86,
        description: "Vector database for semantic search.",
        icon: Boxes,
        iconColor: null,
      },
      {
        name: "Pinecone DB",
        level: 84,
        description: "Managed vector search for AI retrieval.",
        icon: TreePine,
        iconColor: null,
      },
      { name: "Faiss DB", level: 82, description: "High-performance vector similarity search (Meta AI Research).", icon: SiMeta, iconColor: "#0467DF" },
    ],
  },
  {
    title: "Cloud & MLOps",
    icon: Cloud,
    color: "from-emerald-500 to-teal-500",
    skills: [
      { name: "Docker", level: 92, description: "Containerization and deployment workflows.", icon: SiDocker, iconColor: "#2496ED" },
      { name: "AWS", level: 88, description: "Cloud services and infrastructure automation.", icon: TbBrandAws, iconColor: "#FF9900" },
      {
        name: "Alibaba Cloud",
        level: 80,
        description: "Cloud infrastructure and PaaS services for scalable deployments.",
        icon: SiAlibabacloud,
        iconColor: "#FF6A00",
      },
      { name: "Render", level: 82, description: "Modern app deployment and hosting.", icon: SiRender, iconColor: null },
      {
        name: "Railway",
        level: 79,
        description: "Developer-friendly platform for rapid cloud deployments.",
        icon: SiRailway,
        iconColor: null,
      },
      { name: "Vercel", level: 80, description: "Frontend deployment and static hosting.", icon: SiVercel, iconColor: null },
      { name: "Hostinger", level: 78, description: "Affordable hosting and managed services.", icon: SiHostinger, iconColor: "#673DE6" },
    ],
  },
  {
    title: "Engineering Tooling",
    icon: Terminal,
    color: "from-orange-500 to-amber-500",
    skills: [
      { name: "GitHub Actions", level: 91, description: "CI/CD pipelines and automation.", icon: SiGithubactions, iconColor: "#2088FF" },
      { name: "Postman", level: 89, description: "API testing and documentation.", icon: SiPostman, iconColor: "#FF6C37" },
      { name: "VS Code", level: 95, description: "Primary development environment.", icon: TbBrandVscode, iconColor: "#007ACC" },
      { name: "PyCharm", level: 86, description: "IDE support for Python engineering.", icon: SiPycharm, iconColor: null },
      { name: "Cursor", level: 80, description: "AI-assisted coding workflows.", icon: SiCursor, iconColor: null },
      {
        name: "pgAdmin",
        level: 82,
        description: "Postgres database administration.",
        icon: SiPostgresql,
        iconColor: "#4169E1",
      },
      { name: "DBeaver", level: 81, description: "Cross-database management and querying.", icon: SiDbeaver, iconColor: null },
      { name: "XAMPP", level: 75, description: "Local development server management.", icon: SiXampp, iconColor: "#FB7A24" },
    ],
  },
  {
    title: "Architecture & Leadership",
    icon: Layers,
    color: "from-fuchsia-500 to-violet-500",
    skills: [
      { name: "System Design", level: 90, description: "End-to-end design for stable systems.", icon: Blocks, iconColor: null },
      { name: "Microservices Architecture", level: 88, description: "Distributed service design.", icon: Grid3x3, iconColor: null },
      { name: "Clean Architecture", level: 87, description: "Maintainable and modular codebases.", icon: LayoutTemplate, iconColor: null },
      { name: "SOLID Principles", level: 89, description: "Strong object-oriented design.", icon: ShieldCheck, iconColor: null },
      { name: "Domain-Driven Design (DDD)", level: 85, description: "Business-focused architecture.", icon: Puzzle, iconColor: null },
      { name: "Event-Driven Systems", level: 86, description: "Async events and messaging patterns.", icon: Radio, iconColor: null },
      { name: "Scalable API Design", level: 91, description: "Robust APIs for production workloads.", icon: Waypoints, iconColor: null },
    ],
  },
];

export const topSkills = skillCategories.map((category) => category.skills[0]);

export const allSkills = skillCategories.flatMap((category) =>
  category.skills.map((skill) => ({ ...skill, categoryColor: category.color }))
);
