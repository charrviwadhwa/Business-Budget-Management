import Sidebar from "../components/Sidebar";

export default function Settings() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="transition-all duration-300 ml-64 w-[calc(100vw-16rem)] min-h-screen bg-[#F1FCF7] p-6">
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
      </main>
    </div>
  );
}
