import React from 'react';
import { Line } from 'react-chartjs-2';

// import { Container } from './styles';

const Analytics: React.FC = () => {
  const labels = [
    "01/04/2021",
    "02/04/2021",
    "03/04/2021",
    "04/04/2021",
    "05/04/2021",
    "06/04/2021",
    "07/04/2021",
  ]
  const data = {
    labels: labels,
    datasets: [{
      label: 'Whatsapp',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(4, 192, 36)',
      tension: 0.1
    },
    {
      label: 'Facebook',
      data: [34, 67, 54,44, 23, 78, 100],
      fill: false,
      borderColor: 'rgb(4, 70, 192)',
      tension: 0.1
    }]
  };
  return (
    <div>
      <h1>Gráfico: clicks x dia</h1>
      <Line data={data} />
    </div>
  );
}

export default Analytics;