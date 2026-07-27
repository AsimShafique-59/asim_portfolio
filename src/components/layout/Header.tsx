"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/projects", label: "Projects" },
  { path: "/skills", label: "Skills" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
  // Resume page is unlinked for now — restore this entry to bring the nav item back.
  // { path: "/resume", label: "Resume" },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 w-full px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-border bg-card/70 px-4 py-2.5 shadow-lg shadow-black/5 backdrop-blur-xl">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="h-8 w-8 overflow-hidden rounded-full border border-border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="Asim logo" className="h-full w-full object-cover" />
          </span>
          <span className="hidden text-sm font-extrabold tracking-tight text-foreground sm:inline">Asim Shafique</span>
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-border bg-background/60 p-1 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.path;
            return (
              <Link key={item.path} href={item.path} className="relative px-4 py-2 text-sm">
                {active && (
                  <motion.span
                    layoutId="navbar-pill"
                    className="absolute inset-0 rounded-full bg-brand/15 shadow-[0_0_20px_-4px_var(--brand)]"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className={`relative z-10 ${active ? "font-semibold text-foreground" : "text-muted-foreground hover:text-foreground"}`}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mx-auto mt-2 flex max-w-6xl flex-col gap-1 rounded-2xl border border-border bg-card/95 p-2 shadow-lg backdrop-blur-xl md:hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setMenuOpen(false)}
                className={`rounded-xl px-4 py-2.5 text-sm transition-colors ${
                  pathname === item.path
                    ? "bg-brand/15 font-semibold text-foreground"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
