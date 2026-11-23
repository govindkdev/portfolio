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
Frontend Developer | Python Full Stack Developer
Email: ${personalData.email} | Phone: ${personalData.phone}
Location: ${personalData.location}
GitHub: ${personalData.github} | LinkedIn: ${personalData.linkedin}

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

- ${educationData[1].degree}
  ${educationData[1].institution}
  Score: ${educationData[1].score} (${educationData[1].duration})

- ${educationData[2].degree}
  ${educationData[2].institution}
  Score: ${educationData[2].score} (${educationData[2].duration})

--------------------------------------------------
TECHNICAL SKILLS
--------------------------------------------------
- Frontend: HTML5, CSS3, JavaScript ES6+, React.js, TypeScript, Tailwind CSS
- Backend: Python, Django, Flask
- Database: MySQL, SQL
- Tools: Git, GitHub, VS Code, Vite
- Concepts: REST APIs, JSON, Responsive Web Design, Component-Based Development, DSA

--------------------------------------------------
FEATURED PROJECTS
--------------------------------------------------
1. ${projectsData[0].title} - ${projectsData[0].subtitle}
   Role: ${projectsData[0].role}
   Status: ${projectsData[0].status}
   Tech: ${projectsData[0].technologies.join(', ')}

2. ${projectsData[1].title} - ${projectsData[1].subtitle}
   Role: ${projectsData[1].role}
   Status: ${projectsData[1].status}
   Tech: ${projectsData[1].technologies.join(', ')}

3. ${projectsData[2].title} - ${projectsData[2].subtitle}
   Role: ${projectsData[2].role}
   Status: ${projectsData[2].status}
   Tech: ${projectsData[2].technologies.join(', ')}

--------------------------------------------------
TRAINING
--------------------------------------------------
- ${trainingData.title} | ${trainingData.provider}, ${trainingData.location}
  Status: ${trainingData.status}
    `.trim();

    navigator.clipboard.writeText(textContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="resume" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center md:text-left mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            06. VERIFIED RESUME
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Curriculum Vitae &amp; Credentials
              </h2>
              <p className="mt-2 text-base text-[#94A3B8] max-w-xl">
                Current verified resume data with instant digital preview and configurable document download.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              {personalData.resume.hasPdf ? (
                <a
                  href={personalData.resume.pdfUrl}
                  download={personalData.resume.filename}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all transform hover:-translate-y-0.5"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download PDF Resume</span>
                </a>
              ) : (
                <div className="px-4 py-2 rounded-xl text-xs font-mono bg-[#172033] border border-[#263247] text-amber-400">
                  Updated PDF Coming Soon
                </div>
              )}

              <button
                type="button"
                onClick={handleCopyTextResume}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-[#101827] hover:bg-[#172033] border border-[#263247] transition-all cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
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
          className="rounded-3xl p-6 sm:p-10 md:p-12 bg-[#0B0F19] border border-[#263247] shadow-2xl relative overflow-hidden text-left"
        >
          {/* Subtle Top Gradient Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400" />

          {/* CV Header: Name & Contact Bar */}
          <div className="pb-8 mb-8 border-b border-[#263247]/80 flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div>
              <h3 className="text-3xl sm:text-4xl font-heading font-black text-white tracking-tight">
                {personalData.name}
              </h3>
              <p className="text-sm sm:text-base font-mono text-cyan-400 font-medium mt-1">
                {personalData.identity}
              </p>
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-[#94A3B8] mt-3">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-purple-400" />
                  {personalData.email}
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-blue-400" />
                  {personalData.phone}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  {personalData.location}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-[#172033] border border-[#263247] text-slate-300 hover:text-white hover:border-blue-500/50 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>github.com/govindkdev</span>
              </a>
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-[#172033] border border-[#263247] text-slate-300 hover:text-white hover:border-blue-500/50 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Section: Professional Summary */}
          <div className="mb-8">
            <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Professional Profile
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {personalData.bio[0]} {personalData.bio[1]}
            </p>
          </div>

          {/* Section: Education */}
          <div className="mb-8">
            <h4 className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              Education
            </h4>
            <div className="space-y-4">
              {educationData.map((edu) => (
                <div key={edu.id} className="p-3.5 rounded-xl bg-[#111827]/70 border border-[#263247]/70">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="font-semibold text-sm text-white">
                      {edu.degree} {edu.field ? `— ${edu.field}` : ''}
                    </span>
                    <span className="text-xs font-mono text-cyan-300 font-bold">
                      {edu.score} ({edu.scoreLabel})
                    </span>
                  </div>
                  <div className="text-xs text-[#94A3B8] mt-1">
                    {edu.institution} {edu.affiliation ? `(${edu.affiliation})` : ''} • {edu.duration}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Technical Skills Matrix */}
          <div className="mb-8">
            <h4 className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold mb-3 flex items-center gap-2">
              <Code className="w-4 h-4" />
              Technical Skills Matrix
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-[#111827]/70 border border-[#263247]/70">
                <span className="text-[#94A3B8] font-mono block mb-1">Frontend Engineering:</span>
                <span className="text-slate-200 font-medium">React.js, TypeScript, JavaScript (ES6+), Tailwind CSS, HTML5, CSS3</span>
              </div>
              <div className="p-3 rounded-xl bg-[#111827]/70 border border-[#263247]/70">
                <span className="text-[#94A3B8] font-mono block mb-1">Backend &amp; APIs:</span>
                <span className="text-slate-200 font-medium">Python, Django, Flask, RESTful APIs, JSON</span>
              </div>
              <div className="p-3 rounded-xl bg-[#111827]/70 border border-[#263247]/70">
                <span className="text-[#94A3B8] font-mono block mb-1">Databases:</span>
                <span className="text-slate-200 font-medium">MySQL, Structured Query Language (SQL)</span>
              </div>
              <div className="p-3 rounded-xl bg-[#111827]/70 border border-[#263247]/70">
                <span className="text-[#94A3B8] font-mono block mb-1">Tools &amp; Foundations:</span>
                <span className="text-slate-200 font-medium">Git, GitHub, VS Code, Vite, DSA, Component Architecture</span>
              </div>
            </div>
          </div>

          {/* Section: Project Highlights */}
          <div className="mb-8">
            <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-3 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Featured Projects
            </h4>
            <div className="space-y-3.5">
              {projectsData.map((proj) => (
                <div key={proj.id} className="p-3.5 rounded-xl bg-[#111827]/70 border border-[#263247]/70 text-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <span className="font-bold text-sm text-white">
                      {proj.title} <span className="font-normal text-slate-400">— {proj.subtitle}</span>
                    </span>
                    <span className="text-[11px] font-mono text-purple-300">
                      {proj.status}
                    </span>
                  </div>
                  <div className="text-slate-300 leading-relaxed mb-1.5">
                    {proj.roleDetails}
                  </div>
                  <div className="text-[#94A3B8] font-mono text-[11px]">
                    Technologies: {proj.technologies.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Ongoing Training */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold mb-3 flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              Professional Training
            </h4>
            <div className="p-3.5 rounded-xl bg-[#111827]/70 border border-[#263247]/70 text-xs">
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="font-bold text-white text-sm">
                  {trainingData.title}
                </span>
                <span className="text-[11px] font-mono text-cyan-400">
                  {trainingData.status}
                </span>
              </div>
              <div className="text-[#94A3B8] mb-1">
                {trainingData.provider}, {trainingData.location}
              </div>
              <div className="text-slate-300">
                {trainingData.modules.join(' • ')}
              </div>
            </div>
          </div>

          {/* Footer Metadata */}
          <div className="mt-8 pt-4 border-t border-[#263247]/60 flex flex-wrap items-center justify-between text-[11px] font-mono text-[#64748B]">
            <span>Asset: {personalData.resume.filename}</span>
            <span>Last Verified: {personalData.resume.lastUpdated}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
