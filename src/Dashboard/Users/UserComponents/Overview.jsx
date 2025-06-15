const Overview = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Welcome Back!</h2>

      <p className="text-gray-600 leading-relaxed mb-3">
        This is your dashboard overview. From here, you can manage your donations, view your payment history, and update your profile. Use the sidebar to navigate through the different features.
      </p>

      <div className="grid md:grid-cols-3 gap-4 mt-6">
        <div className="bg-orange-100 p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium text-orange-800">Total Payments</h3>
          <p className="text-2xl font-bold text-orange-900">₦0.00</p>
        </div>

        <div className="bg-green-100 p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium text-green-800">Successful Transactions</h3>
          <p className="text-2xl font-bold text-green-900">0</p>
        </div>

        <div className="bg-blue-100 p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium text-blue-800">Pending Payments</h3>
          <p className="text-2xl font-bold text-blue-900">0</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
