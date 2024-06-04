import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  revenue: number;
  expense: number;
}

const PieChart: React.FC<PieChartProps> = ({ revenue, expense }) => {
  const data = {
    labels: ["Revenue", "Expense"],
    datasets: [
      {
        data: [revenue, expense],
        backgroundColor: ["#092d74", "#dfcce4"],
        hoverBackgroundColor: ["#092d74", "#dfcce4"],
      },
    ],
  };

  return <Pie data={data} />;
};

export default PieChart;
