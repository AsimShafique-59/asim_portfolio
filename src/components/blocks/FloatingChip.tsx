"use client";

import { motion, useReducedMotion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/components/ui/utils";

type FloatingChipProps = {
  icon: LucideIcon;
  label: string;
  className?: string;
  duration?: number;
  delay?: number;
};

export function FloatingChip({ icon: Icon, label, className, duration = 5, delay = 0 }: FloatingChipProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={
        reduceMotion
          ? { opacity: 1, y: 0 }
          : { opacity: 1, y: [0, -8, 0] }
      }
      transition={reduceMotion ? { duration: 0.4, delay } : { y: { duration, repeat: Infinity, ease: "easeInOut", delay }, opacity: { duration: 0.4, delay } }}
      className={cn(
        "absolute z-20 hidden items-center gap-2 rounded-full border border-border/60 bg-card/90 px-3.5 py-2 text-xs font-medium text-foreground shadow-lg shadow-black/10 backdrop-blur-xl lg:flex",
        className,
      )}
    >
      <Icon className="h-3.5 w-3.5 text-brand" />
      {label}
    </motion.div>
  );
}
