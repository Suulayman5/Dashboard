import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend, Filler } from 'chart.js';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { fetchActivityData } from '../redux/activitySlice';
import { _toLeftRightCenter } from 'chart.js/helpers';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend, Filler);

const Activity = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.activity);

  useEffect(() => {
    dispatch(fetchActivityData());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Chart data and configuration
  const lineData = {
    labels: data.map((item) => item.date), // Example: using dates for the x-axis labels
    // labels: false,
    datasets: [
      {
        label: 'Purchases',
        data: data.map((item) => item.date.length), // Example: using commit length as sample data
        // borderColor: '#1976D2',
        backgroundColor: 'rgba(25, 118, 210, 0.2)',
        fill: true,
        // tension: 0.4,
        borderWidth: 2,
        borderColor: '#1976D2',
        pointRadius: 0,
         
        
        // width
      },
    ],
  };

  const lineOptions = {
    responsive: false,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        margin: 10,
        // _toLeftRightCenter: 'center',
        align: 'start',
        justifyContent: 'center',
        labels: {
          boxWidth: 10,
          backgroundColor: '#96ed80',
          font: {
            size: 10,
          },
        },
      },
      // title: {
      //   display: false,
      //   text: 'Development Activity',  
      //   moveBy: 20,

      // },
      tooltip: {
        enabled: false,
      },
      
    },
    scales: {
      x: { grid: { display: false } },
      y: { grid: { display: false }, ticks: { display: false } },
    },
  };

  return (
    <div className="bg-white shadow p-4 rounded-lg">
      <h2 className="text-gray-700 font-semibold mb-4">Development Activity</h2>
      <div className="h-40">
        <Line data={lineData} options={lineOptions} />
      </div>

      {/* Table for user, commit, and date */}
      <div className="border-t w-full border-gray-200 mt-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 text-sm text-gray-800">
            <div className="flex items-center w-1/3 space-x-3">
              <img src={item.user.img} alt={item.user.name} className="w-10 h-10 rounded-full" />
              <span className="font-medium">{item.user.name}</span>
            </div>
            <p className="flex-1 w-1/3 text-left text-gray-500">{item.commit}</p>
            <div className="flex items-center w-1/3 space-x-2">
              <span className="text-gray-400 text-xs">{item.date}</span>
            </div>
              <button className="text-gray-500">
                <DeleteOutlineIcon fontSize="small" />
              </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activity;
