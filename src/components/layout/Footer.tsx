"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { contactMethods } from "@/lib/data/contact";

export function Footer() {
  const email = contactMethods.find((method) => method.title === "Email");
  const phone = contactMethods.find((method) => method.title === "Phone");

  return (
    <footer className="mt-24">
      <div className="mx-auto max-w-7xl px-6 pt-16">
        <div className="flex flex-col gap-3 border-t border-border pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          {email && (
            <div>
              <div className="text-xs uppercase tracking-wide text-muted-foreground">Email</div>
              <a href={email.link} className="text-foreground transition-colors hover:text-brand">
                {email.value}
              </a>
            </div>
          )}
          {phone && (
            <div>
              <div className="text-xs uppercase tracking-wide text-muted-foreground">Phone</div>
              <a href={phone.link} className="text-foreground transition-colors hover:text-brand">
                {phone.value}
              </a>
            </div>
          )}
        </div>
      </div>

      <div className="relative mt-12 overflow-hidden bg-[#08080d] px-6 py-8 text-[#f5f4fa]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <p className="text-sm text-[#93909f] sm:text-base">Python &amp; Django developer, based in Lahore</p>
          <Link
            href="/contact"
            aria-label="Get in touch"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-[#f5f4fa] transition-colors hover:bg-white/10"
          >
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mx-auto max-w-7xl overflow-hidden">
          <p className="-mx-1 whitespace-nowrap text-[18vw] font-extrabold leading-none tracking-tight sm:text-[11vw]">
            Asim Shafique
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-7xl text-xs text-[#93909f]">© {new Date().getFullYear()} Asim Shafique. All rights reserved.</p>
      </div>
    </footer>
  );
}
