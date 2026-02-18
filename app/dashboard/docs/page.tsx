/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  ShieldAlert,
  Zap,
  Skull,
  Lock,
  Activity,
  ChevronRight,
  Command,
  Cpu,
  Radio
} from "lucide-react";
import { cn } from "@/lib/utils";
import Header from "../../../components/shared/navbar";

const DOLPHIN_DOCS = {
  "Core Engine": {
    title: "Rust Runtime Engine",
    icon: <Cpu size={18} />,
    desc: "DolphinX is powered by a low-level Rust core designed for extreme packet manipulation. It bypasses standard overheads to deliver raw network stress directly to the target node.",
    details: [
      "Zero-cost abstractions for packet headers",
      "Asynchronous I/O via Tokio runtime",
      "Memory-safe buffer management"
    ],
    code: "$ cargo run --release -- --engine turbo"
  },
  "Stress Testing": {
    title: "Layer 7 & Layer 4 Stress",
    icon: <Zap size={18} />,
    desc: "Simulate massive traffic spikes to test server resilience. DolphinX can saturate bandwidth limits and identify weak points in your load balancing configuration.",
    details: [
      "Custom TCP/UDP flood algorithms",
      "HTTP/2 multiplexing stress",
      "Dynamic payload randomization"
    ],
    code: "$ dolphin-x --attack l7 --target https://local-test.dev --threads 64"
  },
  "Security Audit": {
    title: "Offensive Security Audit",
    icon: <Skull size={18} />,
    desc: "Automated vulnerability probing and stress-based exploit discovery. Designed for authorized security professionals to validate defense perimeters.",
    details: [
      "Firewall rule bypass simulation",
      "Rate-limit exhaustion tests",
      "Anomalous packet injection"
    ],
    code: "// Offensive Protocol Initialized\n// Scanning target for rate-limit gaps..."
  }
};

export default function DolphinDocs() {
  const [activeTab, setActiveTab] = useState("Core Engine");

  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#020202] text-zinc-400 pt-24 pb-32 selection:bg-red-500/30">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12">

          {/* SIDEBAR - TERMINAL STYLE */}
          <aside className="space-y-6 lg:sticky lg:top-24 ">
            <div className="p-6 rounded-3xl bg-zinc-900/10 border border-white/5 backdrop-blur-xl sticky top-24">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-8 h-8 bg-red-600/20 border border-red-500/50 rounded flex items-center justify-center">
                  <Skull size={16} className="text-red-500" />
                </div>
                <span className="font-black tracking-tighter text-white uppercase italic text-xl">DolphinX</span>
              </div>

              <nav className="space-y-1.5 lg:sticky lg:top-32">
                {Object.keys(DOLPHIN_DOCS).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-[11px] font-black uppercase tracking-[0.2em] transition-all",
                      activeTab === key
                        ? "bg-red-500/10 text-red-500 border border-red-500/20 shadow-[0_0_30px_rgba(239,68,68,0.1)]"
                        : "text-zinc-600 hover:text-zinc-300 hover:bg-white/5 border border-transparent"
                    )}
                  >
                    {DOLPHIN_DOCS[key as keyof typeof DOLPHIN_DOCS].icon}
                    {key}
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-4 rounded-2xl border border-white/5 bg-zinc-900/5 flex items-center gap-4 sticky top-[calc(100vh-200px)]">
              <div className="relative h-2 w-2">
                <div className="absolute inset-0 bg-red-500 rounded-full animate-ping" />
                <div className="relative h-2 w-2 bg-red-600 rounded-full" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">System Ready for Deployment</span>
            </div>
          </aside>

          {/* MAIN CONTENT - TECHNICAL MANUAL */}
          <main>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-10"
              >
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-white/10 text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-6">
                    <Terminal size={12} /> Documentation / {activeTab}
                  </div>
                  <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter text-white leading-none">
                    {DOLPHIN_DOCS[activeTab as keyof typeof DOLPHIN_DOCS].title}
                  </h1>
                </div>

                <p className="text-zinc-500 text-lg md:text-xl font-medium max-w-3xl leading-relaxed">
                  {DOLPHIN_DOCS[activeTab as keyof typeof DOLPHIN_DOCS].desc}
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xs font-black uppercase tracking-[0.3em] text-red-500">Technical Specs</h3>
                    <ul className="space-y-3">
                      {DOLPHIN_DOCS[activeTab as keyof typeof DOLPHIN_DOCS].details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm font-medium text-zinc-400">
                          <div className="w-1 h-1 bg-red-500 rounded-full" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="relative group">
                    <div className="absolute -inset-1 bg-red-500/10 blur-xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative bg-zinc-950 border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
                      <div className="px-4 py-2 bg-zinc-900/50 border-b border-white/5 flex items-center justify-between">
                        <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Execute Command</span>
                        <Command size={12} className="text-zinc-700" />
                      </div>
                      <pre className="p-6 font-mono text-sm text-red-400/90 leading-relaxed overflow-x-auto">
                        <code>{DOLPHIN_DOCS[activeTab as keyof typeof DOLPHIN_DOCS].code}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* SYSTEM ARCHITECTURE VISUALIZATION */}
            <div className="mt-20 pt-20 border-t border-white/5">
              <h3 className="text-xs font-black uppercase tracking-[0.4em] text-zinc-600 mb-10">Data Flow Protocol</h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                <Stat icon={<Radio />} label="Transmission" val="UDP/TCP" />
                <Stat icon={<ShieldAlert />} label="Bypass" val="Active" />
                <Stat icon={<Activity />} label="Latency" val="~0.4ms" />
                <Stat icon={<Lock />} label="Auth" val="RSA-4096" />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>

  );
}

function Stat({ icon, label, val }: any) {
  return (
    <div className="p-4 rounded-xl bg-zinc-900/20 border border-white/5">
      <div className="text-zinc-600 mb-2">{icon}</div>
      <div className="text-[9px] font-black uppercase tracking-widest text-zinc-500 mb-1">{label}</div>
      <div className="text-sm font-bold text-zinc-300 italic">{val}</div>
    </div>
  );
}