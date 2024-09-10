'use client';
import { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';
import axios from 'axios';

interface PieChartData {
  labels: string[];
  data: number[];
}

export default function PieChart() {
  const [chartData, setChartData] = useState<Array<Array<string | number>>>([]);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get<PieChartData>(
        `${apiUrl}/api/pie-chart-data/`
      );
      const chartArray = [
        ['Label', 'Value'],
        ...response.data.labels.map((label, index) => [
          label,
          response.data.data[index],
        ]),
      ];
      setChartData(chartArray);
    }
    fetchData();
  }, []);

  return (
    <div>
      {chartData.length > 1 ? (
        <Chart
          chartType='PieChart'
          data={chartData}
          options={{
            title: 'Pie Chart Example',
            pieHole: 0.4,
          }}
          width='100%'
          height='400px'
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
