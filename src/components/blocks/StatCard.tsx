"use client";

import type { LucideIcon } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { cn } from "@/components/ui/utils";

type StatCardProps = {
  icon?: LucideIcon;
  value: string;
  label: string;
  color: string;
  delay?: number;
};

export function StatCard({ icon: Icon, value, label, color, delay = 0 }: StatCardProps) {
  return (
    <GlassCard
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ y: -10, scale: 1.05 }}
      className="p-8 text-center"
    >
      {Icon && (
        <div className={cn("mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg", color)}>
          <Icon className="h-8 w-8 text-white" />
        </div>
      )}
      <div className={cn("mb-2 bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent", color)}>{value}</div>
      <div className="font-medium text-gray-600 dark:text-gray-400">{label}</div>
    </GlassCard>
  );
}
