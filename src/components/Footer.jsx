import { useState } from 'react';
import { ArrowRight, Loader2, Check } from 'lucide-react';
import { openKonfHub } from '../utils/konfhub';
import { GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from './icons/SocialIcons';
import { footerLinks, socialLinks } from '../data/footer';

const iconMap = {
  github: GithubIcon,
  twitter: TwitterIcon,
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
};

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(''); // '', 'loading', 'success', 'error'
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('');

    if (!email) {
      setStatus('error');
      setMessage('Please enter your email.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    
    // Simulate API request
    setTimeout(() => {
      setStatus('success');
      setMessage('Subscribed successfully! 🎉');
      setEmail('');
    }, 1500);
  };

  return (
    <footer className="bg-dark text-white pt-20 pb-10 border-t border-white/[0.06] relative overflow-hidden">
      {/* Subtle ambient green glow orbs */}
      <div className="absolute w-[350px] h-[350px] rounded-full bg-brand-green/5 blur-[120px] pointer-events-none -bottom-48 -left-48 z-0" />
      <div className="absolute w-[250px] h-[250px] rounded-full bg-brand-green/[0.03] blur-[100px] pointer-events-none -top-24 -right-24 z-0" />

      <div className="max-w-full mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 xl:gap-16 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="OpenSourceCon Logo"
                className="h-10 w-auto object-contain select-none"
              />
              <img
                src="/images/logo text dark.png"
                alt="OpenSourceCon"
                className="h-8 w-auto object-contain select-none"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-body">
              Bengal's community-driven open source conference. By the people, for the people. Built on the foundations of collaboration, transparency, and the free exchange of knowledge.
            </p>
            <div className="flex gap-3 pt-2">
              {socialLinks.map(({ iconName, href, label }) => {
                const Icon = iconMap[iconName];
                return (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target={href !== '#' ? '_blank' : undefined}
                    rel={href !== '#' ? 'noopener noreferrer' : undefined}
                    className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-gray-400 hover:bg-brand-green hover:text-dark hover:border-brand-green hover:scale-105 hover:shadow-lg hover:shadow-brand-green/20 transition-all duration-300"
                  >
                    {Icon && <Icon className="w-4 h-4" />}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-4">
              <h4 className="font-heading font-bold text-xs tracking-wider text-gray-300 uppercase">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={link.onClick}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="group/link flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1"
                    >
                      <span className="w-1 h-1 rounded-full bg-brand-green opacity-0 -ml-2 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all duration-300 flex-shrink-0" />
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Glassmorphic Card */}
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-md p-8 lg:p-10 mb-12">
          {/* Inner glowing radial pattern */}
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-brand-green/[0.03] blur-[60px] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-2">
              <span className="text-[10px] font-mono font-bold tracking-widest text-brand-green uppercase">
                Stay Connected
              </span>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-white tracking-tight">
                Stay in the loop
              </h3>
              <p className="text-gray-400 text-sm max-w-md leading-relaxed">
                Get updates about OpenSourceCon Kolkata — no spam, only what matters.
              </p>
            </div>
            
            <div className="w-full lg:max-w-md space-y-3">
              <form onSubmit={handleSubmit} className="relative flex items-center w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  disabled={status === 'loading'}
                  className="w-full pl-4 pr-32 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-brand-green/50 focus:bg-white/[0.06] focus:ring-1 focus:ring-brand-green/20 disabled:opacity-50 transition-all duration-300"
                  required
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-5 rounded-lg bg-brand-green text-dark text-xs font-semibold hover:bg-brand-green-dark transition-all duration-200 flex items-center justify-center gap-1.5 disabled:bg-brand-green/80"
                >
                  {status === 'loading' ? (
                    <Loader2 size={12} className="animate-spin" />
                  ) : status === 'success' ? (
                    <Check size={12} />
                  ) : (
                    <>
                      <span>Subscribe</span>
                      <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>
              </form>
              {message && (
                <p className={`text-xs ${status === 'error' ? 'text-red-400' : 'text-brand-green'} px-1 animate-fade-up`}>
                  {message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mb-8" />

        {/* Copyright and Bottom Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 font-body">
            © 2026 Open Source Con Kolkata
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors duration-300">
              Code of Conduct
            </a>
            <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors duration-300">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
