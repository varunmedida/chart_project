import { useState } from 'react';

interface ChartSelectorProps {
  onSelectChart: (chartType: string) => void;
}

export default function ChartSelector({ onSelectChart }: ChartSelectorProps) {
  const [selectedChart, setSelectedChart] = useState('bar');

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const chartType = event.target.value;
    setSelectedChart(chartType);
    onSelectChart(chartType); // Notify parent of the chart selection
  };

  return (
    <div className='my-4'>
      <label
        htmlFor='chartSelect'
        className='block text-xl font-bold mb-2 text-white'
      >
        Select a Chart Type:
      </label>
      <select
        id='chartSelect'
        value={selectedChart}
        onChange={handleSelectChange}
        className='w-full p-3 text-lg bg-gray-800 text-white border-2 border-indigo-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500'
      >
        <option value='bar'>Bar Chart</option>
        <option value='line'>Line Chart</option>
        <option value='pie'>Pie Chart</option>
        <option value='candlestick'>Candlestick Chart</option>
      </select>
    </div>
  );
}
