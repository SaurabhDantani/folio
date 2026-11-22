'use client';

import { useState, useEffect, useCallback, useId } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Send,
  CheckCircle2,
  Sparkles,
  Mail,
  User,
  Phone,
  MessageSquare,
  ArrowRight,
  Clock,
  Briefcase,
  AlertCircle,
} from 'lucide-react';
import { FaWhatsapp, FaLinkedinIn } from 'react-icons/fa6';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const SERVICE_OPTIONS = [
  'Full Stack Web',
  'AI & LLM Integration',
  'Web Scraping & Automation',
  'Custom CRM / SaaS',
  'Other Inquiry',
];

export default function ConnectPopup() {
  const pathname = usePathname();
  const titleId = useId();
  const descId = useId();

  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolledEnough, setHasScrolledEnough] = useState(false);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedService, setSelectedService] = useState('Full Stack Web');

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: 'Full Stack Web',
    message: '',
  });

  // Track scroll position to auto-trigger the popup on every page
  useEffect(() => {
    // Avoid auto-popping on dedicated /contact page where full form already lives
    if (pathname === '/contact') return;

    // Check if dismissed or already submitted in this session
    try {
      const isDismissed = sessionStorage.getItem('folio_connect_dismissed');
      const isSubmitted = sessionStorage.getItem('folio_connect_submitted');
      if (isDismissed || isSubmitted) {
        setHasScrolledEnough(true);
        return;
      }
    } catch {
      // Ignore storage errors in restricted iframe/browser environments
    }

    let timeoutId: NodeJS.Timeout | null = null;
    let hasTriggered = false;

    const handleScroll = () => {
      if (hasTriggered) return;

      const scrollY = window.scrollY || window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;

      // Trigger after scrolling 400px OR 30% of the page
      if (scrollY > 400 || scrollPercent > 30) {
        hasTriggered = true;
        setHasScrolledEnough(true);

        // Gentle 1s delay so popup appears naturally after scrolling
        timeoutId = setTimeout(() => {
          setIsOpen(true);
        }, 1000);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [pathname]);

  // Handle ESC key press to dismiss modal
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleClose();
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      // Prevent background scroll while popup is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  const handleClose = () => {
    setIsOpen(false);
    try {
      sessionStorage.setItem('folio_connect_dismissed', 'true');
    } catch {
      // Ignore storage errors
    }
  };

  const handleManualOpen = () => {
    setIsOpen(true);
    if (status === 'success') {
      // If reopening after success, keep it clean or allow a new message
      setStatus('idle');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectService = (service: string) => {
    setSelectedService(service);
    setFormData((prev) => ({
      ...prev,
      service,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          service: selectedService,
          source: 'Connect Popup',
        }),
      });

      const data = await response.json();

      if (!response.ok && !data.success) {
        throw new Error(data.error || 'Failed to submit inquiry');
      }

      setStatus('success');
      try {
        sessionStorage.setItem('folio_connect_submitted', 'true');
      } catch {
        // Ignore storage errors
      }
    } catch (err: unknown) {
      console.error('Error submitting popup form:', err);
      setStatus('error');
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again or reach out on WhatsApp/Email.'
      );
    }
  };

  return (
    <>
      {/* Persistent / Minimized Floating Trigger Button at bottom-left */}
      {/* Positioned on bottom-left so it doesn't conflict with AIChatbot (bottom-right) or ScrollToTop */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="fixed bottom-6 left-6 z-40"
          >
            <button
              onClick={handleManualOpen}
              className="group relative flex items-center gap-3 px-4 py-2.5 rounded-full bg-slate-900/95 dark:bg-zinc-900/95 text-white border border-slate-700/60 dark:border-white/15 shadow-xl hover:shadow-blue-500/25 hover:border-blue-500/50 backdrop-blur-md transition-all duration-300"
              aria-label="Open Quick Connect Form"
            >
              {/* Pulsing indicator */}
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>

              {/* Text / Icon */}
              <span className="text-xs font-semibold tracking-wide flex items-center gap-1.5">
                <span>Let&apos;s Connect</span>
                <Sparkles className="w-3.5 h-3.5 text-blue-400 group-hover:rotate-12 transition-transform duration-300" />
              </span>

              {/* Sub-pill notification badge if scrolled */}
              {hasScrolledEnough && status !== 'success' && (
                <span className="hidden sm:inline-flex text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  Quick Inquiry
                </span>
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Popup Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descId}
          >
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={handleClose}
              className="fixed inset-0 bg-slate-950/70 dark:bg-black/80 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ type: 'spring', stiffness: 380, damping: 28 }}
              className="relative w-full max-w-lg my-auto rounded-3xl overflow-hidden bg-white/95 dark:bg-[#0c0d14]/95 text-slate-900 dark:text-zinc-100 border border-slate-200/80 dark:border-white/10 shadow-2xl shadow-blue-500/10 dark:shadow-[0_0_60px_-15px_rgba(56,189,248,0.25)] z-10"
            >
              {/* Top Accent Gradient Bar */}
              <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-600" />

              {/* Ambient Radial Glows */}
              <div className="absolute -top-24 -right-24 w-60 h-60 bg-blue-500/10 dark:bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-purple-500/10 dark:bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />

              {/* Modal Content */}
              <div className="p-5 sm:p-7 relative z-10">
                {/* Header Section */}
                <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200/70 dark:border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="relative w-11 h-11 rounded-2xl overflow-hidden shrink-0 border border-slate-300 dark:border-white/15 shadow-sm">
                      <Image
                        src="/profileImg.jpg"
                        alt="Saurabh Dantani"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900 dark:text-white text-base">
                          Saurabh Dantani
                        </span>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Online
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-zinc-400 flex items-center gap-1.5 mt-0.5">
                        <Clock className="w-3 h-3 text-slate-400 dark:text-zinc-500" />
                        <span>Typically replies within 2–4 hours</span>
                      </p>
                    </div>
                  </div>

                  {/* Close button */}
                  <button
                    onClick={handleClose}
                    className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 dark:text-zinc-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                    aria-label="Close dialog"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {status === 'success' ? (
                  /* Success View */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-8 text-center space-y-4"
                  >
                    <div className="mx-auto w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-500 dark:text-emerald-400 shadow-lg shadow-emerald-500/10">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        Inquiry Received! 🎉
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-zinc-400 max-w-sm mx-auto">
                        Thank you for reaching out,{' '}
                        <strong className="text-slate-900 dark:text-white">
                          {formData.name || 'friend'}
                        </strong>
                        ! I&apos;ll review your requirements and reply shortly.
                      </p>
                    </div>

                    {/* Quick WhatsApp / Direct Actions */}
                    <div className="pt-3 flex flex-col sm:flex-row gap-2.5 justify-center">
                      <a
                        href="https://wa.me/917567358252?text=Hi%20Saurabh%2C%20I%20just%20submitted%20the%20connect%20form%20on%20your%20portfolio!"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs shadow-md shadow-emerald-600/20 transition-colors"
                      >
                        <FaWhatsapp className="w-4 h-4" />
                        <span>Chat on WhatsApp</span>
                      </a>
                      <button
                        onClick={handleClose}
                        className="px-5 py-2.5 rounded-xl border border-slate-300 dark:border-white/15 text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-white/5 font-medium text-xs transition-colors"
                      >
                        Done / Close
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  /* Form View */
                  <div className="pt-4 space-y-4">
                    <div>
                      <h3
                        id={titleId}
                        className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-2"
                      >
                        <span>Let&apos;s build your next project</span>
                        <span className="text-blue-500">.</span>
                      </h3>
                      <p
                        id={descId}
                        className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 mt-1"
                      >
                        Got an MVP idea, full-stack app, automation, or custom CRM to build? Drop a quick note below.
                      </p>
                    </div>

                    {/* Service Selection Chips */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-semibold text-slate-600 dark:text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                        <Briefcase className="w-3 h-3 text-blue-500" />
                        <span>What are you looking for?</span>
                      </label>
                      <div className="flex flex-wrap gap-1.5">
                        {SERVICE_OPTIONS.map((srv) => (
                          <button
                            type="button"
                            key={srv}
                            onClick={() => handleSelectService(srv)}
                            className={`text-xs px-2.5 py-1.5 rounded-lg border font-medium transition-all ${
                              selectedService === srv
                                ? 'bg-blue-600 text-white border-blue-600 shadow-xs shadow-blue-500/30'
                                : 'bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-zinc-300 border-slate-200 dark:border-white/10 hover:border-blue-400/50'
                            }`}
                          >
                            {srv}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="space-y-3 pt-1">
                      {/* Name & Email inputs in 2 columns */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <label
                            htmlFor="popup-name"
                            className="text-[11px] font-semibold text-slate-600 dark:text-zinc-400 uppercase tracking-wider block"
                          >
                            Name <span className="text-blue-500">*</span>
                          </label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-zinc-500 pointer-events-none" />
                            <input
                              id="popup-name"
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              placeholder="Alex Carter"
                              className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-white/[0.04] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all"
                            />
                          </div>
                        </div>

                        <div className="space-y-1">
                          <label
                            htmlFor="popup-email"
                            className="text-[11px] font-semibold text-slate-600 dark:text-zinc-400 uppercase tracking-wider block"
                          >
                            Email <span className="text-blue-500">*</span>
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-zinc-500 pointer-events-none" />
                            <input
                              id="popup-email"
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              placeholder="alex@company.com"
                              className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-white/[0.04] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Phone / WhatsApp (Optional) */}
                      <div className="space-y-1">
                        <label
                          htmlFor="popup-phone"
                          className="text-[11px] font-semibold text-slate-600 dark:text-zinc-400 uppercase tracking-wider flex items-center justify-between"
                        >
                          <span>Phone / WhatsApp</span>
                          <span className="text-[10px] text-slate-400 dark:text-zinc-500 font-normal">Optional</span>
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-zinc-500 pointer-events-none" />
                          <input
                            id="popup-phone"
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 (555) 000-0000 or WhatsApp"
                            className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-white/[0.04] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all"
                          />
                        </div>
                      </div>

                      {/* Message Textarea */}
                      <div className="space-y-1">
                        <label
                          htmlFor="popup-message"
                          className="text-[11px] font-semibold text-slate-600 dark:text-zinc-400 uppercase tracking-wider block"
                        >
                          Project Brief / Requirements <span className="text-blue-500">*</span>
                        </label>
                        <div className="relative">
                          <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-slate-400 dark:text-zinc-500 pointer-events-none" />
                          <textarea
                            id="popup-message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={3}
                            placeholder="Briefly describe what you'd like to build, timeline, or any specific tech stack..."
                            className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-white/[0.04] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all resize-none"
                          />
                        </div>
                      </div>

                      {/* Error Alert */}
                      {status === 'error' && (
                        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs">
                          <AlertCircle className="w-4 h-4 shrink-0" />
                          <span>{errorMessage || 'Failed to submit. Please try again or reach out on WhatsApp.'}</span>
                        </div>
                      )}

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="group w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 hover:from-blue-500 hover:to-sky-400 text-white font-semibold text-xs sm:text-sm shadow-md shadow-blue-500/25 disabled:opacity-60 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        {status === 'loading' ? (
                          <>
                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Sending Your Inquiry...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </>
                        )}
                      </button>
                    </form>

                    {/* Direct Contact Alternatives & Maybe Later */}
                    <div className="pt-2 border-t border-slate-200/60 dark:border-white/10 flex items-center justify-between text-xs text-slate-500 dark:text-zinc-400">
                      <div className="flex items-center gap-3">
                        <span className="text-[11px] hidden sm:inline">Direct:</span>
                        <a
                          href="https://wa.me/917567358252"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 hover:text-emerald-500 transition-colors"
                          title="WhatsApp"
                        >
                          <FaWhatsapp className="w-3.5 h-3.5 text-emerald-500" />
                          <span className="text-[11px]">WhatsApp</span>
                        </a>
                        <a
                          href="mailto:saurabhdantani09@gmail.com"
                          className="flex items-center gap-1 hover:text-blue-500 transition-colors"
                          title="Email"
                        >
                          <Mail className="w-3.5 h-3.5 text-blue-500" />
                          <span className="text-[11px]">Email</span>
                        </a>
                        <a
                          href="https://www.linkedin.com/in/saurabh-dantani-profile/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 hover:text-sky-500 transition-colors"
                          title="LinkedIn"
                        >
                          <FaLinkedinIn className="w-3.5 h-3.5 text-sky-500" />
                          <span className="text-[11px]">LinkedIn</span>
                        </a>
                      </div>

                      <button
                        type="button"
                        onClick={handleClose}
                        className="text-[11px] text-slate-400 dark:text-zinc-500 hover:text-slate-600 dark:hover:text-zinc-300 underline underline-offset-2 transition-colors"
                      >
                        Maybe later
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
