import { useState } from 'react';
import { X } from 'lucide-react';

function openKonfHub(e) {
  e.preventDefault();
  const kBtn = document.querySelector('#konfhub-widget-trigger button, #konfhub-widget-trigger a');
  if (kBtn) kBtn.click();
}

const footerLinks = {
  Event: [
    { label: 'About', href: '#about' },
    { label: 'Speakers', href: '#speakers' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Venue', href: '#venue' },
    { label: 'FAQ', href: '#faq' },
  ],
  Community: [
    { label: 'Code of Conduct', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms & Conditions', href: '#' },
  ],
  Contact: [
    { label: 'opensourceconkol@gmail.com', href: 'mailto:opensourceconkol@gmail.com' },
  ],
};

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
);
const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
);
const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
);
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
);

const socials = [
  { Icon: GithubIcon, href: 'https://github.com/globalazurekolkata-web/opensourcecon', label: 'GitHub' },
  { Icon: TwitterIcon, href: 'https://www.x.com/OpenSourceConIN', label: 'Twitter' },
  { Icon: LinkedinIcon, href: 'https://www.linkedin.com/company/opensource-con-india', label: 'LinkedIn' },
  { Icon: InstagramIcon, href: 'https://www.instagram.com/opensourceconindia', label: 'Instagram' },
];

export default function Footer() {
  const [activeModal, setActiveModal] = useState(null); // null, 'coc', 'privacy', 'terms'
  return (
    <footer className="darkBg text-white pt-20 pb-8 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none z-0" 
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-container mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Columns Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16 text-left">
          
          {/* Brand Info */}
          <div className="col-span-2 lg:col-span-2 space-y-5">
            <div className="flex items-center gap-2">
              <img
                src="/logoWord.png"
                alt="OpenSourceCon"
                className="h-12 object-contain brightness-0 invert"
              />
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Open Source Con India - Kolkata Edition. By the community, for the community. Dedicated to collaboration, transparency, and the open-source spirit.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-green hover:text-dark transition-all duration-300"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Dynamic Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => {
            const isContact = title === 'Contact';
            return (
              <div key={title} className={`space-y-4 ${isContact ? 'col-span-2 lg:col-span-1' : 'col-span-1'}`}>
                <h4 className="font-heading font-bold text-sm text-brand-green uppercase tracking-wider">
                  {title}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => {
                    const isCoC = link.label === 'Code of Conduct';
                    const isPrivacy = link.label === 'Privacy Policy';
                    const isTerms = link.label === 'Terms & Conditions';
                    const handleLinkClick = (e) => {
                      if (isCoC) {
                        e.preventDefault();
                        setActiveModal('coc');
                      } else if (isPrivacy) {
                        e.preventDefault();
                        setActiveModal('privacy');
                      } else if (isTerms) {
                        e.preventDefault();
                        setActiveModal('terms');
                      }
                    };
                    return (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          onClick={handleLinkClick}
                          className="inline-block text-sm text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1.5"
                        >
                          {link.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}

        </div>

        {/* Brand Text Background Effect */}
        <div className="footer-brand-text py-8 select-none pointer-events-none mb-4 bg-gradient-to-b from-gray-200 to-gray-600 bg-clip-text text-transparent ">
          OPENSOURCECON
        </div>

        {/* Bottom Copyright Area */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-gray-500">
            © 2026 Open Source Con India. All rights reserved. Newtown, Kolkata.
          </p>
          <div className="flex gap-5">
            <button 
              onClick={() => setActiveModal('coc')}
              className="text-[11px] text-gray-500 hover:text-white transition-colors bg-transparent border-0 cursor-pointer p-0"
            >
              Code of Conduct
            </button>
            <button 
              onClick={() => setActiveModal('privacy')}
              className="text-[11px] text-gray-500 hover:text-white transition-colors bg-transparent border-0 cursor-pointer p-0"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => setActiveModal('terms')}
              className="text-[11px] text-gray-500 hover:text-white transition-colors bg-transparent border-0 cursor-pointer p-0"
            >
              Terms & Conditions
            </button>
          </div>
        </div>

      </div>

      {/* Modal Popup */}
      {activeModal && (
        <div 
          className="fixed inset-0 bg-black/85 backdrop-blur-md z-[100] flex items-center justify-center p-4 animate-fade-in"
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
                {activeModal === 'coc' && 'Code of Conduct'}
                {activeModal === 'privacy' && 'Privacy Policy'}
                {activeModal === 'terms' && 'Terms & Conditions'}
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
              {activeModal === 'coc' && (
                <>
                  <section className="space-y-2 text-left">
                    <h4 className="text-white font-semibold font-heading text-base">Importance</h4>
                    <p>
                      We believe in the value and importance of an environment where everyone feels welcome and safe. 
                      This Code of Conduct explains what type of behaviour is expected from members who will be a part of 
                      OpenSourceCon Kolkata events. All attendees, sponsors, speakers, and volunteers are required to follow this 
                      code of conduct. These are non-negotiable and we expect cooperation from all the participants.
                    </p>
                  </section>
                  <section className="space-y-2 text-left">
                    <h4 className="text-white font-semibold font-heading text-base">Expected Behaviour</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>You will behave in a way as to create a safe and supportive environment for all event participants.</li>
                      <li>You will not engage in disruptive behaviour or speech or otherwise interfere with the event or other individuals’ participation.</li>
                      <li>You will not harass anyone based on gender, gender identity, sexual orientation, disability, race, age, religion, or technology choices.</li>
                      <li>Sexualised language and imagery is not appropriate for any event, including talks, workshops, and online media.</li>
                    </ul>
                  </section>
                  <section className="space-y-2 text-left">
                    <h4 className="text-white font-semibold font-heading text-base">Consequences</h4>
                    <p>
                      If any breach or misconduct comes to our notice, participants engaging in misconduct will be sanctioned or 
                      expelled from the event immediately without a refund at the discretion of the organizers. 
                      If you are being harassed or notice someone else being harassed, please contact one of the organizers immediately.
                    </p>
                  </section>
                </>
              )}

              {activeModal === 'privacy' && (
                <>
                  <section className="space-y-2 text-left">
                    <h4 className="text-white font-semibold font-heading text-base">Information We Collect</h4>
                    <p>
                      When you register for OpenSourceCon Kolkata, we collect personal information such as your name, email address, 
                      company name, designation, and other professional details. This collection is done primarily via the KonfHub registration widget.
                    </p>
                  </section>
                  <section className="space-y-2 text-left">
                    <h4 className="text-white font-semibold font-heading text-base">How We Use Information</h4>
                    <p>
                      We use the information we collect to manage your registration, issue entry tickets, send updates about the conference, 
                      facilitate speaker interactions, and ensure a smooth event check-in experience. We will never sell your personal data.
                    </p>
                  </section>
                  <section className="space-y-2 text-left">
                    <h4 className="text-white font-semibold font-heading text-base">GDPR Compliance & Data Protection</h4>
                    <p>
                      In partnership with KonfHub, we adhere to high standards of data privacy and security. The platform implements 
                      appropriate technical and organizational measures to safeguard your personal data from unauthorized access or disclosure.
                    </p>
                  </section>
                  <section className="space-y-2 text-left">
                    <h4 className="text-white font-semibold font-heading text-base">Your Rights</h4>
                    <p>
                      You have the right to request access to, correction of, or deletion of the personal data we hold about you. 
                      For any privacy concerns, you can contact us at <a href="mailto:opensourceconkol@gmail.com" className="text-brand-green hover:underline">opensourceconkol@gmail.com</a>.
                    </p>
                  </section>
                </>
              )}

              {activeModal === 'terms' && (
                <>
                  <section className="space-y-2 text-left">
                    <h4 className="text-white font-semibold font-heading text-base">Introduction</h4>
                    <p>
                      Welcome to OpenSourceCon. By accessing our website and registering for the conference, you agree to comply with and be bound by these Terms & Conditions.
                    </p>
                  </section>
                  <section className="space-y-2 text-left">
                    <h4 className="text-white font-semibold font-heading text-base">Registration & Ticketing</h4>
                    <p>
                      All registrations are processed through KonfHub. Tickets are non-transferable unless requested and approved by the organizing committee. Tickets do not guarantee entry if the venue capacity is breached due to force majeure.
                    </p>
                  </section>
                  <section className="space-y-2 text-left">
                    <h4 className="text-white font-semibold font-heading text-base">Code of Conduct Agreement</h4>
                    <p>
                      By attending the conference, you explicitly agree to abide by our Code of Conduct. Failure to comply can result in removal from the venue without refund or recourse.
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
