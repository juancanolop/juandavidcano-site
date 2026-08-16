import { HERO } from "@/lib/content";

export default function Hero() {
  return (
    <section id="hero" className="mx-auto max-w-3xl px-5 pb-16 pt-16 text-center sm:pt-24">
      <h1 className="font-serif text-3xl leading-tight text-ink sm:text-5xl">{HERO.name}</h1>
      <p className="mx-auto mt-6 max-w-xl text-lg text-ink/90 sm:text-xl">{HERO.tagline}</p>
      <p className="mx-auto mt-4 max-w-lg text-sm text-muted2 sm:text-base">{HERO.subtext}</p>
      <p className="mt-6 text-sm font-medium uppercase tracking-widest text-accent">{HERO.role}</p>
    </section>
  );
}
