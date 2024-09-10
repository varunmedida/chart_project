'use client';
import { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import axios from 'axios';

interface BarChartData {
  labels: string[];
  data: number[];
}

export default function BarChartComponent() {
  const [data, setData] = useState<Array<{ name: string; value: number }>>([]);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get<BarChartData>(
        `${apiUrl}/api/bar-chart-data/`
      );
      const chartData = response.data.labels.map((label, index) => ({
        name: label,
        value: response.data.data[index],
      }));
      setData(chartData);
    }
    fetchData();
  }, []);

  return (
    <div>
      {data.length > 0 ? (
        <BarChart
          width={600}
          height={400}
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey='value' fill='#8884d8' />
        </BarChart>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
