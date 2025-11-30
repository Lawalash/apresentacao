
import React from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { WhatsAppIcon } from '../components/icons';

export const Slide05: React.FC = () => {
  return (
    <SlideLayout title="Apresentação da Landing Page">
      <div className="w-full h-full glass-card rounded-2xl p-6 lg:p-8 shadow-2xl">
        <div className="h-full bg-slate-900 rounded-2xl overflow-hidden shadow-xl">
          {/* Browser Chrome */}
          <div className="flex-shrink-0 bg-slate-800/80 backdrop-blur p-3 flex items-center gap-2 text-slate-200">
            <div className="w-3 h-3 bg-rose-400 rounded-full"></div>
            <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
            <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
            <span className="ml-3 text-xs tracking-wide uppercase">Landing page Casa Aurora</span>
          </div>

          {/* Page Content */}
          <div className="flex-grow bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 lg:p-10 text-slate-100 grid lg:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-flex items-center gap-2 bg-emerald-500/15 text-emerald-200 px-3 py-1 rounded-full text-xs uppercase tracking-wide">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                Hero & CTA vivo
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold leading-tight">
                “Um lugar seguro, acolhedor e sofisticado para quem você ama.”
              </h2>
              <p className="text-slate-300 max-w-xl">
                Cabeçalho compacto com navegação, CTA fixo para WhatsApp e âncora de agendamento. Microanimações reforçam confiança e sensação de cuidado.
              </p>
              <button className="self-start bg-emerald-400 text-slate-900 px-5 py-2 rounded-full font-semibold flex items-center gap-2 shadow-lg button-glow">
                  <WhatsAppIcon /> Fale no WhatsApp
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 lg:gap-4 text-sm">
              {[
                'Benefícios com cards animados',
                'Serviços e diferenciais',
                'Estrutura em fotos reais',
                'Galeria de momentos',
                'Texto institucional curto',
                'Depoimentos em destaque',
                'Agendamento de visita',
                'Botão flutuante de contato'
              ].map((item) => (
                <div key={item} className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 shadow-sm flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-400/30 flex items-center justify-center text-emerald-100">
                    <i className="fas fa-sparkles"></i>
                  </div>
                  <span className="text-slate-100 text-left">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};
