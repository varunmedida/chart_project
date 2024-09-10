'use client';
import { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import axios from 'axios';

interface LineChartData {
  labels: string[];
  data: number[];
}

export default function LineChartComponent() {
  const [data, setData] = useState<Array<{ name: string; value: number }>>([]);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get<LineChartData>(
        `${apiUrl}/api/line-chart-data/`
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
        <LineChart
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
          <Line type='monotone' dataKey='value' stroke='#8884d8' />
        </LineChart>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
