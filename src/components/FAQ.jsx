import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '../data/faqs';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="py-6 lg:py-10 relative">
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
              <div key={i} className="faq-item py-0">
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-start text-left gap-4 py-5 focus:outline-none group"
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-content-${i}`}
                  id={`faq-btn-${i}`}
                >
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors mt-0.5 ${
                      openIndex === i
                        ? 'bg-brand-green text-white'
                        : 'bg-brand-green/10 text-brand-green group-hover:bg-brand-green/20'
                    }`}
                  >
                    {openIndex === i ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-base mb-0 text-dark dark:text-white transition-colors group-hover:text-brand-green">
                      {faq.q}
                    </h3>
                  </div>
                </button>
                <div
                  id={`faq-content-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === i ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                  }`}
                >
                  <p className="text-gray-secondary dark:text-gray-400 text-sm leading-relaxed mt-1 animate-fade-up">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
