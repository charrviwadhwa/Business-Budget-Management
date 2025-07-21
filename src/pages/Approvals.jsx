import Sidebar from "../components/Sidebar";
import { useState } from "react";

export default function Approvals() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [requests, setRequests] = useState([
    { id: 1, title: "PO #12345", department: "IT Dept", amount: "₹2,00,000", status: "pending" },
    { id: 2, title: "PO #12346", department: "Marketing", amount: "₹1,50,000", status: "pending" },
  ]);

  const handleAction = (id, action) => {
    setRequests((prev) =>
      prev.map((req) =>
        req.id === id ? { ...req, status: action } : req
      )
    );
  };

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {requests.map(({ id, title, department, amount, status }) => (
            <div key={id} className="bg-white rounded-lg shadow p-4">
              <h2 className="font-semibold text-gray-800">{title}</h2>
              <p className="text-sm text-gray-600">{department} • {amount}</p>
              <div className="mt-4 flex gap-2">
                {status === "pending" ? (
                  <>
                    <button
                      className="bg-[#4EC28F] text-white px-4 py-1 rounded hover:bg-[#3ba77c]"
                      onClick={() => handleAction(id, "approved")}
                    >
                      Approve
                    </button>
                    <button
                      className="bg-red-100 text-red-600 px-4 py-1 rounded hover:bg-red-200"
                      onClick={() => handleAction(id, "rejected")}
                    >
                      Reject
                    </button>
                  </>
                ) : (
                  <span
                    className={`px-3 py-1 rounded text-sm font-medium ${
                      status === "approved"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
