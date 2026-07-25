// This route is intentionally unlinked from the nav (see Header.tsx) and Home page per current request.
// The page itself still renders at /resume if visited directly — remove this file entirely if it's no longer needed.
"use client";

import { motion } from "motion/react";
import { Briefcase, GraduationCap, Code2, Award } from "lucide-react";
import { Card } from "@/components/blocks/Card";
import { experience } from "@/lib/data/experience";

const skills = ["Python", "Django", "DRF", "FastAPI", "LangChain", "LangGraph", "CrewAI", "PostgreSQL", "Docker", "AWS"];

export default function ResumePage() {
  return (
    <div className="px-6 pb-24 pt-16 sm:pt-24">
      <div className="mx-auto max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="mb-10 text-center">
          <h1 className="mb-3 font-serif text-5xl font-semibold text-foreground md:text-6xl">Resume</h1>
          <p className="text-lg text-muted-foreground">Asim Shafique — Python, DRF &amp; Generative AI Engineer</p>
        </motion.div>

        <div className="grid gap-6">
          <Card initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05, duration: 0.4 }} className="p-8">
            <h2 className="mb-5 flex items-center gap-2 font-serif text-xl font-semibold text-foreground">
              <Briefcase className="h-5 w-5 text-muted-foreground" />
              Experience
            </h2>
            <div className="space-y-4">
              {experience.map((job) => (
                <div key={`${job.title}-${job.company}`} className="rounded-lg border border-border p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold text-foreground">{job.title}</h3>
                    <span className="rounded-full border border-border px-3 py-1 text-sm font-medium text-muted-foreground">{job.year}</span>
                  </div>
                  <p className="font-medium text-brand">{job.company}</p>
                  <p className="mt-2 text-muted-foreground">{job.description}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.4 }} className="p-8">
            <h2 className="mb-5 flex items-center gap-2 font-serif text-xl font-semibold text-foreground">
              <Code2 className="h-5 w-5 text-muted-foreground" />
              Skills
            </h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span key={skill} className="rounded-full border border-border bg-secondary px-4 py-2 font-medium text-secondary-foreground">
                  {skill}
                </span>
              ))}
            </div>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.4 }} className="p-8">
              <h2 className="mb-4 flex items-center gap-2 font-serif text-xl font-semibold text-foreground">
                <GraduationCap className="h-5 w-5 text-muted-foreground" />
                Education
              </h2>
              <p className="font-semibold text-foreground">Qualifi Level 5 Diploma in Information Technology</p>
              <p className="text-muted-foreground">Qualifi (UK Accredited) — 2025</p>
            </Card>

            <Card initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.4 }} className="p-8">
              <h2 className="mb-4 flex items-center gap-2 font-serif text-xl font-semibold text-foreground">
                <Award className="h-5 w-5 text-muted-foreground" />
                Contact
              </h2>
              <p className="text-foreground">asimshafique59@gmail.com</p>
              <p className="text-foreground">+92 325 415 5556</p>
              <p className="text-foreground">github.com/AsimShafique-59</p>
              <p className="text-foreground">linkedin.com/in/muhammad-asim-shafique-0581411aa</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
