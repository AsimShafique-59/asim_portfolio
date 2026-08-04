"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/components/ui/utils";
import type { Project } from "@/lib/data/projects";

export function ProjectShowcaseCard({ project, index = 0 }: { project: Project; index?: number }) {
  const Icon = project.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: Math.min(index, 5) * 0.06, duration: 0.4 }}
    >
      <Link href={`/projects/${project.slug}`} className="group block">
        <div
          className={cn(
            "flex aspect-video items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br transition-transform duration-300 group-hover:scale-[1.01]",
            project.color,
          )}
        >
          <Icon className="h-16 w-16 text-white/90" strokeWidth={1.25} />
        </div>
        <div className="mt-4 flex items-center gap-2">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-transform group-hover:rotate-45">
            <ArrowUpRight className="h-4 w-4" />
          </span>
          <span className="font-medium text-foreground">{project.title}</span>
        </div>
      </Link>
    </motion.div>
  );
}
