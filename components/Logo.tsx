import Link from "next/link";

/** Small glowing triangle mark, top-left of the nav, links home — matches
 *  the original site's logo. */
export default function Logo() {
  return (
    <Link href="/" aria-label="Home" className="inline-flex text-ink/70 transition hover:text-ink">
      <svg width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M29 3 L29 25 L5 14 Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
          style={{ filter: "drop-shadow(0 0 4px rgba(230,230,230,0.35))" }}
        />
      </svg>
    </Link>
  );
}
