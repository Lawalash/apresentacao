import React from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { CheckCircleIcon } from '../components/icons';

export const Slide04: React.FC = () => {
  const custosIniciais = [
    {
      titulo: 'Hospedagem Hostgator (1 ano)',
      valor: 'R$ 118,75',
      detalhe: 'Pagamento único para colocar o site no ar.',
    },
    {
      titulo: 'Taxa de Implantação (35%)',
      valor: 'R$ 240,00',
      detalhe: 'Ativação, configuração, publicação e integrações.',
    },
  ];

  const recorrente = {
    titulo: 'Desenvolvimento',
    valor: '10x de R$ 80,00',
    detalhe: 'Parcelas iniciam após entrega em produção.',
  };

  const manutencao = [
    'Ajustes futuros precificados por complexidade.',
    'Possibilidade de pagamento único ou distribuído nas parcelas restantes.',
  ];

  return (
    <SlideLayout title="Investimento e condições">
      <div className="grid lg:grid-cols-12 gap-6 h-full animate-fade-up">
        <section className="lg:col-span-7 space-y-4">
          <header className="rounded-3xl bg-white/85 border border-[#8ea3bf]/40 shadow-xl p-6 lg:p-8 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#466fa6]">Apresentação</p>
            <h3 className="text-3xl font-extrabold text-[#043959] mt-2">Proposta Comercial – ILPI Aconchego dos Avós</h3>
            <p className="text-slate-700 text-lg mt-3">Valores claros e diluídos para facilitar a contratação e a sustentação do projeto.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-gradient-to-br from-[#043959] via-[#466fa6] to-[#8ea3bf] text-white p-5 shadow-lg animate-float">
                <p className="text-xs uppercase tracking-[0.14em] font-semibold">Valor total do projeto</p>
                <p className="text-4xl font-black mt-2">R$ 800,00</p>
                <p className="text-sm text-white/80 mt-2">Pagamento dividido para acompanhar a implantação sem pesar no caixa.</p>
              </div>
              <div className="rounded-2xl bg-white/80 border border-[#8ea3bf]/50 p-5 shadow-md">
                <p className="text-xs uppercase tracking-[0.14em] font-semibold text-[#466fa6]">Pagamento recorrente</p>
                <p className="text-3xl font-bold text-[#043959] mt-1">{recorrente.valor}</p>
                <p className="text-slate-600 mt-1">{recorrente.detalhe}</p>
              </div>
            </div>
          </header>

          <div className="grid md:grid-cols-2 gap-4">
            {custosIniciais.map((item, index) => (
              <div
                key={item.titulo}
                className="group relative overflow-hidden rounded-2xl border border-[#8ea3bf]/40 bg-white/80 p-5 shadow-lg backdrop-blur"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#466fa6]/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#f7f9fb] flex items-center justify-center text-[#043959] font-bold border border-[#8ea3bf]/50 animate-float">
                    0{index + 1}
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-lg font-semibold text-[#043959]">{item.titulo}</p>
                    <p className="text-sm text-slate-600">{item.detalhe}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#466fa6] bg-[#e8eef7] px-3 py-1 rounded-full">
                      <span className="w-2 h-2 rounded-full bg-[#8ea3bf] animate-ping" aria-hidden></span>
                      {item.valor}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <aside className="lg:col-span-5 space-y-4 animate-fade-up animate-delay-1">
          <div className="rounded-3xl bg-white/85 border border-[#8ea3bf]/40 p-6 shadow-xl backdrop-blur">
            <p className="text-sm uppercase tracking-[0.12em] font-semibold text-[#466fa6]">Manutenções e ajustes</p>
            <div className="mt-4 space-y-3">
              {manutencao.map((info) => (
                <div
                  key={info}
                  className="flex items-center gap-3 rounded-xl bg-[#f7f9fb] border border-[#8ea3bf]/30 px-4 py-3 shadow-sm transition transform hover:-translate-y-1 hover:shadow-lg"
                >
                  <CheckCircleIcon className="text-[#466fa6] text-xl" />
                  <span className="text-slate-700">{info}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-3xl bg-gradient-to-r from-[#466fa6] to-[#8ea3bf] text-white p-6 shadow-2xl overflow-hidden">
            <div className="absolute right-6 -top-8 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-float" aria-hidden></div>
            <p className="text-sm uppercase tracking-[0.14em] font-semibold">Fluxo simplificado</p>
            <p className="text-lg mt-2 leading-relaxed">Entrega, publicação e início da cobrança alinhados à data de go-live para manter previsibilidade.</p>
            <div className="mt-4 grid sm:grid-cols-2 gap-3 text-sm text-white/90">
              <div className="rounded-xl bg-white/10 border border-white/20 px-3 py-2 backdrop-blur-sm">Entrega e publicação</div>
              <div className="rounded-xl bg-white/10 border border-white/20 px-3 py-2 backdrop-blur-sm">Cobrança após go-live</div>
            </div>
          </div>
        </aside>
      </div>
    </SlideLayout>
  );
};
