"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const steps = [
  {
    id: 1,
    title: "Search Your Home",
    desc: "Choose your preferred location, budget, and house type to find the best match.",
    icon: "🔍",
  },
  {
    id: 2,
    title: "View Details",
    desc: "Check photos, rent, facilities, and real location before making a decision.",
    icon: "🏠",
  },
  {
    id: 3,
    title: "Contact Owner",
    desc: "Directly contact the house owner or our support team for booking and queries.",
    icon: "📞",
  },
  {
    id: 4,
    title: "Move In Easily",
    desc: "Complete documentation and move into your new home without hassle.",
    icon: "🔑",
  },
];

const HowItWork = () => {
  return (
    <section className="relative bg-hero-gradient py-24 px-[4%]">
      
       {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[120px]" />
      </div>
      
      {/* Hero */}
      <header className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-primaryText mb-4">
          How Swift-Stay Works
        </h1>
        <p className="text-gray-500 text-lg md:text-xl">
          Renting a house has never been this easy. Just follow these simple steps.
        </p>
      </header>


      <section className="flex flex-wrap gap-4 mb-10 justify-between  border border-gray-400 p-6 px-8 rounded-[1.5rem]">
            <div>
             {/* Why Choose Us */}
                  <div className="mt-24 max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primaryText ">
                      Why You Use Swift-Stay?
                    </h2>
                    {/* <p className="text-gray-500 text-[1.5rem] leading-relaxed">
                      ✔ Verified listings <br />
                      ✔ No hidden charges <br />
                      ✔ Direct owner contact <br />
                      ✔ Fast support & easy process
                    </p> */}
                    <ul className="text-gray-500 text-[1.5rem] leading-relaxed">
                        <li>✔ Verified listings</li>
                        <li> ✔ No hidden charges</li>
                        <li>✔ Direct owner contact</li>
                        <li>✔ Fast support & easy process</li>
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="mt-16 text-center">
                    <Link
                      href="/properties"
                      className="text-primaryText border hover:underline inline-block bg-primary px-8 py-4 rounded-xl text-lg font-semibold hover:scale-105 transition"
                    >
                      Browse Properties
                    </Link>
                  </div>
            </div>

            <Image className="rounded-[1.5rem] "
             src="/howwork.jpg" width={800}  height={200} alt="howwork"/>




      </section>

      {/* Steps............................ */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
  {steps.map((step, index) => (
    <motion.div
      key={step.id}
      variants={{
        initial: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
        hover: {},
      }}
      initial="initial"
      whileInView="visible"
      whileHover="hover"
      transition={{ delay: index * 0.15 }}
      viewport={{ once: true }}
      className="relative bg-white dark:bg-[#0f172a] rounded-2xl p-8 shadow-xl text-center overflow-hidden"
    >
      {/* 🔥 Hover border draw */}
      <motion.span
        variants={{
          initial: { scaleX: 0 },
          hover: { scaleX: 1 },
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="absolute inset-0 border-2 border-indigo-500 rounded-2xl origin-left pointer-events-none"
      />

      {/* ✅ ICON ONLY animation */}
      <motion.div
        variants={{
          initial: { y: 0 },
          hover: { y: 0 }, // hover এ থামবে
        }}
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="text-5xl mb-4"
      >
        {step.icon}
      </motion.div>

      {/* Content (static) */}
      <h3 className="text-2xl font-semibold mb-3 text-primaryText">
        {step.title}
      </h3>
      <p className="text-lg text-gray-500 leading-relaxed">
        {step.desc}
      </p>
    </motion.div>
  ))}
</div>




    

    </section>
  );
};

export default HowItWork;
