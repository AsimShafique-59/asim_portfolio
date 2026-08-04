"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { Code2, Layers, Github } from "lucide-react";
import { SectionHeading } from "@/components/blocks/SectionHeading";
import { ProjectCard } from "@/components/blocks/ProjectCard";
import { AuroraBackground } from "@/components/blocks/AuroraBackground";
import { projects, projectCategories } from "@/lib/data/projects";

const stats = [
  { icon: Layers, value: `${projects.length}+`, label: "Shipped Projects" },
  { icon: Code2, value: `${projectCategories.length - 1}`, label: "Focus Areas" },
  { icon: Github, value: "Open Source", label: "Code on GitHub" },
];

export default function ProjectsContent() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" ? projects : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="px-6 pb-24 pt-10 sm:pt-16">
      <div className="mx-auto max-w-7xl">
        <div className="relative -mx-6 mb-4 overflow-hidden rounded-3xl border border-border/60 px-6 py-16">
          <AuroraBackground />
          <SectionHeading
            as="h1"
            icon={Code2}
            title="AI & Backend Case Studies"
            subtitle="Production RAG pipelines, AI agents, and Django/FastAPI systems, shipped end-to-end."
            className="relative mb-0"
          />
        </div>

        <div className="mb-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-4 bg-card p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-gradient-to-br from-brand/10 to-brand-2/10 text-brand">
                <stat.icon className="h-5 w-5" />
              </span>
              <div>
                <div className="text-lg font-extrabold tracking-tight text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-brand to-brand-2 text-white shadow-[0_0_24px_-8px_var(--brand)]"
                  : "border border-border text-muted-foreground hover:border-brand/40 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
