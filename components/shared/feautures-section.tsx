"use client";
import { Zap, Shield, Globe, Layers } from "lucide-react";
import { motion } from "framer-motion";
import { desc } from "framer-motion/client";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "High-Speed Port ScanningScan thousands of ports concurrently using an async Rust engine.Fast, efficient, and reliable.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Stress Testing EngineSimulate high-load network conditions to benchmark server performance.Supports TCP and HTTP testing modes.",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Real-Time MetricsTrack live connections, success rates, efficiency, and performance in real time.",
  },
  {
    icon: Layers,
    title: "Composable Stack",
    description: "Benchmark ModeAutomatically determine maximum stable throughput of a target system.Export results to JSON reports.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Modular ArchitectureBuilt with scalability in mind. Easily extend with new modules and features.",
  }
];

const FeaturesSection = () => {
  return (
    <section className="relative z-10 bg-background px-6 md:px-[120px] py-24 md:py-32">
      {/* Section header */}
      <motion.div
        className="text-center mb-16 md:mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="text-[13px] font-medium text-foreground/50 uppercase tracking-[0.2em] mb-4">
          Why Dolphinx?

        </p>
        <h2
          className="text-[32px] md:text-[44px] font-medium leading-[1.2] max-w-[520px] mx-auto"
          style={{
            background: "linear-gradient(144.5deg, #FFFFFF 28%, rgba(0,0,0,0) 130%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Dolphinx is built for performance, clarity, and control.

Unlike traditional tools, Dolphinx combines offensive testing and defensive analysis into a single unified platform.

Written in Rust for maximum speed, memory safety, and reliability.

        </h2>
      </motion.div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1200px] mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            className="group relative rounded-2xl p-[0.6px] transition-all duration-300"
            style={{
              background: "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 100%)",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.12 }}
          >
            <div className="relative rounded-2xl bg-background p-7 h-full flex flex-col gap-4 overflow-hidden">
              {/* Subtle top glow on hover */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse at center, rgba(255,255,255,0.4) 0%, transparent 70%)",
                  boxShadow: "0 0 12px 2px rgba(255,255,255,0.1)",
                }}
              />

              <div className="w-10 h-10 rounded-xl bg-foreground/[0.08] flex items-center justify-center">
                <feature.icon size={20} className="text-foreground/70" />
              </div>
              <h3 className="text-[16px] font-medium text-foreground">{feature.title}</h3>
              <p className="text-[14px] leading-relaxed text-foreground/50">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
