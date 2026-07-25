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
      {Icon && <Icon className="mx-auto mb-4 h-5 w-5 text-muted-foreground" />}
      <div className="text-4xl font-extrabold tracking-tight text-foreground">{value}</div>
      <div className="mt-2 text-sm text-muted-foreground">{label}</div>
    </Card>
  );
}
