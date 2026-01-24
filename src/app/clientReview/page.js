"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const ClientReview = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rahim Khan",
      role: "Tenant",
      review: "Found a perfect apartment very easily through this site. The photos matched exactly, and the owner & team were super helpful.",
      rating: 5,
      clientImg: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f",
    },
    {
      id: 2,
      name: "Fatema Begum",
      role: "Family Tenant",
      review: "Everything was clear, no hidden fees. Documentation was fast and smooth. Highly recommend to everyone!",
      rating: 5,
      clientImg: "https://plus.unsplash.com/premium_photo-1682437962170-8163b332a921",
    },
    {
      id: 3,
      name: "Sakib Hasan",
      role: "Student",
      review: "Got a nice flat within my budget. Support team replied very quickly. Really happy!",
      rating: 4.5,
      clientImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    },
    {
      id: 4,
      name: "Nadia Akter",
      role: "Working Professional",
      review: "Found the perfect match near my office. Very smooth experience!",
      rating: 5,
      clientImg: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
  ];

  // Infinite loop এর জন্য ডেটা ডুপ্লিকেট করা
  const infiniteData = [...testimonials, ...testimonials];
 // এনিমেশন পজ (Pause) করার জন্য স্টেট
  const [isPaused, setIsPaused] = useState(false);
  return (
    <section className="relative bg-hero-gradient py-12 md:py-20 mx-12 overflow-hidden">
      
     
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background1 to-transparent z-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background1 to-transparent z-20" />

      {/* Header */}
      <div className="text-center mb-10 md:mb-14 px-4">
        <h2 className="text-2xl md:text-5xl font-bold text-primaryText mb-2">
          Clients Reviews
        </h2>
        <p className="text-gray-500 text-base md:text-xl max-w-2xl mx-auto">
          What our happy tenants say about Swift-Stay
        </p>
      </div>

      {/* Infinite Slider Wrapper */}
      <div className="flex overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}  
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          className="flex gap-4 md:gap-8 px-4"
          animate={{ x: isPaused ? undefined : ["0%", "-50%"] }}// ৫0% দেওয়া হয়েছে কারণ আমরা ডেটা ডাবল করেছি
          transition={{
            ease: "linear",
            duration: 30, // স্পিড কমানো বা বাড়ানো যাবে
            repeat: Infinity,
          }}
        >
          {infiniteData.map((data, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="
                relative 
                w-[280px] sm:w-[350px] md:w-[400px] lg:w-[450px]
                flex-shrink-0
                rounded-2xl p-[2px]
              "
            >
              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 rounded-2xl
                bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                bg-[length:300%_300%]"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Card Content */}
              <div
                className="relative z-10 h-full rounded-2xl p-6 md:p-8
                bg-white dark:bg-[#0f172a] shadow-xl
                flex flex-col justify-between"
              >
                <p className="text-sm md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 italic">
                  “{data.review}”
                </p>

                <div className="flex items-center gap-3 md:gap-4 mt-6">
                  <div className="relative w-12 h-12 md:w-16 md:h-16">
                    <Image
                      src={data.clientImg}
                      fill
                      alt={data.name}
                      className="rounded-xl object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-textSecondary text-base md:text-xl leading-tight">
                      {data.name}
                    </h4>
                    <p className="text-gray-500 text-xs md:text-sm">
                      {data.role}
                    </p>
                    <p className="text-yellow-500 text-xs md:text-sm mt-1">
                      {"★".repeat(Math.floor(data.rating))}
                      {data.rating % 1 !== 0 && "½"}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientReview;