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
            className="fixed inset-0 bg-[#080B12]/85 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-3xl bg-[#111B2B] border border-[rgba(148,163,184,0.14)] rounded-3xl p-6 sm:p-10 shadow-2xl z-10 my-8 max-h-[90vh] overflow-y-auto text-left"
          >
            {/* Top Action Bar */}
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-[rgba(148,163,184,0.14)]">
              <div className="flex items-center gap-2.5">
                <span className="p-2 rounded-xl bg-[#0D1421] border border-[#6485FF]/40 text-[#6485FF]">
                  <Sparkles className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="font-heading font-black text-xl text-[#F5F7FF]">
                    Verified Resume Document
                  </h3>
                  <p className="text-xs font-mono text-[#9AA8BC]">
                    Govind Kushwaha • Last Updated: {personalData.resume.lastUpdated}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {personalData.resume.hasPdf && (
                  <a
                    href={personalData.resume.pdfUrl}
                    download={personalData.resume.filename}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#6485FF] hover:bg-[#5274ee] shadow-md transition-colors"
                  >
                    <FileDown className="w-4 h-4" />
                    <span>Download PDF</span>
                  </a>
                )}
                <button
                  type="button"
                  onClick={onClose}
                  className="p-2 rounded-xl bg-[#0D1421] border border-[rgba(148,163,184,0.14)] text-[#9AA8BC] hover:text-[#F5F7FF] transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Resume Content Body */}
            <div className="space-y-6 text-xs text-[#9AA8BC]">
              {/* Header Box */}
              <div className="p-4 rounded-2xl bg-[#080B12]/80 border border-[rgba(148,163,184,0.14)]">
                <h4 className="text-2xl font-heading font-black text-[#F5F7FF]">
                  {personalData.name}
                </h4>
                <p className="text-sm font-mono text-[#36C5E8] mt-0.5">
                  {personalData.identity}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-[#9AA8BC] mt-2">
                  <span>{personalData.email}</span>
                  <span>•</span>
                  <span>{personalData.phone}</span>
                  <span>•</span>
                  <span>{personalData.location}</span>
                </div>
              </div>

              {/* Bio Summary & Target */}
              <div>
                <h5 className="font-mono uppercase text-[#6485FF] font-bold tracking-wider mb-2">
                  Summary &amp; Target Objective
                </h5>
                <p className="leading-relaxed bg-[#0D1421] p-3.5 rounded-xl border border-[rgba(148,163,184,0.14)] text-[#F5F7FF]/90">
                  {personalData.bio.join(' ')}
                </p>
                <div className="mt-2 text-xs font-mono text-[#6485FF] bg-[#080B12] p-2.5 rounded-lg border border-[#6485FF]/30">
                  Target: {personalData.careerGoal}
                </div>
              </div>

              {/* Education */}
              <div>
                <h5 className="font-mono uppercase text-[#9475F5] font-bold tracking-wider mb-2">
                  Academic Credentials
                </h5>
                <div className="space-y-2">
                  {educationData.map((e) => (
                    <div key={e.id} className="p-3 rounded-xl bg-[#0D1421] border border-[rgba(148,163,184,0.14)] flex justify-between items-center">
                      <div>
                        <span className="font-semibold text-[#F5F7FF] block">{e.degree} {e.field ? `— ${e.field}` : ''}</span>
                        <span className="text-[#9AA8BC]">{e.institution} ({e.duration})</span>
                      </div>
                      <span className="font-mono text-[#36C5E8] font-bold">{e.score}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Featured Projects */}
              <div>
                <h5 className="font-mono uppercase text-[#36C5E8] font-bold tracking-wider mb-2">
                  Projects &amp; Contributions
                </h5>
                <div className="space-y-2.5">
                  {projectsData.map((p) => (
                    <div key={p.id} className="p-3 rounded-xl bg-[#0D1421] border border-[rgba(148,163,184,0.14)]">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-[#F5F7FF]">{p.title}</span>
                        <span className="font-mono text-[10px] text-[#9475F5]">{p.status}</span>
                      </div>
                      <p className="text-[#F5F7FF]/80 mb-1">{p.myContribution}</p>
                      <span className="text-[#9AA8BC] font-mono text-[11px]">Stack: {p.technologies.join(', ')}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Training */}
              <div>
                <h5 className="font-mono uppercase text-emerald-400 font-bold tracking-wider mb-2">
                  Technical Training
                </h5>
                <div className="p-3 rounded-xl bg-[#0D1421] border border-[rgba(148,163,184,0.14)]">
                  <span className="font-semibold text-[#F5F7FF] block">{trainingData.title}</span>
                  <span className="text-[#9AA8BC] block mb-1">{trainingData.provider}, {trainingData.location} ({trainingData.status})</span>
                  <span className="text-[#F5F7FF]/80">{trainingData.modules.join(' • ')}</span>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 pt-4 border-t border-[rgba(148,163,184,0.14)] flex items-center justify-between">
              <span className="text-xs text-[#9AA8BC]/60 font-mono">
                Asset: public/resume/{personalData.resume.filename}
              </span>
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2 rounded-xl text-xs font-semibold text-[#9AA8BC] hover:text-[#F5F7FF] bg-[#0D1421] border border-[rgba(148,163,184,0.14)] transition-colors cursor-pointer"
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
