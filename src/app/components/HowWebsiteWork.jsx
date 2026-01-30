// app/how-website-works/page.jsx
"use client";

import { motion } from "framer-motion";
import { FaSearch, FaHeart, FaComments, FaCheckCircle } from "react-icons/fa";

const steps = [
  {
    id: 1,
    icon: <FaSearch />,
    title: "Browse Properties",
    description:
      "Explore a wide range of rental and sale properties with detailed information and images.",
  },
  {
    id: 2,
    icon: <FaHeart />,
    title: "Select Your Favorite",
    description:
      "Choose the property that fits your needs and add it to your favorites for easy access.",
  },
  {
    id: 3,
    icon: <FaComments />,
    title: "Contact Agent",
    description:
      "Reach out to our professional agents directly via chat, call, or email to get more information.",
  },
  {
    id: 4,
    icon: <FaCheckCircle />,
    title: "Finalize Booking",
    description:
      "Confirm your booking or rental agreement smoothly with the help of our agents.",
  },
];

export default function HowWebsiteWorks() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 py-24 px-6 md:px-[5%] relative">
      {/* Header */}
       {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[120px]" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto mb-20"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
          How Our Website Works
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">
          Navigate through the process with ease and confidence.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-5 md:left-1/2 -translate-x-1/2 w-1 h-full bg-blue-200 dark:bg-blue-900 rounded" />

        {/* Steps */}
        {steps.map((step, index) => {
          const isLeft = index % 2 === 0;
          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`relative mb-16 md:mb-24 flex flex-col md:flex-row items-center ${
                isLeft ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Dot & Icon */}
              <div className="absolute left-5 md:left-1/2 -translate-x-1/2 z-10 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl shadow-lg">
                {step.icon}
              </div>

              {/* Card */}
              <div
                className={`bg-white dark:bg-gray-800 p-6 md:w-1/2 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 ${
                  isLeft ? "md:ml-8 md:text-left" : "md:mr-8 md:text-right"
                }`}
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {step.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </main>
  );
}
