"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { properties } from "../data/propertiesData";

export default function StudioPage() {
  const studios = properties.filter(
    (item) => item.category === "studio"
  );

  return (
    <main className="bg-gray-50 dark:bg-gray-950 min-h-screen">

      {/* ================= HERO SECTION ================= */}
      <main className="flex flex-col items-center justify-center">
        <section className="relative mt-8 h-[90vh] w-[95%] rounded-[1.5rem] overflow-hidden flex items-center">
          
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1637250096679-c10f2751def8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Studio Apartments"
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
                Smart & Modern <br />
                <span className="text-blue-500">Studio Apartments</span>
              </h1>

              <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-xl">
                Perfect for students & professionals — compact living with
                premium design, prime location and affordable rent.
              </p>

              <div className="mt-8 flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold shadow-lg"
                >
                  Explore Studios
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-xl border border-white/40 text-white backdrop-blur-md"
                >
                  Contact Agent
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
                { label: "Studios Listed", value: "80+" },
                { label: "Young Tenants", value: "2k+" },
                { label: "City Areas", value: "15+" },
                { label: "Fully Furnished", value: "70%" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-white/10 backdrop-blur-md p-6 border border-white/10"
                >
                  <h3 className="text-3xl font-bold text-white">
                    {item.value}
                  </h3>
                  <p className="text-gray-300 mt-1">
                    {item.label}
                  </p>
                </div>
              ))}
            </motion.div>

          </div>
        </section>
      </main>

      {/* ================= STUDIO CARDS ================= */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {studios.map((property) => (
          <motion.div
            key={property.id}
            whileHover={{ y: -10 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="relative h-64">
              <Image
                src={property.image}
                alt={property.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-5 space-y-3">
              <h3 className="text-xl font-semibold">
                {property.title}
              </h3>

              <p className="text-sm text-gray-500">
                📍 {property.location}
              </p>

              <div className="flex justify-between items-center">
                <span className="font-bold text-blue-600">
                  ৳ {property.price.toLocaleString()} / month
                </span>

                <Link
                  href={`/property/${property.id}`}
                  className="text-sm font-semibold text-blue-600 hover:underline"
                >
                  View Details →
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
