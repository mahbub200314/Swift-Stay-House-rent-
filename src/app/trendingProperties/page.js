"use client";

import { properties } from "../data/propertiesData";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import "swiper/css";

const TrendingProperties = () => {
  const trending = properties.filter(p => p.trending);

  return (
    <section className="relative px-4 sm:px-8 lg:px-20 py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
 {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[120px]" />
      </div>
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
          Trending Properties
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Handpicked homes that everyone is talking about right now
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute -inset-y-8 left-0 right-0 flex items-center justify-between pointer-events-none px-2 sm:px-6 z-20">

        {/* Prev */}
        <button
          className="trending-prev pointer-events-auto group
                     flex items-center justify-center w-11 h-11 rounded-full
                     bg-white/80 backdrop-blur shadow-lg
                     transition-all duration-300
                     hover:scale-110 hover:bg-gradient-to-r
                     hover:from-blue-600 hover:to-indigo-600 cursor-pointer"
        >
          <HiChevronLeft
            size={26}
            className="text-gray-800 group-hover:text-white
                       transition-transform duration-300
                       group-hover:-translate-x-0.5"
          />
        </button>

        {/* Next */}
        <button
          className="trending-next pointer-events-auto group
                     flex items-center justify-center w-11 h-11 rounded-full
                     bg-white/80 backdrop-blur shadow-lg
                     transition-all duration-300
                     hover:scale-110 hover:bg-gradient-to-r
                     hover:from-blue-600 hover:to-indigo-600 cursor-pointer"
        >
          <HiChevronRight
            size={26}
            className="text-gray-800 group-hover:text-white
                       transition-transform duration-300
                       group-hover:translate-x-0.5 "
          />
        </button>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        navigation={{
          prevEl: ".trending-prev",
          nextEl: ".trending-next",
        }}
        spaceBetween={32}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {trending.map(item => (
          <SwiperSlide key={item.id}>
            {/* Card */}
            <div className="group relative h-[420px] rounded-3xl overflow-hidden shadow-xl bg-black">

              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Badges */}
              <div className="absolute top-5 left-5 flex gap-2">
                <span className="px-3 py-1 text-xs font-bold rounded-full bg-red-600 text-white">
                  🔥 Trending
                </span>
                {item.hotOffer && (
                  <span className="px-3 py-1 text-xs font-bold rounded-full bg-yellow-400 text-black">
                    Hot Deal
                  </span>
                )}
              </div>

              {/* Price */}
              <div className="absolute top-5 right-5 bg-white/90 backdrop-blur px-4 py-1 rounded-full text-sm font-bold text-gray-900">
                ৳ {item.price.toLocaleString()}
              </div>

              {/* Content */}
              <div className="absolute bottom-0 w-full p-6">
                <h3 className="text-xl font-semibold text-white mb-1">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-300 mb-3">
                  📍 {item.location}
                </p>

                <div className="flex justify-between text-sm text-gray-200 mb-4">
                  <span>{item.sqft} sqft</span>
                  <span>{item.beds} Beds</span>
                  <span className="uppercase">{item.purpose}</span>
                </div>

                <Link key={item.id}
                  href={`/propertiesDetails/${item.slug}`}
                  className="block text-center w-full py-3 rounded-xl
                             bg-white text-gray-900 font-semibold
                             transition hover:bg-gray-200"
                >
                  View Details
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TrendingProperties;
