import { GiGuitarBassHead } from "react-icons/gi";  
import Countdown from "../components/CountDown";  
import { BsSpeaker } from "react-icons/bs";  
import { FaMusic } from "react-icons/fa";  

const SubBody = () => {  
  return (  
    <div className="p-5 sm:p-10 md:p-16 lg:p-24 bg-black text-white">  
      <Countdown />  

      <div className="flex flex-col lg:flex-row mt-12 lg:mt-24 justify-between">  
  <div className="mb-4 lg:mb-0">  
    <p className="text-base sm:text-3xl">Highlights</p>  
    <div className="flex flex-col text-xl sm:text-5xl font-bold mb-2">Supporting</div>  {/* Reduced size */}  
    <div className="text-3xl sm:text-4xl font-extrabold mb-4 text-purple-600">Music Practitioners</div>  {/* Slightly reduced */}  
  </div>  

  <div className="lg:w-1/3 lg:text-right">  
    <p className="mb-4 text-gray-500 text-sm sm:text-base">  {/* Smaller text size for mobile */}  
      Immerse in mesmerizing performances and interactive art at our music  
      extravaganza. Experience a festival atmosphere like no other, where  
      unforgettable moments await.  
    </p>  
  </div>  
</div>
      
      {/* Main Flex Layout */}  
      <div className="flex flex-col lg:flex-row items-center lg:justify-center gap-6 mt-10">  
        {/* Left Side: Rounded Boxes */}  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">  
          <div className="border border-[#231E24] p-6 rounded-3xl flex flex-col shadow-lg">  
            <div className="text-pink-500 mt-6 mb-4 flex justify-center">  
              <GiGuitarBassHead size={40} />  
            </div>  
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center">Career<br /> Mentorship</h3>  
          </div>  

          <div className="border border-[#231E24] p-6 rounded-3xl flex flex-col shadow-lg">  
            <div className="text-pink-500 mt-6 mb-4 flex justify-center">  
              <BsSpeaker size={40} />  
            </div>  
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center">Musicianship <br /> Leaks</h3>  
          </div>  

          <div className="border border-[#231E24] p-6 rounded-3xl flex flex-col shadow-lg">  
            <div className="text-pink-500 mt-6 mb-4 flex justify-center">  
              <FaMusic size={40} />  
            </div>  
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center">Support <br /> Artistes who<br />want to Advance.</h3>  
          </div>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default SubBody;