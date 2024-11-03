import React from 'react';

const stats = [
  { title: 'New Tickets', value: '43', change: '+6%' },
  { title: 'Closed Today', value: '17', change: '-3%' },
  { title: 'New Replies', value: '7', change: '+9%' },
  { title: 'Followers', value: '27.3k', change: '+3%' },
  { title: 'Daily Earnings', value: '$95', change: '-2%' },
  { title: 'Products', value: '621', change: '-1%' },
];

const Dashboard = () => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
    {stats.map((stat) => (
      <div key={stat.title} className="bg-white p-4 rounded shadow text-center">
        <div className="text-gray-600 text-sm">{stat.title}</div>
        <div className="text-2xl font-semibold">{stat.value}</div>
        <div className={`text-sm ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
          {stat.change}
        </div>
      </div>
    ))}
  </div>
);

export default Dashboard;

