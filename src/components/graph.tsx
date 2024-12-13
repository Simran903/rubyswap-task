import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  ChartOptions,
} from "chart.js";
import data from "../constant/data.json";

ChartJS.register(LineElement, CategoryScale, LinearScale, Tooltip, PointElement);

const LiquidityGraph = () => {
  const [liquidityData, setLiquidityData] = useState<any>(data.liquidity);  // Directly use imported data

  const chartData = {
    labels: liquidityData.data.map((item: any) => item.month),
    datasets: [
      {
        label: "Liquidity",
        data: liquidityData.data.map((item: any) => item.value),
        borderColor: "#4CAF50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        tension: 0.4,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            return `$${context.raw}M`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value: any) {
            return `$${value}M`;
          },
        },
      },
    },
  };

  return (
    <div className="p-6 bg-gradient-to-r from-black to-green-900 text-white rounded-lg shadow-md">
     
        <Line data={chartData} options={options} />
    </div>
  );
};

export default LiquidityGraph;
