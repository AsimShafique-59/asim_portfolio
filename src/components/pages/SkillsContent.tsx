"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { Cpu, Layers, Rocket, Search, ArrowUpRight, Boxes } from "lucide-react";
import { SectionHeading } from "@/components/blocks/SectionHeading";
import { StatCard } from "@/components/blocks/StatCard";
import { AuroraBackground } from "@/components/blocks/AuroraBackground";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { skillCategories, allSkills, type Skill } from "@/lib/data/skills";
import { projects } from "@/lib/data/projects";

const flatSkills = skillCategories.flatMap((category) => category.skills.map((skill) => ({ ...skill, category: category.title })));
const categoryNames = ["All", ...skillCategories.map((c) => c.title)];
const yearsExperience = new Date().getFullYear() - 2024;

const stats = [
  { icon: Cpu, value: `${allSkills.length}+`, label: "Technologies" },
  { icon: Layers, value: `${skillCategories.length}`, label: "Categories" },
  { icon: Boxes, value: `${projects.length}+`, label: "Projects Shipped" },
  { icon: Rocket, value: `${yearsExperience}+`, label: "Years Experience" },
];

function projectsUsingSkill(skillName: string) {
  const needle = skillName.toLowerCase();
  return projects.filter((p) => p.tech.some((tech) => tech.toLowerCase().includes(needle) || needle.includes(tech.toLowerCase())));
}

export default function SkillsContent() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<(Skill & { category: string }) | null>(null);

  const filtered = useMemo(() => {
    return flatSkills.filter((skill) => {
      const matchesCategory = category === "All" || skill.category === category;
      const matchesQuery = query.trim().length === 0 || skill.name.toLowerCase().includes(query.trim().toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  const relatedProjects = selected ? projectsUsingSkill(selected.name) : [];

  return (
    <div className="px-6 pb-24 pt-10 sm:pt-16">
      <div className="mx-auto max-w-7xl">
        <div className="relative -mx-6 mb-14 overflow-hidden rounded-3xl border border-border/60 px-6 py-16">
          <AuroraBackground />
          <SectionHeading
            as="h1"
            icon={Cpu}
            title="A technology ecosystem, not a list"
            subtitle="The AI, backend, and infrastructure tools I use to design and ship production systems. Click any technology to see where it's been used."
            className="relative mb-0"
          />
        </div>

        <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} icon={stat.icon} value={stat.value} label={stat.label} delay={index * 0.06} />
          ))}
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-3">
            {categoryNames.map((name) => (
              <button
                key={name}
                onClick={() => setCategory(name)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  category === name
                    ? "bg-gradient-to-r from-brand to-brand-2 text-white shadow-[0_0_24px_-8px_var(--brand)]"
                    : "border border-border text-muted-foreground hover:border-brand/40 hover:text-foreground"
                }`}
              >
                {name}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search technologies..."
              className="w-full rounded-full border border-border bg-card px-10 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-brand/40"
            />
          </div>
        </div>

        {/* Skill grid */}
        <motion.div layout className="flex flex-wrap gap-3">
          {filtered.map((skill, index) => (
            <motion.button
              key={skill.name}
              layout="position"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(index, 12) * 0.03, duration: 0.3 }}
              whileHover={{ y: -3 }}
              onClick={() => setSelected(skill)}
              className="group flex items-center gap-2.5 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-brand/40 hover:shadow-[0_0_24px_-12px_var(--brand)]"
            >
              <skill.icon className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-brand" color={skill.iconColor ?? undefined} />
              {skill.name}
            </motion.button>
          ))}

          {filtered.length === 0 && <p className="py-10 text-sm text-muted-foreground">No technologies match &quot;{query}&quot;.</p>}
        </motion.div>

        {/* Detail modal */}
        <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
          <DialogContent className="rounded-2xl sm:max-w-md">
            {selected && (
              <>
                <DialogHeader>
                  <span className="mb-2 flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-gradient-to-br from-brand/10 to-brand-2/10 text-brand">
                    <selected.icon className="h-5 w-5" color={selected.iconColor ?? undefined} />
                  </span>
                  <DialogTitle>{selected.name}</DialogTitle>
                  <span className="w-fit rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                    {selected.category}
                  </span>
                  <DialogDescription>{selected.description}</DialogDescription>
                </DialogHeader>

                <div>
                  <h4 className="mb-3 text-xs font-extrabold uppercase tracking-wide text-muted-foreground">Used In</h4>
                  {relatedProjects.length > 0 ? (
                    <div className="space-y-2">
                      {relatedProjects.map((project) => (
                        <Link
                          key={project.slug}
                          href={`/projects/${project.slug}`}
                          className="group flex items-center justify-between gap-2 rounded-lg border border-border px-3.5 py-2.5 text-sm text-foreground transition-colors hover:border-brand/40"
                        >
                          {project.title}
                          <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground transition-colors group-hover:text-brand" />
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground">Core skill applied across projects, not tied to a single shipped case study.</p>
                  )}
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
