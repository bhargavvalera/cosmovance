/**
 * Reusable section container with consistent padding, max-width, and anchor ID.
 * Reduces boilerplate across all page sections.
 */
export default function SectionWrapper({
  id,
  children,
  className = '',
  containerClass = 'container-wide',
  noPadding = false,
}) {
  return (
    <section
      id={id}
      className={`${noPadding ? '' : 'section-padding'} relative overflow-hidden ${className}`}
    >
      <div className={`${containerClass} mx-auto px-6 md:px-8`}>
        {children}
      </div>
    </section>
  );
}
