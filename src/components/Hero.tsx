import React from 'react';
import { motion } from 'framer-motion';
import { 
  FolderGit2, 
  FileDown, 
  Mail, 
  MapPin, 
  GraduationCap, 
  Sparkles,
  ArrowRight,
  Terminal,
  CheckCircle2,
  Code2
} from 'lucide-react';
import { personalData } from '../data/personal';
import { useTypewriter } from '../hooks/useTypewriter';
import { InteractiveIcon } from './InteractiveIcon';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

interface HeroProps {
  onOpenResumeModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const { text } = useTypewriter({
    phrases: personalData.roles,
    typingSpeed: 70,
    deletingSpeed: 35,
    pauseDuration: 2000,
  });

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#080B12]"
    >
      {/* Background ambient lighting - subtle & refined */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6485FF]/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#9475F5]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Hero Presentation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Small Greeting & Status */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1421] border border-[rgba(148,163,184,0.14)] text-xs font-mono tracking-wider text-[#36C5E8]">
                <Terminal className="w-3.5 h-3.5" />
                <span>HELLO, I&apos;M</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111B2B] border border-emerald-500/30 text-xs font-mono text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Open to Opportunities</span>
              </div>
            </div>

            {/* Name Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold tracking-tight text-[#F5F7FF] mb-2">
              {personalData.name}
            </h1>

            {/* Main Title & Typewriter */}
            <div className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6485FF] via-[#9475F5] to-[#36C5E8] mb-4 min-h-[1.3em] flex items-center">
              <span>{text}</span>
              <span 
                className="inline-block w-[3px] h-[0.9em] ml-1.5 bg-[#36C5E8] rounded-sm animate-pulse" 
                aria-hidden="true" 
              />
            </div>

            {/* Supporting Headline */}
            <h2 className="text-lg sm:text-xl font-medium text-[#F5F7FF]/90 mb-4">
              {personalData.headline}
            </h2>

            {/* Introduction Paragraphs */}
            <div className="space-y-3 text-sm sm:text-base text-[#9AA8BC] leading-relaxed max-w-2xl mb-6">
              <p>
                &ldquo;I&apos;m Govind Kushwaha, a final-year B.Tech Computer Science student passionate about software development and full-stack engineering.
              </p>
              <p>
                I&apos;m developing my skills in Python programming, frontend development, backend technologies, REST APIs, and database management while building practical web applications.&rdquo;
              </p>
            </div>

            {/* Additional Information Badges */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#111B2B] border border-[rgba(148,163,184,0.14)] text-xs font-mono text-[#6485FF]">
                <GraduationCap className="w-3.5 h-3.5 text-[#6485FF]" />
                B.Tech CSE | Class of 2027
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#111B2B] border border-[rgba(148,163,184,0.14)] text-xs font-mono text-[#36C5E8]">
                <MapPin className="w-3.5 h-3.5 text-[#36C5E8]" />
                GCRG Group of Institutions, Lucknow
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#111B2B] border border-[rgba(148,163,184,0.14)] text-xs font-mono text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                India
              </span>
            </div>

            {/* Technology Highlights: Python | React | JavaScript | SQL */}
            <div className="mb-8">
              <span className="text-xs font-mono text-[#9AA8BC]/70 uppercase tracking-wider block mb-2">
                Technology Highlights:
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {personalData.heroSkills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0D1421] border border-[rgba(148,163,184,0.14)] hover:border-[#6485FF]/50 text-xs font-mono text-[#F5F7FF] transition-colors"
                  >
                    <Code2 className="w-3 h-3 text-[#36C5E8]" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* HERO BUTTONS: Explore Projects, Download Resume, Contact Me */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              {/* 1. Explore Projects (Primary button) */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-[#6485FF] hover:bg-[#5274ee] shadow-[0_0_20px_rgba(100,133,255,0.3)] hover:shadow-[0_0_30px_rgba(100,133,255,0.5)] border border-[#6485FF]/30 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <FolderGit2 className="w-4 h-4 text-white" />
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* 2. Download Resume (Secondary button) */}
              <div className="inline-flex rounded-xl shadow-sm">
                <a
                  href={personalData.resume.pdfUrl}
                  download={personalData.resume.filename}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-[#F5F7FF] bg-[#111B2B] hover:bg-[#162235] border border-[rgba(148,163,184,0.14)] hover:border-[#9475F5]/60 transition-all duration-300 transform hover:-translate-y-0.5"
                  title="Download Resume PDF"
                >
                  <FileDown className="w-4 h-4 text-[#9475F5]" />
                  <span>Download Resume</span>
                </a>
                {onOpenResumeModal && (
                  <button
                    type="button"
                    onClick={onOpenResumeModal}
                    className="ml-1 px-3 py-3.5 rounded-xl text-xs font-mono text-[#9AA8BC] hover:text-[#F5F7FF] bg-[#0D1421] hover:bg-[#111B2B] border border-[rgba(148,163,184,0.14)] hover:border-[#6485FF]/40 transition-all cursor-pointer"
                    title="Preview Resume"
                  >
                    Preview
                  </button>
                )}
              </div>

              {/* 3. Contact Me (Outline or subtle button) */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-[#9AA8BC] hover:text-[#F5F7FF] bg-transparent hover:bg-white/5 border border-[rgba(148,163,184,0.14)] hover:border-[#36C5E8]/50 transition-all duration-300"
              >
                <Mail className="w-4 h-4 text-[#36C5E8]" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#9AA8BC]/70 uppercase tracking-wider mr-2">
                Connect:
              </span>
              <InteractiveIcon
                variant="github"
                size="md"
                href={personalData.github}
                target="_blank"
                ariaLabel="Govind Kushwaha on GitHub"
                icon={<GithubIcon className="w-5 h-5" />}
              />
              <InteractiveIcon
                variant="linkedin"
                size="md"
                href={personalData.linkedin}
                target="_blank"
                ariaLabel="Govind Kushwaha on LinkedIn"
                icon={<LinkedinIcon className="w-5 h-5" />}
              />
              <InteractiveIcon
                variant="email"
                size="md"
                href={`mailto:${personalData.email}`}
                ariaLabel="Send Email to Govind Kushwaha"
                icon={<Mail className="w-5 h-5 text-[#9475F5]" />}
              />
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Professional Photograph */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex items-center justify-center relative"
          >
            {/* Ambient Halos */}
            <div className="absolute w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-[#6485FF]/15 blur-[90px] -top-6 -left-6 pointer-events-none" />
            <div className="absolute w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-[#9475F5]/15 blur-[100px] -bottom-6 -right-6 pointer-events-none" />

            {/* Portrait Card */}
            <div className="relative group max-w-sm sm:max-w-md w-full">
              {/* Card Container with subtle gradient border */}
              <div className="relative p-1 rounded-3xl bg-gradient-to-tr from-[#6485FF]/40 via-[#9475F5]/30 to-[#36C5E8]/40 shadow-[0_0_40px_rgba(100,133,255,0.18)] transition-all duration-500 group-hover:shadow-[0_0_60px_rgba(100,133,255,0.3)]">
                
                {/* Inner Bezel */}
                <div className="relative rounded-[22px] overflow-hidden bg-[#080B12]">
                  <img
                    src={personalData.profileImage}
                    alt="Govind Kushwaha - Python Full Stack Developer"
                    className="w-full h-auto aspect-square object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="eager"
                  />

                  {/* Soft Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080B12]/80 via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>
              </div>

              {/* Floating Badge 1: Python Full Stack Developer */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-4 -left-3 sm:-bottom-5 sm:-left-4 bg-[#111B2B]/95 border border-[rgba(148,163,184,0.14)] p-3 rounded-2xl shadow-xl backdrop-blur-xl flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-[#6485FF]/20 border border-[#6485FF]/40 flex items-center justify-center text-[#6485FF]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#9AA8BC]">Specialization</div>
                  <div className="text-xs font-bold text-[#F5F7FF]">Python Full Stack Developer</div>
                </div>
              </motion.div>

              {/* Floating Badge 2: Class of 2027 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -top-4 -right-3 sm:-top-5 sm:-right-4 bg-[#111B2B]/95 border border-[rgba(148,163,184,0.14)] p-3 rounded-2xl shadow-xl backdrop-blur-xl flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-[#9475F5]/20 border border-[#9475F5]/40 flex items-center justify-center text-[#9475F5]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#9AA8BC]">Graduation 2027</div>
                  <div className="text-xs font-bold text-[#F5F7FF]">B.Tech CSE • AKTU</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
