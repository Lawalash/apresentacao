
import React from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { CheckCircleIcon } from '../components/icons';

export const Slide04: React.FC = () => {
  return (
    <SlideLayout title="A Oportunidade">
       <div className="flex h-full items-center justify-between gap-12">
        <div className="w-1/2 h-[70%] rounded-lg overflow-hidden shadow-xl">
           <img src="https://picsum.photos/seed/websitemockup/800/600" alt="Mockup de site" className="w-full h-full object-cover" />
        </div>
        <div className="w-1/2 flex flex-col justify-center">
          <h3 className="text-3xl font-bold text-green-700 mb-6">
            Criar uma Landing Page profissional que:
          </h3>
          <ul className="space-y-4 text-xl text-slate-600">
            <li className="flex items-center">
              <CheckCircleIcon className="text-green-500 mr-3" />
              Mostra a credibilidade do lar.
            </li>
            <li className="flex items-center">
              <CheckCircleIcon className="text-green-500 mr-3" />
              Aumenta visitas agendadas.
            </li>
            <li className="flex items-center">
              <CheckCircleIcon className="text-green-500 mr-3" />
              Gera confiança imediata.
            </li>
            <li className="flex items-center">
              <CheckCircleIcon className="text-green-500 mr-3" />
              Apresenta serviços com clareza.
            </li>
             <li className="flex items-center">
              <CheckCircleIcon className="text-green-500 mr-3" />
              Facilita o contato via WhatsApp.
            </li>
          </ul>
        </div>
      </div>
    </SlideLayout>
  );
};
