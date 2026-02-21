import { Github, Star } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

interface HeroContentProps {
  stars?: number | null;
}

const HeroContent = ({ stars }: HeroContentProps) => {
  return (
    <div
      className="relative z-10 flex flex-col items-center text-center"
      style={{
        paddingTop: "clamp(200px, 20vw, 280px)",
        paddingBottom: 102,
        gap: 40,
      }}
    >
      {/* Badge */}
      <div
        className="inline-flex items-center gap-2 rounded-[20px]"
        style={{
          background: "rgba(255,255,255,0.1)",
          border: "1px solid rgba(255,255,255,0.2)",
          padding: "8px 16px",
        }}
      >
        <span className="block w-1 h-1 rounded-full bg-foreground" />
        <span className="text-[13px] font-medium flex gap-1 items-center">
          <a
            href="https://github.com/sardorazimov/dolphinx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 flex items-center gap-1 hover:text-foreground transition-colors"
          >
            <Github size={14} />
            GitHub
          </a>
          {stars != null && stars > 0 && (
            <span className="flex items-center gap-1 text-[#00d4aa]">
              <Star size={12} fill="currentColor" />
              {stars.toLocaleString()}
            </span>
          )}
        </span>
      </div>

      {/* Heading */}
      <h1
        className="text-[36px] md:text-[56px] font-medium leading-[1.28] max-w-[613px]"
        style={{
          background: "linear-gradient(144.5deg, #FFFFFF 28%, rgba(0,0,0,0) 115%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Dolphinx — Advanced Network Testing &amp; Defense Platform
      </h1>

      {/* Subtitle */}
      <p
        className="text-[15px] font-normal text-foreground/70 max-w-[680px] leading-relaxed"
        style={{ marginTop: -16 }}
      >
        A modern, high-performance network security toolkit written in Rust.
        Built for scanning, stress testing, benchmarking, and real-time defense.
        Designed for developers, security researchers, and infrastructure engineers.
      </p>

      {/* CTA */}
      <div className="flex items-center gap-4 flex-wrap justify-center">
        <Button asChild>
          <Link href="/docs">View Docs</Link>
        </Button>
        <Button variant="outline" asChild>
          <a href="https://github.com/sardorazimov/dolphinx" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <Github size={16} />
            GitHub
          </a>
        </Button>
      </div>
    </div>
  );
};

export default HeroContent;

