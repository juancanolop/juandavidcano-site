import { SKILLS } from "@/lib/content";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl scroll-mt-24 px-5 py-16">
      <h2 className="mb-8 text-center font-serif text-2xl text-ink sm:text-3xl">Skills</h2>
      <div className="flex flex-wrap justify-center gap-2.5">
        {SKILLS.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-border2 px-4 py-2 text-sm text-ink/90 transition hover:border-accent hover:text-accent"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
