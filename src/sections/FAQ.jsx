import { useState } from 'react';
import { Plus, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const EASE = [0.19, 1, 0.22, 1];

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

            <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] leading-[1.4]! tracking-tight text-dark">
              <span className="font-medium">Got questions?
              <br />
              We've got</span> <span className="text-gradient uppercase font-bold">ANSWERS</span>
            </h2>

            <p className="text-gray-secondary text-base md:text-lg leading-relaxed max-w-sm">
              Find answers to common questions about attending the Open Source Conference Kolkata.
            </p>

            <a 
              href="mailto:hello@opensourcecon.in" 
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 mt-6 rounded-full bg-black text-white font-medium text-[15px] hover:bg-gray-900 transition-colors shadow-sm w-fit"
            >
              Contact US <ArrowRight size={18} />
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
                    className="rounded-2xl border border-gray-100 bg-white transition-all duration-300 overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                      className="w-full px-6 py-6 flex items-start gap-4 text-left focus:outline-none hover:bg-gray-50/50"
                    >
                      <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 bg-brand-green/10 text-[#00823B]">
                        {isOpen ? <X size={18} strokeWidth={2.5} /> : <Plus size={18} strokeWidth={2.5} />}
                      </div>
                      <div className="flex-1 mt-1">
                        <span className="block font-heading font-semibold text-[18px] text-black tracking-tight">
                          {faq.q}
                        </span>
                        
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: EASE }}
                              className="overflow-hidden"
                            >
                              <div className="pt-4 pb-2">
                                <motion.p 
                                  initial={{ y: 20, opacity: 0 }}
                                  animate={{ y: 0, opacity: 1 }}
                                  transition={{ duration: 0.4, ease: EASE, delay: 0.05 }}
                                  className="text-gray-600 text-sm sm:text-base leading-relaxed pr-4"
                                >
                                  {faq.a}
                                </motion.p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </button>
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
