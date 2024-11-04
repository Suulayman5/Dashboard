import React from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Activity from './components/Activity';
import Charts from './components/Charts';
import Logo from './components/Logo';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Logo/>
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

