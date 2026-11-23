import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  FileText, 
  Mail, 
  Sparkles,
  ArrowUpRight
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

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Training', href: '#training', id: 'training' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const activeSection = useScrollSpy(navLinks.map((l) => l.id), 120);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
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
          ? 'py-3 bg-[#080B14]/85 backdrop-blur-xl border-b border-[#263247]/70 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-2.5 text-white font-extrabold text-xl tracking-tight"
            aria-label="Govind Kushwaha Portfolio Home"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#101827] to-[#172033] border border-[#263247] group-hover:border-blue-500/60 shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300">
              <span className="font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300">
                GK
              </span>
              <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-base leading-none text-white group-hover:text-blue-300 transition-colors">
                GOVIND
              </span>
              <span className="text-[10px] font-mono tracking-widest text-[#94A3B8] uppercase mt-0.5">
                KUSHWAHA
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#101827]/70 p-1.5 rounded-full border border-[#263247]/80 backdrop-blur-md shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/30 to-purple-600/30 border border-blue-500/40 shadow-[0_0_12px_rgba(59,130,246,0.25)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Action CTAs & Socials */}
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
            
            {/* Quick Resume Button */}
            <a
              href="#resume"
              onClick={(e) => {
                if (onOpenResumeModal) {
                  e.preventDefault();
                  onOpenResumeModal();
                } else {
                  handleNavClick(e, '#resume');
                }
              }}
              className="ml-2 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 border border-blue-400/30 shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all duration-300"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3 opacity-70" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex sm:hidden items-center gap-2">
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
            className="sm:hidden bg-[#080B14]/95 backdrop-blur-2xl border-b border-[#263247] px-4 pt-4 pb-6 mt-3 shadow-2xl"
          >
            <nav className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/40 text-white font-semibold'
                        : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <Sparkles className="w-4 h-4 text-cyan-400" />}
                  </a>
                );
              })}

              <div className="pt-4 mt-2 border-t border-[#263247]/60 flex items-center justify-between">
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
                  <InteractiveIcon
                    variant="email"
                    size="sm"
                    href={`mailto:${personalData.email}`}
                    ariaLabel="Email"
                    icon={<Mail className="w-4 h-4" />}
                  />
                </div>

                <a
                  href="#resume"
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    if (onOpenResumeModal) {
                      e.preventDefault();
                      onOpenResumeModal();
                    } else {
                      handleNavClick(e, '#resume');
                    }
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 border border-blue-400/30"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>View Resume</span>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
