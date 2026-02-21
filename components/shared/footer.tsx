"use client";

import React from "react";
import { Github, Globe } from "lucide-react";
import Link from "next/link";

const footerLinks = [
  { label: "DOCS", href: "/docs" },
  { label: "CHANGELOG", href: "/changelog" },
  { label: "ABOUT", href: "/about" },
  { label: "GITHUB", href: "https://github.com/sardorazimov/dolphinx", external: true },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-y-4 mb-16">
        {footerLinks.map((link, index) => (
          <React.Fragment key={link.label}>
            {link.external ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] md:text-[12px] font-bold hover:text-gray-400 transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <Link
                href={link.href}
                className="text-[11px] md:text-[12px] font-bold hover:text-gray-400 transition-colors"
              >
                {link.label}
              </Link>
            )}
            {index !== footerLinks.length - 1 && (
              <span className="mx-4 text-gray-600 hidden md:inline">·</span>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="flex justify-center mb-16">
        <Link href="/" className="text-3xl font-black tracking-tighter italic flex items-center">
          <img src="./logo.png" alt="" className="w-15" />
          dolphinx
        </Link>
      </div>

      <div className="text-center mb-8">
        <p className="text-[11px] md:text-[13px] tracking-[0.2em] text-gray-400 font-medium uppercase">
          2019 – {currentYear} Sardor Azimov. All rights reserved.
        </p>
      </div>

      <Link href="/" className="flex justify-center mb-10">
        <button className="border-2 border-white/20 px-10 py-3 text-[12px] font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300 active:scale-95">
          WebSite
        </button>
      </Link>

      <div className="flex w-full justify-center items-center gap-4">
        <Link href="/"><Globe size={14} /></Link>
        <a href="https://github.com/sardorazimov" target="_blank" rel="noopener noreferrer"><Github size={14} /></a>
      </div>
    </footer>
  );
};

export default Footer;
