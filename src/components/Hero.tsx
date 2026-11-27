"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight, FileDown, Mail, Terminal, MapPin } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { soundFx } from "@/utils/audio";

const HeroCanvas = dynamic(
  () => import("./Hero3D/HeroCanvas").then((mod) => mod.HeroCanvas),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full min-h-[440px] lg:min-h-[580px] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 rounded-full border-2 border-brand-cyan/20 border-t-brand-cyan animate-spin" />
          <span className="font-mono text-xs text-brand-cyan/70">INITIALIZING 3D CORE...</span>
        </div>
      </div>
    ),
  }
);

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const scrollTo = (id: string) => {
    soundFx.playClick();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-12 overflow-hidden"
    >
      {/* Background Atmosphere Gradients */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-brand-violet/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Personal Branding & Cinematic Typography */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6 z-10">
          {/* Availability Indicator */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#10101C] border border-brand-emerald/30 text-xs font-mono text-emerald-400 shadow-sm shadow-emerald-500/10"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="tracking-wide font-semibold">
              {PORTFOLIO_DATA.personal.availability}
            </span>
          </motion.div>

          {/* Main Typography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-2"
          >
            <div className="font-mono text-xs sm:text-sm text-brand-cyan tracking-widest uppercase flex items-center gap-2">
              <Terminal className="w-4 h-4 text-brand-cyan" />
              <span>HELLO,CLOUD WORLD.</span>
            </div>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold font-heading tracking-tight text-white leading-none">
              I&apos;M{" "}
              <span className="text-gradient-neon">
                {PORTFOLIO_DATA.personal.name.toUpperCase()}
              </span>
            </h1>

            <div className="text-xl sm:text-2xl lg:text-3xl font-heading font-medium text-slate-200">
              Engineering Ideas Into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-violet underline decoration-brand-cyan/40 decoration-2 underline-offset-8">
                Digital Reality.
              </span>
            </div>
          </motion.div>

          {/* Supporting Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-brand-textSecondary max-w-xl leading-relaxed font-sans"
          >
            Computer Science Engineering student passionate about building intelligent,
            interactive, and user-focused digital experiences through software engineering,
            web development, and computer vision.
          </motion.p>

          {/* Key Verified Stats Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-xl pt-2 font-mono"
          >
            {PORTFOLIO_DATA.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-brand-cyan/30 transition-colors"
              >
                <div className="text-base sm:text-lg font-bold text-white font-heading">
                  {stat.value}
                </div>
                <div className="text-[10px] text-brand-cyan font-semibold">
                  {stat.label}
                </div>
                <div className="text-[9px] text-slate-400 truncate">
                  {stat.subtitle}
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto"
          >
            {/* Explore My Work CTA */}
            <button
              onClick={() => scrollTo("projects")}
              onMouseEnter={() => soundFx.playHover()}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-violet text-brand-deep font-heading font-bold text-sm shadow-neonCyan hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Download Resume CTA */}
            <button
              onClick={() => {
                soundFx.playClick();
                onOpenResume();
              }}
              onMouseEnter={() => soundFx.playHover()}
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#10101C] hover:bg-white/5 border border-white/15 hover:border-brand-cyan/50 text-slate-200 hover:text-white font-heading font-medium text-sm transition-all"
            >
              <FileDown className="w-4 h-4 text-brand-cyan" />
              <span>Download Resume</span>
            </button>

            {/* Let's Connect CTA */}
            <button
              onClick={() => scrollTo("contact")}
              onMouseEnter={() => soundFx.playHover()}
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-transparent hover:bg-white/5 border border-white/10 text-slate-300 hover:text-white font-heading text-sm transition-all"
            >
              <Mail className="w-4 h-4 text-brand-violet" />
              <span>Let&apos;s Connect</span>
            </button>
          </motion.div>

          {/* Micro Telemetry Footer */}
          <div className="flex items-center gap-4 text-xs font-mono text-slate-400 pt-2">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-brand-indigo" />
              Coimbatore, TN, India
            </span>
            <span>•</span>
            <span className="text-slate-400">SKCT B.E. CSE</span>
          </div>
        </div>

        {/* Right Column: Custom Interactive 3D Digital Sculpture */}
        <div className="lg:col-span-5 flex items-center justify-center relative">
          <HeroCanvas />
        </div>
      </div>
    </section>
  );
};
