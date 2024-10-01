import React, { useEffect, useState } from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const RadarChart = ({ bitcoin }) => {
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
            borderColor: "rgba(54, 162, 235, 0.6)",
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            fill: true,
          },
          {
            label: "Low Prices (EUR)",
            data: lowPrices,
            borderColor: "rgba(255, 99, 132, 0.6)",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            fill: true,
          },
        ],
      });
    }
  }, [bitcoin]);

  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <h2>Bitcoin High and Low Prices Comparison (EUR)</h2>
      {chartData.labels ? <Radar data={chartData} /> : <p>Loading chart...</p>}
    </div>
  );
};

export default RadarChart;
