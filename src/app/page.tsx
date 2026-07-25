"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Sparkles, Cpu, Code2, Server, Bot, Cloud, Network, Briefcase, Send } from "lucide-react";
import { Card } from "@/components/blocks/Card";
import { SectionHeading } from "@/components/blocks/SectionHeading";
import { ProjectCard } from "@/components/blocks/ProjectCard";
import { Hero3D } from "@/components/blocks/Hero3D";
import { featuredProjects } from "@/lib/data/projects";
import { topSkills } from "@/lib/data/skills";
import { experience } from "@/lib/data/experience";

const stats = [
  { number: "2+", label: "Years Experience" },
  { number: "12+", label: "Projects Completed" },
  { number: "36+", label: "Technologies Mastered" },
];

const focusAreas = [
  {
    icon: Server,
    title: "Backend Engineering",
    description: "Django, DRF, and FastAPI services built for production reliability and scale.",
  },
  {
    icon: Bot,
    title: "Generative AI & LLMs",
    description: "LangChain, LangGraph, and agentic RAG systems for real product workflows.",
  },
  {
    icon: Cloud,
    title: "Cloud & Automation",
    description: "Docker, AWS, and CI/CD pipelines that keep deployments fast and reliable.",
  },
  {
    icon: Network,
    title: "API Architecture",
    description: "Clean, scalable API design with clear service boundaries and strong data models.",
  },
];

const latestRole = experience[0];

export default function Home() {
  return (
    <div className="px-6 pb-24 pt-16 sm:pt-24">
      <div className="mx-auto max-w-6xl">
        {/* Hero Section */}
        <div className="mb-28 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground"
            >
              <Sparkles className="h-3.5 w-3.5 text-brand" />
              AI-Powered Development
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="mb-4 bg-gradient-to-r from-brand to-brand-2 bg-clip-text font-serif text-6xl font-semibold text-transparent md:text-7xl"
            >
              Asim Shafique
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mb-6 text-xl font-medium text-foreground/80 sm:text-2xl"
            >
              Python, DRF &amp; Generative AI Engineer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="mb-8 text-lg leading-relaxed text-muted-foreground"
            >
              Python and AI engineer with 2+ years of experience building scalable backend systems, LLM-powered applications, and
              production-grade automations. Focused on Django/DRF, FastAPI, agentic RAG, and cloud deployment.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="/projects"
                className="group flex items-center gap-2 rounded-lg bg-gradient-to-r from-brand to-brand-2 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-brand/20 transition-opacity hover:opacity-90"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/contact"
                className="rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                Get In Touch
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="mt-8 flex items-center gap-2 text-sm text-muted-foreground"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
              Currently building at {latestRole.company} · Lahore, Pakistan
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="hidden lg:block"
          >
            <Hero3D />
          </motion.div>
        </div>

        {/* Quick Stats */}
        <div className="mb-28">
          <Card className="grid grid-cols-1 divide-y divide-border p-0 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {stats.map((stat) => (
              <div key={stat.label} className="p-8 text-center">
                <div className="font-serif text-4xl font-semibold text-foreground">{stat.number}</div>
                <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </Card>
        </div>

        {/* What I Do */}
        <div className="mb-28">
          <SectionHeading icon={Cpu} title="What I Do" subtitle="Core areas I focus on when building production systems." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((area, index) => (
              <Card
                key={area.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
              >
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-border text-foreground">
                  <area.icon className="h-5 w-5" />
                </span>
                <h3 className="mb-2 font-semibold text-foreground">{area.title}</h3>
                <p className="text-sm text-muted-foreground">{area.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-28">
          <SectionHeading icon={Code2} title="Tech Stack" subtitle="A snapshot of the tools I reach for most." />
          <Card className="p-8">
            <div className="flex flex-wrap justify-center gap-3">
              {topSkills.map((skill) => (
                <span key={skill.name} className="rounded-full border border-border bg-secondary px-4 py-2 font-medium text-secondary-foreground">
                  {skill.name}
                </span>
              ))}
            </div>
            <div className="mt-6 flex justify-center">
              <Link href="/skills" className="inline-flex items-center gap-1 text-sm font-medium text-brand transition-all hover:gap-2">
                See full skill set <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Card>
        </div>

        {/* Featured Projects */}
        <div className="mb-28">
          <SectionHeading icon={Code2} title="Featured Projects" subtitle="A few of the systems I've shipped recently." />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} compact />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              href="/projects"
              className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-brand to-brand-2 px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              View All Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Currently */}
        <div className="mb-28">
          <SectionHeading icon={Briefcase} title="Currently" />
          <Card className="mx-auto max-w-3xl p-8 text-center">
            <span className="mb-3 inline-block rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
              {latestRole.year}
            </span>
            <h3 className="mb-1 font-serif text-2xl font-semibold text-foreground">{latestRole.title}</h3>
            <p className="mb-3 font-medium text-brand">{latestRole.company}</p>
            <p className="mb-6 text-muted-foreground">{latestRole.description}</p>
            <Link href="/about" className="inline-flex items-center gap-1 text-sm font-medium text-brand transition-all hover:gap-2">
              See full journey <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Card>
        </div>

        {/* CTA */}
        <Card className="bg-secondary/40 p-10 text-center">
          <h2 className="mb-3 font-serif text-3xl font-semibold text-foreground">Let&apos;s build something great</h2>
          <p className="mx-auto mb-6 max-w-xl text-muted-foreground">
            Have a project in mind, or need a Python/AI engineer on your team? I&apos;d love to hear about it.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-brand to-brand-2 px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            <Send className="h-4 w-4" />
            Get In Touch
          </Link>
        </Card>
      </div>
    </div>
  );
}
