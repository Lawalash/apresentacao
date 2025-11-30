
import React from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { WhatsAppIcon } from '../components/icons';

export const Slide05: React.FC = () => {
  return (
    <SlideLayout title="Apresentação da Landing Page">
      <div className="w-full h-full bg-slate-200 rounded-lg p-4 flex flex-col shadow-inner">
        {/* Browser Chrome */}
        <div className="flex-shrink-0 bg-slate-300 rounded-t-md p-2 flex items-center gap-2">
          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
        </div>
        
        {/* Page Content */}
        <div className="flex-grow bg-white overflow-y-auto p-4 text-xs text-slate-700">
          <div className="text-center p-6 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="font-semibold text-blue-800">Cabeçalho com Navegação</p>
          </div>
          
          <div className="text-center p-10 my-2 bg-slate-100 rounded-lg">
            <h2 className="font-bold text-lg text-slate-800">“Um lugar seguro, acolhedor e sofisticado para quem você ama.”</h2>
            <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center mx-auto">
                <WhatsAppIcon className="mr-2"/> Fale no WhatsApp
            </button>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">Benefícios</div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">Serviços</div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">Estrutura</div>
            <div className="col-span-3 bg-slate-50 border border-slate-200 rounded-lg p-4 text-center">Galeria de Fotos</div>
            <div className="col-span-2 bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">Texto Institucional</div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">Depoimentos</div>
            <div className="col-span-3 bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-center font-bold">Agendamento de Visita & Contato</div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};
