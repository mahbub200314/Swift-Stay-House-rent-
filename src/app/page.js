"use client"
import { useTheme } from "@/context/ThemeContext";
import { MdDarkMode } from "react-icons/md";
import { FaSun } from "react-icons/fa6";

import LandingPage from "./landingPage/page";
export default function Home() {
      const { theme, toggleTheme } = useTheme();

  return (
    <div className="relative min-h-[100vh] bg-background1" >
    <LandingPage/>
      
      
      <div className=" p-2 rounded-[50%] bg-blue-500 fixed bottom-20 right-6 cursor-pointer shadow-md z-[999]">
        <button
          onClick={toggleTheme}
          className="  flex items-center justify-center cursor-pointer"
          aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
        >
          {theme === "light" ? (
            <FaSun className="w-[3rem] h-[3rem] text-yellow-400 "/>
          ) : (
            
            <MdDarkMode className="w-[3rem] h-[3rem] text-shadow-gray-500 "/>
          )}
        </button>
      </div>

    </div>
  );
}
