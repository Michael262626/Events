import Ben from "../../../public/assets/Ben.jpg";  
import Image from "next/image";  
import { FaPlay } from "react-icons/fa";  

const Content = () => {  
  return (  
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-[#1a001a] text-white p-5 md:p-20">  
      {/* Left and Right Sections */}  
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl">  
        {/* Left Section */}  
        <div className="md:w-1/2 space-y-4 md:space-y-6">  
          <h2 className="text-lg md:text-xl font-semibold flex items-center gap-3">  
            <span className="bg-pink-500 h-0.5 w-12"></span>  
            Special Guest Spotlight  
          </h2>  
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">  
            Legendary <br /> <span className="text-purple-500">Uncle Ben</span>  
          </h1>  
          {/* <p className="text-gray-500 text-base md:text-lg">  
            Witness Uncle ben  enchanting performance. Renowned for soulful melodies,  
            his talent adds a unique dimension in Advance 2025. Don't miss this captivating experience.  
          </p>   */}
          <div className="space-y-4 md:space-y-6">  
            {/* Award Item */}  
            <div className="flex items-start gap-3 md:gap-4">  
              <span className="text-pink-500 text-2xl md:text-3xl">🏆</span>  
              <div>  
                <h3 className="font-semibold text-base md:text-lg"> Award winning internation vocal coach</h3>  
                <p className="text-gray-500 text-sm md:text-base">  
                Uncle ben is an Award winning internation vocal coach, mentor and vocal director.
                </p>  
              </div>  
            </div>  
            {/* Another Award Item */}  
            <div className="flex items-start gap-3 md:gap-4">  
              <span className="text-pink-500 text-2xl md:text-3xl">🎵</span>  
              <div>  
                <h3 className="font-semibold text-base md:text-lg">MTN Project Fame</h3>  
                <p className="text-gray-500 text-sm md:text-base">  
                One of the very best out of africa. He built and furnished hundreds of talent on the famous MTN Project Fame. Some of whom are raising bars in their craft today.
                </p>  
              </div>  
            </div>  
          </div>  
        </div>  

        {/* Right Section */}  
        <div className="md:w-1/2 mt-8 md:mt-0">  
          <Image  
            src={Ben}  
            alt="Aiden Melisma"  
            className="w-full rounded-3xl shadow-lg"  
            layout="responsive" // Ensures the image maintains its aspect ratio  
            width={400} // Set a width for the intrinsic image size  
            height={500} // Set a height for the intrinsic image size  
          />  
        </div>  
      </div>  

      {/* Play Button */}  
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 pointer-events-none">  
        <div className="relative">  
          <button  
            className="w-16 h-16 md:w-20 md:h-20 bg-white border border-black rounded-full   
                       flex items-center justify-center hover:bg-gray-200 transition duration-300 pointer-events-auto">  
            <FaPlay className="text-xl md:text-2xl text-black" />  
          </button>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default Content;