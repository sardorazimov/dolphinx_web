"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const terminalLines = [
  { text: "> dolphinx --engine turbo --scan target.node.01", color: "text-zinc-400" },
  { text: "[INIT] Neural stealth protocols active...", color: "text-purple-500" },
  { text: "[SCANNING] Probing ports 1-1024...", color: "text-zinc-500" },
  { text: "[OPEN] 22/tcp  SSH  (OpenSSH 8.9p1)", color: "text-emerald-400" },
  { text: "[OPEN] 80/tcp  HTTP (Nginx 1.18.0)", color: "text-emerald-400" },
  { text: "[OPEN] 443/tcp HTTPS (Nginx 1.18.0)", color: "text-emerald-400" },
  { text: "[STRESS] Injecting simulation packets...", color: "text-red-500" },
  { text: "[STATUS] Node 01 saturated. Latency: 450ms", color: "text-orange-400" },
  { text: "> Deployment ready. Waiting for command...", color: "text-purple-400" },
];

export default function NeuralTerminal() {
  const [displayedLines, setDisplayedLines] = useState<{ text: string; color: string }[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentLineIndex >= terminalLines.length) return;

    const currentLine = terminalLines[currentLineIndex];

    if (currentCharIndex < currentLine.text.length) {
      const charTimeout = setTimeout(() => {
        setDisplayedLines((prev) => {
          const newLines = [...prev];
          if (!newLines[currentLineIndex]) {
            newLines[currentLineIndex] = { text: "", color: currentLine.color };
          }
          newLines[currentLineIndex].text = currentLine.text.slice(0, currentCharIndex + 1);
          return newLines;
        });
        setCurrentCharIndex((prev) => prev + 1);
      }, 25);

      return () => clearTimeout(charTimeout);
    } else {
      const lineTimeout = setTimeout(() => {
        setCurrentLineIndex((prev) => prev + 1);
        setCurrentCharIndex(0);
        // Otomatik aşağı kaydırma
        if (containerRef.current) {
          containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
      }, 400);
      return () => clearTimeout(lineTimeout);
    }
  }, [currentCharIndex, currentLineIndex]);

  return (
    <div className="w-full max-w-2xl mx-auto font-mono text-sm relative group">
      {/* Terminal Cam Efekti */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/20 to-purple-500/20 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
      
      <div className="relative bg-black/90 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900/50 border-b border-white/5">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20 border border-emerald-500/40" />
          </div>
          <div className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600">
            DolphinX System Kernel
          </div>
        </div>

        {/* Yazı Alanı */}
        <div 
          ref={containerRef}
          className="p-6 h-64 overflow-y-auto scrollbar-hide relative"
        >
          {/* Scan Line Efekti */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] z-20 opacity-20"></div>

          <div className="relative z-10 space-y-1.5">
            {displayedLines.map((line, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -5 }} 
                animate={{ opacity: 1, x: 0 }}
                className={`${line.color} flex items-start gap-2`}
              >
                <span className="opacity-50 select-none">[{i < 9 ? `0${i+1}` : i+1}]</span>
                <span>{line.text}</span>
                {i === currentLineIndex && (
                  <motion.span 
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-1.5 h-4 bg-current translate-y-0.5"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}