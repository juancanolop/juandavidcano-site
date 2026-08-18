/** Fixed, page-wide ambient glow (blue + violet) behind every section —
 *  the original site's background isn't scoped to the hero, it carries
 *  through the whole page. Rendered once in the root layout, fixed so it
 *  stays put (and visible) as the page scrolls.
 *
 *  z-0 (not a negative z-index) on purpose: with position:fixed, a negative
 *  z-index made this invisible in testing despite computing correctly (a
 *  fixed+negative-z-index compositing quirk) — z-0 renders correctly and,
 *  combined with pointer-events-none, still never blocks page content.
 *
 *  No `filter: blur()` here on purpose: a 100-110px Gaussian blur on a
 *  full-viewport `position: fixed` layer is one of the more expensive
 *  things a browser can be asked to keep composited (it has to keep a
 *  larger-than-element paint/raster bound alive and re-blur on layer
 *  invalidation). The softness comes entirely from the radial-gradient's
 *  own fade stops instead, which is just a cheap, once-rasterized paint —
 *  same look, none of the ongoing filter cost. */
export default function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        className="absolute left-1/2 top-[-40px] h-[420px] w-[650px] -translate-x-1/2 rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgb(125,203,255) 0%, rgba(125,203,255,0.55) 25%, rgba(125,203,255,0.22) 50%, rgba(125,203,255,0.06) 72%, transparent 100%)",
        }}
      />
      <div
        className="absolute left-1/2 top-[140px] h-[340px] w-[520px] -translate-x-1/2 rounded-full opacity-15"
        style={{
          background:
            "radial-gradient(circle, rgb(139,92,246) 0%, rgba(139,92,246,0.5) 25%, rgba(139,92,246,0.2) 50%, rgba(139,92,246,0.05) 72%, transparent 100%)",
        }}
      />
    </div>
  );
}
