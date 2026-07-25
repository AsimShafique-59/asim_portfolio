"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { Code2 } from "lucide-react";
import { SectionHeading } from "@/components/blocks/SectionHeading";
import { ProjectCard } from "@/components/blocks/ProjectCard";
import { projects, projectCategories } from "@/lib/data/projects";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" ? projects : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="px-6 pb-24 pt-16 sm:pt-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading icon={Code2} title="Featured Projects" subtitle="Real-world Python, Django, and AI systems built for production." />

        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                selectedCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground"
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
