import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { DoughnutChartProps } from '@/types';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
    },
  };

const PieChart = ({ data }: DoughnutChartProps) => {
    return (
      <div style={{position: 'relative', height: '40vh'}}>
        <Doughnut updateMode='resize' redraw={true} options={options} data={data} />
      </div>
    )
}

export default PieChart;
