"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import house1 from "../img/house4.jpg";
import house2 from "../img/house2.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-[110vh] flex items-center hero-animated text-[var(--color-primaryText)]  md:pt-22 lg:pt-40 bg-[var(--color-background1)] transition-colors duration-500 -mt-50 pt-50  ">

      {/* Ambient Glows */}
      <div className="absolute -top-32 -left-32 w-[300px] sm:w-[420px] h-[300px] sm:h-[420px] bg-emerald-500/20 dark:bg-emerald-400/30 blur-[100px] sm:blur-[140px] rounded-full animate-blob" />
      <div className="absolute bottom-0 right-0 w-[280px] sm:w-[380px] h-[280px] sm:h-[380px] bg-indigo-500/20 dark:bg-indigo-400/30 blur-[100px] sm:blur-[140px] rounded-full animate-blob animation-delay-2000" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <span className="inline-block mb-4 sm:mb-5 px-3 sm:px-4 py-1 sm:py-1.5 text-sm rounded-full text-[var(--color-hero-heading)] border border-black/10 dark:border-white/10">
            Premium Rental Platform
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug sm:leading-tight">
            Discover Homes <br />
            That Match Your <span className="text-[var(--color-hero-accent)]">Lifestyle</span>
          </h1>

          <p className="mt-4 sm:mt-6 max-w-xl mx-auto lg:mx-0 text-[var(--color-hero-subtitle)] text-sm sm:text-base md:text-lg">
            Explore hand-picked apartments, family houses and studios in prime locations. Designed for comfort, curated for you.
          </p>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 sm:mt-10 bg-white/30 dark:bg-gray-900 backdrop-blur-xl rounded-3xl p-3 sm:p-4 grid grid-cols-1 sm:grid-cols-4 gap-3 sm:gap-4 text-slate-900 dark:text-white shadow-lg"
          >
            <input
              className="px-3 sm:px-4 py-2 sm:py-3 rounded-2xl border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-emerald-400 outline-none transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-300 w-full"
              placeholder="Location"
            />
            <select className="px-3 sm:px-4 py-2 sm:py-3 bg-background1 rounded-2xl border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-emerald-400 outline-none transition-all duration-300">
              <option>Property Type</option>
              <option>Apartment</option>
              <option>Family House</option>
              <option>Studio</option>
            </select>
            <select className="px-3 sm:px-4 py-2 sm:py-3 bg-background1 rounded-2xl border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-emerald-400 outline-none transition-all duration-300">
              <option>Budget</option>
              <option>৳20k+</option>
              <option>৳30k+</option>
              <option>৳50k+</option>
            </select>
            <button className="rounded-2xl bg-emerald-500 dark:bg-emerald-600 text-white font-semibold hover:bg-emerald-600 dark:hover:bg-emerald-500 transition-all duration-300 py-2 sm:py-3 shadow-md">
              Search
            </button>
          </motion.div>


          
        </motion.div>

        {/* RIGHT VISUAL (Cards) */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative hidden lg:block"
        >
          {/* Card 1 */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-12 left-12 w-[288px] sm:w-72 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
          >
            <Image
              src={house1}
              alt="Luxury Apartment"
              width={500}
              height={400}
              className="object-cover"
            />
            <div className="p-3 sm:p-4 bg-[var(--color-background1)]/90 dark:bg-gray-900/70">
              <p className="font-semibold text-[var(--color-hero-heading)] text-sm sm:text-base">Luxury Apartment</p>
              <span className="text-[var(--color-hero-accent)] text-xs sm:text-sm">৳45,000 / month</span>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-16 right-0 w-[256px] sm:w-64 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
          >
            <Image
              src={house2}
              alt="Family House"
              width={500}
              height={400}
              className="object-cover"
            />
            <div className="p-3 sm:p-4 bg-[var(--color-background1)]/90 dark:bg-gray-900/70">
              <p className="font-semibold text-[var(--color-hero-heading)] text-sm sm:text-base">Family House</p>
              <span className="text-[var(--color-hero-accent)] text-xs sm:text-sm">৳65,000 / month</span>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
