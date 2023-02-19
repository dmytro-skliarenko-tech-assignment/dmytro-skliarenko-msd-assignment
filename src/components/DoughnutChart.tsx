import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      label: 'Color Label',
      data: [12, 19, 3, 1],
      backgroundColor: [
        '#559C8F',
        '#6FB6A3',
        '#86CCB4',
        '#9879EC'
      ],
      borderColor: [
        '#559C8F',
        '#6FB6A3',
        '#86CCB4',
        '#9879EC'
      ],
      borderWidth: 1,
    },
  ],
};

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

const PieChart = () => {
    return <div style={{position: 'relative', height: '40vh'}}><Doughnut updateMode='resize' redraw={true} options={options} data={data} /></div>;
}

export default PieChart;
