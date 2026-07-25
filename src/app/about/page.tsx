"use client";

import { motion } from "motion/react";
import { User, Award, Briefcase, GraduationCap, Code, Rocket, Cpu, Sparkles } from "lucide-react";
import { Card } from "@/components/blocks/Card";
import { SectionHeading } from "@/components/blocks/SectionHeading";
import { Timeline } from "@/components/blocks/Timeline";
import { experience, certifications } from "@/lib/data/experience";

const interests = [
  { icon: Code, label: "Python Backend Engineering" },
  { icon: Cpu, label: "Generative AI & LLM Systems" },
  { icon: Sparkles, label: "AI Automation & Integrations" },
  { icon: Rocket, label: "SaaS Product Engineering" },
];

export default function AboutPage() {
  return (
    <div className="px-6 pb-24 pt-16 sm:pt-24">
      <div className="mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="mb-16 text-center">
          <span className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-border">
            <User className="h-7 w-7 text-foreground" />
          </span>
          <h1 className="mb-4 font-serif text-5xl font-semibold text-foreground md:text-6xl">About Me</h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            I&apos;m a Python and AI engineer with a strong background in backend development, LLM integration, and product-focused
            engineering. I specialize in scalable Python services, API design, and intelligent AI workflows.
          </p>
        </motion.div>

        <Card
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-16 p-8 md:p-12"
        >
          <h2 className="mb-6 flex items-center gap-3 font-serif text-2xl font-semibold text-foreground">
            <Briefcase className="h-6 w-6 text-muted-foreground" />
            My Journey
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              I started as a Python enthusiast in university and quickly moved into backend engineering. Over time, I built
              production-ready services that power real business workflows and support modern AI experiences.
            </p>
            <p>
              Today my work centers on backend systems with <strong className="font-semibold text-foreground">Django</strong>,{" "}
              <strong className="font-semibold text-foreground">DRF</strong>, and{" "}
              <strong className="font-semibold text-foreground">FastAPI</strong>, combined with generative AI, RAG, and automation.
            </p>
            <p>I enjoy solving hard engineering problems, improving system performance, and delivering clean, maintainable code that can scale.</p>
          </div>
        </Card>

        <div className="mb-16">
          <SectionHeading icon={GraduationCap} title="Experience Timeline" size="md" className="mb-8" />
          <Timeline items={experience} />
        </div>

        <div className="mb-16">
          <SectionHeading icon={Award} title="Certifications" size="md" className="mb-8" />
          <div className="grid gap-6 md:grid-cols-2">
            {certifications.map((cert, index) => (
              <Card
                key={cert.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className="flex items-start gap-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border text-foreground">
                  <Award className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="mb-1 font-semibold text-foreground">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground">{cert.org}</p>
                  <span className="mt-2 inline-block rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                    {cert.year}
                  </span>
                  <p className="mt-3 text-sm text-muted-foreground">{cert.details}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <SectionHeading icon={Sparkles} title="Beyond Code" size="md" className="mb-8 justify-center" />
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
                <span className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg border border-border text-foreground">
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
