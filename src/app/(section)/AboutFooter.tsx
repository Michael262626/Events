import React from "react";
import logo from "../../../public/assets/Brand_logo_2[1].png"
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";

const AboutFooter = () => {
  return (
<footer className="bg-gradient-to-r from-[#000000] to-[#0A0710] text-white py-12"> {/* Black to #0A0710 gradient */}
  <div className="max-w-7xl mx-auto p-20 md:flex md:justify-between md:space-x-8">
    {/* Left Section */}
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="w-8 h-1 bg-pink-500"></div>
        <h3 className="text-xl font-semibold">Contact Musicfest</h3>
      </div>

      <p className="text-5xl font-bold">contact@mail.com</p>
      <div>
        <p className="font-bold text-3xl text-gray-500">BASEMENT</p>
        <p className="text-gray-500">135 W, 46nd Street, New York, USA</p>
      </div>
      <p>+1800 123 456 789</p>
      <div className="flex space-x-4 text-gray-400">
        <FaFacebookF className="hover:text-white cursor-pointer" />
        <FaTwitter className="hover:text-white cursor-pointer" />
        <FaLinkedinIn className="hover:text-white cursor-pointer" />
        <FaInstagram className="hover:text-white cursor-pointer" />
        <FaYoutube className="hover:text-white cursor-pointer" />
      </div>
    </div>

    {/* Right Section */}
    <div className="mt-12 md:mt-0 space-y-6">
      <h3 className="text-4xl font-semibold text-pink-500">Harmonia Links</h3>
      <div>
        <h4 className="text-xl font-bold">About Us</h4>
        <ul className="mt-4 space-y-2 text-gray-400">
          <li className="hover:text-white cursor-pointer">Line Up</li>
          <li className="hover:text-white cursor-pointer">Latest News</li>
          <li className="hover:text-white cursor-pointer">Become A Sponsor</li>
          <li className="hover:text-white cursor-pointer">Venue</li>
          <li className="hover:text-white cursor-pointer">Schedule</li>
          <li className="hover:text-white cursor-pointer">Contact Us</li>
        </ul>
      </div>
    </div>
  </div>

  {/* Footer Bottom Section */}
  <div className="w-full bg-black text-white py-6 px-10 -mb-12 flex justify-between items-center">
    <h2 className="text-gray-400">@2025</h2>
    <Image
      src={logo}
      width={250}
      height={20}
      alt="Logo"
    />
    <div className="flex gap-4 text-gray-400">
      <a href="/privacy-policy" className="hover:text-white">Privacy Policy</a>
      <a href="/terms-and-conditions" className="hover:text-white">Terms & Conditions</a>
    </div>
  </div>
</footer>

  );
};

export default AboutFooter;
