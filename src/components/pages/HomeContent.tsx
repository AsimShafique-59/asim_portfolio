"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Bot, Database, Zap } from "lucide-react";
import { AuroraBackground } from "@/components/blocks/AuroraBackground";
import { HeroMockup } from "@/components/blocks/HeroMockup";
import { FloatingChip } from "@/components/blocks/FloatingChip";
import { ProjectShowcaseCard } from "@/components/blocks/ProjectShowcaseCard";
import { projects } from "@/lib/data/projects";
import { contactMethods } from "@/lib/data/contact";

const showcaseProjects = projects.slice(0, 4);
const emailLink = contactMethods.find((m) => m.title === "Email")?.link ?? "mailto:asimshafique59@gmail.com";

export default function HomeContent() {
  return (
    <div className="px-6 pb-24 pt-10 sm:pt-16">
      <div className="mx-auto max-w-7xl">
        {/* Hero Section */}
        <div className="relative mb-24 -mx-6 overflow-hidden rounded-3xl border border-border/60 px-6 py-16 sm:px-10 sm:py-24">
          <AuroraBackground />

          <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/70 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-xl"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Available for AI &amp; backend engineering work
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="text-5xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
              >
                Building AI systems that{" "}
                <span className="bg-gradient-to-r from-brand to-brand-2 bg-clip-text text-transparent">think, automate,</span> and scale.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
              >
                I design and ship production-grade AI systems, RAG pipelines, autonomous agents, and LLM-powered automation, on top of
                reliable Django and FastAPI backends, vector databases, and cloud infrastructure.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="mt-9 flex flex-wrap items-center gap-4"
              >
                <Link
                  href="#impressive-works"
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-lg shadow-brand/25 transition-transform hover:scale-105"
                >
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={emailLink}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  Book a Call
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </motion.div>
            </div>

            <div className="relative">
              <FloatingChip icon={Bot} label="Agent running" className="-left-4 -top-6" duration={5} />
              <FloatingChip icon={Database} label="RAG indexed" className="-right-6 top-1/2 -translate-y-1/2" duration={6} delay={0.5} />
              <FloatingChip icon={Zap} label="94ms latency" className="-bottom-6 left-10" duration={5.5} delay={1} />

              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <HeroMockup />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Intro */}
        <div className="mb-24 grid gap-8 sm:grid-cols-2">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-2xl font-medium leading-snug tracking-tight text-foreground sm:text-3xl"
          >
            Driven by curiosity and a love for backend engineering, I build scalable, production-grade systems. I&apos;m always learning
            and exploring new ideas in AI.
          </motion.p>

          <div className="flex flex-col items-start gap-4 sm:items-end sm:text-right">
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              The fusion of clean backend architecture and generative AI places me at the intersection of reliability and innovation in
              modern software.
            </p>
            <Link href="/about" className="inline-flex items-center gap-1 text-sm font-medium text-foreground transition-all hover:gap-2">
              More about me
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Impressive Works */}
        <div id="impressive-works" className="mb-16 scroll-mt-24">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Impressive Works</h2>
            <p className="max-w-xs text-xs uppercase leading-relaxed tracking-wide text-muted-foreground sm:text-right">
              Here&apos;s a selection of projects that showcase my passion for backend engineering and AI, reflecting reliability and
              innovation.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {showcaseProjects.map((project, index) => (
              <ProjectShowcaseCard key={project.slug} project={project} index={index} />
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Explore more
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
