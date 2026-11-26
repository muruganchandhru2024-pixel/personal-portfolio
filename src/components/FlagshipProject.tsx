"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Play,
  Pause,
  Terminal,
  CheckCircle2,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { soundFx } from "@/utils/audio";

interface SimulatedVehicle {
  id: number;
  x: number;
  y: number;
  speed: number;
  type: "Car" | "Truck" | "Two-Wheeler" | "Bus";
  confidence: number;
  color: string;
}

export const FlagshipProject: React.FC = () => {
  const [isRunning, setIsRunning] = useState(true);
  const [activeTab, setActiveTab] = useState<"simulation" | "architecture" | "capabilities">("simulation");
  const congestionLevel = "Moderate";
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Simulation vehicles state
  const vehiclesRef = useRef<SimulatedVehicle[]>([
    { id: 1, x: 50, y: 80, speed: 1.8, type: "Car", confidence: 96, color: "#00D9FF" },
    { id: 2, x: 190, y: 80, speed: 1.5, type: "Car", confidence: 94, color: "#00D9FF" },
    { id: 3, x: 340, y: 80, speed: 2.1, type: "Two-Wheeler", confidence: 91, color: "#A855F7" },
    { id: 4, x: 490, y: 80, speed: 1.2, type: "Truck", confidence: 95, color: "#F59E0B" },
    { id: 5, x: 110, y: 160, speed: 2.0, type: "Car", confidence: 97, color: "#00D9FF" },
    { id: 6, x: 270, y: 160, speed: 1.4, type: "Bus", confidence: 93, color: "#10B981" },
    { id: 7, x: 420, y: 160, speed: 2.3, type: "Two-Wheeler", confidence: 89, color: "#A855F7" },
  ]);

  useEffect(() => {
    let animId: number;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw road asphalt
      ctx.fillStyle = "#0c0d18";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw road markings (lanes)
      ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
      ctx.setLineDash([12, 12]);
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, 120);
      ctx.lineTo(canvas.width, 120);
      ctx.stroke();

      // Top and bottom road boundaries
      ctx.setLineDash([]);
      ctx.strokeStyle = "rgba(0, 217, 255, 0.25)";
      ctx.lineWidth = 2;
      ctx.strokeRect(0, 20, canvas.width, 200);

      // Simulation update
      if (isRunning) {
        vehiclesRef.current.forEach((veh) => {
          veh.x += veh.speed;
          if (veh.x > canvas.width + 40) {
            veh.x = -60;
          }
        });
      }

      // Draw simulated vehicles and AI Bounding Boxes
      vehiclesRef.current.forEach((veh) => {
        const width = veh.type === "Truck" || veh.type === "Bus" ? 64 : veh.type === "Car" ? 42 : 24;
        const height = veh.type === "Truck" || veh.type === "Bus" ? 30 : 22;

        // Vehicle Body
        ctx.fillStyle = "#18192d";
        ctx.fillRect(veh.x, veh.y, width, height);

        // AI Bounding Box in Neon
        ctx.strokeStyle = veh.color;
        ctx.lineWidth = 1.5;
        ctx.strokeRect(veh.x - 2, veh.y - 2, width + 4, height + 4);

        // Corner ticks
        ctx.fillStyle = veh.color;
        ctx.fillRect(veh.x - 2, veh.y - 2, 4, 2);
        ctx.fillRect(veh.x - 2, veh.y - 2, 2, 4);

        // Label banner
        ctx.fillStyle = "rgba(5, 5, 8, 0.85)";
        ctx.fillRect(veh.x - 2, veh.y - 16, width + 4, 13);

        ctx.font = "9px 'JetBrains Mono', monospace";
        ctx.fillStyle = veh.color;
        ctx.fillText(`${veh.type[0]}:${veh.confidence}%`, veh.x, veh.y - 6);
      });

      // Scanline sweep
      const time = Date.now() / 15;
      const scanY = (time % 240);
      const gradient = ctx.createLinearGradient(0, scanY, 0, scanY + 15);
      gradient.addColorStop(0, "rgba(0, 217, 255, 0)");
      gradient.addColorStop(1, "rgba(0, 217, 255, 0.12)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, scanY, canvas.width, 15);

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [isRunning]);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-12 relative w-full max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-14 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-brand-cyan/20 text-xs font-mono text-brand-cyan">
          <Terminal className="w-3.5 h-3.5" />
          <span>SECTION_04 // FLAGSHIP SHOWCASE</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
          Engineering <span className="text-gradient-neon">Intelligence.</span>
        </h2>
        <p className="text-slate-400 text-sm max-w-2xl font-mono">
          Proposed flagship computer vision platform for smart urban transit telemetry.
        </p>
      </div>

      {/* Flagship Hero Card - VisionFlow */}
      <div className="p-6 sm:p-10 rounded-3xl glass-panel border border-brand-cyan/40 hud-corner shadow-2xl relative overflow-hidden space-y-8">
        {/* Glow backdrop */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Badges & Title */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2 font-mono text-xs">
              <span className="px-3 py-1 rounded-full bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/30 font-bold">
                PROPOSED FLAGSHIP SYSTEM
              </span>
              <span className="px-3 py-1 rounded-full bg-brand-violet/10 text-brand-violet border border-brand-violet/30">
                {PORTFOLIO_DATA.flagshipProject.category}
              </span>
              <span className="px-3 py-1 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/30">
                STATUS: {PORTFOLIO_DATA.flagshipProject.status.toUpperCase()}
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
              {PORTFOLIO_DATA.flagshipProject.name}
            </h3>
            <p className="text-brand-cyan font-mono text-xs sm:text-sm mt-1">
              {PORTFOLIO_DATA.flagshipProject.fullTitle}
            </p>
          </div>

          {/* Interactive Navigation Tabs for the Showcase */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#0d0d1a] border border-white/10 font-mono text-xs self-start lg:self-auto">
            <button
              onClick={() => {
                soundFx.playClick();
                setActiveTab("simulation");
              }}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === "simulation"
                  ? "bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/40"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              CV Simulation
            </button>
            <button
              onClick={() => {
                soundFx.playClick();
                setActiveTab("architecture");
              }}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === "architecture"
                  ? "bg-brand-violet/20 text-brand-violet border border-brand-violet/40"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Architecture
            </button>
            <button
              onClick={() => {
                soundFx.playClick();
                setActiveTab("capabilities");
              }}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === "capabilities"
                  ? "bg-brand-indigo/20 text-brand-indigo border border-brand-indigo/40"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Capabilities
            </button>
          </div>
        </div>

        {/* Tab 1: Live Interactive Computer Vision Simulation */}
        {activeTab === "simulation" && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
                <span className="text-white font-semibold">FEED: HIGHWAY_JUNCTION_CAM_04</span>
                <span className="text-slate-500">|</span>
                <span>YOLOv8 DETECTOR (SIMULATED)</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsRunning(!isRunning)}
                  className="flex items-center gap-1.5 px-3 py-1 rounded bg-white/5 hover:bg-white/10 text-white border border-white/10"
                >
                  {isRunning ? <Pause className="w-3.5 h-3.5 text-brand-cyan" /> : <Play className="w-3.5 h-3.5 text-brand-cyan" />}
                  <span>{isRunning ? "Pause Feed" : "Resume Feed"}</span>
                </button>
              </div>
            </div>

            {/* Canvas viewport */}
            <div className="relative w-full rounded-2xl overflow-hidden border border-brand-cyan/30 shadow-inner bg-[#0c0d18]">
              <canvas
                ref={canvasRef}
                width={800}
                height={240}
                className="w-full h-[220px] sm:h-[260px] object-cover"
              />

              {/* Live Overlay Telemetry HUD */}
              <div className="absolute top-3 left-3 flex flex-wrap gap-2 pointer-events-none">
                <div className="px-2.5 py-1 rounded bg-black/75 border border-brand-cyan/40 text-[10px] font-mono text-brand-cyan">
                  OBJECTS_TRACKED: 07
                </div>
                <div className="px-2.5 py-1 rounded bg-black/75 border border-emerald-400/40 text-[10px] font-mono text-emerald-400">
                  DENSITY: {congestionLevel.toUpperCase()} (38%)
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs pt-1">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-slate-400 text-[10px]">AVG SPEED</div>
                <div className="text-sm font-bold text-white mt-0.5">48.2 km/h</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-slate-400 text-[10px]">BOTTLENECK RISK</div>
                <div className="text-sm font-bold text-emerald-400 mt-0.5">LOW (12%)</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-slate-400 text-[10px]">FLOW DENSITY</div>
                <div className="text-sm font-bold text-brand-cyan mt-0.5">14 Veh/Min</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-slate-400 text-[10px]">INFERENCE LATENCY</div>
                <div className="text-sm font-bold text-brand-violet mt-0.5">18.4 ms</div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: System Architecture */}
        {activeTab === "architecture" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PORTFOLIO_DATA.flagshipProject.architecture.map((arch) => (
              <div
                key={arch.step}
                className="p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-brand-cyan/40 transition-colors space-y-2.5"
              >
                <div className="font-mono text-brand-cyan text-sm font-bold">
                  PHASE_{arch.step}
                </div>
                <h4 className="text-base font-bold font-heading text-white">
                  {arch.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {arch.detail}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Key Capabilities */}
        {activeTab === "capabilities" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {PORTFOLIO_DATA.flagshipProject.keyCapabilities.map((cap, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                <span className="text-xs text-slate-200 font-sans">{cap}</span>
              </div>
            ))}
          </div>
        )}

        {/* Overview & Problem Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4 border-t border-white/10 text-xs sm:text-sm text-slate-300 font-sans">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase text-brand-cyan font-bold tracking-wider">
              Project Overview
            </span>
            <p className="leading-relaxed text-slate-300">
              {PORTFOLIO_DATA.flagshipProject.description}
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase text-brand-violet font-bold tracking-wider">
              Problem Addressed
            </span>
            <p className="leading-relaxed text-slate-300">
              {PORTFOLIO_DATA.flagshipProject.problemStatement}
            </p>
          </div>
        </div>

        {/* Planned Technology Stack */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-slate-400">Planned Technology Stack:</span>
            {PORTFOLIO_DATA.flagshipProject.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="text-[11px] text-slate-400">
            Current Phase: Architectural Blueprint & Sensor Modeling
          </div>
        </div>
      </div>

      {/* Verified Academic Full-Stack Capstone Project */}
      <div className="mt-12 p-6 sm:p-8 rounded-2xl glass-panel border border-white/10 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-400 mb-1.5">
              <span>VERIFIED ACADEMIC CAPSTONE</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
              {PORTFOLIO_DATA.verifiedAcademicProject.name}
            </h3>
            <p className="text-xs text-brand-cyan font-mono">
              {PORTFOLIO_DATA.verifiedAcademicProject.fullTitle}
            </p>
          </div>
          <div className="font-mono text-xs text-slate-400">
            Status: <span className="text-emerald-400 font-semibold">Completed & Documented</span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
          {PORTFOLIO_DATA.verifiedAcademicProject.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 pt-2">
          {PORTFOLIO_DATA.verifiedAcademicProject.keyCapabilities.map((cap, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald shrink-0" />
              <span>{cap}</span>
            </div>
          ))}
        </div>

        <div className="pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-slate-400">Tech Stack:</span>
            {PORTFOLIO_DATA.verifiedAcademicProject.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded bg-white/5 text-slate-200 border border-white/10 text-[11px]"
              >
                {tech}
              </span>
            ))}
          </div>
          <span className="text-slate-400 text-[11px]">
            Two-Tier REST Architecture • JWT RBAC
          </span>
        </div>
      </div>
    </section>
  );
};
