import { Github, Shield, Zap, Globe, Code } from "lucide-react";

export const metadata = { title: "About — DolphinX" };

const techStack = [
  { label: "Rust", desc: "Core engine for maximum performance" },
  { label: "Next.js 16", desc: "React framework for this website" },
  { label: "Tailwind CSS v4", desc: "Styling and design system" },
  { label: "Framer Motion", desc: "Animations and transitions" },
  { label: "Tokio", desc: "Async runtime for the Rust binaries" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background px-6 md:px-[120px] py-24">
      <div className="max-w-3xl mx-auto flex flex-col gap-12">

        {/* Header */}
        <div>
          <p className="text-[#00d4aa] text-xs font-bold uppercase tracking-[0.2em] mb-2">About</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">About DolphinX</h1>
          <p className="text-white/60 leading-relaxed">
            DolphinX is an open-source, high-performance network security toolkit built in Rust.
            It was created to give developers, security researchers, and infrastructure engineers
            a fast, reliable, and composable set of tools for testing and understanding network behavior.
          </p>
        </div>

        {/* Goals */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4">Goals &amp; Use Cases</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: Zap, title: "Stress Testing", desc: "Simulate high-load conditions to benchmark server resilience." },
              { icon: Globe, title: "Port Scanning", desc: "Rapidly scan open ports and identify network exposure." },
              { icon: Shield, title: "Defense Analysis", desc: "Monitor and log attack patterns for forensic review." },
              { icon: Code, title: "Research", desc: "Provide a safe sandbox for security education and R&D." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-5 rounded-xl border border-white/10 bg-white/[0.03] flex flex-col gap-2">
                <Icon size={18} className="text-[#00d4aa]" />
                <h3 className="text-white font-medium">{title}</h3>
                <p className="text-white/50 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Disclaimer */}
        <section className="p-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5">
          <h2 className="text-yellow-400 font-semibold mb-2">⚠️ Disclaimer</h2>
          <p className="text-white/60 text-sm leading-relaxed">
            DolphinX is intended for <strong className="text-white">authorized security testing only</strong>.
            Use this software exclusively on systems you own or have explicit written permission to test.
            Unauthorized use against third-party systems is illegal and unethical.
            The authors accept no liability for misuse of this software.
          </p>
        </section>

        {/* Built With */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4">Built With</h2>
          <div className="flex flex-col gap-2">
            {techStack.map(({ label, desc }) => (
              <div key={label} className="flex items-center gap-4 px-4 py-3 rounded-lg border border-white/[0.08] bg-white/[0.02]">
                <span className="font-mono text-[#00d4aa] text-sm font-medium w-28 shrink-0">{label}</span>
                <span className="text-white/50 text-sm">{desc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* GitHub Link */}
        <section className="flex flex-col items-start gap-3">
          <h2 className="text-xl font-semibold text-white">Contribute</h2>
          <p className="text-white/60 text-sm">
            DolphinX is open source. Star the repo, report issues, or open a pull request.
          </p>
          <a
            href="https://github.com/sardorazimov/dolphinx"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/20 bg-white/[0.04] text-white text-sm font-medium hover:bg-white/[0.08] hover:border-[#00d4aa]/40 transition-all"
          >
            <Github size={16} />
            sardorazimov/dolphinx
          </a>
        </section>
      </div>
    </div>
  );
}
