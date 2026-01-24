"use client";

import { motion } from "framer-motion";
import {
  FaHome,
  FaSearchLocation,
  FaShieldAlt,
  FaHandshake,
  FaBuilding,
  FaTools,
} from "react-icons/fa";

const services = [
  {
    title: "Curated Property Listings",
    desc: "Handpicked residential and commercial properties presented with clarity, style, and purpose.",
    icon: FaHome,
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    title: "Smart Location Search",
    desc: "AI-inspired filters help users instantly discover properties that truly match their lifestyle.",
    icon: FaSearchLocation,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Verified & Secure Platform",
    desc: "Every listing, owner, and agent is verified to ensure complete trust and transparency.",
    icon: FaShieldAlt,
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    title: "Direct Booking Experience",
    desc: "Connect directly with owners and agents — no friction, no unnecessary middle layers.",
    icon: FaHandshake,
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Commercial Space Solutions",
    desc: "Modern offices and retail spaces designed for startups and growing businesses.",
    icon: FaBuilding,
    gradient: "from-indigo-500 to-violet-500",
  },
  {
    title: "Post-Rental Support",
    desc: "Optional maintenance and long-term support services for stress-free living.",
    icon: FaTools,
    gradient: "from-yellow-400 to-amber-500",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ServicesPage() {
  return (
    <section className="relative py-28 px-10 max-sm:px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[120px]" />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative max-w-3xl mx-auto text-center mb-20"
      >
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Services That Redefine Renting
        </h1>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
          A visually powerful rental platform built for trust, speed, and
          modern living.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative max-w-9xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 "
      >
        {services.map((s, i) => {
          const Icon = s.icon;

          return (
            <motion.div
              key={i}
              variants={card}
              whileHover={{
                y: -16,
                rotateX: 6,
                rotateY: -6,
              }}
              className="group relative rounded-3xl p-[1px] shadow-sm"
            >
              {/* Gradient Border */}
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${s.gradient} opacity-0 group-hover:opacity-100 transition`}
              />

              {/* Card */}
              <div className="relative bg-white dark:bg-gray-900 rounded-3xl p-8 h-full backdrop-blur-xl">
                
                {/* Icon */}
                <div
                  className={`w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br ${s.gradient} text-white text-3xl shadow-lg mb-6`}
                >
                  <Icon />
                </div>

                <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
                  {s.title}
                </h3>

                <p className="text-[1.1rem] text-gray-600 dark:text-gray-400 leading-relaxed">
                  {s.desc}
                </p>

                {/* Hover Line */}
                <div className="mt-6 h-[2px] w-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
