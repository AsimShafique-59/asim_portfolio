import { motion } from "motion/react";
import { Briefcase, GraduationCap, Code2, Award } from "lucide-react";

export default function Resume() {
  const experience = [
    {
      title: "Django Python Developer",
      company: "Hased Systems",
      period: "2026",
      summary:
        "Built and maintained scalable Django + DRF APIs with production reliability focus.",
    },
    {
      title: "Junior AI Engineer",
      company: "Web Excels",
      period: "2025",
      summary:
        "Developed LLM-powered applications with LangChain/OpenAI and vector search workflows.",
    },
    {
      title: "Software Engineer (Backend & AI Systems)",
      company: "Artificizen",
      period: "2025",
      summary: "Delivered chatbot and backend solutions for real client products.",
    },
    {
      title: "Python Backend Developer",
      company: "AB IT and Technical Services Limited",
      period: "2024",
      summary:
        "Developed scalable backend services, APIs, and deployment pipelines for production systems.",
    },
  ];

  const skills = [
    "Python",
    "Django",
    "DRF",
    "FastAPI",
    "LangChain",
    "LangGraph",
    "CrewAI",
    "PostgreSQL",
    "Docker",
    "AWS",
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-3">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Resume
            </span>
          </h1>
          <p className="text-gray-600 text-lg">Asim Shafique — Python, DRF & Generative AI Engineer</p>
        </motion.div>

        <div className="grid gap-6">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-gray-200"
          >
            <h2 className="text-2xl font-bold mb-5 flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-indigo-600" />
              Experience
            </h2>
            <div className="space-y-4">
              {experience.map((job) => (
                <div key={`${job.title}-${job.company}`} className="rounded-2xl border border-gray-200 p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-semibold text-lg text-gray-800">{job.title}</h3>
                    <span className="text-sm font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">{job.period}</span>
                  </div>
                  <p className="text-purple-600 font-medium">{job.company}</p>
                  <p className="text-gray-600 mt-2">{job.summary}</p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-gray-200"
          >
            <h2 className="text-2xl font-bold mb-5 flex items-center gap-2">
              <Code2 className="w-6 h-6 text-purple-600" />
              Skills
            </h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-indigo-50 to-pink-50 border border-indigo-100 text-gray-700 font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid md:grid-cols-2 gap-6"
          >
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-gray-200">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-pink-600" />
                Education
              </h2>
              <p className="font-semibold text-gray-800">Qualifi Level 5 Diploma in Information Technology</p>
              <p className="text-gray-600">Qualifi (UK Accredited) — 2025</p>
            </div>

            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-gray-200">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Award className="w-6 h-6 text-indigo-600" />
                Contact
              </h2>
              <p className="text-gray-700">asimshafique59@gmail.com</p>
              <p className="text-gray-700">+92 325 415 5556</p>
              <p className="text-gray-700">github.com/AsimShafique-59</p>
              <p className="text-gray-700">linkedin.com/in/muhammad-asim-shafique-0581411aa</p>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
