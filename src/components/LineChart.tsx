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
    title: {
      display: false,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Men',
      data: [100, 200, 300],
      backgroundColor: '#86CBB4',
    },
    {
      label: 'Women',
      data: [100, 200, 300],
      backgroundColor: '#559B8E',
    },
  ],
};

const LineChart = () => {
    return <div style={{position: 'relative', height: '40vh'}}><Bar updateMode='resize' redraw={true} options={options} data={data} /></div>
}

export default LineChart;