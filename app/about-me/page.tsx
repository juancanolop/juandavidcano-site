import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ABOUT_ME_PARAGRAPHS } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Me | Juan David Cano",
};

export default function AboutMePage() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-2xl px-5 py-16">
        <h1 className="mb-10 text-center text-3xl font-semibold text-ink sm:text-4xl">About Me</h1>
        <div className="space-y-6 leading-relaxed text-ink/85">
          {ABOUT_ME_PARAGRAPHS.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
