"use client";

import { motion } from "motion/react";

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <motion.div
        className="absolute left-10 top-20 h-96 w-96 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-3xl dark:from-blue-500/10 dark:to-purple-500/10"
        animate={{ x: [0, 100, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-gradient-to-br from-pink-400/20 to-orange-400/20 blur-3xl dark:from-pink-500/10 dark:to-orange-500/10"
        animate={{ x: [0, -100, 0], y: [0, -50, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-400/20 blur-3xl dark:from-cyan-500/10 dark:to-blue-500/10"
        animate={{ x: [0, 80, 0], y: [0, -80, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
