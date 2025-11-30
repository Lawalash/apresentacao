
import React from 'react';
import { SlideLayout } from '../components/SlideLayout';

export const Slide13: React.FC = () => {
  return (
    <SlideLayout title="Investimento">
      <div className="h-full flex flex-col items-center justify-center">
        <p className="text-xl text-slate-600 mb-8 max-w-2xl text-center">
          Um investimento único na construção de um ativo digital que trabalhará para você 24 horas por dia, conectando seu lar a novas famílias.
        </p>
        <div className="w-full max-w-2xl bg-white shadow-xl rounded-lg overflow-hidden border border-blue-100">
          <table className="w-full text-left text-lg">
            <thead>
              <tr className="bg-blue-50">
                <th className="p-4 font-bold text-blue-800">Serviço Incluso</th>
                <th className="p-4 font-bold text-blue-800 text-right">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-blue-100">
                <td className="p-4 text-slate-700">Desenvolvimento da Landing Page</td>
                <td className="p-4 text-green-600 font-bold text-right">Incluso</td>
              </tr>
              <tr className="bg-slate-50 border-b border-blue-100">
                <td className="p-4 text-slate-700">Copywriting Humanizado e Persuasivo</td>
                <td className="p-4 text-green-600 font-bold text-right">Incluso</td>
              </tr>
              <tr className="border-b border-blue-100">
                <td className="p-4 text-slate-700">Criação Visual e Design Moderno</td>
                <td className="p-4 text-green-600 font-bold text-right">Incluso</td>
              </tr>
               <tr className="bg-slate-50 border-b border-blue-100">
                <td className="p-4 text-slate-700">Implementação Técnica e Hospedagem</td>
                <td className="p-4 text-green-600 font-bold text-right">Incluso</td>
              </tr>
              <tr className="border-b border-blue-100">
                <td className="p-4 text-slate-700">Otimização de Performance (SEO Básico)</td>
                <td className="p-4 text-green-600 font-bold text-right">Incluso</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="p-4 text-slate-700">Entrega + Suporte Inicial</td>
                <td className="p-4 text-green-600 font-bold text-right">Incluso</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </SlideLayout>
  );
};
