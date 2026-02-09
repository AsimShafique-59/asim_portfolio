export const skillCategoryMeta = {
  frontend: { title: "Frontend Technologies", icon: "bi bi-window" },
  backend: { title: "Backend Technologies", icon: "bi bi-gear-fill" },
  ai: { title: "AI and LLM Engineering", icon: "bi bi-cpu-fill" },
  database: { title: "Databases", icon: "bi bi-database-fill" },
  devops: { title: "Cloud and DevOps", icon: "bi bi-cloud-fill" },
  tools: { title: "Development Tools", icon: "bi bi-tools" },
  soft: { title: "Architecture and Soft Skills", icon: "bi bi-diagram-3-fill" }
};

export const skillCategoryOrder = [
  "frontend",
  "backend",
  "ai",
  "database",
  "devops",
  "tools",
  "soft"
];

export const programmingLanguageNames = new Set([
  "python",
  "javascript",
  "typescript",
  "sql",
  "java",
  "c++",
  "php"
]);

export const portfolioData = {
  fullName: "Asim Shafique",
  brandName: "Asim's Portfolio",
  role: "Software Engineer",
  heroSummary:
    "Passionate software engineer with 2+ years of experience building scalable backend solutions, AI-powered applications, and leading development. Focused on Python, Django - DRF, Generative AI | LLM, Agentic RAG's and cloud technologies.",
  aboutParagraphs: [
    "I'm a passionate software engineer with a strong background in backend development, AI integration, and product-focused engineering. I specialize in building scalable Python applications, API services, and modern AI-powered workflows.",
    "My journey in software engineering has taken me through multiple real-world domains. I enjoy solving complex problems, improving performance, and building reliable systems that create measurable business value.",
    "With expertise in Python, Django, DRF, FastAPI, and cloud tooling, I'm always eager to take on new challenges and contribute to impactful products."
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
    { id: 1, name: "HTML", category: "frontend", level: "advanced", order: 1 },
    { id: 2, name: "CSS", category: "frontend", level: "advanced", order: 2 },
    { id: 3, name: "JavaScript", category: "frontend", level: "advanced", order: 3 },
    { id: 4, name: "React.js", category: "frontend", level: "advanced", order: 4 },
    { id: 5, name: "TypeScript", category: "backend", level: "advanced", order: 5 },
    { id: 6, name: "Node.js", category: "backend", level: "advanced", order: 6 },
    { id: 7, name: "Python", category: "backend", level: "expert", order: 7 },
    { id: 8, name: "Django", category: "backend", level: "expert", order: 8 },
    { id: 9, name: "DRF", category: "backend", level: "expert", order: 9 },
    { id: 10, name: "FastAPI", category: "backend", level: "advanced", order: 10 },
    { id: 11, name: "LangChain", category: "ai", level: "expert", order: 5 },
    { id: 12, name: "LangGraph", category: "ai", level: "advanced", order: 6 },
    { id: 13, name: "CrewAI", category: "ai", level: "advanced", order: 7 },
    { id: 14, name: "OpenAI Agent SDK", category: "ai", level: "advanced", order: 8 },
    { id: 15, name: "RAG Systems", category: "ai", level: "advanced", order: 9 },
    { id: 16, name: "MySQL", category: "database", level: "advanced", order: 10 },
    { id: 17, name: "PostgreSQL", category: "database", level: "advanced", order: 11 },
    { id: 18, name: "Chroma DB", category: "database", level: "advanced", order: 12 },
    { id: 19, name: "Pinecone DB", category: "database", level: "advanced", order: 13 },
    { id: 20, name: "Faiss DB", category: "database", level: "advanced", order: 14 },
    { id: 21, name: "MongoDB", category: "database", level: "advanced", order: 15 },
    { id: 22, name: "Docker", category: "devops", level: "advanced", order: 12 },
    { id: 23, name: "AWS", category: "devops", level: "advanced", order: 13 },
    { id: 24, name: "GitHub Actions", category: "tools", level: "advanced", order: 14 },
    { id: 25, name: "PyCharm", category: "tools", level: "advanced", order: 15 },
    { id: 26, name: "VS Code", category: "tools", level: "advanced", order: 16 },
    { id: 27, name: "Cursor", category: "tools", level: "advanced", order: 17 },
    { id: 28, name: "pgAdmin", category: "tools", level: "advanced", order: 18 },
    { id: 29, name: "Postman", category: "tools", level: "advanced", order: 19 },
    { id: 30, name: "XAMPP", category: "tools", level: "advanced", order: 20 },
    { id: 31, name: "DBeaver", category: "tools", level: "advanced", order: 21 },
    { id: 32, name: "System Design", category: "soft", level: "advanced", order: 16 }
  ],
  projects: [
    {
      id: 1,
      title: "Power Email AI",
      shortDescription:
        "Full-stack AI email automation system with smart replies, routing, and campaigns.",
      description:
        "Engineered an AI email platform with workflow automation, JWT authentication, encrypted credential storage, and AWS SES email pipelines. Built a React interface for automation control and template management.",
      techStack: ["Python", "OpenAI", "AWS SES", "React", "JWT", "Automation"],
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
        "Scalable student collaboration platform for managing study groups.",
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
        "Healthcare chatbot with context-aware responses and conversation memory.",
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
        "Multi-modal retrieval system for documents, images, and multimedia references.",
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
