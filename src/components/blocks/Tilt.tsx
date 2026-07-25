"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform, type MotionValue } from "motion/react";
import type { ReactNode } from "react";

export function Tilt({
  children,
  className,
  intensity = 10,
  perspective = 900,
}: {
  children: ReactNode | ((tilt: { rotateX: MotionValue<number>; rotateY: MotionValue<number> }) => ReactNode);
  className?: string;
  intensity?: number;
  perspective?: number;
}) {
  const reduceMotion = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 150, damping: 18, mass: 0.4 });
  const sy = useSpring(my, { stiffness: 150, damping: 18, mass: 0.4 });
  const rotateX = useTransform(sy, [-0.5, 0.5], [intensity, -intensity]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-intensity, intensity]);

  function updateFromPoint(clientX: number, clientY: number, rect: DOMRect) {
    mx.set((clientX - rect.left) / rect.width - 0.5);
    my.set((clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduceMotion) return;
    updateFromPoint(e.clientX, e.clientY, e.currentTarget.getBoundingClientRect());
  }

  function handleTouchMove(e: React.TouchEvent<HTMLDivElement>) {
    if (reduceMotion || !e.touches[0]) return;
    updateFromPoint(e.touches[0].clientX, e.touches[0].clientY, e.currentTarget.getBoundingClientRect());
  }

  function handleLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleLeave}
      style={{ perspective }}
      className={className}
    >
      <motion.div
        style={{
          rotateX: reduceMotion ? 0 : rotateX,
          rotateY: reduceMotion ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative h-full w-full"
      >
        {typeof children === "function" ? children({ rotateX, rotateY }) : children}
      </motion.div>
    </div>
  );
}
