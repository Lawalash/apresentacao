
import React from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { CheckCircleIcon } from '../components/icons';

export const Slide04: React.FC = () => {
  return (
    <SlideLayout title="A oportunidade de encantamento">
       <div className="grid lg:grid-cols-2 h-full gap-10 items-center">
        <div className="relative h-[70%] rounded-2xl overflow-hidden shadow-2xl animate-fade-up">
           <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/15 via-white/5 to-sky-500/20"></div>
           <img src="https://images.unsplash.com/photo-1530023367847-a683933f4177?auto=format&fit=crop&w=1200&q=80" alt="Mockup de site" className="w-full h-full object-cover" />
           <div className="absolute top-4 left-4 bg-white/85 text-slate-800 px-4 py-2 rounded-full text-xs font-semibold shadow">
             Prototipagem de landing page
           </div>
        </div>
        <div className="flex flex-col justify-center space-y-6 animate-fade-up animate-delay-1">
          <h3 className="text-3xl font-bold text-slate-900">
            Landing page viva, moderna e pensada para a decisão da família.
          </h3>
          <div className="grid gap-3">
            {["Mostra credibilidade do lar e da equipe.", "Aumenta visitas agendadas com CTAs sempre visíveis.", "Gera confiança imediata com transparência.", "Apresenta serviços, rotina e galeria real.", "Facilita contato via WhatsApp e formulário inteligente."].map((text, index) => (
              <div key={text} className="flex items-center gap-3 bg-emerald-50 border border-emerald-100 rounded-2xl px-4 py-3 shadow-sm">
                <CheckCircleIcon className="text-emerald-500 text-xl" />
                <span className="text-slate-700 text-lg">{text}</span>
                <span className="ml-auto text-xs uppercase tracking-wide text-emerald-600">0{index + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};
