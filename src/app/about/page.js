"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";

import StatsSection from "../components/StatsSection";

const About = () => {
  return (
    <main className="bg-gray-100 dark:bg-gray-950 overflow-hidden">

      {/* ================= HERO SECTION ================= */}
     
 <main className="flex justify-center">

<section className="relative h-[85vh] w-[95%] rounded-[1.5rem] mt-8 flex flex-col items-center justify-center px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-center overflow-hidden">

  {/* Main Heading */}
  <motion.h1
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
  >
    Swift-Stay
  </motion.h1>

  {/* Subtext */}
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.3 }}
    className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl"
  >
    Your one-stop platform to find, rent, or buy your perfect property with ease and confidence.
  </motion.p>

  {/* CTA Button */}
  <motion.a
    href="#about-content"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition"
  >
    Get Started
  </motion.a>

  {/* Subtle Moving Circle for Decoration */}
  <motion.div
    className="absolute bottom-10 w-6 h-6 rounded-full bg-white/30"
    animate={{ y: [0, -20, 0] }}
    transition={{ repeat: Infinity, duration: 4 }}
  />
</section>
</main>

      {/* ================= ABOUT CONTENT ================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-20 py-28 grid lg:grid-cols-2 gap-20 items-center">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            Who We Are
          </h2>

          <p className="mt-6 text-gray-600 dark:text-gray-400 leading-relaxed">
            <strong>Swift-Stay</strong> is a next-generation real estate platform
            built to connect people with their perfect home using smart
            technology and verified listings.
          </p>

          <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
            Our mission is to simplify real estate with trust, transparency, and
            speed.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            <Feature title="Trusted Listings" />
            <Feature title="Verified Owners" />
            <Feature title="Smart Search" />
            <Feature title="Secure Deals" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative h-[440px] rounded-3xl overflow-hidden shadow-2xl"
        >
          <Image
            src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae"
            alt="About Image"
            fill
            className="object-cover"
          />
        </motion.div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <StatsSection/>

    </main>
  );
};

export default About;



const Feature = ({ title }) => (
  <div className="flex items-center gap-3">
    <span className="w-3 h-3 rounded-full bg-blue-600" />
    <p className="text-gray-700 dark:text-gray-300 font-medium">
      {title}
    </p>
  </div>
);
