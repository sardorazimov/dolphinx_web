"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Github, Star } from "lucide-react";
import MobileMenu from "./mobil-menu";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Docs", href: "/docs" },
  { label: "Changelog", href: "/changelog" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const { scrollY } = useScroll();

  const top = useTransform(scrollY, [0, 100], [0, 15]);
  const width = useTransform(scrollY, [0, 100], ["100%", "90%"]);
  const borderRadius = useTransform(scrollY, [0, 100], ["0px", "2rem"]);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] mt-3 flex justify-center pointer-events-none px-10">
      <motion.header
        style={{ top, width, borderRadius }}
        className="pointer-events-auto flex items-center justify-between h-16 transition-colors"
      >
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-extrabold text-4xl tracking-tighter text-white">
            dolphinx<span className="text-blue-500">.</span>
          </span>
        </Link>

        {/* NAV LINKS */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://github.com/sardorazimov/dolphinx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors flex items-center gap-1"
          >
            <Github size={14} />
            <Star size={12} />
          </a>
        </nav>

        {/* CTA */}
        <Link
          href="/docs"
          className="bg-white text-black text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-lg hover:bg-zinc-200 transition-all hidden lg:flex"
        >
          Initialize
        </Link>

        {/* MOBILE MENU */}
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </motion.header>
    </div>
  );
}
