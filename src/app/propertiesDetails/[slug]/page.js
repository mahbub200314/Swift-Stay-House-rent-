"use client";

import { useParams } from "next/navigation";
import { properties } from "@/app/data/propertiesData";
import Image from "next/image";

const PropertiesDetails = () => {
  const { slug } = useParams();
  const property = properties.find((item) => item.slug === slug);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-500">Property not found</p>
      </div>
    );
  }

  return (
    <main className="bg-gray-50 dark:bg-gray-950 min-h-screen px-[2.5%] py-24">
      
      {/* ================= SECTION 1 ================= */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        
        {/* LEFT – Images */}
        <div>
          <div className="relative w-full h-[420px] mb-4">
            <Image
              src={property.image}
              alt={property.title}
              fill
              className="object-cover rounded-2xl"
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            {property.gallery.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt="gallery"
                width={300}
                height={200}
                className="h-32 w-full object-cover rounded-xl cursor-pointer hover:scale-105 transition"
              />
            ))}
          </div>
        </div>

        {/* RIGHT – Details */}
        <div className="space-y-6">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            {property.title}
          </h1>

          <p className="text-2xl font-semibold text-blue-600">
            ৳ {property.price.toLocaleString()} / month
          </p>

          <p className="text-gray-500 text-lg">📍 {property.location}</p>

          <div className="flex gap-6 text-gray-700 dark:text-gray-300">
            <span>🏠 {property.sqft} sqft</span>
            <span>🛏 {property.beds} Beds</span>
            <span>📄 Ready to Move</span>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow space-y-3">
            <p>✔ Spacious & well ventilated</p>
            <p>✔ Prime residential area</p>
            <p>✔ 24/7 Security & Utilities</p>
          </div>

          <button className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold">
            Book Visit
          </button>
        </div>
      </div>

      {/* ================= SECTION 2 ================= */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14">
        
        {/* LEFT – Map */}
        <div className="w-full h-[380px] rounded-2xl overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps?q=Dhaka,Bangladesh&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>

        {/* RIGHT – Description */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Property Overview
          </h2>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {property.description}
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            This premium rental property is designed for modern living, offering
            excellent space planning, natural lighting, and a peaceful
            neighborhood. Ideal for families or professionals seeking comfort,
            security, and convenience in one of the city’s most desirable areas.
          </p>
        </div>
      </div>
    </main>
  );
};

export default PropertiesDetails;
