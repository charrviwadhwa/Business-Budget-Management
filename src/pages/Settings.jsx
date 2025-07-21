import Sidebar from "../components/Sidebar";
import { useState } from "react";

export default function Settings() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [formData, setFormData] = useState({
    name: "Charvi Wadhwa",
    email: "charvi@example.com",
    department: "Finance",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log("Saved settings:", formData);
    // Simulate API call here if needed
    alert("Settings saved successfully!");
  };

  return (
    <div className="flex">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <div
        className={`transition-all duration-300 min-h-screen bg-[#F1FCF7] p-6 overflow-x-hidden ${
          sidebarOpen ? "ml-64 w-[calc(100vw-16rem)]" : "ml-16 w-[calc(100vw-4rem)]"
        }`}
      >
        <h1 className="text-2xl font-bold text-gray-800 mb-1">Settings</h1>
        <p className="text-gray-600 mb-6">Manage your profile and preferences.</p>

        <div className="bg-white shadow rounded-lg p-6 max-w-xl">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4EC28F]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4EC28F]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4EC28F]"
              />
            </div>

            <button
              onClick={handleSave}
              className="mt-4 bg-[#4EC28F] text-white px-4 py-2 rounded hover:bg-[#3ba77c]"
            >
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
