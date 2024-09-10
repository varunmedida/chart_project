'use client';
import { useState } from 'react';
import BarChartComponent from '@/components/BarChart';
import CandlestickChart from '@/components/CandleStickChart';
import ChartSelector from '@/components/ChartSelector';
import LineChartComponent from '@/components/LineChart';
import PieChart from '@/components/PieChart';

export default function Home() {
  const [selectedChart, setSelectedChart] = useState('bar'); // Default chart

  const renderSelectedChart = () => {
    switch (selectedChart) {
      case 'bar':
        return <BarChartComponent />;
      case 'line':
        return <LineChartComponent />;
      case 'pie':
        return <PieChart />;
      case 'candlestick':
        return <CandlestickChart />;
      default:
        return <BarChartComponent />; // Default chart fallback
    }
  };

  return (
    <div className='container mx-auto p-4 min-h-screen flex flex-col items-center'>
      <h1 className='text-4xl font-bold mb-6 text-center'>
        Interactive Chart Dashboard
      </h1>

      <ChartSelector onSelectChart={setSelectedChart} />

      <div className='w-full md:w-3/4 lg:w-1/2 h-auto mt-6'>
        {renderSelectedChart()}
      </div>
    </div>
  );
}
