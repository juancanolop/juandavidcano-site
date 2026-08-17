/** Fixed, page-wide ambient glow (blue + violet) behind every section —
 *  the original site's background isn't scoped to the hero, it carries
 *  through the whole page. Rendered once in the root layout, fixed so it
 *  stays put (and visible) as the page scrolls. */
export default function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full opacity-40 blur-[100px]"
        style={{ background: "radial-gradient(circle, rgb(125,203,255) 0%, transparent 70%)" }}
      />
      <div
        className="absolute left-1/2 top-24 h-[420px] w-[720px] -translate-x-1/2 rounded-full opacity-30 blur-[110px]"
        style={{ background: "radial-gradient(circle, rgb(139,92,246) 0%, transparent 70%)" }}
      />
    </div>
  );
}
