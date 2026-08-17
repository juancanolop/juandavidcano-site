"use client";

import Link from "next/link";
import { useMemo } from "react";
import { getDodecahedronEdges } from "@/lib/dodecahedron";

const SIZE = 15; // half-width of the shape, in px

function EdgeBar({ a, b }: { a: [number, number, number]; b: [number, number, number] }) {
  const dx = b[0] - a[0];
  const dy = b[1] - a[1];
  const dz = b[2] - a[2];
  const length = Math.hypot(dx, dy, dz);
  const theta = Math.atan2(dy, dx) * (180 / Math.PI);
  const lenXY = Math.hypot(dx, dy);
  const phi = Math.atan2(dz, lenXY) * (180 / Math.PI);

  return (
    <div
      className="absolute left-1/2 top-1/2 bg-ink/80"
      style={{
        width: `${length}px`,
        height: "1px",
        transformOrigin: "0 50%",
        transform: `translate3d(${a[0]}px, ${a[1]}px, ${a[2]}px) rotateZ(${theta}deg) rotateY(${-phi}deg)`,
      }}
    />
  );
}

/** Small rotating, blurred wireframe dodecahedron — the site's logo mark,
 *  top-left of the nav, links home. Pure CSS 3D, no libraries. */
export default function Logo() {
  const edges = useMemo(() => getDodecahedronEdges(SIZE), []);

  return (
    <Link href="/" aria-label="Home" className="inline-block" style={{ perspective: "300px" }}>
      <div
        className="relative"
        style={{
          width: SIZE * 2,
          height: SIZE * 2,
          filter: "blur(0.5px) drop-shadow(0 0 6px rgba(230,230,230,0.55))",
        }}
      >
        <div
          className="spin3d absolute inset-0"
          style={{ transformStyle: "preserve-3d" }}
        >
          {edges.map((e, i) => (
            <EdgeBar key={i} a={e.a} b={e.b} />
          ))}
        </div>
      </div>
    </Link>
  );
}
