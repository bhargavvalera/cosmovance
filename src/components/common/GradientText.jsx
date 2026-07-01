/**
 * Renders children text with a gradient fill.
 */
export default function GradientText({
  children,
  className = '',
  from = 'from-primary-light',
  via = 'via-accent-light',
  to = 'to-secondary',
}) {
  return (
    <span
      className={`bg-gradient-to-r ${from} ${via} ${to} bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  );
}
