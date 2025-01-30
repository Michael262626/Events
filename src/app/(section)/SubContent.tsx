import Image from "next/image";  
import Smj from "../../../public/assets/Smj.jpg";
import unknown from "../../../public/assets/Unknown.jpg";  
import Ben from "../../../public/assets/Eben.jpg";
import Debs from "../../../public/assets/music.jpg";  


import { GoDash } from "react-icons/go";  

const SubContent = () => {  
  return (  
    <div className="bg-black text-white py-8 md:py-16">  
      <div className="container mx-auto">  
        {/* Header Section */}  
        <div className="text-center mb-8 overflow-hidden">  
          <h1 className="text-[50px] md:text-[100px] font-bold uppercase tracking-wide text-white whitespace-nowrap">  
            <span className="inline-block animate-move-text">  
            ADVANCE YOUR CRAFT<span className="text-purple-500"> LIKE NEVER</span> BEFORE  
            </span>  
          </h1>  
        </div>  

        <div className="flex flex-col md:flex-row items-start justify-between mb-8 px-4">  
          {/* Line-Up Section */}  
          <div className="md:w-1/2 text-left">  
            <h2 className="text-lg md:text-xl font-semibold flex items-center">  
              <span className="text-pink-500 mr-2 text-4xl md:text-6xl">  
                <GoDash />  
              </span>  
              Line-Up  
            </h2>  

            <h3 className="text-3xl md:text-6xl font-extrabold text-white mb-6">  
              Advance <br /> <span className="text-purple-500">Conference Trainers</span>  
            </h3>  
            <p className="text-sm md:text-base text-gray-500">  
              Unleash the rhythm with an <br /> extraordinary lineup. Get ready for a <br /> musical  
              extravaganza that will captivate your senses.  
            </p>  
          </div>  

          {/* Cards Section */}  
          <div className="md:w-1/2 flex flex-col md:flex-row gap-4 mt-8 md:mt-0">  
            {/* Card 1 */}  

            <div className="bg-gray-800 rounded-lg overflow-hidden w-full mx-auto md:w-2/5 relative">  
              <Image src={Ben} alt="Smj" className="w-full h-[220px] md:h-[330px] object-cover" />  
              <div className="absolute p-2 mt-36 inset-0 flex items-center justify-center bg-opacity-50">  
                <h4 className="text-base font-bold text-white">Uncle Ben <br /> <span className="font-sans text-purple-500">Legendary Ben</span>
                </h4>  
              </div>  
            </div> 
            <div className="bg-gray-800 rounded-lg overflow-hidden w-full mx-auto md:w-2/5 relative">  
              <Image src={Smj} alt="Smj" className="w-full h-[220px] md:h-[330px] object-cover" />  
              <div className="absolute p-2 mt-36 inset-0 flex items-center justify-center bg-opacity-50">  
                <h4 className="text-base font-bold text-white">Smj <br /> <span className="font-sans text-purple-500">Samuel Givenson</span>
                </h4>  
              </div>  
            </div> 
            <div className="bg-gray-800 rounded-lg overflow-hidden w-full mx-auto md:w-2/5 relative">  
              <Image src={Debs} alt="Smj" className="w-full h-[220px] md:h-[330px] object-cover" />  
              <div className="absolute p-2 mt-36 inset-0 flex items-center justify-center bg-opacity-50">  
                <h4 className="text-base font-bold text-white">Debby <br /> <span className="font-sans text-purple-500">Deborah Joseph</span>
                </h4>  
              </div>  
            </div>  
            {/* Card 2 */}  
            <div className="bg-gray-800 rounded-lg overflow-hidden w-full mx-auto md:w-2/5 relative">  
              <Image src={unknown} alt="Smj" className="w-full h-[220px] md:h-[330px] object-cover" />  
              <div className="absolute p-2 mt-36 inset-0 flex items-center justify-center bg-opacity-50">  
                <h4 className="text-base font-bold text-white">Unknown <br /> <span className="font-sans text-purple-500">Guess the special guest</span> </h4>  
              </div>  
            </div>
          </div>  
        </div>  
      </div>  
      <div className="border-t border-gray-800 mt-4 md:mt-8 w-[75%] mx-auto"></div>  
    </div>  
  );  
};  

export default SubContent;