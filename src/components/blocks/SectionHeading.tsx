"use client";

import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/components/ui/utils";

type SectionHeadingProps = {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  size?: "lg" | "md";
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2";
};

export function SectionHeading({ icon: Icon, title, subtitle, size = "lg", align = "center", className, as = "h2" }: SectionHeadingProps) {
  const centered = align === "center";
  const HeadingTag = as;

  if (size === "md") {
    return (
      <div className={cn("mb-8 flex items-center gap-3", centered && "justify-center", className)}>
        <Icon className="h-4 w-4 shrink-0 text-muted-foreground" />
        <HeadingTag className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">{title}</HeadingTag>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={cn("mb-14", centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl", className)}
    >
      <Icon className={cn("mb-4 h-5 w-5 text-muted-foreground", centered && "mx-auto")} />
      <HeadingTag className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">{title}</HeadingTag>
      {subtitle && <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>}
    </motion.div>
  );
}
