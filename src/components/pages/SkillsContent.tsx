"use client";

import { Cpu, Code2, Database, Box, GitBranch } from "lucide-react";
import { SectionHeading } from "@/components/blocks/SectionHeading";
import { SkillCard } from "@/components/blocks/SkillCard";
import { allSkills } from "@/lib/data/skills";

const overviewStats = [
  { icon: Code2, label: "Languages Mastered", value: "3+" },
  { icon: Box, label: "Frameworks", value: "10+" },
  { icon: Database, label: "Database Systems", value: "6+" },
  { icon: GitBranch, label: "Years Experience", value: "2+" },
];

export default function SkillsContent() {
  return (
    <div className="px-6 pb-24 pt-10 sm:pt-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid-bg -mx-6 mb-4 rounded-3xl px-6 py-12">
          <SectionHeading
            as="h1"
            icon={Cpu}
            title="Python, Django & AI Skills"
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

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {allSkills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              level={skill.level}
              icon={skill.icon}
              iconColor={skill.iconColor}
              color={skill.categoryColor}
              delay={(index % 8) * 0.04}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
