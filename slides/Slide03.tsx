
import React from 'react';
import { SlideLayout } from '../components/SlideLayout';

export const Slide03: React.FC = () => {
  return (
    <SlideLayout title="O desafio digital hoje">
      <div className="grid lg:grid-cols-3 items-center h-full gap-8">
        <div className="lg:col-span-2 space-y-6 animate-fade-up">
          <h3 className="text-3xl font-bold text-slate-900 leading-tight">
            A jornada da família começa online — e exige confiança imediata.
          </h3>
          <p className="text-lg text-slate-600 max-w-3xl">
            Sem uma presença digital clara e emocionalmente envolvente, a Casa Aurora perde a chance de mostrar acolhimento, equipe e estrutura no primeiro clique.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="glass-card rounded-2xl p-4">
              <p className="text-sm font-semibold text-emerald-700 uppercase tracking-wide">Informação</p>
              <p className="text-slate-600 mt-1">Estrutura e rotina precisam ser explicadas com fotos e microcopys calorosas.</p>
            </div>
            <div className="glass-card rounded-2xl p-4">
              <p className="text-sm font-semibold text-sky-700 uppercase tracking-wide">Confiança</p>
              <p className="text-slate-600 mt-1">Diferenciais e protocolos de segurança em destaque para gerar tranquilidade.</p>
            </div>
            <div className="glass-card rounded-2xl p-4">
              <p className="text-sm font-semibold text-amber-700 uppercase tracking-wide">Contato</p>
              <p className="text-slate-600 mt-1">CTA imediato para agendar visita e falar no WhatsApp com animação sutil.</p>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-1 h-full flex items-center justify-center animate-fade-up animate-delay-1">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-amber-100 to-sky-100 rounded-3xl blur-3xl"></div>
          <div className="relative glass-card rounded-2xl p-6 shadow-xl text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-rose-100 text-rose-500 flex items-center justify-center">
              <i className="fas fa-search-minus text-3xl"></i>
            </div>
            <p className="text-lg font-semibold text-slate-900">Sem landing page dedicada</p>
            <p className="text-slate-600 mt-2">Perde-se a primeira impressão e a chance de converter em visitas presenciais.</p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};
