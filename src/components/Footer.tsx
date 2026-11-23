import React from 'react';
import { 
  ArrowUp, 
  Mail, 
  Terminal
} from 'lucide-react';
import { personalData } from '../data/personal';
import { InteractiveIcon } from './InteractiveIcon';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Training', href: '#training' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#05080E] border-t border-[#263247]/80 pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-left overflow-hidden">
      {/* Top subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#263247]/60">
          
          {/* Brand & Bio column */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#101827] to-[#172033] border border-[#263247]">
                  <span className="font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 text-sm">
                    GK
                  </span>
                </div>
                <div>
                  <h3 className="font-heading font-black text-xl text-white">
                    {personalData.name}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400">
                    {personalData.identity}
                  </p>
                </div>
              </div>

              <p className="text-xs text-[#94A3B8] max-w-md leading-relaxed mb-6">
                Passionate about building modern, responsive, and user-focused web applications through frontend technologies and Python Full Stack development.
              </p>
            </div>

            {/* Social Icons row */}
            <div className="flex items-center gap-2.5">
              <InteractiveIcon
                variant="github"
                size="sm"
                href={personalData.github}
                target="_blank"
                ariaLabel="GitHub"
                icon={<GithubIcon className="w-4 h-4" />}
              />
              <InteractiveIcon
                variant="linkedin"
                size="sm"
                href={personalData.linkedin}
                target="_blank"
                ariaLabel="LinkedIn"
                icon={<LinkedinIcon className="w-4 h-4" />}
              />
              <InteractiveIcon
                variant="email"
                size="sm"
                href={`mailto:${personalData.email}`}
                ariaLabel="Email"
                icon={<Mail className="w-4 h-4" />}
              />
            </div>
          </div>

          {/* Quick Navigation Shortcuts */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-4 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-blue-400" />
              Navigation Shortcuts
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[#94A3B8] hover:text-white transition-colors py-1 flex items-center gap-1.5 group"
                >
                  <span className="w-1 h-1 rounded-full bg-[#263247] group-hover:bg-cyan-400 transition-colors" />
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Back to Top */}
          <div className="md:col-span-2 flex flex-col justify-between items-start md:items-end">
            <span className="text-xs font-mono text-[#64748B]">
              Ready to collaborate?
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="mt-4 md:mt-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#101827] border border-[#263247] hover:border-blue-500/50 text-xs font-semibold text-slate-300 hover:text-white transition-all shadow-md group cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-cyan-400" />
            </button>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#64748B]">
          <div>
            &copy; {currentYear} {personalData.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Built with React, TypeScript &amp; Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
