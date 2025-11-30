
import React from 'react';

export const Slide16: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center bg-gradient-to-br from-blue-50 to-green-50 text-slate-800 p-16">
      <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-blue-800 mb-6">
        Seu lar merece ser visto como realmente é:
        <br />
        acolhedor e especial.
      </h2>
      <p className="text-2xl text-slate-600 mb-12">
        Estamos prontos para contar essa história juntos.
      </p>
      <button className="bg-green-500 text-white font-bold text-2xl px-12 py-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105">
        Vamos começar?
      </button>
    </div>
  );
};
