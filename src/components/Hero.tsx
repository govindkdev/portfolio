import React from 'react';
import { motion } from 'framer-motion';
import { 
  FolderGit2, 
  FileDown, 
  Mail, 
  MapPin, 
  Code2, 
  GraduationCap, 
  Sparkles,
  ArrowRight,
  Terminal
} from 'lucide-react';
import { personalData } from '../data/personal';
import { useTypewriter } from '../hooks/useTypewriter';
import { InteractiveIcon } from './InteractiveIcon';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

interface HeroProps {
  onOpenResumeModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const { text, phraseIndex } = useTypewriter({
    phrases: personalData.roles,
    typingSpeed: 70,
    deletingSpeed: 35,
    pauseDuration: 2200,
  });

  // Render styled text depending on the active phrase
  const renderTypedContent = () => {
    if (phraseIndex === 0) {
      if (text.startsWith("I'm ")) {
        const remainingName = text.slice(4);
        return (
          <>
            <span className="text-white">I'm </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300">
              {remainingName}
            </span>
          </>
        );
      }
      return <span className="text-white">{text}</span>;
    }

    if (phraseIndex === 1) {
      return (
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
          {text}
        </span>
      );
    }

    if (phraseIndex === 2) {
      return (
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
          {text}
        </span>
      );
    }

    // phraseIndex === 3: Software Developer
    return (
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
        {text}
      </span>
    );
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Hero Presentation & Animated Sequence */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101827]/90 border border-[#263247] w-fit mb-6 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-mono font-medium text-slate-300">
                Available for Frontend &amp; Full Stack Roles
              </span>
            </div>

            {/* Sub-headline greeting */}
            <div className="flex items-center gap-2 text-sm font-mono text-cyan-400 mb-2">
              <Terminal className="w-4 h-4" />
              <span>const developer = &quot;Govind Kushwaha&quot;;</span>
            </div>

            {/* Dynamic Typewriter Heading with fixed line height to eliminate layout shift */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 min-h-[1.25em] flex items-center flex-wrap leading-tight">
              <span>{renderTypedContent()}</span>
              <span 
                className="inline-block w-[3.5px] h-[0.9em] ml-1.5 bg-cyan-400 rounded-sm animate-pulse" 
                aria-hidden="true" 
              />
            </h1>

            {/* Supporting Bio Paragraph */}
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl mb-8 font-normal">
              {personalData.tagline}
            </p>

            {/* Quick Context Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8 max-w-xl">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#111827]/70 border border-[#263247]/80">
                <GraduationCap className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">B.Tech CSE (2027)</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#111827]/70 border border-[#263247]/80">
                <Code2 className="w-4 h-4 text-purple-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">React &amp; Python Stack</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#111827]/70 border border-[#263247]/80 col-span-2 sm:col-span-1">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">India</span>
              </div>
            </div>

            {/* HERO BUTTONS */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              {/* Explore Projects Button */}
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-[0_0_25px_rgba(59,130,246,0.35)] hover:shadow-[0_0_35px_rgba(139,92,246,0.55)] border border-blue-400/30 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <FolderGit2 className="w-4 h-4 text-blue-200 group-hover:rotate-6 transition-transform" />
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Download / View Resume Button */}
              <button
                type="button"
                onClick={() => {
                  if (onOpenResumeModal) {
                    onOpenResumeModal();
                  } else {
                    const el = document.getElementById('resume');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 hover:text-white bg-[#101827]/90 hover:bg-[#172033] border border-[#263247] hover:border-purple-500/50 shadow-sm transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-purple-400" />
                <span>Download Resume</span>
              </button>

              {/* Contact Me Button */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-300 hover:text-cyan-300 bg-transparent hover:bg-white/5 border border-[#263247] hover:border-cyan-500/40 transition-all duration-300"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* SOCIAL PROFILES WITH CUSTOM INTERACTIVE ICONS */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#64748B] uppercase tracking-wider mr-2">
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
                icon={<Mail className="w-5 h-5" />}
              />
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Official Professional Photograph with Halo & Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex items-center justify-center relative"
          >
            {/* Ambient Background Halos behind portrait */}
            <div className="absolute w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-blue-600/20 blur-[90px] -top-6 -left-6 pointer-events-none" />
            <div className="absolute w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-purple-600/25 blur-[100px] -bottom-6 -right-6 pointer-events-none" />
            <div className="absolute w-64 h-64 rounded-full bg-cyan-400/15 blur-[80px] pointer-events-none" />

            {/* Premium Portrait Container */}
            <div className="relative group max-w-sm sm:max-w-md w-full">
              {/* Outer Decorative Gradient Border */}
              <div className="relative p-1 rounded-3xl bg-gradient-to-tr from-blue-600 via-purple-600 to-cyan-400 shadow-[0_0_50px_rgba(59,130,246,0.35),0_0_80px_rgba(139,92,246,0.25)] transition-all duration-500 group-hover:shadow-[0_0_70px_rgba(59,130,246,0.5),0_0_100px_rgba(139,92,246,0.4)]">
                
                {/* Inner Bezel */}
                <div className="relative rounded-[22px] overflow-hidden bg-[#080B14]">
                  <img
                    src={personalData.profileImage}
                    alt="Govind Kushwaha - Professional Tech Portrait"
                    className="w-full h-auto aspect-square object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80';
                    }}
                  />

                  {/* Soft bottom vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080B14] via-transparent to-transparent opacity-40 pointer-events-none" />
                </div>
              </div>

              {/* Floating Tech Badges */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-[#101827]/95 border border-[#263247] p-3 rounded-2xl shadow-xl backdrop-blur-xl flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-[#94A3B8]">Specialization</div>
                  <div className="text-xs font-bold text-white">Frontend &amp; Python Stack</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 bg-[#101827]/95 border border-[#263247] p-3 rounded-2xl shadow-xl backdrop-blur-xl flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-purple-600/20 border border-purple-500/40 flex items-center justify-center text-purple-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-[#94A3B8]">B.Tech Final Year</div>
                  <div className="text-xs font-bold text-white">CSE • AKTU (2027)</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
