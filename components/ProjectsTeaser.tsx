import Image from "next/image";
import { PROJECTS_TEASER, SOCIAL } from "@/lib/content";

export default function ProjectsTeaser() {
  return (
    <section id="case-study" className="mx-auto max-w-5xl scroll-mt-24 px-5 py-16">
      <div className="relative grid items-center gap-8 overflow-hidden rounded-2xl border border-border2/60 bg-bg2 p-6 sm:p-10 md:grid-cols-2">
        {/* Soft ambient glow tucked in a corner, matching the original card. */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full opacity-20 blur-[100px]"
          style={{ background: "rgb(130, 201, 94)" }}
        />
        <div className="relative">
          <h2 className="text-2xl font-semibold text-ink sm:text-3xl">{PROJECTS_TEASER.heading}</h2>
          <p className="mt-4 text-ink/80">{PROJECTS_TEASER.body}</p>
          <a
            href={SOCIAL.dashboard}
            className="mt-6 inline-block rounded-full border border-border2 px-6 py-3 text-sm text-ink transition hover:border-ink"
          >
            {PROJECTS_TEASER.cta}
          </a>
        </div>
        <a
          href={SOCIAL.dashboard}
          className="relative block overflow-hidden rounded-xl border border-border2/60"
        >
          <Image
            src={PROJECTS_TEASER.image}
            alt="Projects Dashboard preview"
            width={897}
            height={586}
            className="h-auto w-full object-cover transition hover:scale-[1.02]"
          />
        </a>
      </div>
    </section>
  );
}
