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
      <div className="grid lg:grid-cols-2 h-full gap-10 items-start">
        <div className="space-y-4 animate-fade-up">
          <h3 className="text-3xl font-bold text-[#043959]">Proposta Comercial – ILPI Aconchego dos Avós</h3>
          <p className="text-slate-700 text-lg">Valores claros e diluídos para facilitar a contratação e a sustentação do projeto.</p>
          <div className="glass-card rounded-2xl p-5 border border-[#466fa6]/20">
            <p className="text-sm uppercase tracking-wide text-[#043959] font-semibold">Valor total do projeto</p>
            <p className="text-4xl font-bold text-[#043959]">R$ 800,00</p>
            <p className="text-slate-600 mt-2">Pagamento dividido para acompanhar a implantação sem pesar no caixa.</p>
          </div>
          <div className="grid gap-3">
            {custosIniciais.map((item, index) => (
              <div key={item.titulo} className="flex items-start gap-3 bg-[#f7f9fb] border border-[#8ea3bf]/30 rounded-2xl px-4 py-3 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#043959] border border-[#8ea3bf]/40">
                  <span className="font-semibold">0{index + 1}</span>
                </div>
                <div className="flex-1">
                  <p className="text-lg font-semibold text-[#043959]">{item.titulo}</p>
                  <p className="text-sm text-slate-600">{item.detalhe}</p>
                </div>
                <span className="text-[#043959] font-bold">{item.valor}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5 animate-fade-up animate-delay-1">
          <div className="glass-card rounded-2xl p-5 border border-[#466fa6]/20">
            <p className="text-sm uppercase tracking-wide text-[#043959] font-semibold">Pagamento recorrente</p>
            <p className="text-3xl font-bold text-[#043959]">{recorrente.valor}</p>
            <p className="text-slate-600 mt-1">{recorrente.detalhe}</p>
          </div>
          <div className="glass-card rounded-2xl p-5 border border-[#466fa6]/20">
            <p className="text-sm uppercase tracking-wide text-[#043959] font-semibold">Manutenções e ajustes</p>
            <div className="mt-3 space-y-3">
              {manutencao.map((info) => (
                <div key={info} className="flex items-center gap-3 bg-white/70 rounded-xl px-3 py-2 border border-[#8ea3bf]/30">
                  <CheckCircleIcon className="text-[#466fa6] text-xl" />
                  <span className="text-slate-700">{info}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-r from-[#466fa6] to-[#8ea3bf] text-white rounded-2xl p-5 shadow-lg">
            <p className="text-sm uppercase tracking-wide font-semibold">Fluxo simplificado</p>
            <p className="text-lg mt-1">Entrega, publicação e início da cobrança alinhados à data de go-live para manter previsibilidade.</p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};
