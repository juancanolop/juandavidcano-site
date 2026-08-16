import Link from "next/link";
import { ABOUT_TEASER } from "@/lib/content";

export default function AboutMeTeaser() {
  return (
    <section id="experience-1" className="mx-auto max-w-2xl scroll-mt-24 px-5 py-16">
      <h2 className="mb-6 text-center font-serif text-2xl text-ink sm:text-3xl">{ABOUT_TEASER.heading}</h2>
      <p className="whitespace-pre-line text-center leading-relaxed text-ink/80">{ABOUT_TEASER.paragraph}</p>
      <div className="mt-6 text-center">
        <Link href="/about-me" className="text-sm font-medium text-accent underline-offset-4 hover:underline">
          {ABOUT_TEASER.cta} →
        </Link>
      </div>
    </section>
  );
}
