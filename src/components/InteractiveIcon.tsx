import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export type IconVariant = 
  | 'github' 
  | 'linkedin' 
  | 'email' 
  | 'phone'
  | 'nav' 
  | 'action' 
  | 'cyan' 
  | 'purple' 
  | 'blue';

interface InteractiveIconProps {
  icon: React.ReactNode;
  variant?: IconVariant;
  onClick?: (e: React.MouseEvent) => void;
  href?: string;
  target?: string;
  rel?: string;
  ariaLabel: string;
  title?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
}

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export const InteractiveIcon: React.FC<InteractiveIconProps> = ({
  icon,
  variant = 'blue',
  onClick,
  href,
  target,
  rel,
  ariaLabel,
  title,
  className = '',
  size = 'md',
  disabled = false,
}) => {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [isClicked, setIsClicked] = useState(false);

  // Variant-specific glow, hover, and ripple styles
  const getVariantStyles = (v: IconVariant) => {
    switch (v) {
      case 'github':
        return {
          text: 'text-slate-200 hover:text-white',
          border: 'border-slate-700/80 hover:border-blue-400/60',
          bg: 'bg-slate-900/80 hover:bg-slate-800/90',
          glow: 'hover:shadow-[0_0_20px_rgba(59,130,246,0.35)]',
          activeGlow: 'shadow-[0_0_25px_rgba(59,130,246,0.6)]',
          rippleBg: 'bg-blue-500/40',
        };
      case 'linkedin':
        return {
          text: 'text-[#38bdf8] hover:text-white',
          border: 'border-sky-800/60 hover:border-sky-400/70',
          bg: 'bg-sky-950/40 hover:bg-sky-900/60',
          glow: 'hover:shadow-[0_0_20px_rgba(14,165,233,0.4)]',
          activeGlow: 'shadow-[0_0_25px_rgba(14,165,233,0.6)]',
          rippleBg: 'bg-sky-500/45',
        };
      case 'email':
        return {
          text: 'text-purple-300 hover:text-white',
          border: 'border-purple-800/60 hover:border-purple-400/70',
          bg: 'bg-purple-950/40 hover:bg-purple-900/60',
          glow: 'hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]',
          activeGlow: 'shadow-[0_0_25px_rgba(139,92,246,0.65)]',
          rippleBg: 'bg-purple-500/45',
        };
      case 'phone':
        return {
          text: 'text-emerald-400 hover:text-white',
          border: 'border-emerald-800/60 hover:border-emerald-400/70',
          bg: 'bg-emerald-950/40 hover:bg-emerald-900/60',
          glow: 'hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]',
          activeGlow: 'shadow-[0_0_25px_rgba(16,185,129,0.65)]',
          rippleBg: 'bg-emerald-500/40',
        };
      case 'nav':
        return {
          text: 'text-slate-300 hover:text-white',
          border: 'border-slate-800 hover:border-blue-500/50',
          bg: 'bg-slate-900/60 hover:bg-blue-950/50',
          glow: 'hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]',
          activeGlow: 'shadow-[0_0_20px_rgba(139,92,246,0.5)]',
          rippleBg: 'bg-gradient-to-r from-blue-500/35 to-purple-500/35',
        };
      case 'action':
        return {
          text: 'text-cyan-300 hover:text-white',
          border: 'border-cyan-800/60 hover:border-cyan-400/70',
          bg: 'bg-cyan-950/40 hover:bg-cyan-900/60',
          glow: 'hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]',
          activeGlow: 'shadow-[0_0_25px_rgba(34,211,238,0.6)]',
          rippleBg: 'bg-cyan-400/40',
        };
      case 'purple':
        return {
          text: 'text-purple-300 hover:text-purple-100',
          border: 'border-purple-800/60 hover:border-purple-400',
          bg: 'bg-purple-950/40 hover:bg-purple-900/50',
          glow: 'hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]',
          activeGlow: 'shadow-[0_0_25px_rgba(139,92,246,0.6)]',
          rippleBg: 'bg-purple-500/40',
        };
      case 'cyan':
        return {
          text: 'text-cyan-300 hover:text-cyan-100',
          border: 'border-cyan-800/60 hover:border-cyan-400',
          bg: 'bg-cyan-950/40 hover:bg-cyan-900/50',
          glow: 'hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]',
          activeGlow: 'shadow-[0_0_25px_rgba(34,211,238,0.6)]',
          rippleBg: 'bg-cyan-400/40',
        };
      case 'blue':
      default:
        return {
          text: 'text-blue-400 hover:text-blue-200',
          border: 'border-blue-800/60 hover:border-blue-400',
          bg: 'bg-blue-950/40 hover:bg-blue-900/50',
          glow: 'hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]',
          activeGlow: 'shadow-[0_0_25px_rgba(59,130,246,0.6)]',
          rippleBg: 'bg-blue-500/40',
        };
    }
  };

  const getSizeStyles = (s: string) => {
    switch (s) {
      case 'sm':
        return 'w-9 h-9 p-2 text-sm';
      case 'lg':
        return 'w-12 h-12 p-3 text-lg';
      case 'xl':
        return 'w-14 h-14 p-3.5 text-xl';
      case 'md':
      default:
        return 'w-11 h-11 p-2.5 text-base';
    }
  };

  const vStyles = getVariantStyles(variant);
  const sizeStyles = getSizeStyles(size);

  const handleClick = (e: React.MouseEvent) => {
    if (disabled) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX ? e.clientX - rect.left : rect.width / 2;
    const y = e.clientY ? e.clientY - rect.top : rect.height / 2;

    const newRipple: Ripple = {
      id: Date.now() + Math.random(),
      x,
      y,
    };

    setRipples((prev) => [...prev.slice(-3), newRipple]);
    setIsClicked(true);

    setTimeout(() => {
      setIsClicked(false);
    }, 450);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 650);

    if (onClick) {
      onClick(e);
    }
  };

  const commonClass = `
    relative inline-flex items-center justify-center rounded-xl border
    backdrop-blur-md transition-all duration-300 overflow-hidden cursor-pointer
    focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-[#080B14]
    select-none ${sizeStyles} ${vStyles.text} ${vStyles.border} ${vStyles.bg} 
    ${isClicked ? vStyles.activeGlow : vStyles.glow} ${className}
  `;

  const content = (
    <>
      {/* Soft circular background flash upon click */}
      <AnimatePresence>
        {isClicked && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`absolute inset-0 rounded-xl pointer-events-none ${vStyles.rippleBg}`}
          />
        )}
      </AnimatePresence>

      {/* Ripple particles expanding from click point */}
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          initial={{
            width: 0,
            height: 0,
            opacity: 0.8,
            x: ripple.x,
            y: ripple.y,
          }}
          animate={{
            width: 130,
            height: 130,
            opacity: 0,
            x: ripple.x - 65,
            y: ripple.y - 65,
          }}
          transition={{
            duration: 0.6,
            ease: 'easeOut',
          }}
          className={`absolute rounded-full pointer-events-none ${vStyles.rippleBg}`}
        />
      ))}

      {/* Scaled Icon wrapper */}
      <motion.span
        animate={isClicked ? { scale: [1, 1.15, 1] } : { scale: 1 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="relative z-10 flex items-center justify-center pointer-events-none"
      >
        {icon}
      </motion.span>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
        onClick={handleClick}
        aria-label={ariaLabel}
        title={title || ariaLabel}
        className={commonClass}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.94 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      aria-label={ariaLabel}
      title={title || ariaLabel}
      disabled={disabled}
      className={commonClass}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.94 }}
    >
      {content}
    </motion.button>
  );
};
