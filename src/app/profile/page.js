"use client";

import Image from "next/image";
import Link from "next/link";

const Profile = () => {
  // 🔹 Dummy User Data (later Firebase/Auth theke asbe)
  const user = {
    name: "Mahbubur Rahman",
    email: "mahbub@gmail.com",
    avatar: "https://i.pravatar.cc/300?img=12",
  };

  // 🔹 Bought / Rented Properties
  const myProperties = [
    {
      id: 1,
      title: "Modern Apartment in Gulshan",
      price: 4500000,
      location: "Gulshan, Dhaka",
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
      type: "Bought",
    },
    {
      id: 2,
      title: "Family House in Dhanmondi",
      price: 35000,
      location: "Dhanmondi, Dhaka",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      type: "Rented",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-950">

      {/* ================= HEADER ================= */}
      <div className="relative h-[320px] bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2">
          <div className="relative w-40 h-40 rounded-full border-4 border-white overflow-hidden shadow-xl">
            <Image src={user.avatar} alt={user.name} fill />
          </div>
        </div>
      </div>

      {/* ================= USER INFO ================= */}
      <div className="mt-28 text-center px-4">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          {user.name}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          {user.email}
        </p>

        <button className="mt-6 px-8 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
          Edit Profile
        </button>
      </div>

      {/* ================= STATS ================= */}
      <div className="max-w-6xl mx-auto mt-16 px-4 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <StatCard title="Properties Bought" value="1" />
        <StatCard title="Properties Rented" value="1" />
        <StatCard title="Wishlist" value="0" />
      </div>

      {/* ================= MY PROPERTIES ================= */}
      <div className="max-w-7xl mx-auto mt-20 px-4 pb-24">
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">
          My Properties
        </h3>

        {myProperties.length === 0 ? (
          <div className="text-center py-20 bg-white dark:bg-gray-900 rounded-2xl shadow">
            <p className="text-gray-500 text-lg">
              You haven’t bought or rented any property yet.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {myProperties.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition"
              >
                <div className="relative h-52">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 text-xs font-bold rounded-full bg-blue-600 text-white">
                    {item.type}
                  </span>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-sm mt-1">
                    📍 {item.location}
                  </p>

                  <p className="mt-4 font-bold text-blue-600">
                    ৳ {item.price.toLocaleString()}
                  </p>

                  <Link
                    href={`/properties/${item.id}`}
                    className="block mt-6 text-center py-3 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition"
                  >
                    View Property
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Profile;

/* ================= SMALL COMPONENT ================= */

const StatCard = ({ title, value }) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 text-center shadow hover:shadow-lg transition">
      <h4 className="text-gray-500 text-sm">{title}</h4>
      <p className="mt-3 text-4xl font-extrabold text-gray-900 dark:text-white">
        {value}
      </p>
    </div>
  );
};
