"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { cn } from "@/components/ui/utils";
import type { Project } from "@/lib/data/projects";

export function ProjectDetail({ project }: { project: Project }) {
  const Icon = project.icon;

  return (
    <div className="min-h-screen px-6 pb-20 pt-32">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/projects"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 transition-all hover:gap-3 dark:text-pink-400"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className={cn("mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg", project.color)}>
            <Icon className="h-8 w-8 text-white" />
          </div>

          <span className={cn("mb-4 inline-block rounded-full bg-gradient-to-r px-3 py-1 text-xs font-semibold text-white", project.color)}>
            {project.category}
          </span>

          <h1 className="mb-4 text-4xl font-bold text-gray-800 dark:text-gray-100 md:text-5xl">{project.title}</h1>
          <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-400">{project.description}</p>

          <div className="mb-8 flex flex-wrap gap-3">
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 font-semibold text-white shadow-lg"
            >
              <ExternalLink className="h-4 w-4" />
              View Live
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-2xl border-2 border-gray-200 bg-white px-6 py-3 font-semibold text-gray-700 shadow-lg dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200"
            >
              <Github className="h-4 w-4" />
              View Code
            </a>
          </div>

          <GlassCard className="mb-6 p-8">
            <h2 className="mb-4 text-xl font-bold text-gray-800 dark:text-gray-100">Highlights</h2>
            <div className="space-y-3">
              {project.details.map((detail) => (
                <div key={detail} className="flex gap-3 text-gray-600 dark:text-gray-400">
                  <span className={cn("mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r", project.color)} />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="mb-6 p-8">
            <h2 className="mb-4 text-xl font-bold text-gray-800 dark:text-gray-100">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="grid grid-cols-3 gap-4 p-8 text-center">
            {Object.entries(project.metrics).map(([key, value]) => (
              <div key={key}>
                <div className="text-xs uppercase text-gray-500 dark:text-gray-500">{key}</div>
                <div className="text-lg font-bold text-gray-800 dark:text-gray-100">{value}</div>
              </div>
            ))}
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}
