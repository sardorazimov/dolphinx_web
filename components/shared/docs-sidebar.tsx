"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BookOpen, Zap, Shield, ChevronRight, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const sidebarLinks = [
  { label: "Overview", href: "/docs", icon: BookOpen },
  { label: "Getting Started", href: "/docs/getting-started", icon: ChevronRight },
  { label: "Attack Tools", href: "/docs/attack-tools", icon: Zap },
  { label: "Defense Lab", href: "/docs/defense-lab", icon: Shield },
];

function SidebarLinks() {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col gap-1 p-4">
      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 px-3 mb-3">
        Documentation
      </p>
      {sidebarLinks.map(({ label, href, icon: Icon }) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all",
              active
                ? "bg-[#00d4aa]/10 text-[#00d4aa] border border-[#00d4aa]/20"
                : "text-white/60 hover:text-white hover:bg-white/[0.05]"
            )}
          >
            <Icon size={15} />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}

export function DocsSidebar() {
  return (
    <aside className="hidden md:flex flex-col w-56 shrink-0 border-r border-white/10 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
      <SidebarLinks />
    </aside>
  );
}

export function DocsMobileNav() {
  return (
    <div className="md:hidden flex items-center gap-3 px-4 py-3 border-b border-white/10 sticky top-16 bg-background z-10">
      <Sheet>
        <SheetTrigger asChild>
          <button className="p-2 text-white/60 hover:text-white">
            <Menu size={20} />
          </button>
        </SheetTrigger>
        <SheetContent side="left" className="w-56 p-0 bg-background border-white/10">
          <SidebarLinks />
        </SheetContent>
      </Sheet>
      <span className="text-sm text-white/60">Documentation</span>
    </div>
  );
}
