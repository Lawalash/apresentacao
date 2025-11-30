
import React from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { NurseIcon, FoodIcon } from '../components/icons';

const services = [
  { name: 'Assistência 24h', icon: <i className="fas fa-clock"></i>, position: 'top-0 left-1/2 -translate-x-1/2' },
  { name: 'Fisioterapia', icon: <i className="fas fa-dumbbell"></i>, position: 'top-1/4 right-0 -translate-y-1/2' },
  { name: 'Enfermagem', icon: <NurseIcon />, position: 'bottom-1/4 right-0 translate-y-1/2' },
  { name: 'Acompanhamento Médico', icon: <i className="fas fa-stethoscope"></i>, position: 'bottom-0 left-1/2 -translate-x-1/2' },
  { name: 'Atividades Diárias', icon: <i className="fas fa-calendar-alt"></i>, position: 'bottom-1/4 left-0 translate-y-1/2' },
  { name: 'Nutrição', icon: <FoodIcon />, position: 'top-1/4 left-0 -translate-y-1/2' },
];

export const Slide07: React.FC = () => {
  return (
    <SlideLayout title="Nossos Serviços">
      <div className="flex h-full items-center justify-center gap-16">
        <div className="w-1/3">
          <img src="https://picsum.photos/seed/teamcare/600/800" alt="Equipe multidisciplinar" className="w-full h-auto object-cover rounded-lg shadow-lg" />
        </div>
        <div className="w-2/3 flex items-center justify-center">
            <div className="relative w-96 h-96">
                <div className="absolute inset-0 border-2 border-dashed border-blue-300 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-8 border border-blue-200 rounded-full"></div>
                <div className="absolute inset-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-center p-4">
                    <span className="text-xl font-bold">Cuidado Integral</span>
                </div>
                {services.map(service => (
                    <div key={service.name} className={`absolute transform ${service.position}`}>
                        <div className="flex flex-col items-center text-center w-28">
                            <div className="bg-white text-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-md mb-2">
                                {service.icon}
                            </div>
                            <span className="font-semibold text-slate-700">{service.name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </SlideLayout>
  );
};
