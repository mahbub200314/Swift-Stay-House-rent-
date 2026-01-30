"use client";

import { motion } from "framer-motion";
import { blogs } from "../data/blogData";

const BlogPage = () => {
  return (
    <main className="bg-gray-50 dark:bg-gray-950 min-h-screen px-[2.5%] py-24">
      {/* Hero Section */}
      <motion.div
        className="text-center max-w-2xl mx-auto mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
          Swift-Stay <span className="text-blue-500">Blog</span>
        </h1>
        <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg md:text-xl">
          Read the latest updates, tips, and guides about real estate.
        </p>
      </motion.div>

      {/* Grid + Sidebar */}
      <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Main Blog Grid */}
        <section className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-10">
          {blogs.map((post) => (
            <motion.div
              key={post.id}
              whileHover={{ scale: 1.03 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden cursor-pointer transition"
            >
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                {post.category && (
                  <p className="text-sm text-blue-500 font-semibold">{post.category}</p>
                )}
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
                  {post.excerpt || post.description.substring(0, 100) + "..."}
                </p>
                <p className="mt-4 text-gray-500 dark:text-gray-400 text-xs">{post.date}</p>
              </div>
            </motion.div>
          ))}
        </section>

        {/* Sidebar */}
        <aside className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Trending Blogs
            </h3>
            <ul className="space-y-4">
              {blogs.slice(0, 5).map((post) => (
                <li key={post.id} className="flex items-center gap-3">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {post.title.length > 30
                        ? post.title.substring(0, 30) + "..."
                        : post.title}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {post.date}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      {/* Load More Button */}
      <div className="text-center mt-16">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-400 transition"
        >
          Load More
        </motion.button>
      </div>
    </main>
  );
};

export default BlogPage;
