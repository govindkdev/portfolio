import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Terminal, 
  Sparkles, 
  Layers, 
  Mail, 
  FileDown, 
  ArrowRight,
  Code2,
  CheckCircle2
} from 'lucide-react';
import { personalData, aboutCards } from '../data/personal';

interface AboutProps {
  onOpenResumeModal?: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenResumeModal }) => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#080B12]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1421] border border-[rgba(148,163,184,0.14)] text-[#6485FF] text-xs font-mono mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6485FF] animate-pulse" />
            02. ABOUT ME
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#F5F7FF] tracking-tight">
            About Me
          </h2>
          <p className="mt-2 text-base text-[#9AA8BC] max-w-2xl">
            My Journey in Software Development.
          </p>
        </div>

        {/* PRIMARY BIOGRAPHY CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl p-6 sm:p-10 md:p-12 bg-[#111B2B] border border-[rgba(148,163,184,0.14)] shadow-2xl relative overflow-hidden mb-12"
        >
          {/* Subtle Top Accent Gradient Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#6485FF] via-[#9475F5] to-[#36C5E8]" />
          
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-4xl space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#36C5E8]">
                <Sparkles className="w-4 h-4" />
                <span>Professional Background</span>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#F5F7FF] leading-snug">
                Final-Year Computer Science Student &amp; Aspiring Full-Stack Software Engineer
              </h3>

              {/* Biographical Content */}
              <div className="space-y-3 text-sm sm:text-base text-[#9AA8BC] leading-relaxed">
                <p>
                  I am a final-year B.Tech Computer Science student at <strong className="text-[#F5F7FF]">GCRG Group of Institutions</strong>, affiliated with <strong className="text-[#F5F7FF]">Dr. A.P.J. Abdul Kalam Technical University (AKTU)</strong>, Lucknow. My passion lies in building functional, reliable, and user-centric web applications.
                </p>
                <p>
                  To bridge academic computer science principles with production software engineering, I am currently undergoing intensive <strong className="text-[#F5F7FF]">Python Full Stack Development</strong> training at <strong className="text-[#F5F7FF]">DUCAT, Noida</strong>.
                </p>
                <p>
                  I work across both frontend and backend technologies—developing interactive clients with React, JavaScript, and Tailwind CSS, while architecting structured backends and REST APIs using Python, Django, FastAPI, and relational SQL databases.
                </p>
                <p>
                  I enjoy turning conceptual ideas into clean, practical software solutions with high code clarity and maintainability. My primary career objective is to become a proficient <strong className="text-[#6485FF]">Python Full Stack Developer / Software Engineer</strong> contributing to high-impact products.
                </p>
              </div>

              {/* Career Objective Highlight Pill */}
              <div className="pt-2">
                <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#080B12]/80 border border-[#6485FF]/30 text-xs text-[#9AA8BC]">
                  <CheckCircle2 className="w-4 h-4 text-[#6485FF] shrink-0" />
                  <span>
                    <strong className="text-[#F5F7FF]">Target:</strong> Professional Python Full Stack Developer / Software Engineer roles by April 2027.
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs text-white bg-[#6485FF] hover:bg-[#5274ee] shadow-[0_0_15px_rgba(100,133,255,0.25)] transition-all"
              >
                <Code2 className="w-4 h-4" />
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalData.resume.pdfUrl}
                download={personalData.resume.filename}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs text-[#F5F7FF] bg-[#0D1421] hover:bg-[#162235] border border-[rgba(148,163,184,0.14)] hover:border-[#9475F5]/50 transition-all cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-[#9475F5]" />
                <span>Resume PDF</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs text-[#9AA8BC] hover:text-[#F5F7FF] bg-transparent hover:bg-white/5 border border-[rgba(148,163,184,0.14)] hover:border-[#36C5E8]/40 transition-all"
              >
                <Mail className="w-4 h-4 text-[#36C5E8]" />
                <span>Get in Touch</span>
              </a>

              {onOpenResumeModal && (
                <button
                  type="button"
                  onClick={onOpenResumeModal}
                  className="text-xs font-mono text-[#9AA8BC] hover:text-[#36C5E8] transition-colors py-1 cursor-pointer text-center"
                >
                  Or preview online &rarr;
                </button>
              )}
            </div>
          </div>
        </motion.div>

        {/* 3 SUMMARY CARDS BELOW THE TEXT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 rounded-2xl bg-[#111B2B] border border-[rgba(148,163,184,0.14)] hover:border-[#6485FF]/40 shadow-lg transition-all duration-300 hover:-translate-y-1 relative group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#6485FF]/15 border border-[#6485FF]/30 flex items-center justify-center text-[#6485FF] mb-4 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono text-[#6485FF] uppercase tracking-wider mb-1">
              {aboutCards[0].title}
            </div>
            <h4 className="font-heading font-bold text-lg text-[#F5F7FF] mb-2">
              {aboutCards[0].detail}
            </h4>
            <p className="text-xs text-[#9AA8BC] leading-relaxed">
              {aboutCards[0].institution}
            </p>
          </motion.div>

          {/* Card 2: Specialization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 rounded-2xl bg-[#111B2B] border border-[rgba(148,163,184,0.14)] hover:border-[#9475F5]/40 shadow-lg transition-all duration-300 hover:-translate-y-1 relative group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#9475F5]/15 border border-[#9475F5]/30 flex items-center justify-center text-[#9475F5] mb-4 group-hover:scale-105 transition-transform">
              <Terminal className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono text-[#9475F5] uppercase tracking-wider mb-1">
              {aboutCards[1].title}
            </div>
            <h4 className="font-heading font-bold text-lg text-[#F5F7FF] mb-2">
              {aboutCards[1].detail}
            </h4>
            <p className="text-xs text-[#9AA8BC] leading-relaxed">
              {aboutCards[1].institution}
            </p>
          </motion.div>

          {/* Card 3: Focus */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 rounded-2xl bg-[#111B2B] border border-[rgba(148,163,184,0.14)] hover:border-[#36C5E8]/40 shadow-lg transition-all duration-300 hover:-translate-y-1 relative group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#36C5E8]/15 border border-[#36C5E8]/30 flex items-center justify-center text-[#36C5E8] mb-4 group-hover:scale-105 transition-transform">
              <Layers className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono text-[#36C5E8] uppercase tracking-wider mb-1">
              {aboutCards[2].title}
            </div>
            <h4 className="font-heading font-bold text-lg text-[#F5F7FF] mb-2">
              {aboutCards[2].detail}
            </h4>
            <p className="text-xs text-[#9AA8BC] leading-relaxed">
              {aboutCards[2].institution}
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
