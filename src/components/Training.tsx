import React from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  Layers, 
  ShieldCheck
} from 'lucide-react';
import { trainingData } from '../data/personal';

export const Training: React.FC = () => {
  return (
    <section id="training" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center md:text-left mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/50 border border-purple-500/30 text-purple-400 text-xs font-mono mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            05. TECHNICAL TRAINING
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Specialized Development Training
          </h2>
          <p className="mt-3 text-base text-[#94A3B8] max-w-2xl">
            Structured full-stack engineering curriculum bridging computer science fundamentals with modern production frameworks.
          </p>
        </div>

        {/* Training Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-[#111827] via-[#172033]/90 to-[#101827] border border-[#263247] shadow-2xl backdrop-blur-xl relative overflow-hidden"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-purple-600/10 blur-3xl pointer-events-none" />

          {/* Top Banner Row */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-8 border-b border-[#263247]/70">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-purple-400 mb-2">
                <Terminal className="w-4 h-4" />
                <span>Institute: {trainingData.provider}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-black text-white">
                {trainingData.title}
              </h3>
              <div className="flex items-center gap-4 text-xs sm:text-sm text-[#94A3B8] mt-2">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {trainingData.location}
                </span>
                <span className="flex items-center gap-1.5 text-cyan-400 font-mono">
                  <Clock className="w-3.5 h-3.5" />
                  Active Enrollment
                </span>
              </div>
            </div>

            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-950/60 border border-purple-500/40 text-purple-300 text-xs font-mono font-semibold shadow-inner w-fit">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
              <span>{trainingData.status}</span>
            </div>
          </div>

          {/* Training Description */}
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8 max-w-3xl">
            {trainingData.description}
          </p>

          {/* Modules & Learning Areas Grid */}
          <div className="mb-8">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-400" />
              Core Curriculum &amp; Practical Learning Areas
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {trainingData.modules.map((module, mIdx) => (
                <div
                  key={mIdx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-[#080B14]/60 border border-[#263247] hover:border-purple-500/40 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-slate-200">
                    {module}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Transparency & Recruiter Note */}
          <div className="p-4 rounded-xl bg-[#080B14]/70 border border-[#263247] flex items-start gap-3 text-xs text-[#94A3B8]">
            <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-slate-300">Recruiter Disclosure: </span>
              This program is tracked as active, ongoing development training to solidify real-world software building skills. It is presented authentically as continuous learning rather than an artificial certificate.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
