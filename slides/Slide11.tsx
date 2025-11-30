
import React from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { CheckCircleIcon } from '../components/icons';

const FeatureItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-center text-lg text-slate-700 bg-green-50 p-3 rounded-md">
        <CheckCircleIcon className="text-green-500 mr-3 text-xl" />
        <span>{children}</span>
    </li>
);

export const Slide11: React.FC = () => {
  return (
    <SlideLayout title="Recursos e Diferenciais do Projeto">
      <div className="h-full flex items-center justify-center">
        <ul className="grid grid-cols-2 gap-x-12 gap-y-6">
          <FeatureItem>Site rápido e otimizado para a melhor experiência</FeatureItem>
          <FeatureItem>Hospedagem profissional e segura</FeatureItem>
          <FeatureItem>Certificado SSL para garantir a segurança dos dados</FeatureItem>
          <FeatureItem>SEO básico para ser encontrado no Google</FeatureItem>
          <FeatureItem>Botão de WhatsApp flutuante e de fácil acesso</FeatureItem>
          <FeatureItem>Painel para editar conteúdos (opcional)</FeatureItem>
          <FeatureItem>Texto profissional, humano e persuasivo (Copywriting)</FeatureItem>
          <FeatureItem>Design responsivo para celular, tablet e desktop</FeatureItem>
        </ul>
      </div>
    </SlideLayout>
  );
};
