// src/components/Segmentation.js
import React from 'react';

const Segmentation = () => {
  return (
    <div className="bg-gray-900 py-20 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Segmentação</h2>
        <div className="flex flex-wrap justify-center mb-12">
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <div className="w-48 h-48 bg-gray-700 rounded-full mx-auto flex items-center justify-center border-4 border-dotted border-gray-500">
              <p className="text-xl font-bold">Empresas em crescimento</p>
            </div>
            <p className="text-gray-400 mt-4">Negócios que estão em expansão e precisam de ferramentas robustas</p>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <div className="w-48 h-48 bg-gray-700 rounded-full mx-auto flex items-center justify-center border-4 border-dotted border-gray-500">
              <p className="text-xl font-bold">Empresas que buscam eficiência</p>
            </div>
            <p className="text-gray-400 mt-4">Empresas que procuram otimizar processos financeiros e melhorar a eficiência</p>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <div className="w-48 h-48 bg-gray-700 rounded-full mx-auto flex items-center justify-center border-4 border-dotted border-gray-500">
              <p className="text-xl font-bold">Empresas orientadas por dados</p>
            </div>
            <p className="text-gray-400 mt-4">Negócios que valorizam a análise de dados e desejam utilizar insights para decisões estratégicas</p>
          </div>
        </div>
        <div className="mx-auto md:w-2/3">
          <p className="text-gray-400">A segmentação do público-alvo da Spifex é baseada em critérios que incluem o tamanho da empresa, a complexidade das operações financeiras e a necessidade de soluções integradas de gestão financeira.</p>
        </div>
      </div>
    </div>
  );
};

export default Segmentation;
