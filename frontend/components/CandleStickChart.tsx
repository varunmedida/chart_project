'use client';
import { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';
import axios from 'axios';

interface CandlestickData {
  x: string; // Date in string format
  open: number;
  high: number;
  low: number;
  close: number;
}

export default function CandlestickChart() {
  const [chartData, setChartData] = useState<Array<Array<any>>>([]);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get<{ data: CandlestickData[] }>(
        `${apiUrl}/api/candlestick-data/`
      );
      const formattedData = [
        ['Date', 'Low', 'Open', 'Close', 'High'], // Google Charts header format
        ...response.data.data.map((item) => [
          new Date(item.x), // Convert date string to Date object
          item.low,
          item.open,
          item.close,
          item.high,
        ]),
      ];
      setChartData(formattedData);
    }
    fetchData();
  }, []);

  return (
    <div>
      {chartData.length > 1 ? (
        <Chart
          chartType='CandlestickChart'
          width='100%'
          height='400px'
          data={chartData}
          options={{
            legend: 'none',
            title: 'Candlestick Chart',
            candlestick: {
              fallingColor: { strokeWidth: 0, fill: '#a52714' }, // red
              risingColor: { strokeWidth: 0, fill: '#0f9d58' }, // green
            },
          }}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
