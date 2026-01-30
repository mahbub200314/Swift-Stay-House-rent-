"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { blogs } from "../data/blogData";

const BlogPage = () => {
  return (
    <main className="bg-gray-50 dark:bg-gray-950 min-h-screen px-[2.5%] py-24">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
          Swift-Stay <span className="text-blue-500">Blog</span>
        </h1>
      </div>

      <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
        <section className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-10">
          {blogs.map((post) => (
            <Link key={post.id} href={`/blogDetails/${post.slug}`}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden cursor-pointer transition"
              >
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
                    {post.description.substring(0, 80)}...
                  </p>
                  <p className="mt-4 text-gray-500 dark:text-gray-400 text-xs">{post.date}</p>
                </div>
              </motion.div>
            </Link>
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
    </main>
  );
};

export default BlogPage;
