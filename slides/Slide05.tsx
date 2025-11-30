import React from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { WhatsAppIcon } from '../components/icons';

export const Slide05: React.FC = () => {
  return (
    <SlideLayout title="Obrigado!">
      <div className="w-full h-full grid lg:grid-cols-2 gap-8 items-center">
        <div className="glass-card rounded-2xl p-6 lg:p-8 shadow-2xl bg-gradient-to-br from-white/90 to-[#f2f6fb] animate-fade-up">
          <div className="flex items-center gap-3 text-[#043959]">
            <div className="w-12 h-12 rounded-full bg-[#466fa6]/15 flex items-center justify-center text-2xl">🤝</div>
            <div>
              <p className="text-sm uppercase tracking-wide font-semibold">Seguimos juntos</p>
              <p className="text-xl font-bold">Prontos para colocar o site no ar</p>
            </div>
          </div>
          <p className="text-slate-700 mt-4 text-lg">
            A A2 Data agradece a confiança. Vamos criar uma presença digital que represente todo o carinho da ILPI Aconchego dos Avós.
          </p>
          <div className="mt-6 grid md:grid-cols-2 gap-4 text-sm text-[#043959]">
            {["Entrega guiada e suportada.", "Monitoramento pós-lançamento.", "Ajustes rápidos conforme feedback.", "Equipe acessível em canais diretos."].map((item) => (
              <div key={item} className="flex items-center gap-2 bg-white/80 rounded-xl px-3 py-2 shadow-sm border border-[#8ea3bf]/25">
                <i className="fas fa-sparkles text-[#466fa6]"></i>
                <span className="text-left text-slate-700">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="bg-[#466fa6] text-white px-5 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg button-glow">
              <WhatsAppIcon /> Conversar agora
            </button>
            <button className="border border-[#466fa6]/40 text-[#043959] px-5 py-3 rounded-full font-semibold hover:bg-[#466fa6]/10 transition">
              Ver cronograma
            </button>
          </div>
        </div>
        <div className="relative h-full bg-gradient-to-br from-[#043959] via-[#0b4f75] to-[#466fa6] rounded-3xl overflow-hidden shadow-2xl animate-fade-up animate-delay-1">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.14),transparent_36%),radial-gradient(circle_at_80%_70%,rgba(142,163,191,0.3),transparent_45%)]"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-10 gap-4">
            <p className="uppercase tracking-[0.3em] text-sm text-[#d5e2ff]">Até breve</p>
            <h3 className="text-3xl lg:text-4xl font-playfair font-bold">Prontos para encantar famílias online</h3>
            <p className="text-lg text-[#e7edf7] max-w-xl">Design dinâmico, tecnologia estável e mensuração contínua para gerar confiança desde o primeiro clique.</p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};
