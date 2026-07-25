"use client";

import { Cpu, Code2, Database, Box, GitBranch } from "lucide-react";
import { Card } from "@/components/blocks/Card";
import { SectionHeading } from "@/components/blocks/SectionHeading";
import { SkillBar } from "@/components/blocks/SkillBar";
import { StatCard } from "@/components/blocks/StatCard";
import { skillCategories } from "@/lib/data/skills";

const overviewStats = [
  { icon: Code2, label: "Languages Mastered", value: "3+" },
  { icon: Box, label: "Frameworks", value: "10+" },
  { icon: Database, label: "Database Systems", value: "6+" },
  { icon: GitBranch, label: "Years Experience", value: "2+" },
];

export default function SkillsPage() {
  return (
    <div className="px-6 pb-24 pt-10 sm:pt-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading icon={Cpu} title="Python & AI Stack" subtitle="Technical expertise and tooling used to build backend and AI systems." />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={category.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.06, duration: 0.4 }}
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-border text-foreground">
                  <category.icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-extrabold tracking-tight text-foreground">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar key={skill.name} skill={skill} delay={categoryIndex * 0.05 + skillIndex * 0.03} />
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-4">
          {overviewStats.map((stat) => (
            <StatCard key={stat.label} icon={stat.icon} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </div>
  );
}
