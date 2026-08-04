"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Mail, Phone } from "lucide-react";
import { contactMethods } from "@/lib/data/contact";

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const socialIcons = { Email: Mail, Phone: Phone, LinkedIn: Linkedin, GitHub: Github } as const;

export function Footer() {
  return (
    <footer className="mt-12 px-4 pb-5 sm:px-6">
      <div className="mx-auto max-w-7xl">
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-border/60 bg-gradient-to-br from-brand/10 to-brand-2/10 px-6 py-6 text-center sm:flex-row sm:text-left"
        >
          <h2 className="text-lg font-extrabold tracking-tight text-foreground sm:text-xl">Have an AI idea? Let&apos;s build it.</h2>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground shadow-lg shadow-brand/25 transition-transform hover:scale-105"
          >
            Start a Project
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        {/* Main footer row */}
        <div className="mt-8 flex flex-col gap-8 border-t border-border pt-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.svg" alt="Asim logo" className="h-8 w-8 overflow-hidden rounded-full border border-border object-cover" />
              <span className="text-sm font-extrabold tracking-tight text-foreground">Asim Shafique</span>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">AI Engineer &amp; Backend Architect</p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
            {exploreLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-wrap gap-3">
            {contactMethods.map((method) => {
              const Icon = socialIcons[method.title as keyof typeof socialIcons] ?? Mail;
              const external = method.link.startsWith("http");
              return (
                <a
                  key={method.title}
                  href={method.link}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  aria-label={method.title}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-brand/40 hover:text-brand"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col items-center gap-2 border-t border-border pt-4 text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Asim Shafique. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="/sitemap.xml" className="transition-colors hover:text-foreground">
              Sitemap
            </a>
            <span className="flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              Available for AI projects
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
