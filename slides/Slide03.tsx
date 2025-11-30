import React from 'react';
import { SlideLayout } from '../components/SlideLayout';
import './Slide03.css';

export const Slide03: React.FC = () => {
  return (
    <SlideLayout title="Proposta do site">
      <div className="slide03__content">
        <div className="animate-fade-up">
          <h3 className="slide03__headline">Uma landing page moderna, acolhedora e orientada à conversão para a ILPI Aconchego dos Avós.</h3>
          <p className="slide03__text">
            Estruturamos a página para transmitir confiança imediata, reforçar cuidados humanizados e simplificar o contato. O design usa
            nossos tons de azul com animações sutis para guiar a jornada.
          </p>
          <div className="slide03__pillars">
            {[{ label: 'Eficiência', desc: 'CTA fixo e acesso rápido ao WhatsApp e agendamento.' }, { label: 'Automação', desc: 'Formulários inteligentes e integrações para responder rápido.' }, { label: 'Personalização', desc: 'Conteúdo e seções destacando diferenciais reais da casa.' }].map((item) => (
              <div key={item.label} className="glass-card slide03__pillar">
                <p className="slide03__pillar-title">{item.label}</p>
                <p className="slide03__pillar-text">{item.desc}</p>
              </div>
            ))}
          </div>
          <a href="http://localhost:5173/" className="slide03__cta button-glow">
            Ver mockup ao vivo
            <span>localhost:5173</span>
          </a>
        </div>

        <div className="slide03__panel animate-fade-up animate-delay-1">
          <div className="slide03__panel-card glass-card">
            <div className="slide03__panel-icon">
              <i className="fas fa-laptop"></i>
            </div>
            <p className="slide03__panel-title">Experiência pronta para navegar</p>
            <p className="slide03__panel-text">Link direto para o protótipo funcional com transições suaves e CTAs em destaque.</p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};
