"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Home, Search, AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6 pb-20 pt-32">
      <div className="mx-auto max-w-2xl text-center">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", duration: 0.6 }} className="mb-8">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-rose-600 shadow-2xl"
          >
            <AlertCircle className="h-16 w-16 text-white" />
          </motion.div>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-4 text-8xl font-bold md:text-9xl">
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">404</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-4 text-3xl font-bold text-gray-800 dark:text-gray-100 md:text-4xl"
        >
          Page Not Found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 text-lg text-gray-600 dark:text-gray-400"
        >
          Oops! The page you&apos;re looking for seems to have gone on a coffee break.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link href="/">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-xl"
            >
              <Home className="h-5 w-5" />
              Back to Home
            </motion.span>
          </Link>
          <Link href="/projects">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-2xl border-2 border-indigo-600 bg-white px-8 py-4 font-semibold text-indigo-600 shadow-lg dark:bg-gray-900 dark:text-indigo-400"
            >
              <Search className="h-5 w-5" />
              Explore Projects
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
