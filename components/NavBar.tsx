"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_LINKS, SOCIAL } from "@/lib/content";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border2/60 bg-bg/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
        <Link href="/" className="font-serif text-lg tracking-wide text-ink">
          JDC
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-ink/80 transition hover:text-accent"
              >
                {link.label}
              </a>
            ) : (
              <Link key={link.label} href={link.href} className="text-sm text-ink/80 transition hover:text-accent">
                {link.label}
              </Link>
            )
          )}
          <a
            href={SOCIAL.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border2 px-4 py-1.5 text-sm text-ink transition hover:border-accent hover:text-accent"
          >
            LinkedIn
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
          <div className="flex items-center justify-between px-5 py-4">
            <Link href="/" onClick={() => setOpen(false)} className="font-serif text-lg tracking-wide text-ink">
              JDC
            </Link>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-9 w-9 items-center justify-center rounded-md border border-border2 text-2xl leading-none text-ink"
            >
              ×
            </button>
          </div>

          <nav className="flex flex-1 flex-col items-start justify-center gap-6 px-8">
            {NAV_LINKS.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                  className="text-3xl font-serif text-ink transition hover:text-accent"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-3xl font-serif text-ink transition hover:text-accent"
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
              className="mt-4 rounded-full bg-accent px-6 py-3 text-base font-medium text-bg"
            >
              Get in Touch
            </a>
          </nav>

          <div className="flex justify-center gap-6 px-8 pb-10">
            <a
              href={SOCIAL.linkedin}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="text-sm text-ink/70 underline-offset-4 hover:text-accent hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
