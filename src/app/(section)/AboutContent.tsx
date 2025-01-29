import debs from "../../../public/assets/debs.jpg";  
import Image from "next/image";  

const AboutContent = () => {  
  return (  
    <div className="bg-black text-white py-8 px-4 md:py-16 md:px-6">  
      {/* Container */}  
      <div className="grid p-6 md:p-14 grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center mb-8">  
        {/* Title Section */}  
        <div>  
          <div className="flex items-center gap-3">  
            <div className="w-6 h-1 bg-pink-500"></div>  
            <h3 className="text-lg md:text-3xl font-semibold">Behind The Advance 2025</h3>  
          </div>  
          <h1 className="text-3xl md:text-6xl font-bold text-white mt-2">  
            Creative <br /> <span className="text-pink-500">Commanders</span>  
          </h1>  
        </div>  

        {/* Description Section */}  
        <div>  
          <p className="text-right text-gray-500 md:text-3xl text-sm">  
            Unleash the rhythm with an extraordinary <br /> lineup. Get ready for a  
            musical <br /> extravaganza that will captivate your <br /> senses.  
          </p>  
        </div>  
      </div>  

      {/* Profiles Section */}  
      <div className="flex flex-wrap justify-center gap-6 md:gap-8">  
        {/* Profile 1 */}  
        {/* <div className="relative group w-52 md:w-60 h-64 md:h-80 rounded-lg overflow-hidden bg-gray-800">  
          <Image  
            src={debs} 
            alt="Profile 1"  
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"  
          />  
          <div className="absolute bottom-0 left-0 w-full bg-gray-800 bg-opacity-75 py-3 text-center">  
            <h2 className="text-white text-xl md:text-2xl font-semibold">Deborah Joseph</h2>  
            <p className="text-gray-400 text-md md:text-xl">Advance Trainer</p>  
          </div>  
        </div>           */}
      </div>  
    </div>  
  );  
};  

export default AboutContent;