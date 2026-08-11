import { Terminal } from "lucide-react";

export const Footer = () => (
  <footer className="bg-slate-50 border-t border-slate-200 py-12 text-center">
    <div className="flex items-center justify-center gap-2 mb-4 text-slate-900 font-bold text-xl">
      <Terminal className="w-6 h-6 text-blue-600" /> Sneha Mahato
    </div>
    <p className="text-slate-500 text-sm">
      &copy; {new Date().getFullYear()} Sneha Mahato. Built with React,
      TypeScript & Tailwind.
    </p>
  </footer>
);
