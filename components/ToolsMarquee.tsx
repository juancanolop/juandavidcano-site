import Image from "next/image";
import { TOOL_LOGOS } from "@/lib/content";

export default function ToolsMarquee() {
  const track = [...TOOL_LOGOS, ...TOOL_LOGOS];

  return (
    <section aria-hidden className="overflow-hidden py-8">
      <div className="marquee-track flex w-max items-center gap-16">
        {track.map((src, idx) => (
          <div key={idx} className="flex h-14 w-14 shrink-0 items-center justify-center">
            <Image src={src} alt="" width={64} height={64} className="max-h-14 max-w-14 object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
}
