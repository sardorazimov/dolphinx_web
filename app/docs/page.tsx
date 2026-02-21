import Link from "next/link";
import { ArrowRight, Zap, Shield, Globe, Layers } from "lucide-react";

export const metadata = { title: "Docs — DolphinX" };

const features = [
  { icon: Zap, label: "High-speed stress testing engine" },
  { icon: Shield, label: "Real-time defense analyzer" },
  { icon: Globe, label: "Port scanner & recon tools" },
  { icon: Layers, label: "Benchmark & JSON export" },
];

export default function DocsOverviewPage() {
  return (
    <div className="flex flex-col gap-12">
      {/* Header */}
      <div>
        <p className="text-[#00d4aa] text-xs font-bold uppercase tracking-[0.2em] mb-2">Overview</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">What is DolphinX?</h1>
        <p className="text-white/60 leading-relaxed max-w-2xl">
          DolphinX is a modular, high-performance network security toolkit written in Rust.
          It provides tools for stress testing, port scanning, reconnaissance, benchmarking,
          and real-time defense analysis — all in one fast, reliable binary.
        </p>
      </div>

      {/* Key Features */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Key Features</h2>
        <ul className="flex flex-col gap-3">
          {features.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-3 text-white/70">
              <Icon size={16} className="text-[#00d4aa] shrink-0" />
              {label}
            </li>
          ))}
        </ul>
      </div>

      {/* Architecture */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Architecture Overview</h2>
        <div className="flex flex-wrap items-center gap-3">
          {["attack-tools", "→", "network", "→", "defense-lab"].map((item, i) => (
            item === "→" ? (
              <span key={i} className="text-white/30 text-xl">→</span>
            ) : (
              <div
                key={item}
                className="px-5 py-3 rounded-xl border border-[#00d4aa]/30 bg-[#00d4aa]/5 text-[#00d4aa] font-mono text-sm font-medium"
              >
                {item}
              </div>
            )
          ))}
        </div>
        <p className="text-white/50 text-sm mt-4">
          Attack tools send traffic through the network layer while the defense-lab analyzer
          captures, logs, and tracks incoming connections in real time.
        </p>
      </div>

      {/* Links to sub-sections */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Sections</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { href: "/docs/getting-started", title: "Getting Started", desc: "Install, build, and run your first test." },
            { href: "/docs/attack-tools", title: "Attack Tools", desc: "CLI reference for stresser, scanner, recon & more." },
            { href: "/docs/defense-lab", title: "Defense Lab", desc: "Real-time analyzer and IP tracking system." },
          ].map(({ href, title, desc }) => (
            <Link
              key={href}
              href={href}
              className="group p-5 rounded-xl border border-white/10 bg-white/[0.03] hover:border-[#00d4aa]/40 hover:bg-[#00d4aa]/5 transition-all flex flex-col gap-2"
            >
              <span className="text-white font-medium group-hover:text-[#00d4aa] transition-colors flex items-center gap-2">
                {title} <ArrowRight size={14} />
              </span>
              <span className="text-white/50 text-sm">{desc}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
