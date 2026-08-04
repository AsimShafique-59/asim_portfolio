"use client";

import { Cpu, Code2, Database, Box, GitBranch } from "lucide-react";
import { SectionHeading } from "@/components/blocks/SectionHeading";
import { SkillCategoryCard } from "@/components/blocks/SkillCategoryCard";
import { skillCategories } from "@/lib/data/skills";

const overviewStats = [
  { icon: Code2, label: "Languages Mastered", value: "3+" },
  { icon: Box, label: "Frameworks", value: "10+" },
  { icon: Database, label: "Database Systems", value: "6+" },
  { icon: GitBranch, label: "Years Experience", value: "2+" },
];

const categoryDescriptions: Record<string, string> = {
  "Python Backend": "Django, DRF, and FastAPI services built for production reliability and scale.",
  "Generative AI & LLMs": "LangChain, LangGraph, and agentic RAG systems for real product workflows.",
  "Data & Vector Databases": "PostgreSQL, MongoDB, and vector stores powering retrieval and analytics.",
  "Cloud & MLOps": "Docker, AWS, and CI/CD pipelines that keep deployments fast and reliable.",
  "Engineering Tooling": "The daily tools and workflows that keep delivery fast and dependable.",
  "Architecture & Leadership": "Clean, scalable API design with clear service boundaries and strong data models.",
};

const bentoSpans: Record<string, string> = {
  "Python Backend": "sm:col-span-2 sm:row-span-2",
  "Generative AI & LLMs": "sm:col-span-2",
  "Data & Vector Databases": "sm:col-span-1",
  "Cloud & MLOps": "sm:col-span-1",
  "Engineering Tooling": "sm:col-span-2",
  "Architecture & Leadership": "sm:col-span-2",
};

export default function SkillsContent() {
  return (
    <div className="px-6 pb-24 pt-10 sm:pt-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid-bg -mx-6 mb-14 rounded-3xl px-6 py-16">
          <SectionHeading
            as="h1"
            icon={Cpu}
            title="Skills that fuel my passion"
            subtitle="Technical expertise and tooling used to build backend and AI systems as a developer in Pakistan."
            className="mb-0"
          />
        </div>

        <div className="mb-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
          {overviewStats.map((stat) => (
            <div key={stat.label} className="bg-card p-6 text-center">
              <stat.icon className="mx-auto mb-3 h-5 w-5 text-brand" />
              <div className="text-3xl font-extrabold tracking-tight text-foreground">{stat.value}</div>
              <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:auto-rows-[minmax(150px,auto)] sm:grid-cols-4">
          {skillCategories.map((category, index) => (
            <SkillCategoryCard
              key={category.title}
              category={category}
              description={categoryDescriptions[category.title] ?? category.skills[0]?.description}
              className={bentoSpans[category.title]}
              delay={index * 0.05}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
