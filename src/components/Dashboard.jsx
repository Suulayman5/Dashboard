import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const stats = [
  { title: "New Tickets", value: "43", change: "+6%" },
  { title: "Closed Today", value: "17", change: "-3%" },
  { title: "New Replies", value: "7", change: "+9%" },
  { title: "Followers", value: "27.3k", change: "+3%" },
  { title: "Daily Earnings", value: "$95", change: "-2%" },
  { title: "Products", value: "621", change: "-1%" },
];

const Dashboard = () => (
  <>
  <h1 className=" mb-6 font-medium text-gray-500 text-lg">Dashboard</h1>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="bg-white p-6 w-42 h-30 rounded shadow text-center  relative"
        >
          <div
            className={` absolute flex items-center top 0 right-0 mr-4 text-xs ${
              stat.change.startsWith("+") ? "text-green-400" : "text-red-500"
            }`}
          >
            {stat.change}
            <span>
              {stat.change.startsWith("+") ? (
                <KeyboardArrowUpIcon fontSize="small" />
              ) : (
                <KeyboardArrowDownIcon fontSize="small" />
              )}
            </span>
          </div>
          <div className="text-2xl text-gray-700 mt-4 font-semibold">{stat.value}</div>
          <div className="text-gray-400 mt-1 text-sm">{stat.title}</div>
        </div>
      ))}
    </div>
  </>
);

export default Dashboard;