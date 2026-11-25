import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  FileDown, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { personalData } from '../data/personal';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { InteractiveIcon } from './InteractiveIcon';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

interface NavbarProps {
  onOpenResumeModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Exactly 7 items as per Section 4 (DSA excluded)
  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Training', href: '#training', id: 'training' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const activeSection = useScrollSpy(navLinks.map((l) => l.id), 110);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-2.5 bg-[#080B12]/92 backdrop-blur-xl border-b border-[rgba(148,163,184,0.14)] shadow-[0_4px_30px_rgba(0,0,0,0.6)]'
          : 'py-4 sm:py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-2.5 text-white font-extrabold text-xl tracking-tight"
            aria-label="Govind Kushwaha - Portfolio Home"
          >
            <div className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#0D1421] to-[#111B2B] border border-[rgba(148,163,184,0.14)] group-hover:border-[#6485FF]/60 shadow-[0_0_15px_rgba(100,133,255,0.12)] transition-all duration-300">
              <span className="font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-[#6485FF] via-[#9475F5] to-[#36C5E8]">
                GK
              </span>
              <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#36C5E8] animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-sm sm:text-base leading-none text-[#F5F7FF] group-hover:text-[#6485FF] transition-colors">
                GOVIND
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-[#9AA8BC] uppercase mt-0.5">
                KUSHWAHA
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (7 items) */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#0D1421]/80 px-2 py-1.5 rounded-full border border-[rgba(148,163,184,0.14)] backdrop-blur-md shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-[#F5F7FF] font-semibold'
                      : 'text-[#9AA8BC] hover:text-[#F5F7FF] hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6485FF]/25 to-[#9475F5]/25 border border-[#6485FF]/40 shadow-[0_0_12px_rgba(100,133,255,0.25)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Action CTAs: Socials & Resume Download Button */}
          <div className="hidden sm:flex items-center gap-2">
            <InteractiveIcon
              variant="github"
              size="sm"
              href={personalData.github}
              target="_blank"
              ariaLabel="GitHub Profile"
              icon={<GithubIcon className="w-4 h-4" />}
            />
            <InteractiveIcon
              variant="linkedin"
              size="sm"
              href={personalData.linkedin}
              target="_blank"
              ariaLabel="LinkedIn Profile"
              icon={<LinkedinIcon className="w-4 h-4" />}
            />
            
            {/* Resume Button */}
            <div className="flex items-center gap-1.5 ml-1">
              <a
                href={personalData.resume.pdfUrl}
                download={personalData.resume.filename}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white bg-[#6485FF] hover:bg-[#5274ee] border border-[#6485FF]/40 shadow-[0_0_15px_rgba(100,133,255,0.25)] hover:shadow-[0_0_20px_rgba(100,133,255,0.4)] transition-all duration-300"
                title="Download Govind Kushwaha Resume PDF"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Resume</span>
              </a>

              {onOpenResumeModal && (
                <button
                  type="button"
                  onClick={onOpenResumeModal}
                  className="px-2 py-1.5 rounded-xl text-xs font-mono text-[#9AA8BC] hover:text-[#F5F7FF] hover:bg-[#111B2B] border border-transparent hover:border-[rgba(148,163,184,0.14)] transition-all cursor-pointer"
                  title="Preview Resume"
                >
                  Preview
                </button>
              )}
            </div>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <InteractiveIcon
              variant="github"
              size="sm"
              href={personalData.github}
              target="_blank"
              ariaLabel="GitHub"
              className="sm:hidden"
              icon={<GithubIcon className="w-4 h-4" />}
            />
            <InteractiveIcon
              variant="nav"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              ariaLabel={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              icon={mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
            />
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#080B12]/98 backdrop-blur-2xl border-b border-[rgba(148,163,184,0.14)] px-4 pt-4 pb-6 mt-2 shadow-2xl"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-[#6485FF]/20 to-[#9475F5]/20 border border-[#6485FF]/40 text-[#F5F7FF] font-semibold'
                        : 'text-[#9AA8BC] hover:text-[#F5F7FF] hover:bg-[#111B2B]/60'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive ? (
                      <Sparkles className="w-4 h-4 text-[#36C5E8]" />
                    ) : (
                      <ArrowRight className="w-3.5 h-3.5 text-[#9AA8BC]/60" />
                    )}
                  </a>
                );
              })}

              <div className="pt-4 mt-2 border-t border-[rgba(148,163,184,0.14)] flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2">
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
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <a
                    href={personalData.resume.pdfUrl}
                    download={personalData.resume.filename}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#6485FF] hover:bg-[#5274ee] border border-[#6485FF]/40"
                  >
                    <FileDown className="w-3.5 h-3.5" />
                    <span>Download Resume</span>
                  </a>
                  {onOpenResumeModal && (
                    <button
                      type="button"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        onOpenResumeModal();
                      }}
                      className="inline-flex items-center justify-center px-3 py-2.5 rounded-xl text-xs font-mono text-[#9AA8BC] hover:text-[#F5F7FF] bg-[#111B2B] border border-[rgba(148,163,184,0.14)]"
                    >
                      Preview
                    </button>
                  )}
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
