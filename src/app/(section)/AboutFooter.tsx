import React from "react";  
import logo from "../../../public/assets/Brand_logo_2[1].png";  
import Image from "next/image";  
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";  

const AboutFooter = () => {  
  return (  
    <footer className="bg-gradient-to-r from-[#000000] to-[#0A0710] text-white py-12">  
      <div className="max-w-7xl mx-auto p-6 md:p-20 md:flex md:justify-between md:space-x-8">  
        {/* Left Section */}  
        <div className="space-y-4 md:space-y-6">  
          <div className="flex items-center gap-2">  
            <div className="w-8 h-1 bg-pink-500"></div>  
            <h3 className="text-lg md:text-xl font-semibold">Contact Advance</h3>  
          </div>  

          <p className="text-lg md:text-xl font-bold">advancemusicconference@gmail.com</p>  
          <div>  
            <p className="font-bold text-xl md:text-3xl text-gray-500">City of Palms</p>  
            <p className="text-gray-500">34-36, Faramobi Ajike Street, Anthony Village, Lagos</p>  
          </div>  
          <p className="text-md md:text-base">+2347064623411</p>  
          <div className="flex space-x-3 text-gray-400 text-lg md:text-xl">  
            <FaFacebookF className="hover:text-white cursor-pointer" />  
            <FaTwitter className="hover:text-white cursor-pointer" />  
            <FaLinkedinIn className="hover:text-white cursor-pointer" />  
            <FaInstagram className="hover:text-white cursor-pointer" />  
            <FaYoutube className="hover:text-white cursor-pointer" />  
          </div>  
        </div>  

        {/* Right Section */}  
        <div className="mt-6 md:mt-0 space-y-4 md:space-y-6">  
          <h3 className="text-2xl md:text-4xl font-semibold text-pink-500">Advance Links</h3>  
          <div>  
            <h4 className="text-lg md:text-xl font-bold">About Us</h4>  
            <ul className="mt-2 space-y-1 text-gray-400 text-sm md:text-base">  
              <li className="hover:text-white cursor-pointer">Line Up</li>  
              <li className="hover:text-white cursor-pointer">Latest News</li>  
              <li className="hover:text-white cursor-pointer" >Become A Sponsor</li>  
              <li className="hover:text-white cursor-pointer">Venue</li>  
              <li className="hover:text-white cursor-pointer">Schedule</li>  
              <li className="hover:text-white cursor-pointer">Contact Us</li>  
            </ul>  
          </div>  
        </div>  
      </div>  

      {/* Footer Bottom Section */}  
      <div className="flex flex-col p-8 -mb-12 md:flex-row mt-8 md:mt-12 gap-8 justify-between items-center w-full bg-black text-white">  
        <h2 className="text-gray-400">@2025</h2>  
        <Image src={logo} width={150} height={20} alt="Logo" className="md:w-[250px] md:h-auto" />  
        <div className="flex gap-4 text-gray-400">  
          <a href="/privacy-policy" className="hover:text-white text-sm md:text-base">  
            Privacy Policy  
          </a>  
          <a href="/terms-and-conditions" className="hover:text-white text-sm md:text-base">  
            Terms & Conditions  
          </a>  
        </div>  
      </div>  
    </footer>  
  );  
};  

export default AboutFooter;