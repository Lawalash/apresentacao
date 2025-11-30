
import React from 'react';
import { SlideLayout } from '../components/SlideLayout';

const photos = [
  { id: 1, seed: 'room1', alt: 'Quarto organizado e iluminado' },
  { id: 2, seed: 'livingroom', alt: 'Área de convivência' },
  { id: 3, seed: 'garden', alt: 'Jardim ou área externa' },
  { id: 4, seed: 'room2', alt: 'Outro quarto' },
];

export const Slide08: React.FC = () => {
  return (
    <SlideLayout title="Estrutura e Galeria de Fotos">
        <div className="h-full flex flex-col justify-center">
          <p className="text-xl text-slate-600 mb-8 text-center">Um espaço pensado em cada detalhe para o conforto, segurança e bem-estar.</p>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[70%]">
              {photos.map(photo => (
                  <div key={photo.id} className="rounded-lg overflow-hidden shadow-lg group">
                      <img 
                          src={`https://picsum.photos/seed/${photo.seed}/800/600`} 
                          alt={photo.alt}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                      />
                  </div>
              ))}
          </div>
          <p className="text-sm text-slate-500 mt-4 text-center">* As fotos serão substituídas por imagens reais do local.</p>
        </div>
    </SlideLayout>
  );
};
