import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Bargraph({ cryptoData }) {
  const validData = Array.isArray(cryptoData) ? cryptoData : [];
  const topCryptoData = validData.filter((data) => data.current_price > 2800);
  const labels = topCryptoData.map((coin) => coin.name);
  const currentPrices = topCryptoData.map((coin) => coin.current_price);
  const athValues = topCryptoData.map((coin) => coin.ath);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Current Price (USD)",
        data: currentPrices,
        backgroundColor: "rgba(0, 206, 209, 0.7)",
      },
      {
        label: "All-Time High (USD)",
        data: athValues,
        backgroundColor: "rgba(255, 99, 132, 0.7)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top" },
      title: {
        display: true,
        text: "Cryptocurrency Data",
      },
    },
  };

  return (
    <div style={{ width: "100%", height: "100%", position: "absolute" }}>
      <Bar data={data} options={options} />
    </div>
  );
}

export default Bargraph;
