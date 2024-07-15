import React from 'react';
import { useTable } from 'react-table';

const ComparisonTable = () => {
  const data = React.useMemo(
    () => [
      {
        feature: 'Venda desde PMEs e escritórios contábeis até grandes empresas',
        open: '✔️',
        aTrabalhosa: '❌',
        aLimitada: '❌',
        aComplexa: '❌',
      },
      {
        feature: 'Preço',
        open: '$$$',
        aTrabalhosa: '$$$',
        aLimitada: '$$',
        aComplexa: '$$$$$',
      },
      {
        feature: 'Automatização de processos padrões da contabilidade e financeiro',
        open: '✔️',
        aTrabalhosa: '✔️',
        aLimitada: '❌',
        aComplexa: '❌',
      },
      {
        feature: 'Automatização de processos personalizados',
        open: '✔️',
        aTrabalhosa: '❌',
        aLimitada: '✔️',
        aComplexa: '✔️',
      },
      {
        feature: 'Integração com o Open Finance',
        open: '✔️',
        aTrabalhosa: '❌',
        aLimitada: '❌',
        aComplexa: '✔️',
      },
      {
        feature: '24/7 + atendimentos online e presenciais',
        open: '✔️',
        aTrabalhosa: '❌',
        aLimitada: '❌',
        aComplexa: '✔️',
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'Feature',
        accessor: 'feature',
      },
      {
        Header: 'open',
        accessor: 'open',
      },
      {
        Header: 'A TRABALHOSA',
        accessor: 'aTrabalhosa',
      },
      {
        Header: 'A LIMITADA',
        accessor: 'aLimitada',
      },
      {
        Header: 'A COMPLEXA',
        accessor: 'aComplexa',
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <div className="container mx-auto my-10 p-5 bg-gray-900 rounded-lg">
      <h2 className="text-center text-3xl mb-4 text-white">Mapa de Concorrentes</h2>
      <p className="text-center text-xl mb-4 text-white">
        E o que temos de diferente? Somos a única startup brasileira que une uma solução iPaaS com uma plataforma plug and play em um só lugar.
      </p>
      <div className="overflow-x-auto">
        <table {...getTableProps()} className="min-w-full bg-gray-800 table-auto">
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()} className="bg-blue-600">
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()} className="border border-orange-500 px-4 py-2 text-white">
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} className="bg-gray-900 text-white">
                  {row.cells.map(cell => (
                    <td {...cell.getCellProps()} className="border border-orange-500 px-4 py-2">
                      {cell.render('Cell')}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="text-center mt-4 text-white">Comparação com os principais players do mercado</p>
    </div>
  );
};

export default ComparisonTable;
