"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import {
  Mail,
  Send,
  CheckCircle2,
  Copy,
  Terminal,
  MapPin,
  AlertCircle,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { soundFx } from "@/utils/audio";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please provide a valid email address"),
  role: z.string().optional(),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export const ContactTerminal: React.FC = () => {
  const [activeMode, setActiveMode] = useState<"form" | "terminal">("form");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [terminalLines, setTerminalLines] = useState<string[]>([
    "CHANDHRU.EXE v2.6.4 CLI // TYPE 'help' FOR COMMANDS",
    "Ready for encrypted transmissions.",
  ]);
  const [commandInput, setCommandInput] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    soundFx.playClick();
    // Simulate high-tech transmission
    await new Promise((resolve) => setTimeout(resolve, 800));

    soundFx.playSuccess();
    setIsSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ["#00D9FF", "#A855F7", "#6366F1"],
    });

    // Also populate a mailto fallback for direct sending
    const mailto = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${data.subject}`
    )}&body=${encodeURIComponent(
      `From: ${data.name} (${data.email})\nRole/Organization: ${data.role || "N/A"}\n\n${data.message}`
    )}`;
    window.open(mailto, "_blank");

    reset();
    setTimeout(() => setIsSubmitted(false), 6000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    soundFx.playSuccess();
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = commandInput.trim().toLowerCase();
    if (!cmd) return;

    soundFx.playClick();
    const newLines = [...terminalLines, `> ${commandInput}`];

    switch (cmd) {
      case "help":
        newLines.push(
          "AVAILABLE TELEMETRY COMMANDS:",
          "  contact    - Print primary contact coordinates",
          "  email      - Copy official academic email",
          "  skills     - Print verified technology stack",
          "  status     - Show internship availability status",
          "  visionflow - Show flagship project overview",
          "  clear      - Clear terminal screen"
        );
        break;
      case "contact":
        newLines.push(
          `Candidate: ${PORTFOLIO_DATA.personal.name}`,
          `Email: ${PORTFOLIO_DATA.personal.email}`,
          `LinkedIn: ${PORTFOLIO_DATA.personal.linkedIn}`,
          `GitHub: ${PORTFOLIO_DATA.personal.github}`,
          `Location: ${PORTFOLIO_DATA.personal.location}`
        );
        break;
      case "email":
        handleCopyEmail();
        newLines.push(`[OK] Copied ${PORTFOLIO_DATA.personal.email} to clipboard.`);
        break;
      case "skills":
        newLines.push(
          "VERIFIED STACK: HTML5, CSS3, JavaScript, Python, React.js, OpenCV, Git, GitHub, VS Code, Canva, Responsive Design, Cloud Computing, Computer Vision, OOP."
        );
        break;
      case "status":
        newLines.push(
          `CURRENT: ${PORTFOLIO_DATA.personal.availability}`,
          "Web Development Intern @ FortuMars AI Technologies & Business Solutions Pvt. Ltd."
        );
        break;
      case "visionflow":
        newLines.push(
          "VISIONFLOW: AI-Powered Intelligent Traffic Monitoring System (Planned)",
          "Edge Video Stream -> OpenCV & YOLO Classification -> Density Engine -> Command Center Dashboard"
        );
        break;
      case "clear":
        setTerminalLines(["CHANDHRU.EXE CLI Cleared."]);
        setCommandInput("");
        return;
      default:
        newLines.push(`Command not recognized: '${cmd}'. Type 'help' for options.`);
    }

    setTerminalLines(newLines);
    setCommandInput("");
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-12 relative w-full max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-14 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-brand-cyan/20 text-xs font-mono text-brand-cyan">
          <Terminal className="w-3.5 h-3.5" />
          <span>SECTION_06 // COMMS UPLINK</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
          Let&apos;s <span className="text-gradient-neon">Connect.</span>
        </h2>
        <p className="text-slate-400 text-sm max-w-2xl font-mono">
          Reach out for internship roles, engineering collaborations, or software discussions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Coordinates Card */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-brand-cyan/30 hud-corner space-y-6">
            <div>
              <span className="font-mono text-xs text-brand-cyan tracking-wider uppercase font-semibold">
                DIRECT CHANNELS
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mt-1">
                Reach Chandhru M
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Open to discussions regarding Summer and Semester internship positions,
                full-stack development opportunities, and computer vision projects.
              </p>
            </div>

            {/* Email quick copy box */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2 font-mono">
              <div className="text-[11px] text-slate-400 uppercase">
                College Official Email
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs sm:text-sm text-brand-cyan font-semibold truncate">
                  {PORTFOLIO_DATA.personal.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg bg-brand-cyan/10 hover:bg-brand-cyan/20 text-brand-cyan transition-colors shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copiedEmail && (
                <div className="text-[10px] text-emerald-400">
                  ✓ Copied to clipboard!
                </div>
              )}
            </div>

            {/* Details List */}
            <div className="space-y-3 font-mono text-xs">
              <a
                href={PORTFOLIO_DATA.personal.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] hover:bg-brand-indigo/15 border border-white/5 hover:border-brand-indigo/40 text-slate-300 hover:text-white transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-brand-indigo/10 flex items-center justify-center text-brand-indigo group-hover:scale-105 transition-transform">
                  <LinkedinIcon className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="text-[10px] text-slate-400">LINKEDIN PROFILE</div>
                  <div className="font-semibold text-white">chandhru-m</div>
                </div>
              </a>

              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] hover:bg-white/10 border border-white/5 hover:border-white/20 text-slate-300 hover:text-white transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="text-[10px] text-slate-400">GITHUB REPOSITORY</div>
                  <div className="font-semibold text-white">muruganchandhru2024-pixel</div>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-slate-300">
                <div className="w-8 h-8 rounded-lg bg-amber-400/10 flex items-center justify-center text-amber-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400">LOCATION</div>
                  <div className="font-semibold text-white">{PORTFOLIO_DATA.personal.location}</div>
                </div>
              </div>
            </div>

            {/* Availability Callout */}
            <div className="pt-2 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Immediate Summer / Winter Internships</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Form & Terminal Mode */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-brand-cyan/30 hud-corner shadow-2xl space-y-6">
            {/* Mode Switcher */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 font-mono text-xs">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveMode("form")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                    activeMode === "form"
                      ? "bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/40"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Interactive Form</span>
                </button>
                <button
                  onClick={() => setActiveMode("terminal")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                    activeMode === "terminal"
                      ? "bg-brand-violet/20 text-brand-violet border border-brand-violet/40"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Terminal className="w-3.5 h-3.5" />
                  <span>CLI Terminal</span>
                </button>
              </div>

              <span className="text-[10px] text-slate-400 hidden sm:inline">
                TRANSMISSION_PROTOCOL // TLS_v1.3
              </span>
            </div>

            {/* Mode 1: React Hook Form with Zod */}
            {activeMode === "form" ? (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Transmission queued successfully! Prepared mail client link.</span>
                  </motion.div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">
                      Your Name <span className="text-brand-cyan">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("name")}
                      placeholder="e.g. Maya Chen"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 focus:border-brand-cyan focus:outline-none text-white text-xs placeholder:text-slate-500 transition-colors"
                    />
                    {errors.name && (
                      <span className="text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name.message}
                      </span>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">
                      Email Address <span className="text-brand-cyan">*</span>
                    </label>
                    <input
                      type="email"
                      {...register("email")}
                      placeholder="maya@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 focus:border-brand-cyan focus:outline-none text-white text-xs placeholder:text-slate-500 transition-colors"
                    />
                    {errors.email && (
                      <span className="text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Role / Organization */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">
                      Role / Organization
                    </label>
                    <input
                      type="text"
                      {...register("role")}
                      placeholder="e.g. Technical Recruiter / Engineering Lead"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 focus:border-brand-cyan focus:outline-none text-white text-xs placeholder:text-slate-500 transition-colors"
                    />
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">
                      Subject <span className="text-brand-cyan">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("subject")}
                      placeholder="Internship Opportunity / Inquiry"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 focus:border-brand-cyan focus:outline-none text-white text-xs placeholder:text-slate-500 transition-colors"
                    />
                    {errors.subject && (
                      <span className="text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.subject.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">
                    Message Payload <span className="text-brand-cyan">*</span>
                  </label>
                  <textarea
                    rows={4}
                    {...register("message")}
                    placeholder="Describe the opportunity, project requirements, or message..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 focus:border-brand-cyan focus:outline-none text-white text-xs placeholder:text-slate-500 transition-colors resize-none"
                  />
                  {errors.message && (
                    <span className="text-[11px] text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message.message}
                    </span>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-violet text-brand-deep font-heading font-bold text-sm shadow-neonCyan hover:opacity-95 active:scale-[0.99] transition-all disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? "Transmitting..." : "Send Secure Message"}</span>
                </button>
              </form>
            ) : (
              /* Mode 2: Interactive Terminal CLI */
              <div className="space-y-3 font-mono">
                <div className="h-64 overflow-y-auto p-4 rounded-xl bg-[#080811] border border-brand-violet/30 text-xs space-y-1.5 select-text">
                  {terminalLines.map((line, i) => (
                    <div
                      key={i}
                      className={
                        line.startsWith(">")
                          ? "text-brand-cyan font-semibold"
                          : line.startsWith("CHANDHRU.EXE")
                          ? "text-brand-violet font-bold"
                          : line.startsWith("  ")
                          ? "text-slate-400 pl-2"
                          : "text-slate-300"
                      }
                    >
                      {line}
                    </div>
                  ))}
                </div>

                <form onSubmit={handleCommandSubmit} className="flex gap-2">
                  <div className="relative flex-1">
                    <span className="absolute left-3 top-2.5 text-brand-cyan text-xs font-bold">
                      &gt;
                    </span>
                    <input
                      type="text"
                      value={commandInput}
                      onChange={(e) => setCommandInput(e.target.value)}
                      placeholder="Type 'help', 'contact', 'skills', or 'clear'..."
                      className="w-full pl-7 pr-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 focus:border-brand-violet focus:outline-none text-white text-xs font-mono"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-brand-violet/20 hover:bg-brand-violet/30 border border-brand-violet/40 text-brand-violet text-xs font-mono font-bold"
                  >
                    Execute
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
