"use client";

import React, { useState, useEffect } from "react";
import { BootAnimation } from "@/components/BootAnimation";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutBento } from "@/components/AboutBento";
import { SkillsUniverse } from "@/components/SkillsUniverse";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { FlagshipProject } from "@/components/FlagshipProject";
import { EducationCertifications } from "@/components/EducationCertifications";
import { ContactTerminal } from "@/components/ContactTerminal";
import { Footer } from "@/components/Footer";
import { CommandPalette } from "@/components/CommandPalette";
import { ResumeModal } from "@/components/ResumeModal";
import { soundFx } from "@/utils/audio";

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    setIsMuted(soundFx.getMuted());
  }, []);

  const handleToggleSound = () => {
    const muted = soundFx.toggleMute();
    setIsMuted(muted);
  };

  return (
    <main className="relative min-h-screen bg-[#050508] text-brand-textPrimary selection:bg-brand-cyan/25 selection:text-white overflow-hidden">
      {/* Optional Cinematic Developer OS Boot-up Sequence */}
      <BootAnimation onComplete={() => soundFx.playBoot()} />

      {/* Floating Glassmorphism Navigation */}
      <Navbar
        onOpenCommand={() => setIsCommandOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
        onToggleSound={handleToggleSound}
        isMuted={isMuted}
      />

      {/* Hero Section with Interactive 3D Digital Sculpture */}
      <Hero onOpenResume={() => setIsResumeOpen(true)} />

      {/* About Me Bento Grid */}
      <AboutBento />

      {/* Interactive Technology Universe */}
      <SkillsUniverse />

      {/* Professional Experience Animated Timeline */}
      <ExperienceTimeline />

      {/* Flagship Project Showcase — VisionFlow & Capstone */}
      <FlagshipProject />

      {/* Education & Industry Certifications */}
      <EducationCertifications />

      {/* Contact Terminal & Validated Comms Uplink */}
      <ContactTerminal />

      {/* Futuristic Footer */}
      <Footer />

      {/* Command Palette (Ctrl+K / Cmd+K) */}
      <CommandPalette
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
        onOpenResume={() => setIsResumeOpen(true)}
        onToggleSound={handleToggleSound}
        isMuted={isMuted}
      />

      {/* Interactive Verified Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </main>
  );
}
