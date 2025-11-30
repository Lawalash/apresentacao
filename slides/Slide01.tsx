
import React from 'react';

export const Slide01: React.FC = () => {
  return (
    <div className="relative w-full h-full overflow-hidden text-white bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-800">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=80"
          alt="Equipe acolhendo idosos"
          className="w-full h-full object-cover opacity-70 mix-blend-overlay"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-800/70 via-slate-900/80 to-sky-900/70"></div>
      <div className="absolute -left-24 -top-20 w-80 h-80 bg-emerald-400/25 rounded-full blur-[120px] animate-float"></div>
      <div className="absolute right-[-10%] bottom-[-20%] w-[420px] h-[420px] bg-sky-400/30 rounded-full blur-[140px] animate-float animate-delay-1"></div>

      <div className="relative z-10 h-full grid grid-cols-1 lg:grid-cols-2 gap-10 p-10 lg:p-16 items-center">
        <div className="space-y-6 animate-fade-up">
          <p className="uppercase tracking-[0.35em] text-emerald-100 text-xs">Nova identidade</p>
          <h1 className="text-4xl lg:text-6xl font-playfair font-bold leading-tight">
            Casa Aurora
          </h1>
          <h2 className="text-2xl lg:text-3xl font-semibold text-emerald-100/90">
            Landing page sensível e moderna para um residencial sênior.
          </h2>
          <p className="text-lg lg:text-xl text-slate-200 max-w-xl">
            Uma narrativa visual que traduz cuidado, confiança e proximidade para as famílias que buscam o melhor lugar para seus entes queridos.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-emerald-400 text-slate-950 px-6 py-3 rounded-full font-semibold shadow-lg hover:-translate-y-0.5 transition transform button-glow">
              Ver experiência completa
            </button>
            <button className="border border-emerald-200/60 text-emerald-100 px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition">
              Como vamos encantar as famílias
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:gap-6 animate-fade-up animate-delay-1">
          <div className="glass-card rounded-2xl p-5 text-slate-800">
            <span className="text-sm font-semibold text-emerald-600">Essência</span>
            <h3 className="text-xl font-bold text-slate-900 mt-2">Digital com acolhimento</h3>
            <p className="text-slate-600 mt-2">Landing page que transmite serenidade e mostra a rotina afetuosa da casa.</p>
          </div>
          <div className="glass-card rounded-2xl p-5 text-slate-800">
            <span className="text-sm font-semibold text-sky-600">Interação</span>
            <h3 className="text-xl font-bold text-slate-900 mt-2">Contato imediato</h3>
            <p className="text-slate-600 mt-2">CTA vivo para WhatsApp e agendamentos rápidos, com animações sutis.</p>
          </div>
          <div className="glass-card rounded-2xl p-5 text-slate-800 col-span-2 lg:col-span-1">
            <span className="text-sm font-semibold text-emerald-600">Credibilidade</span>
            <h3 className="text-xl font-bold text-slate-900 mt-2">Transparência</h3>
            <p className="text-slate-600 mt-2">Estrutura, equipe e segurança apresentados de forma calorosa.</p>
          </div>
          <div className="glass-card rounded-2xl p-5 text-slate-800 col-span-2 lg:col-span-1">
            <span className="text-sm font-semibold text-sky-600">Imersão</span>
            <h3 className="text-xl font-bold text-slate-900 mt-2">Experiência visual</h3>
            <p className="text-slate-600 mt-2">Fotografia humanizada e microinterações que guiam a jornada.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
