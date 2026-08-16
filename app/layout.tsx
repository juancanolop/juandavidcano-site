import type { Metadata } from "next";
import { Hanken_Grotesk, Lustria } from "next/font/google";
import "./globals.css";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

const lustria = Lustria({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lustria",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Juan David Cano",
  description:
    "Civil engineer obsessed with saving time in design and planning. If you've ever thought, 'There has to be a better way,' let's talk.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${hanken.variable} ${lustria.variable}`}>
      <body className="bg-bg font-sans text-ink antialiased">{children}</body>
    </html>
  );
}
