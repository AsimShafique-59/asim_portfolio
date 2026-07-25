"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import { cn } from "@/components/ui/utils";

export function Card({ className, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div
      className={cn(
        "rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:border-brand/40 hover:shadow-[0_0_40px_-16px_var(--brand)]",
        className,
      )}
      {...props}
    />
  );
}
