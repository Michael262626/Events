"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../../../public/assets/Brand_logo_2[1].png";

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="bg-black text-white px-12 py-8 flex items-center justify-between sticky top-0 z-50">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <Image src={logo} width={150} height={20} alt="Logo" />
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-6 text-sm font-medium">
        <a
          href="/home"
          className={`${
            isActive("/home") ? "text-pink-600" : "text-white"
          } hover:text-pink-600 transition-colors`}
        >
          HOME
        </a>
        <a
          href="/about"
          className={`${
            isActive("/about") ? "text-pink-600" : "text-white"
          } hover:text-pink-600 transition-colors`}
        >
          ABOUT US
        </a>
        <a
          href="/venue"
          className={`${
            isActive("/venue") ? "text-pink-600" : "text-white"
          } hover:text-pink-600 transition-colors`}
        >
          VENUE
        </a>
        <a
          href="/contact"
          className={`${
            isActive("/contact") ? "text-pink-600" : "text-white"
          } hover:text-pink-600 transition-colors`}
        >
          CONTACT US
        </a>
      </div>

      {/* CTA Button */}
      <button className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-4 py-2 rounded flex items-center space-x-2">
        <span>Buy Ticket</span>
      </button>
    </div>
  );
};

export default Navbar;
