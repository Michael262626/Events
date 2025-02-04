import { FaCalendarAlt, FaMicrophoneAlt } from "react-icons/fa";  
import { IoIosStarHalf, IoLogoGameControllerB } from "react-icons/io";  

const AboutSubContent = () => {  
  return (  
    <div className="bg-black text-white py-8 md:py-16">  
      <div className="container mx-auto p-6 md:p-12">  
        {/* Header */}  
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 md:mb-12">  
          <div className="md:w-1/2 text-left">  
            <div className="flex items-center gap-3">  
              <div className="w-6 h-1 bg-pink-500"></div>  
              <h2 className="text-xl md:text-2xl font-semibold mb-2">Benefits</h2>  
            </div>  
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">  
            What to expect <br /> from Advance <br /> <span className="text-purple-500"> Music Ministers training Conferencer</span>  
            </h3>  
          </div>  
          <div className="md:w-1/2 text-right">  
            <p className="text-gray-400 text-sm md:text-xl max-w-xl">  
              Immerse in mesmerizing performances, vibrant <br /> soundscapes,  
              and interactive art at our music <br />  
              extravaganza. Experience a festival atmosphere like <br /> no other.  
            </p>  
          </div>  
        </div>  

        {/* Cards Section */}  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">  
          {/* Card 1 */}  
          <div className="bg-black border border-gray-700 p-4 md:p-6 rounded-xl text-center">  
            <div className="flex flex-col items-center text-pink-500 text-3xl md:text-4xl mb-4">  
              <FaMicrophoneAlt />  
            </div>  
            <h4 className="text-lg md:text-xl font-bold text-white mb-2">  
              Immersive Performances  
            </h4>  
            <p className="text-gray-400 text-sm md:text-base">  
              Immerse yourself in captivating live performances that ignite the stage.  
            </p>  
          </div>  

          {/* Card 2 */}  
          <div className="bg-black border border-gray-700 p-4 md:p-6 rounded-xl text-center">  
            <div className="flex flex-col items-center text-pink-500 text-3xl md:text-4xl mb-4">  
              <FaCalendarAlt />  
            </div>  
            <h4 className="text-lg md:text-xl font-bold text-white mb-2">  
            Link up with Industry helps  
            </h4>  
            <p className="text-gray-400 text-sm md:text-base">  
              Easily plan your day with an interactive event schedule.  
            </p>  
          </div>  

          {/* Card 3 */}  
          <div className="bg-black border border-gray-700 p-4 md:p-6 rounded-xl text-center">  
            <div className="flex flex-col items-center text-pink-500 text-3xl md:text-4xl mb-4">  
              <IoIosStarHalf />  
            </div>  
            <h4 className="text-lg md:text-xl font-bold text-white mb-2">  
            knowledge money can't buy  
            </h4>  
            <p className="text-gray-400 text-sm md:text-base">  
            All Expense master class training with the legendary Uncle ben for one Minister  
            </p>  
          </div>  

          {/* Card 4 */}  
          <div className="bg-black border border-gray-700 p-4 md:p-6 rounded-xl text-center">  
            <div className="flex flex-col items-center text-pink-500 text-3xl md:text-4xl mb-4">  
              <IoLogoGameControllerB />  
            </div>  
            <h4 className="text-lg md:text-xl font-bold text-white mb-2">  
              Engaging Activities  
            </h4>  
            <p className="text-gray-400 text-sm md:text-base">  
            Free recording of worship medley [ With Video] for one Ministers
            </p>  
          </div>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default AboutSubContent; 