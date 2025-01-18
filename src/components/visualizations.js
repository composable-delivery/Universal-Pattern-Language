import React from 'react';
import { Line } from 'react-chartjs-2';

const Visualizations = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.label),
    datasets: [
      {
        label: 'Pattern Evolution',
        data: data.map(item => item.value),
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Pattern Evolution and Composition</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default Visualizations;
