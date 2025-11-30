
import React from 'react';

export const Slide01: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center relative bg-cover bg-center text-white" style={{ backgroundImage: "url('https://picsum.photos/seed/familycare/1200/800')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 text-center p-8 animate-fade-in-up">
        <h1 className="text-5xl lg:text-7xl font-playfair font-bold mb-4">
          Proposta de Landing Page Profissional
        </h1>
        <h2 className="text-3xl lg:text-5xl font-light text-blue-200 mb-8">
          ILPI Aconchego dos Avós
        </h2>
        <p className="text-xl lg:text-2xl bg-black bg-opacity-30 px-4 py-2 rounded-md inline-block">
          Transformando acolhimento em presença digital
        </p>
      </div>
    </div>
  );
};
