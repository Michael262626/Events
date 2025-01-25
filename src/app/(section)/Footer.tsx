"use client";  

import { FaMapMarkerAlt } from "react-icons/fa";  
import logo from "../../../public/assets/Brand_logo_2[1].png";  
import Image from "next/image";  

const Footer = () => {  
  const handleMapClick = () => {  
    // Redirects to Google Maps with a specific address  
    const address = "Anthony Village, 34-36 Faramobi Ajike Street, Lagos";  
    const encodedAddress = encodeURIComponent(address); // Encode the address for URL  
    const googleMapsUrl = `https://www.google.com/maps?q=${encodedAddress}`;  
    window.open(googleMapsUrl, "_blank");  
  };  

  return (  
    <div className="flex flex-col bg-black text-white py-8 md:py-16 justify-center items-center min-h-screen">  
      <div className="border p-6 md:p-12 justify-center items-center w-[90%] md:w-[85%] rounded-2xl border-gray-300 bg-gradient-to-r from-black to-gray-900">  
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 md:gap-8">  
          {/* Left Section */}  
          <div className="flex-1">  
            <h4 className="text-lg font-bold flex items-center gap-2">  
              <span className="w-6 h-1 bg-pink-500"></span>  
              Schedule  
            </h4>  
            <h2 className="text-3xl md:text-4xl font-extrabold mt-4">  
              Sonic <br />  
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">  
                Dispatch  
              </span>  
            </h2>  
            <p className="text-gray-400 mt-4 text-sm md:text-base">  
              Become Part of Our Harmonious Community and Receive Exclusive  
              Updates, Special Offers, and Exciting News about the Festival  
              Straight to Your Inbox.  
            </p>  
            <div className="mt-6 flex items-center border border-gray-400 rounded-lg p-2">  
              <input  
                type="email"  
                placeholder="Enter your Email"  
                className="bg-transparent text-gray-300 outline-none flex-1 px-4"  
              />  
              <button className="text-white text-lg bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-lg">  
                →  
              </button>  
            </div>  
          </div>  

          {/* Right Section */}  
          <div className="flex-1">  
            <h4 className="text-lg font-bold flex items-center gap-2">  
              <span className="w-6 h-1 bg-pink-500"></span>  
              Harmonia Wayfinder  
            </h4>  
            <div className="mt-4 bg-gray-800 rounded-2xl p-4">  
              <div className="flex flex-col items-center justify-center">  
                <FaMapMarkerAlt  
                  className="text-red-500 text-[45px] md:text-[90px] cursor-pointer hover:scale-110 transition-transform"  
                  onClick={handleMapClick}  
                />  
                <p className="text-center text-gray-600 mt-4 text-sm md:text-base">  
                  Click the location icon to search on Google Maps  
                </p>  
              </div>  
            </div>  
          </div>  
        </div>  
      </div>  
      <div className="flex flex-col p-12 md:flex-row mt-8 md:mt-12 gap-8 justify-between items-center w-full bg-black text-white">  
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
    </div>  
  );  
};  

export default Footer;