
import React from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { HeartIcon } from '../components/icons';

export const Slide02: React.FC = () => {
  return (
    <SlideLayout title="Sobre a ILPI Aconchego dos Avós">
      <div className="flex h-full items-center justify-between gap-12">
        <div className="w-1/2 flex flex-col justify-center">
          <h3 className="text-4xl font-bold text-blue-600 mb-6 font-playfair">
            Um lar feito de carinho.
          </h3>
          <ul className="space-y-4 text-xl text-slate-600">
            <li className="flex items-start">
              <HeartIcon className="text-green-500 mr-3 mt-1.5 flex-shrink-0" />
              <span>Ambiente seguro e humanizado.</span>
            </li>
            <li className="flex items-start">
              <HeartIcon className="text-green-500 mr-3 mt-1.5 flex-shrink-0" />
              <span>Respeito, carinho e cuidado em cada detalhe.</span>
            </li>
            <li className="flex items-start">
              <HeartIcon className="text-green-500 mr-3 mt-1.5 flex-shrink-0" />
              <span>Local preparado para acolher famílias com amor.</span>
            </li>
          </ul>
        </div>
        <div className="w-1/2 h-[70%] rounded-lg overflow-hidden shadow-xl">
          <img src="https://picsum.photos/seed/happyelders/800/600" alt="Idosos sorrindo" className="w-full h-full object-cover" />
        </div>
      </div>
    </SlideLayout>
  );
};
