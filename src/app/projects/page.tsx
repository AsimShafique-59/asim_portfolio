"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { Code2, Layers, Github } from "lucide-react";
import { SectionHeading } from "@/components/blocks/SectionHeading";
import { ProjectCard } from "@/components/blocks/ProjectCard";
import { projects, projectCategories } from "@/lib/data/projects";

const stats = [
  { icon: Layers, value: `${projects.length}+`, label: "Shipped Projects" },
  { icon: Code2, value: `${projectCategories.length - 1}`, label: "Focus Areas" },
  { icon: Github, value: "Open Source", label: "Code on GitHub" },
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" ? projects : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="px-6 pb-24 pt-10 sm:pt-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid-bg -mx-6 mb-4 rounded-3xl px-6 py-12">
          <SectionHeading icon={Code2} title="Featured Projects" subtitle="Real-world Python, Django, and AI systems built for production." className="mb-0" />
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
