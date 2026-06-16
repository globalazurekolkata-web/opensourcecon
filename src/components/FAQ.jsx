import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: "Is there a registration fee for the conference?",
    a: "The regular tickets will cost around ₹1000 but we have early bird discounts!"
  },
  {
    q: "Will meals be provided?",
    a: "Yes, lunch and tea/coffee will be provided during the event."
  },
  {
    q: "Can I bring my laptop?",
    a: "Yes, we encourage you to bring your laptop for the hands-on workshops."
  },
  {
    q: "Do I need to be an expert to attend?",
    a: "Not at all! We have sessions ranging from beginner to advanced levels. Everyone is welcome."
  },
  {
    q: "Are there any travel grants available?",
    a: "We are working on securing funds for travel grants. Stay tuned to our social media for announcements."
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="py-20 lg:py-28 relative bg-white border-t border-gray-100">
      <div className="absolute inset-0 grid-bg pointer-events-none z-0" />
      
      <div className="max-w-container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left - Heading */}
          <div className="lg:col-span-5 space-y-6">
            <div className="section-tag w-fit">
              <span className="green-dot" />
              FAQ
            </div>

            <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.05] tracking-tight text-dark">
              Got questions?
              <br />
              We've got <span className="text-brand-green uppercase">ANSWERS</span>
            </h2>

            <p className="text-gray-secondary text-base md:text-lg leading-relaxed max-w-sm">
              Find answers to common questions about attending the Open Source Conference Kolkata.
            </p>

            <a 
              href="mailto:hello@opensourcecon.in" 
              className="btn-outline text-sm mt-4 inline-flex"
            >
              Contact Us
            </a>
          </div>

          {/* Right - Accordion */}
          <div className="lg:col-span-7">
            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div 
                    key={idx}
                    className={`rounded-[20px] border transition-all duration-300 overflow-hidden ${
                      isOpen 
                        ? 'border-brand-green/30 bg-white shadow-md' 
                        : 'border-gray-250 bg-white/50 hover:bg-white hover:border-brand-green/20'
                    }`}
                  >
                    <button
                      onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                    >
                      <span className={`font-heading font-extrabold text-base pr-8 ${isOpen ? 'text-brand-green' : 'text-dark'}`}>
                        {faq.q}
                      </span>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                        isOpen ? 'bg-brand-green text-dark' : 'bg-gray-100 text-gray-500'
                      }`}>
                        {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                      </div>
                    </button>
                    
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-6 pb-6">
                        <p className="text-gray-secondary text-sm leading-relaxed pl-3 border-l-2 border-brand-green/20">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
