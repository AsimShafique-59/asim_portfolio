"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import { cn } from "@/components/ui/utils";

export function Card({ className, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div
      className={cn("rounded-xl border border-border bg-card p-6 transition-colors duration-200 hover:border-foreground/20", className)}
      {...props}
    />
  );
}
