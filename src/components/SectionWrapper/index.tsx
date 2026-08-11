export const SectionWrapper = ({
  children,
  id,
  className = "",
}: {
  children: React.ReactNode;
  id: string;
  className?: string;
}) => (
  <section
    id={id}
    className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${className}`}
  >
    {children}
  </section>
);
