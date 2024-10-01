import React, { useEffect, useState } from "react";
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

const StackedBarChart = ({ bitcoin }) => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    if (bitcoin && Object.keys(bitcoin).length > 0) {
      const labels = Object.keys(bitcoin).reverse();
      const highPrices = labels.map((date) =>
        bitcoin[date] ? parseFloat(bitcoin[date]["2a. high (EUR)"]) : 0
      );
      const lowPrices = labels.map((date) =>
        bitcoin[date] ? parseFloat(bitcoin[date]["3a. low (EUR)"]) : 0
      );

      setChartData({
        labels: labels,
        datasets: [
          {
            label: "High Prices (EUR)",
            data: highPrices,
            backgroundColor: "rgba(54, 162, 235, 0.6)",
          },
          {
            label: "Low Prices (EUR)",
            data: lowPrices,
            backgroundColor: "rgba(255, 99, 132, 0.6)",
          },
        ],
      });
    }
  }, [bitcoin]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Bitcoin High and Low Prices Comparison (EUR)",
      },
    },
    scales: {
      y: {
        stacked: true,
      },
      x: {
        stacked: true,
      },
    },
  };

  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      {chartData.labels ? (
        <Bar data={chartData} options={options} />
      ) : (
        <p>Loading chart...</p>
      )}
    </div>
  );
};

export default StackedBarChart;
