import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Doughnut, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const donutData = {
  labels: ["Used Budget", "Remaining"],
  datasets: [
    {
      data: [3200000, 1800000],
      backgroundColor: ["#4EC28F", "#E0F7ED"],
      borderWidth: 0,
    },
  ],
};

const lineData = {
  labels: ["Q1", "Q2", "Q3", "Q4"],
  datasets: [
    {
      label: "Spending",
      data: [1200000, 800000, 1100000, 700000],
      borderColor: "#4EC28F",
      backgroundColor: "rgba(78, 194, 143, 0.3)",
      tension: 0.4,
      fill: true,
    },
  ],
};

const StatCard = ({ title, value }) => (
  <div className="bg-white shadow rounded-lg p-4 text-center">
    <h3 className="text-sm text-gray-500">{title}</h3>
    <p className="text-2xl font-semibold text-gray-800">{value}</p>
  </div>
);

export default function Dashboard() {
  return (
     <div className="flex">
      <Sidebar />
      <div className="flex-1"/>
        {/* Navbar on the top */}
        <Navbar />
    <div className="ml-64 min-h-screen w-[calc(100vw-16rem)] bg-[#F1FCF7] p-6 overflow-x-hidden">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Budget Overview</h1>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <StatCard title="Total Budget" value="₹50,00,000" />
        <StatCard title="Used Budget" value="₹32,00,000" />
        <StatCard title="Remaining Budget" value="₹18,00,000" />
        <StatCard title="Pending Approvals" value="3 Requests" />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium mb-4">Budget Usage</h2>
          <Doughnut data={donutData} />
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium mb-4">Quarterly Spending</h2>
          <Line data={lineData} />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white shadow rounded-lg p-6 mt-10">
        <h2 className="text-lg font-medium mb-4">Department-wise Budget</h2>
        <table className="w-full table-auto">
          <thead className="text-left text-gray-600 text-sm border-b">
            <tr>
              <th className="py-2">Department</th>
              <th className="py-2">Allocated</th>
              <th className="py-2">Used</th>
              <th className="py-2">Remaining</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-800">
            <tr className="border-b">
              <td className="py-2">IT</td>
              <td className="py-2">₹15,00,000</td>
              <td className="py-2">₹9,20,000</td>
              <td className="py-2">₹5,80,000</td>
            </tr>
            <tr className="border-b">
              <td className="py-2">HR</td>
              <td className="py-2">₹5,00,000</td>
              <td className="py-2">₹3,20,000</td>
              <td className="py-2">₹1,80,000</td>
            </tr>
            <tr>
              <td className="py-2">Marketing</td>
              <td className="py-2">₹10,00,000</td>
              <td className="py-2">₹6,40,000</td>
              <td className="py-2">₹3,60,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}
