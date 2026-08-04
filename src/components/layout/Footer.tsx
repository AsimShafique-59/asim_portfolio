"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Phone } from "lucide-react";
import { AuroraBackground } from "@/components/blocks/AuroraBackground";
import { contactMethods } from "@/lib/data/contact";

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const specializations = [
  "AI Agents",
  "RAG Systems",
  "Vector Databases",
  "Backend Engineering",
  "Django",
  "FastAPI",
  "SaaS Architecture",
  "Automation",
];

const socialIcons = { Email: Mail, Phone: Phone, LinkedIn: Linkedin, GitHub: Github } as const;

export function Footer() {
  return (
    <footer className="mt-16 px-4 pb-6 sm:px-6">
      <div className="mx-auto max-w-7xl">
        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-border/60 px-6 py-10 text-center sm:px-10 sm:py-12"
        >
          <AuroraBackground />
          <div className="relative">
            <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-foreground sm:text-3xl">
              Have an AI idea? Let&apos;s turn it into reality.
            </h2>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-lg shadow-brand/25 transition-transform hover:scale-105"
              >
                Start a Project
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                View Projects
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Main footer columns */}
        <motion.nav
          aria-label="Footer"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, staggerChildren: 0.08 }}
          className="grid gap-8 border-t border-border pt-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.svg" alt="Asim logo" className="h-9 w-9 overflow-hidden rounded-full border border-border object-cover" />
              <span className="text-sm font-extrabold tracking-tight text-foreground">Asim Shafique</span>
            </Link>
            <p className="mt-3 text-sm font-medium text-muted-foreground">AI Engineer &amp; Backend Architect</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Building scalable AI systems, intelligent agents, and production-grade software.
            </p>
            <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/70 px-3 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              Available for AI projects
            </span>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-extrabold uppercase tracking-wide text-muted-foreground">Explore</h3>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="group text-sm text-muted-foreground transition-colors hover:text-foreground">
                    <span className="bg-gradient-to-r from-foreground to-foreground bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-300 group-hover:bg-[length:100%_1px]">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-extrabold uppercase tracking-wide text-muted-foreground">Specializations</h3>
            <div className="flex flex-wrap gap-2">
              {specializations.map((item) => (
                <span key={item} className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-extrabold uppercase tracking-wide text-muted-foreground">Let&apos;s Connect</h3>
            <ul className="space-y-3">
              {contactMethods.map((method) => {
                const Icon = socialIcons[method.title as keyof typeof socialIcons] ?? Mail;
                const external = method.link.startsWith("http");
                return (
                  <li key={method.title}>
                    <a
                      href={method.link}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border transition-all group-hover:-translate-y-0.5 group-hover:border-brand/40 group-hover:text-brand">
                        <Icon className="h-3.5 w-3.5" />
                      </span>
                      {method.title}
                      {external && <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </motion.nav>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Asim Shafique. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="/sitemap.xml" className="transition-colors hover:text-foreground">
              Sitemap
            </a>
            <span>Built with care &amp; AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
