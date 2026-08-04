"use client";

import { motion } from "motion/react";
import Link from "next/link";
import {
  Award,
  Blocks,
  BookOpen,
  Bot,
  Briefcase,
  Clock,
  Code,
  Compass,
  Cpu,
  Database,
  Layers,
  Mail,
  MapPin,
  Rocket,
  ShieldCheck,
  Sparkles,
  Workflow,
  ArrowRight,
} from "lucide-react";
import { Card } from "@/components/blocks/Card";
import { SectionHeading } from "@/components/blocks/SectionHeading";
import { Timeline } from "@/components/blocks/Timeline";
import { AuroraBackground } from "@/components/blocks/AuroraBackground";
import { HeroMockup } from "@/components/blocks/HeroMockup";
import { StatCard } from "@/components/blocks/StatCard";
import { SkillCategoryCard } from "@/components/blocks/SkillCategoryCard";
import { experience, certifications, certification } from "@/lib/data/experience";
import { skillCategories, allSkills } from "@/lib/data/skills";
import { projects, projectCategories } from "@/lib/data/projects";
import { contactMethods } from "@/lib/data/contact";

const allCertifications = [...certifications, ...certification];
const latestRole = experience[0];
const email = contactMethods.find((m) => m.title === "Email");
const yearsExperience = new Date().getFullYear() - Number(experience[experience.length - 1]?.year ?? new Date().getFullYear());

const quickFacts = [
  { icon: Briefcase, label: "Currently", value: `${latestRole.title} @ ${latestRole.company}` },
  { icon: MapPin, label: "Location", value: "Lahore, Pakistan" },
  { icon: Clock, label: "Availability", value: "Open to remote work worldwide" },
  { icon: Mail, label: "Email", value: email?.value ?? "" },
];

const philosophy = [
  { icon: Compass, title: "Think Architecture First", description: "I focus on scalable system design before writing code." },
  { icon: ShieldCheck, title: "Build Production Ready", description: "Applications should handle real users, failures, monitoring, and growth." },
  { icon: Sparkles, title: "AI With Purpose", description: "I build AI solutions that solve business problems, not just demos." },
  { icon: BookOpen, title: "Continuous Learning", description: "Always exploring new technologies and better engineering practices." },
];

const aiSystems = skillCategories.find((c) => c.title === "Generative AI & LLMs")!;
const aiInfrastructure = skillCategories.find((c) => c.title === "Data & Vector Databases")!;

const architectureFlow = [
  "Client",
  "API Gateway",
  "Django / FastAPI",
  "JWT Authentication",
  "Business Logic",
  "Celery Workers",
  "Redis",
  "PostgreSQL",
  "Cloud Infrastructure",
];

const stats = [
  { icon: Rocket, value: `${yearsExperience}+`, label: "Years Experience" },
  { icon: Layers, value: `${projects.length}+`, label: "Projects Shipped" },
  { icon: Code, value: `${allSkills.length}+`, label: "Technologies" },
  { icon: Blocks, value: `${projectCategories.length - 1}`, label: "Focus Areas" },
];

const currentFocus = [
  { icon: Bot, label: "AI Agents", description: "Autonomous, tool-using agents for real workflows." },
  { icon: Database, label: "RAG Systems", description: "Retrieval pipelines grounded in real knowledge sources." },
  { icon: Workflow, label: "AI Automation", description: "LLM-powered automation replacing manual processes." },
  { icon: Cpu, label: "SaaS Backends", description: "Multi-tenant Django and FastAPI platforms at scale." },
];

const interests = [
  { icon: Code, label: "Python Backend Engineering" },
  { icon: Cpu, label: "Generative AI & LLM Systems" },
  { icon: Sparkles, label: "AI Automation & Integrations" },
  { icon: Rocket, label: "SaaS Product Engineering" },
];

export default function AboutContent() {
  return (
    <div className="px-6 pb-24 pt-10 sm:pt-16">
      <div className="mx-auto max-w-6xl">
        {/* Hero */}
        <div className="relative -mx-6 mb-16 overflow-hidden rounded-3xl border border-border/60 px-6 py-16 sm:px-10 sm:py-20">
          <AuroraBackground />
          <div className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/70 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-xl">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                About Asim
              </span>

              <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                I engineer AI systems that{" "}
                <span className="bg-gradient-to-r from-brand to-brand-2 bg-clip-text text-transparent">think, learn, and scale.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                I&apos;m Asim Shafique, an AI and backend engineer focused on building production-ready AI applications, scalable APIs,
                intelligent automation systems, and modern SaaS platforms &mdash; based in Lahore, Pakistan, working with teams
                worldwide.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-lg shadow-brand/25 transition-transform hover:scale-105"
                >
                  View My Work
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/resume"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  View Resume
                </Link>
              </div>

              <Card className="mt-10 p-5">
                <div className="grid grid-cols-2 gap-4">
                  {quickFacts.map((fact) => (
                    <div key={fact.label} className="flex items-start gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-gradient-to-br from-brand/10 to-brand-2/10 text-brand">
                        <fact.icon className="h-4 w-4" />
                      </span>
                      <div className="min-w-0">
                        <div className="text-xs text-muted-foreground">{fact.label}</div>
                        <div className="truncate text-sm font-medium leading-snug text-foreground">{fact.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 24, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <HeroMockup />
            </motion.div>
          </div>
        </div>

        {/* My Journey */}
        <div className="mb-16">
          <SectionHeading icon={Briefcase} title="My Journey" size="md" className="mb-8" />
          <Timeline items={experience} />
        </div>

        {/* Engineering Philosophy */}
        <div className="mb-16">
          <SectionHeading icon={Compass} title="How I Build Software" size="md" className="mb-8" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {philosophy.map((item, index) => (
              <Card
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                whileHover={{ y: -4 }}
              >
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-gradient-to-br from-brand/10 to-brand-2/10 text-brand">
                  <item.icon className="h-5 w-5" />
                </span>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* AI Engineering Stack */}
        <div className="mb-16">
          <SectionHeading icon={Sparkles} title="My AI Engineering Stack" size="md" className="mb-8" />
          <div className="grid gap-6 md:grid-cols-2">
            <SkillCategoryCard category={aiSystems} description="Orchestration, agent workflows, and retrieval-augmented generation for production LLM apps." />
            <SkillCategoryCard category={aiInfrastructure} description="Vector search and structured data storage that AI systems retrieve and reason over." delay={0.08} />
          </div>
        </div>

        {/* Backend Architecture */}
        <div className="mb-16">
          <SectionHeading icon={Layers} title="How a Backend Takes Shape" size="md" className="mb-8" />
          <Card className="p-8 sm:p-12">
            <div className="relative mx-auto flex max-w-xs flex-col items-center">
              <div className="absolute top-2 bottom-2 w-px bg-border" />
              {architectureFlow.map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06, duration: 0.35 }}
                  className="relative z-10 mb-5 w-full last:mb-0"
                >
                  <div className="rounded-full border border-border bg-card px-5 py-2.5 text-center text-sm font-medium text-foreground shadow-sm">
                    {step}
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </div>

        {/* Numbers */}
        <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} icon={stat.icon} value={stat.value} label={stat.label} delay={index * 0.08} />
          ))}
        </div>

        {/* Current Focus */}
        <div className="mb-16">
          <SectionHeading icon={Rocket} title="Currently Building" size="md" className="mb-8" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {currentFocus.map((item, index) => (
              <Card
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
              >
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-gradient-to-br from-brand/10 to-brand-2/10 text-brand">
                  <item.icon className="h-5 w-5" />
                </span>
                <h3 className="font-semibold text-foreground">{item.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <SectionHeading icon={Award} title="Certifications" size="md" className="mb-8" />
          <div className="grid gap-6 md:grid-cols-2">
            {allCertifications.map((cert, index) => (
              <Card
                key={cert.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className="flex items-start gap-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-gradient-to-br from-brand/10 to-brand-2/10 text-brand">
                  <Award className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="mb-1 font-semibold text-foreground">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground">{cert.org}</p>
                  <span className="mt-2 inline-block rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                    {cert.year}
                  </span>
                  <p className="mt-3 text-sm text-muted-foreground">{cert.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Beyond Code */}
        <div className="mb-20">
          <SectionHeading icon={BookOpen} title="Beyond Code" size="md" className="mb-8 justify-center" />
          <div className="grid gap-6 md:grid-cols-4">
            {interests.map((interest, index) => (
              <Card
                key={interest.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className="text-center"
              >
                <span className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-gradient-to-br from-brand/10 to-brand-2/10 text-brand">
                  <interest.icon className="h-6 w-6" />
                </span>
                <h3 className="font-semibold text-foreground">{interest.label}</h3>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
