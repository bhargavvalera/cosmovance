import { motion } from 'framer-motion';

export default function SectionHeading({
  badge,
  title,
  description,
  align = 'center',
  className = '',
}) {
  const alignClasses = {
    center: 'text-center mx-auto',
    left: 'text-left',
  };

  return (
    <div
      className={`w-full max-w-3xl mb-12 md:mb-16 ${alignClasses[align]} ${className}`}
    >
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="
            inline-flex items-center justify-center
            min-h-[44px]
            px-6 sm:px-7
            py-2.5
            rounded-full
            bg-primary/[0.08]
            border border-primary/25
            shadow-sm shadow-blue-500/[0.05]
            backdrop-blur-md
            text-primary-light
            text-xs sm:text-sm
            font-bold
            tracking-[0.16em]
            uppercase
            mb-7 md:mb-8
            transition-all duration-300
            hover:border-primary/50
            hover:bg-primary/[0.12]
            hover:shadow-md hover:shadow-blue-500/10
          "
        >
          {badge}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-display font-bold"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-text-muted text-base sm:text-lg leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
