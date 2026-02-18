"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Menu, Terminal } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "../ui/button";
import MobileMenu from "./mobil-menu";

export default function Header() {
  const { scrollY } = useScroll();

  // 0 ile 100px arası scroll yapıldığında değerleri dönüştür:
  // 1. Üstten 0px'den 15px'e iner
  const top = useTransform(scrollY, [0, 100], [0, 15]);
  
  // 2. Genişlik %100'den %90'a (veya max-w-6xl'e) düşer
  const width = useTransform(scrollY, [0, 100], ["100%", "90%"]);
  
  // 3. Kenar yuvarlaklığı 0'dan 2rem'e çıkar
  const borderRadius = useTransform(scrollY, [0, 100], ["0px", "2rem"]);
  
  // 4. Arka plan şeffaflığı ve border belirginliği
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    [")", ")"]
  );
  const borderColor = useTransform(
    scrollY,
    [0, 100],
    [")", ""]
  );

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] mt-3 flex justify-center pointer-events-none px-10 ">
      <motion.header
        style={{
          top,
          width,
          borderRadius,
          backgroundColor,
          borderColor,
        }}
        className="pointer-events-auto  flex items-center justify-between  h-16 transition-colors"
      >
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group">
          {/* <img src="" alt="" /> */}
          <span className="font-extrabold  text-4xl tracking-tighter text-white ">
            dolphinx
            <span className="text-blue-500">.</span>
          </span>
        </Link>

        {/* MENÜ LİNKLERİ */}
        <nav className="hidden md:flex items-center gap-6">
          {["Developers", "Docs", ""].map((item) => (
            <Link
              key={item}
              href={`/dashboard/${item.toLowerCase()}`}
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* AKSİYON BUTONU */}
        <button className="bg-white text-black text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-lg hover:bg-zinc-200 transition-all hidden lg:flex">
          Initialize
        </button>
        {/* MOBİL MENÜ */}
        <div className="md:hidden">
             <MobileMenu />  
        </div>
     

      </motion.header>
    </div>
  );
}