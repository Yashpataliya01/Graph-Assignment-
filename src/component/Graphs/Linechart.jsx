import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";

const MultilineChart = ({ cryptoData = [] }) => {
  const validData = Array.isArray(cryptoData) ? cryptoData : [];
  const topCryptoData = validData.filter((data) => data.current_price > 2800);

  const chartData = topCryptoData.map((crypto) => ({
    name: crypto.name,
    currentPrice: crypto.current_price,
    ath: crypto.ath,
    date: new Date(crypto.last_updated).toLocaleDateString(),
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="currentPrice"
          stroke="#4B88FF"
          activeDot={{ r: 8 }}
          name="Current Price (USD)"
        />
        <Line
          type="monotone"
          dataKey="ath"
          stroke="#FF4500"
          name="All-Time High (USD)"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MultilineChart;
