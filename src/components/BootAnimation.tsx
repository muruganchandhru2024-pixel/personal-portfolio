"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Cpu } from "lucide-react";

interface BootAnimationProps {
  onComplete: () => void;
}

const BOOT_LOGS = [
  { text: "INITIALIZING CHANDHRU.EXE", progress: 25, delay: 0 },
  { text: "Loading digital identity...", progress: 55, delay: 350 },
  { text: "Establishing interface protocols...", progress: 85, delay: 750 },
  { text: "System ready. Welcome.", progress: 100, delay: 1100 },
];

export const BootAnimation: React.FC<BootAnimationProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(15);
  const [isVisible, setIsVisible] = useState(true);

  const handleSkip = React.useCallback(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("chandhru_booted", "true");
    }
    setIsVisible(false);
    setTimeout(() => {
      onComplete();
    }, 250);
  }, [onComplete]);

  useEffect(() => {
    // Check if user already booted this session or prefers reduced motion
    const hasBooted = sessionStorage.getItem("chandhru_booted");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (hasBooted || prefersReducedMotion) {
      setIsVisible(false);
      onComplete();
      return;
    }

    const timers: NodeJS.Timeout[] = [];

    BOOT_LOGS.forEach((step, index) => {
      const timer = setTimeout(() => {
        setCurrentStep(index);
        setProgress(step.progress);
      }, step.delay);
      timers.push(timer);
    });

    const finishTimer = setTimeout(() => {
      handleSkip();
    }, 1500);
    timers.push(finishTimer);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === " " || e.key === "Enter") {
        handleSkip();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleSkip, onComplete]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.02 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050508] text-brand-textPrimary font-mono px-4 select-none cursor-default"
      >
        {/* Subtle grid background */}
        <div className="absolute inset-0 cyber-grid-dense opacity-20 pointer-events-none" />

        {/* Ambient glow */}
        <div className="absolute w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative w-full max-w-md p-6 rounded-lg border border-brand-cyan/30 bg-[#10101C]/90 backdrop-blur-xl shadow-2xl hud-corner">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan animate-pulse" />
              <span className="text-xs uppercase tracking-widest text-brand-cyan font-bold">
                CHANDHRU.EXE / BOOT_SEQUENCE
              </span>
            </div>
            <span className="text-[10px] text-brand-textSecondary">SYS_OK</span>
          </div>

          {/* Console lines */}
          <div className="space-y-2 mb-6 min-h-[110px]">
            {BOOT_LOGS.slice(0, currentStep + 1).map((log, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.15 }}
                className="flex items-center justify-between text-xs"
              >
                <div className="flex items-center space-x-2 text-slate-200">
                  <span className="text-brand-cyan">&gt;</span>
                  <span>{log.text}</span>
                </div>
                <span className="text-[10px] text-brand-cyan/80">
                  {idx < currentStep ? "[OK]" : "..."}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="space-y-1.5 mb-4">
            <div className="flex justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1">
                <Cpu className="w-3 h-3 text-brand-cyan" />
                KERNEL_LOAD
              </span>
              <span className="text-brand-cyan font-bold">{progress}%</span>
            </div>
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-violet rounded-full"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>
          </div>

          {/* Skip prompt */}
          <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-brand-violet" />
              Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white border border-white/10 font-bold">ESC</kbd> to bypass
            </span>
            <button
              onClick={handleSkip}
              className="text-brand-cyan hover:underline hover:text-white transition-colors"
            >
              Skip Sequence →
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
