import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { contactMethods } from "@/lib/data/contact";

const quickLinks = [
  { path: "/projects", label: "Projects" },
  { path: "/skills", label: "Skills" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

const socialIcons = { GitHub: Github, LinkedIn: Linkedin, Email: Mail } as const;

export function Footer() {
  const year = new Date().getFullYear();
  const socials = contactMethods.filter((method) => method.title === "GitHub" || method.title === "LinkedIn");

  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <span className="text-lg font-extrabold tracking-tight text-foreground">Asim Shafique</span>
            <p className="mt-1 text-sm text-muted-foreground">Python, DRF &amp; Generative AI Engineer</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {quickLinks.map((link) => (
              <Link key={link.path} href={link.path} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {socials.map((social) => {
              const Icon = socialIcons[social.title as keyof typeof socialIcons] ?? Mail;
              return (
                <a
                  key={social.title}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.title}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">© {year} Asim Shafique. All rights reserved.</p>
      </div>
    </footer>
  );
}
