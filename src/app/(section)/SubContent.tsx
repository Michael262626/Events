import Image from "next/image";
import Smj from "../../../public/assets/Smj.jpg";
import { GoDash } from "react-icons/go";

const SubContent = () => {
  return (
    <div className="bg-black text-white py-16">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 overflow-hidden">
  <h1 className="text-[120px] font-bold uppercase tracking-wide text-white whitespace-nowrap">
    <span className="inline-block animate-move-text">
      EXP<span className="text-purple-500">ERIENCE</span> / CELEBRATE
    </span>
  </h1>
</div>


        <div className="flex p-20 flex-col md:flex-row items-start justify-between mb-8">
          {/* Line-Up Section */}
          <div className="md:w-1/2 text-left">
            <h2 className="text-xl font-semibold flex items-center">
              <span className="text-pink-500 mr-2 text-6xl">
                <GoDash />
              </span>
              Line-Up
            </h2>

            <h3 className="text-6xl font-extrabold text-white mb-12">
              Rhythm <br /> <span className="text-purple-500">Revelations</span>
            </h3>
            <p className="text-gray-500">
              Unleash the rhythm with an <br /> extraordinary lineup. Get ready for a <br /> musical
              extravaganza that will captivate your senses.
            </p>
          </div>

          {/* Cards Section */}
          <div className="md:w-1/2 flex flex-col md:flex-row gap-6 mt-8 md:mt-0">
            {/* Card 1 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden w-9/12 mx-auto md:w-1/3 relative">
              <Image src={Smj} alt="Smj" className="w-full h-[330px] object-cover" />
              <div className="absolute p-2 mt-52 inset-0 flex items-center justify-center bg-opacity-50">
                <h4 className="text-l font-bold text-white">Smj <br /> [Samuel Givenson]</h4>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden w-9/12 mx-auto md:w-1/3 relative">
              <Image src={Smj} alt="Smj" className="w-full h-[330px] object-cover" />
              <div className="absolute p-2 mt-52 inset-0 flex items-center justify-center bg-opacity-50">
                <h4 className="text-l font-bold text-white">Smj <br /> [Samuel Givenson]</h4>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden w-9/12 mx-auto md:w-1/3 relative">
              <Image src={Smj} alt="Smj" className="w-full h-[330px] object-cover" />
              <div className="absolute p-2 mt-52 inset-0 flex items-center justify-center bg-opacity-50">
                <h4 className="text-l font-bold text-white">Smj <br /> [Samuel Givenson]</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 w-[75%] mx-auto"></div>
      </div>
  );
};

export default SubContent;
