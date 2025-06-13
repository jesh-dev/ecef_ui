import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    title: "Smooth For Desktop",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam.",
    more: "This feature is optimized for desktop users, ensuring a seamless and intuitive experience with tailored responsiveness."
  },
  {
    title: "Smooth as an android",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam.",
    more: "Android compatibility is our priority. Enjoy smooth animations and fast loading times on all modern Android devices."
  },
  {
    title: "This is about justice",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam.",
    more: "Justice in tech means equal access, fair treatment, and inclusive design principles guiding our user interfaces."
  }
];

export const Feature = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full dark:bg-black  lg:max-w-screen-full md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 row-gap-5 lg:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="relative p-px overflow-hidden transition transform border rounded shadow-sm dark:shadow-lg dark:shadow-teal-700 hover:scale-105 group hover:shadow-xl cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelected(feature)}
          >
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-indigo-500 transition-all" />
            <div className="relative p-5 bg-white rounded-sm">
              <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0">
                  <svg className="w-8 h-8 text-indigo-500" stroke="currentColor" viewBox="0 0 52 52">
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="font-semibold leading-5">{feature.title}</h6>
              </div>
              <p className="mb-2 text-sm text-gray-900">{feature.description}</p>
              <span className="inline-flex items-center text-sm font-semibold text-indigo-500 hover:text-indigo-700">
                Learn more
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-transparent bg-opacity-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-white rounded-xl p-6 max-w-lg mx-auto shadow-lg"
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl font-bold mb-4">{selected.title}</h2>
              <p className="text-gray-700 mb-4">{selected.more}</p>
              <button
                className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
                onClick={() => setSelected(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
