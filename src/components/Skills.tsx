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
  FileJson, 
  Smartphone, 
  Boxes, 
  Binary,
  Layers
} from 'lucide-react';
import { skillCategories } from '../data/skills';
import { GithubIcon } from './BrandIcons';

export const Skills: React.FC = () => {
  // Map string icon names to Lucide icon components
  const renderIcon = (name: string, accent: 'blue' | 'purple' | 'cyan') => {
    const iconClass = `w-5 h-5 ${
      accent === 'blue' 
        ? 'text-blue-400' 
        : accent === 'purple' 
        ? 'text-purple-400' 
        : 'text-cyan-400'
    }`;

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
      case 'FileJson': return <FileJson className={iconClass} />;
      case 'Smartphone': return <Smartphone className={iconClass} />;
      case 'Boxes': return <Boxes className={iconClass} />;
      case 'Binary': return <Binary className={iconClass} />;
      default: return <Layers className={iconClass} />;
    }
  };

  const getAccentStyles = (accent: 'blue' | 'purple' | 'cyan') => {
    switch (accent) {
      case 'purple':
        return {
          pill: 'bg-purple-950/40 border-purple-500/30 text-purple-400',
          dot: 'bg-purple-400',
          cardHover: 'hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]',
          iconBg: 'bg-purple-950/50 border-purple-800/40',
        };
      case 'cyan':
        return {
          pill: 'bg-cyan-950/40 border-cyan-500/30 text-cyan-400',
          dot: 'bg-cyan-400',
          cardHover: 'hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]',
          iconBg: 'bg-cyan-950/50 border-cyan-800/40',
        };
      case 'blue':
      default:
        return {
          pill: 'bg-blue-950/40 border-blue-500/30 text-blue-400',
          dot: 'bg-blue-400',
          cardHover: 'hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]',
          iconBg: 'bg-blue-950/50 border-blue-800/40',
        };
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center md:text-left mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/50 border border-purple-500/30 text-purple-400 text-xs font-mono mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            02. TECHNICAL SKILLS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Toolbox &amp; Technical Capabilities
          </h2>
          <p className="mt-3 text-base text-[#94A3B8] max-w-2xl">
            A verified breakdown of frontend technologies, backend frameworks, databases, and engineering fundamentals I work with.
          </p>
        </div>

        {/* Categories Stack */}
        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => {
            const styles = getAccentStyles(category.accent);
            return (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="rounded-2xl p-6 sm:p-8 bg-[#111827]/60 border border-[#263247] backdrop-blur-md"
              >
                {/* Category Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-[#263247]/60">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <span className={`w-2 h-2 rounded-full ${styles.dot}`} />
                      <h3 className="text-xl font-heading font-bold text-white">
                        {category.title}
                      </h3>
                    </div>
                    <p className="text-xs text-[#94A3B8] mt-1">
                      {category.description}
                    </p>
                  </div>
                  <span className={`text-[11px] font-mono px-2.5 py-1 rounded-md border w-fit ${styles.pill}`}>
                    {category.skills.length} Technologies
                  </span>
                </div>

                {/* Skill Badges / Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  {category.skills.map((skill, sIndex) => (
                    <motion.div
                      key={sIndex}
                      whileHover={{ y: -3, scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                      className={`flex items-start gap-3.5 p-3.5 rounded-xl bg-[#172033]/50 border border-[#263247] ${styles.cardHover} transition-all duration-300 group cursor-default`}
                    >
                      <div className={`p-2.5 rounded-lg border shrink-0 ${styles.iconBg} transition-transform group-hover:scale-110`}>
                        {renderIcon(skill.icon, category.accent)}
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                          {skill.name}
                        </div>
                        {skill.description && (
                          <div className="text-[11px] text-[#94A3B8] mt-0.5 line-clamp-2 leading-relaxed">
                            {skill.description}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
