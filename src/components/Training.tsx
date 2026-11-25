import React from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  Layers, 
  ShieldCheck,
  BookOpen
} from 'lucide-react';
import { trainingData } from '../data/personal';

export const Training: React.FC = () => {
  return (
    <section id="training" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#080B12]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center md:text-left mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1421] border border-[rgba(148,163,184,0.14)] text-[#9475F5] text-xs font-mono mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9475F5] animate-pulse" />
            06. TRAINING
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#F5F7FF] tracking-tight">
            Professional Training
          </h2>
          <p className="mt-2 text-base text-[#9AA8BC] max-w-2xl">
            Python Full Stack Development — DUCAT, Noida.
          </p>
        </div>

        {/* Training Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl p-6 sm:p-10 bg-[#111B2B] border border-[rgba(148,163,184,0.14)] shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Top Gradient Accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#6485FF] via-[#9475F5] to-[#36C5E8]" />

          {/* Top Banner Row */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-8 border-b border-[rgba(148,163,184,0.14)]">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#9475F5] mb-2">
                <Terminal className="w-4 h-4" />
                <span>Training Institute: {trainingData.provider} • Noida</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-black text-[#F5F7FF]">
                {trainingData.title}
              </h3>
              <div className="flex items-center gap-4 text-xs sm:text-sm text-[#9AA8BC] mt-2">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#9AA8BC]" />
                  {trainingData.location}
                </span>
                <span className="flex items-center gap-1.5 text-[#36C5E8] font-mono">
                  <Clock className="w-3.5 h-3.5" />
                  Active Enrollment
                </span>
              </div>
            </div>

            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0D1421] border border-[#9475F5]/40 text-[#9475F5] text-xs font-mono font-semibold shadow-inner w-fit">
              <span className="w-2 h-2 rounded-full bg-[#9475F5] animate-ping" />
              <span>{trainingData.status}</span>
            </div>
          </div>

          {/* Training Description */}
          <p className="text-sm sm:text-base text-[#F5F7FF]/90 leading-relaxed mb-8 max-w-3xl">
            {trainingData.description}
          </p>

          {/* Verified Learning Areas */}
          {trainingData.learningAreas && trainingData.learningAreas.length > 0 && (
            <div className="mb-8">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#F5F7FF]/90 mb-4 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#6485FF]" />
                Hands-On Practical Learning Modules
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {trainingData.learningAreas.map((area, aIdx) => (
                  <div
                    key={aIdx}
                    className="p-4 rounded-xl bg-[#0D1421] border border-[rgba(148,163,184,0.14)] hover:border-[#9475F5]/40 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-[#F5F7FF] mb-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{area.topic}</span>
                      </div>
                      <p className="text-xs text-[#9AA8BC] leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Core Curriculum Modules */}
          <div className="mb-8">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#F5F7FF]/90 mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#36C5E8]" />
              Covered Curriculum Modules ({trainingData.modules.length})
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {trainingData.modules.map((module, mIdx) => (
                <div
                  key={mIdx}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-[#0D1421] border border-[rgba(148,163,184,0.14)] text-xs text-[#F5F7FF]/90"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#36C5E8]" />
                  <span className="font-medium">{module}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Transparency & Recruiter Note */}
          <div className="p-4 rounded-xl bg-[#0D1421] border border-[rgba(148,163,184,0.14)] flex items-start gap-3 text-xs text-[#9AA8BC]">
            <ShieldCheck className="w-4 h-4 text-[#6485FF] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-[#F5F7FF]">Recruiter Disclosure: </span>
              This professional track at DUCAT Noida is actively ongoing. It focuses on hands-on project creation, full-stack architectural design, and modern framework implementation to prepare for entry-level software engineering roles by April 2027.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
