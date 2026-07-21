"use client";

import { motion } from "motion/react";
import { User, Award, Briefcase, GraduationCap, Code, Rocket, Cpu, Sparkles } from "lucide-react";
import { GlassCard } from "@/components/blocks/GlassCard";
import { SectionHeading } from "@/components/blocks/SectionHeading";
import { Timeline } from "@/components/blocks/Timeline";
import { experience, certifications } from "@/lib/data/experience";

const interests = [
  { icon: Code, label: "Python Backend Engineering", color: "from-blue-500 to-cyan-500" },
  { icon: Cpu, label: "Generative AI & LLM Systems", color: "from-purple-500 to-pink-500" },
  { icon: Sparkles, label: "AI Automation & Integrations", color: "from-pink-500 to-rose-500" },
  { icon: Rocket, label: "SaaS Product Engineering", color: "from-indigo-500 to-purple-500" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen px-6 pb-20 pt-32">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="mb-16 text-center">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="relative mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-2xl"
          >
            <User className="h-16 w-16 text-white" />
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-full border-4 border-indigo-400 dark:border-indigo-500/60"
            />
          </motion.div>
          <h1 className="mb-4 text-5xl font-bold md:text-6xl">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">About Me</span>
          </h1>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600 dark:text-gray-400">
            I&apos;m a Python and AI engineer with a strong background in backend development, LLM integration, and product-focused
            engineering. I specialize in scalable Python services, API design, and intelligent AI workflows.
          </p>
        </motion.div>

        <GlassCard
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-16 p-8 md:p-12"
        >
          <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold">
            <Briefcase className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">My Journey</span>
          </h2>
          <div className="max-w-none space-y-4 text-gray-600 dark:text-gray-400">
            <p>
              I started as a Python enthusiast in university and quickly moved into backend engineering. Over time, I built
              production-ready services that power real business workflows and support modern AI experiences.
            </p>
            <p>
              Today my work centers on backend systems with <strong className="text-indigo-600 dark:text-indigo-400">Django</strong>,{" "}
              <strong className="text-purple-600 dark:text-purple-400">DRF</strong>, and{" "}
              <strong className="text-pink-600 dark:text-pink-400">FastAPI</strong>, combined with generative AI, RAG, and automation.
            </p>
            <p>I enjoy solving hard engineering problems, improving system performance, and delivering clean, maintainable code that can scale.</p>
          </div>
        </GlassCard>

        <div className="mb-16">
          <SectionHeading icon={GraduationCap} title="Experience Timeline" variant="inline" gradient="from-purple-600 to-pink-600" className="mb-8" />
          <Timeline items={experience} />
        </div>

        <div className="mb-16">
          <SectionHeading icon={Award} title="Certifications" variant="inline" gradient="from-indigo-600 to-purple-600" className="mb-8" />
          <div className="grid gap-6 md:grid-cols-2">
            {certifications.map((cert, index) => (
              <GlassCard
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="flex items-start gap-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="mb-1 font-bold text-gray-800 dark:text-gray-100">{cert.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{cert.org}</p>
                  <span className="mt-2 inline-block rounded bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300">
                    {cert.year}
                  </span>
                  <p className="mt-3 text-sm text-gray-500 dark:text-gray-500">{cert.details}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-8 text-center text-3xl font-bold">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Beyond Code</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-4">
            {interests.map((interest, index) => (
              <GlassCard
                key={interest.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, rotate: 5 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${interest.color} shadow-lg`}
                >
                  <interest.icon className="h-8 w-8 text-white" />
                </motion.div>
                <h3 className="font-bold text-gray-800 dark:text-gray-100">{interest.label}</h3>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
