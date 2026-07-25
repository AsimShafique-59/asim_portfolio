"use client";

import { useState } from "react";
import { motion } from "motion/react";
import type { Skill } from "@/lib/data/skills";

export function SkillBar({ skill, delay = 0 }: { skill: Skill; delay?: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.3 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <span className="text-xs font-medium text-brand">{skill.level}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: delay + 0.2 }}
          className="h-full rounded-full bg-gradient-to-r from-brand to-brand-2"
        />
      </div>
      <motion.p
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: hovered ? "auto" : 0, opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="mt-2 overflow-hidden text-sm text-muted-foreground"
      >
        {skill.description}
      </motion.p>
    </motion.div>
  );
}
