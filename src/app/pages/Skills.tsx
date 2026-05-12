import { motion } from "motion/react";
import { Database, Cloud, Code2, Cpu, Layers, GitBranch, Terminal, Box } from "lucide-react";
import { useState } from "react";

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-2xl"
          >
            <Cpu className="w-10 h-10 text-white" />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
              Python & AI Stack
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technical expertise and tooling used to build backend and AI systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    onHoverStart={() => setHoveredSkill(skill.name)}
                    onHoverEnd={() => setHoveredSkill(null)}
                    className="relative"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-800">{skill.name}</span>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredSkill === skill.name ? 1 : 0 }}
                        className="text-sm font-bold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent"
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3 }}
                        className={`h-full bg-gradient-to-r ${category.color} relative`}
                      >
                        {hoveredSkill === skill.name && (
                          <motion.div
                            animate={{ x: [0, 10, 0] }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg"
                          />
                        )}
                      </motion.div>
                    </div>
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: hoveredSkill === skill.name ? "auto" : 0,
                        opacity: hoveredSkill === skill.name ? 1 : 0
                      }}
                      className="text-sm text-gray-600 mt-2 overflow-hidden"
                    >
                      {skill.description}
                    </motion.p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 grid md:grid-cols-4 gap-6"
        >
          {[
            { icon: Code2, label: "Languages Mastered", value: "3+", color: "from-blue-500 to-cyan-500" },
            { icon: Box, label: "Frameworks", value: "10+", color: "from-purple-500 to-pink-500" },
            { icon: Database, label: "Database Systems", value: "6+", color: "from-indigo-500 to-purple-500" },
            { icon: GitBranch, label: "Years Experience", value: "2+", color: "from-emerald-500 to-teal-500" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-gray-200 text-center"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
