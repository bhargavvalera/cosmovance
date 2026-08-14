import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SectionWrapper from '../common/SectionWrapper';
import AnimatedElement from '../common/AnimatedElement';
import SectionHeading from '../common/SectionHeading';
import GradientText from '../common/GradientText';
import { faqs } from '../../data/siteData';

/**
 * FAQ section — accordion-style questions with animated expand/collapse.
 */
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
        <div className="container-narrow mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index}>
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center py-6 border-b border-white/[0.06] text-left cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span
                    className={`font-display font-medium text-base md:text-lg pr-4 transition-colors duration-300 ${
                      isOpen ? 'text-white' : 'text-white/80'
                    }`}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-text-muted shrink-0 transition-transform duration-300 ${
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
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-text-muted text-sm md:text-base leading-relaxed pb-6 max-w-3xl">
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
