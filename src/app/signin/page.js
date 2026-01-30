"use client";

import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import Link from "next/link";


const SignIn = () => {
  const handleSignIn = (provider) => {
    alert(`Signing in with ${provider}`);
    // এখানে তুমি Firebase / NextAuth ব্যবহার করে implement করতে পারো
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row rounded-[1.5rem]  overflow-hidden m-[2.5%]">
      {/* IMAGE SIDE */}
      <div className="lg:w-1/2 w-full relative ">
        <Image
          src="https://images.unsplash.com/photo-1728022161206-ac10882e94f3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Sign In"
          className="object-cover w-full h-full"
          fill
        />
      </div>

      {/* FORM SIDE */}
      <div className="lg:w-1/2 w-full flex flex-col justify-center items-center p-8 bg-background1">
        <h1 className="text-3xl font-bold mb-6 text-center text-primaryText">Sign In</h1>

        <div className="flex flex-col gap-4 w-full max-w-sm">
          {/* Google */}
          <button
            onClick={() => handleSignIn("Google")}
            className="flex text-blue-500 items-center justify-center gap-3 border border-gray-300 rounded-lg py-2 hover:bg-gray-100 transition"
          >
            <FcGoogle size={24} /> Sign in with Google
          </button>

          {/* Facebook */}
          <button
            onClick={() => handleSignIn("Facebook")}
            className="flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-2 hover:bg-gray-100 transition text-blue-700"
          >
            <FaFacebookF size={24} /> Sign in with Facebook
          </button>

          {/* Twitter */}
          <button
            onClick={() => handleSignIn("Twitter")}
            className="flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-2 hover:bg-gray-100 transition text-sky-500"
          >
            <FaTwitter size={24} /> Sign in with Twitter
          </button>
        </div>

        {/* OR Separator */}
        <div className="flex items-center gap-2 my-6 w-full max-w-sm">
          <hr className="flex-1 border-gray-300" />
          <span className="text-gray-400">OR</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Email Login */}
        <form className="flex flex-col gap-4 w-full max-w-sm">
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
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-gray-500 text-sm text-center">
          Don't have an account?{" "}
          <Link href="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </Link >
        </p>
      </div>
    </div>
  );
};

export default SignIn;
