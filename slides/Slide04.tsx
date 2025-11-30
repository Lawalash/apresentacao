import React from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { CheckCircleIcon } from '../components/icons';
import './Slide04.css';

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
      <div className="slide04__grid animate-fade-up">
        <section className="slide04__main">
          <header className="slide04__header">
            <p className="slide04__eyebrow">Apresentação</p>
            <h3 className="slide04__title">Proposta Comercial – ILPI Aconchego dos Avós</h3>
            <p className="slide04__text">Valores claros e diluídos para facilitar a contratação e a sustentação do projeto.</p>
            <div className="slide04__totals">
              <div className="slide04__total-card">
                <p className="text-xs uppercase tracking-[0.14em] font-semibold">Valor total do projeto</p>
                <p className="slide04__value">R$ 800,00</p>
                <p className="text-sm text-white/80">Pagamento dividido para acompanhar a implantação sem pesar no caixa.</p>
              </div>
              <div className="slide04__installments">
                <p className="slide04__installments-title">Pagamento recorrente</p>
                <p className="slide04__installments-value">{recorrente.valor}</p>
                <p className="slide04__installments-text">{recorrente.detalhe}</p>
              </div>
            </div>
          </header>

          <div className="slide04__costs">
            {custosIniciais.map((item, index) => (
              <div key={item.titulo} className="slide04__cost-card">
                <div className="flex items-start gap-4 relative">
                  <div className="slide04__cost-number">0{index + 1}</div>
                  <div className="flex-1 space-y-1">
                    <p className="slide04__cost-title">{item.titulo}</p>
                    <p className="slide04__cost-text">{item.detalhe}</p>
                    <span className="slide04__cost-pill">
                      <span className="w-2 h-2 rounded-full bg-[#8ea3bf] animate-ping" aria-hidden></span>
                      {item.valor}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <aside className="slide04__sidebar animate-fade-up animate-delay-1">
          <div className="slide04__card">
            <p className="slide04__card-title">Manutenções e ajustes</p>
            <div className="slide04__maintenance">
              {manutencao.map((info) => (
                <div key={info} className="slide04__maintenance-item">
                  <CheckCircleIcon className="text-[#466fa6] text-xl" />
                  <span className="text-slate-700">{info}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="slide04__flow">
            <p className="text-sm uppercase tracking-[0.14em] font-semibold">Fluxo simplificado</p>
            <p className="slide04__flow-text">Entrega, publicação e início da cobrança alinhados à data de go-live para manter previsibilidade.</p>
            <div className="slide04__flow-tags">
              <div className="slide04__flow-tag">Entrega e publicação</div>
              <div className="slide04__flow-tag">Cobrança após go-live</div>
            </div>
          </div>
        </aside>
      </div>
    </SlideLayout>
  );
};
