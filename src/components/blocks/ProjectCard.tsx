"use client";

import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/components/ui/utils";
import { Card } from "./Card";
import type { Project } from "@/lib/data/projects";

export function ProjectCard({ project, index = 0, compact = false }: { project: Project; index?: number; compact?: boolean }) {
  const Icon = project.icon;

  return (
    <Card
      layout="position"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: Math.min(index, 5) * 0.06, duration: 0.4 }}
      whileHover={{ y: -6 }}
      className="group flex h-full flex-col overflow-hidden p-0"
    >
      <Link href={`/projects/${project.slug}`} className="block">
        <div
          className={cn(
            "relative flex aspect-[16/9] items-center justify-center overflow-hidden bg-gradient-to-br transition-transform duration-500 group-hover:scale-105",
            project.color,
          )}
        >
          <Icon className="h-14 w-14 text-white/90" strokeWidth={1.25} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2 flex items-start justify-between gap-2">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{project.category}</span>
          <div className="flex shrink-0 gap-3 opacity-0 transition-opacity group-hover:opacity-100">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label={`${project.title} on GitHub`}
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label={`${project.title} live demo`}
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="line-clamp-2 text-xl font-extrabold tracking-tight text-foreground transition-colors hover:text-brand"
        >
          {project.title}
        </Link>

        <p className={cn("mt-3 text-sm leading-relaxed text-muted-foreground", compact ? "line-clamp-2" : "line-clamp-3")}>
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {(compact ? project.tech.slice(0, 4) : project.tech).map((tech) => (
            <span key={tech} className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground/80">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto">
          <div className="mt-6 grid grid-cols-3 gap-2 border-t border-border pt-4">
            {Object.entries(project.metrics).map(([key, value]) => (
              <div key={key}>
                <div className="text-[11px] uppercase tracking-wide text-muted-foreground">{key}</div>
                <div className="text-sm font-medium text-foreground">{value}</div>
              </div>
            ))}
          </div>

          <Link
            href={`/projects/${project.slug}`}
            className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand transition-all hover:gap-2"
          >
            View case study <ExternalLink className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </Card>
  );
}
