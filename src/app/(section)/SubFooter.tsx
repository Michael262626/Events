import { GoArrowUpRight } from "react-icons/go";  
import Image from "next/image";  
import youtube from "../../../public/assets/youtube1.png";  
import instagram from "../../../public/assets/ig.png";  

const SubFooter = () => {  
  return (  
    <div className="bg-black text-white py-8 md:py-8 flex justify-center items-center">  
      <div className="border p-6 md:p-12 justify-center items-center w-[90%] md:w-[85%] rounded-2xl border-gray-300 bg-gradient-to-r from-black to-gray-900">  
        <div className="container mx-auto text-center">  
          <div className="flex flex-col lg:flex-row justify-between items-center mb-6 md:mb-10">  
            {/* Left Section */}  
            <div className="text-left lg:w-1/2 mb-6 lg:mb-0">  
              <h2 className="text-lg md:text-xl font-semibold mb-2 flex items-center gap-2">  
                <span className="w-6 h-1 bg-pink-500"></span>  
                The Power Behind Us  
              </h2>  
              <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-3">  
                Cadence <br />  
                <span className="text-purple-500">Contributors</span>  
              </h3>  
            </div>  

            {/* Right Section */}  
            <div className="text-right lg:w-1/2">  
              <p className="text-sm md:text-gray-400 text-gray-400 max-w-lg mx-auto lg:mx-0">  
                Elevating the Music. Our valued partners <br /> and sponsors play a pivotal role in bringing our vision to <br /> life. We orchestrate an unforgettable music <br /> celebration that resonates.  
              </p>  
            </div>  
          </div>  

          {/* Logos Section */}  
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 my-2 md:my-4">  
            <Image src={youtube} width={150} alt="Youtube" />  
            <Image src={instagram} width={150} alt="Instagram" />  
          </div>  

          {/* Call to Action */}  
          <div className="flex justify-center">  
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-2 rounded-lg text-lg font-bold hover:shadow-lg transition flex items-center justify-center gap-2">  
              Become A Sponsor  
              <GoArrowUpRight />  
            </button>  
          </div>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default SubFooter;
