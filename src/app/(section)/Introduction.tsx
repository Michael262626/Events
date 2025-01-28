import { GiGuitarBassHead } from "react-icons/gi";  
import Image from "next/image";  
import logo from "../../../public/assets/Brand_logo_2[1].png";  
import Countdown from "../components/CountDown";  
import { BsSpeaker } from "react-icons/bs";  
import { MdKeyboardVoice } from "react-icons/md";
import { FaMusic } from "react-icons/fa";  

const SubBody = () => {  
  return (  
    <div className="p-5 sm:p-10 md:p-16 lg:p-24 bg-black text-white">  
      <Countdown />  

      <div className="flex flex-col lg:flex-row mt-12 lg:mt-24 justify-between">  
  <div className="mb-4 lg:mb-0">  
    <p className="text-base sm:text-3xl">What to</p>  
    <div className="flex text-xl sm:text-5xl font-bold mb-2 gap-2">Expect From</div>  
    <div className="sm:-ml-6">
    <Image src={logo} width={80} height={25} alt="Logo" className="sm:w-[280px] sm:h-[65px]" />   
    </div>  {/* Slightly reduced */}  
  </div>  

  {/* <div className="lg:w-1/3 lg:text-right">  
    
  </div>   */}
</div>
      
      {/* Main Flex Layout */}  
      <div className="flex flex-col lg:flex-row items-center lg:justify-center gap-6 mt-10">  
        {/* Left Side: Rounded Boxes */}  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">  
          <div className="border border-[#231E24] p-6 rounded-3xl flex flex-col shadow-lg">  
            <div className="text-pink-500 mt-6 mb-4 flex justify-center">  
              <GiGuitarBassHead size={40} />  
            </div>  
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center">Career<br /> Mentorship</h3>  
          </div>  

          <div className="border border-[#231E24] p-6 rounded-3xl flex flex-col shadow-lg">  
            <div className="text-pink-500 mt-6 mb-4 flex justify-center">  
              <MdKeyboardVoice  size={40} />  
            </div>  
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center">Voice  <br /> Training </h3>  
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