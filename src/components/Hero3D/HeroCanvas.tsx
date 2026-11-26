"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import { DigitalSculpture } from "./DigitalSculpture";
import { motion, AnimatePresence } from "framer-motion";
import { Box, User, Activity } from "lucide-react";

export const HeroCanvas: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [viewMode, setViewMode] = useState<"3d" | "photo">("3d");
  const [hasWebGL, setHasWebGL] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Check WebGL availability
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        setHasWebGL(false);
      }
    } catch {
      setHasWebGL(false);
    }

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!isMounted) {
    return (
      <div className="w-full h-full min-h-[420px] lg:min-h-[540px] flex items-center justify-center">
        <div className="w-16 h-16 rounded-full border border-brand-cyan/20 animate-spin border-t-brand-cyan" />
      </div>
    );
  }

  return (
    <div className="relative w-full h-full min-h-[440px] lg:min-h-[580px] flex items-center justify-center select-none">
      {/* Background radial atmosphere */}
      <div className="absolute inset-0 bg-radial-gradient from-brand-cyan/10 via-brand-violet/5 to-transparent blur-3xl pointer-events-none" />

      {/* Mode Switcher HUD Button */}
      <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20 flex items-center gap-1.5 p-1 rounded-full bg-[#10101C]/80 border border-white/10 backdrop-blur-md shadow-lg">
        <button
          onClick={() => setViewMode("3d")}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono transition-all ${
            viewMode === "3d"
              ? "bg-gradient-to-r from-brand-cyan/20 to-brand-violet/20 text-brand-cyan border border-brand-cyan/40 shadow-sm"
              : "text-brand-textSecondary hover:text-white"
          }`}
          title="Switch to 3D Digital Core"
        >
          <Box className="w-3.5 h-3.5" />
          <span>3D Core</span>
        </button>
        <button
          onClick={() => setViewMode("photo")}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono transition-all ${
            viewMode === "photo"
              ? "bg-gradient-to-r from-brand-violet/20 to-brand-cyan/20 text-brand-violet border border-brand-violet/40 shadow-sm"
              : "text-brand-textSecondary hover:text-white"
          }`}
          title="Switch to Verified Identity"
        >
          <User className="w-3.5 h-3.5" />
          <span>Identity</span>
        </button>
      </div>

      {/* Main Display: 3D or Photo Card */}
      <AnimatePresence mode="wait">
        {viewMode === "3d" && hasWebGL ? (
          <motion.div
            key="3d-sculpture"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full min-h-[420px] lg:min-h-[540px] flex items-center justify-center cursor-grab active:cursor-grabbing"
          >
            <Canvas
              camera={{ position: [0, 0, 7.2], fov: 45 }}
              dpr={[1, 2]}
              gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
              style={{ width: "100%", height: "100%" }}
            >
              <Suspense fallback={null}>
                <DigitalSculpture mousePos={mousePos} />
              </Suspense>
            </Canvas>

            {/* Subtitle Telemetry overlay */}
            <div className="absolute bottom-3 left-4 sm:left-8 z-10 flex items-center gap-2 font-mono text-[11px] text-brand-cyan/70 bg-[#050508]/60 px-3 py-1.5 rounded-md border border-brand-cyan/20 backdrop-blur-sm pointer-events-none">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
              <span>CORE_ENGINE: THREE.JS R3F</span>
              <span className="text-white/20">|</span>
              <span className="text-slate-400">FPS: ~60</span>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="photo-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[4/5] p-3 rounded-2xl glass-panel border border-brand-cyan/30 hud-corner shadow-2xl flex flex-col justify-between overflow-hidden group"
          >
            {/* Holographic scanner effect line */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
              <div className="w-full h-24 bg-gradient-to-b from-brand-cyan/20 to-transparent transform -translate-y-full group-hover:translate-y-[450px] transition-transform duration-1000 ease-in-out" />
            </div>

            {/* Profile Photo with futuristic treatment */}
            <div className="relative w-full h-[76%] rounded-xl overflow-hidden border border-white/10 bg-[#0d0d1a]">
              <Image
                src="/chandhru-profile.jpg"
                alt="Chandhru M - Digital Identity"
                fill
                priority
                className="object-cover object-top filter contrast-105 brightness-95 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10101C] via-transparent to-transparent opacity-80" />

              {/* Status Badge */}
              <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#050508]/85 border border-brand-cyan/40 text-[10px] font-mono text-brand-cyan">
                <Activity className="w-3 h-3 text-brand-emerald animate-pulse" />
                <span>VERIFIED IDENTITY</span>
              </div>
            </div>

            {/* Card Information Footer */}
            <div className="p-2 space-y-1 font-mono">
              <div className="flex items-center justify-between text-xs">
                <span className="text-white font-bold tracking-wider">CHANDHRU M</span>
                <span className="text-[10px] text-brand-cyan">CSE // 2023–27</span>
              </div>
              <p className="text-[11px] text-brand-textSecondary leading-snug">
                Sri Krishna College of Technology, Coimbatore
              </p>
              <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-white/5">
                <span>SKCT NAAC A++</span>
                <span className="text-brand-emerald font-semibold">● ACTIVE STATUS</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
