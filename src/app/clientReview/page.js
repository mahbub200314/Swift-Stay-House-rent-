"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ClientReview = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rahim Khan",
      role: "Tenant",
      review:
        "Found a perfect apartment very easily through this site. The photos matched exactly, and the owner & team were super helpful.",
      rating: 5,
      clientImg:
        "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f",
    },
    {
      id: 2,
      name: "Fatema Begum",
      role: "Family Tenant",
      review:
        "Everything was clear, no hidden fees. Documentation was fast and smooth. Highly recommend to everyone!",
      rating: 5,
      clientImg:
        "https://plus.unsplash.com/premium_photo-1682437962170-8163b332a921",
    },
    {
      id: 3,
      name: "Sakib Hasan",
      role: "Student",
      review:
        "Got a nice flat within my budget. Support team replied very quickly. Really happy!",
      rating: 4.5,
      clientImg:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    },
    {
      id: 4,
      name: "Nadia Akter",
      role: "Working Professional",
      review:
        "Found the perfect match near my office. Very smooth experience!",
      rating: 5,
      clientImg:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
  ];

  // duplicate array for infinite scroll
  const infiniteData = [...testimonials, ...testimonials];

  return (
    <section className=" bg-hero-gradient py-20 mx-[4%] overflow-hidden ">
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-4xl text-primaryText font-bold mb-2">Clients Reviews</h2>
        <p className="text-gray-500 text-xl">
          What our happy tenants say about Swift-Stay
        </p>
      </div>

      {/* Infinite Slider */}
      <motion.div
        className="flex gap-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: 30,
          repeat: Infinity,
        }}
        whileHover={{ animationPlayState: "paused" }}
      >
        {infiniteData.map((data, index) => (
          <motion.div
  key={index}
  whileHover={{ scale: 1.05 }}
  transition={{ type: "spring", stiffness: 180 }}
  className="relative min-w-[360px] max-w-[360px] rounded-2xl p-[2px]"
>
  {/* Animated Border */}
  <motion.div
    className="absolute inset-0 rounded-2xl bg-[length:300%_300%]
    bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
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
    className="relative z-10 h-full rounded-2xl p-6
    bg-white dark:bg-[#0f172a] shadow-xl
    flex flex-col justify-between"
  >
    <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
      “{data.review}”
    </p>

    <div className="flex items-center gap-4 mt-6">
      <Image
        src={data.clientImg}
        width={64}
        height={64}
        alt={data.name}
        className="rounded-[1rem] object-cover"
      />
      <div>
        <h4 className="font-semibold text-textSecondary text-[1.5rem]">{data.name}</h4>
        <p className="text-gray-500 text-lg">{data.role}</p>
        <p className="text-yellow-500 text-lg">
          {"★".repeat(Math.floor(data.rating))}
        </p>
      </div>
    </div>
  </div>
          </motion.div>

        ))}
      </motion.div>
    </section>
  );
};

export default ClientReview;
