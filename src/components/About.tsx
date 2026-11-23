import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Layers, 
  Terminal, 
  Sparkles, 
  Mail, 
  ExternalLink, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';
import { personalData, educationData, trainingData } from '../data/personal';

interface AboutProps {
  onOpenResumeModal?: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenResumeModal }) => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/50 border border-blue-500/30 text-blue-400 text-xs font-mono mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            01. ABOUT ME
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Clean Interfaces &amp; Full Stack Solutions
          </h2>
          <p className="mt-3 text-base text-[#94A3B8] max-w-3xl">
            A closer look into my technical background, academic foundation, development philosophy, and areas of engineering focus.
          </p>
        </div>

        {/* PRIMARY INTRODUCTION CARD (Text-focused hero banner) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl p-6 sm:p-10 md:p-12 bg-gradient-to-br from-[#111827] via-[#172033]/85 to-[#0F1626] border border-[#263247] shadow-2xl backdrop-blur-xl relative overflow-hidden mb-10"
        >
          {/* Subtle Top Ambient Accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400" />
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-purple-600/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-4xl space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400">
                <Sparkles className="w-4 h-4" />
                <span>Professional Introduction</span>
              </div>
              
              {/* Exact biographical paragraphs */}
              <p className="text-lg sm:text-xl text-white font-medium leading-relaxed">
                {personalData.bio[0]}
              </p>
              <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                {personalData.bio[1]}
              </p>
              <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                {personalData.bio[2]}
              </p>
            </div>

            {/* Quick CTAs */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 shrink-0">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Get In Touch</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => {
                  if (onOpenResumeModal) {
                    onOpenResumeModal();
                  } else {
                    const el = document.getElementById('resume');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-300 hover:text-white bg-[#101827] hover:bg-[#172033] border border-[#263247] hover:border-purple-500/50 transition-all cursor-pointer"
              >
                <span>View Verified Resume</span>
                <ExternalLink className="w-4 h-4 text-purple-400" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* ELEGANT 4-CARD INFORMATION GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* CARD 1: EDUCATION INFORMATION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 sm:p-8 rounded-2xl bg-[#111827]/75 border border-[#263247] hover:border-blue-500/40 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 relative group"
          >
            <div className="flex items-center justify-between gap-3 mb-5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-950/60 border border-blue-500/40 text-blue-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-white">
                    Education &amp; Academics
                  </h3>
                  <span className="text-xs font-mono text-cyan-400">
                    B.Tech in Computer Science &amp; Engineering
                  </span>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-950/70 border border-blue-500/40 text-blue-300">
                {educationData[0].score}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-5">
              Currently in my final year at <span className="text-slate-200 font-medium">GCRG Group of Institutions, Lucknow</span> (affiliated with <span className="text-slate-200 font-medium">Dr. A.P.J. Abdul Kalam Technical University - AKTU</span>). Expected graduation in 2027 with current CGPA of 7.00/10.
            </p>

            <div className="space-y-2 pt-4 border-t border-[#263247]/60 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Class X: 89.68% (High Distinction) • Muralidhar Intermediate College</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Class XII: 63.33% (Science Stream) • Muralidhar Intermediate College</span>
              </div>
            </div>
          </motion.div>

          {/* CARD 2: FRONTEND DEVELOPMENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 sm:p-8 rounded-2xl bg-[#111827]/75 border border-[#263247] hover:border-cyan-500/40 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 relative group"
          >
            <div className="flex items-center justify-between gap-3 mb-5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-500/40 text-cyan-400">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-white">
                    Frontend Development
                  </h3>
                  <span className="text-xs font-mono text-cyan-300">
                    React.js • TypeScript • Tailwind CSS
                  </span>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
                Primary Focus
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-5">
              Specialized in building modern, responsive, and component-driven web applications. Deeply interested in component lifecycles, state management, accessibility, WebRTC camera capture integrations, and fluid micro-interactions.
            </p>

            <div className="space-y-2 pt-4 border-t border-[#263247]/60 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Architected multi-role UI dashboards and verification flows for AttendX</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Clean design tokens, responsive breakpoints, and strict type safety</span>
              </div>
            </div>
          </motion.div>

          {/* CARD 3: PYTHON FULL STACK DEVELOPMENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 sm:p-8 rounded-2xl bg-[#111827]/75 border border-[#263247] hover:border-purple-500/40 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 relative group"
          >
            <div className="flex items-center justify-between gap-3 mb-5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-950/60 border border-purple-500/40 text-purple-400">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-white">
                    Python Full Stack Development
                  </h3>
                  <span className="text-xs font-mono text-purple-300">
                    Python • Django • Flask • MySQL
                  </span>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-purple-950/60 border border-purple-500/30 text-purple-300">
                End-to-End Stack
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-5">
              Understanding application architecture across client, server, and database layers. Skilled in designing clean REST APIs, HTTP routing, JSON processing, and writing structured SQL queries to support data-intensive workflows.
            </p>

            <div className="space-y-2 pt-4 border-t border-[#263247]/60 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>RESTful service design, authentication, and endpoint routing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>Relational schema design, normalization, and MySQL query optimization</span>
              </div>
            </div>
          </motion.div>

          {/* CARD 4: CONTINUOUS LEARNING */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-6 sm:p-8 rounded-2xl bg-[#111827]/75 border border-[#263247] hover:border-indigo-500/40 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 relative group"
          >
            <div className="flex items-center justify-between gap-3 mb-5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-950/60 border border-indigo-500/40 text-indigo-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-white">
                    Continuous Learning &amp; Training
                  </h3>
                  <span className="text-xs font-mono text-indigo-300">
                    DUCAT Noida • DSA Practice
                  </span>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-indigo-950/60 border border-indigo-500/30 text-indigo-300">
                Active Training
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-5">
              Enrolled in ongoing <span className="text-slate-200 font-medium">{trainingData.title}</span> at <span className="text-slate-200 font-medium">DUCAT, Noida</span>. Devoted to hands-on practical implementation, mastering Data Structures and Algorithms, and staying current with evolving web tooling.
            </p>

            <div className="space-y-2 pt-4 border-t border-[#263247]/60 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>Problem solving across arrays, strings, algorithms, and data modeling</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>Committed to writing readable, maintainable, and production-ready code</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
