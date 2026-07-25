"use client";

import { motion, useReducedMotion } from "motion/react";

export function HeroPhoto() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <motion.img
        src="/profile.png"
        alt="Asim Shafique"
        animate={reduceMotion ? undefined : { scale: [1, 1.06, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="h-full w-full object-cover object-[68%_18%]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
    </div>
  );
}
