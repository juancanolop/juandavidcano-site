import { SOCIAL } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-border2/60 py-14">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 px-5 text-center">
        <h2 className="text-2xl font-semibold text-ink sm:text-3xl">Let's build something efficient together.</h2>
        <a
          href={SOCIAL.calendly}
          target="_blank"
          rel="noreferrer"
          className="glow-pill rounded-full px-7 py-3 text-sm text-ink transition hover:bg-white/10"
        >
          Get in Touch
        </a>
        <div className="mt-4 flex gap-6 text-sm text-ink/70">
          <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent">
            LinkedIn
          </a>
          <a href="https://news.kronosgmt.com/" target="_blank" rel="noreferrer" className="hover:text-accent">
            Blog
          </a>
          <a href={SOCIAL.kronos} target="_blank" rel="noreferrer" className="hover:text-accent">
            Kronos GMT
          </a>
        </div>
      </div>
    </footer>
  );
}
