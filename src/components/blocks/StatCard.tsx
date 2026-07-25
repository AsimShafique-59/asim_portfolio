"use client";

import type { LucideIcon } from "lucide-react";
import { Card } from "./Card";

type StatCardProps = {
  icon?: LucideIcon;
  value: string;
  label: string;
  delay?: number;
};

export function StatCard({ icon: Icon, value, label, delay = 0 }: StatCardProps) {
  return (
    <Card
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      className="p-8 text-center"
    >
      {Icon && (
        <span className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-gradient-to-br from-brand/10 to-brand-2/10 text-brand">
          <Icon className="h-5 w-5" />
        </span>
      )}
      <div className="bg-gradient-to-r from-brand to-brand-2 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent">{value}</div>
      <div className="mt-2 text-sm text-muted-foreground">{label}</div>
    </Card>
  );
}
