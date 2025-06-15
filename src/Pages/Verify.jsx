import { useState, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function VerifyModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ email: "", code: "" });
  const [errors, setErrors] = useState({});
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.code.trim()) {
      newErrors.code = "Code is required";
    } else if (!/^\d{6}$/.test(formData.code)) {
      newErrors.code = "Code must be 6 digits";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validateForm()) return;

  console.log("🔄 Submitting form...", formData);

  try {
    const response = await axios.post("http://127.0.0.1:8000/api/verify", {
      email: formData.email.trim(),
      code: formData.code.trim(),
    });

    console.log("✅ Verification Response:", response);

    if (response.status === 200) {
      setIsVerified(true);
      console.log("🎉 Verified! Redirecting in 2s...");

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } else {
      console.log("⚠️ Unexpected status:", response.status);
    }

  } catch (error) {
    console.error("❌ Verification failed:", error.response?.data || error.message);
    alert(error?.response?.data?.message || "Verification failed.");
  }
};


  //✅ Redirect after success using effect
  useEffect(() => {
    if (isVerified) {
      const timer = setTimeout(() => {
        navigate("/login");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isVerified, navigate]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-transparent backdrop-blur-lg bg-opacity-50 flex justify-center items-center z-50"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="bg-white p-8 rounded-lg w-full max-w-md shadow-xl"
          >
            {!isVerified ? (
              <>
                <h2 className="text-xl font-bold text-center mb-6 text-blue-600">
                  Verify Your Account
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block text-sm font-bold mb-1 text-gray-700">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded focus:outline-none ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-bold mb-1 text-gray-700">Verification Code</label>
                    <input
                      type="text"
                      name="code"
                      value={formData.code}
                      onChange={handleChange}
                      placeholder="Enter 6-digit code"
                      className={`w-full p-2 border rounded focus:outline-none ${
                        errors.code ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.code && (
                      <p className="text-red-500 text-sm mt-1">{errors.code}</p>
                    )}
                  </div>

                  <div className="flex justify-between mt-6">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                      Verify
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center">
                <h2 className="text-green-600 text-xl font-bold mb-4">
                  ✅ Verified Successfully
                </h2>
                <p className="text-gray-700">Redirecting to login page...</p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
