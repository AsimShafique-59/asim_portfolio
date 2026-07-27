"use client";

import { motion } from "motion/react";
import { cn } from "@/components/ui/utils";
import type { IconComponent } from "@/lib/data/skills";

export function SkillCard({
  name,
  level,
  icon: Icon,
  iconColor,
  color,
  delay = 0,
}: {
  name: string;
  level: number;
  icon: IconComponent;
  iconColor: string | null;
  color: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.35 }}
      className="flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center transition-colors hover:border-brand/40"
    >
      <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-secondary/60">
        <Icon className={cn("h-7 w-7", !iconColor && "text-foreground")} color={iconColor ?? undefined} />
      </span>
      <div className="mb-2 flex w-full items-center justify-between text-xs">
        <span className="font-semibold text-foreground">{name}</span>
        <span className="font-medium text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: delay + 0.15 }}
          className={cn("h-full rounded-full bg-gradient-to-r", color)}
        />
      </div>
    </motion.div>
  );
}
