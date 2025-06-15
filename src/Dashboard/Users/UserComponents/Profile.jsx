import { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://127.0.0.1:8000/api/user/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };
    fetchUser();
  }, []);

  if (!user) {
    return <div className="p-6 text-center">Loading profile...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Profile Overview</h1>

      <div className="bg-white p-6 rounded-xl shadow-md max-w-xl mx-auto">
        <div className="mb-4">
          <p className="text-gray-600 text-sm">Full Name</p>
          <h2 className="text-xl font-semibold">{user.name}</h2>
        </div>

        <div className="mb-4">
          <p className="text-gray-600 text-sm">Email Address</p>
          <p className="text-lg">{user.email}</p>
        </div>

        <div className="mb-4">
          <p className="text-gray-600 text-sm">Phone</p>
          <p className="text-lg">{user.phone || "N/A"}</p>
        </div>

        <div className="mb-4">
          <p className="text-gray-600 text-sm">Role</p>
          <p className="text-lg capitalize">{user.role}</p>
        </div>

        <div>
          <p className="text-gray-600 text-sm">Joined At</p>
          <p className="text-lg">{new Date(user.created_at).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
