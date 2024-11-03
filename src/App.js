import React from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Activity from './components/Activity';
import Charts from './components/Charts';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar /> 
      <div className="container mx-auto p-6">
        <Dashboard />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Activity/>
          <Charts/>
        </div>
      </div>
    </div>
  );
}

export default App;

