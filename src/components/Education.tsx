import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award, 
  BookOpen, 
  CheckCircle2,
  Code2
} from 'lucide-react';
import { educationData } from '../data/personal';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#080B12]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center md:text-left mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1421] border border-[rgba(148,163,184,0.14)] text-[#6485FF] text-xs font-mono mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6485FF] animate-pulse" />
            05. EDUCATION
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#F5F7FF] tracking-tight">
            Education
          </h2>
          <p className="mt-2 text-base text-[#9AA8BC] max-w-2xl">
            Academic Qualifications &amp; Engineering Coursework.
          </p>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-[rgba(148,163,184,0.14)] ml-2 sm:ml-6 space-y-10">
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
                className={`absolute -left-[31px] sm:-left-[47px] top-2 w-5 h-5 rounded-full border-4 border-[#080B12] transition-all duration-300 ${
                  item.current 
                    ? 'bg-[#6485FF] shadow-[0_0_15px_rgba(100,133,255,0.8)] scale-110' 
                    : 'bg-[#162235] group-hover:bg-[#9475F5] group-hover:shadow-[0_0_12px_rgba(148,117,245,0.5)]'
                }`} 
              />

              {/* Education Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#111B2B] border border-[rgba(148,163,184,0.14)] hover:border-[#6485FF]/40 shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <span className="text-xs font-mono font-medium text-[#36C5E8] flex items-center gap-1.5 mb-1">
                      <GraduationCap className="w-4 h-4" />
                      {item.field ? `${item.field}` : 'Foundational Schooling'}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#F5F7FF]">
                      {item.degree}
                    </h3>
                  </div>

                  {/* Score Pill */}
                  <div className="sm:text-right shrink-0">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0D1421] border border-[#6485FF]/40 text-[#6485FF] font-mono text-sm font-bold shadow-inner">
                      <Award className="w-4 h-4 text-[#36C5E8]" />
                      <span>{item.score}</span>
                    </div>
                    <div className="text-[11px] font-mono text-[#9AA8BC] mt-1">
                      {item.scoreLabel}
                    </div>
                  </div>
                </div>

                {/* Institution & Location */}
                <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-[#9AA8BC] mb-4 pb-4 border-b border-[rgba(148,163,184,0.14)]">
                  <span className="text-[#F5F7FF] font-medium flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-[#9475F5]" />
                    {item.institution}
                  </span>
                  {item.affiliation && (
                    <span className="text-[#9AA8BC]">
                      • {item.affiliation}
                    </span>
                  )}
                  <span className="flex items-center gap-1 text-[#9AA8BC]/70">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.duration}
                  </span>
                  <span className="flex items-center gap-1 text-[#9AA8BC]/70">
                    <MapPin className="w-3.5 h-3.5" />
                    {item.location}
                  </span>
                </div>

                {/* Relevant Coursework (for B.Tech) */}
                {item.coursework && item.coursework.length > 0 && (
                  <div className="mb-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#F5F7FF]/90 flex items-center gap-1.5 mb-2.5">
                      <Code2 className="w-3.5 h-3.5 text-[#36C5E8]" />
                      Relevant Engineering Coursework:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.coursework.map((course, cIdx) => (
                        <span
                          key={cIdx}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[#0D1421] border border-[rgba(148,163,184,0.14)] text-[#9AA8BC]"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Academic Highlights */}
                {item.highlights && item.highlights.length > 0 && (
                  <div className="space-y-1.5 pt-2">
                    {item.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-[#9AA8BC]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#6485FF] shrink-0 mt-0.5" />
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
