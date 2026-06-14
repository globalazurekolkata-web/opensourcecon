import { useState } from 'react';
import { X } from 'lucide-react';
import { GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from './icons/SocialIcons';
import { footerLinks, socialLinks } from '../data/footer';

const iconMap = {
  github: GithubIcon,
  twitter: TwitterIcon,
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
};

export default function Footer() {
  const [activeModal, setActiveModal] = useState(null); // null, 'coc', 'privacy'

  return (
    <footer className="bg-dark text-white pt-20 pb-10 relative overflow-hidden">
      {/* Premium top border gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent z-10" />

      {/* Subtle tech grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.006)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.006)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none z-0" />

      {/* Subtle ambient green glow orbs */}
      <div className="absolute w-[350px] h-[350px] rounded-full bg-brand-green/5 blur-[120px] pointer-events-none -bottom-48 -left-48 z-0" />
      <div className="absolute w-[250px] h-[250px] rounded-full bg-brand-green/[0.03] blur-[100px] pointer-events-none -top-24 -right-24 z-0" />

      <div className="max-w-full mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 xl:gap-16 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <img
                  src="/images/logo.png"
                  alt="OpenSourceCon Logo"
                  className="h-12 lg:h-14 w-auto object-contain select-none"
                />
                <img
                  src="/images/logo text dark.png"
                  alt="OpenSourceCon"
                  className="h-[42px] lg:h-[48px] w-auto object-contain select-none"
                />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-body">
                Bengal's community-driven open source conference. By the people, for the people. Built on the foundations of collaboration, transparency, and the free exchange of knowledge.
              </p>
            </div>
            <div className="flex gap-5 pt-1">
              {socialLinks.map(({ iconName, href, label }) => {
                const Icon = iconMap[iconName];
                return (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target={href !== '#' ? '_blank' : undefined}
                    rel={href !== '#' ? 'noopener noreferrer' : undefined}
                    className="text-gray-400 hover:text-brand-green hover:scale-110 transition-all duration-300 flex items-center justify-center"
                  >
                    {Icon && <Icon size={20} />}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-4">
              <h4 className="font-mono font-bold text-[11px] tracking-widest text-brand-green/90 uppercase">{title}</h4>
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

        {/* Large Background Wordmark */}
        <div className="py-6 md:py-10 select-none pointer-events-none text-center overflow-hidden">
          <h2 className="font-heading font-black text-[9vw] tracking-tight px-4 text-transparent bg-clip-text bg-gradient-to-b from-brand-green/[0.1] via-white/[0.04] to-transparent uppercase leading-none">
            OpenSourceCon
          </h2>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mb-8" />

        {/* Copyright and Bottom Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pr-0 md:pr-16">
          <p className="text-xs text-gray-500 font-body font-bold">
            © 2026 Open Source Con Kolkata
          </p>
          <div className="flex gap-6">
            <button
              onClick={() => setActiveModal('coc')}
              className="text-xs text-gray-500 hover:text-brand-green transition-colors duration-300 bg-transparent border-0 cursor-pointer p-0 focus:outline-none"
            >
              Code of Conduct
            </button>
            <button
              onClick={() => setActiveModal('privacy')}
              className="text-xs text-gray-500 hover:text-brand-green transition-colors duration-300 bg-transparent border-0 cursor-pointer p-0 focus:outline-none"
            >
              Privacy Policy
            </button>
          </div>
        </div>
      </div>

      {/* Modal Popup */}
      {activeModal && (
        <div 
          className="fixed inset-0 bg-dark/85 backdrop-blur-md z-[100] flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setActiveModal(null)}
        >
          <div 
            className="bg-[#0b1020] border border-white/10 rounded-2xl max-w-2xl w-full max-h-[80vh] flex flex-col shadow-2xl relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Glow orb inside modal */}
            <div className="absolute w-[200px] h-[200px] rounded-full bg-brand-green/10 blur-[60px] pointer-events-none -top-10 -left-10" />

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 relative z-10">
              <h3 className="font-heading font-bold text-lg text-white">
                {activeModal === 'coc' ? 'Code of Conduct' : 'Privacy Policy'}
              </h3>
              <button 
                onClick={() => setActiveModal(null)}
                className="text-gray-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/5"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-6 py-6 text-gray-300 text-sm space-y-5 leading-relaxed font-body relative z-10 scrollbar-thin">
              {activeModal === 'coc' ? (
                <>
                  <section className="space-y-2">
                    <h4 className="text-white font-semibold font-heading text-base">Importance</h4>
                    <p>
                      We believe in the value and importance of an environment where everyone feels welcome and safe. 
                      This Code of Conduct explains what type of behaviour is expected from members who will be a part of 
                      OpenSourceCon Kolkata events. All attendees, sponsors, speakers, and volunteers are required to follow this 
                      code of conduct. These are non-negotiable and we expect cooperation from all the participants.
                    </p>
                  </section>
                  <section className="space-y-2">
                    <h4 className="text-white font-semibold font-heading text-base">Expected Behaviour</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>You will behave in a way as to create a safe and supportive environment for all event participants.</li>
                      <li>You will not engage in disruptive behaviour or speech or otherwise interfere with the event or other individuals’ participation.</li>
                      <li>You will not harass anyone based on gender, gender identity, sexual orientation, disability, race, age, religion, or technology choices.</li>
                      <li>Sexualised language and imagery is not appropriate for any event, including talks, workshops, and online media.</li>
                    </ul>
                  </section>
                  <section className="space-y-2">
                    <h4 className="text-white font-semibold font-heading text-base">Consequences</h4>
                    <p>
                      If any breach or misconduct comes to our notice, participants engaging in misconduct will be sanctioned or 
                      expelled from the event immediately without a refund at the discretion of the organizers. 
                      If you are being harassed or notice someone else being harassed, please contact one of the organizers immediately.
                    </p>
                  </section>
                </>
              ) : (
                <>
                  <section className="space-y-2">
                    <h4 className="text-white font-semibold font-heading text-base">Information We Collect</h4>
                    <p>
                      When you register for OpenSourceCon Kolkata, we collect personal information such as your name, email address, 
                      company name, designation, and other professional details. This collection is done primarily via the KonfHub registration widget.
                    </p>
                  </section>
                  <section className="space-y-2">
                    <h4 className="text-white font-semibold font-heading text-base">How We Use Information</h4>
                    <p>
                      We use the information we collect to manage your registration, issue entry tickets, send updates about the conference, 
                      facilitate speaker interactions, and ensure a smooth event check-in experience. We will never sell your personal data.
                    </p>
                  </section>
                  <section className="space-y-2">
                    <h4 className="text-white font-semibold font-heading text-base">GDPR Compliance & Data Protection</h4>
                    <p>
                      In partnership with KonfHub, we adhere to high standards of data privacy and security. The platform implements 
                      appropriate technical and organizational measures to safeguard your personal data from unauthorized access or disclosure.
                    </p>
                  </section>
                  <section className="space-y-2">
                    <h4 className="text-white font-semibold font-heading text-base">Your Rights</h4>
                    <p>
                      You have the right to request access to, correction of, or deletion of the personal data we hold about you. 
                      For any privacy concerns, you can contact us at <a href="mailto:hello@opensourcecon.in" className="text-brand-green hover:underline">hello@opensourcecon.in</a>.
                    </p>
                  </section>
                </>
              )}
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-white/5 flex justify-end relative z-10 bg-dark/20">
              <button 
                onClick={() => setActiveModal(null)}
                className="px-5 py-2 rounded-xl bg-brand-green text-dark text-xs font-semibold hover:bg-brand-green-dark transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
