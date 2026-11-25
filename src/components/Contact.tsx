import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  ArrowRight,
  Copy, 
  Check, 
  AlertCircle,
  ExternalLink
} from 'lucide-react';
import { personalData } from '../data/personal';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [validationError, setValidationError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    // Client-side validation
    if (!formData.name.trim()) {
      setValidationError('Please enter your full name.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setValidationError('Please provide a valid email address.');
      return;
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setValidationError('Please enter a message with at least 10 characters.');
      return;
    }

    const recipient = personalData.email;
    const subject = encodeURIComponent(
      formData.subject.trim() || `Portfolio Inquiry from ${formData.name.trim()}`
    );
    const body = encodeURIComponent(
      `Hello Govind,\n\nName: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}\n\n-- Sent via Govind Kushwaha Portfolio`
    );

    // Launch mailto link with encoded payload
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#080B12]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center md:text-left mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1421] border border-[rgba(148,163,184,0.14)] text-[#6485FF] text-xs font-mono mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6485FF] animate-pulse" />
            07. LET&apos;S CONNECT
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#F5F7FF] tracking-tight">
            Let&apos;s Connect.
          </h2>
          <p className="mt-2 text-base text-[#9AA8BC] max-w-2xl">
            I&apos;m open to opportunities, collaborations, and professional conversations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT: Contact Channels */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            {/* Direct Email Card */}
            <div className="p-6 rounded-2xl bg-[#111B2B] border border-[rgba(148,163,184,0.14)] hover:border-[#6485FF]/50 transition-all duration-300 shadow-xl group">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-3 rounded-xl bg-[#0D1421] border border-[#6485FF]/30 text-[#6485FF]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#6485FF] font-semibold block mb-0.5">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${personalData.email}`}
                      className="text-sm sm:text-base font-semibold text-[#F5F7FF] group-hover:text-[#6485FF] transition-colors break-all"
                    >
                      {personalData.email}
                    </a>
                    <p className="text-xs text-[#9AA8BC] mt-1">
                      Direct response within 24–48 hours
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-[#0D1421] border border-[rgba(148,163,184,0.14)] hover:border-[#6485FF]/50 text-[#9AA8BC] hover:text-[#F5F7FF] transition-all cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="p-6 rounded-2xl bg-[#111B2B] border border-[rgba(148,163,184,0.14)] hover:border-[#6485FF]/50 transition-all duration-300 shadow-xl group">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-3 rounded-xl bg-[#0D1421] border border-[#6485FF]/30 text-[#6485FF]">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#6485FF] font-semibold block mb-0.5">
                      LinkedIn
                    </span>
                    <a
                      href={personalData.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-semibold text-[#F5F7FF] group-hover:text-[#6485FF] transition-colors"
                    >
                      linkedin.com/in/govindkdev
                    </a>
                    <p className="text-xs text-[#9AA8BC] mt-1">
                      Professional profile &amp; network
                    </p>
                  </div>
                </div>
                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#0D1421] border border-[rgba(148,163,184,0.14)] hover:border-[#6485FF]/50 text-[#9AA8BC] hover:text-[#F5F7FF] transition-all"
                  aria-label="Visit LinkedIn Profile"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="p-6 rounded-2xl bg-[#111B2B] border border-[rgba(148,163,184,0.14)] hover:border-[#9475F5]/50 transition-all duration-300 shadow-xl group">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-3 rounded-xl bg-[#0D1421] border border-[#9475F5]/30 text-[#9475F5]">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#9475F5] font-semibold block mb-0.5">
                      GitHub
                    </span>
                    <a
                      href={personalData.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-semibold text-[#F5F7FF] group-hover:text-[#9475F5] transition-colors"
                    >
                      github.com/govindkdev
                    </a>
                    <p className="text-xs text-[#9AA8BC] mt-1">
                      Open source repositories &amp; project code
                    </p>
                  </div>
                </div>
                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#0D1421] border border-[rgba(148,163,184,0.14)] hover:border-[#9475F5]/50 text-[#9AA8BC] hover:text-[#F5F7FF] transition-all"
                  aria-label="Visit GitHub Profile"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-2xl bg-[#111B2B] border border-[rgba(148,163,184,0.14)] hover:border-[#36C5E8]/50 transition-all duration-300 shadow-xl group">
              <div className="flex items-start gap-3.5">
                <div className="p-3 rounded-xl bg-[#0D1421] border border-[#36C5E8]/30 text-[#36C5E8]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#36C5E8] font-semibold block mb-0.5">
                    Location
                  </span>
                  <div className="text-sm sm:text-base font-semibold text-[#F5F7FF]">
                    India (Lucknow / Noida)
                  </div>
                  <p className="text-xs text-[#9AA8BC] mt-1">
                    Available for Remote roles and relocation across India
                  </p>
                </div>
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
            <div className="p-6 sm:p-10 rounded-3xl bg-[#111B2B] border border-[rgba(148,163,184,0.14)] shadow-2xl relative">
              <div className="flex items-center gap-2 text-xs font-mono text-[#36C5E8] mb-2">
                <MessageSquare className="w-4 h-4" />
                <span>Send a Direct Message</span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-[#F5F7FF] mb-2">
                Let&apos;s Start a Conversation
              </h3>
              <p className="text-xs text-[#9AA8BC] mb-6 leading-relaxed">
                Submitting this form prepares your message and opens your default mail client directly addressed to <span className="text-[#F5F7FF] font-medium">{personalData.email}</span>.
              </p>

              {validationError && (
                <div className="p-3 rounded-xl bg-rose-950/60 border border-rose-500/50 flex items-center gap-2 text-xs text-rose-300 mb-5">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{validationError}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label 
                      htmlFor="contact-name" 
                      className="block text-xs font-mono text-[#F5F7FF]/90 mb-1.5"
                    >
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => {
                        setValidationError(null);
                        setFormData({ ...formData, name: e.target.value });
                      }}
                      className="w-full px-4 py-3 rounded-xl bg-[#0D1421] border border-[rgba(148,163,184,0.14)] text-[#F5F7FF] text-sm placeholder:text-[#9AA8BC]/50 focus:outline-none focus:border-[#6485FF] focus:ring-1 focus:ring-[#6485FF] transition-colors"
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="contact-email" 
                      className="block text-xs font-mono text-[#F5F7FF]/90 mb-1.5"
                    >
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => {
                        setValidationError(null);
                        setFormData({ ...formData, email: e.target.value });
                      }}
                      className="w-full px-4 py-3 rounded-xl bg-[#0D1421] border border-[rgba(148,163,184,0.14)] text-[#F5F7FF] text-sm placeholder:text-[#9AA8BC]/50 focus:outline-none focus:border-[#6485FF] focus:ring-1 focus:ring-[#6485FF] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label 
                    htmlFor="contact-subject" 
                    className="block text-xs font-mono text-[#F5F7FF]/90 mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="Python Full Stack Opportunity / Collaboration"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0D1421] border border-[rgba(148,163,184,0.14)] text-[#F5F7FF] text-sm placeholder:text-[#9AA8BC]/50 focus:outline-none focus:border-[#6485FF] focus:ring-1 focus:ring-[#6485FF] transition-colors"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="contact-message" 
                    className="block text-xs font-mono text-[#F5F7FF]/90 mb-1.5"
                  >
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Hello Govind, I would like to discuss..."
                    value={formData.message}
                    onChange={(e) => {
                      setValidationError(null);
                      setFormData({ ...formData, message: e.target.value });
                    }}
                    className="w-full px-4 py-3 rounded-xl bg-[#0D1421] border border-[rgba(148,163,184,0.14)] text-[#F5F7FF] text-sm placeholder:text-[#9AA8BC]/50 focus:outline-none focus:border-[#6485FF] focus:ring-1 focus:ring-[#6485FF] transition-colors resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm text-white bg-[#6485FF] hover:bg-[#5274ee] shadow-[0_0_20px_rgba(100,133,255,0.3)] transition-all cursor-pointer transform hover:-translate-y-0.5"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                    <ArrowRight className="w-4 h-4 opacity-70" />
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-xs text-[#9AA8BC] hover:text-[#F5F7FF] bg-[#0D1421] border border-[rgba(148,163,184,0.14)] hover:border-[#6485FF]/40 transition-all cursor-pointer"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span>Email Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy Email Address</span>
                      </>
                    )}
                  </button>
                </div>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/50 flex items-start gap-3 text-xs text-emerald-300 mt-4"
                  >
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                    <div>
                      <strong>Email Client Launched:</strong> If your browser didn&apos;t automatically launch your email client, feel free to directly send an email to <span className="underline font-mono">{personalData.email}</span>.
                    </div>
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
