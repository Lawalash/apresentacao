
import React from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { HeartIcon, FoodIcon, ActivityIcon, SecurityIcon } from '../components/icons';

const BenefitItem: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ icon, title, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-400">
        <div className="flex items-center mb-2">
            <div className="text-blue-500 text-2xl mr-4">{icon}</div>
            <h4 className="text-xl font-bold text-slate-800">{title}</h4>
        </div>
        <p className="text-slate-600">{description}</p>
    </div>
);


export const Slide06: React.FC = () => {
  return (
    <SlideLayout title="Benefícios para as Famílias">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full content-center">
        <BenefitItem icon={<HeartIcon />} title="Conforto e Qualidade de Vida" description="Ambientes projetados para o bem-estar e aconchego." />
        <BenefitItem icon={<FoodIcon />} title="Alimentação Equilibrada" description="Cardápios nutritivos elaborados por especialistas." />
        <BenefitItem icon={<ActivityIcon />} title="Recreação e Socialização" description="Atividades que estimulam a mente, o corpo e os laços." />
        <BenefitItem icon={<i className="fas fa-hand-holding-heart"></i>} title="Suporte Emocional" description="Apoio psicológico para uma vida mais serena." />
        <BenefitItem icon={<i className="fas fa-walking"></i>} title="Independência Assistida" description="Autonomia com a segurança de ter ajuda sempre por perto." />
        <BenefitItem icon={<SecurityIcon />} title="Segurança 24h" description="Monitoramento e equipe preparada para qualquer situação." />
      </div>
    </SlideLayout>
  );
};
