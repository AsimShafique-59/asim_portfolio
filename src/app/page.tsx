"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Sparkles,
  Zap,
  Brain,
  Cpu,
  Code2,
  Server,
  Bot,
  Cloud,
  Network,
  Briefcase,
  Send,
} from "lucide-react";
import { GlassCard } from "@/components/blocks/GlassCard";
import { SectionHeading } from "@/components/blocks/SectionHeading";
import { StatCard } from "@/components/blocks/StatCard";
import { ProjectCard } from "@/components/blocks/ProjectCard";
import { featuredProjects } from "@/lib/data/projects";
import { topSkills } from "@/lib/data/skills";
import { experience } from "@/lib/data/experience";

const fullText = "Python and AI engineer with 2+ years of experience building scalable backend systems.";

const floatingIcons = [
  { Icon: Brain, delay: 0, color: "text-pink-500" },
  { Icon: Cpu, delay: 0.2, color: "text-blue-500" },
  { Icon: Zap, delay: 0.4, color: "text-purple-500" },
  { Icon: Code2, delay: 0.6, color: "text-indigo-500" },
];

const stats = [
  { number: "2+", label: "Years Experience", color: "from-blue-500 to-cyan-500" },
  { number: "12+", label: "Projects Completed", color: "from-purple-500 to-pink-500" },
  { number: "36+", label: "Technologies Mastered", color: "from-indigo-500 to-purple-500" },
];

const focusAreas = [
  {
    icon: Server,
    title: "Backend Engineering",
    description: "Django, DRF, and FastAPI services built for production reliability and scale.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: Bot,
    title: "Generative AI & LLMs",
    description: "LangChain, LangGraph, and agentic RAG systems for real product workflows.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Cloud,
    title: "Cloud & Automation",
    description: "Docker, AWS, and CI/CD pipelines that keep deployments fast and reliable.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Network,
    title: "API Architecture",
    description: "Clean, scalable API design with clear service boundaries and strong data models.",
    color: "from-fuchsia-500 to-violet-500",
  },
];

const latestRole = experience[0];

export default function Home() {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen px-6 pb-20 pt-32">
      <div className="mx-auto max-w-7xl">
        {/* Hero Section */}
        <div className="mb-32 grid items-center gap-12 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-gradient-to-r from-indigo-500/10 to-pink-500/10 px-4 py-2 dark:border-indigo-500/30"
            >
              <Sparkles className="h-4 w-4 text-indigo-600 dark:text-pink-400" />
              <span className="bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-sm font-semibold text-transparent">
                AI-Powered Development
              </span>
            </motion.div>

            <h1 className="mb-6 text-6xl font-bold md:text-7xl">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Asim Shafique
              </span>
            </h1>

            <p className="mb-6 text-3xl font-semibold text-gray-800 dark:text-gray-100">Python, DRF &amp; Generative AI Engineer</p>

            <div className="mb-8 h-20">
              <p className="font-mono text-2xl leading-snug text-gray-600 dark:text-gray-400">
                {typedText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="ml-1 inline-block h-6 w-0.5 bg-indigo-600 dark:bg-pink-400"
                />
              </p>
            </div>

            <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              Python and AI engineer with 2+ years of experience building scalable backend systems, LLM-powered applications, and
              production-grade automations. Focused on Django/DRF, FastAPI, agentic RAG, and cloud deployment.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/projects">
                <motion.span
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-xl"
                >
                  View Projects
                  <ArrowRight className="h-5 w-5" />
                </motion.span>
              </Link>
              <Link href="/contact">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-2xl border-2 border-indigo-600 bg-white px-8 py-4 font-semibold text-indigo-600 shadow-lg transition-colors hover:bg-indigo-50 dark:bg-gray-900 dark:text-indigo-400 dark:hover:bg-gray-800"
                >
                  Get In Touch
                </motion.span>
              </Link>
              {/* Resume page is unlinked for now — restore this button to bring it back. */}
              {/* <Link href="/resume">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-2xl border-2 border-purple-600 bg-white px-8 py-4 font-semibold text-purple-600 shadow-lg transition-colors hover:bg-purple-50"
                >
                  View Resume
                </motion.span>
              </Link> */}
            </div>
          </motion.div>

          {/* Animated Visualization */}
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative">
            <div className="relative aspect-square w-full">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="flex h-48 w-48 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-2xl">
                  <Code2 className="h-24 w-24 text-white" />
                </div>
              </motion.div>

              {floatingIcons.map(({ Icon, delay, color }, index) => (
                <motion.div
                  key={index}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: delay * 5 }}
                  className="absolute inset-0"
                  style={{ transformOrigin: "center" }}
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay }}
                    className={`absolute left-1/2 top-0 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-2xl bg-white shadow-xl dark:bg-gray-900 ${color}`}
                  >
                    <Icon className="h-8 w-8" />
                  </motion.div>
                </motion.div>
              ))}

              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: [0.8, 1.5, 1.5], opacity: [0, 0.5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i }}
                  className="absolute inset-0 rounded-full border-4 border-indigo-400 dark:border-indigo-500/60"
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Quick Stats */}
        <div className="mb-32 grid gap-6 md:grid-cols-3">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} value={stat.number} label={stat.label} color={stat.color} delay={index * 0.1} />
          ))}
        </div>

        {/* What I Do */}
        <div className="mb-32">
          <SectionHeading icon={Cpu} title="What I Do" subtitle="Core areas I focus on when building production systems." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((area, index) => (
              <GlassCard
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${area.color} shadow-lg`}>
                  <area.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 font-bold text-gray-800 dark:text-gray-100">{area.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{area.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-32">
          <SectionHeading icon={Code2} title="Tech Stack" subtitle="A snapshot of the tools I reach for most." />
          <GlassCard className="p-8">
            <div className="flex flex-wrap justify-center gap-3">
              {topSkills.map((skill) => (
                <span
                  key={skill.name}
                  className="rounded-full border border-indigo-100 bg-gradient-to-r from-indigo-50 to-pink-50 px-4 py-2 font-medium text-gray-700 dark:border-indigo-500/20 dark:from-indigo-500/10 dark:to-pink-500/10 dark:text-gray-200"
                >
                  {skill.name}
                </span>
              ))}
            </div>
            <div className="mt-6 flex justify-center">
              <Link
                href="/skills"
                className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 transition-all hover:gap-2 dark:text-pink-400"
              >
                See full skill set <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </GlassCard>
        </div>

        {/* Featured Projects */}
        <div className="mb-32">
          <SectionHeading icon={Code2} title="Featured Projects" subtitle="A few of the systems I've shipped recently." />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} compact />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link href="/projects">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-xl"
              >
                View All Projects
                <ArrowRight className="h-5 w-5" />
              </motion.span>
            </Link>
          </div>
        </div>

        {/* Currently */}
        <div className="mb-32">
          <SectionHeading icon={Briefcase} title="Currently" iconAnimation="pulse" />
          <GlassCard className="mx-auto max-w-3xl p-8 text-center">
            <div className={`mb-2 inline-block rounded-full bg-gradient-to-r ${latestRole.color} px-4 py-1 text-sm font-bold text-white`}>
              {latestRole.year}
            </div>
            <h3 className="mb-1 text-2xl font-bold text-gray-800 dark:text-gray-100">{latestRole.title}</h3>
            <p className="mb-3 font-semibold text-indigo-600 dark:text-pink-400">{latestRole.company}</p>
            <p className="mb-6 text-gray-600 dark:text-gray-400">{latestRole.description}</p>
            <Link
              href="/about"
              className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 transition-all hover:gap-2 dark:text-pink-400"
            >
              See full journey <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </GlassCard>
        </div>

        {/* CTA */}
        <GlassCard className="bg-gradient-to-br from-indigo-500 to-purple-600 p-10 text-center text-white shadow-2xl dark:border-transparent">
          <h2 className="mb-3 text-3xl font-bold">Let&apos;s build something great</h2>
          <p className="mx-auto mb-6 max-w-xl opacity-90">
            Have a project in mind, or need a Python/AI engineer on your team? I&apos;d love to hear about it.
          </p>
          <Link href="/contact">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-semibold text-indigo-600 shadow-xl"
            >
              <Send className="h-5 w-5" />
              Get In Touch
            </motion.span>
          </Link>
        </GlassCard>
      </div>
    </div>
  );
}
