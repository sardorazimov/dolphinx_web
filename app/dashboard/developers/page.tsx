"use client";

import { motion } from "framer-motion";
import { 
  Github, 
  Terminal, 
  Cpu, 
  GitBranch, 
  Package, 
  ExternalLink,
  Code2,
  BookOpen
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Header from "../../../components/shared/navbar";

const DEV_RESOURCES = [
  {
    title: "Core Repository",
    desc: "Main Rust implementation of DolphinX stress engine.",
    link: "https://github.com/sardorazimov/dolphinx",
    icon: <Github size={20} />,
    color: "group-hover:text-white"
  },
  {
    title: "DolphinX CLI",
    desc: "Command-line tools for automated system audits.",
    link: "#",
    icon: <Terminal size={20} />,
    color: "group-hover:text-red-500"
  },
  {
    title: "Rust Crates",
    desc: "Direct integration modules for your Rust projects.",
    link: "#",
    icon: <Package size={20} />,
    color: "group-hover:text-orange-500"
  }
];

export default function DevelopersPage() {
  return (
    <div className="min-h-screen bg-[#020202] text-zinc-400 selection:bg-red-500/30 pt-32 pb-24">
        <Header />
      {/* BACKGROUND GRID */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="max-w-3xl mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 text-red-500 mb-6"
          >
            <Code2 size={24} />
            <span className="text-xs font-black uppercase tracking-[0.4em]">Engineers Only</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter text-white leading-[0.8] mb-8"
          >
            Build with <br /> <span className="text-red-600">DolphinX.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-500 text-xl font-medium leading-relaxed"
          >
            Access our high-concurrency Rust engine, integrate stress-testing protocols 
            into your CI/CD, and build resilient infrastructure.
          </motion.p>
        </div>

        {/* RESOURCE CARDS */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {DEV_RESOURCES.map((res, i) => (
            <motion.a
              key={res.title}
              href={res.link}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="group p-8 rounded-[2rem] bg-zinc-900/10 border border-white/5 hover:border-red-500/20 transition-all duration-500 backdrop-blur-sm"
            >
              <div className={cn("mb-6 transition-colors", res.color)}>
                {res.icon}
              </div>
              <h3 className="text-xl font-black italic uppercase tracking-tight text-white mb-3 flex items-center gap-2">
                {res.title} <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-sm text-zinc-500 font-medium leading-relaxed">
                {res.desc}
              </p>
            </motion.a>
          ))}
        </div>

        {/* QUICK START COMMAND */}
        <div className="grid lg:grid-cols-2 gap-12 items-center border-t border-white/5 pt-24">
          <div>
            <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white mb-6">
              Quick Integration
            </h2>
            <p className="text-zinc-500 mb-8 leading-relaxed">
              DolphinX is designed to be plug-and-play. Add our core crate to your 
              `Cargo.toml` and start simulating traffic signatures instantly.
            </p>
            <div className="flex gap-4">
              <Link href="/docs" className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-xl font-black uppercase text-xs tracking-widest hover:scale-105 transition-transform">
                <BookOpen size={16} /> API Reference
              </Link>
              <button className="flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-white/5 text-zinc-400 rounded-xl font-black uppercase text-xs tracking-widest hover:bg-zinc-800 transition-colors">
                <GitBranch size={16} /> Fork Repo
              </button>
            </div>
          </div>

          {/* CODE TERMINAL MOCKUP */}
          
          <div className="bg-[#050505] border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
            <div className="px-6 py-4 border-b border-white/5 bg-zinc-900/30 flex justify-between items-center">
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
              </div>
              <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">Cargo.toml</span>
            </div>
            <pre className="p-8 font-mono text-sm leading-relaxed overflow-x-auto">
              <code className="text-zinc-400">
                <span className="text-red-500">[dependencies]</span>{"\n"}
                dolphinx = <span className="text-emerald-500">&ldquo;1.0.0&#34;</span>{"\n"}
                tokio = &#123; version = <span className="text-emerald-500">&ldquo;1&#34;</span>, features = [<span className="text-emerald-500">&ldquo;full&ldquo;</span>] &#125;{"\n\n"}
                <span className="text-zinc-700"># Start the engine</span>{"\n"}
                <span className="text-purple-500">use</span> dolphinx::prelude::*;
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}