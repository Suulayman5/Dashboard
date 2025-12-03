import React from "react";
import { Doughnut, Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Charts = () => {
  const donutData = {
    labels: ["Completed", "Remaining"],
    datasets: [
      {
        data: [63, 37],
        backgroundColor: ["#4CAF50", "#E0E0E0"],
        borderWidth: 1,
      },
    ],
  };
  const donutOptions = {
    cutout: "70%", // adjust thickness of the ring
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
  };

  // Data and options for the right Pie chart

  const pieData = {
    labels: ["47.4%", "33.1%", "10.5%", "9.0%"],
    datasets: [
      {
        data: [47.4, 33.1, 10.5, 9.0], // adjust as needed
        backgroundColor: ["#1A1D23", "#1976D2", "#BBDEFB", "#64B5F6"], // various blue shades
        borderWidth: 1,
      },
    ],
  };
  const pieOptions = {
    plugins: {
      legend: { display: false, position: "right" },
      tooltip: { enabled: true },
    },
  };

  return (
    <div className="flex-col">
      <div className="w-full px-6 py-2 border bg-blue-100 border-blue-200">
        <div className="w-full flex-col items-center">
          <span className="font-bold text-sm">Read our documentation</span>
          <span className=" text-sm"> with our code samples.</span>
        </div>
      </div>
      <div className="grid grid-cols-1 mt-4 md:grid-cols-2 gap-4">
        <div className="w-full  bg-white shadow py-4 rounded-lg flex flex-col">
          <h2 className="text-left text-gray-500 px-4  mb-4">Chart Title</h2>
          <div className="mt w-full bg-gray-300 h-[0.08rem]" />
          <div className="w-full flex justify-center">
            <div className="md:w-2/3 w-3/3 mt-8 h-48 md:h-56">
              <Doughnut
                data={donutData}
                options={donutOptions}
                title={donutData.labels}
              />
            </div>
          </div>
        </div>
        <div className="w-full bg-white shadow py-4 rounded-lg flex flex-col ">
          <h2 className=" text-left text-gray-500 px-4  mb-4">Chart Title</h2>
          <div className="mt w-full bg-gray-300 h-[0.08rem]" />
          <div className="w-full flex justify-center items-center">
            <div className="md:w-2/3 w-3/3 mt-8 h-48 md:h-56">
              <Pie data={pieData} options={pieOptions} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
