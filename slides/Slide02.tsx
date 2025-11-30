import React from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { HeartIcon } from '../components/icons';
import './Slide02.css';

export const Slide02: React.FC = () => {
  return (
    <SlideLayout title="Quem é a A2 Data?">
      <div className="slide02__content">
        <div className="animate-fade-up">
          <h3 className="slide02__headline">Consultoria e tecnologia para transformar negócios com dados e automação.</h3>
          <p className="slide02__text">
            A A2 Data Consultoria e Tecnologia é especialista em soluções digitais sob medida para pequenas e médias empresas.
            Criamos sistemas, dashboards, sites profissionais e processos automatizados com foco em eficiência, simplicidade e
            vantagem competitiva.
          </p>

          <div className="slide02__cards">
            <div className="glass-card slide02__card">
              <div className="slide02__badge">
                <HeartIcon />
              </div>
              <div>
                <p className="slide02__card-title">Eficiência real</p>
                <p className="slide02__card-text">Automação para reduzir tarefas manuais e liberar tempo do time.</p>
              </div>
            </div>
            <div className="glass-card slide02__card">
              <div className="slide02__badge slide02__badge--alt">
                <HeartIcon />
              </div>
              <div>
                <p className="slide02__card-title">Produtos sob medida</p>
                <p className="slide02__card-text">Ferramentas personalizadas que acompanham a estratégia do cliente.</p>
              </div>
            </div>
          </div>

          <div className="slide02__metrics">
            <div>
              <p className="slide02__metric-label">Foco em PMEs</p>
              <p className="slide02__metric-value">Crescimento com tecnologia</p>
            </div>
            <div>
              <p className="slide02__metric-label">Resultados práticos</p>
              <p className="slide02__metric-value">Simplicidade e agilidade</p>
            </div>
          </div>
        </div>

        <div className="slide02__image-wrapper animate-fade-up animate-delay-1">
          <img
            className="slide02__image"
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
            alt="Profissionais colaborando"
          />
          <div className="slide02__image-label">Tecnologia + estratégia em um só time</div>
        </div>
      </div>
    </SlideLayout>
  );
};
