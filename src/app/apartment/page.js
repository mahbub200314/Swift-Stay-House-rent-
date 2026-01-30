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

export default function Apartment() {
  const apartments = properties.filter(
    (item) => item.category === "apartment"
  );

  return (
    <main className="bg-gray-50 dark:bg-gray-950 min-h-screen">
      {/* ================= HERO SECTION ================= */}
      {/* ================= HERO SECTION ================= */}
       <main className="flex flex-col items-center justify-center">
<section className="relative mt-8 h-[90vh] w-[95%] rounded-[1.5rem] overflow-hidden flex items-center">
  {/* Background Image */}
  <div className="absolute inset-0">
    <Image
      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1920&auto=format&fit=crop"
      alt="Apartments"
      fill
      priority
      className="object-cover"
    />
    <div className="absolute inset-0 bg-black/60" />
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
        Find Your <span className="text-blue-500">Perfect Apartment</span>
        <br /> in the Heart of the City
      </h1>

      <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-xl">
        Hand-picked modern apartments with premium locations, smart layouts,
        and flexible pricing — only on Swift-Stay.
      </p>

      <div className="mt-8 flex gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold shadow-lg"
        >
          Explore Apartments
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 rounded-xl border border-white/40 text-white backdrop-blur-md"
        >
          View Map
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
        { label: "Apartments Listed", value: "120+" },
        { label: "Happy Tenants", value: "3.5k+" },
        { label: "Prime Locations", value: "25+" },
        { label: "Verified Homes", value: "100%" },
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

      {/* ================= APARTMENT CARDS ================= */}
      <section className="max-w-7xl mx-auto px-6 pt-18 pb-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {apartments.map((property) => (
            <motion.div
              key={property.id}
              variants={cardVariants}
              whileHover={{ y: -12, rotateX: 4, rotateY: -4 }}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden perspective"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full relative"
                >
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </motion.div>
              </div>

              {/* Badges */}
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md rounded-full px-3 py-1 text-red-400 font-bold text-sm">
                ৳ {property.price.toLocaleString()} / month
              </div>

              {property.trending && (
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md rounded-full px-3 py-1 text-orange-400 font-bold text-sm">
                  🔥 Trending
                </div>
              )}

              {/* Content */}
              <div className="p-5 space-y-3">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {property.title}
                </h3>

                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
                  <span>{property.sqft} sqft</span>
                  <span>{property.beds} Beds</span>
                </div>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  📍 {property.location}
                </p>

                <Link href={`/property/${property.id}`}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold overflow-hidden"
                  >
                    <span className="relative z-10">View Details</span>
                    <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </motion.button>
                </Link>
              </div>

              <div className="absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-blue-500/40 transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
