"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import { cn } from "@/components/ui/utils";

export function GlassCard({ className, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div
      className={cn(
        "rounded-3xl border border-gray-200 bg-white/80 p-6 shadow-xl backdrop-blur-xl dark:border-gray-800 dark:bg-gray-900/60",
        className,
      )}
      {...props}
    />
  );
}
