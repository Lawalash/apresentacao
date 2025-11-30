
import React from 'react';

export const Slide09: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center relative bg-cover bg-center text-white" style={{ backgroundImage: "url('https://picsum.photos/seed/carehands/1200/800')" }}>
      <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
      <div className="relative z-10 text-center p-12 animate-fade-in">
        <blockquote className="text-4xl lg:text-5xl font-playfair italic mb-6">
          “Não podemos mudar o vento, mas podemos ajustar as velas.”
        </blockquote>
        <p className="text-2xl lg:text-3xl font-light">
          — Navegação segura para cada fase da vida.
        </p>
      </div>
    </div>
  );
};
