import Image from "next/image";
import { TOOL_LOGOS } from "@/lib/content";

export default function ToolsMarquee() {
  const track = [...TOOL_LOGOS, ...TOOL_LOGOS];

  return (
    <section aria-hidden className="overflow-hidden border-y border-border2/60 py-6">
      <div className="marquee-track flex w-max items-center gap-12">
        {track.map((src, idx) => (
          <div key={idx} className="flex h-12 w-16 shrink-0 items-center justify-center opacity-80">
            <Image src={src} alt="" width={64} height={64} className="max-h-12 w-auto object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
}
