"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main className="bg-gray-50 dark:bg-gray-950 min-h-screen flex flex-col items-center justify-start px-6 py-24 relative overflow-hidden">

      {/* ================= Floating Gradient Blobs ================= */}
      <motion.div
        className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-blue-400/40 blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 8, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute bottom-0 right-1/3 w-72 h-72 rounded-full bg-purple-400/30 blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 10, repeatType: "mirror" }}
      />

      {/* ================= Hero Section ================= */}
      <motion.div
        className="text-center max-w-2xl mb-16 z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white">
          Let’s <span className="text-blue-500">Connect</span>
        </h1>
        <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg md:text-xl">
          Have a question or want to list your property? Reach out and we’ll get back to you fast.
        </p>
      </motion.div>

      {/* ================= Contact Form ================= */}
      <motion.form
      onSubmit={handleSubmit}
      className="relative w-full max-w-lg mx-auto bg-white/20 dark:bg-gray-900/30 backdrop-blur-xl rounded-2xl shadow-2xl p-10 grid gap-6 border border-white/10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Name Input */}
      <div className="relative">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder=" "
          required
          className="peer w-full px-4 py-4 rounded-xl border border-gray-200 bg-white/30 dark:bg-gray-800/40 text-gray-900 dark:text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        />
        <label className="absolute left-4 top-4 text-gray-400 dark:text-gray-300 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-[-0.5rem] peer-focus:text-sm peer-focus:text-blue-400">
          Your Name
        </label>
      </div>

      {/* Email Input */}
      <div className="relative">
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder=" "
          required
          className="peer w-full px-4 py-4 rounded-xl border border-gray-200 bg-white/30 dark:bg-gray-800/40 text-gray-900 dark:text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        />
        <label className="absolute left-4 top-4 text-gray-400 dark:text-gray-300 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-[-0.5rem] peer-focus:text-sm peer-focus:text-blue-400">
          Your Email
        </label>
      </div>

      {/* Message Input */}
      <div className="relative">
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows="5"
          placeholder=" "
          required
          className="peer w-full px-4 py-4 rounded-xl border border-gray-200 bg-white/30 dark:bg-gray-800/40 text-gray-900 dark:text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none"
        ></textarea>
        <label className="absolute left-4 top-4 text-gray-400 dark:text-gray-300 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-[-0.5rem] peer-focus:text-sm peer-focus:text-blue-400">
          Your Message
        </label>
      </div>

      {/* Submit Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition"
      >
        Send Message
      </motion.button>
    </motion.form>

      {/* ================= Contact Info ================= */}
      <motion.div
        className="mt-12 z-10 flex flex-col items-center space-y-3 text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <p>Email: <span className="text-blue-500">support@swiftstay.com</span></p>
        <p>Phone: <span className="text-blue-500">+880 123 456 789</span></p>
        <p>Address: <span className="text-blue-500">Dhaka, Bangladesh</span></p>
      </motion.div>

    </main>
  );
};

export default Contact;
