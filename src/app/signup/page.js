"use client";

import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

const SignUp = () => {
  const handleSocialSignup = (provider) => {
    alert(`Sign up with ${provider}`);
    // Firebase / NextAuth integration এখানে বসাবে
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row m-[2%] rounded-[1.5rem] overflow-hidden">
      {/* IMAGE SECTION */}
      <div className="relative lg:w-1/2 w-full h-[300px] lg:h-auto">
        <Image
          src="https://images.unsplash.com/photo-1724908508258-4cd5ec7a564a?q=80&w=1314&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Sign Up"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* FORM SECTION */}
      <div className="lg:w-1/2 w-full flex items-center justify-center p-8 bg-background1  ">
        <div className="w-full max-w-sm">
          <h2 className="text-3xl font-bold mb-2 text-center text-primaryText">
            Create Account
          </h2>
          <p className="text-gray-500 text-center mb-6">
            Join us and find your perfect place
          </p>

          {/* SOCIAL SIGN UP */}
          <div className="flex flex-col gap-3 mb-6">
            <button
              onClick={() => handleSocialSignup("Google")}
              className="flex border-blue-400 text-blue-500 items-center justify-center gap-3 border rounded-lg py-2 hover:bg-gray-100 transition"
            >
              <FcGoogle size={22} /> Sign up with Google
            </button>

            <button
              onClick={() => handleSocialSignup("Facebook")}
              className="flex items-center justify-center gap-3 border rounded-lg py-2 text-blue-700 hover:bg-gray-100 transition"
            >
              <FaFacebookF size={20} /> Sign up with Facebook
            </button>

            <button
              onClick={() => handleSocialSignup("Twitter")}
              className="flex items-center justify-center gap-3 border rounded-lg py-2 text-sky-500 hover:bg-gray-100 transition"
            >
              <FaTwitter size={20} /> Sign up with Twitter
            </button>
          </div>

          {/* DIVIDER */}
          <div className="flex items-center gap-2 mb-6">
            <hr className="flex-1 border-gray-300" />
            <span className="text-gray-400 text-sm">OR</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* SIGN UP FORM */}
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="border text-textSecondary border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="border text-textSecondary border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="border text-textSecondary border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="border text-textSecondary border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Sign Up
            </button>
          </form>

          {/* FOOTER */}
          <p className="mt-6 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link href="/signin" className="text-blue-600 hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
