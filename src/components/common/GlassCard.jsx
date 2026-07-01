import { motion } from 'framer-motion';

/**
 * Glassmorphism card with hover glow and gradient border.
 */
export default function GlassCard({
  children,
  className = '',
  hover = true,
  glow = false,
  ...props
}) {
  return (
    <motion.div
      className={`
        relative rounded-2xl overflow-hidden
        bg-bg-card/60 backdrop-blur-xl
        border border-white/[0.06]
        ${hover ? 'hover:border-white/[0.12] hover:bg-bg-card-hover/60 transition-all duration-500' : ''}
        ${glow ? 'shadow-[0_0_40px_rgba(79,70,229,0.08)]' : ''}
        ${className}
      `}
      whileHover={hover ? { y: -2 } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      {...props}
    >
      {/* Subtle gradient shine on top edge */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      {children}
    </motion.div>
  );
}
