"use client";

import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/components/ui/utils";

type SectionHeadingProps = {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  gradient?: string;
  iconAnimation?: "spin" | "pulse" | "none";
  variant?: "hero" | "inline";
  className?: string;
};

const iconAnimations = {
  spin: { rotate: [0, 360], scale: [1, 1.1, 1] },
  pulse: { scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] },
  none: {},
};

export function SectionHeading({
  icon: Icon,
  title,
  subtitle,
  gradient = "from-indigo-600 via-purple-600 to-pink-600",
  iconAnimation = "none",
  variant = "hero",
  className,
}: SectionHeadingProps) {
  if (variant === "inline") {
    return (
      <h2 className={cn("flex items-center justify-center gap-3 text-3xl font-bold", className)}>
        <Icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
        <span className={cn("bg-gradient-to-r bg-clip-text text-transparent", gradient)}>{title}</span>
      </h2>
    );
  }

  return (
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className={cn("mb-16 text-center", className)}>
      <motion.div
        animate={iconAnimations[iconAnimation]}
        transition={{ duration: 3, repeat: iconAnimation === "none" ? 0 : Infinity, ease: "easeInOut" }}
        className={cn("mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br shadow-2xl", gradient)}
      >
        <Icon className="h-10 w-10 text-white" />
      </motion.div>
      <h1 className="mb-4 text-5xl font-bold md:text-6xl">
        <span className={cn("bg-gradient-to-r bg-clip-text text-transparent", gradient)}>{title}</span>
      </h1>
      {subtitle && <p className="mx-auto max-w-2xl text-xl text-gray-600 dark:text-gray-400">{subtitle}</p>}
    </motion.div>
  );
}
