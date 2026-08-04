"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { Card } from "./Card";
import { Tilt } from "./Tilt";
import { ProjectCard } from "./ProjectCard";
import { getProjectBySlug, projects } from "@/lib/data/projects";

export function ProjectDetail({ slug }: { slug: string }) {
  const project = getProjectBySlug(slug);
  if (!project) return null;

  const Icon = project.icon;
  const relatedProjects = projects.filter((p) => p.slug !== project.slug && p.category === project.category).slice(0, 3);

  return (
    <div className="px-6 pb-24 pt-10 sm:pt-16">
      <div className="mx-auto max-w-6xl">
        <Link href="/projects" className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="mb-14">
          <div className={`relative flex aspect-[21/9] items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br ${project.color}`}>
            <Tilt intensity={10}>
              <Icon className="h-20 w-20 text-white/90" strokeWidth={1.1} />
            </Tilt>
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
          </div>

          <span className="mb-3 mt-8 block text-xs font-medium uppercase tracking-wide text-muted-foreground">{project.category}</span>
          <h1 className="mb-4 max-w-3xl text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">{project.title}</h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">{project.description}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-2 px-5 py-2.5 text-sm font-medium text-white shadow-[0_0_30px_-8px_var(--brand)] transition-opacity hover:opacity-90"
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
        </motion.div>

        {/* Body: narrative + sticky sidebar */}
        <div className="grid gap-8 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="space-y-6 lg:col-span-2"
          >
            <h2 className="text-xl font-extrabold tracking-tight text-foreground">Approach &amp; Architecture</h2>
            <div className="space-y-5">
              {project.details.map((detail, i) => (
                <p
                  key={detail}
                  className={i === 0 ? "text-lg leading-relaxed text-foreground" : "text-base leading-relaxed text-muted-foreground"}
                >
                  {detail}
                </p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="space-y-6 lg:sticky lg:top-24 lg:self-start"
          >
            <Card>
              <h3 className="mb-4 text-sm font-extrabold uppercase tracking-wide text-muted-foreground">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs font-medium text-secondary-foreground/80">
                    {tech}
                  </span>
                ))}
              </div>
            </Card>

            <Card className="grid grid-cols-3 gap-4 text-center">
              {Object.entries(project.metrics).map(([key, value]) => (
                <div key={key}>
                  <div className="text-[11px] uppercase tracking-wide text-muted-foreground">{key}</div>
                  <div className="mt-1 text-sm font-medium text-foreground">{value}</div>
                </div>
              ))}
            </Card>
          </motion.div>
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="mt-20">
            <h2 className="mb-8 text-2xl font-extrabold tracking-tight text-foreground">Related Projects</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {relatedProjects.map((related, i) => (
                <ProjectCard key={related.slug} project={related} index={i} compact />
              ))}
            </div>
          </div>
        )}

        <div className="mt-16 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            View all projects
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
