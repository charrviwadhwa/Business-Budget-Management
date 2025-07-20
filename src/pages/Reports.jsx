import Sidebar from "../components/Sidebar";
import { useState } from "react";
export default function Reports() {
   const [sidebarOpen, setSidebarOpen] = useState(true);
        return (
          <div className="flex">
            <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
              <div
                className={`transition-all duration-300 min-h-screen bg-[#F1FCF7] p-6 overflow-x-hidden ${
                  sidebarOpen ? "ml-64 w-[calc(100vw-16rem)]" : "ml-16 w-[calc(100vw-4rem)]"
                }`}
              >
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Reports</h1>
        <p className="text-gray-600 mb-6">Download quarterly and yearly budget reports.</p>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-700 mb-4">Available Reports</h2>
          <ul className="space-y-3">
            <li className="flex justify-between items-center">
              <span>Q1 Report - FY 2025</span>
              <button className="text-[#4EC28F] font-medium hover:underline">Download</button>
            </li>
            <li className="flex justify-between items-center">
              <span>Q2 Report - FY 2025</span>
              <button className="text-[#4EC28F] font-medium hover:underline">Download</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
