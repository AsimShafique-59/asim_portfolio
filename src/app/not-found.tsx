"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Home, Search, AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6 py-24">
      <div className="mx-auto max-w-xl text-center">
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-border"
        >
          <AlertCircle className="h-7 w-7 text-foreground" />
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.4 }}
          className="mb-4 text-7xl font-extrabold tracking-tight text-foreground md:text-8xl"
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="mb-4 text-2xl font-semibold text-foreground"
        >
          Page Not Found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="mb-8 text-muted-foreground"
        >
          Oops! The page you&apos;re looking for seems to have gone on a coffee break.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/"
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-2 shadow-[0_0_30px_-8px_var(--brand)] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
          <Link
            href="/projects"
            className="flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            <Search className="h-4 w-4" />
            Explore Projects
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
