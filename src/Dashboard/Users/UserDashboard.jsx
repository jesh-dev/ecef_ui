import { useState } from "react";
import Overview from "./UserComponents/Overview";
import PaymentForm from "./UserComponents/PaymentForm";
import PaymentHistory from "./UserComponents/PaymentHistory";
import Profile from "./UserComponents/Profile";
import ProtectedRoute from "../../ProtectedRoute";
import { useAuth } from "../../AuthContext";

export const UserBoard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-orange-500 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">User Dashboard</h1>
        <p>Hello, 
          {user?.name}
          </p>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-md p-4 space-y-4">
          <button
            onClick={() => setActiveTab("overview")}
            className="block w-full text-left px-4 py-2 rounded hover:bg-orange-100"
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("pay")}
            className="block w-full text-left px-4 py-2 rounded hover:bg-orange-100"
          >
            Make Payment
          </button>
          <button
            onClick={() => setActiveTab("history")}
            className="block w-full text-left px-4 py-2 rounded hover:bg-orange-100"
          >
            Payment History
          </button>
          <button
            onClick={() => setActiveTab("profile")}
            className="block w-full text-left px-4 py-2 rounded hover:bg-orange-100"
          >
            Profile
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
 {activeTab === "overview" && <ProtectedRoute><Overview /></ProtectedRoute>}
          {activeTab === "pay" && <ProtectedRoute><PaymentForm /></ProtectedRoute>}
          {activeTab === "history" && <ProtectedRoute><PaymentHistory /></ProtectedRoute>}
          {activeTab === "profile" && <ProtectedRoute><Profile /></ProtectedRoute>}
        </div>
      </div>
    </div>
  );
};
