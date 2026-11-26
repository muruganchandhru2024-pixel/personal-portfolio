"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  ExternalLink,
  CheckCircle2,
  Terminal,
  FileCheck,
  X,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { soundFx } from "@/utils/audio";

export const EducationCertifications: React.FC = () => {
  const [showCertModal, setShowCertModal] = useState(false);

  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-12 relative w-full max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-14 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-brand-cyan/20 text-xs font-mono text-brand-cyan">
          <Terminal className="w-3.5 h-3.5" />
          <span>SECTION_05 // ACADEMICS & CREDENTIALS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
          Education & <span className="text-gradient-neon">Certifications.</span>
        </h2>
        <p className="text-slate-400 text-sm max-w-2xl font-mono">
          Rigorous academic foundations and verified technical industry qualifications.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Education Column */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-brand-cyan font-bold pb-2 border-b border-white/10">
            <GraduationCap className="w-4 h-4 text-brand-cyan" />
            <span>Academic Qualifications</span>
          </div>

          <div className="space-y-4">
            {PORTFOLIO_DATA.education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-brand-cyan/30 transition-all space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold font-heading text-white">
                      {edu.degree}
                    </h3>
                    <div className="text-xs text-brand-cyan font-mono mt-0.5">
                      {edu.institution}
                    </div>
                  </div>
                  <div className="font-mono text-xs text-brand-emerald bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 self-start sm:self-auto font-semibold">
                    {edu.gradeMetric}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-brand-violet" />
                    {edu.duration}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-brand-indigo" />
                    {edu.location}
                  </span>
                </div>

                <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 font-sans pt-1">
                  {edu.details.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Column */}
        <div id="certifications" className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-brand-violet font-bold pb-2 border-b border-white/10">
            <Award className="w-4 h-4 text-brand-violet" />
            <span>Verified Industry Certifications</span>
          </div>

          <div className="space-y-4">
            {PORTFOLIO_DATA.certifications.map((cert) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl glass-panel border border-brand-violet/30 hud-corner space-y-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-violet/10 border border-brand-violet/30 flex items-center justify-center text-brand-violet shrink-0">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-brand-emerald">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>OFFICIALLY VERIFIED CREDENTIAL</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold font-heading text-white mt-1">
                      {cert.title}
                    </h3>
                    <div className="text-xs text-brand-cyan font-mono">
                      {cert.issuer}
                    </div>
                  </div>
                </div>

                <div className="font-mono text-xs text-slate-400 flex items-center justify-between pt-1">
                  <span>Issued Date:</span>
                  <span className="text-white">{cert.issueDate}</span>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cert.skills.map((s, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-slate-300 border border-white/10"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-white/5 flex gap-2">
                  <button
                    onClick={() => {
                      soundFx.playClick();
                      setShowCertModal(true);
                    }}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-brand-violet/15 hover:bg-brand-violet/25 border border-brand-violet/40 text-xs font-mono text-brand-violet transition-colors"
                  >
                    <span>View Certificate PDF</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href="https://verify.onwingspan.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 transition-colors"
                    title="Verify on Wingspan portal"
                  >
                    Wingspan
                  </a>
                </div>
              </motion.div>
            ))}

            {/* Additional Academic Certifications & Continuous Learning card */}
            <div className="p-6 rounded-2xl glass-panel border border-white/10 space-y-3">
              <span className="font-mono text-xs text-brand-cyan uppercase tracking-wider font-semibold">
                Continuous Technical Advancement
              </span>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Active pursuit of modern full-stack engineering standards, edge AI architectures,
                and scalable cloud fundamentals as an ongoing focus during the B.E. CSE curriculum at SKCT.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Viewer Modal */}
      <AnimatePresence>
        {showCertModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCertModal(false)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-[#10101C] border border-brand-violet/50 rounded-2xl p-6 shadow-2xl z-10 hud-corner space-y-4"
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="font-mono text-xs text-brand-violet font-bold">
                  INFOSYS SPRINGBOARD CERTIFICATE VIEWER
                </span>
                <button
                  onClick={() => setShowCertModal(false)}
                  className="p-1 rounded text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="w-full h-80 rounded-xl overflow-hidden bg-black/50 border border-white/10 flex items-center justify-center">
                <iframe
                  src="/infosys-cert.pdf"
                  className="w-full h-full"
                  title="Infosys Springboard Certificate"
                />
              </div>

              <div className="flex justify-between items-center text-xs font-mono text-slate-400 pt-2">
                <span>Verification: verify.onwingspan.com</span>
                <a
                  href="/infosys-cert.pdf"
                  download="Chandhru_M_Infosys_Certificate.pdf"
                  className="text-brand-cyan hover:underline"
                >
                  Download PDF
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
