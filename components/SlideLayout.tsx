
import React from 'react';

interface SlideLayoutProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export const SlideLayout: React.FC<SlideLayoutProps> = ({ children, title, className = '' }) => {
  return (
    <div className={`relative w-full h-full p-6 lg:p-12 overflow-hidden ${className}`}>
      <div className="absolute inset-0 brand-surface animate-gradient"></div>
      <div className="absolute -left-24 -top-24 w-72 h-72 bg-[#466fa6]/28 rounded-full blur-[120px] animate-float" aria-hidden></div>
      <div className="absolute -right-16 bottom-0 w-80 h-80 bg-[#8ea3bf]/24 rounded-full blur-[120px] animate-float animate-delay-1" aria-hidden></div>
      <div className="relative h-full rounded-3xl glass-panel border border-white/40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/40 to-white/20"></div>
        <div className="relative h-full flex flex-col p-8 lg:p-12 text-slate-800">
          <div className="flex items-center justify-between gap-4 pb-6 border-b border-slate-200/70">
            {title && (
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight animate-fade-up">
                {title}
              </h2>
            )}
            <span className="brand-pill animate-fade-up animate-delay-1">A2 Data</span>
          </div>
          <div className="flex-grow pt-6">
            {children}
          </div>
          <footer className="text-sm text-slate-500 mt-4 flex items-center justify-between">
            <span>A2 Data • Consultoria e Tecnologia</span>
            <span className="text-slate-400">Soluções digitais sob medida</span>
          </footer>
        </div>
      </div>
    </div>
  );
};
