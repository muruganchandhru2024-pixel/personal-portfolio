"use client";

import React from "react";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { soundFx } from "@/utils/audio";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    soundFx.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-white/10 bg-[#080811] text-slate-400 font-mono text-xs relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Brand Info */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-white font-heading font-extrabold text-base tracking-wide">
              <span>{PORTFOLIO_DATA.branding.brandName}</span>
              <span className="text-brand-cyan text-xs font-mono font-normal">
                [{PORTFOLIO_DATA.branding.systemVersion}]
              </span>
            </div>
            <p className="text-xs text-brand-textSecondary font-sans">
              {PORTFOLIO_DATA.branding.tagline} • Designed & Built by Chandhru M.
            </p>
            <p className="text-[11px] text-slate-500">
              Sri Krishna College of Technology, Coimbatore (Autonomous | NAAC A++)
            </p>
          </div>

          {/* Social Uplinks & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={PORTFOLIO_DATA.personal.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-brand-cyan/15 hover:text-brand-cyan border border-white/10 transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 hover:text-white border border-white/10 transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-brand-violet/15 hover:text-brand-violet border border-white/10 transition-colors"
              title="Direct Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-gradient-to-r from-brand-cyan/20 to-brand-violet/20 hover:from-brand-cyan/30 hover:to-brand-violet/30 border border-brand-cyan/40 text-brand-cyan text-xs font-bold transition-all ml-2"
              title="Scroll back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">TOP</span>
            </button>
          </div>
        </div>

        {/* Bottom Details & Disclosures */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-400">
              STATUS: READY FOR INTERNSHIP OPPORTUNITIES
            </span>
          </div>

          <div className="text-slate-500 font-sans">
            © {new Date().getFullYear()} Chandhru M. All academic and internship records verified.
          </div>
        </div>
      </div>
    </footer>
  );
};
