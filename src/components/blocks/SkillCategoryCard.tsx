"use client";

import { motion } from "motion/react";
import { cn } from "@/components/ui/utils";
import type { SkillCategory } from "@/lib/data/skills";

export function SkillCategoryCard({
  category,
  description,
  className,
  delay = 0,
}: {
  category: SkillCategory;
  description: string;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.35 }}
      className={cn(
        "flex flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-colors hover:border-brand/40",
        className,
      )}
    >
      <div className="mb-4 flex flex-wrap gap-2">
        {category.skills.slice(0, 5).map((skill) => (
          <span
            key={skill.name}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary/60"
          >
            <skill.icon className="h-4 w-4" color={skill.iconColor ?? undefined} />
          </span>
        ))}
      </div>
      <div>
        <h3 className="font-semibold text-foreground">{category.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
}
