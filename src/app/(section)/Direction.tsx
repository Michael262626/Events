"use client";  

import { FaMapMarkerAlt } from "react-icons/fa";  

const Direction = () => {  
  const handleMapClick = () => {  
    const address = "Anthony Village, 34-36 Faramobi Ajike Street, Lagos";  
    const encodedAddress = encodeURIComponent(address);  
    const googleMapsUrl = `https://www.google.com/maps?q=${encodedAddress}`;  
    window.open(googleMapsUrl, "_blank");  
  };  

  return (  
    <div className="bg-black py-6 text-white flex items-center justify-center">  
      <div className="max-w-7xl w-full bg-[#181818] rounded-lg p-6 md:p-8 md:flex md:space-x-6">  
        {/* Left Section */}  
        <div className="flex-1 mb-6 md:mb-0">  
          <h1 className="text-4xl md:text-6xl font-bold mb-5">Get Direction to Advance</h1>  
          <div className="space-y-4">  
            <div className="flex flex-col md:flex-row justify-between gap-6">  
              <div className="flex flex-col md:flex-row items-start gap-8">  
                {/* Venue Section */}  
                <div>  
                  <div className="flex items-center mb-2 gap-2">  
                    <div className="w-8 h-1 bg-pink-500"></div>  
                    <h2 className="text-lg font-semibold">Venue</h2>  
                  </div>  
                  <p className="font-bold text-xl">ANTHONY VILLAGE</p>  
                  <p className="text-gray-500">34-36, Faramobi Ajike St, Lagos, Nigeria</p>  
                </div>  

                {/* Time Section */}  
                <div>  
                  <div className="flex items-center mb-2 gap-2">  
                    <div className="w-8 h-1 bg-pink-500"></div>  
                    <h2 className="text-lg font-semibold">Time</h2>  
                  </div>  
                  <p className="font-medium text-gray-500">1st March 2025</p>  
                  <p className="text-gray-500">  
                    Saturday <span className="text-gray-500"> 09:00</span>  
                  </p>  
                </div>  
              </div>  
            </div>  
          </div>  
          <button onClick={handleMapClick} className="mt-6 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-white font-bold shadow-lg md:px-6 md:py-3">  
            Get Direction →  
          </button>  
        </div>  

        {/* Right Section (Map) */}  
        <div className="relative flex-1 bg-[#242424] rounded-lg overflow-hidden">  
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">  
            <div className="flex flex-col items-center justify-center">  
              <FaMapMarkerAlt  
                className="text-red-500 text-[80px] md:text-[120px] cursor-pointer hover:scale-110 transition-transform"  
                onClick={handleMapClick}  
              />  
              <p className="text-center text-gray-600 mt-2 text-sm md:text-base">  
                Click the location icon to search on Google Maps  
              </p>  
            </div>  
          </div>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default Direction;
