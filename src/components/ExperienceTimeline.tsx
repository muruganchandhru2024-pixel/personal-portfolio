"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Terminal,
  Building,
  GraduationCap,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { soundFx } from "@/utils/audio";

export const ExperienceTimeline: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>("fortumars-internship");

  const toggleExpand = (id: string) => {
    soundFx.playClick();
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-12 relative w-full max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-14 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-brand-cyan/20 text-xs font-mono text-brand-cyan">
          <Terminal className="w-3.5 h-3.5" />
          <span>SECTION_03 // CAREER TRAJECTORY</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
          The Journey <span className="text-gradient-neon">So Far.</span>
        </h2>
        <p className="text-slate-400 text-sm max-w-2xl font-mono">
          Verified professional internship exposure and engineering milestones.
        </p>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative pl-6 sm:pl-10 border-l-2 border-brand-cyan/20 space-y-12">
        {/* Node: FortuMars AI Technologies Internship */}
        {PORTFOLIO_DATA.experience.map((exp) => {
          const isExpanded = expandedId === exp.id;

          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Glowing Timeline Marker */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#10101C] border-2 border-brand-cyan flex items-center justify-center shadow-neonCyan">
                <Briefcase className="w-3.5 h-3.5 text-brand-cyan" />
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-brand-cyan/30 hud-corner space-y-4">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/10">
                  <div>
                    <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-400 mb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{exp.badge}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-brand-cyan text-sm font-semibold mt-1">
                      <Building className="w-4 h-4 text-brand-cyan shrink-0" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="font-mono text-xs space-y-1 text-slate-400 sm:text-right">
                    <div className="flex items-center sm:justify-end gap-1.5 text-brand-cyan">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center sm:justify-end gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-brand-violet" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Verified Responsibilities */}
                <div className="space-y-2.5">
                  <div className="text-xs uppercase font-mono text-slate-400 tracking-wider">
                    Core Engineering Responsibilities
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-sans">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-brand-cyan mt-0.5 shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Toggle Expansion for technical breakdown */}
                <button
                  onClick={() => toggleExpand(exp.id)}
                  className="flex items-center gap-2 text-xs font-mono text-brand-cyan hover:underline pt-2"
                >
                  <span>{isExpanded ? "Collapse Technical Focus" : "Expand Technical Focus & Exposure"}</span>
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="pt-4 border-t border-white/5 space-y-3"
                    >
                      <div className="text-xs font-mono text-slate-400">
                        Skills Applied & Practiced:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.skillsApplied.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-lg bg-white/5 border border-brand-cyan/20 text-xs font-mono text-brand-cyan"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}

        {/* Milestone Node: Sri Krishna College of Technology Matriculation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#10101C] border-2 border-brand-violet flex items-center justify-center shadow-neonViolet">
            <GraduationCap className="w-3.5 h-3.5 text-brand-violet" />
          </div>

          <div className="p-6 rounded-2xl glass-panel border border-white/10 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h3 className="text-base sm:text-lg font-bold font-heading text-white">
                B.E. Computer Science Engineering Matriculation
              </h3>
              <span className="text-xs font-mono text-brand-violet">2023 – 2027</span>
            </div>
            <div className="text-xs text-brand-cyan font-mono">
              Sri Krishna College of Technology, Coimbatore
            </div>
            <p className="text-xs text-slate-400 font-sans leading-relaxed">
              Achieved 8.0/10.0 cumulative CGPA across 4 completed semesters, focusing on
              core computer science curricula, algorithm analysis, object-oriented systems, and web technologies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
