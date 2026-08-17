"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { NAV_LINKS, SOCIAL } from "@/lib/content";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-8 px-5 py-5">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) =>
            link.newTab ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-ink/80 transition hover:text-ink"
              >
                {link.label}
              </a>
            ) : (
              <Link key={link.label} href={link.href} className="text-sm text-ink/80 transition hover:text-ink">
                {link.label}
              </Link>
            )
          )}
          <a
            href={SOCIAL.calendly}
            target="_blank"
            rel="noreferrer"
            className="glow-pill rounded-full px-5 py-2 text-sm text-ink transition hover:bg-white/10"
          >
            Get in Touch
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="flex h-9 w-9 items-center justify-center rounded-md border border-border2 md:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-ink" />
            <span className="block h-0.5 w-5 bg-ink" />
            <span className="block h-0.5 w-5 bg-ink" />
          </div>
        </button>
      </div>

      {/* Mobile overlay menu */}
      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-bg md:hidden">
          <div className="flex items-center justify-between px-5 py-5">
            <Logo />
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-9 w-9 items-center justify-center rounded-md border border-border2 text-2xl leading-none text-ink"
            >
              ×
            </button>
          </div>

          <nav className="flex flex-1 flex-col items-center justify-center gap-8">
            {NAV_LINKS.map((link) =>
              link.newTab ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                  className="text-2xl text-ink transition hover:text-white"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-2xl text-ink transition hover:text-white"
                >
                  {link.label}
                </Link>
              )
            )}
            <a
              href={SOCIAL.calendly}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="glow-pill mt-2 rounded-full px-6 py-3 text-base text-ink transition hover:bg-white/10"
            >
              Get in Touch
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
