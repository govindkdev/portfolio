import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  ArrowRight
} from 'lucide-react';
import { personalData } from '../data/personal';
import { InteractiveIcon } from './InteractiveIcon';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const recipient = personalData.email;
    const subject = encodeURIComponent(
      formData.subject || `Portfolio Inquiry from ${formData.name || 'Visitor'}`
    );
    const body = encodeURIComponent(
      `Hello Govind,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n-- Sent via Govind Kushwaha Portfolio`
    );

    // Launch mailto link with encoded payload
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center md:text-left mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/50 border border-blue-500/30 text-blue-400 text-xs font-mono mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            07. GET IN TOUCH
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let&apos;s Connect &amp; Collaborate
          </h2>
          <p className="mt-3 text-base text-[#94A3B8] max-w-2xl">
            Open to frontend internships, fresher software engineering positions, and collaborative tech projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Contact Channels & Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Click-to-Email Card */}
            <div className="p-6 rounded-2xl bg-[#111827]/80 border border-[#263247] hover:border-purple-500/50 transition-all duration-300 shadow-lg group">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <InteractiveIcon
                    variant="email"
                    size="md"
                    href={`mailto:${personalData.email}`}
                    ariaLabel="Email Govind Kushwaha"
                    icon={<Mail className="w-5 h-5 text-purple-400" />}
                  />
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-purple-400 font-semibold block">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${personalData.email}`}
                      className="text-base font-semibold text-white group-hover:text-purple-300 transition-colors break-all"
                    >
                      {personalData.email}
                    </a>
                    <p className="text-xs text-[#94A3B8] mt-1">
                      Typically replies within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Click-to-Call Card */}
            <div className="p-6 rounded-2xl bg-[#111827]/80 border border-[#263247] hover:border-blue-500/50 transition-all duration-300 shadow-lg group">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <InteractiveIcon
                    variant="phone"
                    size="md"
                    href={`tel:${personalData.phone.replace(/\s+/g, '')}`}
                    ariaLabel="Call Govind Kushwaha"
                    icon={<Phone className="w-5 h-5 text-emerald-400" />}
                  />
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold block">
                      Phone &amp; WhatsApp
                    </span>
                    <a
                      href={`tel:${personalData.phone.replace(/\s+/g, '')}`}
                      className="text-base font-semibold text-white group-hover:text-blue-300 transition-colors"
                    >
                      {personalData.phone}
                    </a>
                    <p className="text-xs text-[#94A3B8] mt-1">
                      Available for phone &amp; interview inquiries
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-2xl bg-[#111827]/80 border border-[#263247] hover:border-cyan-500/50 transition-all duration-300 shadow-lg group">
              <div className="flex items-start gap-4">
                <InteractiveIcon
                  variant="cyan"
                  size="md"
                  ariaLabel="Location India"
                  icon={<MapPin className="w-5 h-5 text-cyan-400" />}
                />
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-semibold block">
                    Location &amp; Mobility
                  </span>
                  <div className="text-base font-semibold text-white">
                    {personalData.location}
                  </div>
                  <p className="text-xs text-[#94A3B8] mt-1">
                    Open to remote, hybrid, or on-site relocation opportunities
                  </p>
                </div>
              </div>
            </div>

            {/* Social Connect Bar */}
            <div className="p-6 rounded-2xl bg-[#172033]/50 border border-[#263247] flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-slate-300 font-semibold block">
                  Find Me Online:
                </span>
                <span className="text-xs text-[#94A3B8]">
                  Verified Developer Profiles
                </span>
              </div>
              <div className="flex items-center gap-2">
                <InteractiveIcon
                  variant="github"
                  size="md"
                  href={personalData.github}
                  target="_blank"
                  ariaLabel="GitHub"
                  icon={<GithubIcon className="w-5 h-5" />}
                />
                <InteractiveIcon
                  variant="linkedin"
                  size="md"
                  href={personalData.linkedin}
                  target="_blank"
                  ariaLabel="LinkedIn"
                  icon={<LinkedinIcon className="w-5 h-5" />}
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-10 rounded-3xl bg-[#111827]/90 border border-[#263247] shadow-2xl backdrop-blur-xl relative">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
                <MessageSquare className="w-4 h-4" />
                <span>Send a Direct Message</span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-2">
                Drop a Note
              </h3>
              <p className="text-xs text-[#94A3B8] mb-6">
                Fill in the details below to open your configured email client with a pre-formatted message directly addressed to <span className="text-slate-200 font-medium">{personalData.email}</span>.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label 
                      htmlFor="contact-name" 
                      className="block text-xs font-mono text-slate-300 mb-1.5"
                    >
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#080B14]/80 border border-[#263247] text-white text-sm placeholder:text-[#64748B] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="contact-email" 
                      className="block text-xs font-mono text-slate-300 mb-1.5"
                    >
                      Your Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#080B14]/80 border border-[#263247] text-white text-sm placeholder:text-[#64748B] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label 
                    htmlFor="contact-subject" 
                    className="block text-xs font-mono text-slate-300 mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="e.g. Internship Opportunity / Project Collaboration"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#080B14]/80 border border-[#263247] text-white text-sm placeholder:text-[#64748B] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="contact-message" 
                    className="block text-xs font-mono text-slate-300 mb-1.5"
                  >
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#080B14]/80 border border-[#263247] text-white text-sm placeholder:text-[#64748B] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-[0_0_20px_rgba(59,130,246,0.35)] transition-all cursor-pointer transform hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email Client</span>
                  <ArrowRight className="w-4 h-4 opacity-70" />
                </button>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-500/50 flex items-center gap-2.5 text-xs text-emerald-300"
                  >
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Your email composer has been launched with your message prepared. Thank you!</span>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
