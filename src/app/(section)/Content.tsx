import Ben from "../../../public/assets/Ben.jpg";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

const Content = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-[#1a001a] text-white p-20">
      {/* Left and Right Sections */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl">
        {/* Left Section */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-xl font-semibold flex items-center gap-3">
            <span className="bg-pink-500 h-0.5 w-12"></span>
            Special Guest Spotlight
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold">
            Legendary <br /> <span className="text-purple-500">Uncle Ben</span>
          </h1>
          <p className="text-gray-500">
            Witness Aiden Melisma's enchanting performance. Renowned for soulful melodies,
            his talent adds a unique dimension to Harmonia. Don't miss this captivating experience.
          </p>
          <div className="space-y-6">
            {/* Award Item */}
            <div className="flex items-start gap-4">
              <span className="text-pink-500 text-3xl">🏆</span>
              <div>
                <h3 className="font-semibold">Grammy Awards</h3>
                <p className="text-gray-500">
                  Aiden Melisma's melodies enchanted hearts, winning him the Grammy for "Best Contemporary Album."
                </p>
              </div>
            </div>
            {/* Another Award Item */}
            <div className="flex items-start gap-4">
              <span className="text-pink-500 text-3xl">🎵</span>
              <div>
                <h3 className="font-semibold">Billboard Music Awards</h3>
                <p className="text-gray-500">
                  Aiden Melisma's melodies enchanted hearts, winning him the Grammy for "Best Contemporary Album."
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
          />
        </div>
      </div>

      {/* Play Button */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 pointer-events-none">
        <div className="relative">
          <button
            className="w-20 h-20 bg-white border border-black rounded-full 
                       flex items-center justify-center hover:bg-gray-200 transition duration-300 pointer-events-auto">
            <FaPlay className="text-2xl text-black" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;
