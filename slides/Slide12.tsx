
import React from 'react';
import { SlideLayout } from '../components/SlideLayout';

export const Slide12: React.FC = () => {
  return (
    <SlideLayout title="Antes e Depois: A Força da Presença Digital">
      <div className="h-full flex items-center justify-center gap-8">
        {/* Antes */}
        <div className="w-1/2 bg-red-50 border border-red-200 p-8 rounded-lg text-center">
          <i className="fas fa-eye-slash text-6xl text-red-400 mb-4"></i>
          <h3 className="text-3xl font-bold text-red-800 mb-4">Sem Presença Digital</h3>
          <ul className="text-left space-y-2 text-red-700 list-disc list-inside">
            <li>Dificuldade de ser encontrado</li>
            <li>Comunicação limitada</li>
            <li>Percepção de amadorismo</li>
            <li>Perda de oportunidades</li>
          </ul>
        </div>

        {/* Depois */}
        <div className="w-1/2 bg-green-50 border border-green-200 p-8 rounded-lg text-center">
          <i className="fas fa-globe-americas text-6xl text-green-500 mb-4"></i>
          <h3 className="text-3xl font-bold text-green-800 mb-4">Com Landing Page Profissional</h3>
          <ul className="text-left space-y-2 text-green-700 list-disc list-inside">
            <li>Visão profissional e confiável</li>
            <li>Canal direto com as famílias</li>
            <li>Maior visibilidade online</li>
            <li>Aumento de visitas agendadas</li>
          </ul>
        </div>
      </div>
    </SlideLayout>
  );
};
