import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award, 
  BookOpen, 
  CheckCircle2 
} from 'lucide-react';
import { educationData } from '../data/personal';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center md:text-left mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/50 border border-blue-500/30 text-blue-400 text-xs font-mono mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            04. ACADEMIC BACKGROUND
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education &amp; Qualifications
          </h2>
          <p className="mt-3 text-base text-[#94A3B8] max-w-2xl">
            A chronological academic timeline reflecting foundational and higher technical education.
          </p>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-[#263247] ml-2 sm:ml-6 space-y-12">
          {educationData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Timeline Node Dot */}
              <div 
                className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full border-4 border-[#080B14] transition-all duration-300 ${
                  item.current 
                    ? 'bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] scale-110' 
                    : 'bg-[#263247] group-hover:bg-purple-500 group-hover:shadow-[0_0_12px_rgba(139,92,246,0.5)]'
                }`} 
              />

              {/* Education Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#111827]/75 border border-[#263247] hover:border-blue-500/40 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <span className="text-xs font-mono font-medium text-cyan-400 flex items-center gap-1.5 mb-1">
                      <GraduationCap className="w-4 h-4" />
                      {item.field ? `${item.field}` : 'School Education'}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                      {item.degree}
                    </h3>
                  </div>

                  {/* Score Pill */}
                  <div className="sm:text-right shrink-0">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-950/60 border border-blue-500/40 text-blue-300 font-mono text-sm font-bold shadow-inner">
                      <Award className="w-4 h-4 text-cyan-400" />
                      <span>{item.score}</span>
                    </div>
                    <div className="text-[11px] font-mono text-[#94A3B8] mt-1">
                      {item.scoreLabel}
                    </div>
                  </div>
                </div>

                {/* Institution & Location */}
                <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-[#94A3B8] mb-4 pb-4 border-b border-[#263247]/60">
                  <span className="text-white font-medium flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-purple-400" />
                    {item.institution}
                  </span>
                  {item.affiliation && (
                    <span className="text-slate-400">
                      • {item.affiliation}
                    </span>
                  )}
                  <span className="flex items-center gap-1 text-[#64748B]">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.duration}
                  </span>
                  <span className="flex items-center gap-1 text-[#64748B]">
                    <MapPin className="w-3.5 h-3.5" />
                    {item.location}
                  </span>
                </div>

                {/* Academic Highlights */}
                {item.highlights && item.highlights.length > 0 && (
                  <div className="space-y-2">
                    {item.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
