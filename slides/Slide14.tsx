
import React from 'react';
import { SlideLayout } from '../components/SlideLayout';

const timelineSteps = [
  { day: '1-3', title: 'Briefing e Estratégia', description: 'Alinhamento de objetivos e coleta de informações.' },
  { day: '4-7', title: 'Design e Copywriting', description: 'Criação do visual e dos textos da página.' },
  { day: '8-12', title: 'Desenvolvimento', description: 'Implementação técnica e codificação da landing page.' },
  { day: '13-14', title: 'Revisão e Ajustes', description: 'Sua aprovação e ajustes finos no projeto.' },
  { day: '15', title: 'Entrega Final', description: 'Lançamento oficial da página e treinamento.' },
];

export const Slide14: React.FC = () => {
  return (
    <SlideLayout title="Prazo e Entregas">
      <div className="h-full flex flex-col justify-center items-center">
        <h3 className="text-2xl font-bold text-slate-700 mb-2">Tempo Estimado: 15 dias úteis</h3>
        <p className="text-slate-600 mb-10">Um processo transparente com etapas claras para sua tranquilidade.</p>
        <div className="w-full max-w-4xl">
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200"></div>
            {timelineSteps.map((step, index) => (
              <div key={index} className={`flex items-center w-full mb-8 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                <div className="w-1/2"></div>
                <div className="w-1/2 px-8">
                  <div className={`p-4 bg-white rounded-lg shadow-md border-l-4 ${index % 2 === 0 ? 'border-blue-500' : 'border-green-500'}`}>
                    <p className="font-bold text-slate-800">{step.title}</p>
                    <p className="text-sm text-slate-600">{step.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 bg-white border-2 border-blue-500 rounded-full w-20 h-8 flex items-center justify-center font-bold text-blue-700">
                  Dias {step.day}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};
