
import React from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { HeartIcon } from '../components/icons';

export const Slide02: React.FC = () => {
  return (
    <SlideLayout title="Sobre a Casa Aurora">
      <div className="grid lg:grid-cols-2 gap-10 h-full items-center">
        <div className="space-y-6 animate-fade-up">
          <h3 className="text-4xl font-bold text-slate-900 font-playfair leading-tight">
            Um lar feito de calma, afeto e tecnologia a favor do cuidado.
          </h3>
          <p className="text-lg text-slate-600 max-w-3xl">
            A Casa Aurora é um residencial sênior que coloca as relações humanas no centro. A nova landing page traz uma estética serena, calls-to-action claros e uma navegação que acolhe famílias desde o primeiro scroll.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="glass-card rounded-2xl p-4 flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <HeartIcon />
              </div>
              <div>
                <p className="text-sm font-semibold text-emerald-700 uppercase tracking-wide">Humanização</p>
                <p className="text-slate-600 text-base">Rotina registrada com fotos reais e depoimentos em primeira pessoa.</p>
              </div>
            </div>
            <div className="glass-card rounded-2xl p-4 flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center">
                <HeartIcon />
              </div>
              <div>
                <p className="text-sm font-semibold text-sky-700 uppercase tracking-wide">Praticidade</p>
                <p className="text-slate-600 text-base">CTA fixo para WhatsApp e tour virtual da estrutura física.</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-8 pt-2">
            <div>
              <p className="text-sm text-slate-500">Equipe multidisciplinar</p>
              <p className="text-3xl font-bold text-slate-900">24h</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">Vagas com atendimento personalizado</p>
              <p className="text-3xl font-bold text-slate-900">limitadas</p>
            </div>
          </div>
        </div>
        <div className="relative h-[70%] rounded-2xl overflow-hidden shadow-2xl animate-fade-up animate-delay-1">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-sky-500/20"></div>
          <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80" alt="Idosos sorrindo" className="w-full h-full object-cover" />
          <div className="absolute bottom-4 right-4 px-4 py-2 rounded-full bg-white/80 text-slate-800 text-sm font-semibold shadow">
            Residencial sênior de portas abertas
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};
