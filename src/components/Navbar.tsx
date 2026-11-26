"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Command,
  FileDown,
  Volume2,
  VolumeX,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { soundFx } from "@/utils/audio";

interface NavbarProps {
  onOpenCommand: () => void;
  onOpenResume: () => void;
  onToggleSound: () => void;
  isMuted: boolean;
}

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCommand,
  onOpenResume,
  onToggleSound,
  isMuted,
}) => {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Section spy
      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPos = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    soundFx.playClick();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 flex justify-center px-4 sm:px-6 pt-3 sm:pt-4 ${
          isScrolled ? "pointer-events-none" : ""
        }`}
      >
        <nav
          className={`pointer-events-auto w-full max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-2xl transition-all duration-300 ${
            isScrolled
              ? "bg-[#10101C]/85 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50"
              : "bg-[#10101C]/60 backdrop-blur-md border border-white/5"
          }`}
        >
          {/* Custom CM Monogram Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#hero");
            }}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-brand-cyan/20 to-brand-violet/20 border border-brand-cyan/40 flex items-center justify-center font-mono font-bold text-xs text-brand-cyan group-hover:scale-105 group-hover:border-brand-cyan transition-all shadow-glowSm">
              <span>CM</span>
              <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-sm tracking-wide text-white group-hover:text-brand-cyan transition-colors">
                CHANDHRU<span className="text-brand-cyan">.EXE</span>
              </span>
              <span className="text-[9px] font-mono text-brand-textSecondary tracking-wider -mt-1 hidden sm:block">
                BEYOND THE INTERFACE
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 font-mono text-xs">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  onMouseEnter={() => soundFx.playHover()}
                  className={`relative px-3 py-1.5 rounded-lg transition-all ${
                    isActive
                      ? "text-brand-cyan font-semibold"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-brand-cyan/10 border border-brand-cyan/30 rounded-lg -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Action Tools */}
          <div className="flex items-center gap-2">
            {/* Command Palette Trigger Button */}
            <button
              onClick={() => {
                soundFx.playClick();
                onOpenCommand();
              }}
              onMouseEnter={() => soundFx.playHover()}
              className="hidden sm:flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-all"
              title="Open Command Palette (Ctrl+K)"
            >
              <Command className="w-3.5 h-3.5 text-brand-cyan" />
              <span className="text-[11px] text-slate-400">Cmd+K</span>
            </button>

            {/* Sound Toggle */}
            <button
              onClick={() => {
                soundFx.playClick();
                onToggleSound();
              }}
              onMouseEnter={() => soundFx.playHover()}
              className={`p-1.5 rounded-lg border transition-all ${
                isMuted
                  ? "bg-white/5 border-white/10 text-slate-400 hover:text-white"
                  : "bg-brand-cyan/10 border-brand-cyan/30 text-brand-cyan shadow-sm"
              }`}
              title={isMuted ? "Audio Muted (Click to enable)" : "Audio Active"}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            {/* Resume CTA */}
            <button
              onClick={() => {
                soundFx.playClick();
                onOpenResume();
              }}
              onMouseEnter={() => soundFx.playHover()}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-brand-cyan to-brand-violet text-brand-deep font-mono font-bold text-xs hover:opacity-95 hover:shadow-neonCyan transition-all"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => {
                soundFx.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="lg:hidden p-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white"
              aria-label="Toggle navigation drawer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-20 z-40 p-4 rounded-2xl bg-[#10101C]/95 backdrop-blur-2xl border border-brand-cyan/30 shadow-2xl lg:hidden font-mono space-y-2 hud-corner"
          >
            <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs text-brand-cyan">
              <span>SYSTEM NAVIGATION</span>
              <span>{PORTFOLIO_DATA.branding.systemVersion}</span>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1 font-sans">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`flex items-center gap-2 p-2.5 rounded-lg text-xs text-left transition-all ${
                      isActive
                        ? "bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30 font-bold"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span>{link.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="pt-2 border-t border-white/10 flex gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-gradient-to-r from-brand-cyan to-brand-violet text-brand-deep font-bold text-xs"
              >
                <FileDown className="w-4 h-4" />
                <span>View Resume</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCommand();
                }}
                className="px-3 py-2.5 rounded-lg bg-white/10 text-brand-cyan text-xs font-mono"
              >
                Cmd+K
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
