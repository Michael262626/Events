"use client";  

import React, { useState } from "react";  
import Image from "next/image";  
import { usePathname, useRouter } from "next/navigation";  

import logo from "../../../public/assets/Brand_logo_2[1].png";  

const Navbar = () => {  
  const router = useRouter();  
  const pathname = usePathname();  
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // State for mobile menu  

  const handleClick = () => {  
    const isLoggedIn = Boolean(localStorage.getItem("userToken")); // Example token check  
    if (isLoggedIn) {  
      router.push("/transaction"); // Redirect to transaction page  
    } else {  
      router.push("/sign-up"); // Redirect to sign-up page  
    }  
  };  

  const isActive = (path: string) => pathname === path;  

  const toggleMobileMenu = () => {  
    setMobileMenuOpen(!isMobileMenuOpen); // Toggle mobile menu state  
  };  

  return (  
    <div className="bg-black text-white px-4 sm:px-12 py-4 flex items-center justify-between sticky top-0 z-50">  
      {/* Logo Section */}  
      <div className="flex items-center space-x-2">  
        <Image src={logo} width={80} height={15} alt="Logo" className="sm:w-[150px] sm:h-[40px]" />  
      </div>  

      {/* Navigation Links and Buy Ticket Button */}  
      <div className="hidden md:flex items-center justify-center flex-grow space-x-6 text-sm font-medium">  
        <a  
          href="/home"  
          className={`${isActive("/home") ? "text-pink-600" : "text-white"} hover:text-pink-600 transition-colors`}  
        >  
          HOME  
        </a>  
        <a  
          href="/about"  
          className={`${isActive("/about") ? "text-pink-600" : "text-white"} hover:text-pink-600 transition-colors`}  
        >  
          ABOUT US  
        </a>  
        <a  
          href="/venue"  
          className={`${isActive("/venue") ? "text-pink-600" : "text-white"} hover:text-pink-600 transition-colors`}  
        >  
          VENUE  
        </a>  
        <a  
          href="/contact"  
          className={`${isActive("/contact") ? "text-pink-600" : "text-white"} hover:text-pink-600 transition-colors`}  
        >  
          CONTACT US  
        </a>  
      </div>  

      {/* Buy Ticket Button */}  
      <div className="hidden md:flex">  
        <button  
          onClick={handleClick}  
          className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-4 py-2 rounded flex items-center space-x-2 text-base"  
        >  
          <span>Buy Ticket</span>  
        </button>  
      </div>  

      {/* Mobile Menu Button */}  
      <div className="md:hidden">  
        <button onClick={toggleMobileMenu} className="text-white focus:outline-none">  
          <svg  
            xmlns="http://www.w3.org/2000/svg"  
            fill="none"  
            viewBox="0 0 24 24"  
            strokeWidth={2}  
            stroke="currentColor"  
            className="w-6 h-6"  
          >  
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />  
          </svg>  
        </button>  
      </div>  

      {/* Mobile Navigation Links */}  
      {isMobileMenuOpen && (  
        <div className="absolute top-16 left-0 w-full bg-black text-white p-4 md:hidden">  
          <a  
            href="/home"  
            className={`block py-2 hover:text-pink-600 transition-colors ${isActive("/home") ? "text-pink-600" : ""}`}  
          >  
            HOME  
          </a>  
          <a  
            href="/about"  
            className={`block py-2 hover:text-pink-600 transition-colors ${isActive("/about") ? "text-pink-600" : ""}`}  
          >  
            ABOUT US  
          </a>  
          <a  
            href="/venue"  
            className={`block py-2 hover:text-pink-600 transition-colors ${isActive("/venue") ? "text-pink-600" : ""}`}  
          >  
            VENUE  
          </a>  
          <a  
            href="/contact"  
            className={`block py-2 hover:text-pink-600 transition-colors ${isActive("/contact") ? "text-pink-600" : ""}`}  
          >  
            CONTACT US  
          </a>  

          {/* Buy Ticket Button in Mobile Menu */}  
          <button  
            onClick={handleClick}  
            className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-4 py-2 rounded flex items-center space-x-2 text-base mt-4"  
          >  
            <span>Buy Ticket</span>  
          </button>  
        </div>  
      )}  
    </div>  
  );  
};  

export default Navbar;