
import React from 'react';

interface SlideLayoutProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export const SlideLayout: React.FC<SlideLayoutProps> = ({ children, title, className = '' }) => {
  return (
    <div className={`w-full h-full p-10 lg:p-16 flex flex-col bg-[#FBFBFB] text-slate-800 ${className}`}>
      {title && (
        <h2 className="text-2xl lg:text-3xl font-bold text-slate-700 border-b-2 border-blue-200 pb-2 mb-8">
          {title}
        </h2>
      )}
      <div className="flex-grow">
        {children}
      </div>
      <footer className="text-sm text-slate-400 mt-4">
        ILPI Aconchego dos Avós — Proposta de Landing Page
      </footer>
    </div>
  );
};
