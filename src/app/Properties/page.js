"use client";

import { motion } from "framer-motion";

const Properties = () => {

   const properties = [
  {
    id: 1,
    title: "Modern Apartment in Gulshan",
    price: 45000,
    sqft: 1200,
    beds: 3,
    location: "Gulshan, Dhaka",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    gallery: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      "https://images.unsplash.com/photo-1560449752-3fd4b7f6aab1",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02b4",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab"
    ],
    description:
      "এই আধুনিক অ্যাপার্টমেন্টটি Gulshan-এর প্রাইম লোকেশনে অবস্থিত। চারপাশে রয়েছে উন্নত নিরাপত্তা ব্যবস্থা ও শান্ত পরিবেশ। বাসাটিতে পর্যাপ্ত আলো-বাতাস প্রবেশ করে, যা বসবাসকে আরামদায়ক করে তোলে। নিকটেই রয়েছে স্কুল, হাসপাতাল এবং শপিং মল। পরিবার নিয়ে থাকার জন্য এটি একটি আদর্শ পছন্দ।"
  },
  {
    id: 2,
    title: "Luxury Flat in Banani",
    price: 60000,
    sqft: 1500,
    beds: 4,
    location: "Banani, Dhaka",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    gallery: [
      "https://images.unsplash.com/photo-1502005097973-6a7082348e28",
      "https://images.unsplash.com/photo-1560184897-ae75f418493e",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed"
    ],
    description:
      "Banani-এর এই লাক্সারি ফ্ল্যাটটি আধুনিক জীবনযাপনের জন্য বিশেষভাবে ডিজাইন করা। বড় লিভিং স্পেস, উন্নত ইন্টেরিয়র এবং প্রশস্ত বারান্দা রয়েছে। আলো-বাতাসের ব্যবস্থা খুব ভালো। অফিস, রেস্টুরেন্ট এবং শপিং এরিয়ার খুব কাছাকাছি অবস্থান। প্রিমিয়াম লাইফস্টাইল পছন্দ করলে এটি উপযুক্ত।"
  },
  {
    id: 3,
    title: "Affordable Family Home",
    price: 28000,
    sqft: 900,
    beds: 2,
    location: "Mirpur, Dhaka",
    image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c",
    gallery: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
      "https://images.unsplash.com/photo-1586105251261-72a756497a11",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
    ],
    description:
      "এই বাসাটি সীমিত বাজেটের মধ্যে একটি আরামদায়ক পরিবারিক বাসা। এলাকার পরিবেশ শান্ত এবং নিরাপদ। নিকটে স্কুল, বাজার ও মসজিদ রয়েছে। দৈনন্দিন জীবনযাপনের জন্য প্রয়োজনীয় সব সুবিধা সহজেই পাওয়া যায়। ছোট পরিবারের জন্য এটি খুবই উপযোগী।"
  },
  {
    id: 4,
    title: "Lake View Apartment",
    price: 52000,
    sqft: 1300,
    beds: 3,
    location: "Dhanmondi, Dhaka",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    gallery: [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb",
      "https://images.unsplash.com/photo-1560185008-b033106af5c3",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
    ],
    description:
      "এই লেক ভিউ অ্যাপার্টমেন্টটি Dhanmondi-এর শান্ত এলাকায় অবস্থিত। সকালের আলো ও লেকের দৃশ্য মানসিক প্রশান্তি এনে দেয়। ফ্ল্যাটের ভেতরের ডিজাইন আধুনিক ও পরিপাটি। হাঁটার জন্য আশপাশে সুন্দর পরিবেশ রয়েছে। পরিবার ও পেশাজীবীদের জন্য উপযুক্ত।"
  },

  {
  id: 5,
  title: "Bachelor Friendly Studio",
  price: 18000,
  sqft: 550,
  beds: 1,
  location: "Mohakhali, Dhaka",
  image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
  gallery: [
    "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
    "https://images.unsplash.com/photo-1560448075-bb485b067938",
    "https://images.unsplash.com/photo-1600585152915-d208bec867a1"
  ],
  description:
    "এই স্টুডিও ফ্ল্যাটটি ব্যাচেলর ও একক বসবাসকারীদের জন্য উপযুক্ত। জায়গা ছোট হলেও ডিজাইন করা হয়েছে স্মার্টভাবে। অফিস, বাস স্টপ ও বাজার খুব কাছেই। নিরাপদ এলাকা হওয়ায় একা থাকলেও নিশ্চিন্ত থাকা যায়। কম খরচে শহরের মধ্যে থাকার জন্য ভালো অপশন।"
},
{
  id: 6,
  title: "Duplex House",
  price: 85000,
  sqft: 2200,
  beds: 5,
  location: "Uttara, Dhaka",
  image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  gallery: [
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
    "https://images.unsplash.com/photo-1598928506311-c55ded91a20c",
    "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f3",
    "https://images.unsplash.com/photo-1600573472591-ee6981cf0f8b"
  ],
  description:
    "এই ডুপ্লেক্স হাউসটি বড় পরিবারের জন্য বিশেষভাবে উপযোগী। প্রতিটি ফ্লোরে আলাদা লিভিং স্পেস রয়েছে। ছাদ বাগান ও পার্কিং সুবিধা থাকায় জীবনযাপন আরও আরামদায়ক। আশপাশে স্কুল ও পার্ক রয়েছে। দীর্ঘমেয়াদি বসবাসের জন্য আদর্শ।"
},
{
  id: 7,
  title: "Cozy Apartment Near Metro",
  price: 32000,
  sqft: 1000,
  beds: 2,
  location: "Agargaon, Dhaka",
  image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
  gallery: [
    "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db",
    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a",
    "https://images.unsplash.com/photo-1560449752-3fd4b7f6aab1"
  ],
  description:
    "মেট্রো স্টেশনের কাছাকাছি হওয়ায় যাতায়াত অত্যন্ত সহজ। অ্যাপার্টমেন্টটি ছোট হলেও আরামদায়ক ও পরিপাটি। আলো-বাতাসের ব্যবস্থা ভালো। অফিসগামী মানুষ ও ছোট পরিবারের জন্য উপযোগী। শহরের কোলাহল থেকে একটু শান্ত পরিবেশ দেয়।"
},
{
  id: 8,
  title: "Premium Residence",
  price: 70000,
  sqft: 1700,
  beds: 4,
  location: "Baridhara, Dhaka",
  image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
  gallery: [
    "https://images.unsplash.com/photo-1600573472550-8090b78bba0c",
    "https://images.unsplash.com/photo-1600585153490-76fb20a32601",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d"
  ],
  description:
    "Baridhara-এর নিরাপদ ও অভিজাত এলাকায় অবস্থিত এই রেসিডেন্স। আধুনিক ইন্টেরিয়র ও প্রশস্ত রুম রয়েছে। কূটনৈতিক এলাকা হওয়ায় নিরাপত্তা ব্যবস্থা উন্নত। শান্ত পরিবেশে প্রিমিয়াম জীবনযাপন সম্ভব। পরিবার নিয়ে বসবাসের জন্য চমৎকার পছন্দ।"
},
{
  id: 9,
  title: "Small Flat for Couples",
  price: 24000,
  sqft: 800,
  beds: 1,
  location: "Rampura, Dhaka",
  image: "https://images.unsplash.com/photo-1554995207-c18c203602cb",
  gallery: [
    "https://images.unsplash.com/photo-1560448204-603b3fc33ddc",
    "https://images.unsplash.com/photo-1560185008-b033106af5c3",
    "https://images.unsplash.com/photo-1560449753-8f7c4a3b93df"
  ],
  description:
    "এই ছোট ফ্ল্যাটটি নবদম্পতি ও জুটিদের জন্য উপযুক্ত। রুমগুলো পরিপাটি ও আরামদায়ক। আশপাশে বাজার ও ট্রান্সপোর্ট সুবিধা রয়েছে। শান্ত পরিবেশে ব্যক্তিগত সময় কাটানোর সুযোগ দেয়। কম খরচে ভালো লোকেশনের একটি বাসা।"
},
{
  id: 10,
  title: "Commercial Use Apartment",
  price: 90000,
  sqft: 2500,
  beds: 6,
  location: "Motijheel, Dhaka",
  image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
  gallery: [
    "https://images.unsplash.com/photo-1598928506311-c55ded91a20c",
    "https://images.unsplash.com/photo-1600573472557-8d3e7d8fbb2d",
    "https://images.unsplash.com/photo-1600585152220-90363fe7e115",
    "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f3"
  ],
  description:
    "এই বড় অ্যাপার্টমেন্টটি অফিস বা কমার্শিয়াল ব্যবহারের জন্য উপযুক্ত। প্রশস্ত ফ্লোর স্পেস ও ভালো লেআউট রয়েছে। Motijheel-এর কেন্দ্রস্থলে হওয়ায় বিজনেস লোকেশনে সুবিধাজনক। মিটিং রুম ও ওয়ার্কস্টেশন সহজে সেটআপ করা যায়। কর্পোরেট ব্যবহারের জন্য আদর্শ।"
}

];

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
    <section className="px-[3%] py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">

      {/* Header */}
      <header className="pb-2">
         <motion.header
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          Featured Properties
        </h2>
        <h4 className="mt-4 text-gray-600 dark:text-gray-400 text-lg">
          Explore our handpicked selection of premium rental properties
        </h4>
      </motion.header>
      </header>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {properties.map((property) => (
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
              <motion.img
                src={property.image}
                alt={property.title}
                className="w-full h-[260px] object-cover"
                whileHover={{ scale: 1.12 }}
                transition={{ duration: 0.6 }}
              />

              {/* Price Badge */}
              <motion.div
                initial={{ scale: 0, rotate: -15 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="absolute top-4 right-4 bg-black/60 backdrop-blur-md rounded-full px-4 py-1 text-red-400 font-bold text-sm"
              >
                ৳ {property.price.toLocaleString()} / month
              </motion.div>
            </div>

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
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative mt-4 w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold overflow-hidden"
              >
                <span className="relative z-10">View Details</span>

                {/* Hover Shine */}
                <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </motion.button>
            </div>

            {/* Glow Border */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-blue-500/40 transition" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Properties;
