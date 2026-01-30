"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { blogs } from "../data/blogData";

const Blogs = () => {
  return (
    <section className="px-[2.5%] py-20 bg-gray-50 dark:bg-gray-950">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Latest <span className="text-blue-500">Blogs</span>
        </h2>

        <Link href="/blog">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-400 transition"
          >
            See All
          </motion.button>
        </Link>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {blogs.slice(0, 4).map((post) => (
          <Link key={post.id} href={`/blogDetails/${post.slug}`}>
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden cursor-pointer"
            >
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-44 object-cover"
              />

              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-2">
                  {post.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {post.description.substring(0, 80)}...
                </p>

                <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
                  {post.date}
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
