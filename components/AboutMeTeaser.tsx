import Link from "next/link";
import { ABOUT_TEASER } from "@/lib/content";

export default function AboutMeTeaser() {
  return (
    <section id="experience-1" className="mx-auto max-w-3xl scroll-mt-24 px-5 py-16 text-center">
      <h2 className="mb-6 text-2xl font-semibold text-ink sm:text-3xl">{ABOUT_TEASER.heading}</h2>
      <p className="whitespace-pre-line text-left leading-relaxed text-ink/80">{ABOUT_TEASER.paragraph}</p>
      <div className="mt-8">
        <Link href="/about-me" className="glow-pill inline-block rounded-full px-6 py-3 text-sm text-ink transition hover:bg-white/10">
          {ABOUT_TEASER.cta}
        </Link>
      </div>
    </section>
  );
}
