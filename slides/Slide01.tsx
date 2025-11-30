import React from 'react';
import './Slide01.css';

export const Slide01: React.FC = () => {
  return (
    <div className="slide01">
      <div className="slide01__radials" aria-hidden></div>
      <div className="slide01__halo-primary" aria-hidden></div>
      <div className="slide01__halo-secondary" aria-hidden></div>

      <div className="slide01__content">
        <div className="animate-fade-up">
          <p className="slide01__tag">Apresentação</p>
          <h1 className="slide01__title">ILPI Aconchego dos Avós</h1>
          <h2 className="slide01__subtitle">
            Landing page moderna criada pela A2 Data para uma experiência digital acolhedora.
          </h2>
          <p className="slide01__description">
            Nova identidade com animações suaves, contraste sofisticado e narrativa que apresenta a casa de forma humana, segura e
            clara.
          </p>
          <div className="slide01__actions">
            <a href="#" className="slide01__primary button-glow">
              Começar o tour
            </a>
            <button className="slide01__secondary">Como evoluímos o digital</button>
          </div>
        </div>

        <div className="slide01__cards animate-fade-up animate-delay-1">
          <div className="glass-card slide01__card p-5">
            <span className="text-sm font-semibold text-[#466fa6]">Visual</span>
            <h3 className="slide01__card-title">Capa viva</h3>
            <p className="slide01__card-text">Gradientes dinâmicos, tipografia editorial e luz suave para destacar a marca.</p>
          </div>
          <div className="glass-card slide01__card p-5">
            <span className="text-sm font-semibold text-[#043959]">Experiência</span>
            <h3 className="slide01__card-title">Navegação fluida</h3>
            <p className="slide01__card-text">Microinterações e botões destacados para uma jornada intuitiva.</p>
          </div>
          <div className="glass-card slide01__card p-5 lg:col-span-1 col-span-2">
            <span className="text-sm font-semibold text-[#466fa6]">Conteúdo</span>
            <h3 className="slide01__card-title">Mensagem humana</h3>
            <p className="slide01__card-text">História centrada no cuidado familiar e na rotina acolhedora da casa.</p>
          </div>
          <div className="glass-card slide01__card p-5 lg:col-span-1 col-span-2">
            <span className="text-sm font-semibold text-[#043959]">Ação</span>
            <h3 className="slide01__card-title">CTA chamativo</h3>
            <p className="slide01__card-text">Contato imediato e destaque para agendamento de visita.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
