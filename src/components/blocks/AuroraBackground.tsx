"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import { cn } from "@/components/ui/utils";

const blobs = [
  { className: "left-[-10%] top-[-10%] bg-glow-2/30", size: 520, duration: 22 },
  { className: "right-[-15%] top-[10%] bg-glow-1/25", size: 460, duration: 26 },
  { className: "bottom-[-15%] left-[20%] bg-glow-3/20", size: 420, duration: 30 },
];

export function AuroraBackground({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const glowX = useTransform(sx, (v) => `${v * 100}%`);
  const glowY = useTransform(sy, (v) => `${v * 100}%`);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  }

  return (
    <div onMouseMove={handleMouseMove} className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className="grid-bg absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className={cn("absolute rounded-full blur-3xl", blob.className)}
          style={{ width: blob.size, height: blob.size }}
          animate={
            reduceMotion
              ? undefined
              : { x: [0, 30, -20, 0], y: [0, -20, 20, 0] }
          }
          transition={{ duration: blob.duration, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {!reduceMotion && (
        <motion.div
          className="absolute h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40"
          style={{
            left: glowX,
            top: glowY,
            background: "radial-gradient(circle, color-mix(in srgb, var(--brand) 25%, transparent) 0%, transparent 70%)",
          }}
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
    </div>
  );
}
