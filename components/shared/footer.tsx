"use client";

import React from "react";
import { Github, Globe } from "lucide-react";
import Link from "next/link";

const footerLinks = [
  "DEVELOPERS",
  "TERMS OF USE",
  "DOCS",
  "CAREERS",
  
  
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12 px-6">
      {/* 1. Üst Linkler: İnce Separatörlü Yapı */}
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-y-4 mb-16">
        {footerLinks.map((link, index) => (
          <React.Fragment key={link}>
            <a
              href="#"
              className="text-[11px] md:text-[12px] font-bold  hover:text-gray-400 transition-colors"
            >
              {link}
            </a>
            {index !== footerLinks.length - 0 && (
              <span className="mx-4 text-gray-600 hidden md:inline"></span>
            )}
          </React.Fragment>
        ))}
        <div className="">
          {/* <span className="text-[10px] font-bold tracking-tighter">YOUR PRIVACY CHOICES</span>
          <div className="w-8 h-4 bg-blue-500 rounded-full relative">
             <div className="absolute right-1 top-1 w-2 h-2 bg-white rounded-full" />
          </div>  */}
        </div>
      </div>
      <div>
        
      </div>
      {/* 2. Orta Logo Alanı */}
      <div className="flex justify-center mb-16">
        <Link href="/" className="text-3xl font-black tracking-tighter italic flex items-center ">
           <img src="./logo.png" alt=""  className="w-15 " /> 
           dolphinx 
        </Link>
      </div>

      {/* 3. Sertifika ve Rating Logoları (Placeholder) */}
      {/* <div className="flex justify-center gap-8 mb-12 opacity-80">
        <div className="w-16 h-20 border border-white/20 flex items-center justify-center text-[10px] text-center p-1">
          PRIVACY CERTIFIED
        </div>
        <div className="w-16 h-20 border border-white/20 flex items-center justify-center text-2xl font-bold">
          M
        </div>
      </div> */}

      {/* 4. Dinamik Telif Hakları ve İsim */}
      <div className="text-center mb-8">
        <p className="text-[11px] md:text-[13px] tracking-[0.2em] text-gray-400 font-medium uppercase">
          {/* © / TM / ® */} 2019 – {currentYear} Sardor Azimov. All rights reserved.
        </p>
      </div>

      {/* 5. Kurumsal Buton */}
      <Link href="/" className="flex justify-center mb-10">
        <button className="border-2 border-white/20 px-10 py-3 text-[12px] font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300 active:scale-95">
          WebSite
        </button>
      </Link>

      {/* 6. En Alt Dil/Ülke Seçimi */}
      <div className="flex w-full justify-center items-center gap-4">
        <Link href="/"><Globe size={14} /></Link>
         <Link href="https://github.com/sardorazimov"><Github size={14} /></Link>
        <span className="text-[10px] font-bold tracking-widest uppercase"></span>
      </div>
    </footer>
  );
};
 
export default Footer;