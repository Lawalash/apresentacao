
import React from 'react';
import { SlideLayout } from '../components/SlideLayout';

export const Slide03: React.FC = () => {
  return (
    <SlideLayout title="O Problema Atual">
      <div className="flex items-center h-full gap-12">
        <div className="w-2/3">
          <h3 className="text-3xl font-bold text-slate-700 mb-6">
            A jornada da família começa com uma pesquisa online.
          </h3>
          <p className="text-xl text-slate-600 mb-8">
            Hoje, a ausência de uma presença digital clara e profissional significa perder a oportunidade de causar a primeira, e mais importante, impressão.
          </p>
          <div className="bg-red-50 border border-red-200 text-red-800 p-6 rounded-lg text-lg space-y-3">
            <p><strong>A ILPI não tem uma página que apresente:</strong></p>
            <ul className="list-disc list-inside ml-2">
              <li>Estrutura, benefícios e serviços detalhados.</li>
              <li>Diferenciais que geram confiança.</li>
              <li>Um canal de contato prático e imediato.</li>
            </ul>
            <p className="font-bold pt-2">Isso reduz a taxa de conversão e visitas presenciais.</p>
          </div>
        </div>
        <div className="w-1/3 flex items-center justify-center">
          <i className="fas fa-search-minus text-9xl text-red-300"></i>
        </div>
      </div>
    </SlideLayout>
  );
};
