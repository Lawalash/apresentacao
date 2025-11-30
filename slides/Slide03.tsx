import React from 'react';
import { SlideLayout } from '../components/SlideLayout';

export const Slide03: React.FC = () => {
  return (
    <SlideLayout title="Proposta do site">
      <div className="grid lg:grid-cols-3 items-center h-full gap-8">
        <div className="lg:col-span-2 space-y-6 animate-fade-up">
          <h3 className="text-3xl font-bold text-[#043959] leading-tight">
            Uma landing page moderna, acolhedora e orientada à conversão para a ILPI Aconchego dos Avós.
          </h3>
          <p className="text-lg text-slate-700 max-w-3xl">
            Estruturamos a página para transmitir confiança imediata, reforçar cuidados humanizados e simplificar o contato.
            O design usa nossos tons de azul com animações sutis para guiar a jornada.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                label: 'Eficiência',
                desc: 'CTA fixo e acesso rápido ao WhatsApp e agendamento.',
              },
              {
                label: 'Automação',
                desc: 'Formulários inteligentes e integrações para responder rápido.',
              },
              {
                label: 'Personalização',
                desc: 'Conteúdo e seções destacando diferenciais reais da casa.',
              },
            ].map((item) => (
              <div key={item.label} className="glass-card rounded-2xl p-4 border border-[#466fa6]/15">
                <p className="text-sm font-semibold text-[#043959] uppercase tracking-wide">{item.label}</p>
                <p className="text-slate-600 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
          <a
            href="http://localhost:5173/"
            className="inline-flex items-center gap-3 bg-[#466fa6] text-white px-5 py-3 rounded-full font-semibold shadow-lg hover:-translate-y-0.5 transition button-glow"
          >
            Ver mockup ao vivo
            <span className="text-sm bg-white/20 px-3 py-1 rounded-full">localhost:5173</span>
          </a>
        </div>
        <div className="relative lg:col-span-1 h-full flex items-center justify-center animate-fade-up animate-delay-1">
          <div className="absolute inset-0 bg-gradient-to-br from-[#8ea3bf]/35 via-white/10 to-[#466fa6]/25 rounded-3xl blur-3xl"></div>
          <div className="relative glass-card rounded-2xl p-6 shadow-xl text-center border border-white/40">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#466fa6]/20 text-[#043959] flex items-center justify-center">
              <i className="fas fa-laptop text-3xl"></i>
            </div>
            <p className="text-lg font-semibold text-[#043959]">Experiência pronta para navegar</p>
            <p className="text-slate-600 mt-2">Link direto para o protótipo funcional com transições suaves e CTAs em destaque.</p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};
