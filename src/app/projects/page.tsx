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
    <div className="min-h-screen px-6 pb-20 pt-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading icon={Code2} title="Featured Projects" subtitle="Real-world Python, Django, and AI systems built for production." />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12 flex flex-wrap justify-center gap-3"
        >
          {projectCategories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-2xl px-6 py-3 font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-xl"
                  : "border-2 border-gray-200 bg-white text-gray-700 hover:border-indigo-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-indigo-500/50"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        <motion.div layout className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
