import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Multilinechart = ({ bitcoin }) => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    console.log(bitcoin, "bitcoin data");
    if (bitcoin && Object.keys(bitcoin).length > 0) {
      const labels = Object.keys(bitcoin).reverse();

      const highPrices = labels.map((date) =>
        bitcoin[date] ? parseFloat(bitcoin[date]["2a. high (EUR)"]) : 0
      );
      const lowPrices = labels.map((date) =>
        bitcoin[date] ? parseFloat(bitcoin[date]["3a. low (EUR)"]) : 0
      );
      console.log(highPrices, "high");
      console.log(lowPrices, "low");

      setChartData({
        labels: labels,
        datasets: [
          {
            label: "High Prices (EUR)",
            data: highPrices,
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            fill: true,
            tension: 0.3,
          },
          {
            label: "Low Prices (EUR)",
            data: lowPrices,
            borderColor: "rgba(255, 99, 132, 1)",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            fill: true,
            tension: 0.3,
          },
        ],
      });
    }
  }, [bitcoin]);

  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <h2>Bitcoin Weekly High and Low Prices (EUR)</h2>
      {chartData.labels ? (
        <Line
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: "top",
              },
              title: {
                display: true,
                text: "Weekly High and Low Prices of Bitcoin",
              },
            },
          }}
        />
      ) : (
        <p>Loading chart...</p>
      )}
    </div>
  );
};

export default Multilinechart;
