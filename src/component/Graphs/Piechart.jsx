import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";

const Piechart = ({ cryptoData = [] }) => {
  const validData = Array.isArray(cryptoData) ? cryptoData : [];
  const topCryptoData = validData.filter((data) => data.current_price > 2800);
  const chartData = topCryptoData.map((crypto) => ({
    name: crypto.name,
    value: crypto.current_price,
  }));

  const COLORS = [
    "#8884d8",
    "#82ca9d",
    "#ffc658",
    "#ff7300",
    "#387908",
    "#FF6347",
  ];

  return (
    <ResponsiveContainer
      style={{ width: "100%", height: "100%", position: "absolute" }}
    >
      <PieChart>
        <Pie
          data={chartData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default Piechart;
