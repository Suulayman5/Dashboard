import React from 'react';
import { Doughnut, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Charts = () => {
  const donutData = {
    labels: ['Completed', 'Remaining'],
    datasets: [
      {
        data: [37, 63], 
        backgroundColor: ['#4CAF50', '#E0E0E0'], 
        borderWidth: 1,
      },
    ],
  };
  const donutOptions = {
    cutout: '70%', // adjust thickness of the ring
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
  };

  // Data and options for the right Pie chart
  
  const pieData = {
    labels: ['47.4%', '33.1%', '10.5%', '9.0%'],
    datasets: [
      {
        data: [47.4, 33.1, 10.5, 9.0], // adjust as needed
        backgroundColor: ['#1A1D23','#1976D2', '#BBDEFB', '#64B5F6', ], // various blue shades
        borderWidth: 1,
      },
    ],
  };
  const pieOptions = {
    plugins: {
      legend: { display: false, position: 'right' },
      tooltip: { enabled: true },
    },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="w-full md:w-2/3 bg-white shadow p-4 rounded-lg flex flex-col items-center">
        <h2 className="text-center text-gray-700 font-semibold mb-4">Chart Title</h2>
        <div className="w-1/3 h-48 md:h-56">
          <Doughnut data={donutData} options={donutOptions} />
        </div>
      </div>
      <div className="w-full md:w-2/3 bg-white shadow p-4 rounded-lg flex flex-col items-center">
        <h2 className="text-center text-gray-700 font-semibold mb-4">Chart Title</h2>
        <div className="w-1/3 h-48 md:h-56">
          <Pie data={pieData} options={pieOptions} />
        </div>
      </div>
    </div>
  );
};

export default Charts;

