import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend, Filler } from 'chart.js';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend, Filler);

const Activity = () => {
  const chartRef = useRef(null); 
  const chartInstanceRef = useRef(null); 

  const data = {
    labels: ['USER', 'COMMMIT', 'DATE'],
    datasets: [
      {
        label: 'Purchases',
        data: [2, 1, 5],
        borderColor: '#1976D2',
        backgroundColor: 'rgba(25, 118, 210, 0.2)', // Area fill color
        fill: true, 
        tension: 1.0, 
        borderWidth: 2,
        pointRadius: 0, 
      },
    ],
  };

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false, // Hides the legend to match the design
    },
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    x: {
      grid: { display: false }, 
    },
    y: {
      grid: { display: false }, 
      ticks: {
        display: false, // Hides the numbers on the y-axis
      },
    },
  },
};


  const datas = [
    { user: { name: 'Ronald Bradley', img: '/path/to/image1.jpg' }, commit: 'Initial commit', date: 'May 6, 2018' },
    { user: { name: 'Russell Gibson', img: '/path/to/image2.jpg' }, commit: 'Main structure', date: 'April 22, 2018' },
    { user: { name: 'Beverly Armstrong', img: '/path/to/image3.jpg' }, commit: 'Left sidebar adjustments', date: 'April 15, 2018' },
  ];

  useEffect(() => {
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy(); 
      }
    };
  }, []);
  
  return (
    <div className="bg-white shadow p-4 rounded-lg">
      <h2 className="text-gray-700 font-semibold mb-4">Development Activity</h2>
       <div className="h-40">
        <Line ref={chartRef} data={data} options={options} />
      </div>
        {datas.map((item, index) => (
          <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 text-sm text-gray-800">
            <div className="flex items-center space-x-3">
              <img src={item.user.img} alt={item.user.name} className="w-8 h-8 rounded-full" />
              <span className="font-medium">{item.user.name}</span>
            </div>
            <p className="flex-1 text-center text-gray-500">{item.commit}</p>
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 text-xs">{item.date}</span>
              <button className="text-gray-500">
                <DeleteOutlineIcon fontSize="small" />
              </button>
            </div>
          </div>
        ))}
      </div>
  );
};

export default Activity;

