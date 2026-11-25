import React from 'react';
import { motion } from 'framer-motion';
import { 
  Atom, 
  FileCode2, 
  Code2, 
  Palette, 
  Layout, 
  Sparkles, 
  Terminal, 
  Server, 
  Cpu, 
  Database, 
  Table, 
  GitBranch, 
  Code, 
  Zap, 
  Network, 
  Boxes, 
  Layers, 
  Shield, 
  FileSpreadsheet, 
  Send, 
  Package, 
  CheckCircle2,
  BookOpen
} from 'lucide-react';
import { skillCategories } from '../data/skills';
import { GithubIcon } from './BrandIcons';

export const Skills: React.FC = () => {
  // Map string icon names to Lucide icon components
  const renderIcon = (name: string, accent: 'blue' | 'purple' | 'cyan') => {
    const iconColor = 
      accent === 'blue' 
        ? 'text-[#6485FF]' 
        : accent === 'purple' 
        ? 'text-[#9475F5]' 
        : 'text-[#36C5E8]';
    const iconClass = `w-4 h-4 sm:w-5 sm:h-5 ${iconColor}`;

    switch (name) {
      case 'Atom': return <Atom className={iconClass} />;
      case 'FileCode2': return <FileCode2 className={iconClass} />;
      case 'Code2': return <Code2 className={iconClass} />;
      case 'Palette': return <Palette className={iconClass} />;
      case 'Layout': return <Layout className={iconClass} />;
      case 'Sparkles': return <Sparkles className={iconClass} />;
      case 'Terminal': return <Terminal className={iconClass} />;
      case 'Server': return <Server className={iconClass} />;
      case 'Cpu': return <Cpu className={iconClass} />;
      case 'Database': return <Database className={iconClass} />;
      case 'Table': return <Table className={iconClass} />;
      case 'GitBranch': return <GitBranch className={iconClass} />;
      case 'Github': return <GithubIcon className={iconClass} />;
      case 'Code': return <Code className={iconClass} />;
      case 'Zap': return <Zap className={iconClass} />;
      case 'Network': return <Network className={iconClass} />;
      case 'Boxes': return <Boxes className={iconClass} />;
      case 'Shield': return <Shield className={iconClass} />;
      case 'FileSpreadsheet': return <FileSpreadsheet className={iconClass} />;
      case 'Send': return <Send className={iconClass} />;
      case 'Package': return <Package className={iconClass} />;
      default: return <Layers className={iconClass} />;
    }
  };

  const getAccentStyles = (accent: 'blue' | 'purple' | 'cyan') => {
    switch (accent) {
      case 'purple':
        return {
          pill: 'bg-[#9475F5]/10 border-[#9475F5]/30 text-[#9475F5]',
          dot: 'bg-[#9475F5]',
          borderHover: 'hover:border-[#9475F5]/50 hover:shadow-[0_0_20px_rgba(148,117,245,0.12)]',
          iconBg: 'bg-[#9475F5]/10 border-[#9475F5]/25',
        };
      case 'cyan':
        return {
          pill: 'bg-[#36C5E8]/10 border-[#36C5E8]/30 text-[#36C5E8]',
          dot: 'bg-[#36C5E8]',
          borderHover: 'hover:border-[#36C5E8]/50 hover:shadow-[0_0_20px_rgba(54,197,232,0.12)]',
          iconBg: 'bg-[#36C5E8]/10 border-[#36C5E8]/25',
        };
      case 'blue':
      default:
        return {
          pill: 'bg-[#6485FF]/10 border-[#6485FF]/30 text-[#6485FF]',
          dot: 'bg-[#6485FF]',
          borderHover: 'hover:border-[#6485FF]/50 hover:shadow-[0_0_20px_rgba(100,133,255,0.12)]',
          iconBg: 'bg-[#6485FF]/10 border-[#6485FF]/25',
        };
    }
  };

  const getStatusBadge = (status?: 'Comfortable' | 'Familiar' | 'Currently Learning') => {
    switch (status) {
      case 'Comfortable':
        return (
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shrink-0">
            Comfortable
          </span>
        );
      case 'Currently Learning':
        return (
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#9475F5]/15 border border-[#9475F5]/40 text-[#9475F5] shrink-0 font-medium">
            Currently Learning
          </span>
        );
      case 'Familiar':
      default:
        return (
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#36C5E8]/10 border border-[#36C5E8]/30 text-[#36C5E8] shrink-0">
            Familiar
          </span>
        );
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#080B12]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1421] border border-[rgba(148,163,184,0.14)] text-[#9475F5] text-xs font-mono mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9475F5] animate-pulse" />
            03. TECHNICAL SKILLS
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#F5F7FF] tracking-tight">
            Technical Skills
          </h2>
          <p className="mt-2 text-base text-[#9AA8BC] max-w-2xl">
            Technologies &amp; Tools I Work With.
          </p>

          {/* Honest Status Legend */}
          <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-[#9AA8BC]">
            <span className="font-mono text-xs uppercase tracking-wider text-[#9AA8BC]/70">Proficiency Standards:</span>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-[#F5F7FF]">Comfortable</span>
              <span className="text-[#9AA8BC]/60">(Daily use, hands-on projects)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#36C5E8]" />
              <span className="text-[#F5F7FF]">Familiar</span>
              <span className="text-[#9AA8BC]/60">(Understood &amp; applied in coursework)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#9475F5]" />
              <span className="text-[#F5F7FF]">Currently Learning</span>
              <span className="text-[#9AA8BC]/60">(Active DUCAT training)</span>
            </div>
          </div>
        </div>

        {/* 5 Organized Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category) => {
            const styles = getAccentStyles(category.accent);
            return (
              <motion.div
                key={category.categoryNumber}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl p-6 sm:p-7 bg-[#111B2B] border border-[rgba(148,163,184,0.14)] shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5 pb-4 border-b border-[rgba(148,163,184,0.14)]">
                    <div>
                      <div className="flex items-center gap-2.5">
                        <span className={`w-2 h-2 rounded-full ${styles.dot}`} />
                        <span className="text-xs font-mono text-[#9AA8BC]">Category {category.categoryNumber}</span>
                        <span className="text-xs text-[#9AA8BC]/50">•</span>
                        <h3 className="text-lg sm:text-xl font-heading font-bold text-[#F5F7FF]">
                          {category.title}
                        </h3>
                      </div>
                      <p className="text-xs text-[#9AA8BC] mt-1 max-w-md">
                        {category.description}
                      </p>
                    </div>
                    <span className={`text-[11px] font-mono px-2.5 py-1 rounded-md border w-fit shrink-0 ${styles.pill}`}>
                      {category.skills.length} Skills
                    </span>
                  </div>

                  {/* Skills Items Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {category.skills.map((skill, sIndex) => (
                      <motion.div
                        key={sIndex}
                        whileHover={{ y: -2 }}
                        transition={{ duration: 0.2 }}
                        className={`flex items-start gap-3 p-3 rounded-xl bg-[#0D1421]/80 border border-[rgba(148,163,184,0.14)] ${styles.borderHover} transition-all duration-300 group cursor-default`}
                      >
                        <div className={`p-2 rounded-lg border shrink-0 ${styles.iconBg} transition-transform group-hover:scale-105 mt-0.5`}>
                          {renderIcon(skill.icon, category.accent)}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-1.5 mb-1">
                            <span className="text-xs sm:text-sm font-semibold text-[#F5F7FF] group-hover:text-[#6485FF] transition-colors truncate">
                              {skill.name}
                            </span>
                            {getStatusBadge(skill.status)}
                          </div>
                          {skill.description && (
                            <p className="text-[11px] text-[#9AA8BC] leading-relaxed">
                              {skill.description}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Ethical Recruiter Guarantee Note */}
        <div className="mt-10 p-4 rounded-xl bg-[#0D1421] border border-[rgba(148,163,184,0.14)] flex items-center justify-between flex-wrap gap-3 text-xs text-[#9AA8BC]">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#36C5E8]" />
            <span>
              <strong className="text-[#F5F7FF]">Integrity Commitment:</strong> All skills reflect active computer science coursework at AKTU and hands-on training at DUCAT. No inflated percentages or simulated expertise.
            </span>
          </div>
          <div className="flex items-center gap-1.5 font-mono text-[#36C5E8] text-[11px]">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Honest Evaluation</span>
          </div>
        </div>

      </div>
    </section>
  );
};
