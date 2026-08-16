import Image from "next/image";
import { PROJECTS_TEASER, SOCIAL } from "@/lib/content";

export default function ProjectsTeaser() {
  return (
    <section id="case-study" className="mx-auto max-w-5xl scroll-mt-24 px-5 py-16">
      <div className="grid items-center gap-8 rounded-2xl border border-border2/60 bg-bg2 p-6 sm:p-10 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-2xl text-ink sm:text-3xl">{PROJECTS_TEASER.heading}</h2>
          <p className="mt-4 text-ink/80">{PROJECTS_TEASER.body}</p>
          <a
            href={SOCIAL.dashboard}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-bg transition hover:opacity-90"
          >
            {PROJECTS_TEASER.cta}
          </a>
        </div>
        <a href={SOCIAL.dashboard} target="_blank" rel="noreferrer" className="block overflow-hidden rounded-xl border border-border2/60">
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
