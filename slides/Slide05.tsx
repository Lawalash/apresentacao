import React from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { WhatsAppIcon } from '../components/icons';
import './Slide05.css';

export const Slide05: React.FC = () => {
  return (
    <SlideLayout title="Obrigado!">
      <div className="slide05__grid">
        <div className="glass-card slide05__card animate-fade-up">
          <div className="slide05__header">
            <div className="slide05__icon">🤝</div>
            <div>
              <p className="slide05__eyebrow">Seguimos juntos</p>
              <p className="slide05__title">Prontos para colocar o site no ar</p>
            </div>
          </div>
          <p className="slide05__text">
            A A2 Data agradece a confiança. Vamos criar uma presença digital que represente todo o carinho da ILPI Aconchego dos Avós.
          </p>
          <div className="slide05__bullets">
            {["Entrega guiada e suportada.", "Monitoramento pós-lançamento.", "Ajustes rápidos conforme feedback.", "Equipe acessível em canais diretos."].map((item) => (
              <div key={item} className="slide05__bullet">
                <i className="fas fa-sparkles text-[#466fa6]"></i>
                <span className="text-left text-slate-700">{item}</span>
              </div>
            ))}
          </div>
          <div className="slide05__actions">
            <button className="slide05__cta button-glow">
              <WhatsAppIcon /> Conversar agora
            </button>
            <button className="slide05__secondary">Ver cronograma</button>
          </div>
        </div>
        <div className="slide05__panel animate-fade-up animate-delay-1">
          <div className="slide05__panel-content">
            <p className="slide05__panel-tag">Até breve</p>
            <h3 className="slide05__panel-title">Prontos para encantar famílias online</h3>
            <p className="slide05__panel-text">Design dinâmico, tecnologia estável e mensuração contínua para gerar confiança desde o primeiro clique.</p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};
