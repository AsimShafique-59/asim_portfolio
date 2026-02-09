export const skillCategoryMeta = {
  backend: { title: "Python Backend", icon: "bi bi-gear-fill" },
  ai: { title: "Generative AI & LLMs", icon: "bi bi-cpu-fill" },
  database: { title: "Data & Vector Databases", icon: "bi bi-database-fill" },
  devops: { title: "Cloud & MLOps", icon: "bi bi-cloud-fill" },
  frontend: { title: "Supporting Frontend", icon: "bi bi-window" },
  tools: { title: "Engineering Tooling", icon: "bi bi-tools" },
  soft: { title: "Architecture & Leadership", icon: "bi bi-diagram-3-fill" }
};

export const skillCategoryOrder = [
  "backend",
  "ai",
  "database",
  "devops",
  "frontend",
  "tools",
  "soft"
];

export const programmingLanguageNames = new Set([]);

export const portfolioData = {
  fullName: "Asim Shafique",
  brandName: "Asim's Portfolio",
  brandLogoSrc: "/images/site-logo.svg",
  brandLogoAlt: "Asim logo",
  role: "Python, DRF & Generative AI Engineer",
  heroSummary:
    "Python and AI engineer with 2+ years of experience building scalable backend systems, LLM-powered applications, and production-grade automations. Focused on Django/DRF, FastAPI, agentic RAG, and cloud deployment.",
  heroBadges: ["Python", "Django/DRF", "FastAPI", "Generative AI", "RAG Systems", "LLM Automation"],
  focusTagline: "Python • DRF • Generative AI • Automation",
  aboutParagraphs: [
    "I'm a Python and AI engineer with a strong background in backend development, LLM integration, and product-focused engineering. I specialize in scalable Python services, API design, and intelligent AI workflows.",
    "My journey in software engineering has taken me through multiple real-world domains. I enjoy solving complex problems, improving performance, and building reliable systems that create measurable business value.",
    "With expertise in Python, Django/DRF, FastAPI, LangChain, and cloud tooling, I'm always eager to take on new challenges and contribute to impactful products."
  ],
  services: [
    {
      title: "Python Backend Engineering",
      description:
        "Designing scalable APIs and backend systems with Python, Django/DRF, and FastAPI. Postgres/MongoDB data modeling, JWT auth, Dockerized deployments, and CI/CD-ready services.",
      icon: "bi bi-braces"
    },
    {
      title: "Generative AI & LLM Systems",
      description:
        "Building LLM-powered applications with LangChain, LangGraph, and OpenAI SDK. RAG pipelines with Chroma/Pinecone/Faiss, prompt evaluation, and production monitoring.",
      icon: "bi bi-cpu-fill"
    },
    {
      title: "AI Automation & Integrations",
      description:
        "Automating business workflows with Python and AI agents, integrating APIs, vector databases, and cloud services for reliable, repeatable operations.",
      icon: "bi bi-diagram-3-fill"
    },
    {
      title: "SaaS Product Engineering",
      description:
        "Building SaaS platforms with secure auth, multi-tenant-ready architecture, and scalable APIs using Django/DRF or FastAPI.",
      icon: "bi bi-layers"
    }
  ],
  faq: [
    {
      question: "What Python and AI services do you offer?",
      answer:
        "I deliver Python backend development, Django/DRF and FastAPI APIs, LLM app development, RAG systems, and AI automation for business workflows."
    },
    {
      question: "Do you build production-ready AI systems?",
      answer:
        "Yes. I focus on production reliability, monitoring, and security while deploying LLM pipelines, vector search, and AI agents."
    },
    {
      question: "Can you integrate AI with existing backend systems?",
      answer:
        "Absolutely. I integrate AI features into existing Python/Django stacks, REST APIs, and data pipelines without disrupting core systems."
    }
  ],
  stats: [
    { label: "Years Experience", target: 2 },
    { label: "Projects Completed", target: 12 },
    { label: "Technologies Mastered", target: 5 }
  ],
  contact: {
    email: "asimshafique59@gmail.com",
    phone: "+92 325 415 5556",
    linkedInUrl: "https://www.linkedin.com/in/muhammad-asim-shafique-0581411aa/",
    linkedInLabel: "linkedin.com/in/muhammad-asim-shafique-0581411aa",
    githubUrl: "https://github.com/AsimShafique-59",
    githubLabel: "github.com/AsimShafique-59",
    location: "Lahore, Pakistan"
  },
  experiences: [
    {
      id: 1,
      title: "Django Python Developer",
      company: "Hased Systems",
      location: "Lahore, Pakistan",
      startDate: "2026-02-01",
      endDate: null,
      isCurrent: true,
      description:
        "Building and maintaining backend services using Django and Django REST Framework, with a focus on scalable APIs and production reliability.",
      highlights: [
        "Developing backend modules and API endpoints for business workflows.",
        "Improving performance and maintainability of existing Django services.",
        "Collaborating with team members to deliver production-ready features."
      ],
      techStack: ["Python", "Django", "Django REST Framework", "PostgreSQL", "Git"]
    },
    {
      id: 2,
      title: "Junior AI Engineer",
      company: "Web Excels",
      location: "Lahore, Pakistan",
      startDate: "2025-11-01",
      endDate: "2026-01-31",
      isCurrent: false,
      description:
        "Developing AI-powered applications using Python, LangChain, OpenAI API, and vector databases for production workflows.",
      highlights: [
        "Building and optimizing LLM pipelines for chatbots and data extraction.",
        "Integrating AI models into backend systems with scalable architecture.",
        "Running prompt engineering and model evaluation for continuous quality gains."
      ],
      techStack: ["Python", "LangChain", "OpenAI API", "Vector Databases", "FastAPI"]
    },
    {
      id: 3,
      title: "Software Engineer (Backend and AI Systems)",
      company: "Artificizen",
      location: "Lahore, Pakistan",
      startDate: "2025-04-01",
      endDate: "2025-09-30",
      isCurrent: false,
      description:
        "Designed and delivered chatbot and backend solutions with Django and modern AI tooling.",
      highlights: [
        "Built AI chatbots with LangChain, LangGraph, CrewAI, and OpenAI SDK.",
        "Implemented JWT-based backend APIs with Django and DRF.",
        "Collaborated with cross-functional teams to ship client-focused solutions."
      ],
      techStack: ["Python", "Django", "DRF", "LangGraph", "CrewAI", "OpenAI SDK", "JWT"]
    },
    {
      id: 4,
      title: "Python Backend Developer",
      company: "AB IT and Technical Services Limited",
      location: "Remote (United Kingdom)",
      startDate: "2024-06-01",
      endDate: "2025-06-30",
      isCurrent: false,
      description:
        "Developed scalable backend services, APIs, and deployment pipelines for distributed production environments.",
      highlights: [
        "Implemented Django and DRF services with relational and NoSQL databases.",
        "Built microservices and automated testing with Pytest and Unittest.",
        "Containerized deployments with Docker, GitHub Actions, and CI/CD."
      ],
      techStack: ["Python", "Django", "DRF", "PostgreSQL", "MongoDB", "Docker", "CI/CD"]
    }
  ],
  skills: [
    { id: 7, name: "Python", category: "backend", level: "expert", order: 1 },
    { id: 8, name: "Django", category: "backend", level: "expert", order: 2 },
    { id: 9, name: "Django REST Framework", category: "backend", level: "expert", order: 3 },
    { id: 10, name: "FastAPI", category: "backend", level: "advanced", order: 4 },
    { id: 11, name: "LangChain", category: "ai", level: "expert", order: 5 },
    { id: 12, name: "LangGraph", category: "ai", level: "advanced", order: 6 },
    { id: 13, name: "CrewAI", category: "ai", level: "advanced", order: 7 },
    { id: 14, name: "OpenAI Agent SDK", category: "ai", level: "advanced", order: 8 },
    { id: 15, name: "RAG Systems", category: "ai", level: "advanced", order: 9 },
    { id: 17, name: "PostgreSQL", category: "database", level: "advanced", order: 10 },
    { id: 21, name: "MongoDB", category: "database", level: "advanced", order: 11 },
    { id: 16, name: "MySQL", category: "database", level: "advanced", order: 12 },
    { id: 18, name: "Chroma DB", category: "database", level: "advanced", order: 13 },
    { id: 19, name: "Pinecone DB", category: "database", level: "advanced", order: 14 },
    { id: 20, name: "Faiss DB", category: "database", level: "advanced", order: 15 },
    { id: 22, name: "Docker", category: "devops", level: "advanced", order: 16 },
    { id: 23, name: "AWS", category: "devops", level: "advanced", order: 17 },
    { id: 33, name: "Render", category: "devops", level: "advanced", order: 18 },
    { id: 34, name: "Vercel", category: "devops", level: "advanced", order: 19 },
    { id: 35, name: "Hostinger", category: "devops", level: "advanced", order: 20 },
    { id: 6, name: "Node.js", category: "backend", level: "advanced", order: 18 },
    { id: 24, name: "GitHub Actions", category: "tools", level: "advanced", order: 24 },
    { id: 29, name: "Postman", category: "tools", level: "advanced", order: 25 },
    { id: 26, name: "VS Code", category: "tools", level: "advanced", order: 26 },
    { id: 25, name: "PyCharm", category: "tools", level: "advanced", order: 27 },
    { id: 27, name: "Cursor", category: "tools", level: "advanced", order: 28 },
    { id: 28, name: "pgAdmin", category: "tools", level: "advanced", order: 29 },
    { id: 31, name: "DBeaver", category: "tools", level: "advanced", order: 30 },
    { id: 30, name: "XAMPP", category: "tools", level: "advanced", order: 31 },
    { id: 32, name: "System Design", category: "soft", level: "advanced", order: 32 },
    { id: 36, name: "Microservices Architecture", category: "soft", level: "advanced", order: 33 },
    { id: 37, name: "Clean Architecture", category: "soft", level: "advanced", order: 34 },
    { id: 38, name: "SOLID Principles", category: "soft", level: "advanced", order: 35 },
    { id: 39, name: "Domain-Driven Design (DDD)", category: "soft", level: "advanced", order: 36 },
    { id: 40, name: "Event-Driven Systems", category: "soft", level: "advanced", order: 37 },
    { id: 41, name: "Scalable API Design", category: "soft", level: "advanced", order: 38 }
  ],
  projects: [
    {
      id: 1,
      title: "Power Email AI",
      shortDescription:
        "Generative AI email automation system with smart replies, routing, and campaigns.",
      description:
        "Engineered a Python-powered AI email platform with workflow automation, JWT authentication, encrypted credential storage, and AWS SES email pipelines. Built a React interface for automation control and template management.",
      techStack: ["Python", "OpenAI", "AWS SES", "JWT", "Automation"],
      liveUrl: "https://excels-technology.com/files",
      githubUrl: "",
      startDate: "2025-01-01",
      endDate: "2025-12-01",
      isFeatured: true,
      order: 1
    },
    {
      id: 2,
      title: "Peer Learning Circle Web Application",
      shortDescription:
        "Python/Django collaboration platform for managing study groups.",
      description:
        "Built a Django web application to help students create and manage peer learning groups with improved admin controls and collaboration flows.",
      techStack: ["Python", "Django", "DRF", "REST APIs"],
      liveUrl: "",
      githubUrl: "",
      startDate: "2025-01-01",
      endDate: "2025-12-01",
      isFeatured: true,
      order: 2
    },
    {
      id: 3,
      title: "Sophia Bot - AI Healthcare Assistant",
      shortDescription:
        "Generative AI healthcare chatbot with context-aware responses and memory.",
      description:
        "Developed a healthcare assistant powered by OpenAI Agent SDK and Groq Llama-3 with RAG architecture. Designed for future EHR integration with measured answer accuracy around 92%.",
      techStack: ["OpenAI Agent SDK", "Groq Llama-3", "RAG", "Python"],
      liveUrl: "https://sophiamainbot-asim.streamlit.app/",
      githubUrl: "",
      startDate: "2025-01-01",
      endDate: "2025-12-01",
      isFeatured: true,
      order: 3
    },
    {
      id: 4,
      title: "Multi-Modal RAG with Contextual References",
      shortDescription:
        "Multi-modal RAG system for documents, images, and multimedia references.",
      description:
        "Designed a RAG pipeline that processes PDF, DOCX, CSV, and image sources using LangChain and ChromaDB. Added audio and video timestamp extraction for richer context retrieval.",
      techStack: ["LangChain", "ChromaDB", "Groq Llama-3", "Python", "RAG"],
      liveUrl: "",
      githubUrl: "",
      startDate: "2025-01-01",
      endDate: "2025-12-01",
      isFeatured: true,
      order: 4
    }
  ],
  education: [
    {
      id: 1,
      institution: "Qualifi (UK Accredited)",
      degree: "Qualifi Level 5 Diploma in Information Technology",
      fieldOfStudy: "Information Technology",
      location: "Lahore, Pakistan",
      startDate: "2025-01-01",
      endDate: "2025-12-31",
      grade: "IELTS Academic Overall Band Score: 6.0",
      description: "Languages: English, Urdu, German."
    }
  ]
};
