import React from 'react';
import { 
  ArrowUp, 
  Mail, 
  Terminal,
  Code2
} from 'lucide-react';
import { personalData } from '../data/personal';
import { InteractiveIcon } from './InteractiveIcon';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Exactly 7 items (DSA excluded)
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Training', href: '#training' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#080B12] border-t border-[rgba(148,163,184,0.14)] pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-left overflow-hidden">
      {/* Top subtle glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#6485FF]/40 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[rgba(148,163,184,0.14)]">
          
          {/* Brand, Title & Tagline Column */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#0D1421] to-[#111B2B] border border-[rgba(148,163,184,0.14)]">
                  <span className="font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-[#6485FF] to-[#36C5E8] text-sm">
                    GK
                  </span>
                </div>
                <div>
                  <h3 className="font-heading font-black text-xl text-[#F5F7FF]">
                    {personalData.name}
                  </h3>
                  <p className="text-xs font-mono text-[#36C5E8]">
                    {personalData.title}
                  </p>
                </div>
              </div>

              {/* Exact Tagline: Building, Learning & Growing Through Code. */}
              <p className="text-sm font-medium text-[#F5F7FF]/90 mb-2">
                &ldquo;Building, Learning &amp; Growing Through Code.&rdquo;
              </p>

              <p className="text-xs text-[#9AA8BC] max-w-md leading-relaxed mb-6">
                Passionate about developing modern web applications with Python, React, and database systems. Dedicated to writing clean, maintainable, and scalable software.
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
                icon={<Mail className="w-4 h-4 text-[#9475F5]" />}
              />
            </div>
          </div>

          {/* Quick Navigation Shortcuts */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#F5F7FF] font-bold mb-4 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-[#6485FF]" />
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[#9AA8BC] hover:text-[#F5F7FF] transition-colors py-1 flex items-center gap-1.5 group"
                >
                  <span className="w-1 h-1 rounded-full bg-[rgba(148,163,184,0.14)] group-hover:bg-[#36C5E8] transition-colors" />
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Back to Top */}
          <div className="md:col-span-2 flex flex-col justify-between items-start md:items-end">
            <div className="text-left md:text-right">
              <span className="text-xs font-mono text-[#9AA8BC]/60 block">
                Target Role
              </span>
              <span className="text-xs font-semibold text-emerald-400 font-mono">
                Software Engineer (2027)
              </span>
            </div>
            <button
              type="button"
              onClick={scrollToTop}
              className="mt-4 md:mt-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0D1421] border border-[rgba(148,163,184,0.14)] hover:border-[#6485FF]/50 text-xs font-semibold text-[#9AA8BC] hover:text-[#F5F7FF] transition-all shadow-md group cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-[#36C5E8]" />
            </button>
          </div>

        </div>

        {/* Bottom Credits & Dynamic Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#9AA8BC]/60">
          <div>
            &copy; {currentYear} {personalData.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <Code2 className="w-3.5 h-3.5 text-[#6485FF]" />
            <span>Python Full Stack Developer • AKTU CSE 2027</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
