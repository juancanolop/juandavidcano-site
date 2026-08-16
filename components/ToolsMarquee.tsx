import Image from "next/image";
import { TOOL_LOGOS } from "@/lib/content";

export default function ToolsMarquee() {
  const track = [...TOOL_LOGOS, ...TOOL_LOGOS];

  return (
    <section aria-hidden className="overflow-hidden py-6">
      <div className="marquee-track flex w-max items-center gap-10">
        {track.map((src, idx) => (
          <div key={idx} className="flex h-10 w-12 shrink-0 items-center justify-center">
            <Image src={src} alt="" width={48} height={48} className="max-h-10 w-auto object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
}
