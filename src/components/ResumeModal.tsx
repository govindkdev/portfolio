import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  FileDown, 
  Sparkles
} from 'lucide-react';
import { personalData, educationData, trainingData } from '../data/personal';
import { projectsData } from '../data/projects';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#080B14]/85 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-3xl bg-[#0F1626] border border-[#263247] rounded-3xl p-6 sm:p-10 shadow-2xl z-10 my-8 max-h-[90vh] overflow-y-auto text-left"
          >
            {/* Top Action Bar */}
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#263247]">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-blue-950/60 border border-blue-500/40 text-blue-400">
                  <Sparkles className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="font-heading font-black text-xl text-white">
                    Verified Resume Document
                  </h3>
                  <p className="text-xs font-mono text-[#94A3B8]">
                    Govind Kushwaha • Last Updated: {personalData.resume.lastUpdated}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {personalData.resume.hasPdf && (
                  <a
                    href={personalData.resume.pdfUrl}
                    download={personalData.resume.filename}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md transition-colors"
                  >
                    <FileDown className="w-4 h-4" />
                    <span>Download PDF</span>
                  </a>
                )}
                <button
                  type="button"
                  onClick={onClose}
                  className="p-2 rounded-xl bg-[#172033] border border-[#263247] text-slate-400 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Resume Content Body */}
            <div className="space-y-6 text-xs text-slate-300">
              {/* Header Box */}
              <div className="p-4 rounded-2xl bg-[#080B14]/80 border border-[#263247]">
                <h4 className="text-2xl font-heading font-black text-white">
                  {personalData.name}
                </h4>
                <p className="text-sm font-mono text-cyan-400 mt-0.5">
                  {personalData.identity}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-[#94A3B8] mt-2">
                  <span>{personalData.email}</span>
                  <span>•</span>
                  <span>{personalData.phone}</span>
                  <span>•</span>
                  <span>{personalData.location}</span>
                </div>
              </div>

              {/* Bio Summary */}
              <div>
                <h5 className="font-mono uppercase text-blue-400 font-bold tracking-wider mb-2">
                  Summary
                </h5>
                <p className="leading-relaxed bg-[#111827]/60 p-3.5 rounded-xl border border-[#263247]/60">
                  {personalData.bio.join(' ')}
                </p>
              </div>

              {/* Education */}
              <div>
                <h5 className="font-mono uppercase text-purple-400 font-bold tracking-wider mb-2">
                  Academic Credentials
                </h5>
                <div className="space-y-2">
                  {educationData.map((e) => (
                    <div key={e.id} className="p-3 rounded-xl bg-[#111827]/60 border border-[#263247]/60 flex justify-between items-center">
                      <div>
                        <span className="font-semibold text-white block">{e.degree}</span>
                        <span className="text-[#94A3B8]">{e.institution} ({e.duration})</span>
                      </div>
                      <span className="font-mono text-cyan-300 font-bold">{e.score}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Featured Projects */}
              <div>
                <h5 className="font-mono uppercase text-cyan-400 font-bold tracking-wider mb-2">
                  Projects &amp; Contributions
                </h5>
                <div className="space-y-2.5">
                  {projectsData.map((p) => (
                    <div key={p.id} className="p-3 rounded-xl bg-[#111827]/60 border border-[#263247]/60">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-white">{p.title}</span>
                        <span className="font-mono text-[10px] text-purple-300">{p.status}</span>
                      </div>
                      <p className="text-slate-300 mb-1">{p.roleDetails}</p>
                      <span className="text-[#94A3B8] font-mono text-[11px]">Stack: {p.technologies.join(', ')}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Training */}
              <div>
                <h5 className="font-mono uppercase text-emerald-400 font-bold tracking-wider mb-2">
                  Technical Training
                </h5>
                <div className="p-3 rounded-xl bg-[#111827]/60 border border-[#263247]/60">
                  <span className="font-semibold text-white block">{trainingData.title}</span>
                  <span className="text-[#94A3B8] block mb-1">{trainingData.provider}, {trainingData.location} ({trainingData.status})</span>
                  <span className="text-slate-300">{trainingData.modules.join(' • ')}</span>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 pt-4 border-t border-[#263247] flex items-center justify-between">
              <span className="text-xs text-[#64748B] font-mono">
                Asset location: public/resume/{personalData.resume.filename}
              </span>
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-[#172033] border border-[#263247] transition-colors cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
