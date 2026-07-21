"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/80 shadow-lg backdrop-blur-xl dark:bg-gray-950/80"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-2">
            <motion.div whileHover={{ scale: 1.08 }} transition={{ duration: 0.2 }} className="h-10 w-10 overflow-hidden rounded-xl shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.svg" alt="Asim logo" className="h-full w-full object-cover" />
            </motion.div>
            <span className="bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-xl font-bold text-transparent">
              Asim Shafique
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path} className="relative group">
                <span
                  className={`transition-colors ${
                    pathname === item.path
                      ? "font-semibold text-indigo-600 dark:text-pink-400"
                      : "text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-pink-400"
                  }`}
                >
                  {item.label}
                </span>
                {pathname === item.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-600 to-pink-600"
                  />
                )}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 dark:text-gray-200" aria-label="Toggle menu">
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 rounded-2xl bg-white/90 p-4 shadow-xl backdrop-blur-lg dark:bg-gray-900/90 md:hidden"
            >
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-lg px-4 py-3 transition-colors ${
                    pathname === item.path
                      ? "bg-gradient-to-r from-indigo-600 to-pink-600 text-white"
                      : "text-gray-700 hover:bg-indigo-50 dark:text-gray-200 dark:hover:bg-gray-800"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
