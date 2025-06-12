import { useRef, useState, useEffect } from "react";
import CountUp from "react-countup";
import { motion, useInView } from "framer-motion";

const StatCard = ({ end, title, description }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) setHasAnimated(true);
  }, [isInView, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="p-6 bg-white shadow-lg rounded-lg"
    >
      <div className="flex items-center mb-2">
        <h6 className="mr-2 text-4xl font-bold md:text-5xl text-deep-purple-accent-400">
          {hasAnimated ? <CountUp end={end} duration={2} separator="," /> : 0}
        </h6>
        <div className="flex items-center justify-center rounded-full bg-teal-100 w-7 h-7">
          <svg className="text-teal-900 w-6 h-6" stroke="currentColor" viewBox="0 0 52 52">
            <polygon
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              points="29 13 14 29 25 29 23 39 38 23 27 23"
            />
          </svg>
        </div>
      </div>
      <p className="mb-2 font-bold text-lg">{title}</p>
      <p className="text-gray-700">{description}</p>
    </motion.div>
  );
};

export const Stat = () => {
  return (
    <div className="px-4 py-16 mx-auto max-w-7xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        <StatCard
          end={86000}
          title="Members"
          description="Three movie stars, Chloe, Lexa, and Jon, are filming a movie in the Amazon."
        />
        <StatCard
          end={500000000}
          title="Fund Raised"
          description="The actors and their agents decide to head back to home base by foot."
        />
        <StatCard
          end={52000000}
          title="Cookies"
          description="On the riverbank, they find a rowboat that only fits two people."
        />
      </div>
    </div>
  );
};
