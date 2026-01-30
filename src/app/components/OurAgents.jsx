"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
const agents = [
  {
    id: 1,
    name: "Rahim Ahmed",
    role: "Senior Property Agent",
    image: "https://i.pravatar.cc/300?img=12",
    experience: "8+ Years Experience",
    social: {
      facebook: "https://facebook.com/rahim",
      linkedin: "https://linkedin.com/in/rahim",
      instagram: "https://instagram.com/rahim",
    },
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    role: "Rental Specialist",
    image: "https://i.pravatar.cc/300?img=32",
    experience: "5+ Years Experience",
    social: {
      facebook: "https://facebook.com/nusrat",
      linkedin: "https://linkedin.com/in/nusrat",
      instagram: "https://instagram.com/nusrat",
    },
  },
  {
    id: 3,
    name: "Sajid Khan",
    role: "Commercial Property Expert",
    image: "https://i.pravatar.cc/300?img=45",
    experience: "6+ Years Experience",
    social: {
      facebook: "https://facebook.com/sajid",
      linkedin: "https://linkedin.com/in/sajid",
      instagram: "https://instagram.com/sajid",
    },
  },
  {
    id: 4,
    name: "Farzana Islam",
    role: "Client Relationship Manager",
    image: "https://i.pravatar.cc/300?img=47",
    experience: "7+ Years Experience",
    social: {
      facebook: "https://facebook.com/farzana",
      linkedin: "https://linkedin.com/in/farzana",
      instagram: "https://instagram.com/farzana",
    },
  },
];


export default function OurAgents() {
  return (
    <main className="min-h-screen relative bg-gray-50 dark:bg-gray-950 px-[2.5%] py-24">
      {/* Header */}
       {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[120px]" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
          Meet Our Professional Agents
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">
          Our expert agents are dedicated to helping you find the perfect home
          or investment property with confidence and trust.
        </p>
      </motion.div>
      

      {/* Agents Grid */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {agents.map((agent, index) => (
          <motion.div
            key={agent.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            whileHover={{ y: -10 }}
            className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
          >
            {/* Image */}
            <div className="relative h-72 overflow-hidden">
              <Image
                src={agent.image}
                alt={agent.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Info */}
            <div className="p-6 text-center space-y-2">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {agent.name}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium">
                {agent.role}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {agent.experience}
              </p>

              <div className="pt-4 flex justify-center gap-4 text-gray-600 dark:text-gray-300">
  <a href={agent.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
    <FaFacebookF />
  </a>
  <a href={agent.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
    <FaLinkedinIn />
  </a>
  <a href={agent.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
    <FaInstagram />
  </a>
</div>
            </div>

    


            {/* Hover Border */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-blue-500/40 transition-all duration-300 pointer-events-none" />
          </motion.div>
        ))}
      </section>
    </main>
  );
}
