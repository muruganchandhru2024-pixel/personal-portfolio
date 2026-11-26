"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Palette,
  Zap,
  Terminal,
  Layers,
  Eye,
  GitBranch,
  Cpu,
  Sparkles,
  Smartphone,
  Cloud,
  Scan,
  Box,
  Orbit,
  Grid,
  CheckCircle,
} from "lucide-react";
import { GithubIcon } from "@/components/BrandIcons";
import { PORTFOLIO_DATA, SkillNode } from "@/data/portfolioData";
import { soundFx } from "@/utils/audio";

const ICON_MAP: Record<string, React.ElementType> = {
  Code2,
  Palette,
  Zap,
  Terminal,
  Layers,
  Eye,
  GitBranch,
  Github: GithubIcon,
  Cpu,
  Sparkles,
  Smartphone,
  Cloud,
  Scan,
  Box,
};

const CATEGORIES = [
  "All Categories",
  "Programming & Web",
  "Frameworks & Libraries",
  "Tools",
  "Technical Concepts",
] as const;

export const SkillsUniverse: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<SkillNode>(PORTFOLIO_DATA.skills[0]);
  const [viewMode, setViewMode] = useState<"universe" | "grid">("universe");
  const [activeCategory, setActiveCategory] = useState<string>("All Categories");

  const filteredSkills =
    activeCategory === "All Categories"
      ? PORTFOLIO_DATA.skills
      : PORTFOLIO_DATA.skills.filter((s) => s.category === activeCategory);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Programming & Web":
        return {
          border: "border-brand-cyan/40",
          bg: "bg-brand-cyan/10",
          text: "text-brand-cyan",
          glow: "rgba(0, 217, 255, 0.4)",
        };
      case "Frameworks & Libraries":
        return {
          border: "border-brand-violet/40",
          bg: "bg-brand-violet/10",
          text: "text-brand-violet",
          glow: "rgba(168, 85, 247, 0.4)",
        };
      case "Tools":
        return {
          border: "border-brand-indigo/40",
          bg: "bg-brand-indigo/10",
          text: "text-brand-indigo",
          glow: "rgba(99, 102, 241, 0.4)",
        };
      default:
        return {
          border: "border-amber-400/40",
          bg: "bg-amber-400/10",
          text: "text-amber-400",
          glow: "rgba(251, 191, 36, 0.4)",
        };
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-12 relative w-full max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-brand-cyan/20 text-xs font-mono text-brand-cyan">
            <Terminal className="w-3.5 h-3.5" />
            <span>SECTION_02 // KNOWLEDGE TOPOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
            My Technology <span className="text-gradient-neon">Universe.</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl font-mono">
            Interconnected technical domains, libraries, and engineering tools. No fabricated metrics.
          </p>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-2 p-1 rounded-xl bg-[#10101C] border border-white/10 backdrop-blur-md self-start md:self-auto font-mono text-xs">
          <button
            onClick={() => {
              soundFx.playClick();
              setViewMode("universe");
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              viewMode === "universe"
                ? "bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/40 shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Orbit className="w-3.5 h-3.5" />
            <span>Orbital Universe</span>
          </button>
          <button
            onClick={() => {
              soundFx.playClick();
              setViewMode("grid");
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              viewMode === "grid"
                ? "bg-brand-violet/20 text-brand-violet border border-brand-violet/40 shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Grid className="w-3.5 h-3.5" />
            <span>Accessible Grid</span>
          </button>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2 mb-8 font-mono text-xs">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              soundFx.playClick();
              setActiveCategory(cat);
            }}
            className={`px-3 py-1.5 rounded-lg border transition-all ${
              activeCategory === cat
                ? "bg-white/10 text-white border-brand-cyan/50 shadow-sm"
                : "bg-white/[0.02] text-slate-400 border-white/5 hover:text-white hover:bg-white/5"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* View Display */}
      {viewMode === "universe" ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Orbital Interactive Universe Visualization */}
          <div className="lg:col-span-8 relative aspect-square max-h-[580px] w-full mx-auto rounded-3xl glass-panel border border-brand-cyan/20 flex items-center justify-center overflow-hidden p-4 hud-corner select-none">
            {/* Background Orbital Rings */}
            <div className="absolute w-[240px] h-[240px] rounded-full border border-dashed border-white/10 pointer-events-none" />
            <div className="absolute w-[360px] h-[360px] rounded-full border border-white/5 pointer-events-none" />
            <div className="absolute w-[480px] h-[480px] rounded-full border border-dashed border-brand-cyan/15 pointer-events-none animate-spin-slow" />

            {/* Central Developer Core */}
            <motion.div
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-20 w-24 h-24 rounded-2xl bg-gradient-to-br from-brand-cyan/30 via-[#10101C] to-brand-violet/30 border-2 border-brand-cyan flex flex-col items-center justify-center p-2 text-center shadow-neonCyan cursor-pointer group"
            >
              <div className="font-mono text-[9px] text-brand-cyan tracking-wider font-bold">
                CORE.EXE
              </div>
              <div className="font-heading font-extrabold text-sm text-white">
                CHANDHRU
              </div>
              <div className="text-[9px] font-mono text-slate-400">SKCT CSE</div>
            </motion.div>

            {/* Floating Orbiting Satellite Nodes */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {filteredSkills.map((skill, index) => {
                const total = filteredSkills.length;
                const angle = (index / total) * 2 * Math.PI;
                // Alternate between inner, middle and outer orbit radii
                const radii = [130, 190, 240];
                const radius = radii[index % radii.length];
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                const isSelected = selectedSkill.id === skill.id;
                const colors = getCategoryColor(skill.category);
                const Icon = ICON_MAP[skill.iconName] || Code2;

                return (
                  <motion.button
                    key={skill.id}
                    onClick={() => {
                      soundFx.playClick();
                      setSelectedSkill(skill);
                    }}
                    onMouseEnter={() => {
                      soundFx.playHover();
                      setSelectedSkill(skill);
                    }}
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                    className={`pointer-events-auto absolute p-2 rounded-xl flex items-center gap-2 border transition-all duration-300 backdrop-blur-md shadow-lg ${
                      isSelected
                        ? `${colors.border} bg-[#10101C] text-white scale-110 z-30 shadow-neonCyan`
                        : "bg-[#0d0d1a]/85 border-white/10 text-slate-300 hover:border-brand-cyan/60 hover:text-white hover:scale-105 z-10"
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isSelected ? colors.text : "text-slate-400"}`} />
                    <span className="font-mono text-xs font-semibold whitespace-nowrap hidden sm:inline">
                      {skill.name}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* Telemetry Footer */}
            <div className="absolute bottom-3 right-4 font-mono text-[10px] text-slate-400 pointer-events-none">
              INTERACTIVE_NODES: {filteredSkills.length} • HOVER OR TAP
            </div>
          </div>

          {/* Node Inspector Detail Panel */}
          <div className="lg:col-span-4 h-full flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedSkill.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="p-6 rounded-2xl glass-panel border border-brand-cyan/30 hud-corner space-y-4 shadow-xl"
              >
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="font-mono text-[11px] text-brand-cyan tracking-wider uppercase font-semibold">
                    NODE_INSPECTOR // {selectedSkill.id.toUpperCase()}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400">
                    VERIFIED
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/40 flex items-center justify-center text-brand-cyan">
                    {React.createElement(ICON_MAP[selectedSkill.iconName] || Code2, {
                      className: "w-6 h-6",
                    })}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading text-white">
                      {selectedSkill.name}
                    </h3>
                    <div className="text-xs font-mono text-brand-violet">
                      {selectedSkill.category}
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-sans pt-1">
                  {selectedSkill.description}
                </p>

                <div className="pt-3 border-t border-white/5 space-y-2 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Active in Engineering Workflow</span>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Portfolio & Project Application: Verified hands-on coursework & project exposure.
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      ) : (
        /* Accessible Grid View */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill) => {
            const colors = getCategoryColor(skill.category);
            const Icon = ICON_MAP[skill.iconName] || Code2;

            return (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onMouseEnter={() => soundFx.playHover()}
                className="p-5 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between space-y-3"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-9 h-9 rounded-lg ${colors.bg} border ${colors.border} flex items-center justify-center ${colors.text}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">
                      {skill.category.split(" ")[0]}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-base font-bold font-heading text-white">
                      {skill.name}
                    </h4>
                    <p className="text-xs text-slate-300 mt-1.5 leading-relaxed font-sans">
                      {skill.description}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>CATEGORY</span>
                  <span className={colors.text}>{skill.category}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </section>
  );
};
