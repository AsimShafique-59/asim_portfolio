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

const emojis = [
  { emoji: "🐍", top: "0%", left: "42%", z: 130, duration: 4.5 },
  { emoji: "🚀", top: "40%", left: "0%", z: 110, duration: 5 },
  { emoji: "⚡", top: "42%", left: "92%", z: 120, duration: 4.2 },
  { emoji: "🤖", top: "88%", left: "44%", z: 100, duration: 4.8 },
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
        className="absolute left-2 top-4 h-52 w-52 rounded-full bg-glow-1/25 blur-3xl"
      />
      <motion.div
        style={{ transform: "translateZ(-130px)" }}
        animate={reduceMotion ? undefined : { x: [0, -18, 0], y: [0, 16, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-0 top-1/3 h-48 w-48 rounded-full bg-glow-2/25 blur-3xl"
      />
      <motion.div
        style={{ transform: "translateZ(-140px)" }}
        animate={reduceMotion ? undefined : { x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-4 right-6 h-52 w-52 rounded-full bg-glow-3/25 blur-3xl"
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
        <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-glow-1 via-glow-2 to-glow-3 shadow-lg">
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

      {/* Floating emoji accents, matched to Asim's stack */}
      {emojis.map(({ emoji, top, left, z, duration }, index) => (
        <div key={emoji} style={{ position: "absolute", top, left, transform: `translateZ(${z}px)` }}>
          <motion.span
            animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
            transition={{ duration, repeat: Infinity, ease: "easeInOut", delay: index * 0.25 }}
            className="block text-2xl drop-shadow-lg"
          >
            {emoji}
          </motion.span>
        </div>
      ))}
    </Tilt>
  );
}
