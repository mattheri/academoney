import React, { useState, useEffect } from "react";

interface Versement {
  periode: number;
  capital: number;
}

export const ResultsTable: React.FC<{ results: Versement[] }> = ({
  results,
}) => {
  const itemsPerPage = 10; // Nombre d'éléments par page
  const [currentPage, setCurrentPage] = useState(1);

  // Reset currentPage when results change
  useEffect(() => {
    setCurrentPage(1);
  }, [results]);

  // Analyse des données

  // Calcul du début et de la fin de la plage d'éléments à afficher
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedResults = results.slice(startIndex, endIndex);

  return (
    <div>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Période</th>
            <th className="border p-2">Capital</th>
          </tr>
        </thead>
        <tbody>
          {paginatedResults.map((result, index) => (
            <tr key={index} className="border">
              <td className="p-2">{result.periode}</td>
              <td className="p-2">{result.capital}</td>
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
          disabled={endIndex >= results.length}
          className="px-2 py-1 bg-blue-500 text-white rounded"
        >
          Suivant
        </button>
      </div>
    </div>
  );
};
