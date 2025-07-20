import Sidebar from "../components/Sidebar";
import { useState } from "react";
export default function Departments() {
  
    const [sidebarOpen, setSidebarOpen] = useState(true);
      return (
        <div className="flex">
          <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
            <div
              className={`transition-all duration-300 min-h-screen bg-[#F1FCF7] p-6 overflow-x-hidden ${
                sidebarOpen ? "ml-64 w-[calc(100vw-16rem)]" : "ml-16 w-[calc(100vw-4rem)]"
              }`}
            >
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Departments</h1>
        <p className="text-gray-600 mb-6">View and manage budget allocations by department.</p>

        {/* Department Table */}
        <div className="bg-white shadow rounded-lg p-6">
          <table className="w-full table-auto text-sm">
            <thead className="text-gray-600 border-b">
              <tr>
                <th className="py-2 text-left">Department</th>
                <th className="py-2 text-left">Allocated</th>
                <th className="py-2 text-left">Used</th>
                <th className="py-2 text-left">Remaining</th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
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
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
