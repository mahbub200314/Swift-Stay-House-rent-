"use client";

import { blogs } from "@/app/data/blogData";
import { useParams } from "next/navigation";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const BlogDetails = () => {
  const { slug } = useParams();
  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-500">Blog not found</p>
      </div>
    );
  }

  // Related posts (exclude current)
  const relatedPosts = blogs.filter((item) => item.id !== blog.id).slice(0, 4);

  return (
    <main className="bg-gray-50 dark:bg-gray-950 min-h-screen py-20 px-[2.5%]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main content */}
        <article className="lg:col-span-2 space-y-8">
          {/* Hero */}
          <header className="text-center lg:text-left mb-8">
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
              {blog.title}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{blog.date}</p>
          </header>

          {/* Featured Image */}
          <div className="mb-8">
            <img
              src={blog.img}
              alt={blog.title}
              className="w-full rounded-2xl shadow-lg object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
            {blog.description.split("\n").map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* Author + Share */}
          <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mt-12 border-t pt-6">
            {/* Author */}
            <div className="flex items-center gap-4">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Author"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  John Doe
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Author</p>
              </div>
            </div>

            {/* Share buttons */}
            <div className="flex gap-3 mt-4 md:mt-0">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white"
              >
                <FaFacebookF />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-400 text-white"
              >
                <FaTwitter />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 text-white"
              >
                <FaLinkedinIn />
              </motion.a>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white dark:bg-gray-900 rounded-xl shadow overflow-hidden cursor-pointer"
                  >
                    <img
                      src={post.img}
                      alt={post.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {post.title.length > 50 ? post.title.substring(0, 50) + "..." : post.title}
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{post.date}</p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>

          {/* Back to All Blogs */}
          <div className="mt-16">
            <Link
              href="/blog"
              className="text-blue-500 font-semibold hover:underline"
            >
              ← Back to all blogs
            </Link>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="hidden lg:block lg:col-span-1 space-y-8">
          {/* Recent Posts */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
            <ul className="space-y-4">
              {blogs.slice(0, 5).map((post) => (
                <li key={post.id} className="flex gap-3 items-center">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                      {post.title.length > 30 ? post.title.substring(0, 30) + "..." : post.title}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{post.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-blue-500 hover:underline">Real Estate</a></li>
              <li><a href="#" className="text-blue-500 hover:underline">Tips & Guides</a></li>
              <li><a href="#" className="text-blue-500 hover:underline">Interior Design</a></li>
              <li><a href="#" className="text-blue-500 hover:underline">Renting</a></li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default BlogDetails;
