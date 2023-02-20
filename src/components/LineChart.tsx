import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { LineChartProps } from '../types'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom' as const,
    },
  },
};

const LineChart = ({ data }: LineChartProps) => {
    return (
        <div style={{position: 'relative', height: '40vh'}}>
            <Bar updateMode='resize' redraw={true} options={options} data={data} />
        </div>
    )
}

export default LineChart;