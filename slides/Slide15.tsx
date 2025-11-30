
import React from 'react';
import { SlideLayout } from '../components/SlideLayout';

const Step: React.FC<{ number: number, title: string, description: string }> = ({ number, title, description }) => (
    <div className="flex items-start">
        <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white font-bold text-2xl rounded-full flex items-center justify-center mr-6">
            {number}
        </div>
        <div>
            <h4 className="text-2xl font-bold text-slate-800">{title}</h4>
            <p className="text-slate-600 text-lg">{description}</p>
        </div>
    </div>
);


export const Slide15: React.FC = () => {
  return (
    <SlideLayout title="Próximos Passos">
      <div className="h-full flex items-center justify-center">
        <div className="max-w-3xl space-y-10">
          <Step number={1} title="Aprovação da Proposta" description="Com o seu 'sim', damos o pontapé inicial no projeto." />
          <Step number={2} title="Envio das Fotos e Materiais" description="Você nos envia as fotos e informações que darão vida à página." />
          <Step number={3} title="Início do Design" description="Nossa equipe criativa começa a desenhar a sua nova presença digital." />
          <Step number={4} title="Implementação e Entrega" description="Após sua aprovação, colocamos o site no ar, pronto para receber visitas." />
        </div>
      </div>
    </SlideLayout>
  );
};
