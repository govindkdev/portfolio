import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileDown, 
  Copy, 
  Check, 
  Sparkles, 
  GraduationCap, 
  Code, 
  Terminal, 
  Briefcase, 
  Mail, 
  Phone, 
  MapPin
} from 'lucide-react';
import { personalData, educationData, trainingData } from '../data/personal';
import { projectsData } from '../data/projects';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export const Resume: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyTextResume = () => {
    const textContent = `
GOVIND KUSHWAHA
${personalData.identity}
Email: ${personalData.email} | Phone: ${personalData.phone}
Location: ${personalData.location}
GitHub: ${personalData.github} | LinkedIn: ${personalData.linkedin}

--------------------------------------------------
CAREER OBJECTIVE
--------------------------------------------------
${personalData.careerGoal}

--------------------------------------------------
PROFESSIONAL SUMMARY
--------------------------------------------------
${personalData.bio.join('\n\n')}

--------------------------------------------------
EDUCATION
--------------------------------------------------
- ${educationData[0].degree} in ${educationData[0].field}
  ${educationData[0].institution} (${educationData[0].affiliation})
  Duration: ${educationData[0].duration} | CGPA: ${educationData[0].score}
  Coursework: ${educationData[0].coursework?.join(', ')}

- ${educationData[1].degree}
  ${educationData[1].institution} | Score: ${educationData[1].score} (${educationData[1].duration})

- ${educationData[2].degree}
  ${educationData[2].institution} | Score: ${educationData[2].score} (${educationData[2].duration})

--------------------------------------------------
TECHNICAL SKILLS
--------------------------------------------------
- Programming Languages: Python, JavaScript, TypeScript, C, SQL
- Frontend Development: HTML5, CSS3, JavaScript ES6+, React.js, TypeScript, Tailwind CSS, Responsive Web Design
- Backend Development: Python, Django, FastAPI (Learning), Flask, REST APIs, OOP, Authentication
- Database Management: MySQL, PostgreSQL (Learning), SQLite, SQL, Database Design
- Tools & Technologies: Git, GitHub, VS Code, Postman, Vite, npm

--------------------------------------------------
FEATURED PROJECTS
--------------------------------------------------
1. ${projectsData[0].title} - ${projectsData[0].subtitle}
   Contribution: ${projectsData[0].myContribution}
   Status: ${projectsData[0].status}
   Tech: ${projectsData[0].technologies.join(', ')}

2. ${projectsData[1].title} - ${projectsData[1].subtitle}
   Contribution: ${projectsData[1].myContribution}
   Status: ${projectsData[1].status}
   Tech: ${projectsData[1].technologies.join(', ')}

3. ${projectsData[2].title} - ${projectsData[2].subtitle}
   Contribution: ${projectsData[2].myContribution}
   Status: ${projectsData[2].status}
   Tech: ${projectsData[2].technologies.join(', ')}

--------------------------------------------------
TRAINING
--------------------------------------------------
- ${trainingData.title} | ${trainingData.provider}, ${trainingData.location}
  Status: ${trainingData.status}
  Curriculum: ${trainingData.modules.join(' • ')}
    `.trim();

    navigator.clipboard.writeText(textContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="resume" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#080B12]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center md:text-left mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1421] border border-[rgba(148,163,184,0.14)] text-[#36C5E8] text-xs font-mono mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#36C5E8] animate-pulse" />
            RESUME &amp; CREDENTIALS
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#F5F7FF] tracking-tight">
                Curriculum Vitae Document
              </h2>
              <p className="mt-2 text-base text-[#9AA8BC] max-w-xl">
                Current verified resume data with instant digital preview and direct PDF download.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              {personalData.resume.hasPdf && (
                <a
                  href={personalData.resume.pdfUrl}
                  download={personalData.resume.filename}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#6485FF] hover:bg-[#5274ee] shadow-[0_0_20px_rgba(100,133,255,0.3)] transition-all transform hover:-translate-y-0.5"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download PDF Resume</span>
                </a>
              )}

              <button
                type="button"
                onClick={handleCopyTextResume}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-[#9AA8BC] hover:text-[#F5F7FF] bg-[#0D1421] hover:bg-[#111B2B] border border-[rgba(148,163,184,0.14)] transition-all cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#9AA8BC]" />}
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Summary'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Digital Interactive CV Sheet */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl p-6 sm:p-10 md:p-12 bg-[#111B2B] border border-[rgba(148,163,184,0.14)] shadow-2xl relative overflow-hidden text-left"
        >
          {/* Subtle Top Gradient Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#6485FF] via-[#9475F5] to-[#36C5E8]" />

          {/* CV Header: Name & Contact Bar */}
          <div className="pb-8 mb-8 border-b border-[rgba(148,163,184,0.14)] flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div>
              <h3 className="text-3xl sm:text-4xl font-heading font-black text-[#F5F7FF] tracking-tight">
                {personalData.name}
              </h3>
              <p className="text-sm sm:text-base font-mono text-[#36C5E8] font-medium mt-1">
                {personalData.identity}
              </p>
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-[#9AA8BC] mt-3">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#9475F5]" />
                  {personalData.email}
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#6485FF]" />
                  {personalData.phone}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#36C5E8]" />
                  {personalData.location}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-[#0D1421] border border-[rgba(148,163,184,0.14)] text-[#9AA8BC] hover:text-[#F5F7FF] hover:border-[#6485FF]/50 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-[#0D1421] border border-[rgba(148,163,184,0.14)] text-[#9AA8BC] hover:text-[#F5F7FF] hover:border-[#6485FF]/50 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Section: Professional Summary */}
          <div className="mb-8">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#36C5E8] font-bold mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Professional Profile &amp; Career Objective
            </h4>
            <p className="text-xs sm:text-sm text-[#F5F7FF]/90 leading-relaxed mb-3">
              {personalData.bio[0]} {personalData.bio[1]}
            </p>
            <div className="p-3 rounded-xl bg-[#080B12]/80 border border-[#6485FF]/30 text-xs text-[#6485FF] font-mono">
              <strong>Target: </strong> {personalData.careerGoal}
            </div>
          </div>

          {/* Section: Education */}
          <div className="mb-8">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#6485FF] font-bold mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              Education
            </h4>
            <div className="space-y-3">
              {educationData.map((edu) => (
                <div key={edu.id} className="p-3.5 rounded-xl bg-[#0D1421] border border-[rgba(148,163,184,0.14)]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="font-semibold text-sm text-[#F5F7FF]">
                      {edu.degree} {edu.field ? `— ${edu.field}` : ''}
                    </span>
                    <span className="text-xs font-mono text-[#36C5E8] font-bold">
                      {edu.score} ({edu.scoreLabel})
                    </span>
                  </div>
                  <div className="text-xs text-[#9AA8BC] mt-1">
                    {edu.institution} {edu.affiliation ? `(${edu.affiliation})` : ''} • {edu.duration}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Technical Skills Matrix (5 Categories) */}
          <div className="mb-8">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#9475F5] font-bold mb-3 flex items-center gap-2">
              <Code className="w-4 h-4" />
              Technical Skills Matrix (5 Categories)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-[#0D1421] border border-[rgba(148,163,184,0.14)]">
                <span className="text-[#6485FF] font-mono block mb-1">01. Programming Languages:</span>
                <span className="text-[#F5F7FF] font-medium">Python, JavaScript, TypeScript, C, SQL</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0D1421] border border-[rgba(148,163,184,0.14)]">
                <span className="text-[#36C5E8] font-mono block mb-1">02. Frontend Development:</span>
                <span className="text-[#F5F7FF] font-medium">HTML5, CSS3, JavaScript ES6+, React.js, TypeScript, Tailwind CSS, Responsive Design</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0D1421] border border-[rgba(148,163,184,0.14)]">
                <span className="text-[#9475F5] font-mono block mb-1">03. Backend Development:</span>
                <span className="text-[#F5F7FF] font-medium">Python, Django, FastAPI (Learning), Flask, REST APIs, OOP, Authentication</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0D1421] border border-[rgba(148,163,184,0.14)]">
                <span className="text-[#6485FF] font-mono block mb-1">04. Database Management:</span>
                <span className="text-[#F5F7FF] font-medium">MySQL, PostgreSQL (Learning), SQLite, SQL, Database Design</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0D1421] border border-[rgba(148,163,184,0.14)] sm:col-span-2">
                <span className="text-[#36C5E8] font-mono block mb-1">05. Tools &amp; Technologies:</span>
                <span className="text-[#F5F7FF] font-medium">Git, GitHub, VS Code, Postman, Vite, npm</span>
              </div>
            </div>
          </div>

          {/* Section: Project Highlights */}
          <div className="mb-8">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#36C5E8] font-bold mb-3 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Featured Projects
            </h4>
            <div className="space-y-3">
              {projectsData.map((proj) => (
                <div key={proj.id} className="p-3.5 rounded-xl bg-[#0D1421] border border-[rgba(148,163,184,0.14)] text-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <span className="font-bold text-sm text-[#F5F7FF]">
                      {proj.title} <span className="font-normal text-[#9AA8BC]">— {proj.subtitle}</span>
                    </span>
                    <span className="text-[11px] font-mono text-[#9475F5]">
                      {proj.status}
                    </span>
                  </div>
                  <div className="text-[#F5F7FF]/80 leading-relaxed mb-1.5">
                    {proj.myContribution}
                  </div>
                  <div className="text-[#9AA8BC] font-mono text-[11px]">
                    Technologies: {proj.technologies.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Ongoing Training */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#9475F5] font-bold mb-3 flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              Professional Training
            </h4>
            <div className="p-3.5 rounded-xl bg-[#0D1421] border border-[rgba(148,163,184,0.14)] text-xs">
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="font-bold text-[#F5F7FF] text-sm">
                  {trainingData.title}
                </span>
                <span className="text-[11px] font-mono text-[#36C5E8]">
                  {trainingData.status}
                </span>
              </div>
              <div className="text-[#9AA8BC] mb-1">
                {trainingData.provider}, {trainingData.location}
              </div>
              <div className="text-[#F5F7FF]/80">
                {trainingData.modules.join(' • ')}
              </div>
            </div>
          </div>

          {/* Footer Metadata */}
          <div className="mt-8 pt-4 border-t border-[rgba(148,163,184,0.14)] flex flex-wrap items-center justify-between text-[11px] font-mono text-[#9AA8BC]/60">
            <span>Asset: {personalData.resume.filename}</span>
            <span>Last Verified: {personalData.resume.lastUpdated}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
