"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../img/logo.png";
import usericon from "../img/usericon.jpg";
import { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiLoginCircleFill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const navRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);

  const handleNav = () => setShow(!show);

  useEffect(() => {
    const handleScroll = () => setIsFixed(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavItem = ({ href, label, onClick }) => {
    const isActive = pathname === href;

    return (
      <li className="relative">
        <Link
          href={href}
          onClick={onClick}
          className={`px-1 transition-colors duration-300 ${
            isActive ? "text-blue-600 font-semibold" : "hover:text-blue-500"
          }`}
        >
          {label}
        </Link>
        {isActive && (
          <motion.span
            layoutId="activeNav"
            className="absolute left-0 -bottom-1 h-[3px] w-full rounded-full bg-blue-600"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
      </li>
    );
  };

  const categories = [
    { href: "/apartment", label: "Apartment", trending: true },
    { href: "/familyHouse", label: "Family House", trending: false },
    { href: "/studio", label: "Studio", trending: true },
    { href: "/commercial", label: "Office / Commercial", trending: false },
  ];

  return (
    <nav
      ref={navRef}
      className={`${
        isFixed
          ? "fixed top-0 left-0 right-0 w-full px-[2.5%] rounded-none"
          : "sticky top-2 mx-[2.5%] rounded-[1rem]"
      } shadow-lg text-primaryText flex items-center justify-between h-[90px] z-[50] transition-all duration-300 p-[2%] bg-background1`}
    >
      {/* LOGO */}
      <Link href="/">
        <Image src={logo} width={70} alt="logo" />
      </Link>

      {/* DESKTOP MENU */}
      <ul className="hidden lg:flex gap-8 text-[1.2rem] items-center">
        <NavItem href="/Allproperties" label="Properties" />

        {/* Categories Desktop */}
        <li className="relative group">
  <span className="flex items-center gap-2 cursor-default">
    Categories
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </span>

  <ul
    className="absolute left-0 top-full mt-2 w-56 bg-background1 shadow-lg rounded-xl py-2 flex flex-col
               opacity-0 invisible group-hover:opacity-100 group-hover:visible
               translate-y-2 group-hover:translate-y-0 transition-all duration-200 z-50"
  >
    {categories.map((item) => {
      const isActive = pathname === item.href;
      return (
        <Link
          key={item.href}
          href={item.href}
          className={`relative flex items-center gap-3 px-4 py-3 transition-all duration-300 ${
            isActive
              ? "bg-blue-50 text-blue-600 font-semibold"
              : "hover:bg-gray-100"
          }`}
        >
          {isActive && (
            <span className="absolute left-0 top-0 h-full w-[4px] bg-blue-600 rounded-r" />
          )}
          {item.label}
        </Link>
      );
    })}
  </ul>
</li>


        <NavItem href="/blog" label="Blog" />
        <NavItem href="/about" label="About Us" />
        <NavItem href="/contact" label="Contact" />
      </ul>

      {/* RIGHT ICONS */}
      <div className="flex gap-4 items-center relative ">
        <Link href="signin" className="font-bold text-[1.2rem]  hover:underline text-blue-500 border-2  px-3 py-1 rounded-[1.5rem] transition hover:scale-105">
        LOGIN
        </Link>
       
        <Link href="/profile" className="rounded-full overflow-hidden">
          <Image src={usericon} alt="user" width={40} />
        </Link>

        {/* MOBILE TOGGLE */}
        {show ? (
          <IoMdClose
            onClick={handleNav}
            className="lg:hidden text-blue-600 text-3xl cursor-pointer relative z-[60]"
          />
        ) : (
          <GiHamburgerMenu
            onClick={handleNav}
            className="lg:hidden text-blue-600 text-3xl cursor-pointer relative z-[60]"
          />
        )}
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[55] flex justify-end"
          >
            <motion.ul
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 120, damping: 25 }}
              className="w-3/4 max-w-xs bg-background1 p-6 flex flex-col gap-4 shadow-2xl h-full overflow-y-auto relative z-[60]"
            >
              <NavItem
                href="/Allproperties"
                label="Properties"
                onClick={() => setShow(false)}
              />

              {/* Categories Mobile (always open) */}
              <div className="flex flex-col gap-2">
                <span className="font-semibold mb-2">Categories</span>
                {categories.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setShow(false)}
                      className={`relative flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                        isActive
                          ? "bg-blue-50 text-blue-600 font-semibold"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="categoryActive"
                          className="absolute left-0 top-0 h-full w-[4px] bg-blue-600 rounded-r"
                        />
                      )}
                      {item.label}
                      {item.trending && (
                        <span className="ml-auto text-xs bg-red-500 text-white px-2 py-0.5 rounded-full">
                          🔥
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>

              <NavItem
                href="/blog"
                label="Blog"
                onClick={() => setShow(false)}
              />
              <NavItem
                href="/about"
                label="About Us"
                onClick={() => setShow(false)}
              />
              <NavItem
                href="/contact"
                label="Contact"
                onClick={() => setShow(false)}
              />
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
