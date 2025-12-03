import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Logo = () => (
  <div className="bg-white shadow mb-0.5">
    <div className="container mx-auto p-4 flex items-center justify-between">
      <div className="text-lg font-semibold text-blue-600">tabler</div>
      <div className="flex items-center gap-4  space-x-2">
        <h3 className="text-blue-600 p-1 text-xs border border-blue-600">
          Source code
        </h3>
        <div className=" rounded-full relative">
          <NotificationsIcon className="text-gray-600 w-10" />
          <div className="absolute -top-0 -right-0 bg-red-500 w-2 h-2 flex items-center justify-center rounded-full" />
        </div>
        <div className="flex items-center gap-2 ">

        <AccountCircleIcon fontSize="large" className="text-gray-600" />
        <div className="hidden md:flex flex-col text-gray-700">
          <h5 className="text-xs">Jane Pearson</h5>
          <h6 className="text-[0.6rem] text-gray-500">Administrator</h6>
        </div>
        </div>
      </div>
    </div>
  </div>
);
export default Logo;
