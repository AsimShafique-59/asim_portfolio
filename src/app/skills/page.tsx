"use client";

import { Cpu, Code2, Database, Box, GitBranch } from "lucide-react";
import { Card } from "@/components/blocks/Card";
import { SectionHeading } from "@/components/blocks/SectionHeading";
import { SkillBar } from "@/components/blocks/SkillBar";
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
      <div className="mx-auto max-w-7xl">
        <div className="grid-bg -mx-6 mb-4 rounded-3xl px-6 py-12">
          <SectionHeading
            icon={Cpu}
            title="Python & AI Stack"
            subtitle="Technical expertise and tooling used to build backend and AI systems."
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
                <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-gradient-to-br from-brand/10 to-brand-2/10 text-brand">
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
      </div>
    </div>
  );
}
