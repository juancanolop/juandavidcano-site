import Image from "next/image";
import { HERO, SOCIAL } from "@/lib/content";

export default function Hero() {
  return (
    <section id="hero" className="relative">
      {/* Ambient glow now lives in AmbientBackground (rendered once in the
          root layout) so it carries through the whole page, not just here. */}
      <div className="relative mx-auto max-w-3xl px-5 pb-16 pt-16 text-center sm:pt-24">
        <Image
          src={HERO.photo}
          alt={HERO.name}
          width={144}
          height={144}
          priority
          className="mx-auto h-36 w-36 rounded-full border border-border2 object-cover"
        />

        <a
          href={SOCIAL.linkedin}
          target="_blank"
          rel="noreferrer"
          className="linkedin-gradient mx-auto mt-4 flex w-fit items-center gap-1.5 rounded-full border border-white/20 px-3.5 py-1.5 text-xs font-semibold text-white transition hover:opacity-90"
        >
          <span className="flex h-4 w-4 items-center justify-center rounded-sm bg-white text-[10px] font-bold text-[#0288ff]">
            in
          </span>
          LinkedIn
        </a>

        <h1 className="spotlight-text mt-6 text-2xl font-semibold uppercase tracking-wide sm:text-4xl">
          {HERO.name}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-ink/90 sm:text-lg">{HERO.tagline}</p>
        <p className="mx-auto mt-4 max-w-lg text-sm text-muted2">{HERO.subtext}</p>

        <a
          href={SOCIAL.kronos}
          target="_blank"
          rel="noreferrer"
          className="glow-pill mt-6 inline-block rounded-full px-5 py-2.5 text-sm text-ink transition hover:bg-white/10"
        >
          {HERO.role}
        </a>
      </div>
    </section>
  );
}
