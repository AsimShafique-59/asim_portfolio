import { motion } from "motion/react";
import { Code2, ExternalLink, Github, Database, Zap, Shield, Cloud, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Python", "Django", "FastAPI", "AI", "RAG", "SEO"];

  const projects = [
    {
      title: "Reachgin -- Multi-Industry POS",
      category: "Django",
      description: "Architected a scalable backend system (35+ apps, 150+ models) for multi-industry POS with centralized admin management.",
      details: [
        "Implemented RESTful APIs with JWT authentication (SimpleJWT), token rotation, blacklisting, and RBAC.",
        "Designed service-layer architecture with separation of concerns, UUID primary keys, soft deletes, and standardized database models.",
        "Developed transaction management including appointment scheduling, billing, invoice generation, and promotion/discount engines.",
        "Integrated Celery, Redis, AWS S3, Firebase FCM push notifications, and drf-spectacular/OpenAPI Swagger documentation."
      ],
      tech: ["Python", "Django", "DRF", "PostgreSQL", "Celery", "Redis", "AWS S3"],
      icon: Database,
      color: "from-indigo-500 to-purple-500",
      metrics: { year: "2026", scope: "POS", type: "Django" },
      githubLink: "https://github.com/AsimShafique-59",
      demoLink: "https://asimshafique.netlify.app"
    },
    {
      title: "LinkPOS – Multi-Tenant SaaS POS Platform",
      category: "Django",
      description: "Architected and implemented a schema-based multi-tenant SaaS backend using Django and django-tenant.",
      details: [
        "Enabled secure tenant isolation and horizontal scalability within a single PostgreSQL cluster.",
        "Developed tenant-aware RESTful APIs with JWT authentication, RBAC, and permission-based POS workflows.",
        "Designed optimized PostgreSQL schemas, managed migrations, and tuned query performance for high throughput."
      ],
      tech: ["Python", "Django", "DRF", "django-tenant", "PostgreSQL"],
      icon: Database,
      color: "from-indigo-500 to-blue-500",
      metrics: { year: "2025", scope: "Multi-Tenant SaaS", type: "Django" },
      githubLink: "https://github.com/AsimShafique-59",
      demoLink: "https://asimshafique.netlify.app"
    },
    {
      title: "SEO AI – Automated Website SEO Analytics Platform",
      category: "SEO",
      description: "Developed an automated SEO analysis platform for website performance, technical SEO metrics, and content optimization.",
      details: [
        "Processed large-scale SEO datasets using NumPy and Pandas for keyword analysis and traffic insights.",
        "Integrated Google Analytics data pipelines to track user behavior and conversion metrics.",
        "Leveraged Advertools for technical SEO auditing, URL analysis, sitemap parsing, and search performance evaluation."
      ],
      tech: ["Python", "Pandas", "NumPy", "Google Analytics", "Advertools"],
      icon: Cloud,
      color: "from-amber-500 to-orange-500",
      metrics: { year: "2025", scope: "SEO Analytics", type: "Data Platform" },
      githubLink: "https://github.com/AsimShafique-59",
      demoLink: "https://asimshafique.netlify.app"
    },
    {
      title: "Venuze -- Venue Booking Platform",
      category: "FastAPI",
      description: "Built scalable REST APIs using FastAPI with PostgreSQL, SQLAlchemy, Redis, and AWS S3.",
      details: [
        "Implemented JWT authentication, Redis token blacklisting, and RBAC for secure access.",
        "Built venue booking, availability calendars, geo-search, dynamic pricing, invoices, coupons, disputes, and real-time chat.",
        "Integrated Stripe payments, OAuth2 (Google/Authlib), Firebase notifications, asyncio, uvloop, background workers, SQLAdmin, Sentry, and Alembic."
      ],
      tech: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Redis", "AWS S3", "Stripe"],
      icon: Cloud,
      color: "from-emerald-500 to-teal-500",
      metrics: { year: "2026", scope: "Venue Booking", type: "FastAPI" },
      githubLink: "https://github.com/AsimShafique-59",
      demoLink: "https://venuze.com/"
    },
    {
      title: "Power Email AI",
      category: "AI",
      description: "Engineered a full-stack AI email automation system with intelligent reply generation, routing, campaigns, and rule-based workflows.",
      details: [
        "Developed backend modular services with JWT auth, encrypted credential storage, and AWS SES email pipelines.",
        "Built a React frontend for automations, templates, and AI agents with 95%+ response accuracy."
      ],
      tech: ["Python", "React", "OpenAI", "AWS SES", "JWT"],
      icon: Zap,
      color: "from-purple-500 to-pink-500",
      metrics: { year: "2025", scope: "Email AI", type: "Automation" },
      githubLink: "https://github.com/AsimShafique-59",
      demoLink: "https://ai-powered-email-245242481871.us-central1.run.app/inbox"
    },
    {
      title: "Peer Learning Circle Web Application",
      category: "Django",
      description: "Built a scalable web platform enabling students to create and manage study groups with custom Django admin controls.",
      details: [
        "Enabled study group creation, collaboration, and administrative oversight for student communities."
      ],
      tech: ["Python", "Django", "DRF", "REST APIs"],
      icon: Database,
      color: "from-blue-500 to-cyan-500",
      metrics: { year: "2025", scope: "Education", type: "Django" },
      githubLink: "https://github.com/AsimShafique-59/peer_learning_platform",
      demoLink: "https://asimshafique.netlify.app"
    },
    {
      title: "Sophia Bot – AI Healthcare Assistant",
      category: "AI",
      description: "Developed a healthcare chatbot with context-aware responses, conversation history, and EHR integration readiness.",
      details: [
        "Delivered 92% answer accuracy with Groq Llama-3 and RAG-powered knowledge retrieval."
      ],
      tech: ["OpenAI Agent SDK", "Groq Llama-3", "RAG", "Python"],
      icon: Sparkles,
      color: "from-cyan-500 to-blue-500",
      metrics: { year: "2025", scope: "Healthcare", type: "AI Chatbot" },
      githubLink: "https://github.com/AsimShafique-59",
      demoLink: "https://sophiamainbot-asim.streamlit.app/"
    },
    {
      title: "Email Classification & Auto-Reply Agent",
      category: "AI",
      description: "Engineered an IMAP/SMTP agent to classify property-related emails, generate replies, and forward with e-signature DOCX/PDF.",
      details: [
        "Achieved 90% classification accuracy for automated email categorization and reply generation."
      ],
      tech: ["Python", "Groq Llama-3", "BeautifulSoup", "IMAP", "SMTP"],
      icon: Zap,
      color: "from-pink-500 to-red-500",
      metrics: { year: "2025", scope: "Email Automation", type: "AI Agent" },
      githubLink: "https://github.com/AsimShafique-59",
      demoLink: "https://asimshafique.netlify.app"
    },
    {
      title: "Multi-Modal RAG System with Contextual References",
      category: "RAG",
      description: "Designed a multi-modal RAG pipeline for PDFs, DOCX, CSV, and images with audio/video timestamp extraction.",
      details: [
        "Achieved 90% retrieval accuracy and 60% precision for timestamp extraction across multimedia sources."
      ],
      tech: ["Python", "LangChain", "ChromaDB", "Groq Llama-3"],
      icon: Shield,
      color: "from-indigo-500 to-purple-500",
      metrics: { year: "2025", scope: "Multi-Modal", type: "RAG" },
      githubLink: "https://github.com/AsimShafique-59",
      demoLink: "https://asimshafique.netlify.app"
    },
  ];

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="inline-block mb-4"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl">
              <Code2 className="w-10 h-10 text-white" />
            </div>
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real-world Python, Django, and AI systems built for production.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-xl'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-indigo-300'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-gray-200 group relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`w-14 h-14 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}
              >
                <project.icon className="w-7 h-7 text-white" />
              </motion.div>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <motion.a
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-indigo-600"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-indigo-600"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>

                <span className={`inline-block px-3 py-1 bg-gradient-to-r ${project.color} text-white text-xs font-semibold rounded-full mb-3`}>
                  {project.category}
                </span>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>

                {project.details?.length ? (
                  <div className="mb-4 space-y-2 text-gray-600 text-sm leading-snug">
                    {project.details.map((detail) => (
                      <div key={detail} className="flex gap-2">
                        <span className="mt-1 text-indigo-600">•</span>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                ) : null}

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-200">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key}>
                      <div className="text-xs text-gray-500 uppercase">{key}</div>
                      <div className="text-sm font-bold text-gray-800">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
