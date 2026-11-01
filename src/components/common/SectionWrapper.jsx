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
      className={`
        ${noPadding ? '' : 'section-padding'}
        first:!pt-28
        md:first:!pt-32
        lg:first:!pt-36
        relative overflow-hidden
        scroll-mt-24
        ${className}
      `}
    >
      <div className={`${containerClass} mx-auto px-5 sm:px-6 md:px-8`}>
        {children}
      </div>
    </section>
  );
}
