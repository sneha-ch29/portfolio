export const Badge = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <span
    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-800 border border-slate-200 ${className}`}
  >
    {children}
  </span>
);
