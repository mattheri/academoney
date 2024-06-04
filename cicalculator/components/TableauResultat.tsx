import React, { useState, useEffect } from "react";

export const ResultsTable: React.FC<{ results: string[] }> = ({ results }) => {
  const itemsPerPage = 10; // Nombre d'éléments par page
  const [currentPage, setCurrentPage] = useState(1);

  // Reset currentPage when results change
  useEffect(() => {
    setCurrentPage(1);
  }, [results]);

  // Analyse des données
  const parsedResults = results.map((item) => {
    const [period, value] = item.split(" ");
    return { period, value };
  });

  // Calcul du début et de la fin de la plage d'éléments à afficher
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedResults = parsedResults.slice(startIndex, endIndex);

  return (
    <div>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Période</th>
            <th className="border p-2">Valeur</th>
          </tr>
        </thead>
        <tbody>
          {paginatedResults.map((result, index) => (
            <tr key={index} className="border">
              <td className="p-2">{result.period}</td>
              <td className="p-2">{result.value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="mt-4 flex justify-center">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-2 py-1 mr-2 bg-blue-500 text-white rounded"
        >
          Précédent
        </button>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={endIndex >= parsedResults.length}
          className="px-2 py-1 bg-blue-500 text-white rounded"
        >
          Suivant
        </button>
      </div>
    </div>
  );
};
