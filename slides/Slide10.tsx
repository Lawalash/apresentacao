
import React from 'react';
import { SlideLayout } from '../components/SlideLayout';

const ResultItem: React.FC<{ icon: string, title: string, description: string }> = ({ icon, title, description }) => (
    <div className="text-center p-6 bg-slate-50 rounded-lg">
        <i className={`${icon} text-4xl text-blue-500 mb-4`}></i>
        <h4 className="text-xl font-bold text-slate-800 mb-2">{title}</h4>
        <p className="text-slate-600">{description}</p>
    </div>
);

export const Slide10: React.FC = () => {
  return (
    <SlideLayout title="Como a Landing Page Gera Resultados">
      <div className="h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ResultItem icon="fas fa-bullseye" title="Design Estratégico" description="Foco total na conversão, guiando o visitante para a ação." />
          <ResultItem icon="fab fa-whatsapp" title="Mais Agendamentos" description="Conexão direta e rápida via WhatsApp para agendar visitas." />
          <ResultItem icon="fas fa-heart" title="Conexão Emocional" description="Gera confiança e empatia desde o primeiro contato." />
          <ResultItem icon="fas fa-mobile-alt" title="Layout Responsivo" description="Experiência perfeita em celulares, tablets e computadores." />
          <ResultItem icon="fas fa-pen" title="Fácil Atualização" description="Conteúdos podem ser atualizados de forma simples e rápida." />
          <ResultItem icon="fas fa-sitemap" title="Organização Clara" description="Informações e serviços apresentados de forma intuitiva." />
        </div>
      </div>
    </SlideLayout>
  );
};
