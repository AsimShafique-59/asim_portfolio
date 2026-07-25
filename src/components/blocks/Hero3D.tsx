"use client";

import { motion, useReducedMotion } from "motion/react";
import { Code2, Brain, Cpu, Zap, Database } from "lucide-react";
import { Tilt } from "./Tilt";

const chips = [
  { Icon: Brain, top: "6%", left: "10%", z: 90, tone: "brand" as const, duration: 3.2 },
  { Icon: Cpu, top: "12%", left: "76%", z: 60, tone: "brand-2" as const, duration: 3.8 },
  { Icon: Zap, top: "70%", left: "80%", z: 100, tone: "brand" as const, duration: 3.4 },
  { Icon: Database, top: "74%", left: "8%", z: 70, tone: "brand-2" as const, duration: 4 },
];

export function Hero3D() {
  const reduceMotion = useReducedMotion();

  return (
    <Tilt intensity={12} className="relative aspect-square w-full">
      {/* Ambient glow blobs, sit behind the scene */}
      <motion.div
        style={{ transform: "translateZ(-120px)" }}
        animate={reduceMotion ? undefined : { x: [0, 24, 0], y: [0, -16, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-4 top-6 h-56 w-56 rounded-full bg-brand/25 blur-3xl"
      />
      <motion.div
        style={{ transform: "translateZ(-140px)" }}
        animate={reduceMotion ? undefined : { x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 right-4 h-56 w-56 rounded-full bg-brand-2/25 blur-3xl"
      />

      {/* Slow-rotating dashed ring for depth */}
      <motion.div
        style={{ transform: "translateZ(10px)" }}
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute inset-10 rounded-full border border-dashed border-border"
      />

      {/* Central panel */}
      <div
        style={{ transform: "translateZ(60px)" }}
        className="absolute inset-16 flex items-center justify-center rounded-[2rem] border border-border bg-card/90 shadow-xl backdrop-blur-sm"
      >
        <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-2 shadow-lg">
          <Code2 className="h-11 w-11 text-white" />
        </div>
      </div>

      {/* Floating icon chips at varying depth */}
      {chips.map(({ Icon, top, left, z, tone, duration }, index) => (
        <div key={index} style={{ position: "absolute", top, left, transform: `translateZ(${z}px)` }}>
          <motion.div
            animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
            transition={{ duration, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
            className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-card shadow-lg"
          >
            <Icon className={tone === "brand" ? "h-6 w-6 text-brand" : "h-6 w-6 text-brand-2"} />
          </motion.div>
        </div>
      ))}
    </Tilt>
  );
}
