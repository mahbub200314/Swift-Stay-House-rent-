"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { properties } from "../data/propertiesData";
import Button from "../components/Button";

const Properties = () => {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.92,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative px-[3%] py-10 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      
       {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-30 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[120px]" />
      </div>
      
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className=" text-center"
      >
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          Featured Properties
        </h2>
        <h4 className="mt-4 text-gray-600 dark:text-gray-400 text-md">
          Explore our handpicked selection of premium rental properties
        </h4>
      </motion.header>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10"
      >
        {properties.slice(0, 6).map((property) => (
          <motion.div
            key={property.id}
            variants={cardVariants}
            whileHover={{
              y: -18,
              rotateX: 6,
              rotateY: -6,
            }}
            className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden perspective"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.12 }}
                transition={{ duration: 0.6 }}
                className="w-full h-[260px]"
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

            {/* Price Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -15 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="absolute top-4 right-4 bg-black/60 backdrop-blur-md rounded-full px-4 py-1 text-red-400 font-bold text-sm"
            >
              ৳ {property.price.toLocaleString()} / month
            </motion.div>

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

              {/* Button */}
              <Link href="#" className="">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative mt-4 w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold overflow-hidden cursor-pointer"
              >
                <span className="relative z-10 cursor-pointer ">View Details</span>

                {/* Hover Shine */}
                <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 " />
              </motion.button>
              </Link>
            </div>

            {/* Glow Border */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-blue-500/40 transition-all duration-300 ease-in-out" />
          </motion.div>
        ))}
      </motion.div>

     <button className="flex w-full justify-center "> 
       <Link href="/Allproperties" className="border-b-1 text-[1.2rem] text-primaryText hover:text-blue-500 transition hover:scale-x-110">
           MORE PROPERTIES
      </Link>
     </button>
    </section>
  );
};

export default Properties;
