import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'What and where is OpenSourceCon Kolkata?',
    a: 'OpenSourceCon Kolkata is a one-day open source conference bringing together developers, maintainers, students, and innovators from across the country. It\'s held in Kolkata, the cultural capital of India, celebrating the spirit of open source collaboration.',
  },
  {
    q: 'Is the event paid?',
    a: 'The event has a nominal registration fee to ensure committed attendance. However, we offer scholarships and free passes for students, underrepresented communities, and active open source contributors. Early bird tickets are also available at a discounted rate.',
  },
  {
    q: 'How can I speak at the event?',
    a: 'We have an open Call for Proposals (CFP) process. You can submit your talk proposal through our website. We welcome talks on a wide range of topics including but not limited to AI, Cloud Native, DevOps, Security, Community Building, and more.',
  },
  {
    q: 'Can my company sponsor the event?',
    a: 'Absolutely! We have multiple sponsorship tiers available. Sponsors get visibility among hundreds of passionate developers, branding opportunities, and the chance to connect with the open source community. Reach out to us via the Become a Sponsor button above.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 relative">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Header */}
          <div className="mb-12">
            <div className="section-tag mb-6">
              <span className="green-dot" />
              FAQ
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.1] tracking-tight text-dark dark:text-white">
              Got questions?
              <br />
              We've got <span className="text-brand-green">answers</span>
            </h2>
          </div>

          {/* FAQ Items */}
          <div className="border-t border-gray-100 dark:border-white/5">
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item" onClick={() => toggle(i)}>
                <div className="flex items-start gap-4">
                  <button
                    className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors mt-0.5 ${
                      openIndex === i
                        ? 'bg-brand-green text-white'
                        : 'bg-brand-green/10 text-brand-green'
                    }`}
                    aria-label={openIndex === i ? 'Collapse' : 'Expand'}
                  >
                    {openIndex === i ? <Minus size={14} /> : <Plus size={14} />}
                  </button>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-base mb-0 text-dark dark:text-white">
                      {faq.q}
                    </h3>
                    {openIndex === i && (
                      <p className="text-gray-secondary dark:text-gray-400 text-sm leading-relaxed mt-3 animate-fade-up">
                        {faq.a}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
