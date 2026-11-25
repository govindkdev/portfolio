import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle, 
  Info, 
  X, 
  Code, 
  Layers, 
  ScanFace,
  Wrench,
  ShoppingBag,
  ArrowUpRight
} from 'lucide-react';
import { projectsData } from '../data/projects';
import type { ProjectItem } from '../types';
import { InteractiveIcon } from './InteractiveIcon';
import { GithubIcon } from './BrandIcons';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const getStatusBadge = (statusType: 'ongoing' | 'concept' | 'development') => {
    switch (statusType) {
      case 'ongoing':
        return {
          label: 'In Progress',
          classes: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
          dot: 'bg-emerald-400 animate-pulse',
        };
      case 'concept':
        return {
          label: 'Concept / Planning Phase',
          classes: 'bg-[#9475F5]/10 border-[#9475F5]/30 text-[#9475F5]',
          dot: 'bg-[#9475F5]',
        };
      case 'development':
      default:
        return {
          label: 'In Development',
          classes: 'bg-[#36C5E8]/10 border-[#36C5E8]/30 text-[#36C5E8]',
          dot: 'bg-[#36C5E8] animate-pulse',
        };
    }
  };

  const getProjectPreview = (id: string) => {
    switch (id) {
      case 'attendx':
        return {
          icon: <ScanFace className="w-7 h-7 text-[#6485FF]" />,
          mockHeader: 'AttendX OS • Smart Campus Node',
          stats: ['Face Recognition AI', 'Dynamic QR Verification', 'Attendance Analytics'],
          gradient: 'from-[#6485FF]/20 via-[#162235]/60 to-[#080B12]',
          accentBorder: 'border-[#6485FF]/30',
        };
      case 'versetools':
        return {
          icon: <Wrench className="w-7 h-7 text-[#36C5E8]" />,
          mockHeader: 'VerseTools Suite • Client Engine',
          stats: ['Zero-Upload Privacy', 'In-Browser Processors', 'Developer Utilities'],
          gradient: 'from-[#36C5E8]/20 via-[#162235]/60 to-[#080B12]',
          accentBorder: 'border-[#36C5E8]/30',
        };
      case 'shopsphere-ai':
      default:
        return {
          icon: <ShoppingBag className="w-7 h-7 text-[#9475F5]" />,
          mockHeader: 'ShopSphere AI • Virtual Try-On',
          stats: ['Computer Vision Fitting', 'Product Preview', 'Smart Recommendation'],
          gradient: 'from-[#9475F5]/20 via-[#162235]/60 to-[#080B12]',
          accentBorder: 'border-[#9475F5]/30',
        };
    }
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#080B12]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center md:text-left mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1421] border border-[rgba(148,163,184,0.14)] text-[#36C5E8] text-xs font-mono mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#36C5E8] animate-pulse" />
            04. FEATURED PROJECTS
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#F5F7FF] tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-2 text-base text-[#9AA8BC] max-w-2xl">
            A Selection of My Development Work.
          </p>
        </div>

        {/* 3 Premium Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => {
            const badge = getStatusBadge(project.statusType);
            const preview = getProjectPreview(project.id);

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group flex flex-col justify-between rounded-2xl bg-[#111B2B] border border-[rgba(148,163,184,0.14)] hover:border-[#6485FF]/50 shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(100,133,255,0.12)]"
              >
                <div>
                  {/* Visual Header / Cover Canvas */}
                  <div className={`relative h-48 bg-gradient-to-br ${preview.gradient} p-5 flex flex-col justify-between border-b border-[rgba(148,163,184,0.14)] overflow-hidden`}>
                    
                    {/* Top Row: Tag & Status Badge */}
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-[#F5F7FF] bg-[#080B12]/80 px-2.5 py-1 rounded-md border border-[rgba(148,163,184,0.14)]">
                        0{index + 1} // PROJECT
                      </span>
                      <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-medium border ${badge.classes}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${badge.dot}`} />
                        <span>{badge.label}</span>
                      </div>
                    </div>

                    {/* Interactive UI Mock Window */}
                    <div className="relative z-10 mt-2 p-3 rounded-xl bg-[#080B12]/85 border border-[rgba(148,163,184,0.14)] backdrop-blur-md">
                      <div className="flex items-center justify-between pb-2 mb-2 border-b border-[rgba(148,163,184,0.14)]">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-rose-500/80" />
                          <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                          <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                          <span className="text-[10px] font-mono text-[#9AA8BC] ml-2 truncate">
                            {preview.mockHeader}
                          </span>
                        </div>
                        <div className="p-1 rounded bg-[#0D1421]">
                          {preview.icon}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-1">
                        {preview.stats.map((stat, sIdx) => (
                          <span key={sIdx} className="text-[10px] font-mono text-[#36C5E8] bg-[#36C5E8]/10 px-2 py-0.5 rounded border border-[#36C5E8]/20">
                            {stat}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Title Bar inside Canvas */}
                    <div className="relative z-10 pt-1">
                      <h3 className="font-heading font-black text-xl text-[#F5F7FF] group-hover:text-[#6485FF] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs font-mono text-[#9AA8BC] truncate">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#9AA8BC] leading-relaxed mb-5 min-h-[4rem]">
                      {project.description}
                    </p>

                    {/* My Contribution Box */}
                    <div className="p-3.5 rounded-xl bg-[#0D1421] border border-[rgba(148,163,184,0.14)] mb-5">
                      <div className="flex items-center gap-1.5 text-[11px] font-mono font-semibold text-[#6485FF] uppercase tracking-wider mb-1">
                        <Code className="w-3.5 h-3.5" />
                        <span>My Contribution:</span>
                      </div>
                      <p className="text-xs text-[#F5F7FF] font-medium leading-relaxed">
                        {project.myContribution}
                      </p>
                      {project.isTeamProject && (
                        <span className="inline-block mt-1.5 text-[10px] text-amber-400 font-mono">
                          * Collaborative Team Project (Lead Frontend Contributor)
                        </span>
                      )}
                    </div>

                    {/* Key Features Preview */}
                    <div className="space-y-1.5 mb-5">
                      <div className="text-[11px] font-mono text-[#9AA8BC]/70 uppercase tracking-wider">
                        Key Features:
                      </div>
                      {project.features.slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-[#F5F7FF]/90">
                          <CheckCircle className="w-3.5 h-3.5 text-[#36C5E8] shrink-0 mt-0.5" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                      {project.features.length > 3 && (
                        <button
                          type="button"
                          onClick={() => setSelectedProject(project)}
                          className="text-[11px] text-[#9475F5] font-mono pl-5 hover:underline text-left cursor-pointer"
                        >
                          + {project.features.length - 3} more features (View all)
                        </button>
                      )}
                    </div>

                    {/* Technologies Tag Cloud */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-[#0D1421] border border-[rgba(148,163,184,0.14)] text-[#9AA8BC]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="px-6 pb-6 pt-3 border-t border-[rgba(148,163,184,0.14)] flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#6485FF] hover:text-[#5274ee] transition-colors cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>View System Specs</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl ? (
                      <InteractiveIcon
                        variant="github"
                        size="sm"
                        href={project.githubUrl}
                        target="_blank"
                        ariaLabel={`GitHub Repository for ${project.title}`}
                        icon={<GithubIcon className="w-3.5 h-3.5" />}
                      />
                    ) : (
                      <span 
                        title="Repository link internal" 
                        className="text-[10px] font-mono text-[#9AA8BC]/60 px-2 py-1 rounded bg-[#080B12] border border-[rgba(148,163,184,0.14)]"
                      >
                        Internal
                      </span>
                    )}

                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-[#0D1421] border border-[rgba(148,163,184,0.14)] text-[#F5F7FF] hover:border-[#6485FF]/50 transition-colors"
                        aria-label={`Live Demo for ${project.title}`}
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span 
                        title="Active project in development" 
                        className="text-[10px] font-mono text-[#9AA8BC]/60 px-2 py-1 rounded bg-[#080B12] border border-[rgba(148,163,184,0.14)]"
                      >
                        Demo: In Build
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Modal: Comprehensive System Specifications */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="fixed inset-0 bg-[#080B12]/80 backdrop-blur-md"
              />

              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#111B2B] border border-[rgba(148,163,184,0.14)] shadow-2xl p-6 sm:p-8"
              >
                {/* Modal Header */}
                <div className="flex items-start justify-between pb-4 mb-6 border-b border-[rgba(148,163,184,0.14)]">
                  <div>
                    <span className="text-xs font-mono text-[#6485FF] uppercase tracking-wider block mb-1">
                      System Architecture &amp; Specifications
                    </span>
                    <h3 className="text-2xl font-heading font-black text-[#F5F7FF]">
                      {selectedProject.title}
                    </h3>
                    <p className="text-xs text-[#9AA8BC] mt-0.5">
                      {selectedProject.subtitle}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-xl bg-[#0D1421] border border-[rgba(148,163,184,0.14)] text-[#9AA8BC] hover:text-[#F5F7FF] transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Details Grid */}
                <div className="space-y-6">
                  {/* Status & Project Role */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-[#0D1421] border border-[rgba(148,163,184,0.14)]">
                      <span className="text-[11px] font-mono text-[#9AA8BC] uppercase tracking-wider block mb-1">
                        Development Status
                      </span>
                      <span className="text-sm font-semibold text-[#F5F7FF]">
                        {selectedProject.status}
                      </span>
                    </div>
                    <div className="p-4 rounded-xl bg-[#0D1421] border border-[rgba(148,163,184,0.14)]">
                      <span className="text-[11px] font-mono text-[#9AA8BC] uppercase tracking-wider block mb-1">
                        Project Role
                      </span>
                      <span className="text-sm font-semibold text-[#6485FF]">
                        {selectedProject.role}
                      </span>
                    </div>
                  </div>

                  {/* My Contribution Details */}
                  <div className="p-4 rounded-xl bg-[#0D1421] border border-[rgba(148,163,184,0.14)]">
                    <span className="text-xs font-mono text-[#36C5E8] uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
                      <Code className="w-3.5 h-3.5" />
                      Detailed Contribution Breakdown:
                    </span>
                    <p className="text-xs sm:text-sm text-[#F5F7FF]/90 leading-relaxed">
                      {selectedProject.myContribution}
                    </p>
                  </div>

                  {/* All Features Checklist */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#9AA8BC] mb-3 flex items-center gap-2">
                      <Layers className="w-4 h-4 text-[#6485FF]" />
                      Complete Feature Set ({selectedProject.features.length}):
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedProject.features.map((feat, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 p-2.5 rounded-lg bg-[#0D1421] border border-[rgba(148,163,184,0.14)] text-xs text-[#F5F7FF]/90"
                        >
                          <CheckCircle className="w-4 h-4 text-[#36C5E8] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#9AA8BC] mb-2.5">
                      Technologies &amp; Architecture:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 rounded-lg text-xs font-mono bg-[#0D1421] border border-[rgba(148,163,184,0.14)] text-[#9AA8BC]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="mt-8 pt-4 border-t border-[rgba(148,163,184,0.14)] flex items-center justify-between">
                  <div className="text-xs font-mono text-[#9AA8BC]/60">
                    Transparent disclosure for recruiters &amp; technical evaluators
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#6485FF] hover:bg-[#5274ee] transition-all cursor-pointer"
                  >
                    Close Specs
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
