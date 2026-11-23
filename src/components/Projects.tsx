import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  CheckCircle, 
  Info, 
  X, 
  Sparkles, 
  Code, 
  Layers, 
  Users, 
  Cpu
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
          label: 'In Progress / Ongoing',
          classes: 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300',
          dot: 'bg-emerald-400 animate-pulse',
        };
      case 'concept':
        return {
          label: 'Concept / Planning Phase',
          classes: 'bg-purple-950/60 border-purple-500/40 text-purple-300',
          dot: 'bg-purple-400',
        };
      case 'development':
      default:
        return {
          label: 'In Active Development',
          classes: 'bg-cyan-950/60 border-cyan-500/40 text-cyan-300',
          dot: 'bg-cyan-400 animate-pulse',
        };
    }
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center md:text-left mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            03. FEATURED WORK
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Key Software &amp; Platform Projects
          </h2>
          <p className="mt-3 text-base text-[#94A3B8] max-w-2xl">
            Real implementations and architectural concepts with transparent disclosures of roles, technologies, and active development status.
          </p>
        </div>

        {/* Projects Cards Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => {
            const badge = getStatusBadge(project.statusType);

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group flex flex-col justify-between rounded-2xl bg-[#111827]/80 border border-[#263247] hover:border-blue-500/50 shadow-xl backdrop-blur-md overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(59,130,246,0.12)]"
              >
                <div>
                  {/* Visual Header / Cover Canvas */}
                  <div className="relative h-48 bg-gradient-to-br from-[#101827] via-[#172033] to-[#080B14] p-5 flex flex-col justify-between border-b border-[#263247]/70 overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                    <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-blue-600/10 blur-2xl group-hover:bg-blue-600/20 transition-all duration-500" />
                    
                    {/* Top Row: Index Tag & Status Pill */}
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-slate-400 bg-[#080B14]/80 px-2.5 py-1 rounded-md border border-[#263247]">
                        0{index + 1}
                      </span>
                      <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium border ${badge.classes}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${badge.dot}`} />
                        <span>{badge.label}</span>
                      </div>
                    </div>

                    {/* Center Iconography Banner */}
                    <div className="relative z-10 flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600/20 to-purple-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                        {project.id === 'attendx' ? (
                          <Users className="w-6 h-6 text-blue-400" />
                        ) : project.id === 'shopsphere-ai' ? (
                          <Sparkles className="w-6 h-6 text-purple-400" />
                        ) : (
                          <Cpu className="w-6 h-6 text-cyan-400" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-heading font-black text-xl text-white group-hover:text-blue-300 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-[11px] font-mono text-cyan-300">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* My Contribution Badge */}
                    <div className="p-3 rounded-xl bg-[#172033]/60 border border-[#263247] mb-5">
                      <div className="flex items-center gap-1.5 text-[11px] font-mono font-semibold text-blue-300 uppercase tracking-wider mb-1">
                        <Code className="w-3.5 h-3.5" />
                        <span>My Contribution:</span>
                      </div>
                      <p className="text-xs text-slate-200 font-medium">
                        {project.role}
                      </p>
                      {project.isTeamProject && (
                        <span className="inline-block mt-1 text-[10px] text-amber-300/90 font-mono">
                          * Team Project (Frontend Contributor)
                        </span>
                      )}
                    </div>

                    {/* Capabilities preview */}
                    <div className="space-y-1.5 mb-5">
                      <div className="text-[11px] font-mono text-[#64748B] uppercase tracking-wider">
                        Key Features / Scope:
                      </div>
                      {project.capabilities.slice(0, 3).map((cap, cIdx) => (
                        <div key={cIdx} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span className="truncate">{cap}</span>
                        </div>
                      ))}
                      {project.capabilities.length > 3 && (
                        <div className="text-[11px] text-purple-300 font-mono pl-5">
                          + {project.capabilities.length - 3} more capabilities
                        </div>
                      )}
                    </div>

                    {/* Technologies Tag Cloud */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-[#101827] border border-[#263247] text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="px-6 pb-6 pt-2 border-t border-[#263247]/50 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>Details &amp; Architecture</span>
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
                        title="Repository link not published" 
                        className="text-[10px] font-mono text-[#64748B] px-2 py-1 rounded bg-[#080B14] border border-[#263247]"
                      >
                        Internal
                      </span>
                    )}

                    {project.demoUrl ? (
                      <InteractiveIcon
                        variant="action"
                        size="sm"
                        href={project.demoUrl}
                        target="_blank"
                        ariaLabel={`Live Demo for ${project.title}`}
                        icon={<ExternalLink className="w-3.5 h-3.5" />}
                      />
                    ) : (
                      <span 
                        title="Live demo in internal/active development"
                        className="text-[10px] font-mono text-slate-400 px-2 py-1 rounded bg-[#101827] border border-[#263247]"
                      >
                        {project.statusType === 'concept' ? 'Concept' : 'In Dev'}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* PROJECT DETAILS MODAL INTERACTION */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="fixed inset-0 bg-[#080B14]/85 backdrop-blur-xl"
              />

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.25 }}
                className="relative w-full max-w-2xl bg-[#101827] border border-[#263247] rounded-3xl p-6 sm:p-8 shadow-2xl z-10 my-8 max-h-[90vh] overflow-y-auto"
              >
                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-2 rounded-xl bg-[#172033] border border-[#263247] text-slate-400 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Header */}
                <div className="pr-12 mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium border mb-3 bg-blue-950/60 border-blue-500/40 text-blue-300">
                    <span>{selectedProject.status}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-heading font-black text-white">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm font-mono text-cyan-300 mt-1">
                    {selectedProject.subtitle}
                  </p>
                </div>

                {/* Contribution & Role Disclosure */}
                <div className="p-4 rounded-2xl bg-[#172033]/80 border border-[#263247] mb-6">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-blue-400 font-semibold mb-2">
                    <Users className="w-4 h-4" />
                    <span>My Role &amp; Contribution Breakdown</span>
                  </div>
                  <p className="text-sm text-slate-200 leading-relaxed">
                    {selectedProject.roleDetails}
                  </p>
                </div>

                {/* Capabilities List */}
                <div className="mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                    Project Scope &amp; Architecture Capabilities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedProject.capabilities.map((cap, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#080B14]/60 border border-[#263247]/80 text-xs text-slate-300">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Categories if present */}
                {selectedProject.categories && (
                  <div className="mb-6">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-2">
                      <Layers className="w-4 h-4 text-cyan-400" />
                      Product Categories / Modules
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.categories.map((cat, idx) => (
                        <span key={idx} className="px-2.5 py-1 rounded-lg text-xs font-mono bg-purple-950/30 border border-purple-800/40 text-purple-300">
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Stack */}
                <div className="mb-8">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-2">
                    <Code className="w-4 h-4 text-blue-400" />
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((t, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-lg text-xs font-mono bg-[#172033] border border-[#263247] text-slate-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Footer Actions */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#263247]">
                  <div className="text-xs text-[#94A3B8]">
                    {selectedProject.isTeamProject 
                      ? 'Institutional collaborative project' 
                      : 'Developer project by Govind Kushwaha'}
                  </div>

                  <div className="flex items-center gap-3">
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-[#263247] transition-colors"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>GitHub Repository</span>
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={() => setSelectedProject(null)}
                      className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-[#172033] border border-[#263247] transition-colors cursor-pointer"
                    >
                      Close Details
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
