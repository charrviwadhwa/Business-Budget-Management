import Sidebar from "../components/Sidebar";
import { useState } from "react";
export default function Approvals() {
   const [sidebarOpen, setSidebarOpen] = useState(true);
        return (
          <div className="flex">
            <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
              <div
                className={`transition-all duration-300 min-h-screen bg-[#F1FCF7] p-6 overflow-x-hidden ${
                  sidebarOpen ? "ml-64 w-[calc(100vw-16rem)]" : "ml-16 w-[calc(100vw-4rem)]"
                }`}
              >
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Approvals</h1>
        <p className="text-gray-600 mb-6">Review and approve budget consumption requests.</p>

        {/* Approval Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="font-semibold text-gray-800">PO #12345</h2>
            <p className="text-sm text-gray-600">IT Dept • ₹2,00,000</p>
            <div className="mt-4 flex gap-2">
              <button className="bg-[#4EC28F] text-white px-4 py-1 rounded hover:bg-[#3ba77c]">Approve</button>
              <button className="bg-gray-200 text-gray-800 px-4 py-1 rounded hover:bg-gray-300">Reject</button>
            </div>
          </div>
          {/* Add more cards if needed */}
        </div>
      </div>
    </div>
  );
}
