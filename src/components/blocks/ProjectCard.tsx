"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { cn } from "@/components/ui/utils";
import type { Project } from "@/lib/data/projects";

export function ProjectCard({ project, index = 0, compact = false }: { project: Project; index?: number; compact?: boolean }) {
  const Icon = project.icon;

  return (
    <GlassCard
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden"
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-10",
          project.color,
        )}
      />

      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
        className={cn("mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg", project.color)}
      >
        <Icon className="h-7 w-7 text-white" />
      </motion.div>

      <div className="relative z-10">
        <div className="mb-2 flex items-start justify-between gap-2">
          <Link
            href={`/projects/${project.slug}`}
            className="text-xl font-bold text-gray-800 transition-colors group-hover:text-indigo-600 dark:text-gray-100 dark:group-hover:text-pink-400"
          >
            {project.title}
          </Link>
          <div className="flex shrink-0 gap-2 pt-1">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-indigo-600 dark:hover:text-pink-400"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-indigo-600 dark:hover:text-pink-400"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </div>

        <span className={cn("mb-3 inline-block rounded-full bg-gradient-to-r px-3 py-1 text-xs font-semibold text-white", project.color)}>
          {project.category}
        </span>

        <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{project.description}</p>

        {!compact && project.details.length > 0 && (
          <div className="mb-4 space-y-2 text-sm leading-snug text-gray-600 dark:text-gray-400">
            {project.details.map((detail) => (
              <div key={detail} className="flex gap-2">
                <span className="mt-1 text-indigo-600 dark:text-pink-400">•</span>
                <span>{detail}</span>
              </div>
            ))}
          </div>
        )}

        <div className="mb-4 flex flex-wrap gap-2">
          {(compact ? project.tech.slice(0, 4) : project.tech).map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mb-4 grid grid-cols-3 gap-2 border-t border-gray-200 pt-4 dark:border-gray-800">
          {Object.entries(project.metrics).map(([key, value]) => (
            <div key={key}>
              <div className="text-xs uppercase text-gray-500 dark:text-gray-500">{key}</div>
              <div className="text-sm font-bold text-gray-800 dark:text-gray-200">{value}</div>
            </div>
          ))}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 transition-all hover:gap-2 dark:text-pink-400"
        >
          View details <ExternalLink className="h-3.5 w-3.5" />
        </Link>
      </div>
    </GlassCard>
  );
}
