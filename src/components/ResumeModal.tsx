"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, CheckCircle2, Mail, Phone, MapPin } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { soundFx } from "@/utils/audio";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    soundFx.playSuccess();
    // Trigger download of printable PDF
    const link = document.createElement("a");
    link.href = "/infosys-cert.pdf"; // Fallback verified doc or print
    link.download = "Chandhru_M_Resume.pdf";
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="relative w-full max-w-3xl max-h-[90vh] bg-[#10101C] border border-brand-cyan/40 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10 hud-corner"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0d0d1a]">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-wider text-brand-cyan font-bold">
                VERIFIED_RESUME_RECORD // CHANDHRU M
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleDownload}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-brand-cyan/20 to-brand-violet/20 hover:from-brand-cyan/30 hover:to-brand-violet/30 border border-brand-cyan/40 text-xs font-mono text-brand-cyan transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save / Print PDF</span>
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Resume Document Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-300 font-sans text-sm selection:bg-brand-cyan/30">
            {/* Top Identity Section */}
            <div className="border-b border-white/10 pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                  {PORTFOLIO_DATA.personal.name}
                </h1>
                <p className="text-brand-cyan font-mono text-xs mt-1">
                  {PORTFOLIO_DATA.personal.role}
                </p>
                <p className="text-slate-400 text-xs mt-0.5">
                  {PORTFOLIO_DATA.personal.college} ({PORTFOLIO_DATA.personal.collegeAccreditation})
                </p>
              </div>

              <div className="font-mono text-xs space-y-1 text-slate-400 sm:text-right">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-brand-cyan" />
                  <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="hover:text-white underline">
                    {PORTFOLIO_DATA.personal.email}
                  </a>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-brand-violet" />
                  <span>{PORTFOLIO_DATA.personal.phone}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-indigo" />
                  <span>{PORTFOLIO_DATA.personal.location}</span>
                </div>
              </div>
            </div>

            {/* Career Summary */}
            <div>
              <h2 className="text-xs uppercase font-mono tracking-widest text-brand-cyan font-bold mb-2">
                Professional Profile
              </h2>
              <p className="text-xs leading-relaxed text-slate-300">
                {PORTFOLIO_DATA.personal.bio}
              </p>
            </div>

            {/* Verified Experience */}
            <div>
              <h2 className="text-xs uppercase font-mono tracking-widest text-brand-cyan font-bold mb-3">
                Industry Experience
              </h2>
              {PORTFOLIO_DATA.experience.map((exp) => (
                <div key={exp.id} className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <span className="font-bold text-white text-sm">{exp.role}</span>
                      <span className="text-slate-400 text-xs block sm:inline sm:ml-2">
                        — {exp.company}
                      </span>
                    </div>
                    <span className="font-mono text-[11px] text-brand-cyan bg-brand-cyan/10 px-2 py-0.5 rounded border border-brand-cyan/30 self-start sm:self-auto">
                      {exp.duration}
                    </span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Flagship Proposed & Capstone Projects */}
            <div>
              <h2 className="text-xs uppercase font-mono tracking-widest text-brand-cyan font-bold mb-3">
                Key Engineering Projects
              </h2>
              <div className="space-y-3">
                {/* VisionFlow */}
                <div className="p-4 rounded-xl bg-white/5 border border-brand-cyan/20 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-sm">
                      {PORTFOLIO_DATA.flagshipProject.name} — {PORTFOLIO_DATA.flagshipProject.fullTitle}
                    </span>
                    <span className="font-mono text-[10px] text-brand-cyan bg-brand-cyan/15 px-2 py-0.5 rounded">
                      [Proposed Flagship]
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">
                    {PORTFOLIO_DATA.flagshipProject.description}
                  </p>
                  <p className="text-[11px] font-mono text-slate-400 pt-1">
                    <span className="text-brand-violet font-semibold">Planned Stack:</span> {PORTFOLIO_DATA.flagshipProject.techStack.join(" • ")}
                  </p>
                </div>

                {/* TaskFlow Pro Academic Capstone */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-sm">
                      {PORTFOLIO_DATA.verifiedAcademicProject.name}
                    </span>
                    <span className="font-mono text-[10px] text-brand-emerald bg-brand-emerald/15 px-2 py-0.5 rounded">
                      [Verified Capstone]
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">
                    {PORTFOLIO_DATA.verifiedAcademicProject.description}
                  </p>
                  <p className="text-[11px] font-mono text-slate-400 pt-1">
                    <span className="text-brand-cyan font-semibold">Stack:</span> {PORTFOLIO_DATA.verifiedAcademicProject.techStack.join(" • ")}
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs uppercase font-mono tracking-widest text-brand-cyan font-bold mb-3">
                Education
              </h2>
              <div className="space-y-2">
                {PORTFOLIO_DATA.education.map((edu, i) => (
                  <div key={i} className="flex justify-between items-start text-xs border-b border-white/5 pb-2">
                    <div>
                      <div className="font-bold text-white">{edu.degree}</div>
                      <div className="text-slate-400">{edu.institution}, {edu.location}</div>
                    </div>
                    <div className="text-right font-mono">
                      <span className="text-brand-cyan">{edu.gradeMetric}</span>
                      <div className="text-[10px] text-slate-400">{edu.duration}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Verified Certifications */}
            <div>
              <h2 className="text-xs uppercase font-mono tracking-widest text-brand-cyan font-bold mb-2">
                Certifications
              </h2>
              {PORTFOLIO_DATA.certifications.map((cert) => (
                <div key={cert.id} className="flex items-center justify-between text-xs p-3 rounded-lg bg-white/5">
                  <div>
                    <span className="font-bold text-white">{cert.title}</span>
                    <span className="text-slate-400 block">{cert.issuer} • Issued {cert.issueDate}</span>
                  </div>
                  <span className="font-mono text-[10px] text-brand-emerald flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified
                  </span>
                </div>
              ))}
            </div>

            {/* Skills overview */}
            <div>
              <h2 className="text-xs uppercase font-mono tracking-widest text-brand-cyan font-bold mb-2">
                Verified Technical Skills
              </h2>
              <p className="text-xs text-slate-300">
                HTML5, CSS3, JavaScript, Python, React.js, OpenCV, Git, GitHub, VS Code, Canva, Responsive Design, Cloud Computing Fundamentals, Computer Vision, OOP.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
