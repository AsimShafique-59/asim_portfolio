import { motion } from "motion/react";
import { User, Award, Briefcase, GraduationCap, Heart, Coffee, Code, Rocket, Cpu, Sparkles } from "lucide-react";

export default function About() {
  const timeline = [
    {
      year: "2026",
      title: "Django Python Developer",
      company: "Hashed Systems",
      description: "Building and maintaining backend services using Django and Django REST Framework, with a focus on scalable APIs and production reliability.",
      color: "from-purple-500 to-pink-500"
    },
    {
      year: "2025",
      title: "Junior AI Engineer",
      company: "Web Excels",
      description: "Developing AI-powered applications using Python, LangChain, OpenAI API, and vector databases for production workflows.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      year: "2025",
      title: "Software Engineer (Backend and AI Systems)",
      company: "Artificizen",
      description: "Designed and delivered chatbot and backend solutions with Django and modern AI tooling.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      year: "2024",
      title: "Python Backend Developer",
      company: "AB IT and Technical Services Limited",
      description: "Developed scalable backend services, APIs, and deployment pipelines for distributed production environments.",
      color: "from-emerald-500 to-teal-500"
    },
  ];

  const certifications = [
    {
      name: "Qualifi Level 5 Diploma in Information Technology",
      org: "Qualifi (UK Accredited)",
      year: "2025",
      details: "IELTS Academic Overall Band Score: 6.0"
    },
  ];

  const interests = [
    { icon: Code, label: "Python Backend Engineering", color: "from-blue-500 to-cyan-500" },
    { icon: Cpu, label: "Generative AI & LLM Systems", color: "from-purple-500 to-pink-500" },
    { icon: Sparkles, label: "AI Automation & Integrations", color: "from-pink-500 to-rose-500" },
    { icon: Rocket, label: "SaaS Product Engineering", color: "from-indigo-500 to-purple-500" },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-32 h-32 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl relative"
          >
            <User className="w-16 h-16 text-white" />
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 border-4 border-indigo-400 rounded-full"
            />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a Python and AI engineer with a strong background in backend development, LLM integration, and product-focused engineering. I specialize in scalable Python services, API design, and intelligent AI workflows.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200 mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Briefcase className="w-8 h-8 text-indigo-600" />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              My Journey
            </span>
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-4">
              I started as a Python enthusiast in university and quickly moved into backend engineering. Over time, I built production-ready services that power real business workflows and support modern AI experiences.
            </p>
            <p className="mb-4">
              Today my work centers on backend systems with <strong className="text-indigo-600">Django</strong>, <strong className="text-purple-600">DRF</strong>, and <strong className="text-pink-600">FastAPI</strong>, combined with generative AI, RAG, and automation.
            </p>
            <p>
              I enjoy solving hard engineering problems, improving system performance, and delivering clean, maintainable code that can scale.
            </p>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
            <GraduationCap className="w-8 h-8 text-purple-600" />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Experience Timeline
            </span>
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 hidden md:block" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className={`mb-12 flex items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1" />

                {/* Timeline Dot */}
                <div className="relative z-10 hidden md:block">
                  <motion.div
                    whileHover={{ scale: 1.5 }}
                    className={`w-6 h-6 bg-gradient-to-br ${item.color} rounded-full border-4 border-white shadow-lg`}
                  />
                </div>

                <div className="flex-1 px-6">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-gray-200"
                  >
                    <div className={`inline-block px-4 py-1 bg-gradient-to-r ${item.color} text-white rounded-full text-sm font-bold mb-3`}>
                      {item.year}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{item.title}</h3>
                    <p className="text-indigo-600 font-semibold mb-2">{item.company}</p>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
            <Award className="w-8 h-8 text-indigo-600" />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-gray-200 flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">{cert.name}</h3>
                  <p className="text-sm text-gray-600">{cert.org}</p>
                  <span className="inline-block mt-2 text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded">
                    {cert.year}
                  </span>
                  <p className="text-sm text-gray-500 mt-3">{cert.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interests */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Beyond Code
            </span>
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -10, rotate: 5 }}
                className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-gray-200 text-center"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 bg-gradient-to-br ${interest.color} rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg`}
                >
                  <interest.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="font-bold text-gray-800">{interest.label}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
