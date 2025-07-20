import Sidebar from "../components/Sidebar";
import { useState } from "react";
export default function Settings() {
   const [sidebarOpen, setSidebarOpen] = useState(true);
        return (
          <div className="flex">
            <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
              <div
                className={`transition-all duration-300 min-h-screen bg-[#F1FCF7] p-6 overflow-x-hidden ${
                  sidebarOpen ? "ml-64 w-[calc(100vw-16rem)]" : "ml-16 w-[calc(100vw-4rem)]"
                }`}
              >
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Settings</h1>
        <p className="text-gray-600 mb-6">Configure application preferences and account settings.</p>

        <div className="bg-white rounded-lg shadow p-6 space-y-4">
          <div className="flex items-center justify-between">
            <span>Dark Mode</span>
            <input type="checkbox" className="toggle toggle-success" />
          </div>
          <div className="flex items-center justify-between">
            <span>Email Notifications</span>
            <input type="checkbox" className="toggle toggle-success" defaultChecked />
          </div>
        </div>
      </div>
    </div>
  );
}
