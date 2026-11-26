"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Compass,
  MapPin,
  Briefcase,
  Layers,
  Code2,
  Terminal,
  CheckCircle2,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { soundFx } from "@/utils/audio";

export const AboutBento: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-12 relative w-full max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-14 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-brand-cyan/20 text-xs font-mono text-brand-cyan">
          <Terminal className="w-3.5 h-3.5" />
          <span>SECTION_01 // IDENTITY MATRIX</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
          Behind the <span className="text-gradient-neon">Interface.</span>
        </h2>
        <p className="text-slate-400 text-sm max-w-2xl font-mono">
          Engineering principles, verified academic trajectory, and technical vision.
        </p>
      </div>

      {/* Primary Introduction Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="p-6 sm:p-8 rounded-2xl glass-panel border border-brand-cyan/20 hud-corner mb-8 relative overflow-hidden"
      >
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-cyan/10 rounded-full blur-2xl pointer-events-none" />
        <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-sans max-w-4xl">
          {PORTFOLIO_DATA.personal.bio}
        </p>
      </motion.div>

      {/* Futuristic Editorial Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1: Academic Background */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          onMouseEnter={() => soundFx.playHover()}
          className="p-6 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between space-y-4"
        >
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase text-brand-cyan tracking-wider">
                ACADEMIC TRAJECTORY
              </span>
              <h3 className="text-lg font-bold font-heading text-white">
                B.E. Computer Science Engineering
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {PORTFOLIO_DATA.personal.college}
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-white/5 space-y-2 font-mono text-xs">
            <div className="flex justify-between items-center">
              <span className="text-slate-400">Cumulative Grade:</span>
              <span className="text-brand-cyan font-bold">8.0 / 10.0 CGPA</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-400">Academic Standing:</span>
              <span className="text-white font-medium">Up to 4th Semester</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-400">Target Graduation:</span>
              <span className="text-brand-violet font-semibold">2027 Cohort</span>
            </div>
          </div>
        </motion.div>

        {/* Card 2: Development Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onMouseEnter={() => soundFx.playHover()}
          className="p-6 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between space-y-4"
        >
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-brand-violet/10 border border-brand-violet/30 flex items-center justify-center text-brand-violet">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase text-brand-violet tracking-wider">
                ENGINEERING ETHOS
              </span>
              <h3 className="text-lg font-bold font-heading text-white">
                Development Philosophy
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Clean, intentional, and modular software architecture. Believing that software
                should not merely execute logic, but deliver frictionless, accessible, and
                visually compelling user experiences.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5 font-mono text-[10px]">
            <span className="px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10">
              Clean Code
            </span>
            <span className="px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10">
              Design Systems
            </span>
            <span className="px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10">
              User-Centricity
            </span>
          </div>
        </motion.div>

        {/* Card 3: Areas of Interest */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          onMouseEnter={() => soundFx.playHover()}
          className="p-6 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between space-y-4"
        >
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-brand-indigo/10 border border-brand-indigo/30 flex items-center justify-center text-brand-indigo">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase text-brand-indigo tracking-wider">
                TECHNICAL HORIZONS
              </span>
              <h3 className="text-lg font-bold font-heading text-white">
                Areas of Interest
              </h3>
            </div>
          </div>

          <div className="space-y-2.5 text-xs text-slate-300">
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-1.5 shrink-0" />
              <div>
                <span className="font-semibold text-white">Modern Web Engineering:</span>{" "}
                Building performant, responsive web apps using React, Next.js, and TypeScript.
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-violet mt-1.5 shrink-0" />
              <div>
                <span className="font-semibold text-white">Computer Vision & AI:</span>{" "}
                Exploring object detection, video analysis pipelines with OpenCV & Python.
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-indigo mt-1.5 shrink-0" />
              <div>
                <span className="font-semibold text-white">Full-Stack Architecture:</span>{" "}
                RESTful APIs, authenticated workflows, database schema design, and modular microservices.
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 4: Internship Availability */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onMouseEnter={() => soundFx.playHover()}
          className="p-6 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between space-y-4 border-l-4 border-l-brand-emerald"
        >
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase text-emerald-400 tracking-wider">
                CURRENT RECRUITMENT STATUS
              </span>
              <h3 className="text-lg font-bold font-heading text-white">
                Internship Availability
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Actively open for Software Engineering & Web Development internship roles.
                Ready for high-impact contributions in fast-moving technical environments.
              </p>
            </div>
          </div>

          <div className="pt-3 border-t border-white/5 space-y-1.5 font-mono text-[11px]">
            <div className="flex items-center gap-2 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Available for On-site & Remote</span>
            </div>
            <div className="text-slate-400">
              Active Intern: FortuMars AI Technologies (2025–Present)
            </div>
          </div>
        </motion.div>

        {/* Card 5: Location & Timezone */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          onMouseEnter={() => soundFx.playHover()}
          className="p-6 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between space-y-4"
        >
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase text-amber-400 tracking-wider">
                GEOSPATIAL COORDINATES
              </span>
              <h3 className="text-lg font-bold font-heading text-white">
                Coimbatore, Tamil Nadu
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                South India • Industrial & Technology Education Hub
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-white/5 space-y-2 font-mono text-xs text-slate-400">
            <div className="flex justify-between items-center">
              <span>Timezone:</span>
              <span className="text-white">IST (UTC +5:30)</span>
            </div>
            <div className="flex justify-between items-center">
              <span>College Campus:</span>
              <span className="text-brand-cyan">SKCT Kovaipudur</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Relocation Readiness:</span>
              <span className="text-emerald-400 font-semibold">Open to Relocation</span>
            </div>
          </div>
        </motion.div>

        {/* Card 6: Technical Focus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          onMouseEnter={() => soundFx.playHover()}
          className="p-6 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between space-y-4"
        >
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase text-brand-cyan tracking-wider">
                ENGINEERING COMPETENCY
              </span>
              <h3 className="text-lg font-bold font-heading text-white">
                Technical Focus
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Focused on production-viable code, full-stack workflow integration,
                and bridging intelligent algorithmic models with responsive interfaces.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5 font-mono text-[11px]">
            <span className="px-2 py-0.5 rounded bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/30">
              React + TypeScript
            </span>
            <span className="px-2 py-0.5 rounded bg-brand-violet/10 text-brand-violet border border-brand-violet/30">
              Python + OpenCV
            </span>
            <span className="px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10">
              REST APIs + SQL
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
