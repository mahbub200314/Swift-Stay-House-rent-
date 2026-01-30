"use client";

import "../components/style.css";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { properties } from "../data/propertiesData";

const Allproperties = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [type, setType] = useState("all");
  const [trending, setTrending] = useState(false);
  const [sort, setSort] = useState("default");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // temp state for modal inputs
  const [tempSearch, setTempSearch] = useState(search);
  const [tempCategory, setTempCategory] = useState(category);
  const [tempType, setTempType] = useState(type);
  const [tempTrending, setTempTrending] = useState(trending);
  const [tempSort, setTempSort] = useState(sort);

  const containerVariants = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };
  const cardVariants = { hidden: { opacity: 0, y: 60, scale: 0.92 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } } };

  const filteredProperties = useMemo(() => {
    let data = [...properties];
    if (search) data = data.filter(p => p.title.toLowerCase().includes(search.toLowerCase()) || p.location.toLowerCase().includes(search.toLowerCase()));
    if (category !== "all") data = data.filter(p => p.category === category);
    if (type !== "all") data = data.filter(p => p.purpose === type);
    if (trending) data = data.filter(p => p.trending === true);
    if (sort === "low") data.sort((a, b) => a.price - b.price);
    if (sort === "high") data.sort((a, b) => b.price - a.price);
    return data;
  }, [search, category, type, trending, sort]);

  const clearFilters = () => {
    setSearch(""); setCategory("all"); setType("all"); setSort("default"); setTrending(false);
    setTempSearch(""); setTempCategory("all"); setTempType("all"); setTempSort("default"); setTempTrending(false);
  };

  const applyFilters = () => {
    setSearch(tempSearch);
    setCategory(tempCategory);
    setType(tempType);
    setTrending(tempTrending);
    setSort(tempSort);
    setIsFilterOpen(false);
  };

  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-10 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <motion.header initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-8">
        <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">See All Featured Properties</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm sm:text-lg">Explore our handpicked selection of premium rental properties</p>
      </motion.header>

      {/* Fixed Mobile Filter Button */}
      <button
        onClick={() => setIsFilterOpen(true)}
        className="lg:hidden fixed top-28 left-6 z-50 px-5 py-3 bg-blue-600 text-white rounded-xl font-semibold shadow-lg"
      >
        Filters
      </button>

      <main className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block sticky top-20 h-fit rounded-2xl bg-white dark:bg-gray-800 shadow-lg p-6 border border-gray-200 dark:border-gray-700 z-50">
          <button onClick={clearFilters} className="w-full rounded-xl border border-red-500 text-white py-2 text-sm font-semibold transition bg-red-500 hover:bg-white hover:text-red-500 mb-4">Clear All Filters</button>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Filter Properties</h3>
          <div className="h-px bg-gray-200 dark:bg-gray-700 mb-4" />
          <div className="space-y-3">
            <input type="text" placeholder="Search" value={search} onChange={e => setSearch(e.target.value)} className="w-full  bg-background1  text-primaryText rounded-xl border border-gray-300 dark:border-gray-700 px-3 py-2 text-sm" />
            
            <select value={category} onChange={e => setCategory(e.target.value)} className="w-full text-primaryText  bg-background1  rounded-xl border border-gray-300 dark:border-gray-700 px-3 py-2 text-sm">
              <option value="all">All</option><option value="apartment">Apartment</option><option value="house">House</option><option value="family">Family</option><option value="studio">Studio</option><option value="commercial">Commercial</option>
            </select>
            
            <select value={type} onChange={e => setType(e.target.value)} className="w-full text-primaryText  bg-background1 rounded-xl border border-gray-300 dark:border-gray-700 px-3 py-2 text-sm">
              <option value="all">Rent & Sale</option><option value="rent">Rent</option><option value="sale">Sale</option>
            </select>
            
            <select value={sort} onChange={e => setSort(e.target.value)} className="w-full text-primaryText bg-background1 rounded-xl border border-gray-300 dark:border-gray-700 px-3 py-2 text-sm">
              <option value="default">Default</option><option value="low">Low → High</option><option value="high">High → Low</option>
            </select>
            <div className="flex items-center justify-between rounded-xl bg-gray-100 dark:bg-gray-700 px-3 py-2">
              <span className="text-sm text-gray-700 dark:text-gray-300">Trending only</span>
              <input type="checkbox" checked={trending} onChange={e => setTrending(e.target.checked)} className="h-4 w-4 accent-blue-600" />
            </div>
          </div>
        </aside>

        {/* Property Cards */}
        <section className="lg:col-span-3 relative">
          {/* Mobile Filter Modal */}
          {isFilterOpen && (
            <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center p-4">
              <div className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-sm p-6 relative shadow-lg">
                <button onClick={() => setIsFilterOpen(false)} className="absolute top-1 right-2 text-gray-600 dark:text-gray-300 text-xl font-bold">×</button>
                <button onClick={clearFilters} className="w-full rounded-xl border border-red-500 text-white py-2 text-sm font-semibold transition bg-red-500 hover:bg-white hover:text-red-500 mb-4">Clear All Filters</button>
                <div className="space-y-3">
                  <input type="text" placeholder="Search" value={tempSearch} onChange={e => setTempSearch(e.target.value)} className="w-full rounded-xl border border-gray-300 dark:border-gray-700 px-3 py-2 text-sm" />
                  <select value={tempCategory} onChange={e => setTempCategory(e.target.value)} className="w-full rounded-xl border border-gray-300 dark:border-gray-700 px-3 py-2 text-sm">
                    <option value="all">All</option><option value="apartment">Apartment</option><option value="house">House</option><option value="family">Family</option><option value="studio">Studio</option><option value="commercial">Commercial</option>
                  </select>
                  <select value={tempType} onChange={e => setTempType(e.target.value)} className="w-full rounded-xl border border-gray-300 dark:border-gray-700 px-3 py-2 text-sm">
                    <option value="all">Rent & Sale</option><option value="rent">Rent</option><option value="sale">Sale</option>
                  </select>
                  <select value={tempSort} onChange={e => setTempSort(e.target.value)} className="w-full rounded-xl border border-gray-300 dark:border-gray-700 px-3 py-2 text-sm">
                    <option value="default">Default</option><option value="low">Low → High</option><option value="high">High → Low</option>
                  </select>
                  <div className="flex items-center justify-between rounded-xl bg-gray-100 dark:bg-gray-700 px-3 py-2">
                    <span className="text-sm text-gray-700 dark:text-gray-300">Trending only</span>
                    <input type="checkbox" checked={tempTrending} onChange={e => setTempTrending(e.target.checked)} className="h-4 w-4 accent-blue-600" />
                  </div>
                  <button onClick={applyFilters} className="w-full py-2 bg-blue-600 text-white rounded-xl font-semibold mt-2">Apply Filters</button>
                </div>
              </div>
            </div>
          )}

          <motion.div variants={containerVariants} whileInView="show" animate="show" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map(property => (
              <motion.div key={property.id} variants={cardVariants} whileHover={{ y: -12, rotateX: 4, rotateY: -4 }} className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden perspective">
                <div className="relative overflow-hidden h-64">
                  <motion.div whileHover={{ scale: 1.08 }} transition={{ duration: 0.5 }} className="w-full h-full relative">
                    <Image src={property.image} alt={property.title} fill className="object-cover rounded-t-2xl" sizes="(max-width: 768px) 100vw, 33vw" />
                  </motion.div>
                </div>
                <motion.div initial={{ scale: 0, rotate: -15 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: 0.3, type: "spring" }} className="absolute top-4 right-4 bg-black/60 backdrop-blur-md rounded-full px-3 py-1 text-red-400 font-bold text-sm">৳ {property.price.toLocaleString()} / month</motion.div>
                <motion.div initial={{ scale: 0, rotate: -15 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: 0.3, type: "spring" }} className="absolute top-12 right-4 bg-black/60 backdrop-blur-md rounded-full px-3 py-1 text-red-400 font-bold text-sm">{property.purpose.toUpperCase()}</motion.div>
                {property.trending && <motion.div initial={{ scale: 0, rotate: -15 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: 0.3, type: "spring" }} className="absolute top-4 left-4 bg-black/60 backdrop-blur-md rounded-full px-3 py-1 text-red-400 font-bold text-sm">🔥 Trending</motion.div>}

                <div className="p-4 sm:p-5 space-y-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">{property.title}</h3>
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300"><span>{property.sqft} sqft</span><span>{property.beds} Beds</span></div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">📍 {property.location}</p>
                  <Link  key={property.id} href={`/propertiesDetails/${property.slug}`}>
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative w-full py-2 sm:py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold overflow-hidden cursor-pointer">
                    <span className="relative z-10">View Details</span><span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </motion.button></Link>
                </div>
                <div className="absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-blue-500/40 transition-all duration-300 ease-in-out pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default Allproperties;
