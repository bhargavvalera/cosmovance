import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SectionWrapper from '../common/SectionWrapper';
import AnimatedElement from '../common/AnimatedElement';
import SectionHeading from '../common/SectionHeading';
import GradientText from '../common/GradientText';
import { faqs } from '../../data/siteData';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <SectionWrapper id="faq">
      <SectionHeading
        badge="FAQ"
        title={
          <>
            Frequently Asked <GradientText>Questions</GradientText>
          </>
        }
        description="Everything you need to know about working with Cosmovance. Can't find what you're looking for? Reach out to us."
      />

      <AnimatedElement animation="fade-up">
        <div className="max-w-4xl mx-auto space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between gap-5 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-[#1E293B] font-semibold text-base md:text-lg">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-[#3B82F6] transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      role="region"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-[#64748B] text-sm md:text-base leading-7">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </AnimatedElement>
    </SectionWrapper>
  );
}