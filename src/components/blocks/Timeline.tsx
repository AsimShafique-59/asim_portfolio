"use client";

import { motion } from "motion/react";
import type { ExperienceEntry } from "@/lib/data/experience";

export function Timeline({ items }: { items: ExperienceEntry[] }) {
  return (
    <div className="relative space-y-5 pl-8">
      <div className="absolute bottom-2 left-[7px] top-2 w-px bg-border" />

      {items.map((item, index) => (
        <motion.div
          key={`${item.year}-${item.title}`}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.06, duration: 0.3 }}
          className="relative"
        >
          <div className="absolute left-0 top-5 h-3.5 w-3.5 rounded-full border-2 border-background bg-foreground" />
          <div className="rounded-xl border border-border bg-card p-5">
            <span className="mb-2 inline-block rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
              {item.year}
            </span>
            <h3 className="font-serif text-lg font-semibold text-foreground">{item.title}</h3>
            <p className="mb-1 text-sm font-medium text-brand">{item.company}</p>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
