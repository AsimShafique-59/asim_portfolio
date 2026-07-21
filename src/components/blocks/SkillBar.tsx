"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/components/ui/utils";
import type { Skill } from "@/lib/data/skills";

export function SkillBar({ skill, color, delay = 0 }: { skill: Skill; color: string; delay?: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative"
    >
      <div className="mb-2 flex items-center justify-between">
        <span className="font-semibold text-gray-800 dark:text-gray-100">{skill.name}</span>
        <motion.span
          animate={{ opacity: hovered ? 1 : 0 }}
          className={cn("bg-gradient-to-r bg-clip-text text-sm font-bold text-transparent", color)}
        >
          {skill.level}%
        </motion.span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: delay + 0.3 }}
          className={cn("relative h-full bg-gradient-to-r", color)}
        >
          {hovered && (
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-white shadow-lg"
            />
          )}
        </motion.div>
      </div>
      <motion.p
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: hovered ? "auto" : 0, opacity: hovered ? 1 : 0 }}
        className="mt-2 overflow-hidden text-sm text-gray-600 dark:text-gray-400"
      >
        {skill.description}
      </motion.p>
    </motion.div>
  );
}
