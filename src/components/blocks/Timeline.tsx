"use client";

import { motion } from "motion/react";
import { cn } from "@/components/ui/utils";
import type { ExperienceEntry } from "@/lib/data/experience";

export function Timeline({ items }: { items: ExperienceEntry[] }) {
  return (
    <div className="relative space-y-5 pl-8">
      <div className="absolute bottom-2 left-[7px] top-2 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500" />

      {items.map((item, index) => (
        <motion.div
          key={`${item.year}-${item.title}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.08 }}
          className="relative"
        >
          <motion.div
            whileHover={{ scale: 1.4 }}
            className={cn(
              "absolute left-0 top-5 h-4 w-4 rounded-full border-2 border-white bg-gradient-to-br shadow-lg dark:border-gray-950",
              item.color,
            )}
          />
          <div className="rounded-2xl border border-gray-200 bg-white/80 p-5 shadow-lg backdrop-blur-xl transition-transform hover:-translate-y-0.5 dark:border-gray-800 dark:bg-gray-900/60">
            <div className={cn("mb-2 inline-block rounded-full bg-gradient-to-r px-3 py-1 text-xs font-bold text-white", item.color)}>
              {item.year}
            </div>
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">{item.title}</h3>
            <p className="mb-1 font-semibold text-indigo-600 dark:text-pink-400">{item.company}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
