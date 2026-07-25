"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Card } from "./Card";
import { getProjectBySlug } from "@/lib/data/projects";

export function ProjectDetail({ slug }: { slug: string }) {
  const project = getProjectBySlug(slug);
  if (!project) return null;

  const Icon = project.icon;

  return (
    <div className="px-6 pb-24 pt-10 sm:pt-16">
      <div className="mx-auto max-w-3xl">
        <Link href="/projects" className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-border text-foreground">
            <Icon className="h-6 w-6" />
          </span>

          <span className="mb-3 block text-xs font-medium uppercase tracking-wide text-muted-foreground">{project.category}</span>

          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">{project.title}</h1>
          <p className="mb-8 text-lg leading-relaxed text-muted-foreground">{project.description}</p>

          <div className="mb-10 flex flex-wrap gap-3">
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-2 shadow-[0_0_30px_-8px_var(--brand)] px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              <ExternalLink className="h-4 w-4" />
              View Live
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <Github className="h-4 w-4" />
              View Code
            </a>
          </div>

          <Card className="mb-6">
            <h2 className="mb-4 text-xl font-extrabold tracking-tight text-foreground">Highlights</h2>
            <div className="space-y-3">
              {project.details.map((detail) => (
                <div key={detail} className="flex gap-3 text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="mb-6">
            <h2 className="mb-4 text-xl font-extrabold tracking-tight text-foreground">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground/80">
                  {tech}
                </span>
              ))}
            </div>
          </Card>

          <Card className="grid grid-cols-3 gap-4 text-center">
            {Object.entries(project.metrics).map(([key, value]) => (
              <div key={key}>
                <div className="text-[11px] uppercase tracking-wide text-muted-foreground">{key}</div>
                <div className="mt-1 text-lg font-medium text-foreground">{value}</div>
              </div>
            ))}
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
