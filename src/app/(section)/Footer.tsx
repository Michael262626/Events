"use client";  

import { FaMapMarkerAlt } from "react-icons/fa";  
import logo from "../../../public/assets/Brand_logo_2[1].png";  
import Image from "next/image";  

const Footer = () => {  
  const handleMapClick = () => {  
    const address = "Anthony Village, 34-36 Faramobi Ajike Street, Lagos";  
    const encodedAddress = encodeURIComponent(address);  
    const googleMapsUrl = `https://www.google.com/maps?q=${encodedAddress}`;  
    window.open(googleMapsUrl, "_blank");  
  };  

  return (  
    <div className="flex flex-col bg-black text-white py-6 md:py-10 justify-center items-center">  
      <div className="border p-6 md:p-12 justify-center items-center w-[90%] md:w-[85%] rounded-2xl border-gray-300 bg-gradient-to-r from-black to-gray-900">  
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 md:gap-8">  
          {/* Left Section */}  
          <div className="flex-1">  
            <h4 className="text-lg font-bold flex items-center gap-2">  
              <span className="w-6 h-1 bg-pink-500"></span>  
              Schedule  
            </h4>  
            <h2 className="text-2xl md:text-4xl font-extrabold mt-4">  
            Why you must be at
            <br />  
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">  
              ADVANCE   
              </span>  
            </h2>  
            <p className="text-gray-400 mt-4 text-sm md:text-base">  
            Knowledge money can't buy, Meet other talented minstrels, 
            Its an opportunity for a retreat, 
            LINK up with career changing professionals, 
            you will have a new mindset and spark for your talent.
             Continued Mentorship and support,
              you just might be picked for some of our sponsorship..  
            </p>  
          </div>  

          {/* Right Section */}  
          <div className="flex-1">  
            <h4 className="text-lg font-bold flex items-center gap-2">  
              <span className="w-6 h-1 bg-pink-500"></span>  
              Advance Conference Map  
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
      <div className="flex flex-col p-6 md:flex-row -mb-12 gap-2 justify-between items-center w-full bg-black text-white"> 
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
