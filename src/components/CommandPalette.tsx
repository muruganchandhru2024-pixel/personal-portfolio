"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  FileDown,
  Mail,
  Compass,
  Volume2,
  VolumeX,
  X,
  ArrowRight,
  Code2,
  Briefcase,
  Layers,
  GraduationCap,
} from "lucide-react";
import { LinkedinIcon } from "@/components/BrandIcons";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { soundFx } from "@/utils/audio";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
  onToggleSound: () => void;
  isMuted: boolean;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenResume,
  onToggleSound,
  isMuted,
}) => {
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open
          soundFx.playClick();
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    soundFx.playSuccess();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollTo = (id: string) => {
    soundFx.playClick();
    onClose();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { label: "Home / Hero Core", id: "hero", icon: Compass, category: "Navigation" },
    { label: "About / Behind the Interface", id: "about", icon: Layers, category: "Navigation" },
    { label: "Technology Universe / Skills", id: "skills", icon: Code2, category: "Navigation" },
    { label: "Experience / FortuMars Intern", id: "experience", icon: Briefcase, category: "Navigation" },
    { label: "Flagship Project / VisionFlow", id: "projects", icon: Layers, category: "Navigation" },
    { label: "Academic / SKCT & Certifications", id: "education", icon: GraduationCap, category: "Navigation" },
    { label: "Contact / Direct Communication", id: "contact", icon: Mail, category: "Navigation" },
  ];

  const filteredNav = navItems.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 select-none">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Palette Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-xl rounded-xl border border-brand-cyan/30 bg-[#10101C] p-4 shadow-2xl z-10 hud-corner font-mono"
          >
            {/* Input Bar */}
            <div className="flex items-center gap-3 border-b border-white/10 pb-3">
              <Search className="w-5 h-5 text-brand-cyan shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type command or jump to section... (e.g. skills, visionflow, email)"
                autoFocus
                className="w-full bg-transparent text-sm text-white focus:outline-none placeholder:text-slate-500 font-sans"
              />
              <button
                onClick={onClose}
                className="text-slate-400 hover:text-white transition-colors p-1"
                aria-label="Close command palette"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Actions Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 py-3 border-b border-white/10 text-xs">
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 p-2 rounded-lg bg-white/5 hover:bg-brand-cyan/15 hover:text-brand-cyan transition-colors text-left"
              >
                <Mail className="w-3.5 h-3.5 text-brand-cyan" />
                <span className="truncate">{copied ? "Copied!" : "Copy Email"}</span>
              </button>

              <button
                onClick={() => {
                  onClose();
                  onOpenResume();
                }}
                className="flex items-center gap-1.5 p-2 rounded-lg bg-white/5 hover:bg-brand-violet/15 hover:text-brand-violet transition-colors text-left"
              >
                <FileDown className="w-3.5 h-3.5 text-brand-violet" />
                <span className="truncate">Resume</span>
              </button>

              <a
                href={PORTFOLIO_DATA.personal.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 p-2 rounded-lg bg-white/5 hover:bg-brand-indigo/15 hover:text-brand-indigo transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-brand-indigo" />
                <span>LinkedIn</span>
              </a>

              <button
                onClick={onToggleSound}
                className="flex items-center gap-1.5 p-2 rounded-lg bg-white/5 hover:bg-amber-400/15 hover:text-amber-400 transition-colors text-left"
              >
                {isMuted ? (
                  <>
                    <VolumeX className="w-3.5 h-3.5 text-slate-400" />
                    <span>Unmute</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-brand-cyan" />
                    <span>Mute Sound</span>
                  </>
                )}
              </button>
            </div>

            {/* Navigation Results */}
            <div className="max-h-64 overflow-y-auto space-y-1 py-2 font-sans">
              <div className="text-[10px] uppercase font-mono text-slate-400 px-2 py-1">
                Sections & Teleports
              </div>
              {filteredNav.length === 0 ? (
                <div className="p-4 text-center text-xs text-slate-400">
                  No matching telemetry routes found.
                </div>
              ) : (
                filteredNav.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollTo(item.id)}
                      className="w-full flex items-center justify-between p-2.5 rounded-lg hover:bg-brand-cyan/10 hover:text-brand-cyan transition-colors text-left group"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-4 h-4 text-brand-cyan/80 group-hover:text-brand-cyan" />
                        <span className="text-xs text-slate-200 group-hover:text-white font-medium">
                          {item.label}
                        </span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-brand-cyan" />
                    </button>
                  );
                })
              )}
            </div>

            {/* Footer */}
            <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-400">
              <span className="flex items-center gap-1">
                Navigate using <kbd className="px-1 py-0.5 rounded bg-white/10 text-white">↑</kbd> <kbd className="px-1 py-0.5 rounded bg-white/10 text-white">↓</kbd>
              </span>
              <span>CHANDHRU.EXE OS HUD</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
