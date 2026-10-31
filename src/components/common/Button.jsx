import { motion } from 'framer-motion';

/**
 * Premium button component with gradient and glass variants.
 * @param {'primary' | 'outline' | 'ghost'} variant
 * @param {'md' | 'lg'} size
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  icon: Icon,
  iconPosition = 'right',
  ...props
}) {
  const baseClasses =
    'relative inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-300 cursor-pointer select-none overflow-hidden group';

  const sizeClasses = {
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-primary to-accent text-white hover:shadow-[0_0_30px_rgba(79,70,229,0.4)] hover:scale-[1.02] active:scale-[0.98]',
    outline:
      'bg-transparent text-white border border-white/10 hover:border-white/25 hover:bg-white/[0.03] hover:scale-[1.02] active:scale-[0.98]',
    ghost:
      'bg-white/[0.03] text-white/80 hover:text-white hover:bg-white/[0.06]',
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {/* Shimmer effect on primary */}
      {variant === 'primary' && (
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
      )}
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4" aria-hidden="true" />}
      <span className="relative z-10">{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />}
    </>
  );

  const motionProps = {
    whileTap: { scale: 0.97 },
    transition: { type: 'spring', stiffness: 400, damping: 17 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        {...motionProps}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      onClick={onClick}
      {...motionProps}
      {...props}
    >
      {content}
    </motion.button>
  );
}
