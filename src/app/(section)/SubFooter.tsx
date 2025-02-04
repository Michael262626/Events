import { GoArrowUpRight } from "react-icons/go";  
import Image from "next/image";  
import youtube from "../../../public/assets/youtube1.png";  
import instagram from "../../../public/assets/ig.png";
import whatsapp from "../../../public/assets/Whatsapp-removebg-preview.png";
  

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
              DO YOU NEED <br />  
                <span className="text-purple-500"> A MANAGEMENT?
                </span>  
              </h3>  
            </div>  

            {/* Right Section */}  
            <div className="text-right lg:w-1/2">  
              <p className="text-sm md:text-gray-400 text-gray-400 max-w-lg mx-auto lg:mx-0">  
              You are an artiste, a brand, a Worshipper <br /> and you need a management to structure your brand, <br /> promote your sound and plan your projects 
              <br /> Advance talent management is probably waiting to meet you.  
              </p>  
            </div>  
          </div>  

          {/* Logos Section */}  
          <div className="flex justify-center items-center gap-4 md:gap-8 my-2 md:my-4">  
          <a
              href="https://wa.me/message/6PDU7PN4O24KK1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 md:gap-5"
          >
        <Image
            src={whatsapp}
            width={50} // Increased image size
            alt="Whatsapp"
            className="md:w-[100px] md:h-[100px]" // Bigger image on desktop
        />
      <h3 className="text-white -ml-2 text-lg md:text-2xl md:-ml-6">Whatsapp</h3>
      </a>

            <a href="https://www.instagram.com/advancetalenthq?igsh=MWh0YjVpYzl3bmF0aQ==" target="_blank" rel="noopener noreferrer">
              <Image src={instagram} width={150} alt="Instagram" className="md:w-[85%]"/>
            </a>
            {/* <a href="https://www.instagram.com/advancetalenthq?igsh=MWh0YjVpYzl3bmF0aQ==" target="_blank" rel="noopener noreferrer">
              <Image src={instagram} width={150} alt="Instagram" />
            </a> */}
          </div>  

          {/* Call to Action */}  
          <div className="flex justify-center">
          <a
              href="https://wa.me/message/6PDU7PN4O24KK1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 md:gap-5"
          >  
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-2 rounded-lg text-lg font-bold hover:shadow-lg transition flex items-center justify-center gap-2">  
              Sign Up  
              <GoArrowUpRight />  
            </button>  
            </a>
          </div>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default SubFooter;
