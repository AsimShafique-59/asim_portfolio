// This route is intentionally unlinked from the nav (see Header.tsx) and Home page per current request.
// The page itself still renders at /resume if visited directly — remove this file entirely if it's no longer needed.
"use client";

import { motion } from "motion/react";
import { Briefcase, GraduationCap, Code2, Award } from "lucide-react";
import { GlassCard } from "@/components/blocks/GlassCard";
import { experience } from "@/lib/data/experience";

const skills = ["Python", "Django", "DRF", "FastAPI", "LangChain", "LangGraph", "CrewAI", "PostgreSQL", "Docker", "AWS"];

export default function ResumePage() {
  return (
    <div className="min-h-screen px-6 pb-20 pt-32">
      <div className="mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10 text-center">
          <h1 className="mb-3 text-5xl font-bold md:text-6xl">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Resume</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">Asim Shafique — Python, DRF &amp; Generative AI Engineer</p>
        </motion.div>

        <div className="grid gap-6">
          <GlassCard initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="p-8">
            <h2 className="mb-5 flex items-center gap-2 text-2xl font-bold text-gray-800 dark:text-gray-100">
              <Briefcase className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              Experience
            </h2>
            <div className="space-y-4">
              {experience.map((job) => (
                <div key={`${job.title}-${job.company}`} className="rounded-2xl border border-gray-200 p-5 dark:border-gray-800">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{job.title}</h3>
                    <span className="rounded-full bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300">
                      {job.year}
                    </span>
                  </div>
                  <p className="font-medium text-purple-600 dark:text-purple-400">{job.company}</p>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">{job.description}</p>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="p-8">
            <h2 className="mb-5 flex items-center gap-2 text-2xl font-bold text-gray-800 dark:text-gray-100">
              <Code2 className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              Skills
            </h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-indigo-100 bg-gradient-to-r from-indigo-50 to-pink-50 px-4 py-2 font-medium text-gray-700 dark:border-indigo-500/20 dark:from-indigo-500/10 dark:to-pink-500/10 dark:text-gray-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </GlassCard>

          <div className="grid gap-6 md:grid-cols-2">
            <GlassCard initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="p-8">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-gray-800 dark:text-gray-100">
                <GraduationCap className="h-6 w-6 text-pink-600 dark:text-pink-400" />
                Education
              </h2>
              <p className="font-semibold text-gray-800 dark:text-gray-100">Qualifi Level 5 Diploma in Information Technology</p>
              <p className="text-gray-600 dark:text-gray-400">Qualifi (UK Accredited) — 2025</p>
            </GlassCard>

            <GlassCard initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="p-8">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-gray-800 dark:text-gray-100">
                <Award className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                Contact
              </h2>
              <p className="text-gray-700 dark:text-gray-300">asimshafique59@gmail.com</p>
              <p className="text-gray-700 dark:text-gray-300">+92 325 415 5556</p>
              <p className="text-gray-700 dark:text-gray-300">github.com/AsimShafique-59</p>
              <p className="text-gray-700 dark:text-gray-300">linkedin.com/in/muhammad-asim-shafique-0581411aa</p>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}
