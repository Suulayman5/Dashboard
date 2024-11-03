import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Logo = () => (
  <div className="bg-white shadow mb-8">
    <div className="container mx-auto p-4 flex items-center justify-between">
      <div className="text-lg font-semibold text-blue-600">tabler</div>
      <div className="flex items-center space-x-2"> 
      <span className="text-blue-600 m-3 text-sm border-blue-600">Source code</span>
      <div className="">
          <NotificationsIcon className="text-gray-600" /></div>
          <AccountCircleIcon fontSize="large" className="text-gray-600" />
          <div className="hidden md:flex flex-col text-gray-700">
            <span>Jane Pearson</span>
            <span className="text-xs text-gray-500">Administrator</span>
          </div>
      </div>
    </div>
  </div>
);
export default Logo
