"use client"

import Image from "next/image";  
import instagram from "../../../public/assets/ig.png";  
import youtube from "../../../public/assets/youtube1.png"; 
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const images = [
  '/assets/music.jpg',
  '/assets/music2.jpg',
  '/assets/music.jpg',
  '/assets/music2.jpg',
]; 

const Body = () => {  
   const router = useRouter();  
   const [currentImage, setCurrentImage] = useState(0);
   const handleClick = () => {  
    const isLoggedIn = Boolean(localStorage.getItem("userToken")); // Example token check  
    if (isLoggedIn) {  
      router.push("/transaction"); // Redirect to transaction page  
    } else {  
      router.push("/sign-up"); // Redirect to sign-up page  
    }  
  }; 
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 6000); // Change image every 3 seconds
      return () => clearInterval(interval);
    }, []);

  return (  
    <div className="h-screen md:flex-row w-full justify-center bg-cover bg-center relative text-white flex items-center">
     <AnimatePresence mode="popLayout">
        {images.map((image, index) =>
        index === currentImage ? (
      <motion.img
          key={image}
          src={image}
          alt={`Background ${index + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.5, overlap: 0.5 } }} // Add overlap
        />
      ) : null
    )}
  </AnimatePresence>

      {/* Main Content */}  
      <div className="relative flex flex-col p-5 md:p-20">  
        {/* Hashtag */}  
        <p className="text-xl mt-8 font-bold text-left text-purple-400">#Advance Your Sound</p>  

        {/* Title */}  
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mt-4 mb-12 text-left">  
        Training Equipping Supporting <br /> Worshippers and Musicians.  
        </h1>  

        {/* Powered by Section */}  
        {/* <div className="flex space-x-4 mt-6 text-sm items-center">  
          <p className="text-gray-300 italic font-mono text-left">Powered by</p>  
          <div className="flex space-x-2">  
            <Image src={instagram} width={100} height={100} alt="Instagram" className="object-contain" />  
            <Image src={youtube} width={100} height={100} alt="Youtube" className="object-contain" />  
          </div>  
        </div>   */}

        {/* Event Details Section */}  
  <div className="border border-purple-500 bg-gradient-to-r from-[#1F1A22] to-[#040009] bg-opacity-80 p-5 md:p-10 rounded-2xl shadow-md flex flex-col md:flex-row justify-between items-center md:gap-14 gap-4 mt-12 w-full max-w-6xl mx-auto">  
  <div className="flex flex-col md:flex-row gap-4">
    <div className="flex items-center gap-3">
      <FaCalendarAlt className="text-purple-600 text-3xl md:text-4xl" />
      <div>
        <p className="text-purple-500 text-xl md:text-4xl font-bold">1st Mar 2025</p>
        <p className="font-semibold text-lg md:text-2xl">09:00am</p>
      </div>
    </div>
    <div className="flex items-center gap-3">
      <FaMapMarkerAlt className="text-purple-600 text-3xl md:text-4xl" />
      <div>
        <p className="text-purple-400 text-xl md:text-4xl font-bold">Anthony Village</p>
        <p className="font-semibold text-lg md:text-2xl">34-36, Faramobi Ajike Street, Lagos</p>
      </div>
    </div>
  </div>

  <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 rounded-lg font-bold flex items-center space-x-2 self-center md:self-auto" onClick={handleClick}>  
    <span>Get ticket</span>  
  </button>  
</div> 
      </div>  
    </div>  
  );  
};  

export default Body;