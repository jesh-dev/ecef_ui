// Components/RegisterModal.jsx
import { motion, AnimatePresence } from "framer-motion";

export default function RegisterModal({ isOpen, onClose, message, type = "info" }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="register-modal"
          className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={`bg-white rounded-xl p-6 shadow-xl max-w-sm w-full border-l-8 ${
              type === "success" ? "border-green-500" : "border-red-500"
            }`}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-sm text-gray-700">{message}</p>
            <div className="mt-4 text-right">
              <button
                onClick={onClose}
                className="px-4 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
