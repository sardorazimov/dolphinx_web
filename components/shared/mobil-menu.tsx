"use client";

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";
// Buton yolunu kontrol et

const navLinks = ["Get Started", "Developers", "Doc", ""];

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="">
       

        {/* Desktop CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <Button variant="outline">Get Started</Button>
          </div>
          
          {/* Hamburger Menu Button */}
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay & Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Arkaplan Karartma (Overlay) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0  md:hidden"
            />

            {/* Sağdan Açılan Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-[280px]  border-l border-white/10 z-[70] p-8 shadow-2xl md:hidden"
            >
              {/* Kapatma Butonu */}
              <button 
                className="absolute top-6 right-6 p-2 text-foreground"
                onClick={() => setIsOpen(false)}
              >
                <X size={28} />
              </button>

              {/* Linkler Listesi */}
              <div className="flex flex-col gap-8 mt-16">
                {navLinks.map((link) => (
                  <a
                    key={link}
                    href="#"
                    onClick={() => setIsOpen(false)}
                    className="text-xl font-medium text-foreground hover:text-blue-400 transition-colors"
                  >
                    {link}
                  </a>
                ))}
                <div className="pt-4 border-t border-white/10">
                  <Button variant="outline">Get Started</Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;