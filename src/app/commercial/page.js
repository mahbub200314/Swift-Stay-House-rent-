"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { properties } from "../data/propertiesData";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Commercial() {
  const commercials = properties.filter(
    (item) => item.category === "commercial"
  );

  return (
    <main className="bg-gray-50 dark:bg-gray-950 min-h-screen">

      {/* ================= HERO SECTION ================= */}
      <main className="flex flex-col items-center justify-center">
        <section className="relative mt-8 h-[90vh] w-[95%] rounded-[1.5rem] overflow-hidden flex items-center">

          {/* Background */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Office Space"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/65" />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
            >
              <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                Premium <span className="text-blue-500">Office & Commercial</span>
                <br /> Spaces for Growth
              </h1>

              <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-xl">
                Elevate your business with modern office spaces, commercial hubs,
                and strategic locations — only on Swift-Stay.
              </p>

              <div className="mt-8 flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold shadow-lg"
                >
                  Explore Offices
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-xl border border-white/40 text-white backdrop-blur-md"
                >
                  Book a Visit
                </motion.button>
              </div>
            </motion.div>

            {/* Right Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="hidden lg:grid grid-cols-2 gap-6"
            >
              {[
                { label: "Office Spaces", value: "90+" },
                { label: "Business Clients", value: "1.8k+" },
                { label: "Commercial Areas", value: "20+" },
                { label: "Ready to Move", value: "85%" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-white/10 backdrop-blur-md p-6 border border-white/10"
                >
                  <h3 className="text-3xl font-bold text-white">{item.value}</h3>
                  <p className="text-gray-300 mt-1">{item.label}</p>
                </div>
              ))}
            </motion.div>

          </div>
        </section>
      </main>

      {/* ================= COMMERCIAL CARDS ================= */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {commercials.map((property) => (
            <motion.div
              key={property.id}
              variants={cardVariants}
              whileHover={{ y: -12 }}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-64">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Price */}
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md rounded-full px-3 py-1 text-green-400 font-bold text-sm">
                ৳ {property.price.toLocaleString()} / month
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {property.title}
                </h3>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  📍 {property.location}
                </p>

                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
                  <span>{property.sqft} sqft</span>
                  <span>{property.floor} Floor</span>
                </div>

                <Link href={`/property/${property.id}`}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold"
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
}
