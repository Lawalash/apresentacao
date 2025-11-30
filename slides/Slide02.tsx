import React from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { HeartIcon } from '../components/icons';

export const Slide02: React.FC = () => {
  return (
    <SlideLayout title="Quem é a A2 Data?">
      <div className="grid lg:grid-cols-2 gap-10 h-full items-center">
        <div className="space-y-6 animate-fade-up">
          <h3 className="text-4xl font-bold text-[#043959] font-playfair leading-tight">
            Consultoria e tecnologia para transformar negócios com dados e automação.
          </h3>
          <p className="text-lg text-slate-700 max-w-3xl">
            A A2 Data Consultoria e Tecnologia é especialista em soluções digitais sob medida para pequenas e médias empresas.
            Criamos sistemas, dashboards, sites profissionais e processos automatizados com foco em eficiência, simplicidade e vantagem competitiva.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="glass-card rounded-2xl p-4 flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#8ea3bf]/25 text-[#043959] flex items-center justify-center">
                <HeartIcon />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#043959] uppercase tracking-wide">Eficiência real</p>
                <p className="text-slate-600 text-base">Automação para reduzir tarefas manuais e liberar tempo do time.</p>
              </div>
            </div>
            <div className="glass-card rounded-2xl p-4 flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#466fa6]/20 text-[#043959] flex items-center justify-center">
                <HeartIcon />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#043959] uppercase tracking-wide">Produtos sob medida</p>
                <p className="text-slate-600 text-base">Ferramentas personalizadas que acompanham a estratégia do cliente.</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-8 pt-2 text-[#043959]">
            <div>
              <p className="text-sm text-slate-500">Foco em PMEs</p>
              <p className="text-3xl font-bold">Crescimento com tecnologia</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">Resultados práticos</p>
              <p className="text-3xl font-bold">Simplicidade e agilidade</p>
            </div>
          </div>
        </div>
        <div className="relative h-[70%] rounded-2xl overflow-hidden shadow-2xl animate-fade-up animate-delay-1">
          <div className="absolute inset-0 bg-gradient-to-br from-[#466fa6]/25 to-[#8ea3bf]/25"></div>
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
            alt="Profissionais colaborando"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 right-4 px-4 py-2 rounded-full bg-white/85 text-[#043959] text-sm font-semibold shadow">
            Tecnologia + estratégia em um só time
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};
