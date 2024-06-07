// components/ChartComponent.tsx
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  ChartConfiguration,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
} from "chart.js";
Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale
);

interface Versement {
  periode: number;
  capital: number;
}

interface ChartProps {
  data: Versement[]; // Votre tableau de chaînes de caractères au format "période valeur"
}

export const ChartComponent: React.FC<ChartProps> = ({ data }) => {
  // Analyse des données

  const chartData = {
    labels: data.map((item) => item.periode),
    datasets: [
      {
        label: "Données du graphique",
        data: data.map((item) => item.capital),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: "category", // Utilisez l'échelle de catégorie pour l'axe X
        title: {
          display: true,
          text: "Période",
        },
      },
      y: {
        title: {
          display: true,
          text: "Valeur",
        },
      },
    },
  };
  return (
    <div>
      <h2>Mon Graphique</h2>
      <Line data={chartData} />
    </div>
  );
};
