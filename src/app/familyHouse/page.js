"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { properties } from "../data/propertiesData";

const familyHouses = properties.filter(
  (item) => item.category === "family"
);

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const FamilyHouse = () => {
  return (
    <main className=" bg-gray-50 dark:bg-gray-950">

      {/* ================= HERO SECTION ================= */}
      <main className="flex flex-col items-center justify-center">
      <section className="relative mt-8 rounded-[1.5rem] h-[90vh] w-[95%] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://plus.unsplash.com/premium_photo-1681824535578-889b961d30a0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Family House"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-white/10 text-white text-sm">
              Family Living
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
              Find the Perfect
              <span className="text-blue-500"> Family Home</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-xl">
              Spacious, secure, and peaceful family houses designed for
              long-term living and comfort — only on Swift-Stay.
            </p>

            <div className="mt-10 flex gap-4">
              <button className="px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold shadow-lg">
                Explore Houses
              </button>
              <button className="px-8 py-4 rounded-xl border border-white/40 text-white backdrop-blur-md">
                Contact Agent
              </button>
            </div>
          </motion.div>

          {/* Right stats */}
          <div className="hidden lg:grid grid-cols-2 gap-6">
            {[
              { label: "Family Houses", value: "60+" },
              { label: "Safe Areas", value: "100%" },
              { label: "Nearby Schools", value: "Yes" },
              { label: "Long Term", value: "Available" },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white/10 backdrop-blur-md p-6 border border-white/10"
              >
                <h3 className="text-3xl font-bold text-white">{item.value}</h3>
                <p className="text-gray-300 mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </main>

      {/* ================= FAMILY HOUSE CARDS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {familyHouses.map((property) => (
            <motion.div
              key={property.id}
              variants={cardVariants}
              whileHover={{ y: -12 }}
              className="group bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {property.trending && (
                  <span className="absolute top-4 left-4 bg-black/70 text-red-400 text-sm font-semibold px-3 py-1 rounded-full">
                    🔥 Trending
                  </span>
                )}

                <span className="absolute top-4 right-4 bg-black/70 text-white text-sm font-semibold px-3 py-1 rounded-full">
                  ৳ {property.price.toLocaleString()}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 space-y-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {property.title}
                </h3>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  📍 {property.location}
                </p>

                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
                  <span>{property.sqft} sqft</span>
                  <span>{property.beds} Beds</span>
                </div>

                <Link href="#">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold"
                  >
                    View Details
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
};

export default FamilyHouse;
