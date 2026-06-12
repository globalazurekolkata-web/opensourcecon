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
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="/images/logo text.png"
                alt="OpenSourceCon"
                className="h-7 object-contain invert"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
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
                    className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-gray-400 hover:bg-brand-green hover:text-dark transition-all"
                  >
                    {Icon && <Icon />}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading font-bold text-sm mb-4 text-gray-300">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={link.onClick}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="text-sm text-gray-500 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex-1">
              <h4 className="font-heading font-bold text-sm mb-1">Stay in the loop</h4>
              <p className="text-gray-500 text-xs">Get updates about OpenSourceCon Kolkata — no spam, only what matters.</p>
            </div>
            <form onSubmit={handleSubmit} className="w-full md:w-auto space-y-2">
              <div className="flex gap-2 w-full md:w-auto">
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  disabled={status === 'loading'}
                  className="flex-1 md:w-56 px-4 py-2.5 rounded-xl bg-white/10 border border-white/10 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-brand-green/50 disabled:opacity-50 transition-all"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-5 py-2.5 rounded-xl bg-brand-green text-dark text-sm font-semibold hover:bg-brand-green-dark transition-colors flex items-center justify-center gap-1.5 disabled:bg-brand-green/80 min-w-[110px]"
                >
                  {status === 'loading' ? (
                    <Loader2 size={14} className="animate-spin" />
                  ) : status === 'success' ? (
                    <Check size={14} />
                  ) : (
                    <ArrowRight size={14} />
                  )}
                  {status === 'loading' ? 'Subbing...' : status === 'success' ? 'Subbed!' : 'Subscribe'}
                </button>
              </div>
              {message && (
                <p className={`text-xs ${status === 'error' ? 'text-red-400' : 'text-brand-green'} animate-fade-up`}>
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © 2026 Open Source Con Kolkata. Made with ❤️ and open source.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">
              Code of Conduct
            </a>
            <a href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
