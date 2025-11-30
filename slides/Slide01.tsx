import React from 'react';

export const Slide01: React.FC = () => {
  return (
    <div className="relative w-full h-full overflow-hidden text-white bg-gradient-to-br from-[#031e2e] via-[#043959] to-[#0b4f75]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(70,111,166,0.35),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(142,163,191,0.28),transparent_42%),radial-gradient(circle_at_60%_80%,rgba(255,255,255,0.08),transparent_45%)]"></div>
      <div className="absolute -left-10 -top-10 w-72 h-72 bg-[#466fa6]/30 rounded-full blur-[140px] animate-float" aria-hidden></div>
      <div className="absolute right-[-12%] bottom-[-18%] w-[430px] h-[430px] bg-[#8ea3bf]/28 rounded-full blur-[160px] animate-float animate-delay-1" aria-hidden></div>

      <div className="relative z-10 h-full grid lg:grid-cols-2 gap-10 p-10 lg:p-16 items-center">
        <div className="space-y-5 animate-fade-up">
          <p className="uppercase tracking-[0.35em] text-[#8ea3bf] text-xs">Apresentação</p>
          <h1 className="text-4xl lg:text-6xl font-playfair font-bold leading-tight">
            ILPI Aconchego dos Avós
          </h1>
          <h2 className="text-2xl lg:text-3xl font-semibold text-[#c8d3e3]">
            Landing page moderna criada pela A2 Data para uma experiência digital acolhedora.
          </h2>
          <p className="text-lg lg:text-xl text-[#dfe6f2] max-w-xl">
            Nova identidade com animações suaves, contraste sofisticado e narrativa que apresenta a casa de forma humana, segura e clara.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="bg-white text-[#043959] px-6 py-3 rounded-full font-semibold shadow-lg hover:-translate-y-0.5 transition transform button-glow"
            >
              Começar o tour
            </a>
            <button className="border border-white/60 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition">
              Como evoluímos o digital
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:gap-6 animate-fade-up animate-delay-1">
          <div className="glass-card rounded-2xl p-5 text-[#043959]">
            <span className="text-sm font-semibold text-[#466fa6]">Visual</span>
            <h3 className="text-xl font-bold mt-2">Capa viva</h3>
            <p className="text-slate-600 mt-2">Gradientes dinâmicos, tipografia editorial e luz suave para destacar a marca.</p>
          </div>
          <div className="glass-card rounded-2xl p-5 text-[#043959]">
            <span className="text-sm font-semibold text-[#043959]">Experiência</span>
            <h3 className="text-xl font-bold mt-2">Navegação fluida</h3>
            <p className="text-slate-600 mt-2">Microinterações e botões destacados para uma jornada intuitiva.</p>
          </div>
          <div className="glass-card rounded-2xl p-5 text-[#043959] col-span-2 lg:col-span-1">
            <span className="text-sm font-semibold text-[#466fa6]">Conteúdo</span>
            <h3 className="text-xl font-bold mt-2">Mensagem humana</h3>
            <p className="text-slate-600 mt-2">História centrada no cuidado familiar e na rotina acolhedora da casa.</p>
          </div>
          <div className="glass-card rounded-2xl p-5 text-[#043959] col-span-2 lg:col-span-1">
            <span className="text-sm font-semibold text-[#043959]">Ação</span>
            <h3 className="text-xl font-bold mt-2">CTA chamativo</h3>
            <p className="text-slate-600 mt-2">Contato imediato e destaque para agendamento de visita.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
