"use client";

import { Cpu, Code2, Database, Box, GitBranch } from "lucide-react";
import { GlassCard } from "@/components/blocks/GlassCard";
import { SectionHeading } from "@/components/blocks/SectionHeading";
import { SkillBar } from "@/components/blocks/SkillBar";
import { StatCard } from "@/components/blocks/StatCard";
import { skillCategories } from "@/lib/data/skills";

const overviewStats = [
  { icon: Code2, label: "Languages Mastered", value: "3+", color: "from-blue-500 to-cyan-500" },
  { icon: Box, label: "Frameworks", value: "10+", color: "from-purple-500 to-pink-500" },
  { icon: Database, label: "Database Systems", value: "6+", color: "from-indigo-500 to-purple-500" },
  { icon: GitBranch, label: "Years Experience", value: "2+", color: "from-emerald-500 to-teal-500" },
];

export default function SkillsPage() {
  return (
    <div className="min-h-screen px-6 pb-20 pt-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          icon={Cpu}
          title="Python & AI Stack"
          subtitle="Technical expertise and tooling used to build backend and AI systems."
          gradient="from-purple-600 via-pink-600 to-rose-600"
          iconAnimation="spin"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <GlassCard
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <div className="mb-6 flex items-center gap-3">
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${category.color} shadow-lg`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar key={skill.name} skill={skill} color={category.color} delay={categoryIndex * 0.1 + skillIndex * 0.05} />
                ))}
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-4">
          {overviewStats.map((stat) => (
            <StatCard key={stat.label} icon={stat.icon} value={stat.value} label={stat.label} color={stat.color} />
          ))}
        </div>
      </div>
    </div>
  );
}
