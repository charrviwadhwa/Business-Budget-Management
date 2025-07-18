import Sidebar from "../components/Sidebar";

export default function Approvals() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="transition-all duration-300 ml-64 w-[calc(100vw-16rem)] min-h-screen bg-[#F1FCF7] p-6">
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
      </main>
    </div>
  );
}
